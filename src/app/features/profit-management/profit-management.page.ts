import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PagerComponent } from '../../shared/ui/pager/pager.component';

type DailySalesRow = {
  date: string;
  totalSalesAmount: number;
  totalCostAmount: number;
  totalProfitAmount: number;
};

type SalesDailyReportsQueryResult = {
  salesDailyReports: DailySalesRow[];
};

type Expense = {
  id: string;
  date: string;
  amount: number;
  category: { id: string; name: string; active: boolean };
};

type ExpensesQueryResult = {
  expenses: Expense[];
};

type ProfitMode = 'DAY' | 'MONTH' | 'YEAR';

type ProfitRow = {
  label: string;
  from: string;
  to: string;
  sales: number;
  grossProfit: number;
  expenses: number;
  netProfit: number;
};

@Component({
  selector: 'cis-profit-management-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MoneyPipe, TranslatePipe, PagerComponent],
  templateUrl: './profit-management.page.html',
  styleUrl: './profit-management.page.scss'
})
export class ProfitManagementPage {
  loading = signal(false);
  error = signal<string | null>(null);

  private readonly gql = inject(GraphqlService);
  private readonly branchCtx = inject(BranchContext);
  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    mode: ['DAY' as ProfitMode, [Validators.required]],
    date: [new Date().toISOString().slice(0, 10), [Validators.required]],
    month: [String(new Date().getMonth() + 1).padStart(2, '0'), [Validators.required]],
    year: [String(new Date().getFullYear()), [Validators.required]]
  });

  rows = signal<ProfitRow[]>([]);
  pageSize = signal(10);
  pageIndex = signal(0);
  displayedRows = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.rows().slice(start, start + size);
  });

  totalSales = computed(() => this.rows().reduce((s, r) => s + Number(r.sales ?? 0), 0));
  totalGrossProfit = computed(() => this.rows().reduce((s, r) => s + Number(r.grossProfit ?? 0), 0));
  totalExpenses = computed(() => this.rows().reduce((s, r) => s + Number(r.expenses ?? 0), 0));
  totalNetProfit = computed(() => this.rows().reduce((s, r) => s + Number(r.netProfit ?? 0), 0));

  netProfitIsPositive = computed(() => this.totalNetProfit() >= 0);

  constructor() {
    this.load();
  }

  private daysInMonth(year: number, month1to12: number): number {
    return new Date(year, month1to12, 0).getDate();
  }

  private pad2(n: number): string {
    return String(n).padStart(2, '0');
  }

  private buildMonthRows(year: number, month1to12: number): ProfitRow[] {
    const days = this.daysInMonth(year, month1to12);
    const m = this.pad2(month1to12);
    return Array.from({ length: days }).map((_, idx) => {
      const day = idx + 1;
      const d = this.pad2(day);
      const date = `${year}-${m}-${d}`;
      return { label: date, from: date, to: date, sales: 0, grossProfit: 0, expenses: 0, netProfit: 0 };
    });
  }

  private buildYearRows(year: number): ProfitRow[] {
    return Array.from({ length: 12 }).map((_, idx) => {
      const month = idx + 1;
      const m = this.pad2(month);
      const from = `${year}-${m}-01`;
      const to = `${year}-${m}-${this.pad2(this.daysInMonth(year, month))}`;
      return { label: `${year}-${m}`, from, to, sales: 0, grossProfit: 0, expenses: 0, netProfit: 0 };
    });
  }

  private selectedRange(): { from: string; to: string; mode: ProfitMode; rows: ProfitRow[] } | null {
    const raw = this.form.getRawValue();
    const mode = (raw.mode ?? 'DAY') as ProfitMode;

    if (mode === 'DAY') {
      const date = String(raw.date ?? '').trim();
      if (!date) return null;
      return {
        from: date,
        to: date,
        mode,
        rows: [{ label: date, from: date, to: date, sales: 0, grossProfit: 0, expenses: 0, netProfit: 0 }]
      };
    }

    const year = Number(raw.year ?? '');
    if (!year) return null;

    if (mode === 'MONTH') {
      const month = Number(raw.month ?? '');
      if (!month || month < 1 || month > 12) return null;
      const rows = this.buildMonthRows(year, month);
      return { from: rows[0].from, to: rows[rows.length - 1].to, mode, rows };
    }

    const rows = this.buildYearRows(year);
    return { from: rows[0].from, to: rows[rows.length - 1].to, mode, rows };
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.pageIndex.set(0);

    const range = this.selectedRange();
    if (!range) {
      this.rows.set([]);
      this.loading.set(false);
      return;
    }

    const qReport = `query SalesDailyReports($from: String!, $to: String!, $branch: String) {
      salesDailyReports(from: $from, to: $to, branch: $branch) {
        date
        totalSalesAmount
        totalCostAmount
        totalProfitAmount
      }
    }`;

    const qExpenses = `query Expenses($filter: ExpenseFilter) {
      expenses(filter: $filter) {
        id
        date
        amount
        category { id name active }
      }
    }`;

    forkJoin({
      report: this.gql.request<SalesDailyReportsQueryResult>(qReport, { from: range.from, to: range.to, branch: this.branchCtx.effective() }),
      expenses: this.gql.request<ExpensesQueryResult>(qExpenses, { filter: { from: range.from, to: range.to, branch: this.branchCtx.effective() } })
    }).subscribe({
      next: ({ report, expenses }) => {
        const salesByDate = new Map<string, DailySalesRow>();
        for (const r of report?.salesDailyReports ?? []) {
          salesByDate.set(String(r.date), r);
        }
        const expList = expenses?.expenses ?? [];

        const mapped = range.rows.map((row) => {
          const inRange = (d: string) => d >= row.from && d <= row.to;
          const sales = (report?.salesDailyReports ?? []).filter((r) => inRange(String(r.date)));
          const salesTotal = sales.reduce((s, r) => s + Number(r.totalSalesAmount ?? 0), 0);
          const gross = sales.reduce((s, r) => s + Number(r.totalProfitAmount ?? 0), 0);
          const expTotal = expList
            .filter((e) => inRange(String(e.date ?? '')))
            .reduce((s, e) => s + Number(e.amount ?? 0), 0);
          return { ...row, sales: salesTotal, grossProfit: gross, expenses: expTotal, netProfit: gross - expTotal };
        });

        this.rows.set(mapped);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load profit');
        this.loading.set(false);
      }
    });
  }
}
