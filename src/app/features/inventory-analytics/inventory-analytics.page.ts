import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PagerComponent } from '../../shared/ui/pager/pager.component';

type Period = 'weekly' | 'monthly' | 'yearly';
type Tab = 'overview' | 'classification' | 'aging' | 'recommendations';
type StockClass = 'fast' | 'slow' | 'dead' | 'none';
type RecPriority = 'high' | 'medium' | 'low';

type Product = {
  id: string;
  sku: string;
  name: string;
  category: string;
  buyingPrice: number;
  sellingPrice: number;
  active: boolean;
};

type InventoryItem = {
  productId: string;
  sku: string;
  productName: string;
  batchId: string;
  batchNumber: string;
  expiryDate: string;
  location: string;
  qtyOnHand: number;
};

type SalesOrder = {
  id: string;
  soldAt: string;
  lines: Array<{
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
  }>;
};

type StockMovement = {
  id: string;
  batchId: string;
  batchNumber: string;
  productId: string;
  createdAt: string;
  quantity: number;
};

type ProductStat = {
  productId: string;
  sku: string;
  productName: string;
  category: string;
  qtyOnHand: number;
  stockValue: number;
  soldQty: number;
  soldRevenue: number;
  dailyRate: number;
  daysSupply: number | null;
  lastSale: Date | null;
  stockClass: StockClass;
};

type AgingRow = {
  productId: string;
  sku: string;
  productName: string;
  batchId: string;
  batchNumber: string;
  location: string;
  expiryDate: string;
  qtyOnHand: number;
  receivedAt: Date | null;
  daysInStock: number | null;
  bucket: string;
};

type Recommendation = {
  priority: RecPriority;
  productId: string;
  sku: string;
  productName: string;
  title: string;
  detail: string;
};

type ProductsQueryResult = { products: Product[] };
type InventoryQueryResult = { inventory: InventoryItem[] };
type SalesOrdersQueryResult = { salesOrders: SalesOrder[] };
type StockMovementsQueryResult = { stockMovements: StockMovement[] };
type InventoryValuationResult = { inventoryValuation: { totalStockValue: number } };

const DAY_MS = 24 * 60 * 60 * 1000;

@Component({
  selector: 'cis-inventory-analytics-page',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe, MoneyPipe, PagerComponent],
  templateUrl: './inventory-analytics.page.html',
  styleUrl: './inventory-analytics.page.scss'
})
export class InventoryAnalyticsPage {
  private readonly gql = inject(GraphqlService);
  private readonly branchCtx = inject(BranchContext);

  loading = signal(false);
  error = signal<string | null>(null);

  period = signal<Period>('monthly');
  tab = signal<Tab>('overview');

  products = signal<Product[]>([]);
  inventory = signal<InventoryItem[]>([]);
  sales = signal<SalesOrder[]>([]);
  inMovements = signal<StockMovement[]>([]);
  stockValue = signal<number | null>(null);

  periodDays = computed(() => ({ weekly: 7, monthly: 30, yearly: 365 })[this.period()]);

  stats = computed<ProductStat[]>(() => {
    const days = this.periodDays();
    const cutoff = Date.now() - days * DAY_MS;

    const qtyMap = new Map<string, number>();
    for (const item of this.inventory()) {
      qtyMap.set(item.productId, (qtyMap.get(item.productId) ?? 0) + Number(item.qtyOnHand ?? 0));
    }

    const soldMap = new Map<string, { qty: number; revenue: number; last: Date | null }>();
    for (const order of this.sales()) {
      const soldDate = new Date(order.soldAt);
      for (const line of order.lines) {
        const entry = soldMap.get(line.productId) ?? { qty: 0, revenue: 0, last: null };
        if (soldDate.getTime() >= cutoff) {
          entry.qty += Number(line.quantity ?? 0);
          entry.revenue += Number(line.quantity ?? 0) * Number(line.unitPrice ?? 0);
        }
        if (!entry.last || soldDate > entry.last) entry.last = soldDate;
        soldMap.set(line.productId, entry);
      }
    }

    const rows: ProductStat[] = [];
    for (const p of this.products().filter((x) => x.active)) {
      const qtyOnHand = qtyMap.get(p.id) ?? 0;
      const sold = soldMap.get(p.id);
      const soldQty = sold?.qty ?? 0;
      const dailyRate = soldQty / days;
      const daysSupply = dailyRate > 0 ? qtyOnHand / dailyRate : null;

      let stockClass: StockClass;
      if (soldQty > 0 && (daysSupply === null || daysSupply <= 30)) stockClass = 'fast';
      else if (soldQty > 0) stockClass = 'slow';
      else if (qtyOnHand > 0) stockClass = 'dead';
      else stockClass = 'none';

      rows.push({
        productId: p.id,
        sku: p.sku,
        productName: p.name,
        category: p.category,
        qtyOnHand,
        stockValue: qtyOnHand * Number(p.buyingPrice ?? 0),
        soldQty,
        soldRevenue: sold?.revenue ?? 0,
        dailyRate,
        daysSupply,
        lastSale: sold?.last ?? null,
        stockClass
      });
    }

    rows.sort((a, b) => b.soldQty - a.soldQty || b.qtyOnHand - a.qtyOnHand);
    return rows;
  });

  classFilter = signal<'all' | StockClass>('all');
  filteredClass = computed(() => {
    const f = this.classFilter();
    return f === 'all' ? this.stats() : this.stats().filter((s) => s.stockClass === f);
  });
  classPageSize = signal(10);
  classPageIndex = signal(0);
  displayedClass = computed(() => {
    const size = this.classPageSize();
    const start = this.classPageIndex() * size;
    return this.filteredClass().slice(start, start + size);
  });

  aging = computed<AgingRow[]>(() => {
    const receivedMap = new Map<string, Date>();
    for (const mv of this.inMovements()) {
      const d = new Date(mv.createdAt);
      const existing = receivedMap.get(mv.batchId);
      if (!existing || d < existing) receivedMap.set(mv.batchId, d);
    }

    const now = Date.now();
    const rows: AgingRow[] = [];
    for (const item of this.inventory()) {
      if (Number(item.qtyOnHand ?? 0) <= 0) continue;
      const received = receivedMap.get(item.batchId) ?? null;
      const daysInStock = received ? Math.floor((now - received.getTime()) / DAY_MS) : null;
      const bucket =
        daysInStock === null ? 'Unknown'
        : daysInStock <= 30 ? '0-30 days'
        : daysInStock <= 60 ? '31-60 days'
        : daysInStock <= 90 ? '61-90 days'
        : '90+ days';
      rows.push({
        productId: item.productId,
        sku: item.sku,
        productName: item.productName,
        batchId: item.batchId,
        batchNumber: item.batchNumber,
        location: item.location,
        expiryDate: item.expiryDate,
        qtyOnHand: Number(item.qtyOnHand),
        receivedAt: received,
        daysInStock,
        bucket
      });
    }
    rows.sort((a, b) => (b.daysInStock ?? -1) - (a.daysInStock ?? -1));
    return rows;
  });
  agingPageSize = signal(10);
  agingPageIndex = signal(0);
  displayedAging = computed(() => {
    const size = this.agingPageSize();
    const start = this.agingPageIndex() * size;
    return this.aging().slice(start, start + size);
  });
  agingBuckets = computed(() => {
    const buckets = new Map<string, number>();
    for (const row of this.aging()) {
      buckets.set(row.bucket, (buckets.get(row.bucket) ?? 0) + row.qtyOnHand);
    }
    return ['0-30 days', '31-60 days', '61-90 days', '90+ days', 'Unknown']
      .filter((b) => buckets.has(b))
      .map((b) => ({ bucket: b, qty: buckets.get(b) ?? 0 }));
  });

  recommendations = computed<Recommendation[]>(() => {
    const recs: Recommendation[] = [];
    const expiringSoon = this.expiringSoonCount();

    for (const s of this.stats()) {
      if (s.stockClass === 'dead') {
        recs.push({
          priority: s.qtyOnHand >= 20 ? 'high' : 'medium',
          productId: s.productId,
          sku: s.sku,
          productName: s.productName,
          title: 'Clear dead stock',
          detail: `${s.qtyOnHand} pcs in stock with no sales in the last ${this.periodDays()} days. Consider a discount, bundle, or return to supplier.`
        });
      } else if (s.stockClass === 'fast' && s.daysSupply !== null && s.daysSupply <= 7) {
        recs.push({
          priority: 'high',
          productId: s.productId,
          sku: s.sku,
          productName: s.productName,
          title: 'Reorder urgently',
          detail: `Fast mover with only ~${Math.round(s.daysSupply)} day(s) of stock left (${s.qtyOnHand} pcs). Repurchase now to avoid a stock-out.`
        });
      } else if (s.stockClass === 'fast' && s.daysSupply !== null && s.daysSupply <= 30) {
        recs.push({
          priority: 'medium',
          productId: s.productId,
          sku: s.sku,
          productName: s.productName,
          title: 'Plan repurchase',
          detail: `~${Math.round(s.daysSupply)} day(s) of stock remaining. Schedule a repurchase soon.`
        });
      } else if (s.stockClass === 'slow') {
        recs.push({
          priority: 'low',
          productId: s.productId,
          sku: s.sku,
          productName: s.productName,
          title: 'Monitor slow mover',
          detail: `Selling slowly — ~${s.daysSupply !== null ? Math.round(s.daysSupply) : '—'} day(s) of stock. Avoid over-ordering.`
        });
      }
    }

    if (expiringSoon > 0) {
      recs.push({
        priority: 'high',
        productId: '',
        sku: '—',
        productName: `${expiringSoon} batch(es)`,
        title: 'Expiring stock',
        detail: `${expiringSoon} batch(es) expire within 90 days. Prioritize selling these first (FEFO) or mark them down.`
      });
    }

    const order = { high: 0, medium: 1, low: 2 };
    recs.sort((a, b) => order[a.priority] - order[b.priority]);
    return recs;
  });
  recFilter = signal<'all' | RecPriority>('all');
  filteredRecs = computed(() => {
    const f = this.recFilter();
    return f === 'all' ? this.recommendations() : this.recommendations().filter((r) => r.priority === f);
  });
  recPageSize = signal(10);
  recPageIndex = signal(0);
  displayedRecs = computed(() => {
    const size = this.recPageSize();
    const start = this.recPageIndex() * size;
    return this.filteredRecs().slice(start, start + size);
  });

  totalUnits = computed(() => this.stats().reduce((sum, s) => sum + s.qtyOnHand, 0));
  unitsSold = computed(() => this.stats().reduce((sum, s) => sum + s.soldQty, 0));
  periodRevenue = computed(() => this.stats().reduce((sum, s) => sum + s.soldRevenue, 0));
  fastCount = computed(() => this.stats().filter((s) => s.stockClass === 'fast').length);
  slowCount = computed(() => this.stats().filter((s) => s.stockClass === 'slow').length);
  deadCount = computed(() => this.stats().filter((s) => s.stockClass === 'dead').length);
  idleCount = computed(() => this.stats().filter((s) => s.stockClass === 'none').length);

  constructor() {
    this.load();
  }

  setPeriod(p: Period): void {
    this.period.set(p);
    this.classPageIndex.set(0);
    this.recPageIndex.set(0);
  }

  setTab(t: Tab): void {
    this.tab.set(t);
  }

  setClassFilter(f: 'all' | StockClass): void {
    this.classFilter.set(f);
    this.classPageIndex.set(0);
  }

  setRecFilter(f: 'all' | RecPriority): void {
    this.recFilter.set(f);
    this.recPageIndex.set(0);
  }

  classLabel(c: StockClass): string {
    return { fast: 'Fast Moving', slow: 'Slow Moving', dead: 'Dead Stock', none: 'No Movement' }[c];
  }

  classBadge(c: StockClass): string {
    switch (c) {
      case 'fast': return 'bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-700';
      case 'slow': return 'bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-700';
      case 'dead': return 'bg-[#B81104]/10 text-red-800 ring-[#B81104]/25 dark:text-red-300';
      default: return 'bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600';
    }
  }

  priorityBadge(p: RecPriority): string {
    switch (p) {
      case 'high': return 'bg-[#B81104]/10 text-red-800 ring-[#B81104]/25 dark:text-red-300';
      case 'medium': return 'bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-700';
      default: return 'bg-sky-50 text-sky-800 ring-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:ring-sky-700';
    }
  }

  agingBucketBadge(b: string): string {
    switch (b) {
      case '0-30 days': return 'bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-700';
      case '31-60 days': return 'bg-sky-50 text-sky-800 ring-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:ring-sky-700';
      case '61-90 days': return 'bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-700';
      default: return 'bg-[#B81104]/10 text-red-800 ring-[#B81104]/25 dark:text-red-300';
    }
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const qProducts = `query { products { id sku name category buyingPrice sellingPrice active } }`;
    const qInventory = `query Inv($branch: String) { inventory(filter: { includeZero: true, branch: $branch }) { productId sku productName batchId batchNumber expiryDate location qtyOnHand } }`;
    const qSales = `query Sales($branch: String) { salesOrders(branch: $branch) { id soldAt lines { productId productName quantity unitPrice } } }`;
    const qMovements = `query { stockMovements(filter: { type: "IN" }) { id batchId batchNumber productId createdAt quantity } }`;
    const qValuation = `query Val($branch: String) { inventoryValuation(branch: $branch) { totalStockValue } }`;

    forkJoin({
      products: this.gql.request<ProductsQueryResult>(qProducts),
      inventory: this.gql.request<InventoryQueryResult>(qInventory, { branch: this.branchCtx.effective() }),
      sales: this.gql.request<SalesOrdersQueryResult>(qSales, { branch: this.branchCtx.effective() }),
      movements: this.gql.request<StockMovementsQueryResult>(qMovements),
      valuation: this.gql.request<InventoryValuationResult>(qValuation)
    }).subscribe({
      next: ({ products, inventory, sales, movements, valuation }) => {
        this.products.set(products.products);
        this.inventory.set(inventory.inventory);
        this.sales.set(sales.salesOrders);
        this.inMovements.set(movements.stockMovements);
        this.stockValue.set(valuation.inventoryValuation.totalStockValue);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load inventory analytics');
        this.loading.set(false);
      }
    });
  }

  private expiringSoonCount(): number {
    const limit = Date.now() + 90 * DAY_MS;
    return this.inventory().filter((i) => {
      if (Number(i.qtyOnHand ?? 0) <= 0) return false;
      const d = new Date(`${String(i.expiryDate ?? '').trim()}T00:00:00`);
      return Number.isFinite(d.getTime()) && d.getTime() <= limit;
    }).length;
  }
}
