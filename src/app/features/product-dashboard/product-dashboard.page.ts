import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { BaseChartDirective } from 'ng2-charts';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { forkJoin } from 'rxjs';
import type { ChartConfiguration, ChartData } from 'chart.js';

type Product = {
  id: string;
  sku: string;
  name: string;
  category?: string | null;
  buyingPrice?: number | null;
  sellingPrice?: number | null;
  active: boolean;
};

type InventoryItem = {
  id: string;
  productId: string;
  sku: string;
  productName: string;
  batchId: string;
  batchNumber: string;
  qtyOnHand: number;
};

type SalesOrder = {
  id: string;
  soldAt: string;
  lines: Array<{
    productId: string;
    productName: string;
    quantity: number;
  }>;
};

type LowStockAlert = {
  productId: string;
  sku: string;
  productName: string;
  qtyOnHand: number;
  threshold: number;
};

type AlertItem = {
  productId: string;
  sku: string;
  productName: string;
  qtyOnHand: number;
  status: 'out_of_stock' | 'running_low';
};

type DeadStockItem = {
  productId: string;
  sku: string;
  productName: string;
  qtyOnHand: number;
  daysSinceLastSale: number | null;
};

type ProductsQueryResult = { products: Product[] };
type InventoryQueryResult = { inventory: InventoryItem[] };
type SalesOrdersQueryResult = { salesOrders: SalesOrder[] };
type LowStockAlertsResult = { lowStockAlerts: LowStockAlert[] };
type InventoryValuationResult = { inventoryValuation: { totalStockValue: number } };

@Component({
  selector: 'cis-product-dashboard-page',
  standalone: true,
  imports: [CommonModule, RouterLink, BaseChartDirective, MoneyPipe, TranslatePipe, PagerComponent],
  templateUrl: './product-dashboard.page.html',
  styleUrl: './product-dashboard.page.scss'
})
export class ProductDashboardPage {
  private readonly gql = inject(GraphqlService);
  private readonly branchCtx = inject(BranchContext);

  loading = signal(false);
  error = signal<string | null>(null);

  totalProducts = signal(0);
  totalStockQty = signal(0);
  lowStockCount = signal(0);
  outOfStockCount = signal(0);
  inventoryValue = signal<number | null>(null);

  alerts = signal<AlertItem[]>([]);

  alertsPageSize = signal(5);
  alertsPageIndex = signal(0);

  displayedAlerts = computed(() => {
    const all = this.alerts();
    const size = this.alertsPageSize();
    const idx = this.alertsPageIndex();
    return all.slice(idx * size, idx * size + size);
  });

  alertsTotalPages = computed(() => {
    const size = this.alertsPageSize();
    const total = this.alerts().length;
    return Math.max(1, Math.ceil(total / size));
  });

  lowStockThreshold = 10;

  // Chart 1: Stock by Category
  categoryLabels = signal<string[]>([]);
  categoryValues = signal<number[]>([]);

  categoryChartData = computed<ChartData<'doughnut'>>(() => ({
    labels: this.categoryLabels(),
    datasets: [
      {
        data: this.categoryValues(),
        backgroundColor: [
          '#6366f1',
          '#ec4899',
          '#f59e0b',
          '#10b981',
          '#3b82f6',
          '#8b5cf6',
          '#ef4444',
          '#9a4444',
          '#f97316',
          '#64748b'
        ]
      }
    ]
  }));

  categoryChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: { legend: { position: 'bottom' } }
  };

  // Chart 2: Most Sold Products
  mostSoldLabels = signal<string[]>([]);
  mostSoldValues = signal<number[]>([]);

  mostSoldChartData = computed<ChartData<'bar'>>(() => ({
    labels: this.mostSoldLabels(),
    datasets: [
      {
        label: 'Qty Sold',
        data: this.mostSoldValues(),
        backgroundColor: 'rgba(99, 102, 241, 0.75)',
        borderColor: '#6366f1',
        borderWidth: 1
      }
    ]
  }));

  mostSoldChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true },
      y: { ticks: { autoSkip: false } }
    }
  };

  // Chart 3: Dead Stock
  deadStockItems = signal<DeadStockItem[]>([]);
  deadStockPageSize = signal(10);
  deadStockPageIndex = signal(0);
  displayedDeadStock = computed(() => {
    const all = this.deadStockItems();
    const start = this.deadStockPageIndex() * this.deadStockPageSize();
    return all.slice(start, start + this.deadStockPageSize());
  });
  deadStockLabels = signal<string[]>([]);
  deadStockValues = signal<number[]>([]);

  deadStockChartData = computed<ChartData<'bar'>>(() => ({
    labels: this.deadStockLabels(),
    datasets: [
      {
        label: 'Qty on Hand (Not Sold 30+ Days)',
        data: this.deadStockValues(),
        backgroundColor: 'rgba(239, 68, 68, 0.75)',
        borderColor: '#ef4444',
        borderWidth: 1
      }
    ]
  }));

  deadStockChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true },
      y: { ticks: { autoSkip: false } }
    }
  };

  constructor() {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const qProducts = `query { products { id sku name category buyingPrice sellingPrice active } }`;
    const qInventory = `query Inv($branch: String) { inventory(filter: { includeZero: true, branch: $branch }) { id productId sku productName batchId batchNumber qtyOnHand } }`;
    const qSales = `query Sales($branch: String) { salesOrders(branch: $branch) { id soldAt lines { productId productName quantity } } }`;
    const qLowStock = `query LowStock($threshold: Int!, $branch: String) { lowStockAlerts(threshold: $threshold, branch: $branch) { productId sku productName qtyOnHand threshold } }`;
    const qValuation = `query Val($branch: String) { inventoryValuation(branch: $branch) { totalStockValue } }`;

    forkJoin({
      products: this.gql.request<ProductsQueryResult>(qProducts),
      inventory: this.gql.request<InventoryQueryResult>(qInventory, { branch: this.branchCtx.effective() }),
      sales: this.gql.request<SalesOrdersQueryResult>(qSales, { branch: this.branchCtx.effective() }),
      lowStock: this.gql.request<LowStockAlertsResult>(qLowStock, {
        threshold: this.lowStockThreshold,
        branch: this.branchCtx.effective()
      }),
      valuation: this.gql.request<InventoryValuationResult>(qValuation, { branch: this.branchCtx.effective() })
    }).subscribe({
      next: ({ products, inventory, sales, lowStock, valuation }) => {
        this.processData(products, inventory, sales, lowStock, valuation);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load product dashboard');
        this.loading.set(false);
      }
    });
  }

  private processData(
    products: ProductsQueryResult,
    inventory: InventoryQueryResult,
    sales: SalesOrdersQueryResult,
    lowStock: LowStockAlertsResult,
    valuation: InventoryValuationResult
  ): void {
    const activeProducts = products.products.filter((p) => p.active);
    this.totalProducts.set(activeProducts.length);

    const inventoryItems = inventory.inventory;
    const totalQty = inventoryItems.reduce((sum, item) => sum + Number(item.qtyOnHand ?? 0), 0);
    this.totalStockQty.set(totalQty);

    this.inventoryValue.set(valuation.inventoryValuation.totalStockValue);

    // Aggregate inventory by productId
    const productQtyMap = new Map<string, number>();
    for (const item of inventoryItems) {
      const current = productQtyMap.get(item.productId) ?? 0;
      productQtyMap.set(item.productId, current + Number(item.qtyOnHand ?? 0));
    }

    // Out of stock: active products with zero total qty
    const outOfStock: AlertItem[] = [];
    for (const p of activeProducts) {
      const qty = productQtyMap.get(p.id) ?? 0;
      if (qty <= 0) {
        outOfStock.push({
          productId: p.id,
          sku: p.sku,
          productName: p.name,
          qtyOnHand: 0,
          status: 'out_of_stock'
        });
      }
    }
    this.outOfStockCount.set(outOfStock.length);

    // Low stock from backend alerts
    const lowStockAlerts = lowStock.lowStockAlerts ?? [];
    this.lowStockCount.set(lowStockAlerts.filter((a) => Number(a.qtyOnHand) > 0).length);

    const runningLow: AlertItem[] = lowStockAlerts
      .filter((a) => Number(a.qtyOnHand) > 0)
      .map((a) => ({
        productId: a.productId,
        sku: a.sku,
        productName: a.productName,
        qtyOnHand: Number(a.qtyOnHand),
        status: 'running_low' as const
      }));

    // Combine alerts: out of stock first, then running low
    this.alerts.set([...outOfStock, ...runningLow]);

    // Chart 1: Stock by Category
    const categoryMap = new Map<string, number>();
    for (const p of activeProducts) {
      const cat = (p.category ?? 'Uncategorized').trim() || 'Uncategorized';
      const qty = productQtyMap.get(p.id) ?? 0;
      categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + qty);
    }
    const catEntries = Array.from(categoryMap.entries()).sort((a, b) => b[1] - a[1]);
    this.categoryLabels.set(catEntries.map((e) => e[0]));
    this.categoryValues.set(catEntries.map((e) => e[1]));

    // Chart 2: Most Sold Products
    const soldMap = new Map<string, { name: string; qty: number }>();
    for (const order of sales.salesOrders) {
      for (const line of order.lines) {
        const existing = soldMap.get(line.productId);
        if (existing) {
          existing.qty += Number(line.quantity ?? 0);
        } else {
          soldMap.set(line.productId, {
            name: line.productName,
            qty: Number(line.quantity ?? 0)
          });
        }
      }
    }
    const topSold = Array.from(soldMap.values())
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 10);
    this.mostSoldLabels.set(topSold.map((x) => x.name));
    this.mostSoldValues.set(topSold.map((x) => x.qty));

    // Chart 3: Dead Stock (not sold in 30 days)
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const recentlySoldIds = new Set<string>();
    const lastSaleMap = new Map<string, Date>();

    for (const order of sales.salesOrders) {
      const soldDate = new Date(order.soldAt);
      for (const line of order.lines) {
        const existing = lastSaleMap.get(line.productId);
        if (!existing || soldDate > existing) {
          lastSaleMap.set(line.productId, soldDate);
        }
        if (soldDate >= thirtyDaysAgo) {
          recentlySoldIds.add(line.productId);
        }
      }
    }

    const deadStock: DeadStockItem[] = [];
    for (const p of activeProducts) {
      const qty = productQtyMap.get(p.id) ?? 0;
      if (qty > 0 && !recentlySoldIds.has(p.id)) {
        const lastSale = lastSaleMap.get(p.id);
        const daysSince = lastSale
          ? Math.floor((now.getTime() - lastSale.getTime()) / (24 * 60 * 60 * 1000))
          : null;
        deadStock.push({
          productId: p.id,
          sku: p.sku,
          productName: p.name,
          qtyOnHand: qty,
          daysSinceLastSale: daysSince
        });
      }
    }
    deadStock.sort((a, b) => b.qtyOnHand - a.qtyOnHand);
    this.deadStockItems.set(deadStock);

    const topDead = deadStock.slice(0, 10);
    this.deadStockLabels.set(topDead.map((x) => x.productName));
    this.deadStockValues.set(topDead.map((x) => x.qtyOnHand));
  }

  setAlertsPageSize(size: number | string): void {
    const next = Number(size);
    if (!Number.isFinite(next) || next <= 0) return;
    this.alertsPageSize.set(next);
    this.alertsPageIndex.set(0);
  }

  alertsPrevPage(): void {
    const idx = this.alertsPageIndex();
    if (idx > 0) this.alertsPageIndex.set(idx - 1);
  }

  alertsNextPage(): void {
    const idx = this.alertsPageIndex();
    if (idx < this.alertsTotalPages() - 1) this.alertsPageIndex.set(idx + 1);
  }

  formatCurrency(value: number | null): string {
    if (value == null) return '-';
    return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
