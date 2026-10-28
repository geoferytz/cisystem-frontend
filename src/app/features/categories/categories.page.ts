import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { PermissionService } from '../../shared/services/permission.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { CIS_FORM_IMPORTS, FormField } from '../../shared/ui/form/form-field.component';

type Category = {
  id: string;
  name: string;
  description?: string | null;
  active: boolean;
};

type CategoriesQueryResult = {
  categories: Category[];
};

type CreateCategoryMutationResult = {
  createCategory: Category;
};

type UpdateCategoryMutationResult = {
  updateCategory: Category;
};

type DeleteCategoryMutationResult = {
  deleteCategory: boolean;
};

@Component({
  selector: 'cis-categories-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PagerComponent, CIS_FORM_IMPORTS],
  templateUrl: './categories.page.html',
  styleUrl: './categories.page.scss'
})
export class CategoriesPage {
  readonly perm = inject(PermissionService);

  loading = signal(false);
  error = signal<string | null>(null);
  categories = signal<Category[]>([]);
  pageSize = signal(10);
  pageIndex = signal(0);
  displayedCategories = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.categories().slice(start, start + size);
  });

  createOpen = signal(false);

  editingId = signal<string | null>(null);

  private readonly fb = inject(FormBuilder);

  createForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['']
  });

  editForm = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    active: [true, [Validators.required]]
  });

  readonly categoryFields: FormField[] = [
    { key: 'name', label: 'common.name', required: true },
    { key: 'description', label: 'common.description', type: 'textarea' }
  ];

  readonly editNameField: FormField = { key: 'name', label: 'common.name', bare: true, compact: true };
  readonly editDescField: FormField = { key: 'description', label: 'common.description', bare: true, compact: true };
  readonly editActiveField: FormField = {
    key: 'active',
    label: 'common.status',
    type: 'select',
    bare: true,
    compact: true,
    options: [
      { value: true, label: 'common.active' },
      { value: false, label: 'common.inactive' }
    ]
  };

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    this.load();
  }

  openCreate(): void {
    this.error.set(null);
    this.createForm.reset({ name: '', description: '' });
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const query = `query Categories { categories { id name description active } }`;

    this.gql.request<CategoriesQueryResult>(query).subscribe({
      next: (res) => {
        this.categories.set(res.categories);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load');
        this.loading.set(false);
      }
    });
  }

  create(): void {
    if (this.createForm.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const input = this.createForm.getRawValue();
    const mutation = `mutation CreateCategory($input: CreateCategoryInput!) { createCategory(input: $input) { id name description active } }`;

    this.gql.request<CreateCategoryMutationResult>(mutation, { input }).subscribe({
      next: () => {
        this.createForm.reset({ name: '', description: '' });
        this.createOpen.set(false);
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to create');
        this.loading.set(false);
      }
    });
  }

  startEdit(c: Category): void {
    this.editingId.set(c.id);
    this.editForm.reset({
      name: c.name,
      description: c.description ?? '',
      active: c.active
    });
  }

  cancelEdit(): void {
    this.editingId.set(null);
  }

  saveEdit(): void {
    const id = this.editingId();
    if (!id) return;
    if (this.editForm.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const raw = this.editForm.getRawValue();
    const input = {
      id,
      name: raw.name,
      description: raw.description,
      active: raw.active
    };

    const mutation = `mutation UpdateCategory($input: UpdateCategoryInput!) { updateCategory(input: $input) { id name description active } }`;

    this.gql.request<UpdateCategoryMutationResult>(mutation, { input }).subscribe({
      next: () => {
        this.editingId.set(null);
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to update');
        this.loading.set(false);
      }
    });
  }

  delete(c: Category): void {
    const ok = confirm(`Delete category "${c.name}"?`);
    if (!ok) return;

    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation DeleteCategory($input: DeleteCategoryInput!) { deleteCategory(input: $input) }`;

    this.gql.request<DeleteCategoryMutationResult>(mutation, { input: { id: c.id } }).subscribe({
      next: () => {
        if (this.editingId() === c.id) {
          this.editingId.set(null);
        }
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to delete');
        this.loading.set(false);
      }
    });
  }
}

