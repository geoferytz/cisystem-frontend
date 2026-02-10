import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';

type AdminUser = {
  id: string;
  name: string;
  email: string;
  active: boolean;
  roles: string[];
};

type UsersQueryResult = {
  users: AdminUser[];
};

type RolesQueryResult = {
  roles: string[];
};

type CreateUserResult = {
  createUser: AdminUser;
};

type ResetUserPasswordResult = {
  resetUserPassword: AdminUser;
};

@Component({
  selector: 'cis-users-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users.page.html',
  styleUrl: './users.page.scss'
})
export class UsersPage {
  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);

  users = signal<AdminUser[]>([]);
  roles = signal<string[]>([]);

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['STOREKEEPER', [Validators.required]]
  });

  resetForm = this.fb.group({
    userId: ['', [Validators.required]],
    newPassword: ['', [Validators.required]]
  });

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    const qUsers = `query { users { id name email active roles } }`;
    const qRoles = `query { roles }`;

    this.gql.request<UsersQueryResult>(qUsers).subscribe({
      next: (res) => {
        this.users.set(res.users);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load users');
        this.loading.set(false);
      }
    });

    this.gql.request<RolesQueryResult>(qRoles).subscribe({
      next: (res) => this.roles.set(res.roles.filter((r) => r === 'ADMIN' || r === 'STOREKEEPER')),
      error: () => {}
    });
  }

  create(): void {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const raw = this.form.getRawValue();
    const role = String(raw.role || '').trim();
    const roles = role ? [role] : [];

    const mutation = `mutation CreateUser($input: CreateUserInput!) { createUser(input: $input) { id name email active roles } }`;

    this.gql
      .request<CreateUserResult>(mutation, {
        input: {
          name: raw.name,
          email: raw.email,
          password: raw.password,
          roles
        }
      })
      .subscribe({
        next: () => {
          this.form.reset({ name: '', email: '', password: '', role: 'STOREKEEPER' });
          this.success.set('User created');
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to create user');
          this.loading.set(false);
        }
      });
  }

  resetPassword(): void {
    if (this.resetForm.invalid) return;

    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    const raw = this.resetForm.getRawValue();

    const mutation = `mutation ResetUserPassword($input: ResetUserPasswordInput!) {
      resetUserPassword(input: $input) { id name email active roles }
    }`;

    this.gql
      .request<ResetUserPasswordResult>(mutation, {
        input: {
          userId: raw.userId,
          newPassword: raw.newPassword
        }
      })
      .subscribe({
        next: () => {
          this.resetForm.reset({ userId: '', newPassword: '' });
          this.success.set('Password updated');
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to update password');
          this.loading.set(false);
        }
      });
  }
}
