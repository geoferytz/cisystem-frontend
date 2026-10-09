import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PagerComponent } from '../../shared/ui/pager/pager.component';

type InventoryValuation = {
  totalStockValue: number;
};

type InventoryValuationQueryResult = {
  inventoryValuation: InventoryValuation;
};

type StockMovement = {
  id: string;
  type: string;
  quantity: number;
  createdAt: string;
  createdBy?: string | null;
  note?: string | null;
  sku: string;
  productName: string;
  batchNumber: string;
  expiryDate: string;
};

type MovementAuditQueryResult = {
  movementAuditReport: StockMovement[];
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

@Component({
  selector: 'cis-reports-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MoneyPipe, TranslatePipe, PagerComponent],
  templateUrl: './reports.page.html',
  styleUrl: './reports.page.scss'
})
export class ReportsPage {
  loading = signal(false);
  error = signal<string | null>(null);

  valuation = signal<InventoryValuation | null>(null);
  allMovements = signal<StockMovement[]>([]);
  currentPage = signal(1);
  pageSize = signal(10);

  dailySales = signal<DailySalesReport | null>(null);
  dailyItemsPageSize = signal(10);
  dailyItemsPageIndex = signal(0);
  displayedDailyItems = computed(() => {
    const size = this.dailyItemsPageSize();
    const start = this.dailyItemsPageIndex() * size;
    return (this.dailySales()?.items ?? []).slice(start, start + size);
  });

  private readonly fb = inject(FormBuilder);
  private readonly branchCtx = inject(BranchContext);

  auditForm = this.fb.group({
    type: [''],
    from: [''],
    to: ['']
  });

  dailySalesForm = this.fb.group({
    date: [new Date().toISOString().slice(0, 10)]
  });

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const qVal = `query Val($branch: String) { inventoryValuation(branch: $branch) { totalStockValue } }`;
    this.gql.request<InventoryValuationQueryResult>(qVal, { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => this.valuation.set(res.inventoryValuation),
      error: () => {}
    });

    this.loadAudit();
		this.loadDailySales();
  }

  loadDailySales(): void {
    this.loading.set(true);
    this.error.set(null);

    const raw = this.dailySalesForm.getRawValue();
    const date = String(raw.date || '').trim();
    if (!date) {
      this.dailySales.set(null);
      this.loading.set(false);
      return;
    }

    const q = `query DailySales($date: String!, $branch: String) {
      dailySalesReport(date: $date, branch: $branch) {
        date
        totalSalesAmount
        totalCostAmount
        totalProfitAmount
        items { productId sku productName quantitySold salesAmount costAmount profitAmount }
      }
    }`;

    this.gql.request<DailySalesReportQueryResult>(q, { date, branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.dailySales.set(res.dailySalesReport);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load daily sales report');
        this.loading.set(false);
      }
    });
  }

  loadAudit(): void {
    this.loading.set(true);
    this.error.set(null);

    const raw = this.auditForm.getRawValue();

    const q = `query Audit($filter: MovementAuditFilter) {
      movementAuditReport(filter: $filter) {
        id type quantity createdAt createdBy note sku productName batchNumber expiryDate
      }
    }`;

    this.gql
      .request<MovementAuditQueryResult>(q, {
        filter: {
          type: raw.type || null,
          from: raw.from || null,
          to: raw.to || null
        }
      })
      .subscribe({
        next: (res) => {
          this.allMovements.set(res.movementAuditReport);
          this.currentPage.set(1);
          this.loading.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to load movement audit');
          this.loading.set(false);
        }
      });
  }

  get movements(): StockMovement[] {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();
    return this.allMovements().slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.allMovements().length / this.pageSize());
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage() - 1);
  }
}

