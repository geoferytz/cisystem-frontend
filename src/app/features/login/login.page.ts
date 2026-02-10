import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { GraphqlService } from '../../core/graphql/graphql.service';

type LoginMutationResult = {
  login: {
    accessToken: string;
  };
};

@Component({
  selector: 'cis-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage {
  loading = signal(false);
  error = signal<string | null>(null);
  showPassword = signal(false);

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  constructor(
    private readonly gql: GraphqlService,
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  togglePasswordVisibility(): void {
    this.showPassword.update((v) => !v);
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const { email, password } = this.form.getRawValue();

    const query = `mutation Login($input: LoginInput!) { login(input: $input) { accessToken } }`;

    this.gql
      .request<LoginMutationResult>(query, { input: { email, password } })
      .subscribe({
        next: (res) => {
          this.auth.setAccessToken(res.login.accessToken);
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
