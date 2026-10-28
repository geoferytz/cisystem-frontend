import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { PermissionService } from '../../shared/services/permission.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { ReportPrintService } from '../../shared/services/report-print.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { CIS_FORM_IMPORTS, FormField } from '../../shared/ui/form/form-field.component';

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
  totalDiscountAmount?: number;
  totalReturnsAmount?: number;
  items: DailySalesReportItem[];
};

type DailySalesReportQueryResult = {
  dailySalesReport: DailySalesReport;
};

type PeriodSalesQueryResult = {
  salesDailyReports: DailySalesReport[];
};

type ReportOrder = {
  id: string;
  customer?: string | null;
  customerId?: string | number | null;
  soldAt: string;
  soldBy?: string | null;
  discount?: number | null;
  paymentMethod?: string | null;
  amountReceived?: number | null;
  returnedValue?: number;
  lines: { productId: string | number; productName: string; quantity: number; unitPrice: number }[];
};

type InventoryRow = {
  productId: string | number;
  sku: string;
  productName: string;
  batchNumber: string;
  expiryDate: string;
  qtyOnHand: number;
};

type InventoryQueryResult = { inventory: InventoryRow[] };

type SalesOrdersQueryResult = { salesOrders: ReportOrder[] };
type ReportCustomer = { id: string; name: string; phone?: string | null };
type CustomersQueryResult = { customers: ReportCustomer[] };

@Component({
  selector: 'cis-reports-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MoneyPipe, TranslatePipe, PagerComponent, CIS_FORM_IMPORTS],
  templateUrl: './reports.page.html',
  styleUrl: './reports.page.scss'
})
export class ReportsPage {
  readonly tabs = [
    { key: 'sales', label: 'reports.tabSales', activeClass: 'bg-pink-500 text-white shadow-sm', inactiveClass: 'bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300' },
    { key: 'breakdown', label: 'reports.tabBreakdown', activeClass: 'bg-violet-500 text-white shadow-sm', inactiveClass: 'bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300' },
    { key: 'debtors', label: 'reports.debtors', activeClass: 'bg-red-500 text-white shadow-sm', inactiveClass: 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300' },
    { key: 'stock', label: 'reports.tabStock', activeClass: 'bg-emerald-500 text-white shadow-sm', inactiveClass: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300' },
    { key: 'audit', label: 'reports.tabAudit', activeClass: 'bg-amber-500 text-white shadow-sm', inactiveClass: 'bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300' }
  ] as const;
  activeTab = signal<'sales' | 'breakdown' | 'debtors' | 'stock' | 'audit'>('sales');
  readonly perm = inject(PermissionService);
  /** Tabs the user may open (REPORTS → SALES/BREAKDOWN/DEBTORS/STOCK/AUDIT). */
  visibleTabs = computed(() => this.tabs.filter(t => this.perm.can('REPORTS', t.key.toUpperCase())));
  canPrint = computed(() => this.perm.can('REPORTS', 'PRINT'));
  showTab(key: string): boolean {
    return this.activeTab() === key && this.visibleTabs().some(t => t.key === key);
  }
  private readonly syncTab = effect(() => {
    const visible = this.visibleTabs();
    if (visible.length && !visible.some(t => t.key === this.activeTab())) {
      untracked(() => this.activeTab.set(visible[0].key));
    }
  });
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
  private readonly reportPrint = inject(ReportPrintService);

  // ---- Breakdown (payment methods, sellers, debts) ----
  orders = signal<ReportOrder[]>([]);
  customersList = signal<ReportCustomer[]>([]);
  breakdownLoading = signal(false);

  /** Orders inside the selected period. */
  periodOrders = computed(() => {
    const { from, to } = this.periodForm.getRawValue();
    if (!from || !to) return [] as ReportOrder[];
    return this.orders().filter(o => {
      const d = (o.soldAt ?? '').slice(0, 10);
      return d >= from && d <= to;
    });
  });

  private orderNet(o: ReportOrder): number {
    const gross = (o.lines ?? []).reduce((s, l) => s + l.quantity * l.unitPrice, 0);
    return Math.max(0, gross - Number(o.discount ?? 0));
  }

  paymentBreakdown = computed(() => {
    const map = new Map<string, { method: string; orders: number; sales: number; received: number }>();
    for (const o of this.periodOrders()) {
      const m = (o.paymentMethod || 'OTHER').toUpperCase();
      const cur = map.get(m) ?? { method: m, orders: 0, sales: 0, received: 0 };
      cur.orders++;
      const net = this.orderNet(o);
      cur.sales += net;
      cur.received += o.amountReceived == null ? net : Math.min(Number(o.amountReceived), net);
      map.set(m, cur);
    }
    return [...map.values()].sort((a, b) => b.sales - a.sales);
  });

  sellerBreakdown = computed(() => {
    const map = new Map<string, { seller: string; orders: number; sales: number; returns: number }>();
    for (const o of this.periodOrders()) {
      const s = o.soldBy || '—';
      const cur = map.get(s) ?? { seller: s, orders: 0, sales: 0, returns: 0 };
      cur.orders++;
      cur.sales += this.orderNet(o);
      cur.returns += Number(o.returnedValue ?? 0);
      map.set(s, cur);
    }
    return [...map.values()].sort((a, b) => b.sales - a.sales);
  });

  /** Customers owing money — debt per customer within all their orders. */
  debtors = computed(() => {
    const map = new Map<string, { name: string; customerId: string | null; orders: number; debt: number }>();
    for (const o of this.orders()) {
      if (!o.customerId) continue; // walk-in can't owe
      const net = this.orderNet(o);
      const received = o.amountReceived == null ? net : Number(o.amountReceived);
      const debt = Math.max(0, net - Number(o.returnedValue ?? 0) - received);
      if (debt <= 0) continue;
      const key = String(o.customerId);
      const cur = map.get(key) ?? { name: o.customer ?? '—', customerId: key, orders: 0, debt: 0 };
      cur.orders++;
      cur.debt += debt;
      map.set(key, cur);
    }
    const phone = new Map(this.customersList().map(c => [String(c.id), c.phone ?? '']));
    return [...map.values()].map(d => ({ ...d, phone: phone.get(d.customerId ?? '') || '' }))
      .sort((a, b) => b.debt - a.debt);
  });
  totalDebt = computed(() => this.debtors().reduce((s, d) => s + d.debt, 0));

  // ---- Stock reports ----
  inventoryRows = signal<InventoryRow[]>([]);

  stockBalance = computed(() => {
    const map = new Map<string, { productId: string; name: string; sku: string; qty: number; batches: number; nearestExpiry: string }>();
    for (const r of this.inventoryRows()) {
      const key = String(r.productId);
      const cur = map.get(key) ?? { productId: key, name: r.productName, sku: r.sku, qty: 0, batches: 0, nearestExpiry: '' };
      cur.qty += r.qtyOnHand;
      cur.batches++;
      if (r.expiryDate && (!cur.nearestExpiry || r.expiryDate < cur.nearestExpiry)) cur.nearestExpiry = r.expiryDate;
      map.set(key, cur);
    }
    return [...map.values()].sort((a, b) => b.qty - a.qty);
  });
  totalUnits = computed(() => this.inventoryRows().reduce((s, r) => s + r.qtyOnHand, 0));

  /** Units sold per product within the selected period. */
  private soldInPeriod = computed(() => {
    const map = new Map<string, { name: string; qty: number }>();
    for (const o of this.periodOrders()) {
      for (const l of o.lines ?? []) {
        const key = String(l.productId);
        const cur = map.get(key) ?? { name: l.productName, qty: 0 };
        cur.qty += l.quantity;
        map.set(key, cur);
      }
    }
    return map;
  });

  fastMovers = computed(() =>
    [...this.soldInPeriod().values()].sort((a, b) => b.qty - a.qty).slice(0, 10));

  /** Stocked products with zero sales in the period. */
  slowMovers = computed(() => {
    const sold = this.soldInPeriod();
    return this.stockBalance().filter(p => p.qty > 0 && !sold.has(p.productId)).slice(0, 10);
  });

  expiryBuckets = computed(() => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const buckets = [
      { label: 'Imeisha (expired)', maxDays: -1, qty: 0, products: new Set<string>() },
      { label: '≤ 7 siku', maxDays: 7, qty: 0, products: new Set<string>() },
      { label: '8–30 siku', maxDays: 30, qty: 0, products: new Set<string>() },
      { label: '31–60 siku', maxDays: 60, qty: 0, products: new Set<string>() },
      { label: '61–90 siku', maxDays: 90, qty: 0, products: new Set<string>() },
      { label: '> 90 siku', maxDays: Infinity, qty: 0, products: new Set<string>() }
    ];
    for (const r of this.inventoryRows()) {
      if (!r.expiryDate || r.qtyOnHand <= 0) continue;
      const days = Math.floor((new Date(r.expiryDate).getTime() - today.getTime()) / 86400000);
      const b = buckets.find(bk => days <= bk.maxDays) ?? buckets[buckets.length - 1];
      b.qty += r.qtyOnHand;
      b.products.add(String(r.productId));
    }
    return buckets;
  });

  // ---- Period sales report ----
  periodDays = signal<DailySalesReport[]>([]);
  periodLoading = signal(false);
  periodTotals = computed(() => {
    const days = this.periodDays();
    return {
      sales: days.reduce((s, d) => s + (d.totalSalesAmount ?? 0), 0),
      cost: days.reduce((s, d) => s + (d.totalCostAmount ?? 0), 0),
      profit: days.reduce((s, d) => s + (d.totalProfitAmount ?? 0), 0),
      returns: days.reduce((s, d) => s + (d.totalReturnsAmount ?? 0), 0)
    };
  });
  periodProducts = computed(() => {
    const map = new Map<string, DailySalesReportItem & { quantitySold: number; salesAmount: number; costAmount: number; profitAmount: number }>();
    for (const d of this.periodDays()) {
      for (const it of d.items ?? []) {
        const cur = map.get(it.productId) ?? { ...it, quantitySold: 0, salesAmount: 0, costAmount: 0, profitAmount: 0 };
        cur.quantitySold += it.quantitySold;
        cur.salesAmount += it.salesAmount;
        cur.costAmount += it.costAmount;
        cur.profitAmount += it.profitAmount;
        map.set(it.productId, cur);
      }
    }
    return [...map.values()].sort((a, b) => b.salesAmount - a.salesAmount);
  });

  auditForm = this.fb.group({
    type: [''],
    from: [''],
    to: ['']
  });

  readonly auditFields: FormField[] = [
    { key: 'type', label: 'common.type', placeholder: 'IN/OUT/LOSS' },
    { key: 'from', label: 'common.from', placeholder: '2026-01-01T00:00:00Z' },
    { key: 'to', label: 'common.to', placeholder: '2026-12-31T23:59:59Z' }
  ];

  dailySalesForm = this.fb.group({
    date: [new Date().toISOString().slice(0, 10)]
  });

  readonly dailySalesFields: FormField[] = [
    { key: 'date', label: 'common.date', type: 'date' }
  ];

  periodForm = this.fb.group({
    from: [''],
    to: ['']
  });

  readonly periodFields: FormField[] = [
    { key: 'from', label: 'common.from', type: 'date' },
    { key: 'to', label: 'common.to', type: 'date' }
  ];

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
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

    this.presetPeriod('week');
    this.loadAudit();
		this.loadDailySales();
    this.loadBreakdown();
  }

  private loadBreakdown(): void {
    this.breakdownLoading.set(true);
    const q = `query Breakdown($branch: String) {
      salesOrders(branch: $branch) { id customer customerId soldAt soldBy discount paymentMethod amountReceived returnedValue lines { productId productName quantity unitPrice } }
      customers { id name phone }
      inventory(filter: { branch: $branch }) { productId sku productName batchNumber expiryDate qtyOnHand }
    }`;
    this.gql.request<SalesOrdersQueryResult & CustomersQueryResult & InventoryQueryResult>(q, { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.orders.set(res.salesOrders ?? []);
        this.customersList.set(res.customers ?? []);
        this.inventoryRows.set(res.inventory ?? []);
        this.breakdownLoading.set(false);
      },
      error: () => this.breakdownLoading.set(false)
    });
  }

  // ---- Period sales report ----

  private iso(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  presetPeriod(p: 'today' | 'week' | 'month' | 'lastMonth'): void {
    const now = new Date();
    let from = new Date(now), to = new Date(now);
    if (p === 'week') {
      const dow = (now.getDay() + 6) % 7; // Monday-start
      from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dow);
    } else if (p === 'month') {
      from = new Date(now.getFullYear(), now.getMonth(), 1);
    } else if (p === 'lastMonth') {
      from = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      to = new Date(now.getFullYear(), now.getMonth(), 0);
    }
    this.periodForm.setValue({ from: this.iso(from), to: this.iso(to) });
    this.loadPeriod();
  }

  loadPeriod(): void {
    const { from, to } = this.periodForm.getRawValue();
    if (!from || !to) return;
    this.periodLoading.set(true);
    const q = `query PeriodSales($from: String!, $to: String!, $branch: String) {
      salesDailyReports(from: $from, to: $to, branch: $branch) {
        date totalSalesAmount totalCostAmount totalProfitAmount totalDiscountAmount totalReturnsAmount
        items { productId sku productName quantitySold salesAmount costAmount profitAmount }
      }
    }`;
    this.gql.request<PeriodSalesQueryResult>(q, { from, to, branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.periodDays.set(res.salesDailyReports ?? []);
        this.periodLoading.set(false);
      },
      error: () => this.periodLoading.set(false)
    });
  }

  // ---- Printing ----

  private branchLabel(): string {
    return this.branchCtx.effective() ?? 'All branches';
  }

  printValuation(): void {
    this.reportPrint.print({
      title: 'Inventory Valuation',
      meta: [{ label: 'Branch', value: this.branchLabel() }, { label: 'As of', value: new Date().toLocaleDateString('en-GB') }],
      summary: [{ label: 'Total stock value (cost)', value: this.reportPrint.moneyStr(this.valuation()?.totalStockValue ?? 0) }],
      tables: []
    });
  }

  printDailySales(): void {
    const r = this.dailySales();
    if (!r) return;
    this.reportPrint.print({
      title: 'Daily Sales Report',
      meta: [{ label: 'Date', value: r.date }, { label: 'Branch', value: this.branchLabel() }],
      summary: [
        { label: 'Total sales', value: this.reportPrint.moneyStr(r.totalSalesAmount) },
        { label: 'Cost', value: this.reportPrint.moneyStr(r.totalCostAmount) },
        { label: 'Profit', value: this.reportPrint.moneyStr(r.totalProfitAmount) },
        { label: 'Returns', value: this.reportPrint.moneyStr(r.totalReturnsAmount ?? 0) }
      ],
      tables: [{
        headers: ['SKU', 'Product', 'Qty', 'Sales', 'Cost', 'Profit'],
        align: ['l', 'l', 'r', 'r', 'r', 'r'],
        rows: (r.items ?? []).map(i => [i.sku, i.productName, i.quantitySold, this.reportPrint.moneyStr(i.salesAmount), this.reportPrint.moneyStr(i.costAmount), this.reportPrint.moneyStr(i.profitAmount)])
      }]
    });
  }

  printPeriodSales(): void {
    const { from, to } = this.periodForm.getRawValue();
    const t = this.periodTotals();
    this.reportPrint.print({
      title: 'Sales Report — Period',
      meta: [{ label: 'Period', value: `${from} → ${to}` }, { label: 'Branch', value: this.branchLabel() }],
      summary: [
        { label: 'Total sales', value: this.reportPrint.moneyStr(t.sales) },
        { label: 'Cost', value: this.reportPrint.moneyStr(t.cost) },
        { label: 'Profit', value: this.reportPrint.moneyStr(t.profit) },
        { label: 'Returns', value: this.reportPrint.moneyStr(t.returns) }
      ],
      tables: [
        {
          title: 'Per day',
          headers: ['Date', 'Sales', 'Cost', 'Profit', 'Returns'],
          align: ['l', 'r', 'r', 'r', 'r'],
          rows: this.periodDays().map(d => [d.date, this.reportPrint.moneyStr(d.totalSalesAmount), this.reportPrint.moneyStr(d.totalCostAmount), this.reportPrint.moneyStr(d.totalProfitAmount), this.reportPrint.moneyStr(d.totalReturnsAmount ?? 0)])
        },
        {
          title: 'Per product',
          headers: ['SKU', 'Product', 'Qty', 'Sales', 'Profit'],
          align: ['l', 'l', 'r', 'r', 'r'],
          rows: this.periodProducts().map(i => [i.sku, i.productName, i.quantitySold, this.reportPrint.moneyStr(i.salesAmount), this.reportPrint.moneyStr(i.profitAmount)])
        }
      ]
    });
  }

  printBreakdown(): void {
    const { from, to } = this.periodForm.getRawValue();
    this.reportPrint.print({
      title: 'Sales Breakdown Report',
      meta: [{ label: 'Period', value: `${from} → ${to}` }, { label: 'Branch', value: this.branchLabel() }],
      tables: [
        {
          title: 'By payment method',
          headers: ['Method', 'Orders', 'Sales', 'Received'],
          align: ['l', 'r', 'r', 'r'],
          rows: this.paymentBreakdown().map(r => [r.method, r.orders, this.reportPrint.moneyStr(r.sales), this.reportPrint.moneyStr(r.received)])
        },
        {
          title: 'By seller',
          headers: ['Seller', 'Orders', 'Sales', 'Returns'],
          align: ['l', 'r', 'r', 'r'],
          rows: this.sellerBreakdown().map(r => [r.seller, r.orders, this.reportPrint.moneyStr(r.sales), this.reportPrint.moneyStr(r.returns)])
        }
      ]
    });
  }

  printDebtors(): void {
    this.reportPrint.print({
      title: 'Debtors Report',
      meta: [{ label: 'Branch', value: this.branchLabel() }],
      summary: [
        { label: 'Customers owing', value: String(this.debtors().length) },
        { label: 'Total debt', value: this.reportPrint.moneyStr(this.totalDebt()) }
      ],
      tables: [{
        headers: ['Customer', 'Phone', 'Orders', 'Debt'],
        align: ['l', 'l', 'r', 'r'],
        rows: this.debtors().map(d => [d.name, d.phone || '—', d.orders, this.reportPrint.moneyStr(d.debt)])
      }]
    });
  }

  printStock(): void {
    const { from, to } = this.periodForm.getRawValue();
    this.reportPrint.print({
      title: 'Stock Report',
      meta: [{ label: 'Branch', value: this.branchLabel() }, { label: 'Sales period (movers)', value: `${from} → ${to}` }],
      summary: [{ label: 'Units in stock', value: String(this.totalUnits()) }],
      tables: [
        {
          title: 'Stock balance per product',
          headers: ['Product', 'SKU', 'Qty', 'Batches', 'Nearest expiry'],
          align: ['l', 'l', 'r', 'r', 'l'],
          rows: this.stockBalance().map(p => [p.name, p.sku, p.qty, p.batches, p.nearestExpiry || '—'])
        },
        {
          title: 'Fast movers (sold in period)',
          headers: ['Product', 'Qty sold'],
          align: ['l', 'r'],
          rows: this.fastMovers().map(m => [m.name, m.qty])
        },
        {
          title: 'Slow / dead stock (stocked, zero sales in period)',
          headers: ['Product', 'SKU', 'Qty in stock'],
          align: ['l', 'l', 'r'],
          rows: this.slowMovers().map(p => [p.name, p.sku, p.qty])
        },
        {
          title: 'Expiry breakdown',
          headers: ['Bucket', 'Products', 'Units'],
          align: ['l', 'r', 'r'],
          rows: this.expiryBuckets().map(b => [b.label, b.products.size, b.qty])
        }
      ]
    });
  }

  printAudit(): void {
    const raw = this.auditForm.getRawValue();
    this.reportPrint.print({
      title: 'Stock Movement Audit',
      meta: [
        { label: 'Branch', value: this.branchLabel() },
        { label: 'Type', value: raw.type || 'All' },
        { label: 'From', value: raw.from || '—' },
        { label: 'To', value: raw.to || '—' }
      ],
      tables: [{
        headers: ['Date', 'Type', 'Qty', 'Product', 'Batch', 'By', 'Note'],
        align: ['l', 'c', 'r', 'l', 'l', 'l', 'l'],
        rows: this.allMovements().map(m => [m.createdAt?.slice(0, 16).replace('T', ' '), m.type, m.quantity, m.productName, m.batchNumber, m.createdBy ?? '-', m.note ?? ''])
      }]
    });
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

