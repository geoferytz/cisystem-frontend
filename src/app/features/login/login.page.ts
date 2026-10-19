import { Component, DestroyRef, ElementRef, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslationService } from '../../core/i18n/translation.service';

type LoginMutationResult = {
  login: {
    accessToken: string;
  };
};

const LOGIN_MUTATION = `mutation Login($input: LoginInput!) { login(input: $input) { accessToken } }`;

@Component({
  selector: 'cis-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage {
  loading = signal(false);
  error = signal<string | null>(null);
  showPassword = signal(false);
  sessionExpired = signal(false);
  lockedEmail = signal<string | null>(null);
  capsLock = signal(false);
  showForgotHint = signal(false);
  submitted = signal(false);

  private readonly fb = inject(FormBuilder);
  private readonly translationService = inject(TranslationService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly emailInput = viewChild<ElementRef<HTMLInputElement>>('emailInput');
  private readonly passwordInput = viewChild<ElementRef<HTMLInputElement>>('passwordInput');

  currentLang = computed(() => this.translationService.currentLang());

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  constructor(
    private readonly gql: GraphqlService,
    private readonly auth: AuthService,
    private readonly router: Router,
    route: ActivatedRoute
  ) {
    // Already signed in (e.g. opened /login in a new tab): go straight to the app.
    if (this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/home');
    }

    this.sessionExpired.set(route.snapshot.queryParamMap.get('session') === 'expired');
    const email = this.sessionExpired() ? this.auth.lastEmail() : null;
    if (email) {
      this.lockedEmail.set(email);
      this.form.controls.email.setValue(email);
      this.form.controls.email.disable();
    }

    // Any edit clears the previous server error.
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      if (this.error()) this.error.set(null);
    });

    afterNextRender(() => this.focusFirstField());
  }

  /** Show a field error once the user has left the field or tried to submit. */
  showError(name: 'email' | 'password'): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || this.submitted());
  }

  checkCapsLock(event: KeyboardEvent): void {
    if (typeof event.getModifierState === 'function') {
      this.capsLock.set(event.getModifierState('CapsLock'));
    }
  }

  useDifferentAccount(): void {
    this.lockedEmail.set(null);
    this.sessionExpired.set(false);
    this.submitted.set(false);
    this.form.controls.email.enable();
    this.form.controls.email.setValue('');
    this.form.controls.email.markAsUntouched();
    setTimeout(() => this.emailInput()?.nativeElement.focus());
  }

  togglePasswordVisibility(): void {
    this.showPassword.update((v) => !v);
  }

  setLanguage(lang: 'en' | 'sw'): void {
    this.translationService.setLanguage(lang);
  }

  onSubmit(): void {
    if (this.loading()) return;

    this.submitted.set(true);
    if (this.form.invalid) {
      this.focusFirstField();
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const { email, password, remember } = this.form.getRawValue();
    const normalizedEmail = String(email ?? '').trim().toLowerCase();

    this.gql
      .request<LoginMutationResult>(LOGIN_MUTATION, { input: { email: normalizedEmail, password } })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.auth.setLastEmail(normalizedEmail);
          this.auth.setAccessToken(res.login.accessToken, !!remember);
          this.loading.set(false);
          this.router.navigateByUrl('/home');
        },
        error: (e: unknown) => {
          this.loading.set(false);
          this.error.set(this.toErrorKey(e));
          this.passwordInput()?.nativeElement.select();
        }
      });
  }

  private focusFirstField(): void {
    const email = this.emailInput()?.nativeElement;
    const target = email && (this.form.controls.email.invalid || !this.form.controls.email.value) ? email : this.passwordInput()?.nativeElement;
    target?.focus();
  }

  /** Map backend/network failures to a translated, user-friendly message key. */
  private toErrorKey(e: unknown): string {
    if (e instanceof HttpErrorResponse) {
      return e.status === 0 || e.status >= 500 ? 'login.errNetwork' : 'login.errGeneric';
    }
    const message = e instanceof Error ? e.message : '';
    if (/invalid credentials/i.test(message)) return 'login.errInvalid';
    if (/inactive/i.test(message)) return 'login.errInactive';
    return message || 'login.errGeneric';
  }
}
