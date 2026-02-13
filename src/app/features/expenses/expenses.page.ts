import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PermissionService } from '../../shared/services/permission.service';
import { forkJoin } from 'rxjs';

type ExpenseCategory = {
  id: string;
  name: string;
  active: boolean;
};

type Expense = {
  id: string;
  date: string;
  description?: string | null;
  amount: number;
  paymentMethod: string;
  createdAt: string;
  createdBy?: string | null;
  category: ExpenseCategory;
};

type ExpenseCategoriesQueryResult = {
  expenseCategories: ExpenseCategory[];
};

type ExpensesQueryResult = {
  expenses: Expense[];
};

type CreateExpenseMutationResult = {
  createExpense: Expense;
};

type UpdateExpenseMutationResult = {
  updateExpense: Expense;
};

type DeleteExpenseMutationResult = {
  deleteExpense: boolean;
};

@Component({
  selector: 'cis-expenses-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MoneyPipe],
  templateUrl: './expenses.page.html',
  styleUrl: './expenses.page.scss'
})
export class ExpensesPage {
  readonly perm = inject(PermissionService);

  loading = signal(false);
  error = signal<string | null>(null);

  categories = signal<ExpenseCategory[]>([]);
  expenses = signal<Expense[]>([]);

  detailsDate = signal<string | null>(null);

  selectedDay = signal<string>('');
  selectedMonth = signal<string>('');
  selectedYear = signal<string>('');
  activeFilter = signal<null | 'day' | 'month' | 'year'>(null);

  dialogOpen = signal(false);
  editingId = signal<string | null>(null);

  confirmDeleteOpen = signal(false);
  pendingDeleteExpenseId = signal<string | null>(null);

  readonly paymentMethods = [
    { key: 'CASH', label: 'Cash' },
    { key: 'MPESA', label: 'M-Pesa' },
    { key: 'BANK', label: 'Bank' }
  ];

  private readonly fb = inject(FormBuilder);

  headerForm = this.fb.group({
    date: ['', [Validators.required]]
  });

  lineForm = this.fb.group({
    categoryId: ['', [Validators.required]],
    description: [''],
    amount: [null as number | null, [Validators.required, Validators.min(0)]],
    paymentMethod: ['CASH', [Validators.required]]
  });

  lines = signal<
    Array<{ categoryId: string; description: string; amount: number; paymentMethod: string }>
  >([]);

  categoryById = computed(() => {
    const map = new Map<string, ExpenseCategory>();
    for (const c of this.categories()) {
      map.set(String(c.id), c);
    }
    return map;
  });

  categoryName(categoryId: unknown): string {
    const id = String(categoryId ?? '');
    return this.categoryById().get(id)?.name ?? '-';
  }

  filteredExpenses = computed(() => {
    const mode = this.activeFilter();
    const all = this.expenses();
    if (!mode) return all;

    if (mode === 'day') {
      const d = String(this.selectedDay() ?? '').trim();
      if (!d) return all;
      return all.filter((e) => String(e.date ?? '') === d);
    }

    if (mode === 'month') {
      const m = String(this.selectedMonth() ?? '').trim();
      if (!m) return all;
      const prefix = `${m}-`;
      return all.filter((e) => String(e.date ?? '').startsWith(prefix));
    }

    const y = String(this.selectedYear() ?? '').trim();
    if (!y) return all;
    const prefix = `${y}-`;
    return all.filter((e) => String(e.date ?? '').startsWith(prefix));
  });

  groupedByDay = computed(() => {
    const groups = new Map<string, Expense[]>();
    for (const e of this.filteredExpenses()) {
      const d = String(e.date ?? '');
      if (!groups.has(d)) groups.set(d, []);
      groups.get(d)!.push(e);
    }

    const items = Array.from(groups.entries()).map(([date, list]) => {
      const total = list.reduce((sum, x) => sum + Number(x.amount ?? 0), 0);
      return {
        date,
        count: list.length,
        total,
        items: [...list].sort((a, b) => String(b.createdAt ?? '').localeCompare(String(a.createdAt ?? '')))
      };
    });

    items.sort((a, b) => String(b.date).localeCompare(String(a.date)));
    return items;
  });

  toggleDetails(date: string): void {
    const d = String(date);
    this.detailsDate.set(this.detailsDate() === d ? null : d);
  }

  dailyTotal(date: string): number {
    const g = this.groupedByDay().find((x) => x.date === date);
    return Number(g?.total ?? 0);
  }

  totalToday = computed(() => {
    const d = String(this.selectedDay() ?? '').trim();
    if (!d) return 0;
    return this.expenses()
      .filter((e) => String(e.date ?? '') === d)
      .reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
  });

  totalThisMonth = computed(() => {
    const m = String(this.selectedMonth() ?? '').trim();
    if (!m) return 0;
    const prefix = `${m}-`;
    return this.expenses()
      .filter((e) => String(e.date ?? '').startsWith(prefix))
      .reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
  });

  totalThisYear = computed(() => {
    const y = String(this.selectedYear() ?? '').trim();
    if (!y) return 0;
    const prefix = `${y}-`;
    return this.expenses()
      .filter((e) => String(e.date ?? '').startsWith(prefix))
      .reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
  });

  applyDayFilter(): void {
    this.activeFilter.set('day');
    this.detailsDate.set(null);
  }

  applyMonthFilter(): void {
    this.activeFilter.set('month');
    this.detailsDate.set(null);
  }

  applyYearFilter(): void {
    this.activeFilter.set('year');
    this.detailsDate.set(null);
  }

  onSelectedDayChange(value: string): void {
    this.selectedDay.set(String(value ?? ''));
    this.activeFilter.set(String(value ?? '').trim() ? 'day' : null);
    this.detailsDate.set(null);
  }

  onSelectedMonthChange(value: string): void {
    this.selectedMonth.set(String(value ?? ''));
    this.activeFilter.set(String(value ?? '').trim() ? 'month' : null);
    this.detailsDate.set(null);
  }

  onSelectedYearChange(value: string): void {
    this.selectedYear.set(String(value ?? ''));
    this.activeFilter.set(String(value ?? '').trim() ? 'year' : null);
    this.detailsDate.set(null);
  }

  clearFilter(): void {
    this.activeFilter.set(null);
    this.detailsDate.set(null);
  }

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    const now = new Date();
    const yyyy = String(now.getFullYear());
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    this.selectedDay.set(this.todayIso());
    this.selectedMonth.set(`${yyyy}-${mm}`);
    this.selectedYear.set(yyyy);

    this.loadCategories();
    this.load();
  }

  private resetLineForm(): void {
    this.lineForm.reset({
      categoryId: this.categories()[0]?.id ?? '',
      description: '',
      amount: null,
      paymentMethod: 'CASH'
    });
  }

  addLine(): void {
    if (this.editingId()) return;
    this.lineForm.markAllAsTouched();
    if (this.lineForm.invalid) return;

    const v = this.lineForm.getRawValue();
    this.lines.set([
      ...this.lines(),
      {
        categoryId: String(v.categoryId ?? ''),
        description: String(v.description ?? ''),
        amount: Number(v.amount ?? 0),
        paymentMethod: String(v.paymentMethod ?? 'CASH')
      }
    ]);
    this.resetLineForm();
  }

  removeLine(i: number): void {
    if (this.editingId()) return;
    const next = [...this.lines()];
    next.splice(i, 1);
    this.lines.set(next);
  }

  private todayIso(): string {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  loadCategories(): void {
    const query = `query ExpenseCategories($filter: ExpenseCategoryFilter) {
      expenseCategories(filter: $filter) { id name active }
    }`;
    this.gql.request<ExpenseCategoriesQueryResult>(query, { filter: { active: true } }).subscribe({
      next: (res) => this.categories.set((res.expenseCategories ?? []).filter((c) => c.active)),
      error: () => this.categories.set([])
    });
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const query = `query Expenses($filter: ExpenseFilter) {
      expenses(filter: $filter) {
        id
        date
        description
        amount
        paymentMethod
        createdAt
        createdBy
        category { id name active }
      }
    }`;

    this.gql.request<ExpensesQueryResult>(query, { filter: null }).subscribe({
      next: (res) => {
        this.expenses.set(res.expenses ?? []);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load expenses');
        this.loading.set(false);
      }
    });
  }

  openCreate(): void {
    this.error.set(null);
    this.editingId.set(null);

    this.headerForm.reset({ date: this.todayIso() });
    this.lines.set([]);
    this.resetLineForm();
    this.dialogOpen.set(true);
  }

  openEdit(e: Expense): void {
    this.error.set(null);
    this.editingId.set(String(e.id));

    this.headerForm.reset({ date: e.date });
    const l = {
      categoryId: String(e.category?.id ?? ''),
      description: String(e.description ?? ''),
      amount: Number(e.amount ?? 0),
      paymentMethod: String(e.paymentMethod ?? 'CASH').toUpperCase()
    };
    this.lines.set([l]);
    this.lineForm.reset(l);
    this.dialogOpen.set(true);
  }

  closeDialog(): void {
    this.dialogOpen.set(false);
    this.editingId.set(null);
  }

  openDeleteConfirm(e: Expense): void {
    this.pendingDeleteExpenseId.set(String(e.id));
    this.confirmDeleteOpen.set(true);
  }

  cancelDeleteConfirm(): void {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteExpenseId.set(null);
  }

  confirmDelete(): void {
    const id = this.pendingDeleteExpenseId();
    if (!id) return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteExpenseId.set(null);
    this.deleteExpense(id);
  }

  save(): void {
    this.headerForm.markAllAsTouched();

    const id = this.editingId();
    if (id) {
      this.lineForm.markAllAsTouched();
      if (this.headerForm.invalid || this.lineForm.invalid) return;
    } else {
      if (this.headerForm.invalid) return;
      if (!this.lines().length) {
        this.error.set('Add at least one line');
        return;
      }
    }

    this.loading.set(true);
    this.error.set(null);

    const header = this.headerForm.getRawValue();
    const date = String(header.date ?? '').trim();

    if (!id) {
      const mutation = `mutation CreateExpense($input: CreateExpenseInput!) {
        createExpense(input: $input) { id }
      }`;

      const requests = (this.lines() ?? []).map((l) =>
        this.gql.request<CreateExpenseMutationResult>(mutation, {
          input: {
            date,
            categoryId: l.categoryId,
            description: l.description || null,
            amount: Number(l.amount ?? 0),
            paymentMethod: l.paymentMethod
          }
        })
      );

      forkJoin(requests).subscribe({
        next: () => {
          this.closeDialog();
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to create expenses');
          this.loading.set(false);
        }
      });
      return;
    }

    const v = this.lineForm.getRawValue();
    const input = {
      date,
      categoryId: v.categoryId,
      description: v.description || null,
      amount: Number(v.amount ?? 0),
      paymentMethod: v.paymentMethod
    };

    const mutation = `mutation UpdateExpense($input: UpdateExpenseInput!) {
      updateExpense(input: $input) { id }
    }`;

    this.gql.request<UpdateExpenseMutationResult>(mutation, { input: { id, ...input } }).subscribe({
      next: () => {
        this.closeDialog();
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to update expense');
        this.loading.set(false);
      }
    });
  }

  deleteExpense(id: string): void {
    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation DeleteExpense($input: DeleteExpenseInput!) { deleteExpense(input: $input) }`;

    this.gql.request<DeleteExpenseMutationResult>(mutation, { input: { id } }).subscribe({
      next: () => this.load(),
      error: (err: unknown) => {
        this.error.set(err instanceof Error ? err.message : 'Failed to delete expense');
        this.loading.set(false);
      }
    });
  }
}
