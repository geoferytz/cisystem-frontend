import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog/confirm-dialog.component';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PermissionService } from '../../shared/services/permission.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

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
};

type SalesOrder = {
  id: string;
  customer?: string | null;
  referenceNumber?: string | null;
  soldAt: string;
  soldBy?: string | null;
  lines: SalesOrderLine[];
};

type SalesOrdersQueryResult = { salesOrders: SalesOrder[] };
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
  imports: [CommonModule, ReactiveFormsModule, ConfirmDialogComponent, ModalComponent, MoneyPipe, TranslatePipe, RowActionsMenuComponent, PagerComponent],
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
    this.orders().reduce((sum, o) => sum + this.saleTotalValue(o), 0)
  );

  todayCollectionValue = computed(() =>
    this.orders()
      .filter((o) => this.isToday(o.soldAt))
      .reduce((sum, o) => sum + this.saleTotalValue(o), 0)
  );

  outstandingValue = computed(() =>
    this.pendingCarts().reduce((sum, c) => sum + Number(c.total ?? 0), 0)
  );

  createOpen = signal(false);

  editingOrderId = signal<string | null>(null);
  detailsOrderId = signal<string | null>(null);

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
    referenceNumber: ['']
  });

  lineForm = this.fb.group({
    productId: [null as number | null, [Validators.required, Validators.min(1)]],
    quantity: [1 as number, [Validators.required, Validators.min(1)]],
    unitPrice: [0 as number, [Validators.required, Validators.min(0)]],
    location: ['MAIN']
  });

  readonly branchCtx = inject(BranchContext);

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    this.loadProducts();
    this.load();
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

  toggleDetails(o: SalesOrder): void {
    const id = String(o.id);
    this.detailsOrderId.set(this.detailsOrderId() === id ? null : id);
  }

  openCreate(): void {
    this.error.set(null);
    this.editingOrderId.set(null);
    this.headerForm.reset({ customer: '', referenceNumber: '' });
    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: this.branchCtx.writeBranch() });
    this.lines.set([]);
    this.productQuery.set('');
    this.createOpen.set(true);
  }

  openEdit(o: SalesOrder): void {
    this.error.set(null);
    this.editingOrderId.set(String(o.id));
    this.headerForm.reset({
      customer: o.customer ?? '',
      referenceNumber: o.referenceNumber ?? ''
    });
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

  saleTotalValue(o: SalesOrder): number {
    return (o.lines ?? []).reduce((sum, l) => sum + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
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
    this.detailsOrderId.set(null);
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

    const q = `query SalesOrders($branch: String) { salesOrders(branch: $branch) { id customer referenceNumber soldAt soldBy lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } } } }`;

    this.gql.request<SalesOrdersQueryResult>(q, { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        const sorted = (res.salesOrders ?? []).slice().sort((a, b) => {
          const t = new Date(b.soldAt).getTime() - new Date(a.soldAt).getTime();
          return t !== 0 ? t : Number(b.id) - Number(a.id);
        });
        this.orders.set(sorted);
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

    this.loading.set(true);
    this.error.set(null);

    const header = this.headerForm.getRawValue();

    const editingId = this.editingOrderId();
    if (editingId) {
      const mutation = `mutation UpdateSale($input: UpdateSaleInput!) {
        updateSale(input: $input) {
          id soldAt
          lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } }
        }
      }`;

      this.gql
        .request<{ updateSale: SalesOrder }>(mutation, {
          input: {
            id: editingId,
            customer: header.customer || null,
            referenceNumber: header.referenceNumber || null,
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
        id soldAt
        lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } }
      }
    }`;

    this.gql
      .request<CreateSaleMutationResult>(mutation, {
        input: {
          customer: header.customer || null,
          referenceNumber: header.referenceNumber || null,
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

