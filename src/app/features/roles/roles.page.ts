import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { PermissionService } from '../../shared/services/permission.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PermissionMatrixComponent } from '../../shared/ui/permission-matrix/permission-matrix.component';
import { CIS_TABLE_IMPORTS, TableColumn } from '../../shared/ui/table/data-table.component';
import { CIS_FORM_IMPORTS, FormField } from '../../shared/ui/form/form-field.component';

type RoleInfo = {
  id: string;
  name: string;
  description?: string | null;
  userCount: number;
  moduleCount: number;
};

type RoleListResult = { roleList: RoleInfo[] };
type CreateRoleResult = { createRole: RoleInfo };
type UpdateRoleResult = { updateRole: RoleInfo };
type DeleteRoleResult = { deleteRole: boolean };

@Component({
  selector: 'cis-roles-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PermissionMatrixComponent, CIS_TABLE_IMPORTS, CIS_FORM_IMPORTS],
  templateUrl: './roles.page.html'
})
export class RolesPage {
  readonly perm = inject(PermissionService);

  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);

  roles = signal<RoleInfo[]>([]);
  readonly roleCols: TableColumn<RoleInfo>[] = [
    { key: 'name', label: 'common.role', type: 'template' },
    { key: 'description', label: 'roles.description', value: r => r.description || '—' },
    { key: 'userCount', label: 'roles.users' },
    { key: 'moduleCount', label: 'roles.modules' },
    { key: 'actions', label: 'common.actions', align: 'right', type: 'template' }
  ];

  createOpen = signal(false);
  editOpen = signal(false);
  editingRole = signal<RoleInfo | null>(null);
  deleteOpen = signal(false);
  pendingDelete = signal<RoleInfo | null>(null);
  permsOpen = signal(false);
  permsRole = signal<RoleInfo | null>(null);

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['']
  });

  editForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['']
  });

  readonly roleFields: FormField[] = [
    { key: 'name', label: 'roles.name', required: true, placeholder: 'SUPERVISOR', inputClass: 'uppercase' },
    { key: 'description', label: 'roles.description', placeholder: 'roles.descriptionHelp' }
  ];

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    this.gql.request<RoleListResult>(`query { roleList { id name description userCount moduleCount } }`).subscribe({
      next: res => {
        this.roles.set(res.roleList ?? []);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load roles');
        this.loading.set(false);
      }
    });
  }

  openCreate(): void {
    this.error.set(null);
    this.success.set(null);
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
    this.form.reset({ name: '', description: '' });
  }

  create(): void {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.error.set(null);

    const raw = this.form.getRawValue();
    const mutation = `mutation CreateRole($input: CreateRoleInput!) {
      createRole(input: $input) { id name description userCount moduleCount }
    }`;
    this.gql.request<CreateRoleResult>(mutation, {
      input: { name: raw.name, description: raw.description || null }
    }).subscribe({
      next: () => {
        this.closeCreate();
        this.success.set('Role created — open Permissions to configure what it can do');
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to create role');
        this.loading.set(false);
      }
    });
  }

  openEdit(role: RoleInfo): void {
    this.editingRole.set(role);
    this.editForm.reset({ name: role.name, description: role.description ?? '' });
    if (role.name === 'ADMIN') this.editForm.controls.name.disable();
    else this.editForm.controls.name.enable();
    this.error.set(null);
    this.success.set(null);
    this.editOpen.set(true);
  }

  closeEdit(): void {
    this.editOpen.set(false);
    this.editingRole.set(null);
  }

  saveEdit(): void {
    const role = this.editingRole();
    if (!role || this.editForm.invalid) return;
    this.loading.set(true);
    this.error.set(null);

    const raw = this.editForm.getRawValue();
    const mutation = `mutation UpdateRole($input: UpdateRoleInput!) {
      updateRole(input: $input) { id name description userCount moduleCount }
    }`;
    this.gql.request<UpdateRoleResult>(mutation, {
      input: { roleId: role.id, name: raw.name, description: raw.description ?? '' }
    }).subscribe({
      next: () => {
        this.closeEdit();
        this.success.set('Role updated');
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to update role');
        this.loading.set(false);
      }
    });
  }

  openDelete(role: RoleInfo): void {
    this.pendingDelete.set(role);
    this.deleteOpen.set(true);
  }

  closeDelete(): void {
    this.deleteOpen.set(false);
    this.pendingDelete.set(null);
  }

  confirmDelete(): void {
    const role = this.pendingDelete();
    if (!role) return;
    this.loading.set(true);
    this.error.set(null);

    this.gql.request<DeleteRoleResult>(`mutation DeleteRole($roleId: ID!) { deleteRole(roleId: $roleId) }`, { roleId: role.id }).subscribe({
      next: () => {
        this.closeDelete();
        this.success.set('Role deleted');
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to delete role');
        this.loading.set(false);
      }
    });
  }

  openPerms(role: RoleInfo): void {
    this.permsRole.set(role);
    this.permsOpen.set(true);
  }

  closePerms(): void {
    this.permsOpen.set(false);
    this.permsRole.set(null);
    this.load();
  }
}
