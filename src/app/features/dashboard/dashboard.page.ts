import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { BaseChartDirective } from 'ng2-charts';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { forkJoin } from 'rxjs';
import type { ChartConfiguration, ChartData } from 'chart.js';

type InventoryValuationQueryResult = {
  inventoryValuation: {
    totalStockValue: number;
  };
};

type AlertsQueryResult = {
  expiryAlerts: Array<{ productId: string }>;
  lowStockAlerts: Array<{ productId: string }>;
};

type ProductsCountQueryResult = {
  products: Array<{ id: string }>;
};

type CategoriesCountQueryResult = {
  categories: Array<{ id: string }>;
};

type StockMovement = {
  id: string;
  type: string;
  quantity: number;
  createdAt: string;
  sku: string;
  productName: string;
};

type RecentMovementsQueryResult = {
  stockMovements: StockMovement[];
};

type MyPermission = {
  module: string;
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
};

type MeQueryResult = {
  me: { id: string; name: string; email: string; roles: string[] } | null;
};

type MyPermissionsQueryResult = {
  myPermissions: MyPermission[];
};

type DailySalesReportItem = {
  productId: string;
  sku: string;
  productName: string;
  quantitySold: number;
  salesAmount: number;
  costAmount: number;
  profitAmount: number;
};

type DailySalesReport = {
  date: string;
  totalSalesAmount: number;
  totalCostAmount: number;
  totalProfitAmount: number;
  items: DailySalesReportItem[];
};

type DailySalesReportQueryResult = {
  dailySalesReport: DailySalesReport;
};

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

type ExpensesQueryResult = {
  expenses: Expense[];
};

@Component({
  selector: 'cis-dashboard-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BaseChartDirective, MoneyPipe],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})
export class DashboardPage {
  loading = signal(false);
  error = signal<string | null>(null);

  private readonly fb = inject(FormBuilder);
  private readonly gql = inject(GraphqlService);

  totalStockValue = signal<number | null>(null);
  productsCount = signal<number>(0);
  categoriesCount = signal<number>(0);
  expiryCount = signal<number>(0);
  lowStockCount = signal<number>(0);

  recentMovements = signal<StockMovement[]>([]);

  me = signal<MeQueryResult['me']>(null);
  myPermissions = signal<MyPermission[]>([]);
  isAdmin = computed(() => (this.me()?.roles ?? []).includes('ADMIN'));

  canView = (module: string): boolean => {
    if (this.isAdmin()) return true;
    const mod = String(module).toUpperCase();
    const p = this.myPermissions().find((x) => String(x.module).toUpperCase() === mod);
    return Boolean(p?.canView);
  };

  profitLoading = signal(false);
  profitError = signal<string | null>(null);

  selectedDateForm = this.fb.group({
    date: [new Date().toISOString().slice(0, 10), [Validators.required]]
  });

  todaySales = signal(0);
  grossProfit = signal(0);
  expensesToday = signal(0);

  netProfit = computed(() => this.grossProfit() - this.expensesToday());
  netProfitIsPositive = computed(() => this.netProfit() >= 0);

  profit7DaysLabels = signal<string[]>([]);
  profit7DaysData = signal<number[]>([]);

  topProductsLabels = signal<string[]>([]);
  topProductsQty = signal<number[]>([]);

  expenseBreakdownLabels = signal<string[]>([]);
  expenseBreakdownValues = signal<number[]>([]);

  lineChartData = computed<ChartData<'line'>>(() => ({
    labels: this.profit7DaysLabels(),
    datasets: [
      {
        label: 'Net Profit',
        data: this.profit7DaysData(),
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79,70,229,0.15)',
        tension: 0.25,
        fill: true
      }
    ]
  }));

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      y: {
        ticks: {
          callback: (value: string | number) => String(value)
        }
      }
    }
  };

  barChartData = computed<ChartData<'bar'>>(() => ({
    labels: this.topProductsLabels(),
    datasets: [
      {
        label: 'Qty Sold',
        data: this.topProductsQty(),
        backgroundColor: 'rgba(147,51,234,0.75)'
      }
    ]
  }));

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      x: { ticks: { autoSkip: false } },
      y: { beginAtZero: true }
    }
  };

  pieChartData = computed<ChartData<'pie'>>(() => ({
    labels: this.expenseBreakdownLabels(),
    datasets: [
      {
        data: this.expenseBreakdownValues(),
        backgroundColor: ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#64748b']
      }
    ]
  }));

  pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  };

  constructor() {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    this.loadMe();
    this.loadMyPermissions();

    const qVal = `query { inventoryValuation { totalStockValue } }`;
    this.gql.request<InventoryValuationQueryResult>(qVal).subscribe({
      next: (res) => this.totalStockValue.set(res.inventoryValuation.totalStockValue),
      error: () => {}
    });

    const qCounts = `query DashboardCounts {
      products { id }
      categories { id }
    }`;
    this.gql.request<ProductsCountQueryResult & CategoriesCountQueryResult>(qCounts).subscribe({
      next: (res) => {
        this.productsCount.set(res.products.length);
        this.categoriesCount.set(res.categories.length);
      },
      error: () => {}
    });

    const qAlerts = `query DashboardAlerts($days: Int!, $threshold: Int!) {
      expiryAlerts(days: $days) { productId }
      lowStockAlerts(threshold: $threshold) { productId }
    }`;
    this.gql.request<AlertsQueryResult>(qAlerts, { days: 30, threshold: 10 }).subscribe({
      next: (res) => {
        this.expiryCount.set(res.expiryAlerts.length);
        this.lowStockCount.set(res.lowStockAlerts.length);
      },
      error: () => {}
    });

    const qMovements = `query RecentMovements {
      stockMovements {
        id type quantity createdAt sku productName
      }
    }`;
    this.gql.request<RecentMovementsQueryResult>(qMovements).subscribe({
      next: (res) => {
        this.recentMovements.set(res.stockMovements.slice(0, 8));
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load dashboard');
        this.loading.set(false);
      }
    });
  }

  private loadMe(): void {
    const query = `query Me { me { id name email roles } }`;
    this.gql.request<MeQueryResult>(query).subscribe({
      next: (res) => this.me.set(res.me),
      error: () => this.me.set(null)
    });
  }

  private loadMyPermissions(): void {
    const query = `query MyPermissions { myPermissions { module canView canCreate canEdit canDelete } }`;
    this.gql.request<MyPermissionsQueryResult>(query).subscribe({
      next: (res) => {
        this.myPermissions.set(res.myPermissions ?? []);
        if (this.canView('REPORTS')) this.loadProfit();
      },
      error: () => this.myPermissions.set([])
    });
  }

  private addDaysIso(dateIso: string, days: number): string {
    const d = new Date(`${dateIso}T00:00:00Z`);
    d.setUTCDate(d.getUTCDate() + days);
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(d.getUTCDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  loadProfit(): void {
    if (!this.canView('REPORTS')) return;

    this.profitLoading.set(true);
    this.profitError.set(null);

    const raw = this.selectedDateForm.getRawValue();
    const date = String(raw.date ?? '').trim();
    if (!date) {
      this.profitLoading.set(false);
      return;
    }

    const qDaily = `query DailySales($date: String!) {
      dailySalesReport(date: $date) {
        date
        totalSalesAmount
        totalProfitAmount
        items { productId sku productName quantitySold salesAmount costAmount profitAmount }
      }
    }`;

    const qExpenses = `query Expenses($filter: ExpenseFilter) {
      expenses(filter: $filter) {
        id date amount paymentMethod createdAt createdBy
        description
        category { id name active }
      }
    }`;

    const from7 = this.addDaysIso(date, -6);
    const last7Dates = Array.from({ length: 7 }).map((_, i) => this.addDaysIso(date, i - 6));

    const dailyReq = this.gql.request<DailySalesReportQueryResult>(qDaily, { date });
    const expensesReq = this.gql.request<ExpensesQueryResult>(qExpenses, { filter: { from: from7, to: date } });
    const last7DailyReqs = last7Dates.map((d) => this.gql.request<DailySalesReportQueryResult>(qDaily, { date: d }));

    forkJoin({
      daily: dailyReq,
      expenses: expensesReq,
      last7: forkJoin(last7DailyReqs)
    }).subscribe({
      next: ({ daily, expenses, last7 }) => {
        const report = daily.dailySalesReport;
        this.todaySales.set(Number(report?.totalSalesAmount ?? 0));
        this.grossProfit.set(Number(report?.totalProfitAmount ?? 0));

        const expList = expenses.expenses ?? [];
        const expensesForDay = expList.filter((e) => String(e.date ?? '') === date);
        const expTotalToday = expensesForDay.reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
        this.expensesToday.set(expTotalToday);

        const top = [...(report?.items ?? [])]
          .sort((a, b) => Number(b.quantitySold ?? 0) - Number(a.quantitySold ?? 0))
          .slice(0, 10);
        this.topProductsLabels.set(top.map((x) => x.productName));
        this.topProductsQty.set(top.map((x) => Number(x.quantitySold ?? 0)));

        const breakdown = new Map<string, number>();
        for (const e of expensesForDay) {
          const name = String(e.category?.name ?? 'Other');
          breakdown.set(name, (breakdown.get(name) ?? 0) + Number(e.amount ?? 0));
        }
        const breakdownSorted = Array.from(breakdown.entries()).sort((a, b) => b[1] - a[1]).slice(0, 7);
        this.expenseBreakdownLabels.set(breakdownSorted.map((x) => x[0]));
        this.expenseBreakdownValues.set(breakdownSorted.map((x) => x[1]));

        const profits = (last7 ?? []).map((r, idx) => {
          const d = last7Dates[idx];
          const salesProfit = Number(r?.dailySalesReport?.totalProfitAmount ?? 0);
          const expTotal = expList
            .filter((e) => String(e.date ?? '') === d)
            .reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
          return salesProfit - expTotal;
        });

        this.profit7DaysLabels.set(last7Dates);
        this.profit7DaysData.set(profits);

        this.profitLoading.set(false);
      },
      error: (e: unknown) => {
        this.profitError.set(e instanceof Error ? e.message : 'Failed to load profit');
        this.profitLoading.set(false);
      }
    });
  }

  formatCurrency(value: number | null): string {
    if (value == null) return '-';
    return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  barWidth(value: number, max: number): string {
    if (max <= 0) return '0%';
    const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)));
    return `${pct}%`;
  }
}
