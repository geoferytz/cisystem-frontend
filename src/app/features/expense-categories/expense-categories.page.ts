import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';

type ExpenseCategory = {
  id: string;
  name: string;
  description?: string | null;
  active: boolean;
};

type ExpenseCategoriesQueryResult = {
  expenseCategories: ExpenseCategory[];
};

type CreateExpenseCategoryMutationResult = {
  createExpenseCategory: ExpenseCategory;
};

type UpdateExpenseCategoryMutationResult = {
  updateExpenseCategory: ExpenseCategory;
};

type DeleteExpenseCategoryMutationResult = {
  deleteExpenseCategory: boolean;
};

@Component({
  selector: 'cis-expense-categories-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-categories.page.html',
  styleUrl: './expense-categories.page.scss'
})
export class ExpenseCategoriesPage {
  loading = signal(false);
  error = signal<string | null>(null);

  categories = signal<ExpenseCategory[]>([]);

  dialogOpen = signal(false);
  editingId = signal<string | null>(null);

  confirmDeleteOpen = signal(false);
  pendingDeleteCategoryId = signal<string | null>(null);

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    active: [true as boolean, [Validators.required]]
  });

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const query = `query ExpenseCategories($filter: ExpenseCategoryFilter) {
      expenseCategories(filter: $filter) { id name description active }
    }`;

    this.gql.request<ExpenseCategoriesQueryResult>(query, { filter: null }).subscribe({
      next: (res) => {
        this.categories.set(res.expenseCategories ?? []);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load categories');
        this.loading.set(false);
      }
    });
  }

  openCreate(): void {
    this.error.set(null);
    this.editingId.set(null);
    this.form.reset({ name: '', description: '', active: true });
    this.dialogOpen.set(true);
  }

  openEdit(c: ExpenseCategory): void {
    this.error.set(null);
    this.editingId.set(String(c.id));
    this.form.reset({
      name: c.name,
      description: c.description ?? '',
      active: Boolean(c.active)
    });
    this.dialogOpen.set(true);
  }

  closeDialog(): void {
    this.dialogOpen.set(false);
    this.editingId.set(null);
  }

  openDeleteConfirm(c: ExpenseCategory): void {
    this.pendingDeleteCategoryId.set(String(c.id));
    this.confirmDeleteOpen.set(true);
  }

  cancelDeleteConfirm(): void {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteCategoryId.set(null);
  }

  confirmDelete(): void {
    const id = this.pendingDeleteCategoryId();
    if (!id) return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteCategoryId.set(null);
    this.deleteCategory(id);
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const raw = this.form.getRawValue();
    const id = this.editingId();

    if (!id) {
      const mutation = `mutation CreateExpenseCategory($input: CreateExpenseCategoryInput!) {
        createExpenseCategory(input: $input) { id }
      }`;

      this.gql.request<CreateExpenseCategoryMutationResult>(mutation, { input: { name: raw.name, description: raw.description || null } }).subscribe({
        next: () => {
          this.closeDialog();
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to create category');
          this.loading.set(false);
        }
      });
      return;
    }

    const mutation = `mutation UpdateExpenseCategory($input: UpdateExpenseCategoryInput!) {
      updateExpenseCategory(input: $input) { id }
    }`;

    this.gql
      .request<UpdateExpenseCategoryMutationResult>(mutation, {
        input: {
          id,
          name: raw.name,
          description: raw.description || null,
          active: raw.active
        }
      })
      .subscribe({
        next: () => {
          this.closeDialog();
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to update category');
          this.loading.set(false);
        }
      });
  }

  deleteCategory(id: string): void {
    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation DeleteExpenseCategory($input: DeleteExpenseCategoryInput!) { deleteExpenseCategory(input: $input) }`;

    this.gql.request<DeleteExpenseCategoryMutationResult>(mutation, { input: { id } }).subscribe({
      next: () => {
        if (this.editingId() === id) {
          this.editingId.set(null);
        }
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to delete category');
        this.loading.set(false);
      }
    });
  }
}
