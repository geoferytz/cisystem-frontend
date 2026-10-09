import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  private readonly fb = inject(FormBuilder);
  private readonly translationService = inject(TranslationService);

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
    this.sessionExpired.set(route.snapshot.queryParamMap.get('session') === 'expired');
    const email = this.sessionExpired() ? this.auth.lastEmail() : null;
    if (email) {
      this.lockedEmail.set(email);
      this.form.controls.email.setValue(email);
      this.form.controls.email.disable();
    }
  }

  useDifferentAccount(): void {
    this.lockedEmail.set(null);
    this.form.controls.email.enable();
    this.form.controls.email.setValue('');
    this.form.controls.email.markAsUntouched();
  }

  togglePasswordVisibility(): void {
    this.showPassword.update((v) => !v);
  }

  setLanguage(lang: 'en' | 'sw'): void {
    this.translationService.setLanguage(lang);
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const { email, password, remember } = this.form.getRawValue();

    const query = `mutation Login($input: LoginInput!) { login(input: $input) { accessToken } }`;

    this.gql
      .request<LoginMutationResult>(query, { input: { email, password } })
      .subscribe({
        next: (res) => {
          this.auth.setLastEmail(String(email ?? ''));
          this.auth.setAccessToken(res.login.accessToken, !!remember);
          this.router.navigateByUrl('/home');
          this.loading.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Login failed');
          this.loading.set(false);
        }
      });
  }
}

