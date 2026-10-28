import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { PermissionService } from '../../shared/services/permission.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PermissionMatrixComponent } from '../../shared/ui/permission-matrix/permission-matrix.component';
import { CIS_TABLE_IMPORTS, TableColumn } from '../../shared/ui/table/data-table.component';
import { CIS_FORM_IMPORTS, FormField } from '../../shared/ui/form/form-field.component';

type AdminUser = {
  id: string;
  name: string;
  email: string;
  plainPassword?: string | null;
  active: boolean;
  roles: string[];
  branchId?: string | null;
  branchCode?: string | null;
  branchName?: string | null;
  viewBranches?: string[];
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

type UpdateUserResult = {
  updateUser: AdminUser;
};

type DeleteUserResult = {
  deleteUser: boolean;
};

type SetRolesResult = {
  setUserRoles: AdminUser;
};

type SetActiveResult = {
  setUserActive: AdminUser;
};

type DetailsTab = 'profile' | 'roles' | 'permissions' | 'edit' | 'danger';

@Component({
  selector: 'cis-users-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PermissionMatrixComponent, CIS_TABLE_IMPORTS, CIS_FORM_IMPORTS],
  templateUrl: './users.page.html',
  styleUrl: './users.page.scss'
})
export class UsersPage {
  readonly perm = inject(PermissionService);

  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);

  users = signal<AdminUser[]>([]);
  readonly userCols: TableColumn<AdminUser>[] = [
    { key: 'name', label: 'common.name' },
    { key: 'email', label: 'common.email' },
    { key: 'roles', label: 'common.roles', type: 'template' },
    { key: 'branch', label: 'common.branch', value: u => u.branchName || u.branchCode || '—' },
    { key: 'status', label: 'common.status', type: 'template' },
    { key: 'actions', label: 'common.actions', align: 'right', type: 'template' }
  ];
  roles = signal<string[]>([]);

  createOpen = signal(false);
  editOpen = signal(false);
  editingUser = signal<AdminUser | null>(null);
  deleteOpen = signal(false);
  pendingDelete = signal<AdminUser | null>(null);

  profileOpen = signal(false);
  profileUser = signal<AdminUser | null>(null);

  detailsOpen = signal(false);
  detailsUser = signal<AdminUser | null>(null);
  detailsTab = signal<DetailsTab>('profile');
  readonly detailsTabs: Array<{ key: DetailsTab; label: string }> = [
    { key: 'profile', label: 'users.details.tabProfile' },
    { key: 'roles', label: 'users.details.tabRoles' },
    { key: 'permissions', label: 'users.details.tabPermissions' },
    { key: 'edit', label: 'users.details.tabEdit' },
    { key: 'danger', label: 'users.details.tabDanger' }
  ];
  /** Selected roles inside the Assign Roles tab. */
  roleSel = signal<Set<string>>(new Set());

  private readonly fb = inject(FormBuilder);
  readonly branchCtx = inject(BranchContext);

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['STOREKEEPER', [Validators.required]],
    branchId: [null as string | null]
  });

  editForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [''],
    role: ['STOREKEEPER', [Validators.required]],
    branchId: [null as string | null]
  });

  /** Extra branches the user may view read-only (excludes their home branch). */
  viewBranchesSel = signal<Set<string>>(new Set());

  private readonly roleOptions = () => this.roles().map(r => ({ value: r, label: r }));
  private readonly branchOptions = () => [
    { value: null as string | null, label: 'common.allBranches' },
    ...this.branchCtx.options().map(b => ({ value: b.id as string | null, label: `${b.name} (${b.code})` }))
  ];

  readonly createFields: FormField[] = [
    { key: 'name', label: 'common.name', required: true },
    { key: 'email', label: 'common.email', type: 'email', required: true },
    { key: 'password', label: 'common.password', type: 'password', required: true },
    { key: 'role', label: 'common.role', type: 'select', options: this.roleOptions },
    { key: 'branchId', label: 'common.branch', type: 'select', options: this.branchOptions },
    { key: 'viewBranches', label: 'users.viewBranches', type: 'template', hide: () => !this.form.value.branchId }
  ];

  readonly editFields: FormField[] = [
    { key: 'name', label: 'common.name', required: true },
    { key: 'email', label: 'common.email', type: 'email', required: true },
    { key: 'password', label: 'common.newPassword', type: 'password', placeholder: '••••••' },
    { key: 'role', label: 'common.role', type: 'select', options: this.roleOptions },
    { key: 'branchId', label: 'common.branch', type: 'select', options: this.branchOptions },
    { key: 'viewBranches', label: 'users.viewBranches', type: 'template', hide: () => !this.editForm.value.branchId }
  ];

  toggleViewBranch(code: string): void {
    const next = new Set(this.viewBranchesSel());
    if (next.has(code)) next.delete(code); else next.add(code);
    this.viewBranchesSel.set(next);
  }

  /** Branch options minus the chosen home branch — home already grants full access. */
  viewBranchOptions(formBranchId: string | null | undefined) {
    const home = this.branchCtx.options().find(b => b.id === formBranchId)?.code;
    return this.branchCtx.options().filter(b => b.code !== home);
  }

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    this.load();
  }

  openCreate(): void {
    this.success.set(null);
    this.error.set(null);
    this.viewBranchesSel.set(new Set());
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
    this.form.reset({ name: '', email: '', password: '', role: 'STOREKEEPER' });
  }

  openProfile(user: AdminUser): void {
    this.profileUser.set(user);
    this.profileOpen.set(true);
  }

  closeProfile(): void {
    this.profileOpen.set(false);
    this.profileUser.set(null);
  }

  openDetails(user: AdminUser): void {
    this.detailsUser.set(user);
    this.detailsTab.set('profile');
    this.roleSel.set(new Set(user.roles ?? []));
    this.error.set(null);
    this.success.set(null);
    // Prepare the shared edit form so the Edit tab is ready.
    this.editForm.reset({
      name: user.name,
      email: user.email,
      password: '',
      role: user.roles[0] ?? 'STOREKEEPER',
      branchId: user.branchId ?? null
    });
    this.editingUser.set(user);
    this.viewBranchesSel.set(new Set(user.viewBranches ?? []));
    this.detailsOpen.set(true);
  }

  closeDetails(): void {
    this.detailsOpen.set(false);
    this.detailsUser.set(null);
  }

  toggleRole(name: string): void {
    const next = new Set(this.roleSel());
    if (next.has(name)) next.delete(name); else next.add(name);
    this.roleSel.set(next);
  }

  saveRoles(): void {
    const user = this.detailsUser();
    if (!user) return;
    if (this.roleSel().size === 0) {
      this.error.set('Select at least one role');
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    const mutation = `mutation SetUserRoles($input: SetUserRolesInput!) {
      setUserRoles(input: $input) { id name email active roles branchId branchCode branchName viewBranches }
    }`;
    this.gql.request<SetRolesResult>(mutation, {
      input: { userId: user.id, roles: [...this.roleSel()] }
    }).subscribe({
      next: res => {
        const updated = res.setUserRoles;
        this.detailsUser.set({ ...user, roles: updated.roles });
        this.users.set(this.users().map(u => u.id === user.id ? { ...u, roles: updated.roles } : u));
        this.success.set('Roles updated — the user gets them on next login/refresh');
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to update roles');
        this.loading.set(false);
      }
    });
  }

  toggleActive(): void {
    const user = this.detailsUser();
    if (!user) return;
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    const mutation = `mutation SetUserActive($input: SetUserActiveInput!) {
      setUserActive(input: $input) { id name email active roles branchId branchCode branchName viewBranches }
    }`;
    this.gql.request<SetActiveResult>(mutation, {
      input: { userId: user.id, active: !user.active }
    }).subscribe({
      next: res => {
        const updated = res.setUserActive;
        this.detailsUser.set({ ...user, active: updated.active });
        this.users.set(this.users().map(u => u.id === user.id ? { ...u, active: updated.active } : u));
        this.success.set(updated.active ? 'User enabled' : 'User disabled');
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to update status');
        this.loading.set(false);
      }
    });
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    const qUsers = `query { users { id name email plainPassword active roles branchId branchCode branchName viewBranches } }`;
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
      next: (res) => this.roles.set(res.roles),
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

    const mutation = `mutation CreateUser($input: CreateUserInput!) { createUser(input: $input) { id name email plainPassword active roles branchId branchCode branchName viewBranches } }`;

    this.gql
      .request<CreateUserResult>(mutation, {
        input: {
          name: raw.name,
          email: raw.email,
          password: raw.password,
          roles,
          branchId: raw.branchId || null,
          viewBranches: [...this.viewBranchesSel()]
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

  openEdit(user: AdminUser): void {
    this.editingUser.set(user);
    this.editForm.reset({
      name: user.name,
      email: user.email,
      password: '',
      role: user.roles[0] ?? 'STOREKEEPER',
      branchId: user.branchId ?? null
    });
    this.viewBranchesSel.set(new Set(user.viewBranches ?? []));
    this.error.set(null);
    this.success.set(null);
    this.editOpen.set(true);
  }

  closeEdit(): void {
    this.editOpen.set(false);
    this.editingUser.set(null);
  }

  saveEdit(): void {
    const user = this.editingUser();
    if (!user || this.editForm.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const raw = this.editForm.getRawValue();
    const role = String(raw.role || '').trim();
    const roles = role ? [role] : [];
    const password = (raw.password || '').trim();

    const mutation = `mutation UpdateUser($input: UpdateUserInput!) { updateUser(input: $input) { id name email plainPassword active roles branchId branchCode branchName viewBranches } }`;

    this.gql
      .request<UpdateUserResult>(mutation, {
        input: {
          userId: user.id,
          name: raw.name,
          email: raw.email,
          password: password || null,
          roles,
          branchId: raw.branchId || null,
          viewBranches: [...this.viewBranchesSel()]
        }
      })
      .subscribe({
        next: res => {
          const updated = res.updateUser;
          if (this.detailsOpen() && this.detailsUser()?.id === user.id) {
            this.detailsUser.set({ ...user, ...updated });
            this.success.set('User updated');
          } else {
            this.closeEdit();
            this.success.set('User updated');
          }
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to update user');
          this.loading.set(false);
        }
      });
  }

  openDelete(user: AdminUser): void {
    this.pendingDelete.set(user);
    this.deleteOpen.set(true);
  }

  closeDelete(): void {
    this.deleteOpen.set(false);
    this.pendingDelete.set(null);
  }

  confirmDelete(): void {
    const user = this.pendingDelete();
    if (!user) return;

    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation DeleteUser($userId: ID!) { deleteUser(userId: $userId) }`;

    this.gql
      .request<DeleteUserResult>(mutation, { userId: user.id })
      .subscribe({
        next: () => {
          this.closeDelete();
          this.closeDetails();
          this.success.set('User deleted');
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to delete user');
          this.loading.set(false);
        }
      });
  }
}
