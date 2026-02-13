import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';

type DailySalesReport = {
  date: string;
  totalSalesAmount: number;
  totalProfitAmount: number;
};

type DailySalesReportQueryResult = {
  dailySalesReport: DailySalesReport;
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
  grossProfit: number;
  expenses: number;
  netProfit: number;
};

@Component({
  selector: 'cis-profit-management-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MoneyPipe],
  templateUrl: './profit-management.page.html',
  styleUrl: './profit-management.page.scss'
})
export class ProfitManagementPage {
  loading = signal(false);
  error = signal<string | null>(null);

  private readonly gql = inject(GraphqlService);
  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    mode: ['DAY' as ProfitMode, [Validators.required]],
    date: [new Date().toISOString().slice(0, 10), [Validators.required]],
    month: [String(new Date().getMonth() + 1).padStart(2, '0'), [Validators.required]],
    year: [String(new Date().getFullYear()), [Validators.required]]
  });

  rows = signal<ProfitRow[]>([]);

  totalGrossProfit = computed(() => this.rows().reduce((s, r) => s + Number(r.grossProfit ?? 0), 0));
  totalExpenses = computed(() => this.rows().reduce((s, r) => s + Number(r.expenses ?? 0), 0));
  totalNetProfit = computed(() => this.rows().reduce((s, r) => s + Number(r.netProfit ?? 0), 0));

  netProfitIsPositive = computed(() => this.totalNetProfit() >= 0);

  constructor() {
    this.load();
  }

  private isoDateParts(iso: string): { y: number; m: number; d: number } {
    const [y, m, d] = iso.split('-').map((x) => Number(x));
    return { y, m, d };
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
      return {
        label: date,
        from: date,
        to: date,
        grossProfit: 0,
        expenses: 0,
        netProfit: 0
      };
    });
  }

  private buildYearRows(year: number): ProfitRow[] {
    return Array.from({ length: 12 }).map((_, idx) => {
      const month = idx + 1;
      const m = this.pad2(month);
      const from = `${year}-${m}-01`;
      const to = `${year}-${m}-${this.pad2(this.daysInMonth(year, month))}`;
      return {
        label: `${year}-${m}`,
        from,
        to,
        grossProfit: 0,
        expenses: 0,
        netProfit: 0
      };
    });
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const raw = this.form.getRawValue();
    const mode = (raw.mode ?? 'DAY') as ProfitMode;

    const qDaily = `query DailySales($date: String!) {
      dailySalesReport(date: $date) {
        date
        totalProfitAmount
        totalSalesAmount
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

    if (mode === 'DAY') {
      const date = String(raw.date ?? '').trim();
      if (!date) {
        this.rows.set([]);
        this.loading.set(false);
        return;
      }

      forkJoin({
        daily: this.gql.request<DailySalesReportQueryResult>(qDaily, { date }),
        expenses: this.gql.request<ExpensesQueryResult>(qExpenses, { filter: { from: date, to: date } })
      }).subscribe({
        next: ({ daily, expenses }) => {
          const gross = Number(daily?.dailySalesReport?.totalProfitAmount ?? 0);
          const expTotal = (expenses?.expenses ?? []).reduce((s, e) => s + Number(e.amount ?? 0), 0);
          this.rows.set([
            {
              label: date,
              from: date,
              to: date,
              grossProfit: gross,
              expenses: expTotal,
              netProfit: gross - expTotal
            }
          ]);
          this.loading.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to load profit');
          this.loading.set(false);
        }
      });
      return;
    }

    if (mode === 'MONTH') {
      const year = Number(raw.year ?? '');
      const month = Number(raw.month ?? '');
      if (!year || !month || month < 1 || month > 12) {
        this.rows.set([]);
        this.loading.set(false);
        return;
      }

      const rows = this.buildMonthRows(year, month);
      const from = rows[0]?.from;
      const to = rows[rows.length - 1]?.to;

      const dailyReqs = rows.map((r) => this.gql.request<DailySalesReportQueryResult>(qDaily, { date: r.from }));
      const expensesReq = this.gql.request<ExpensesQueryResult>(qExpenses, { filter: { from, to } });

      forkJoin({ daily: forkJoin(dailyReqs), expenses: expensesReq }).subscribe({
        next: ({ daily, expenses }) => {
          const expList = expenses?.expenses ?? [];

          const mapped = rows.map((r, idx) => {
            const gross = Number(daily[idx]?.dailySalesReport?.totalProfitAmount ?? 0);
            const expTotal = expList
              .filter((e) => String(e.date ?? '') === r.from)
              .reduce((s, e) => s + Number(e.amount ?? 0), 0);
            return {
              ...r,
              grossProfit: gross,
              expenses: expTotal,
              netProfit: gross - expTotal
            };
          });

          this.rows.set(mapped);
          this.loading.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to load monthly profit');
          this.loading.set(false);
        }
      });
      return;
    }

    const year = Number(raw.year ?? '');
    if (!year) {
      this.rows.set([]);
      this.loading.set(false);
      return;
    }

    const rows = this.buildYearRows(year);
    const from = rows[0]?.from;
    const to = rows[rows.length - 1]?.to;

    const expensesReq = this.gql.request<ExpensesQueryResult>(qExpenses, { filter: { from, to } });

    const dailyPerMonthReqs = rows.map((r) => {
      const { y, m } = this.isoDateParts(r.from);
      const days = this.daysInMonth(y, m);
      const dates = Array.from({ length: days }).map((_, idx) => `${y}-${this.pad2(m)}-${this.pad2(idx + 1)}`);
      return forkJoin(dates.map((d) => this.gql.request<DailySalesReportQueryResult>(qDaily, { date: d })));
    });

    forkJoin({ perMonth: forkJoin(dailyPerMonthReqs), expenses: expensesReq }).subscribe({
      next: ({ perMonth, expenses }) => {
        const expList = expenses?.expenses ?? [];

        const mapped = rows.map((r, idx) => {
          const gross = (perMonth[idx] ?? []).reduce((s, x) => s + Number(x?.dailySalesReport?.totalProfitAmount ?? 0), 0);
          const expTotal = expList
            .filter((e) => String(e.date ?? '') >= r.from && String(e.date ?? '') <= r.to)
            .reduce((s, e) => s + Number(e.amount ?? 0), 0);
          return {
            ...r,
            grossProfit: gross,
            expenses: expTotal,
            netProfit: gross - expTotal
          };
        });

        this.rows.set(mapped);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load yearly profit');
        this.loading.set(false);
      }
    });
  }
}
