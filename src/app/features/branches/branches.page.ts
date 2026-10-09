import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { PermissionService } from '../../shared/services/permission.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PagerComponent } from '../../shared/ui/pager/pager.component';

type Branch = {
  id: string;
  code: string;
  name: string;
  address?: string | null;
  phone?: string | null;
  active: boolean;
  main: boolean;
};

type BranchesQueryResult = {
  branches: Branch[];
};

type BranchMutationResult = {
  createBranch?: Branch;
  updateBranch?: Branch;
  deleteBranch?: boolean;
};

@Component({
  selector: 'cis-branches-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PagerComponent],
  templateUrl: './branches.page.html',
  styleUrl: './branches.page.scss'
})
export class BranchesPage {
  readonly perm = inject(PermissionService);

  loading = signal(false);
  error = signal<string | null>(null);
  branches = signal<Branch[]>([]);
  pageSize = signal(10);
  pageIndex = signal(0);
  displayedBranches = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.branches().slice(start, start + size);
  });

  modalOpen = signal(false);
  editingId = signal<string | null>(null);

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    code: ['', [Validators.required]],
    name: ['', [Validators.required]],
    address: [''],
    phone: [''],
    active: [true, [Validators.required]]
  });

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    this.load();
  }

  openCreate(): void {
    this.error.set(null);
    this.editingId.set(null);
    this.form.reset({ code: '', name: '', address: '', phone: '', active: true });
    this.form.controls.code.enable();
    this.modalOpen.set(true);
  }

  openEdit(b: Branch): void {
    this.error.set(null);
    this.editingId.set(b.id);
    this.form.reset({
      code: b.code,
      name: b.name,
      address: b.address ?? '',
      phone: b.phone ?? '',
      active: b.active
    });
    if (b.main) {
      this.form.controls.code.disable();
    } else {
      this.form.controls.code.enable();
    }
    this.modalOpen.set(true);
  }

  closeModal(): void {
    this.modalOpen.set(false);
    this.editingId.set(null);
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const query = `query Branches { branches { id code name address phone active main } }`;

    this.gql.request<BranchesQueryResult>(query).subscribe({
      next: (res) => {
        this.branches.set(res.branches);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load');
        this.loading.set(false);
      }
    });
  }

  save(): void {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const raw = this.form.getRawValue();
    const id = this.editingId();

    const mutation = id
      ? `mutation UpdateBranch($input: UpdateBranchInput!) { updateBranch(input: $input) { id code name address phone active main } }`
      : `mutation CreateBranch($input: CreateBranchInput!) { createBranch(input: $input) { id code name address phone active main } }`;

    const input = id
      ? { id, code: raw.code, name: raw.name, address: raw.address, phone: raw.phone, active: raw.active }
      : { code: raw.code, name: raw.name, address: raw.address, phone: raw.phone };

    this.gql.request<BranchMutationResult>(mutation, { input }).subscribe({
      next: () => {
        this.closeModal();
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to save');
        this.loading.set(false);
      }
    });
  }

  delete(b: Branch): void {
    if (b.main) return;
    const ok = confirm(`Delete branch "${b.name}"?`);
    if (!ok) return;

    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation DeleteBranch($input: DeleteBranchInput!) { deleteBranch(input: $input) }`;

    this.gql.request<BranchMutationResult>(mutation, { input: { id: b.id } }).subscribe({
      next: () => this.load(),
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to delete');
        this.loading.set(false);
      }
    });
  }
}
