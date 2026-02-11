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

type UserPermission = {
  module: string;
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
};

type UserPermissionsQueryResult = {
  userPermissions: UserPermission[];
};

type SetUserPermissionsMutationResult = {
  setUserPermissions: UserPermission[];
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

  createOpen = signal(false);
  permissionsOpen = signal(false);

  selectedUserId = signal<string>('');
  permissionsLoading = signal(false);
  permissions = signal<UserPermission[]>([]);

  readonly modules: Array<{ key: string; label: string }> = [
    { key: 'PRODUCTS', label: 'Products' },
    { key: 'CATEGORIES', label: 'Categories' },
    { key: 'INVENTORY', label: 'Inventory' },
    { key: 'STOCK_MOVEMENTS', label: 'Stock Movements' },
    { key: 'SALES', label: 'Sales' },
    { key: 'MY_SALES', label: 'My Sales' },
    { key: 'PURCHASING', label: 'Purchasing' },
    { key: 'REPORTS', label: 'Reports' },
    { key: 'USERS_ROLES', label: 'Users & Roles' }
  ];

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['STOREKEEPER', [Validators.required]]
  });

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  openCreate(): void {
    this.success.set(null);
    this.error.set(null);
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
    this.form.reset({ name: '', email: '', password: '', role: 'STOREKEEPER' });
  }

  openPermissions(userId: string): void {
    this.permissionsOpen.set(true);
    this.onSelectUserForPermissions(userId);
  }

  closePermissions(): void {
    this.permissionsOpen.set(false);
    this.selectedUserId.set('');
    this.permissions.set([]);
  }

  private defaultPermissions(): UserPermission[] {
    return this.modules.map((m) => ({
      module: m.key,
      canView: false,
      canCreate: false,
      canEdit: false,
      canDelete: false
    }));
  }

  onSelectUserForPermissions(userId: string): void {
    this.selectedUserId.set(String(userId || ''));
    this.permissions.set(this.defaultPermissions());
    if (!this.selectedUserId()) return;
    this.loadUserPermissions();
  }

  loadUserPermissions(): void {
    const userId = this.selectedUserId();
    if (!userId) return;

    this.permissionsLoading.set(true);
    this.error.set(null);
    this.success.set(null);

    const q = `query UserPermissions($userId: ID!) { userPermissions(userId: $userId) { module canView canCreate canEdit canDelete } }`;
    this.gql.request<UserPermissionsQueryResult>(q, { userId }).subscribe({
      next: (res) => {
        const incoming = res.userPermissions ?? [];
        const map = new Map(incoming.map((p) => [String(p.module).toUpperCase(), p] as const));
        this.permissions.set(
          this.modules.map((m) => {
            const p = map.get(m.key);
            return {
              module: m.key,
              canView: Boolean(p?.canView),
              canCreate: Boolean(p?.canCreate),
              canEdit: Boolean(p?.canEdit),
              canDelete: Boolean(p?.canDelete)
            };
          })
        );
        this.permissionsLoading.set(false);
      },
      error: (e: unknown) => {
        this.permissions.set(this.defaultPermissions());
        this.error.set(e instanceof Error ? e.message : 'Failed to load permissions');
        this.permissionsLoading.set(false);
      }
    });
  }

  togglePermission(module: string, key: 'canView' | 'canCreate' | 'canEdit' | 'canDelete'): void {
    const mod = String(module).toUpperCase();
    this.permissions.set(
      this.permissions().map((p) => {
        if (String(p.module).toUpperCase() !== mod) return p;
        return {
          ...p,
          [key]: !p[key]
        } as UserPermission;
      })
    );
  }

  savePermissions(): void {
    const userId = this.selectedUserId();
    if (!userId) return;

    this.permissionsLoading.set(true);
    this.error.set(null);
    this.success.set(null);

    const mutation = `mutation SetUserPermissions($input: SetUserPermissionsInput!) {
      setUserPermissions(input: $input) { module canView canCreate canEdit canDelete }
    }`;

    this.gql
      .request<SetUserPermissionsMutationResult>(mutation, {
        input: {
          userId,
          permissions: this.permissions().map((p) => ({
            module: p.module,
            canView: p.canView,
            canCreate: p.canCreate,
            canEdit: p.canEdit,
            canDelete: p.canDelete
          }))
        }
      })
      .subscribe({
        next: () => {
          this.success.set('Permissions updated');
          this.permissionsLoading.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to update permissions');
          this.permissionsLoading.set(false);
        }
      });
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
          this.closeCreate();
          this.success.set('User created');
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to create user');
          this.loading.set(false);
        }
      });
  }
}
