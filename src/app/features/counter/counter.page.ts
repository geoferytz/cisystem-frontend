import { CommonModule } from '@angular/common';
import { Component, DestroyRef, ElementRef, HostListener, ViewChild, computed, effect, inject, signal, untracked } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PwaService } from '../../core/pwa.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PermissionService } from '../../shared/services/permission.service';
import { BarcodeScannerComponent } from '../../shared/ui/barcode-scanner/barcode-scanner.component';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog/confirm-dialog.component';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { toIsoDate } from '../../shared/utils/date.utils';

export type CounterProduct = {
  id: string; sku: string; barcode: string | null; name: string; brand: string | null;
  category: string | null; unitOfMeasure: string | null; sellingPrice: number | null; availableQuantity: number;
  batchNumber: string | null; expiryDate: string | null; daysToExpiry: number | null; suggestedSellingPrice: number | null;
};
export type CartLine = { productId: string; sku: string; productName: string; quantity: number; unitPrice: number; location: string; expiryDate?: string | null };
export type HeldCart = { id: string; version: number; customer: string | null; referenceNumber: string | null; createdAt: string; updatedAt: string; createdBy: string | null; total: number; lines: CartLine[] };
type ExpenseCategory = { id: string; name: string };
const CART_FIELDS = 'id version customer referenceNumber createdAt updatedAt createdBy total lines { productId sku productName quantity unitPrice location }';

@Component({
  selector: 'cis-counter-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MoneyPipe, ModalComponent, ConfirmDialogComponent, BarcodeScannerComponent, RowActionsMenuComponent, PagerComponent, TranslatePipe],
  templateUrl: './counter.page.html',
  styleUrl: './counter.page.scss'
})
export class CounterPage {
  readonly perm = inject(PermissionService);
  readonly pwa = inject(PwaService);
  private readonly gql = inject(GraphqlService);
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  @ViewChild('saleWorkspace') private workspace?: ElementRef<HTMLElement>;

  readonly workspaceOpen = signal(false);
  readonly products = signal<CounterProduct[]>([]);
  readonly pending = signal<HeldCart[]>([]);
  readonly categories = signal<ExpenseCategory[]>([]);
  readonly lines = signal<CartLine[]>([]);
  readonly busy = signal(false);
  readonly catalogLoading = signal(false);
  readonly pendingLoading = signal(false);
  readonly categoriesLoading = signal(false);
  readonly catalogError = signal<string | null>(null);
  readonly pendingError = signal<string | null>(null);
  readonly actionError = signal<string | null>(null);
  readonly expenseError = signal<string | null>(null);
  readonly success = signal<string | null>(null);
  readonly dirty = signal(false);
  readonly search = signal('');
  readonly category = signal('');
  readonly visibleLimit = signal(36);
  readonly pendingSearch = signal('');
  readonly checkoutOpen = signal(false);
  readonly expenseOpen = signal(false);
  readonly scannerOpen = signal(false);
  readonly cancelTarget = signal<HeldCart | null>(null);
  readonly discardTarget = signal<HeldCart | 'new' | 'close' | 'leave' | null>(null);
  private leaveResolve: ((value: boolean) => void) | null = null;
  readonly cartId = signal<string>(crypto.randomUUID());
  readonly cartVersion = signal<number | null>(null);
  readonly location = new FormControl('MAIN', { nonNullable: true });
  readonly branchCtx = inject(BranchContext);

  private readonly syncLocation = effect(() => {
    const code = this.branchCtx.writeBranch();
    if (code && this.location.value !== code && !this.lines().length) {
      this.location.setValue(code);
    }
  });
  readonly headerForm = this.fb.nonNullable.group({ customer: ['', Validators.maxLength(200)], referenceNumber: ['', Validators.maxLength(120)] });
  readonly expenseForm = this.fb.nonNullable.group({
    date: [toIsoDate(new Date()), Validators.required],
    categoryId: ['', Validators.required],
    description: ['', Validators.maxLength(1000)],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    paymentMethod: ['CASH', Validators.required]
  });

  readonly productCategories = computed(() => [...new Set(this.products().map(p => p.category || 'Uncategorized'))].sort());
  readonly filteredProducts = computed(() => {
    const query = this.search().trim().toLowerCase();
    return this.products().filter(p => (!this.category() || (p.category || 'Uncategorized') === this.category()) &&
      (!query || [p.name, p.sku, p.barcode, p.brand].some(value => value?.toLowerCase().includes(query))));
  });
  readonly visibleProducts = computed(() => this.filteredProducts().slice(0, this.visibleLimit()));
  readonly quantityByProduct = computed(() => new Map(this.lines().map(line => [line.productId, line.quantity])));
  readonly itemCount = computed(() => this.lines().reduce((sum, line) => sum + line.quantity, 0));
  readonly total = computed(() => Math.round(this.lines().reduce((sum, line) => sum + line.quantity * line.unitPrice, 0) * 10000) / 10000);
  readonly pendingValue = computed(() => this.pending().reduce((sum, cart) => sum + cart.total, 0));
  readonly filteredPending = computed(() => {
    const query = this.pendingSearch().trim().toLowerCase();
    return this.pending().filter(cart => !query || [cart.id, cart.customer, cart.referenceNumber, ...cart.lines.map(l => l.productName)].some(value => value?.toLowerCase().includes(query)));
  });
  readonly pendingPageSize = signal(10);
  readonly pendingPageIndex = signal(0);
  readonly displayedPending = computed(() => {
    const size = this.pendingPageSize();
    const start = this.pendingPageIndex() * size;
    return this.filteredPending().slice(start, start + size);
  });
  readonly stockIssues = computed(() => {
    const byId = new Map(this.products().map(p => [p.id, p]));
    return this.lines().some(line => !byId.has(line.productId) || line.quantity > byId.get(line.productId)!.availableQuantity);
  });

  constructor() {
    this.perm.load();
    this.headerForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.dirty.set(true));
    effect(() => {
      const canSell = this.perm.canCreate('SALES');
      const canViewSales = this.perm.canView('SALES');
      const canExpense = this.perm.canCreate('EXPENSES');
      untracked(() => {
        if (canSell) this.loadProducts();
        if (canViewSales) this.loadPending();
        if (canExpense) this.loadExpenseCategories();
      });
    });
  }

  loadProducts(): void {
    this.catalogLoading.set(true);
    this.catalogError.set(null);
    this.gql.request<{ counterProducts: CounterProduct[] }>(`query CounterProducts($location: String) {
      counterProducts(location: $location) { id sku barcode name brand category unitOfMeasure sellingPrice availableQuantity batchNumber expiryDate daysToExpiry suggestedSellingPrice }
    }`, { location: this.location.value.trim() || this.branchCtx.writeBranch() }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.catalogLoading.set(false))).subscribe({
      next: data => this.products.set(data.counterProducts),
      error: error => this.catalogError.set(this.message(error, 'Could not load products. Please retry.'))
    });
  }

  loadPending(): void {
    if (!this.perm.canView('SALES')) return;
    this.pendingLoading.set(true);
    this.pendingError.set(null);
    this.gql.request<{ pendingCounterCarts: HeldCart[] }>(`query PendingCounterCarts { pendingCounterCarts { ${CART_FIELDS} } }`)
      .pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.pendingLoading.set(false))).subscribe({
        next: data => this.pending.set(data.pendingCounterCarts),
        error: error => this.pendingError.set(this.message(error, 'Could not load pending sales. Please retry.'))
      });
  }

  loadExpenseCategories(): void {
    this.categoriesLoading.set(true);
    this.gql.request<{ counterExpenseCategories: ExpenseCategory[] }>('query CounterExpenseCategories { counterExpenseCategories { id name } }')
      .pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.categoriesLoading.set(false))).subscribe({
        next: data => this.categories.set(data.counterExpenseCategories),
        error: error => this.expenseError.set(this.message(error, 'Could not load expense categories.'))
      });
  }

  openSale(cart: HeldCart | 'new' = 'new'): void {
    if (this.busy() || !this.perm.canCreate('SALES')) return;
    if (this.dirty() && this.lines().length) {
      this.discardTarget.set(cart);
      return;
    }
    this.startSale(cart);
  }

  private startSale(cart: HeldCart | 'new'): void {
    this.actionError.set(null);
    this.success.set(null);
    this.search.set('');
    this.category.set('');
    this.visibleLimit.set(36);
    if (cart === 'new') this.resetCart();
    else this.applyCart(cart);
    this.workspaceOpen.set(true);
    this.loadProducts();
    setTimeout(() => this.scrollTo(this.workspace?.nativeElement));
  }

  viewCart(panel: HTMLElement): void {
    this.scrollTo(panel);
  }

  viewProducts(section: HTMLElement): void {
    this.scrollTo(section);
  }

  private scrollTo(element?: HTMLElement): void {
    element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  closeSale(): void {
    if (this.busy()) return;
    if (this.dirty() && this.lines().length) this.discardTarget.set('close');
    else this.workspaceOpen.set(false);
  }

  confirmDiscard(): void {
    const target = this.discardTarget();
    this.discardTarget.set(null);
    if (!target) return;
    if (target === 'leave') {
      this.resolveLeave(true);
      return;
    }
    if (target === 'close') {
      this.resetCart();
      this.workspaceOpen.set(false);
    } else this.startSale(target);
  }

  cancelDiscard(): void {
    const target = this.discardTarget();
    this.discardTarget.set(null);
    if (target === 'leave') this.resolveLeave(false);
  }

  private resolveLeave(value: boolean): void {
    const resolve = this.leaveResolve;
    this.leaveResolve = null;
    resolve?.(value);
  }

  changeLocation(): void {
    if (this.lines().length || this.busy()) return;
    this.products.set([]);
    this.loadProducts();
  }

  setSearch(value: string): void {
    this.search.set(value);
    this.visibleLimit.set(36);
  }

  onSearchEnter(): void {
    const query = this.search().trim().toLowerCase();
    if (!query) return;
    const matches = this.filteredProducts();
    const exact = matches.find(p => p.barcode?.toLowerCase() === query || p.sku.toLowerCase() === query);
    const product = exact ?? (matches.length === 1 ? matches[0] : undefined);
    if (product) this.addScannedProduct(product);
  }

  onScanned(code: string): void {
    const query = code.trim().toLowerCase();
    const product = this.products().find(p => p.barcode?.toLowerCase() === query || p.sku.toLowerCase() === query);
    if (!product) {
      this.actionError.set(`No product matches barcode "${code.trim()}". Add the barcode to the product first.`);
      return;
    }
    this.addScannedProduct(product);
  }

  private addScannedProduct(product: CounterProduct): void {
    if (!this.canAdd(product)) {
      this.actionError.set(product.availableQuantity === 0 ? `'${product.name}' is out of stock.` :
        product.sellingPrice === null ? `'${product.name}' has no selling price set.` : `'${product.name}' cannot be added right now.`);
      return;
    }
    this.addProduct(product);
    this.search.set('');
  }

  canAdd(product: CounterProduct): boolean {
    return !this.busy() && !this.catalogLoading() && !this.catalogError() && product.sellingPrice !== null &&
      Number.isFinite(product.sellingPrice) && product.sellingPrice >= 0 && (this.quantityByProduct().get(product.id) || 0) < product.availableQuantity;
  }

  canAddDiscounted(product: CounterProduct): boolean {
    return this.canAdd(product) && product.suggestedSellingPrice !== null && Number.isFinite(product.suggestedSellingPrice) && product.suggestedSellingPrice >= 0;
  }

  addProduct(product: CounterProduct, discounted = false): void {
    if (discounted ? !this.canAddDiscounted(product) : !this.canAdd(product)) return;
    const existing = this.lines().find(line => line.productId === product.id);
    const unitPrice = discounted ? product.suggestedSellingPrice! : product.sellingPrice!;
    if (existing) {
      if (Math.abs(existing.unitPrice - unitPrice) > 0.0001) { this.actionError.set('This product is already in the cart at a different price. Remove it first.'); return; }
      this.setQuantity(product.id, existing.quantity + 1);
    } else {
      if (this.lines().length >= 100) { this.actionError.set('A cart can contain up to 100 different products.'); return; }
      this.lines.update(lines => [...lines, { productId: product.id, sku: product.sku, productName: product.name, quantity: 1,
        unitPrice, expiryDate: product.expiryDate, location: this.location.value.trim() || this.branchCtx.writeBranch() }]);
      this.dirty.set(true);
      this.actionError.set(null);
    }
  }

  setQuantity(productId: string, value: number | string): void {
    if (this.busy()) return;
    const quantity = Number(value);
    const product = this.products().find(p => p.id === productId);
    if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 1000000) { this.actionError.set('Enter a valid whole-number quantity.'); return; }
    if (!product || quantity > product.availableQuantity) { this.actionError.set('This quantity exceeds the currently available stock.'); return; }
    this.lines.update(lines => lines.map(line => line.productId === productId ? { ...line, quantity } : line));
    this.dirty.set(true);
    this.actionError.set(null);
  }

  removeProduct(productId: string): void {
    if (this.busy()) return;
    this.lines.update(lines => lines.filter(line => line.productId !== productId));
    this.dirty.set(true);
  }

  saveCart(checkout = false): void {
    if (this.busy() || !this.perm.canCreate('SALES') || !this.pwa.online() || !this.lines().length) return;
    this.headerForm.markAllAsTouched();
    if (this.headerForm.invalid) return;
    if (checkout && (this.stockIssues() || this.catalogLoading() || this.catalogError())) { this.actionError.set('Refresh products and check stock before checkout.'); return; }
    this.busy.set(true);
    this.actionError.set(null);
    const header = this.headerForm.getRawValue();
    this.gql.request<{ saveCounterCart: HeldCart }>(`mutation SaveCounterCart($input: SaveCounterCartInput!) { saveCounterCart(input: $input) { ${CART_FIELDS} } }`, {
      input: { id: this.cartId(), version: this.cartVersion(), customer: header.customer.trim() || null, referenceNumber: header.referenceNumber.trim() || null,
        lines: this.lines().map(({ productId, quantity, location }) => ({ productId, quantity, location })) }
    }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
      next: data => {
        this.applyCart(data.saveCounterCart);
        this.loadPending();
        if (checkout) this.checkoutOpen.set(true);
        else {
          this.success.set('Sale held. Any authorized cashier can resume it from pending sales.');
          this.resetCart();
          this.workspaceOpen.set(false);
        }
      },
      error: error => this.actionError.set(this.message(error, 'Could not hold this sale. Your cart has been kept.'))
    });
  }

  completeSale(): void {
    if (this.busy() || !this.checkoutOpen() || this.cartVersion() === null || !this.pwa.online()) return;
    this.busy.set(true);
    this.actionError.set(null);
    this.gql.request<{ checkoutCounterCart: { id: string } }>('mutation CheckoutCounterCart($input: CheckoutCounterCartInput!) { checkoutCounterCart(input: $input) { id } }', {
      input: { id: this.cartId(), version: this.cartVersion(), expectedTotal: this.total() }
    }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
      next: data => {
        this.success.set(`Sale #${data.checkoutCounterCart.id} completed. Stock has been updated.`);
        this.checkoutOpen.set(false);
        this.workspaceOpen.set(false);
        this.resetCart();
        this.loadPending();
        this.loadProducts();
      },
      error: error => this.actionError.set(this.message(error, 'Checkout failed. Your held cart is safe; retrying will not duplicate this sale.'))
    });
  }

  cancelHeldCart(): void {
    const cart = this.cancelTarget();
    if (!cart || this.busy() || !this.pwa.online() || !this.perm.canDelete('SALES')) return;
    this.busy.set(true);
    this.cancelTarget.set(null);
    this.gql.request<{ cancelCounterCart: boolean }>('mutation CancelCounterCart($input: CounterCartVersionInput!) { cancelCounterCart(input: $input) }', { input: { id: cart.id, version: cart.version } })
      .pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
        next: () => { this.loadPending(); this.success.set('Held sale cancelled. No stock was changed.'); },
        error: error => this.actionError.set(this.message(error, 'Could not cancel the held sale.'))
      });
  }

  openExpense(): void {
    if (this.busy() || !this.perm.canCreate('EXPENSES')) return;
    this.expenseError.set(null);
    this.expenseForm.reset({ date: toIsoDate(new Date()), categoryId: '', description: '', amount: 0, paymentMethod: 'CASH' });
    this.expenseOpen.set(true);
    this.loadExpenseCategories();
  }

  saveExpense(): void {
    if (this.busy() || !this.pwa.online() || !this.perm.canCreate('EXPENSES')) return;
    this.expenseForm.markAllAsTouched();
    if (this.expenseForm.invalid) return;
    const value = this.expenseForm.getRawValue();
    if (!Number.isFinite(value.amount) || !this.categories().some(c => c.id === value.categoryId)) return;
    this.busy.set(true);
    this.expenseError.set(null);
    this.gql.request<{ createExpense: { id: string } }>('mutation CounterCreateExpense($input: CreateExpenseInput!) { createExpense(input: $input) { id } }', {
      input: { ...value, description: value.description.trim() || null }
    }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
      next: () => { this.expenseOpen.set(false); this.success.set('Expense recorded successfully.'); },
      error: error => this.expenseError.set(this.message(error, 'Could not record this expense.'))
    });
  }

  canDeactivate(): boolean | Promise<boolean> {
    if (this.busy()) return false;
    if (!(this.dirty() && this.lines().length)) return true;
    this.discardTarget.set('leave');
    return new Promise<boolean>((resolve) => {
      this.leaveResolve = resolve;
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnload(event: BeforeUnloadEvent): void {
    if (this.busy() || (this.dirty() && this.lines().length)) { event.preventDefault(); event.returnValue = ''; }
  }

  private applyCart(cart: HeldCart): void {
    this.cartId.set(cart.id);
    this.cartVersion.set(cart.version);
    this.lines.set(cart.lines.map(line => ({ ...line })));
    this.location.setValue(cart.lines[0]?.location || this.branchCtx.writeBranch());
    this.headerForm.reset({ customer: cart.customer || '', referenceNumber: cart.referenceNumber || '' }, { emitEvent: false });
    this.dirty.set(false);
  }

  private resetCart(): void {
    this.cartId.set(crypto.randomUUID());
    this.cartVersion.set(null);
    this.lines.set([]);
    this.headerForm.reset({ customer: '', referenceNumber: '' }, { emitEvent: false });
    this.dirty.set(false);
  }

  private message(error: unknown, fallback: string): string {
    return error instanceof Error ? error.message : fallback;
  }
}
