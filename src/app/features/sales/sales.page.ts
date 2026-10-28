import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog/confirm-dialog.component';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { ReturnDialogComponent, SalesReturnResult } from '../../shared/ui/return-dialog/return-dialog.component';
import { ToastService } from '../../shared/services/toast.service';
import { TranslationService } from '../../core/i18n/translation.service';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PermissionService } from '../../shared/services/permission.service';
import { ReceiptDialogComponent } from '../../shared/ui/receipt-dialog/receipt-dialog.component';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { CIS_FORM_IMPORTS, FormField } from '../../shared/ui/form/form-field.component';

type Product = {
  id: string;
  sku: string;
  name: string;
  sellingPrice?: number | null;
  active: boolean;
};

type SalesDeduction = {
  id: string;
  batchId: string;
  batchNumber: string;
  expiryDate: string;
  quantity: number;
};

type SalesOrderLine = {
  id: string;
  productId: string;
  sku: string;
  productName: string;
  quantity: number;
  location: string;
  unitPrice: number;
  deductions: SalesDeduction[];
  returnedQuantity: number;
};

type SalesOrder = {
  id: string;
  customer?: string | null;
  customerId?: string | number | null;
  referenceNumber?: string | null;
  soldAt: string;
  soldBy?: string | null;
  discount?: number | null;
  paymentMethod?: string | null;
  amountReceived?: number | null;
  lines: SalesOrderLine[];
  returnedValue: number;
  exchangeSale: boolean;
  exchangeReference?: string | null;
  exchangeLines?: SalesOrderLine[];
  returnReference?: string | null;
  exchangeReturnValue?: number | null;
  exchangeSettlement?: number | null;
  exchangeRefundAmount?: number | null;
  exchangeDebtCredit?: number | null;
  exchangeRefundMethod?: string | null;
};

type SalesOrdersQueryResult = { salesOrders: SalesOrder[] };
type CustomerPayment = { id: string; salesOrderId: string; amount: number; paidAt: string };
type CreateSaleMutationResult = { createSale: SalesOrder };
type ProductsQueryResult = { products: Product[] };

type CounterCart = {
  id: string;
  customer?: string | null;
  referenceNumber?: string | null;
  createdAt: string;
  createdBy?: string | null;
  total: number;
  lines: Array<{ productName: string; quantity: number; unitPrice: number; location: string }>;
};

type PendingCartsQueryResult = { pendingCounterCarts: CounterCart[] };

@Component({
  selector: 'cis-sales-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ConfirmDialogComponent, ModalComponent, MoneyPipe, TranslatePipe, RowActionsMenuComponent, PagerComponent, ReturnDialogComponent, ReceiptDialogComponent, CIS_FORM_IMPORTS],
  templateUrl: './sales.page.html',
  styleUrl: './sales.page.scss'
})
export class SalesPage {
  readonly perm = inject(PermissionService);

  loading = signal(false);
  error = signal<string | null>(null);
  orders = signal<SalesOrder[]>([]);
  pendingCarts = signal<CounterCart[]>([]);

  activeTab = signal<'all' | 'today' | 'week' | 'month' | 'pending'>('all');

  dateFilter = signal('');
  query = signal('');

  pageSize = signal(10);
  pageIndex = signal(0);

  filteredOrders = computed(() => {
    let list = this.orders();
    switch (this.activeTab()) {
      case 'today':
        list = list.filter((o) => this.isToday(o.soldAt));
        break;
      case 'week':
        list = list.filter((o) => this.isThisWeek(o.soldAt));
        break;
      case 'month':
        list = list.filter((o) => this.isThisMonth(o.soldAt));
        break;
    }
    return list.filter((o) => this.matchesDate(o.soldAt) && this.matchesQuery(o));
  });

  filteredCarts = computed(() =>
    this.pendingCarts().filter((c) => this.matchesDate(c.createdAt) && this.matchesCartQuery(c))
  );

  displayedOrders = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.filteredOrders().slice(start, start + size);
  });

  displayedCarts = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.filteredCarts().slice(start, start + size);
  });

  totalSalesValue = computed(() =>
    this.orders().reduce((sum, o) => sum + this.saleNetValue(o), 0)
  );

  todayCollectionValue = computed(() =>
    this.orders()
      .filter((o) => this.isToday(o.soldAt))
      .reduce((sum, o) => sum + this.saleNetValue(o), 0)
  );

  outstandingValue = computed(() =>
    this.pendingCarts().reduce((sum, c) => sum + Number(c.total ?? 0), 0)
  );

  createOpen = signal(false);

  editingOrderId = signal<string | null>(null);


  confirmDeleteOpen = signal(false);
  pendingDeleteOrderId = signal<string | null>(null);
  adminCodeOpen = signal(false);
  adminCode = signal('');
  deleteError = signal<string | null>(null);

  products = signal<Product[]>([]);
  productQuery = signal('');

  filteredProducts = computed(() => {
    const q = this.productQuery().trim().toLowerCase();
    const all = this.products().filter((p) => p.active);
    if (!q) return all;
    return all.filter((p) => {
      const sku = (p.sku || '').toLowerCase();
      const name = (p.name || '').toLowerCase();
      return sku.includes(q) || name.includes(q);
    });
  });

  lines = signal<Array<{ productId: number; quantity: number; unitPrice: number; location?: string | null }>>([]);

  displayLines = computed(() => {
    const byId = new Map(this.products().map((p) => [+p.id, p] as const));
    return this.lines().map((l) => ({
      ...l,
      product: byId.get(l.productId) || null
    }));
  });

  private readonly fb = inject(FormBuilder);

  headerForm = this.fb.group({
    customer: [''],
    customerId: [null as number | null],
    referenceNumber: [''],
    discount: [0 as number | null],
    paymentMethod: ['CASH'],
    amountReceived: [null as number | null]
  });

  customers = signal<Array<{ id: number; name: string; phone?: string | null }>>([]);
  customerDebt = signal<number | null>(null);
  newCustomerOpen = signal(false);
  newCustomerBusy = signal(false);
  newCustomerForm = this.fb.nonNullable.group({ name: ['', [Validators.required, Validators.maxLength(200)]], phone: ['', [Validators.maxLength(40)]] });

  readonly headerRow1Fields: FormField[] = [
    { key: 'customerId', label: 'common.customer', type: 'template' },
    { key: 'referenceNumber', label: 'common.reference', hint: '(auto)', placeholder: 'Auto (e.g. 201026-0001)' },
    { key: 'discount', label: 'common.discount', type: 'number', min: 0, step: 0.01 }
  ];

  readonly headerRow2Fields: FormField[] = [
    {
      key: 'paymentMethod', label: 'customers.paymentMethod', type: 'select',
      options: [
        { value: 'CASH', label: 'Cash' },
        { value: 'M-PESA', label: 'M-Pesa' },
        { value: 'AIRTEL_MONEY', label: 'Airtel Money' },
        { value: 'TIGO_PESA', label: 'Tigo-Pesa' },
        { value: 'CARD', label: 'Card' },
        { value: 'BANK', label: 'Bank' },
        { value: 'OTHER', label: 'Other' }
      ]
    },
    { key: 'amountReceived', label: 'customers.receivedAmount', type: 'number', min: 0, step: 0.01 }
  ];

  readonly newCustomerFields: FormField[] = [
    { key: 'name', label: 'customers.name', required: true, maxlength: 200 },
    { key: 'phone', label: 'customers.phone', maxlength: 40 }
  ];

  lineForm = this.fb.group({
    productId: [null as number | null, [Validators.required, Validators.min(1)]],
    quantity: [1 as number, [Validators.required, Validators.min(1)]],
    unitPrice: [0 as number, [Validators.required, Validators.min(0)]],
    location: ['MAIN']
  });

  readonly lineFields: FormField[] = [
    {
      key: 'productId', label: 'common.productName', type: 'select', required: true,
      options: () => [
        { value: null, label: 'common.selectProduct' },
        ...this.filteredProducts().map(p => ({ value: +p.id, label: p.name }))
      ]
    },
    { key: 'quantity', label: 'common.qty', type: 'number', required: true, min: 1 },
    { key: 'unitPrice', label: 'common.unitPrice', type: 'number', required: true, min: 0, step: 0.01 },
    {
      key: 'location', label: 'common.branch', type: 'select',
      options: () => this.branchCtx.options().map(b => ({ value: b.code, label: `${b.name} (${b.code})` }))
    }
  ];

  paymentFields(o: SalesOrder): FormField[] {
    return [
      {
        key: 'amount', label: 'customers.paymentAmount', type: 'number', required: true, min: 0.01, step: 0.01,
        hint: () => `${this.i18n.translate('customers.debt')}: ${this.orderDebt(o).toLocaleString()}`
      },
      { key: 'paidAt', label: 'customers.paymentDate', type: 'date', required: true }
    ];
  }

  readonly branchCtx = inject(BranchContext);

  constructor(private readonly gql: GraphqlService) {
    effect(() => {
      if (this.branchCtx.locked()) this.lineForm.controls.location.disable();
      else this.lineForm.controls.location.enable();
    });
    this.headerForm.controls.customerId.valueChanges.subscribe(() => this.loadCustomerDebt());
    this.lineForm.controls.productId.valueChanges.subscribe(() => this.onProductChanged());
    this.perm.load();
    this.loadProducts();
    this.loadCustomers();
    this.load();
  }

  loadCustomerDebt(): void {
    const id = this.headerForm.controls.customerId.value;
    if (id == null) { this.customerDebt.set(null); return; }
    this.gql.request<{ customerDebt: number }>(
      'query CustomerDebt($customerId: ID!) { customerDebt(customerId: $customerId) }',
      { customerId: String(id) }
    ).subscribe({
      next: r => this.customerDebt.set(r.customerDebt > 0 ? r.customerDebt : null),
      error: () => this.customerDebt.set(null)
    });
  }

  loadCustomers(): void {
    this.gql.request<{ customers: Array<{ id: number; name: string; phone?: string | null }> }>(
      'query Customers($query: String) { customers(query: $query) { id name phone } }',
      { query: null }
    ).subscribe({
      next: (res) => this.customers.set(res.customers ?? []),
      error: () => {}
    });
  }

  customerName(id: number | null): string {
    return this.customers().find((c) => Number(c.id) === Number(id))?.name || '';
  }

  createCustomerInline(): void {
    if (this.newCustomerBusy() || this.newCustomerForm.invalid) {
      this.newCustomerForm.markAllAsTouched();
      return;
    }
    this.newCustomerBusy.set(true);
    const v = this.newCustomerForm.getRawValue();
    this.gql.request<{ createCustomer: { id: number; name: string } }>(
      'mutation CreateCustomer($input: CreateCustomerInput!) { createCustomer(input: $input) { id name } }',
      { input: { name: v.name.trim(), phone: v.phone.trim() || null } }
    ).subscribe({
      next: (res) => {
        const c = res.createCustomer;
        this.customers.update((list) => [c, ...list]);
        this.headerForm.controls.customerId.setValue(Number(c.id));
        this.loadCustomerDebt();
        this.headerForm.controls.customer.setValue(c.name);
        this.newCustomerForm.reset({ name: '', phone: '' });
        this.newCustomerOpen.set(false);
        this.newCustomerBusy.set(false);
      },
      error: (e: unknown) => {
        this.newCustomerBusy.set(false);
        this.error.set(e instanceof Error ? e.message : 'Failed to register customer');
      }
    });
  }

  openDeleteConfirm(id: string): void {
    this.pendingDeleteOrderId.set(String(id));
    this.adminCode.set('');
    this.deleteError.set(null);
    if (this.perm.isAdmin()) {
      this.confirmDeleteOpen.set(true);
    } else {
      this.adminCodeOpen.set(true);
    }
  }

  cancelDeleteConfirm(): void {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteOrderId.set(null);
  }

  cancelAdminCode(): void {
    this.adminCodeOpen.set(false);
    this.pendingDeleteOrderId.set(null);
    this.adminCode.set('');
    this.deleteError.set(null);
  }

  confirmDelete(): void {
    const id = this.pendingDeleteOrderId();
    if (!id) return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteOrderId.set(null);
    this.deleteSale(id, null);
  }

  confirmAdminCodeDelete(): void {
    const id = this.pendingDeleteOrderId();
    const code = this.adminCode().trim();
    if (!id) return;
    if (!code) {
      this.deleteError.set('Admin approval code is required to delete a sale');
      return;
    }
    this.deleteSale(id, code);
  }

  returnOrderId = signal<string | null>(null);
  private readonly toast = inject(ToastService);
  private readonly i18n = inject(TranslationService);

  openReturn(o: SalesOrder): void {
    this.returnOrderId.set(String(o.id));
  }

  onReturnCompleted(r: SalesReturnResult): void {
    this.toast.success(`${this.i18n.translate(r.isExchange ? 'returns.exchangeDone' : 'returns.returnDone')} — ${r.reference}`);
    this.load();
  }

  canReturn(): boolean {
    return this.perm.canCreate('RETURNS') || this.perm.canCreate('SALES');
  }

  detailsOrder = signal<SalesOrder | null>(null);
  detailsPayments = signal<CustomerPayment[]>([]);
  payOpen = signal(false);
  paying = signal(false);

  paymentForm = this.fb.group({
    amount: [null as number | null, [Validators.required, Validators.min(0.01)]],
    paidAt: ['', [Validators.required]]
  });

  orderDebt(o: SalesOrder): number {
    const net = this.saleTotalValue(o);
    const received = o.amountReceived == null ? net : Math.max(0, Number(o.amountReceived));
    return Math.max(0, net - received);
  }

  orderPayments(o: SalesOrder): CustomerPayment[] {
    return this.detailsPayments().filter((p) => String(p.salesOrderId) === String(o.id));
  }

  toggleDetails(o: SalesOrder): void {
    this.detailsOrder.set(o);
    this.payOpen.set(false);
    this.detailsPayments.set([]);
    this.paymentForm.reset({ amount: null, paidAt: new Date().toISOString().slice(0, 10) });
    if (o.customerId != null) {
      this.loadPayments(o.customerId);
    }
  }

  closeDetails(): void {
    this.detailsOrder.set(null);
    this.detailsPayments.set([]);
    this.payOpen.set(false);
  }

  private loadPayments(customerId: string | number): void {
    this.gql
      .request<{ customerPayments: CustomerPayment[] }>(
        'query CustomerPayments($customerId: ID!) { customerPayments(customerId: $customerId) { id salesOrderId amount paidAt } }',
        { customerId: String(customerId) }
      )
      .subscribe({
        next: (res) => this.detailsPayments.set(res.customerPayments ?? []),
        error: () => this.detailsPayments.set([])
      });
  }

  openPayFromRow(o: SalesOrder): void {
    this.toggleDetails(o);
    this.openPay();
  }

  openPay(): void {
    const o = this.detailsOrder();
    if (!o) return;
    const debt = this.orderDebt(o);
    this.paymentForm.reset({ amount: debt > 0 ? Math.round(debt * 100) / 100 : null, paidAt: new Date().toISOString().slice(0, 10) });
    this.payOpen.set(true);
  }

  savePayment(): void {
    const o = this.detailsOrder();
    if (!o || o.customerId == null) return;
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    const v = this.paymentForm.getRawValue();
    if (v.amount == null || v.amount <= 0 || v.amount > this.orderDebt(o) + 0.001) {
      this.error.set('Payment amount must be greater than zero and not exceed the outstanding debt');
      return;
    }
    this.paying.set(true);
    const paidAtIso = new Date(`${v.paidAt}T12:00:00`).toISOString();
    this.gql
      .request<{ recordCustomerPayment: CustomerPayment[] }>(
        'mutation RecordCustomerPayment($customerId: ID!, $amount: Float!, $paidAt: String) { recordCustomerPayment(customerId: $customerId, amount: $amount, paidAt: $paidAt) { id salesOrderId amount paidAt } }',
        { customerId: String(o.customerId), amount: v.amount, paidAt: paidAtIso }
      )
      .subscribe({
        next: () => {
          this.paying.set(false);
          this.payOpen.set(false);
          this.load();
          this.loadPayments(o.customerId!);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to record payment');
          this.paying.set(false);
        }
      });
  }

  openCreate(): void {
    this.error.set(null);
    this.editingOrderId.set(null);
    this.headerForm.reset({ customer: '', customerId: null, referenceNumber: '', discount: 0, paymentMethod: 'CASH', amountReceived: null });
    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: this.branchCtx.writeBranch() });
    this.lines.set([]);
    this.productQuery.set('');
    this.newCustomerOpen.set(false);
    this.customerDebt.set(null);
    this.createOpen.set(true);
  }

  openEdit(o: SalesOrder): void {
    this.error.set(null);
    this.editingOrderId.set(String(o.id));
    this.headerForm.reset({
      customer: o.customer ?? '',
      customerId: o.customerId != null ? Number(o.customerId) : null,
      referenceNumber: o.referenceNumber ?? '',
      discount: Number(o.discount ?? 0),
      paymentMethod: o.paymentMethod ?? 'CASH',
      amountReceived: o.amountReceived != null ? Number(o.amountReceived) : null
    });
    this.loadCustomerDebt();
    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: this.branchCtx.writeBranch() });
    this.lines.set(
      (o.lines ?? []).map((l) => ({
        productId: Number(l.productId),
        quantity: Number(l.quantity ?? 0),
        unitPrice: Number(l.unitPrice ?? 0),
        location: (l.location?.trim() ? String(l.location).trim() : 'MAIN')
      }))
    );
    this.productQuery.set('');
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
    this.editingOrderId.set(null);
  }

  loadProducts(): void {
    const q = `query Products($filter: ProductFilter) {
      products(filter: $filter) {
        id
        sku
        name
        sellingPrice
        active
      }
    }`;

    this.gql.request<ProductsQueryResult>(q, { filter: null }).subscribe({
      next: (res) => {
        this.products.set(res.products);
      },
      error: () => {
        this.products.set([]);
      }
    });
  }

  onProductChanged(): void {
    const raw = this.lineForm.getRawValue();
    const productId = Number(raw.productId ?? 0);
    if (!Number.isFinite(productId) || productId <= 0) return;

    const p = this.products().find((x) => Number(x.id) === productId);
    if (!p) return;

    this.lineForm.patchValue({ unitPrice: Number(p.sellingPrice ?? 0) });
  }

  lineTotal(quantity: number | null | undefined, unitPrice: number | null | undefined): number {
    const q = Number(quantity ?? 0);
    const p = Number(unitPrice ?? 0);
    if (!Number.isFinite(q) || !Number.isFinite(p)) return 0;
    return q * p;
  }

  currentLineTotal(): number {
    const raw = this.lineForm.getRawValue();
    return this.lineTotal(raw.quantity, raw.unitPrice);
  }

  grandTotal(): number {
    return this.lines().reduce((sum, l) => sum + this.lineTotal(l.quantity, l.unitPrice), 0);
  }

  discountValue(): number {
    return Math.max(0, Number(this.headerForm.getRawValue().discount ?? 0) || 0);
  }

  discountError(): string | null {
    const d = this.discountValue();
    if (Number(this.headerForm.getRawValue().discount ?? 0) < 0) return 'Discount cannot be negative.';
    if (d > this.grandTotal()) return 'Discount cannot exceed the sale total.';
    return null;
  }

  netTotal(): number {
    return Math.max(0, this.grandTotal() - this.discountValue());
  }

  saleTotalValue(o: SalesOrder): number {
    const lines = (o.lines ?? []).reduce((sum, l) => sum + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
    return Math.max(0, lines - Number(o.discount ?? 0));
  }

  /** Net value that actually stays in the till: sale minus whatever came back via returns. */
  saleNetValue(o: SalesOrder): number {
    return Math.max(0, this.saleTotalValue(o) - Number(o.returnedValue ?? 0));
  }

  readonly receiptOpen = signal(false);
  readonly receiptOrder = signal<SalesOrder | null>(null);

  printReceipt(o: SalesOrder): void {
    this.receiptOrder.set(o);
    this.receiptOpen.set(true);
  }

  orderStatus(o: SalesOrder): 'EXCHANGE' | 'RETURNED' | 'PARTIAL' | 'COMPLETED' {
    if (o.exchangeSale) return 'EXCHANGE';
    const returned = (o.lines ?? []).reduce((s, l) => s + Number(l.returnedQuantity ?? 0), 0);
    if (returned <= 0) return 'COMPLETED';
    const sold = (o.lines ?? []).reduce((s, l) => s + Number(l.quantity ?? 0), 0);
    return returned >= sold ? 'RETURNED' : 'PARTIAL';
  }

  isToday(soldAt: string): boolean {
    const d = new Date(soldAt);
    if (isNaN(d.getTime())) return false;
    const now = new Date();
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  }

  isThisWeek(soldAt: string): boolean {
    const d = new Date(soldAt);
    if (isNaN(d.getTime())) return false;
    const now = new Date();
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
    monday.setHours(0, 0, 0, 0);
    return d.getTime() >= monday.getTime();
  }

  isThisMonth(soldAt: string): boolean {
    const d = new Date(soldAt);
    if (isNaN(d.getTime())) return false;
    const now = new Date();
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  }

  matchesDate(dateStr: string): boolean {
    const df = this.dateFilter();
    if (!df) return true;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return false;
    const [y, m, day] = df.split('-').map(Number);
    return d.getFullYear() === y && d.getMonth() === m - 1 && d.getDate() === day;
  }

  matchesQuery(o: SalesOrder): boolean {
    const q = this.query().trim().toLowerCase();
    if (!q) return true;
    return (o.customer ?? '').toLowerCase().includes(q)
      || (o.referenceNumber ?? '').toLowerCase().includes(q)
      || (o.soldBy ?? '').toLowerCase().includes(q)
      || (o.lines ?? []).some((l) =>
          (l.productName ?? '').toLowerCase().includes(q)
          || (l.sku ?? '').toLowerCase().includes(q));
  }

  matchesCartQuery(c: CounterCart): boolean {
    const q = this.query().trim().toLowerCase();
    if (!q) return true;
    return (c.customer ?? '').toLowerCase().includes(q)
      || (c.referenceNumber ?? '').toLowerCase().includes(q)
      || (c.createdBy ?? '').toLowerCase().includes(q)
      || (c.lines ?? []).some((l) => (l.productName ?? '').toLowerCase().includes(q));
  }

  setTab(tab: 'all' | 'today' | 'week' | 'month' | 'pending'): void {
    this.activeTab.set(tab);
    this.pageIndex.set(0);
    this.detailsOrder.set(null);
  }

  tabClass(tab: string): string {
    return this.activeTab() === tab
      ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow-sm'
      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100';
  }

  onDateChange(value: string): void {
    this.dateFilter.set(value);
    this.pageIndex.set(0);
    if (value && this.activeTab() !== 'pending') {
      this.activeTab.set('all');
    }
  }

  onQueryChange(value: string): void {
    this.query.set(value);
    this.pageIndex.set(0);
  }

  clearFilters(): void {
    this.dateFilter.set('');
    this.query.set('');
    this.pageIndex.set(0);
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const q = `query SalesOrders($branch: String) { salesOrders(branch: $branch) { id customer customerId referenceNumber soldAt soldBy discount paymentMethod amountReceived returnedValue exchangeSale exchangeReference returnReference exchangeReturnValue exchangeSettlement exchangeRefundAmount exchangeDebtCredit exchangeRefundMethod lines { id productId sku productName quantity location unitPrice returnedQuantity deductions { id batchId batchNumber expiryDate quantity } } exchangeLines { id productId sku productName quantity unitPrice } } }`;

    this.gql.request<SalesOrdersQueryResult>(q, { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        const sorted = (res.salesOrders ?? []).slice().sort((a, b) => {
          const t = new Date(b.soldAt).getTime() - new Date(a.soldAt).getTime();
          return t !== 0 ? t : Number(b.id) - Number(a.id);
        });
        this.orders.set(sorted);
        const d = this.detailsOrder();
        if (d) {
          this.detailsOrder.set(sorted.find((o) => String(o.id) === String(d.id)) ?? null);
        }
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load sales orders');
        this.loading.set(false);
      }
    });

    const cq = `query PendingCarts { pendingCounterCarts { id customer referenceNumber createdAt createdBy total lines { productName quantity unitPrice location } } }`;
    this.gql.request<PendingCartsQueryResult>(cq).subscribe({
      next: (res) => this.pendingCarts.set(res.pendingCounterCarts ?? []),
      error: () => this.pendingCarts.set([])
    });
  }

  addLine(): void {
    this.lineForm.markAllAsTouched();
    const raw = this.lineForm.getRawValue();

    const productId = Number(raw.productId ?? 0);
    if (!Number.isFinite(productId) || productId <= 0) {
      this.error.set('Product is required');
      return;
    }

    const quantity = Number(raw.quantity ?? 0);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      this.error.set('Quantity must be greater than 0');
      return;
    }

    const unitPrice = Number(raw.unitPrice ?? 0);
    if (!Number.isFinite(unitPrice)) {
      this.error.set('Unit price is required');
      return;
    }
    if (unitPrice < 0) {
      this.error.set('Unit price must be 0 or more');
      return;
    }

    this.error.set(null);
    this.lines.set([
      ...this.lines(),
      {
        productId,
        quantity,
        unitPrice,
        location: (raw.location?.trim() ? String(raw.location).trim() : null)
      }
    ]);

    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: this.branchCtx.writeBranch() });
  }

  removeLine(index: number): void {
    this.lines.set(this.lines().filter((_, i) => i !== index));
  }

  createSale(): void {
    this.saveSale();
  }

  saveSale(): void {
    if (!this.lines().length) {
      this.error.set('Add at least one line');
      return;
    }
    if (this.discountError()) {
      this.error.set(this.discountError());
      return;
    }
    const header = this.headerForm.getRawValue();
    if (header.amountReceived != null && Number(header.amountReceived) < 0) {
      this.error.set('Amount received cannot be negative');
      return;
    }
    if (!header.customerId && header.amountReceived != null && Number(header.amountReceived) < this.netTotal()) {
      this.error.set('Select a registered customer to sell on debt');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const editingId = this.editingOrderId();
    if (editingId) {
      const mutation = `mutation UpdateSale($input: UpdateSaleInput!) {
        updateSale(input: $input) {
          id soldAt discount customerId paymentMethod amountReceived
          lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } }
        }
      }`;

      this.gql
        .request<{ updateSale: SalesOrder }>(mutation, {
          input: {
            id: editingId,
            customer: this.customerName(Number(header.customerId)) || null,
            customerId: header.customerId,
            referenceNumber: header.referenceNumber || null,
            discount: this.discountValue() || null,
            paymentMethod: header.paymentMethod || 'CASH',
            amountReceived: header.amountReceived != null ? Number(header.amountReceived) : null,
            lines: this.lines()
          }
        })
        .subscribe({
          next: () => {
            this.headerForm.reset({ customer: '', referenceNumber: '' });
            this.lines.set([]);
            this.createOpen.set(false);
            this.editingOrderId.set(null);
            this.load();
          },
          error: (e: unknown) => {
            this.error.set(e instanceof Error ? e.message : 'Failed to update sale');
            this.loading.set(false);
          }
        });
      return;
    }

    const mutation = `mutation CreateSale($input: CreateSaleInput!) {
      createSale(input: $input) {
        id soldAt discount customerId paymentMethod amountReceived
        lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } }
      }
    }`;

    this.gql
      .request<CreateSaleMutationResult>(mutation, {
        input: {
          customer: this.customerName(Number(header.customerId)) || null,
          customerId: header.customerId,
          referenceNumber: header.referenceNumber || null,
          discount: this.discountValue() || null,
          paymentMethod: header.paymentMethod || 'CASH',
          amountReceived: header.amountReceived != null ? Number(header.amountReceived) : null,
          lines: this.lines()
        }
      })
      .subscribe({
        next: () => {
          this.headerForm.reset({ customer: '', referenceNumber: '' });
          this.lines.set([]);
          this.createOpen.set(false);
          this.editingOrderId.set(null);
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to create sale');
          this.loading.set(false);
        }
      });
  }

  deleteSale(id: string, adminCode: string | null): void {
    this.loading.set(true);
    this.error.set(null);
    this.deleteError.set(null);

    const mutation = `mutation DeleteSale($input: DeleteSaleInput!) { deleteSale(input: $input) }`;
    this.gql.request<{ deleteSale: boolean }>(mutation, { input: { id, adminCode } }).subscribe({
      next: () => {
        this.adminCodeOpen.set(false);
        this.pendingDeleteOrderId.set(null);
        this.adminCode.set('');
        this.load();
      },
      error: (e: unknown) => {
        const msg = e instanceof Error ? e.message : 'Failed to delete sale';
        if (this.adminCodeOpen()) {
          this.deleteError.set(msg);
        } else {
          this.error.set(msg);
        }
        this.loading.set(false);
      }
    });
  }
}

