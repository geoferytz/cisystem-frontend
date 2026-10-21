import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PermissionService } from '../../shared/services/permission.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { ModalComponent } from '../../shared/ui/modal/modal.component';

type Customer = {
  id: string;
  name: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  createdAt: string;
};

type SaleLine = { quantity: number; unitPrice: number };
type SaleOrder = {
  id: string;
  customer?: string | null;
  customerId?: string | number | null;
  soldAt: string;
  soldBy?: string | null;
  discount?: number | null;
  amountReceived?: number | null;
  paymentMethod?: string | null;
  lines: SaleLine[];
};

type CustomersQueryResult = { customers: Customer[] };
type SalesOrdersQueryResult = { salesOrders: SaleOrder[] };
type CustomerPayment = { id: string; salesOrderId: string; amount: number; paidAt: string };

type Period = 'week' | 'month' | 'year' | 'all';

@Component({
  selector: 'cis-customers-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MoneyPipe, TranslatePipe, RowActionsMenuComponent, PagerComponent, ModalComponent],
  templateUrl: './customers.page.html',
  styleUrl: './customers.page.scss'
})
export class CustomersPage {
  readonly perm = inject(PermissionService);

  loading = signal(false);
  error = signal<string | null>(null);

  customers = signal<Customer[]>([]);
  orders = signal<SaleOrder[]>([]);

  query = signal('');
  activeTab = signal<'all' | 'debtors' | 'paid'>('all');
  period = signal<Period>('month');

  pageSize = signal(10);
  pageIndex = signal(0);

  createOpen = signal(false);
  editingCustomerId = signal<string | null>(null);
  detailsCustomer = signal<Customer | null>(null);
  selectedSale = signal<SaleOrder | null>(null);
  detailsPayments = signal<CustomerPayment[]>([]);
  payOpen = signal(false);
  paying = signal(false);

  private readonly fb = inject(FormBuilder);
  private readonly gql = inject(GraphqlService);

  customerForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    phone: ['', [Validators.maxLength(40)]],
    email: ['', [Validators.maxLength(320)]],
    address: ['', [Validators.maxLength(500)]]
  });

  paymentForm = this.fb.group({
    amount: [null as number | null, [Validators.required, Validators.min(0.01)]],
    paidAt: ['', [Validators.required]]
  });

  private inPeriod(soldAt: string, period: Period): boolean {
    if (period === 'all') return true;
    const d = new Date(soldAt);
    if (isNaN(d.getTime())) return false;
    const now = new Date();
    if (period === 'year') return d.getFullYear() === now.getFullYear();
    if (period === 'month') return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
    const day = now.getDay();
    const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - ((day + 6) % 7));
    return d >= monday && d <= now;
  }

  orderNet(o: SaleOrder): number {
    const lines = (o.lines ?? []).reduce((s, l) => s + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
    return Math.max(0, lines - Number(o.discount ?? 0));
  }

  orderDebt(o: SaleOrder): number {
    const net = this.orderNet(o);
    const received = o.amountReceived == null ? net : Math.max(0, Number(o.amountReceived));
    return Math.max(0, net - received);
  }

  ordersFor(customerId: string): SaleOrder[] {
    return this.orders().filter((o) => String(o.customerId ?? '') === String(customerId));
  }

  customerStats(c: Customer) {
    const all = this.ordersFor(c.id);
    const inPeriod = all.filter((o) => this.inPeriod(o.soldAt, this.period()));
    return {
      totalPurchases: inPeriod.reduce((s, o) => s + this.orderNet(o), 0),
      orderCount: inPeriod.length,
      lifetimeOrders: all.length,
      debt: all.reduce((s, o) => s + this.orderDebt(o), 0)
    };
  }

  filteredCustomers = computed(() => {
    const q = this.query().trim().toLowerCase();
    let list = this.customers();
    if (q) {
      list = list.filter((c) =>
        (c.name || '').toLowerCase().includes(q) ||
        (c.phone || '').toLowerCase().includes(q) ||
        (c.email || '').toLowerCase().includes(q)
      );
    }
    const tab = this.activeTab();
    if (tab === 'debtors') return list.filter((c) => this.customerStats(c).debt > 0);
    if (tab === 'paid') return list.filter((c) => this.customerStats(c).lifetimeOrders > 0 && this.customerStats(c).debt <= 0);
    return list;
  });

  displayedCustomers = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.filteredCustomers().slice(start, start + size);
  });

  statTotalCustomers = computed(() => this.customers().length);
  statDebtors = computed(() => this.customers().filter((c) => this.customerStats(c).debt > 0).length);
  statTotalDebt = computed(() => this.customers().reduce((s, c) => s + this.customerStats(c).debt, 0));
  statFrequentBuyers = computed(() => this.customers().filter((c) => this.customerStats(c).lifetimeOrders >= 2).length);
  statPaidCustomers = computed(() =>
    this.customers().filter((c) => this.customerStats(c).lifetimeOrders > 0 && this.customerStats(c).debt <= 0).length
  );
  statPeriodPurchases = computed(() =>
    this.orders().filter((o) => this.inPeriod(o.soldAt, this.period())).reduce((s, o) => s + this.orderNet(o), 0)
  );

  constructor() {
    this.perm.load();
    this.refresh();
  }

  refresh(): void {
    this.loading.set(true);
    this.error.set(null);
    forkJoin({
      customers: this.gql.request<CustomersQueryResult>(
        'query Customers($query: String) { customers(query: $query) { id name phone email address createdAt } }',
        { query: null }
      ),
      orders: this.gql.request<SalesOrdersQueryResult>(
        'query SalesOrders($branch: String) { salesOrders(branch: $branch) { id customer customerId soldAt soldBy discount amountReceived paymentMethod lines { quantity unitPrice } } }',
        { branch: null }
      )
    }).subscribe({
      next: (res) => {
        this.customers.set(res.customers.customers ?? []);
        this.orders.set((res.orders.salesOrders ?? []).slice().sort((a, b) => String(b.soldAt).localeCompare(String(a.soldAt))));
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load customers');
        this.loading.set(false);
      }
    });
  }

  onQueryInput(value: string): void {
    this.query.set(value);
    this.pageIndex.set(0);
  }

  setTab(tab: 'all' | 'debtors' | 'paid'): void {
    this.activeTab.set(tab);
    this.pageIndex.set(0);
  }

  setPeriod(p: Period): void {
    this.period.set(p);
  }

  toggleDetails(c: Customer): void {
    this.detailsCustomer.set(c);
    this.payOpen.set(false);
    this.detailsPayments.set([]);
    this.selectedSale.set(this.ordersFor(c.id)[0] ?? null);
    this.paymentForm.reset({ amount: null, paidAt: new Date().toISOString().slice(0, 10) });
    this.gql
      .request<{ customerPayments: CustomerPayment[] }>(
        'query CustomerPayments($customerId: ID!) { customerPayments(customerId: $customerId) { id salesOrderId amount paidAt } }',
        { customerId: c.id }
      )
      .subscribe({
        next: (res) => this.detailsPayments.set(res.customerPayments ?? []),
        error: () => this.detailsPayments.set([])
      });
  }

  closeDetails(): void {
    this.detailsCustomer.set(null);
    this.selectedSale.set(null);
    this.detailsPayments.set([]);
    this.payOpen.set(false);
  }

  selectSale(o: SaleOrder): void {
    this.selectedSale.set(o);
  }

  openPayFromRow(c: Customer): void {
    this.toggleDetails(c);
    this.openPay();
  }

  openPay(): void {
    const c = this.detailsCustomer();
    if (!c) return;
    const debt = this.customerStats(c).debt;
    this.paymentForm.reset({ amount: debt > 0 ? Math.round(debt * 100) / 100 : null, paidAt: new Date().toISOString().slice(0, 10) });
    this.payOpen.set(true);
  }

  savePayment(): void {
    const c = this.detailsCustomer();
    if (!c) return;
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    const v = this.paymentForm.getRawValue();
    const debt = this.customerStats(c).debt;
    if (v.amount == null || v.amount <= 0 || v.amount > debt + 0.001) {
      this.error.set('Payment amount must be greater than zero and not exceed the outstanding debt');
      return;
    }
    this.paying.set(true);
    const paidAtIso = new Date(`${v.paidAt}T12:00:00`).toISOString();
    this.gql
      .request<{ recordCustomerPayment: CustomerPayment[] }>(
        'mutation RecordCustomerPayment($customerId: ID!, $amount: Float!, $paidAt: String) { recordCustomerPayment(customerId: $customerId, amount: $amount, paidAt: $paidAt) { id salesOrderId amount paidAt } }',
        { customerId: c.id, amount: v.amount, paidAt: paidAtIso }
      )
      .subscribe({
        next: () => {
          this.paying.set(false);
          this.payOpen.set(false);
          this.refreshOrdersAndPayments(c);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to record payment');
          this.paying.set(false);
        }
      });
  }

  private refreshOrdersAndPayments(c: Customer): void {
    forkJoin({
      orders: this.gql.request<SalesOrdersQueryResult>(
        'query SalesOrders($branch: String) { salesOrders(branch: $branch) { id customer customerId soldAt soldBy discount amountReceived paymentMethod lines { quantity unitPrice } } }',
        { branch: null }
      ),
      payments: this.gql.request<{ customerPayments: CustomerPayment[] }>(
        'query CustomerPayments($customerId: ID!) { customerPayments(customerId: $customerId) { id salesOrderId amount paidAt } }',
        { customerId: c.id }
      )
    }).subscribe({
      next: (res) => {
        this.orders.set((res.orders.salesOrders ?? []).slice().sort((a, b) => String(b.soldAt).localeCompare(String(a.soldAt))));
        this.detailsPayments.set(res.payments.customerPayments ?? []);
        const s = this.selectedSale();
        if (s) {
          this.selectedSale.set(this.ordersFor(c.id).find((o) => String(o.id) === String(s.id)) ?? null);
        }
      }
    });
  }

  detailsOrders(): SaleOrder[] {
    const c = this.detailsCustomer();
    return c ? this.ordersFor(c.id).slice(0, 10) : [];
  }

  openCreate(): void {
    this.error.set(null);
    this.editingCustomerId.set(null);
    this.customerForm.reset({ name: '', phone: '', email: '', address: '' });
    this.createOpen.set(true);
  }

  openEdit(c: Customer): void {
    this.error.set(null);
    this.editingCustomerId.set(String(c.id));
    this.customerForm.reset({
      name: c.name ?? '',
      phone: c.phone ?? '',
      email: c.email ?? '',
      address: c.address ?? ''
    });
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
    this.editingCustomerId.set(null);
  }

  saveCustomer(): void {
    if (this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      return;
    }
    const v = this.customerForm.getRawValue();
    const editingId = this.editingCustomerId();
    this.loading.set(true);
    if (editingId) {
      this.gql
        .request<{ updateCustomer: Customer }>(
          'mutation UpdateCustomer($input: UpdateCustomerInput!) { updateCustomer(input: $input) { id name phone email address createdAt } }',
          { input: { id: editingId, name: v.name, phone: v.phone || null, email: v.email || null, address: v.address || null } }
        )
        .subscribe({
          next: () => { this.loading.set(false); this.closeCreate(); this.refresh(); },
          error: (e: unknown) => { this.loading.set(false); this.error.set(e instanceof Error ? e.message : 'Failed to update customer'); }
        });
      return;
    }
    this.gql
      .request<{ createCustomer: Customer }>(
        'mutation CreateCustomer($input: CreateCustomerInput!) { createCustomer(input: $input) { id name phone email address createdAt } }',
        { input: { name: v.name, phone: v.phone || null, email: v.email || null, address: v.address || null } }
      )
      .subscribe({
        next: () => { this.loading.set(false); this.closeCreate(); this.refresh(); },
        error: (e: unknown) => { this.loading.set(false); this.error.set(e instanceof Error ? e.message : 'Failed to create customer'); }
      });
  }
}
