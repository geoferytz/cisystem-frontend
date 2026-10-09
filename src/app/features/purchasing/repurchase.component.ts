import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PermissionService } from '../../shared/services/permission.service';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { PendingRepurchasesComponent } from './pending-repurchases.component';
import { RepurchaseLine, RepurchaseOrder, RepurchaseProduct, orderFields } from './repurchase.types';

export type { RepurchaseLine, RepurchaseOrder, RepurchaseProduct } from './repurchase.types';

@Component({
  selector: 'cis-repurchase',
  standalone: true,
  imports: [CommonModule, FormsModule, MoneyPipe, ModalComponent, PendingRepurchasesComponent],
  templateUrl: './repurchase.component.html',
  styleUrl: './repurchase.component.scss'
})
export class RepurchaseComponent {
  @Output() received = new EventEmitter<void>();
  @Output() addPurchase = new EventEmitter<void>();
  @ViewChild(PendingRepurchasesComponent) pendingComponent?: PendingRepurchasesComponent;
  readonly perm = inject(PermissionService);
  private readonly gql = inject(GraphqlService);
  private readonly branchCtx = inject(BranchContext);
  open = signal(false);
  loading = signal(false);
  busy = signal(false);
  error = signal<string | null>(null);
  products = signal<RepurchaseProduct[]>([]);
  cart = signal<RepurchaseLine[]>([]);
  search = signal('');
  filter = signal<'all' | 'inventory' | 'out'>('all');
  readonly filters = [{ id: 'all', label: 'All Products' }, { id: 'inventory', label: 'Inventory' }, { id: 'out', label: 'Out of Stock' }] as const;
  supplier = '';
  invoiceNumber = '';
  private requestId = crypto.randomUUID();
  private submission: { id: string; supplier: string; invoiceNumber: string; branch: string; lines: Omit<RepurchaseLine, 'sku' | 'productName'>[] } | null = null;
  locked = signal(false);
  filteredProducts = computed(() => {
    const query = this.search().trim().toLowerCase();
    return this.products().filter(p => [p.name, p.sku, p.barcode, p.brand, p.category].some(v => v?.toLowerCase().includes(query))
      && (this.filter() === 'all' || (this.filter() === 'inventory' ? p.availableQuantity > 0 : p.availableQuantity <= 0)));
  });
  itemCount = computed(() => this.cart().reduce((sum, l) => sum + l.quantity, 0));
  total = computed(() => this.orderTotal(this.cart()));

  onOrdersLoaded(orders: RepurchaseOrder[]): void {
    if (orders.some(o => o.id === this.requestId)) {
      this.cart.set([]); this.submission = null; this.requestId = crypto.randomUUID();
      this.supplier = ''; this.invoiceNumber = ''; this.error.set(null);
      this.pendingComponent?.showNotice('Your submitted order is listed below and is ready to receive.');
    }
  }

  openRepurchase(): void {
    this.open.set(true);
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading.set(true);
    this.error.set(null);
    this.gql.request<{ repurchaseProducts: RepurchaseProduct[] }>(`query RepurchaseProducts($branch: String) {
      repurchaseProducts(branch: $branch) { id sku name barcode brand category unitOfMeasure active buyingPrice sellingPrice availableQuantity }
    }`, { branch: this.branchCtx.writeBranch() }).subscribe({
      next: res => { this.products.set(res.repurchaseProducts); this.loading.set(false); },
      error: e => { this.error.set(e instanceof Error ? e.message : 'Could not load products'); this.loading.set(false); }
    });
  }

  addProduct(p: RepurchaseProduct): void {
    if (this.locked() || this.busy() || !p.active) return;
    const line = this.cart().find(l => l.productId === p.id);
    if (line) { this.setLine(p.id, 'quantity', line.quantity + 1); return; }
    this.cart.update(lines => [...lines, { productId: p.id, sku: p.sku, productName: p.name,
      quantity: 1, buyingPrice: p.buyingPrice ?? 0, sellingPrice: p.sellingPrice ?? 0 }]);
  }

  setLine(id: string, field: 'quantity' | 'buyingPrice' | 'sellingPrice', value: unknown): void {
    if (this.locked() || this.busy()) return;
    const number = Number(value);
    if (value === null || value === '' || !Number.isFinite(number) || number < (field === 'quantity' ? 1 : 0)
      || (field === 'quantity' && (!Number.isInteger(number) || number > 1000000))
      || (field !== 'quantity' && (number > 1000000000 || Math.abs(number * 10000 - Math.round(number * 10000)) > 0.001))) {
      this.error.set('Enter a whole quantity (1–1000000) and non-negative prices with up to four decimal places.');
      return;
    }
    this.error.set(null);
    this.cart.update(lines => lines.map(l => l.productId === id ? { ...l, [field]: number } : l));
  }

  changeLine(id: string, field: 'quantity' | 'buyingPrice' | 'sellingPrice', event: Event): void {
    const input = event.target as HTMLInputElement;
    this.setLine(id, field, input.value);
    input.value = String(this.cart().find(l => l.productId === id)?.[field] ?? '');
  }

  setText(id: string, field: 'batchNumber' | 'expiryDate', value: string): void {
    if (this.locked() || this.busy()) return;
    this.cart.update(lines => lines.map(l => l.productId === id ? { ...l, [field]: value.trim() } : l));
  }

  removeProduct(id: string): void {
    if (!this.locked() && !this.busy()) this.cart.update(lines => lines.filter(l => l.productId !== id));
  }

  orderTotal(lines: RepurchaseLine[]): number { return lines.reduce((sum, l) => sum + l.buyingPrice * l.quantity, 0); }

  submit(): void {
    if (this.busy() || !this.cart().length || !this.perm.canCreate('PURCHASING')) return;
    if (!this.submission) this.submission = { id: this.requestId, supplier: this.supplier, invoiceNumber: this.invoiceNumber,
      branch: this.branchCtx.writeBranch(),
      lines: this.cart().map(({ productId, quantity, buyingPrice, sellingPrice, batchNumber, expiryDate }) => ({ productId, quantity, buyingPrice, sellingPrice, batchNumber: (batchNumber ?? '').trim() || null, expiryDate: (expiryDate ?? '').trim() || null })) };
    this.busy.set(true);
    this.locked.set(true);
    this.error.set(null);
    this.gql.request<{ submitRepurchase: RepurchaseOrder }>(`mutation SubmitRepurchase($input: SubmitRepurchaseInput!) {
      submitRepurchase(input: $input) { ${orderFields} }
    }`, { input: this.submission }).subscribe({
      next: () => {
        this.busy.set(false); this.locked.set(false); this.submission = null; this.requestId = crypto.randomUUID();
        this.cart.set([]); this.supplier = ''; this.invoiceNumber = ''; this.open.set(false);
        this.pendingComponent?.showNotice('Order submitted. Stock and prices will update only when you receive it.');
        this.pendingComponent?.refresh();
      },
      error: e => {
        this.busy.set(false); this.locked.set(false); this.submission = null;
        this.error.set((e instanceof Error ? e.message : 'Submission could not be confirmed') + '. Retry to confirm the same order, or close and refresh pending orders.');
      }
    });
  }
}
