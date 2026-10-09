import {
  PwaService,
  init_pwa_service,
  init_rxjs_interop,
  takeUntilDestroyed
} from "./chunk-DREZCIG3.js";
import {
  RouterLink,
  init_router,
  provideRouter
} from "./chunk-JMVI6IKZ.js";
import {
  BranchContext,
  FormBuilder,
  FormControl,
  MoneyPipe,
  PermissionService,
  ReactiveFormsModule,
  Validators,
  init_branch_context_service,
  init_forms,
  init_money_pipe,
  init_permission_service
} from "./chunk-PPRAD6WO.js";
import {
  GraphqlService,
  init_graphql_service
} from "./chunk-W65P7JEF.js";
import {
  BarcodeScannerComponent,
  init_barcode_scanner_component
} from "./chunk-FBQ2XIGF.js";
import {
  ModalComponent,
  init_modal_component
} from "./chunk-UCASF6XM.js";
import "./chunk-TLWMLDWP.js";
import {
  CommonModule,
  init_common
} from "./chunk-MI63EHBC.js";
import {
  Component,
  DestroyRef,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  Output,
  Pipe,
  Subject,
  TestBed,
  ViewChild,
  __decorate,
  computed,
  effect,
  finalize,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  inject,
  input,
  model,
  of,
  signal,
  throwError,
  untracked
} from "./chunk-NONR5GBI.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\features\counter\counter.page.html
var counter_page_default;
var init_counter_page = __esm({
  "angular:jit:template:src\\app\\features\\counter\\counter.page.html"() {
    counter_page_default = `<div class="counter-page">
  <header class="counter-heading">
    <div>
      <div class="counter-eyebrow">POINT OF SALE</div>
      <h1>Counter</h1>
      <p>A clear workspace for every sale, every customer, every day.</p>
    </div>
    <span class="counter-connection" [class.is-offline]="!pwa.online()"><span></span>{{ pwa.online() ? 'Connected' : 'Offline' }}</span>
  </header>

  <div class="counter-notice success" role="status" *ngIf="success()">{{ success() }} <a *ngIf="perm.canView('SALES')" routerLink="/sales">View sales</a></div>
  <div class="counter-notice error" role="alert" *ngIf="actionError() && !checkoutOpen()">{{ actionError() }}</div>

  <section class="counter-actions" aria-label="Counter actions">
    <button class="counter-action sale-action" type="button" data-counter-action="sale" (click)="openSale()" [disabled]="busy() || !perm.canCreate('SALES')">
      <span class="counter-action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01M12 8h5m-2.5-2.5v5" /></svg></span>
      <span><strong>New Sale</strong><small>Browse products, build a cart, and checkout.</small></span>
      <span class="counter-arrow" aria-hidden="true">\u2192</span>
    </button>
    <button class="counter-action expense-action" type="button" data-counter-action="expense" (click)="openExpense()" [disabled]="busy() || !perm.canCreate('EXPENSES')">
      <span class="counter-action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3ZM9 7h6M9 11h6M9 15h3" /></svg></span>
      <span><strong>New Expenses</strong><small>Record an expense without leaving the counter.</small></span>
      <span class="counter-arrow" aria-hidden="true">\u2192</span>
    </button>
  </section>

  <section class="counter-overview" aria-label="Counter overview">
    <div><span>Held sales</span><strong>{{ pending().length }}</strong><small>Ready to resume</small></div>
    <div><span>Pending value</span><strong>{{ pendingValue() | money }}</strong><small>Not yet included in completed sales</small></div>
    <div><span>Current cart</span><strong>{{ itemCount() }} <small>items</small></strong><small>{{ total() | money }}</small></div>
  </section>

  <section #saleWorkspace class="counter-workspace scroll-mt-28" *ngIf="workspaceOpen()" aria-label="New sale workspace">
    <div class="counter-catalog counter-panel">
      <div class="counter-section-heading">
        <div><h2>Choose products</h2><p>Prices come from your product settings.</p></div>
        <button type="button" class="counter-button secondary" (click)="closeSale()" [disabled]="busy()">Close</button>
      </div>
      <div class="counter-catalog-tools">
        <label class="counter-search"><span class="sr-only">Search products</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><input type="search" placeholder="Search name, SKU, barcode, or brand" [value]="search()" (input)="setSearch($any($event.target).value)" (keydown.enter)="onSearchEnter(); $event.preventDefault()" /></label>
        <label class="counter-location">{{ 'common.branch' | translate }}<select [formControl]="location" [disabled]="lines().length > 0 || busy() || branchCtx.locked()" (change)="changeLocation()" aria-label="Branch"><option *ngFor="let b of branchCtx.options()" [value]="b.code">{{ b.name }} ({{ b.code }})</option></select></label>
        <button type="button" class="counter-button secondary" (click)="scannerOpen.set(true)" [disabled]="busy()">Scan</button>
        <button type="button" class="counter-button secondary" (click)="loadProducts()" [disabled]="catalogLoading() || busy()">Refresh</button>
      </div>
      <div class="counter-category-tabs" aria-label="Product category">
        <button type="button" [class.selected]="!category()" (click)="category.set(''); visibleLimit.set(36)">All products</button>
        <button type="button" *ngFor="let name of productCategories()" [class.selected]="category() === name" (click)="category.set(name); visibleLimit.set(36)">{{ name }}</button>
      </div>
      <div class="counter-notice error" role="alert" *ngIf="catalogError()">{{ catalogError() }}</div>
      <div class="counter-empty" role="status" *ngIf="catalogLoading()">Loading your product catalog\u2026</div>
      <button type="button" *ngIf="lines().length" class="sticky top-24 z-10 mb-3 w-full rounded-xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white shadow-lg min-[1101px]:hidden" (click)="viewCart(cartPanel)">View cart ({{ itemCount() }}) \xB7 {{ total() | money }}</button>
      <div class="counter-product-grid" *ngIf="!catalogLoading()">
        <button type="button" class="counter-product" *ngFor="let product of visibleProducts()" [class.in-cart]="quantityByProduct().has(product.id)" [disabled]="!canAdd(product)" (click)="addProduct(product)" [attr.aria-label]="'Add ' + product.name + ' to cart'">
          <span class="counter-product-top"><span class="counter-product-monogram" aria-hidden="true">{{ product.name.slice(0, 2) | uppercase }}</span><span class="counter-product-count" *ngIf="quantityByProduct().get(product.id) as count">{{ count }} in cart</span></span>
          <small class="counter-product-category">{{ product.category || 'Uncategorized' }}</small>
          <strong>{{ product.name }}</strong>
          <small>{{ product.sku }}<span *ngIf="product.brand"> \xB7 {{ product.brand }}</span></small>
          <span class="counter-product-price">{{ product.sellingPrice === null ? 'Price not set' : (product.sellingPrice | money) }}</span>
          <span class="counter-product-bottom"><small [class.out-of-stock]="product.availableQuantity === 0">{{ product.availableQuantity > 0 ? product.availableQuantity + ' available' : 'Out of stock' }}</small><span class="counter-add" aria-hidden="true">+</span></span>
        </button>
      </div>
      <div class="counter-empty" *ngIf="!catalogLoading() && !catalogError() && !filteredProducts().length"><h3>No products found</h3><p>Try another search or category.</p></div>
      <button type="button" class="counter-button secondary counter-load-more" *ngIf="filteredProducts().length > visibleLimit()" (click)="visibleLimit.set(visibleLimit() + 36)">Show more products ({{ filteredProducts().length - visibleLimit() }} remaining)</button>
    </div>

    <aside #cartPanel class="counter-cart counter-panel scroll-mt-28" aria-label="Sales cart">
      <div class="counter-section-heading"><div><h2>Sales cart</h2><p>{{ cartVersion() === null ? 'New transaction' : 'Resumed held sale' }}</p></div><span class="counter-count">{{ itemCount() }}</span></div>
      <form class="counter-customer-form" [formGroup]="headerForm">
        <label>Customer <small>(optional)</small><input formControlName="customer" maxlength="200" placeholder="Walk-in customer" [readonly]="busy()" /></label>
        <label>Reference <small>(optional)</small><input formControlName="referenceNumber" maxlength="120" placeholder="Order or receipt reference" [readonly]="busy()" /></label>
      </form>
      <div class="counter-empty" *ngIf="!lines().length"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01" /></svg><h3>Your cart is ready</h3><p>Select a product to start this sale.</p></div>
      <div class="counter-cart-lines">
        <article class="counter-cart-line" *ngFor="let line of lines()">
          <div class="counter-line-title"><div><strong>{{ line.productName }}</strong><small>{{ line.sku }} \xB7 {{ line.location }}</small></div><button type="button" class="counter-remove" [attr.aria-label]="'Remove ' + line.productName" (click)="removeProduct(line.productId)" [disabled]="busy()">\xD7</button></div>
          <small>{{ line.unitPrice | money }} each</small>
          <div class="counter-line-bottom"><div class="counter-stepper"><button type="button" [attr.aria-label]="'Decrease ' + line.productName + ' quantity'" (click)="setQuantity(line.productId, line.quantity - 1)" [disabled]="busy() || line.quantity <= 1">\u2212</button><input type="number" min="1" step="1" [value]="line.quantity" [readonly]="busy()" (change)="setQuantity(line.productId, $any($event.target).value)" [attr.aria-label]="line.productName + ' quantity'" /><button type="button" [attr.aria-label]="'Increase ' + line.productName + ' quantity'" (click)="setQuantity(line.productId, line.quantity + 1)" [disabled]="busy()">+</button></div><strong>{{ line.quantity * line.unitPrice | money }}</strong></div>
        </article>
      </div>
      <div class="counter-cart-footer">
        <div class="counter-notice warning" *ngIf="stockIssues() && lines().length && !catalogLoading()">Some items no longer have enough stock. Adjust quantities or hold this cart.</div>
        <div class="counter-total"><span>Total to charge</span><strong aria-live="polite">{{ total() | money }}</strong></div>
        <p class="counter-hint">Stock is checked again at checkout. Held carts do not reserve stock.</p>
        <button type="button" class="counter-button primary counter-charge" (click)="saveCart(true)" [disabled]="busy() || !lines().length || !pwa.online() || stockIssues() || catalogLoading() || !!catalogError()">{{ busy() ? 'Please wait\u2026' : 'Charge ' + (total() | money) }}</button>
        <button type="button" class="counter-button secondary counter-charge" (click)="saveCart()" [disabled]="busy() || !lines().length || !pwa.online()">Hold sale for later</button>
        <button type="button" class="counter-button secondary counter-charge min-[1101px]:hidden" (click)="viewProducts(saleWorkspace)">Back to products</button>
      </div>
    </aside>
  </section>

  <section class="counter-panel counter-pending" *ngIf="perm.canView('SALES')" aria-label="Pending sales">
    <div class="counter-section-heading"><div><h2>Pending sales <span class="counter-count">{{ pending().length }}</span></h2><p>Held carts from all cashiers. Resume a sale when the customer is ready.</p></div><button type="button" class="counter-button secondary" (click)="loadPending()" [disabled]="pendingLoading() || busy()">{{ pendingLoading() ? 'Refreshing\u2026' : 'Refresh list' }}</button></div>
    <label class="counter-search counter-pending-search"><span class="sr-only">Search pending sales</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><input type="search" placeholder="Search customer, reference, or product" [value]="pendingSearch()" (input)="pendingSearch.set($any($event.target).value)" /></label>
    <div class="counter-notice error" role="alert" *ngIf="pendingError()">{{ pendingError() }}</div>
    <div class="counter-empty" role="status" *ngIf="pendingLoading() && !pending().length">Loading pending sales\u2026</div>
    <cis-pager class="mt-2 block" *ngIf="filteredPending().length" [total]="filteredPending().length" [(pageSize)]="pendingPageSize" [(pageIndex)]="pendingPageIndex" />
    <div class="counter-pending-table" *ngIf="filteredPending().length">
      <table class="w-full border-collapse text-sm">
        <thead><tr><th>Sale / customer</th><th>Items</th><th>Last saved</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody><tr *ngFor="let cart of displayedPending()">
          <td><div><strong>{{ cart.customer || 'Walk-in customer' }}</strong><small>{{ cart.referenceNumber || '#' + cart.id.slice(0, 8) }}</small></div></td>
          <td><span>{{ cart.lines.length }} products</span></td>
          <td><span>{{ cart.updatedAt | date:'dd MMM, HH:mm' }}</span></td>
          <td><strong>{{ cart.total | money }}</strong></td>
          <td><span class="counter-status">On hold</span></td>
          <td><cis-row-actions><button type="button" class="cis-row-action" (click)="openSale(cart)" [disabled]="busy() || !perm.canCreate('SALES')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 4l14 8-14 8V4z" /></svg>Resume</button><button type="button" class="cis-row-action cis-row-action-danger" *ngIf="perm.canDelete('SALES')" (click)="cancelTarget.set(cart)" [disabled]="busy()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Cancel</button></cis-row-actions></td>
        </tr></tbody>
      </table>
    </div>
    <div class="counter-empty" *ngIf="!pendingLoading() && !pendingError() && !filteredPending().length"><h3>{{ pendingSearch() ? 'No matching sales' : 'All caught up' }}</h3><p>{{ pendingSearch() ? 'Try a different customer or reference.' : 'No held sales right now. Start a new sale and hold it here whenever you need.' }}</p></div>
  </section>
</div>

<cis-modal [open]="checkoutOpen()" title="Complete this sale" maxWidthClass="max-w-md" (close)="!busy() && checkoutOpen.set(false)">
  <div class="counter-checkout-summary"><span>Total to collect</span><strong>{{ total() | money }}</strong><p>{{ itemCount() }} items \xB7 {{ headerForm.controls.customer.value || 'Walk-in customer' }}</p></div>
  <p class="counter-hint">Confirm that payment has been collected before completing this sale. This records the sale and deducts stock; it does not process an online payment.</p>
  <div class="counter-notice error" role="alert" *ngIf="actionError()">{{ actionError() }}</div>
  <div class="counter-modal-actions"><button type="button" class="counter-button secondary" (click)="checkoutOpen.set(false)" [disabled]="busy()">Back to cart</button><button type="button" class="counter-button primary" (click)="completeSale()" [disabled]="busy() || !pwa.online()">{{ busy() ? 'Completing\u2026' : 'Payment received \xB7 Complete sale' }}</button></div>
</cis-modal>

<cis-modal [open]="expenseOpen()" title="New Expenses" maxWidthClass="max-w-lg" (close)="!busy() && expenseOpen.set(false)">
  <p class="counter-hint">Record an expense against the correct category and payment method.</p>
  <form class="counter-expense-form" [formGroup]="expenseForm" (ngSubmit)="saveExpense()">
    <label>Date<input type="date" formControlName="date" [readonly]="busy()" /></label>
    <label>Category<select formControlName="categoryId"><option value="">{{ categoriesLoading() ? 'Loading categories\u2026' : 'Select an expense category' }}</option><option *ngFor="let item of categories()" [value]="item.id">{{ item.name }}</option></select></label>
    <label>Amount (TSH)<input type="number" min="0.01" step="0.01" formControlName="amount" [readonly]="busy()" /></label>
    <label>Payment method<select formControlName="paymentMethod"><option value="CASH">Cash</option><option value="MPESA">M-Pesa</option><option value="BANK">Bank</option></select></label>
    <label>Description <small>(optional)</small><textarea formControlName="description" rows="3" maxlength="1000" placeholder="What was this expense for?" [readonly]="busy()"></textarea></label>
    <p class="counter-notice warning" *ngIf="!categoriesLoading() && !categories().length">No expense categories are available. Ask an administrator to create a category, then <button type="button" (click)="loadExpenseCategories()">retry</button>.</p>
    <p class="counter-notice error" role="alert" *ngIf="expenseForm.touched && expenseForm.invalid">Choose a date and category, and enter an amount greater than zero.</p>
    <p class="counter-notice error" role="alert" *ngIf="expenseError()">{{ expenseError() }}</p>
    <div class="counter-modal-actions"><button type="button" class="counter-button secondary" (click)="expenseOpen.set(false)" [disabled]="busy()">Cancel</button><button type="submit" class="counter-button primary" [disabled]="busy() || categoriesLoading() || !categories().length || !pwa.online()">{{ busy() ? 'Saving\u2026' : 'Save expense' }}</button></div>
  </form>
</cis-modal>

<cis-confirm-dialog [open]="!!discardTarget()" title="Discard unsaved cart changes?" message="Your unsaved changes will be lost. To keep this cart, go back and choose Hold sale for later." confirmText="Discard changes" cancelText="Keep editing" (confirm)="confirmDiscard()" (cancel)="discardTarget.set(null)" />
<cis-barcode-scanner [open]="scannerOpen()" title="Scan product barcode" (scanned)="onScanned($event)" (close)="scannerOpen.set(false)" />

<cis-confirm-dialog [open]="!!cancelTarget()" title="Cancel this held sale?" message="The cart will be removed from pending sales. No inventory or completed sales will be changed." confirmText="Cancel held sale" cancelText="Keep sale" (confirm)="cancelHeldCart()" (cancel)="cancelTarget.set(null)" />
`;
  }
});

// angular:jit:style:src\app\features\counter\counter.page.scss
var counter_page_default2;
var init_counter_page2 = __esm({
  "angular:jit:style:src\\app\\features\\counter\\counter.page.scss"() {
    counter_page_default2 = "/* src/app/features/counter/counter.page.scss */\n:host {\n  display: block;\n  min-width: 0;\n  color: var(--cis-text);\n}\n.counter-page {\n  display: grid;\n  gap: 24px;\n}\nh1 {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 700;\n}\nh3 {\n  font-weight: 600;\n}\nsmall,\n.counter-hint,\n.counter-heading p,\n.counter-section-heading p {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\n.counter-heading,\n.counter-section-heading,\n.counter-action,\n.counter-product-top,\n.counter-product-bottom,\n.counter-line-title,\n.counter-line-bottom,\n.counter-total {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.counter-heading,\n.counter-section-heading {\n  flex-wrap: wrap;\n}\n.counter-eyebrow {\n  color: var(--cis-primary);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n}\n.counter-connection {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px;\n  border-radius: 30px;\n  background: var(--cis-surface);\n  font-size: 12px;\n}\n.counter-connection > span {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #16a085;\n}\n.counter-connection.is-offline > span {\n  background: #d97706;\n}\n.counter-actions,\n.counter-overview {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.counter-overview {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.counter-action {\n  justify-content: start;\n  padding: 24px;\n  border-radius: 22px;\n  text-align: left;\n}\n.sale-action {\n  background:\n    linear-gradient(\n      120deg,\n      #0d9488,\n      #115e59);\n  color: white;\n}\n.sale-action small {\n  color: inherit;\n}\n.counter-panel,\n.expense-action,\n.counter-overview > div,\n.counter-product {\n  border: 1px solid var(--cis-border);\n  background: var(--cis-surface);\n}\n.counter-action-icon {\n  display: grid;\n  place-items: center;\n  flex: 0 0 54px;\n  height: 54px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.1411764706);\n}\n.expense-action .counter-action-icon,\n.counter-product-monogram,\n.counter-count,\n.counter-add {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.counter-action-icon svg {\n  width: 30px;\n  height: 30px;\n}\n.counter-action strong {\n  display: block;\n  font-size: 21px;\n}\n.counter-action small {\n  display: block;\n  margin-top: 6px;\n}\n.counter-arrow {\n  margin-left: auto;\n  font-size: 24px;\n}\n.counter-overview > div {\n  padding: 18px 22px;\n  border-radius: 18px;\n}\n.counter-overview span,\n.counter-overview small {\n  display: block;\n  font-size: 11px;\n  color: var(--cis-muted);\n}\n.counter-overview strong {\n  display: block;\n  margin: 7px 0;\n  font-size: 23px;\n  font-weight: 800;\n}\n.counter-overview strong small {\n  display: inline;\n}\n.counter-panel {\n  min-width: 0;\n  padding: 22px;\n  border-radius: 20px;\n}\n.counter-workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 350px;\n  gap: 20px;\n  align-items: start;\n}\n.counter-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 10px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.counter-button.primary {\n  color: white;\n  background: var(--cis-primary);\n}\n.counter-button.primary:not(:disabled):hover {\n  background: #0f766e;\n}\n.counter-button.secondary {\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n  border: 1px solid var(--cis-border);\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.counter-catalog-tools {\n  display: flex;\n  align-items: end;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 20px 0 14px;\n}\n.counter-search {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 160px;\n  padding: 0 12px;\n  border: 1px solid var(--cis-border);\n  border-radius: 12px;\n  background: var(--cis-page);\n}\n.counter-search svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.counter-search input {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 0;\n  background: transparent;\n  font-size: 13px;\n}\n.counter-location {\n  width: 105px;\n  font-size: 10px;\n}\n.counter-category-tabs {\n  display: flex;\n  gap: 7px;\n  overflow-x: auto;\n  padding-bottom: 16px;\n}\n.counter-category-tabs button {\n  flex-shrink: 0;\n  padding: 8px 12px;\n  border-radius: 9px;\n  font-size: 11px;\n  background: var(--cis-page);\n}\n.counter-category-tabs .selected {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.counter-product-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));\n  gap: 12px;\n}\n.counter-product {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  gap: 7px;\n  padding: 14px;\n  border-radius: 16px;\n  text-align: left;\n}\n.counter-product.in-cart,\n.counter-product:not(:disabled):hover {\n  border-color: var(--cis-primary);\n  background: var(--cis-page);\n}\n.counter-product strong {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.counter-product small {\n  font-size: 10px;\n}\n.counter-product-top {\n  width: 100%;\n}\n.counter-product-monogram {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 12px;\n  font-weight: 800;\n}\n.counter-product-count {\n  font-size: 9px;\n}\n.counter-product-price {\n  margin-top: auto;\n  padding-top: 6px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.counter-product-bottom {\n  width: 100%;\n}\n.counter-product .out-of-stock {\n  color: #b45309;\n}\n.counter-add,\n.counter-count {\n  display: inline-grid;\n  place-items: center;\n  min-width: 28px;\n  min-height: 28px;\n  border-radius: 8px;\n  padding: 3px;\n}\n.counter-load-more,\n.counter-charge {\n  width: 100%;\n  margin-top: 12px;\n}\n.counter-cart {\n  position: sticky;\n  top: 20px;\n}\n.counter-customer-form,\n.counter-expense-form {\n  display: grid;\n  gap: 13px;\n  margin-top: 18px;\n}\n.counter-customer-form label,\n.counter-expense-form label {\n  display: grid;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--cis-muted);\n}\ninput:not([type=search]),\nselect,\ntextarea {\n  width: 100%;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 9px 11px;\n  background: var(--cis-page);\n  color: var(--cis-text);\n  font-size: 13px;\n}\n.counter-cart-lines {\n  max-height: 420px;\n  overflow-y: auto;\n  margin-top: 16px;\n}\n.counter-cart-line {\n  padding: 15px 0;\n  border-top: 1px solid var(--cis-border);\n}\n.counter-cart-line strong {\n  font-size: 12px;\n}\n.counter-line-title small {\n  display: block;\n}\n.counter-remove {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  font-size: 21px;\n}\n.counter-line-bottom {\n  margin-top: 10px;\n}\n.counter-stepper {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.counter-stepper button {\n  width: 34px;\n  min-height: 40px;\n  background: var(--cis-page);\n}\n.counter-stepper input {\n  width: 48px;\n  border: 0;\n  border-radius: 0;\n  padding: 4px;\n  text-align: center;\n  appearance: textfield;\n}\n.counter-stepper input::-webkit-inner-spin-button {\n  appearance: none;\n}\n.counter-cart-footer {\n  margin-top: 16px;\n  border-top: 1px dashed var(--cis-border);\n  padding-top: 18px;\n}\n.counter-total strong {\n  font-size: 20px;\n  color: var(--cis-primary-strong);\n}\n.counter-hint {\n  margin: 10px 0;\n}\n.counter-notice {\n  padding: 12px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  line-height: 1.6;\n  margin: 10px 0;\n}\n.counter-notice a {\n  margin-left: 8px;\n  text-decoration: underline;\n}\n.counter-notice.success {\n  background: #e7f7ef;\n  color: #166747;\n}\n.counter-notice.error {\n  background: #fff0f0;\n  color: #a12b35;\n}\n.counter-notice.warning,\n.counter-status {\n  background: #fff6e5;\n  color: #875508;\n}\n.counter-empty {\n  padding: 36px 18px;\n  text-align: center;\n  color: var(--cis-muted);\n  font-size: 13px;\n}\n.counter-empty svg {\n  width: 42px;\n  height: 42px;\n  margin: 0 auto 15px;\n}\n.counter-pending-search {\n  max-width: 440px;\n  margin: 20px 0;\n}\n.counter-pending-table {\n  overflow-x: auto;\n  border-radius: 12px;\n}\n.counter-pending-table :is(th, td) {\n  padding: 13px 14px;\n  text-align: left;\n  font-size: 12px;\n}\n.counter-pending-table td {\n  border-bottom: 1px solid var(--cis-border);\n}\n.counter-pending-table small {\n  display: block;\n}\n.counter-status {\n  display: inline-block;\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.counter-row-actions,\n.counter-modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.counter-modal-actions {\n  margin-top: 22px;\n  flex-wrap: wrap;\n}\n.counter-checkout-summary {\n  padding: 22px;\n  border-radius: 16px;\n  background: var(--cis-primary-soft);\n  text-align: center;\n  color: var(--cis-primary-strong);\n}\n.counter-checkout-summary strong {\n  display: block;\n  font-size: 30px;\n  font-weight: 800;\n  margin: 8px 0;\n}\n@media (max-width: 1100px) {\n  .counter-workspace {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .counter-cart {\n    position: static;\n  }\n}\n@media (max-width: 767px) {\n  .counter-actions,\n  .counter-overview {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .counter-action,\n  .counter-panel {\n    padding: 16px;\n  }\n  .counter-product-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .counter-product {\n    padding: 11px;\n  }\n  .counter-catalog-tools .counter-search {\n    flex-basis: 100%;\n  }\n  .counter-location {\n    flex: 1;\n  }\n  .counter-cart-lines {\n    max-height: none;\n  }\n  .counter-modal-actions {\n    flex-direction: column;\n  }\n  .counter-modal-actions .counter-button {\n    width: 100%;\n  }\n  .counter-pending-search {\n    min-width: 0;\n  }\n  input,\n  select,\n  textarea {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=counter.page.css.map */\n";
  }
});

// angular:jit:template:src\app\shared\ui\confirm-dialog\confirm-dialog.component.html
var confirm_dialog_component_default;
var init_confirm_dialog_component = __esm({
  "angular:jit:template:src\\app\\shared\\ui\\confirm-dialog\\confirm-dialog.component.html"() {
    confirm_dialog_component_default = '<cis-modal [open]="open" [title]="title" maxWidthClass="max-w-sm" (close)="cancel.emit()">\r\n  <div class="text-sm text-slate-600">{{ message }}</div>\r\n\r\n  <div class="mt-4 flex items-center justify-end gap-2">\r\n    <button\r\n      type="button"\r\n      class="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-200"\r\n      (click)="cancel.emit()"\r\n    >\r\n      {{ cancelText }}\r\n    </button>\r\n    <button\r\n      type="button"\r\n      class="rounded-xl px-4 py-2 text-sm font-semibold text-white"\r\n      [ngClass]="confirmButtonClass"\r\n      (click)="confirm.emit()"\r\n    >\r\n      {{ confirmText }}\r\n    </button>\r\n  </div>\r\n</cis-modal>\r\n';
  }
});

// angular:jit:style:src\app\shared\ui\confirm-dialog\confirm-dialog.component.scss
var confirm_dialog_component_default2;
var init_confirm_dialog_component2 = __esm({
  "angular:jit:style:src\\app\\shared\\ui\\confirm-dialog\\confirm-dialog.component.scss"() {
    confirm_dialog_component_default2 = "/* src/app/shared/ui/confirm-dialog/confirm-dialog.component.scss */\n/*# sourceMappingURL=confirm-dialog.component.css.map */\n";
  }
});

// src/app/shared/ui/confirm-dialog/confirm-dialog.component.ts
var ConfirmDialogComponent;
var init_confirm_dialog_component3 = __esm({
  "src/app/shared/ui/confirm-dialog/confirm-dialog.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_confirm_dialog_component();
    init_confirm_dialog_component2();
    init_common();
    init_core();
    init_modal_component();
    ConfirmDialogComponent = class ConfirmDialogComponent2 {
      open = false;
      title = "Confirm";
      message = "Are you sure?";
      confirmText = "Confirm";
      cancelText = "Cancel";
      confirmButtonClass = "bg-[#B81104] hover:bg-[#7f0c03]";
      cancel = new EventEmitter();
      confirm = new EventEmitter();
      static propDecorators = {
        open: [{ type: Input, args: [{ required: true }] }],
        title: [{ type: Input }],
        message: [{ type: Input }],
        confirmText: [{ type: Input }],
        cancelText: [{ type: Input }],
        confirmButtonClass: [{ type: Input }],
        cancel: [{ type: Output }],
        confirm: [{ type: Output }]
      };
    };
    ConfirmDialogComponent = __decorate([
      Component({
        selector: "cis-confirm-dialog",
        standalone: true,
        imports: [CommonModule, ModalComponent],
        template: confirm_dialog_component_default,
        styles: [confirm_dialog_component_default2]
      })
    ], ConfirmDialogComponent);
  }
});

// angular:jit:style:inline:src\app\shared\ui\row-actions-menu\row-actions-menu.component.ts;CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgIH0KICAgIA==
var row_actions_menu_component_default;
var init_row_actions_menu_component = __esm({
  "angular:jit:style:inline:src\\app\\shared\\ui\\row-actions-menu\\row-actions-menu.component.ts;CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgIH0KICAgIA=="() {
    row_actions_menu_component_default = "/* angular:styles/component:scss;41c3dbcfc2ee8fd9277cff75b34aa614ffa57c0b6e06685f230727bf41af9ecc;E:\\CISYSTEM\\frontend\\src\\app\\shared\\ui\\row-actions-menu\\row-actions-menu.component.ts */\n:host {\n  display: inline-block;\n}\n/*# sourceMappingURL=row-actions-menu.component.css.map */\n";
  }
});

// src/app/shared/ui/row-actions-menu/row-actions-menu.component.ts
var RowActionsMenuComponent;
var init_row_actions_menu_component2 = __esm({
  "src/app/shared/ui/row-actions-menu/row-actions-menu.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_row_actions_menu_component();
    init_common();
    init_core();
    RowActionsMenuComponent = class RowActionsMenuComponent2 {
      open = signal(false);
      top = signal(0);
      left = signal(0);
      bottom = signal(0);
      openUp = signal(false);
      toggle(event) {
        event.stopPropagation();
        if (this.open()) {
          this.close();
          return;
        }
        const rect = event.currentTarget.getBoundingClientRect();
        const menuWidth = 176;
        const spaceBelow = window.innerHeight - rect.bottom;
        this.openUp.set(spaceBelow < 200 && rect.top > spaceBelow);
        this.top.set(rect.bottom + 6);
        this.bottom.set(window.innerHeight - rect.top + 6);
        this.left.set(Math.max(8, Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 8)));
        this.open.set(true);
      }
      close() {
        this.open.set(false);
      }
      onResize() {
        this.close();
      }
      onScroll() {
        this.close();
      }
      onEscape() {
        this.close();
      }
      static propDecorators = {
        onResize: [{ type: HostListener, args: ["window:resize"] }],
        onScroll: [{ type: HostListener, args: ["window:scroll"] }],
        onEscape: [{ type: HostListener, args: ["window:keydown.escape"] }]
      };
    };
    RowActionsMenuComponent = __decorate([
      Component({
        selector: "cis-row-actions",
        standalone: true,
        imports: [CommonModule],
        template: `
    <button
      type="button"
      class="grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
      [attr.aria-expanded]="open()"
      aria-haspopup="menu"
      aria-label="Actions"
      (click)="toggle($event)"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="5" r="1.7" />
        <circle cx="12" cy="12" r="1.7" />
        <circle cx="12" cy="19" r="1.7" />
      </svg>
    </button>
    <ng-container *ngIf="open()">
      <div class="fixed inset-0 z-[70]" (click)="close()" aria-hidden="true"></div>
      <div
        class="fixed z-[71] w-44 overflow-hidden rounded-xl bg-white py-1 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700"
        [style.left.px]="left()"
        [style.top.px]="openUp() ? null : top()"
        [style.bottom.px]="openUp() ? bottom() : null"
        role="menu"
        (click)="close()"
      >
        <ng-content />
      </div>
    </ng-container>
  `,
        styles: [row_actions_menu_component_default]
      })
    ], RowActionsMenuComponent);
  }
});

// src/app/core/i18n/translation.service.ts
var translations, TranslationService;
var init_translation_service = __esm({
  "src/app/core/i18n/translation.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    translations = {
      en: {
        "nav.home": "Home",
        "nav.counter": "Counter",
        "home.counter.description": "New sales, expenses, and held carts in one workspace.",
        "nav.menu": "Menu",
        "nav.overview": "Overview",
        "nav.dashboard": "Dashboard",
        "nav.products": "Products",
        "nav.productDashboard": "Products Dashboard",
        "nav.categories": "Categories",
        "nav.inventory": "Inventory",
        "nav.stockMovements": "Stock Movements",
        "nav.purchasing": "Purchasing",
        "nav.sales": "Sales",
        "nav.mySales": "My Sales",
        "nav.finance": "Finance",
        "nav.expenses": "Expenses",
        "nav.expenseCategories": "Expense Categories",
        "nav.profitManagement": "Profit Management",
        "nav.expiryAlerts": "Expiry & Alerts",
        "nav.reports": "Reports",
        "nav.usersRoles": "Users & Roles",
        "nav.branches": "Branches",
        "header.notifications": "Notifications",
        "header.notificationsHelp": "Expiry (30 days) + Low stock (threshold 10)",
        "header.total": "Total",
        "header.viewAlerts": "View Alerts",
        "header.changePassword": "Change Password",
        "header.resetUserPassword": "Reset User Password",
        "header.logout": "Logout",
        "header.user": "User",
        "modal.changePassword.title": "Change password",
        "modal.changePassword.help": "Enter your current password and a new password.",
        "modal.changePassword.currentPassword": "Current password",
        "modal.changePassword.newPassword": "New password",
        "modal.changePassword.update": "Update",
        "modal.resetPassword.title": "Reset user password",
        "modal.resetPassword.help": "Admin only. Choose a user and set a new password.",
        "modal.resetPassword.user": "User",
        "modal.resetPassword.selectUser": "Select user",
        "modal.resetPassword.newPassword": "New password",
        "modal.resetPassword.reset": "Reset",
        "common.cancel": "Cancel",
        "common.footer": "Cosmetics Co. All rights reserved.",
        "home.products.description": "Manage products, categories and batches.",
        "home.inventory.description": "View stock by product, batch and location.",
        "home.stockMovements.description": "Track transfers and adjustments.",
        "home.purchasing.description": "Record purchases and receive stock.",
        "home.sales.description": "Create sales and auto-pick FEFO stock.",
        "home.mySales.description": "Manual sales entry and daily/monthly totals.",
        "home.expiryAlerts.description": "Expiry and low-stock notifications.",
        "home.expenses.description": "Record and track daily expenses.",
        "home.reports.description": "Sales, profit and movement reports.",
        "home.profitManagement.description": "Track profits, margins and analysis.",
        "home.usersRoles.description": "Manage users, roles and access.",
        "productDashboard.title": "Product Dashboard",
        "productDashboard.subtitle": "Product inventory overview, stock alerts & analytics",
        "productDashboard.refresh": "Refresh",
        "productDashboard.loading": "Loading dashboard...",
        "productDashboard.totalProducts": "Total Products",
        "productDashboard.activeProducts": "Active products in system",
        "productDashboard.totalStock": "Total Stock",
        "productDashboard.totalUnits": "Total units in inventory",
        "productDashboard.lowStock": "Low Stock",
        "productDashboard.lowStockHelp": "Products running low",
        "productDashboard.units": "units",
        "productDashboard.outOfStock": "Out of Stock",
        "productDashboard.zeroQtyProducts": "Products with zero quantity",
        "productDashboard.inventoryValue": "Inventory Value",
        "productDashboard.stockAlerts": "Stock Alerts",
        "productDashboard.stockAlertsSubtitle": "Products that need immediate attention",
        "productDashboard.viewAllAlerts": "View All Alerts",
        "productDashboard.total": "Total",
        "productDashboard.show": "Show",
        "productDashboard.prev": "Prev",
        "productDashboard.next": "Next",
        "productDashboard.page": "Page",
        "productDashboard.status": "Status",
        "productDashboard.product": "Product",
        "productDashboard.qtyOnHand": "Qty on Hand",
        "productDashboard.runningLow": "Running Low",
        "productDashboard.allGood": "All good! No stock alerts at this time.",
        "productDashboard.deadStockDetails": "Dead Stock Details",
        "productDashboard.deadStockDescription": "product(s) have not sold in 30+ days",
        "productDashboard.daysSinceSale": "Days Since Sale",
        "productDashboard.daysAgo": "d ago",
        "productDashboard.neverSold": "Never sold",
        "common.list": "List",
        "common.add": "Add",
        "common.create": "Create",
        "common.edit": "Edit",
        "common.delete": "Delete",
        "expenseCategories.manage": "Manage expense categories.",
        "common.deleteConfirm": "Are you sure you want to delete this item? This action cannot be undone.",
        "common.details": "Details",
        "common.seller": "Seller",
        "common.save": "Save",
        "common.saving": "Saving...",
        "common.search": "Search",
        "common.apply": "Apply",
        "common.refresh": "Refresh",
        "common.close": "Close",
        "common.remove": "Remove",
        "common.actions": "Actions",
        "common.status": "Status",
        "common.active": "Active",
        "common.inactive": "Inactive",
        "common.all": "All",
        "common.activate": "Activate",
        "common.name": "Name",
        "common.code": "Code",
        "common.address": "Address",
        "common.phone": "Phone",
        "common.branch": "Branch",
        "common.branches": "Branches",
        "common.allBranches": "All branches",
        "common.main": "Main",
        "common.email": "Email",
        "common.password": "Password",
        "common.role": "Role",
        "common.roles": "Roles",
        "common.permissions": "Permissions",
        "common.module": "Module",
        "common.view": "View",
        "common.date": "Date",
        "common.type": "Type",
        "common.by": "By",
        "common.description": "Description",
        "common.amount": "Amount",
        "common.payment": "Payment",
        "common.paymentMethod": "Payment Method",
        "common.category": "Category",
        "common.selectCategory": "Select category",
        "common.total": "Total",
        "common.show": "Show",
        "common.prev": "Prev",
        "common.previous": "Previous",
        "common.next": "Next",
        "common.page": "Page",
        "common.product": "Product",
        "common.productName": "Product Name",
        "common.productId": "Product ID",
        "common.productSearch": "Product Search",
        "common.sku": "SKU",
        "common.batch": "Batch",
        "common.batchNumber": "Batch Number",
        "common.expiry": "Expiry",
        "common.expiryDate": "Expiry Date",
        "common.expiryAlertDays": "Expiry alert days",
        "common.expiringExpiredStock": "Expiring / Expired Stock",
        "common.lowStock": "Low Stock",
        "common.lowStockThreshold": "Low stock threshold",
        "common.threshold": "Threshold",
        "common.days": "Days",
        "common.location": "Location",
        "common.qty": "Qty",
        "common.quantity": "Quantity",
        "common.price": "Price",
        "common.unitPrice": "Unit Price",
        "common.cost": "Cost",
        "common.costPrice": "Cost Price",
        "common.supplier": "Supplier",
        "common.invoiceNumber": "Invoice Number",
        "common.reference": "Reference",
        "common.customer": "Customer",
        "common.lines": "Lines",
        "common.addLine": "Add Line",
        "common.lineTotal": "Line total",
        "common.grandTotal": "Grand total",
        "common.selectProduct": "Select product...",
        "common.searchProductSku": "Search by product name or SKU",
        "common.searchProductSkuBarcode": "Search by product name, SKU, or barcode",
        "common.loading": "Loading...",
        "common.loadingPermissions": "Loading permissions\u2026",
        "common.createUser": "Create User",
        "common.editUser": "Edit User",
        "common.rolesAvailable": "Roles available",
        "common.leaveBlankPassword": "Leave blank to keep current",
        "common.assignPermissions": "Assign per-user access (View / Create / Edit / Delete)",
        "common.mode": "Mode",
        "common.day": "Day",
        "common.month": "Month",
        "common.year": "Year",
        "common.sales": "Sales",
        "common.grossProfit": "Gross Profit",
        "common.expenses": "Expenses",
        "common.netProfit": "Net Profit",
        "common.period": "Period",
        "common.noData": "No data",
        "common.of": "of",
        "login.hi": "Welcome",
        "login.welcome": "Sign in to continue to your dashboard",
        "login.remember": "Remember me",
        "login.forgot": "Forgot password?",
        "login.submit": "Login",
        "login.wait": "Please wait...",
        "login.secure": "Secure access for GYLA Cosmetics team members"
      },
      sw: {
        "nav.home": "Mwanzo",
        "nav.counter": "Kaunta",
        "home.counter.description": "Mauzo mapya, matumizi na mauzo yaliyohifadhiwa sehemu moja.",
        "nav.menu": "Menyu",
        "nav.overview": "Muhtasari",
        "nav.dashboard": "Dashibodi",
        "nav.products": "Bidhaa",
        "nav.productDashboard": "Dashibodi ya Bidhaa",
        "nav.categories": "Kategoria",
        "nav.inventory": "Stoo",
        "nav.stockMovements": "Mienendo ya Stoo",
        "nav.purchasing": "Manunuzi",
        "nav.sales": "Mauzo",
        "nav.mySales": "Mauzo Yangu",
        "nav.finance": "Fedha",
        "nav.expenses": "Matumizi",
        "nav.expenseCategories": "Vitengo vya Matumizi",
        "nav.profitManagement": "Usimamizi wa Faida",
        "nav.expiryAlerts": "Muda Kuisha na Tahadhari",
        "nav.reports": "Ripoti",
        "nav.usersRoles": "Watumiaji na Majukumu",
        "nav.branches": "Matawi",
        "header.notifications": "Arifa",
        "header.notificationsHelp": "Muda kuisha (siku 30) + Stoo ndogo (kiwango 10)",
        "header.total": "Jumla",
        "header.viewAlerts": "Tazama Tahadhari",
        "header.changePassword": "Badilisha Nenosiri",
        "header.resetUserPassword": "Weka Upya Nenosiri la Mtumiaji",
        "header.logout": "Toka",
        "header.user": "Mtumiaji",
        "modal.changePassword.title": "Badilisha nenosiri",
        "modal.changePassword.help": "Weka nenosiri lako la sasa na nenosiri jipya.",
        "modal.changePassword.currentPassword": "Nenosiri la sasa",
        "modal.changePassword.newPassword": "Nenosiri jipya",
        "modal.changePassword.update": "Sasisha",
        "modal.resetPassword.title": "Weka upya nenosiri la mtumiaji",
        "modal.resetPassword.help": "Msimamizi pekee. Chagua mtumiaji na weka nenosiri jipya.",
        "modal.resetPassword.user": "Mtumiaji",
        "modal.resetPassword.selectUser": "Chagua mtumiaji",
        "modal.resetPassword.newPassword": "Nenosiri jipya",
        "modal.resetPassword.reset": "Weka upya",
        "common.cancel": "Ghairi",
        "common.footer": "Cosmetics Co. Haki zote zimehifadhiwa.",
        "home.products.description": "Simamia bidhaa, kategoria na makundi.",
        "home.inventory.description": "Tazama stoo kwa bidhaa, kundi na eneo.",
        "home.stockMovements.description": "Fuatilia uhamisho na marekebisho.",
        "home.purchasing.description": "Rekodi manunuzi na pokea bidhaa stoo.",
        "home.sales.description": "Tengeneza mauzo na chagua stoo ya FEFO kiotomatiki.",
        "home.mySales.description": "Ingiza mauzo mwenyewe na jumla za kila siku/mwezi.",
        "home.expiryAlerts.description": "Arifa za muda kuisha na stoo ndogo.",
        "home.expenses.description": "Rekodi na fuatilia matumizi ya kila siku.",
        "home.reports.description": "Ripoti za mauzo, faida na mienendo.",
        "home.profitManagement.description": "Fuatilia faida, margin na uchambuzi.",
        "home.usersRoles.description": "Simamia watumiaji, majukumu na ruhusa.",
        "productDashboard.title": "Dashibodi ya Bidhaa",
        "productDashboard.subtitle": "Muhtasari wa stoo ya bidhaa, tahadhari za stoo na uchambuzi",
        "productDashboard.refresh": "Onyesha upya",
        "productDashboard.loading": "Inapakia dashibodi...",
        "productDashboard.totalProducts": "Jumla ya Bidhaa",
        "productDashboard.activeProducts": "Bidhaa zinazotumika kwenye mfumo",
        "productDashboard.totalStock": "Jumla ya Stoo",
        "productDashboard.totalUnits": "Jumla ya vipimo kwenye stoo",
        "productDashboard.lowStock": "Stoo Ndogo",
        "productDashboard.lowStockHelp": "Bidhaa zinazokaribia kuisha",
        "productDashboard.units": "vipimo",
        "productDashboard.outOfStock": "Stoo Imeisha",
        "productDashboard.zeroQtyProducts": "Bidhaa zenye kiasi sifuri",
        "productDashboard.inventoryValue": "Thamani ya Stoo",
        "productDashboard.stockAlerts": "Tahadhari za Stoo",
        "productDashboard.stockAlertsSubtitle": "Bidhaa zinazohitaji uangalizi wa haraka",
        "productDashboard.viewAllAlerts": "Tazama Tahadhari Zote",
        "productDashboard.total": "Jumla",
        "productDashboard.show": "Onyesha",
        "productDashboard.prev": "Nyuma",
        "productDashboard.next": "Mbele",
        "productDashboard.page": "Ukurasa",
        "productDashboard.status": "Hali",
        "productDashboard.product": "Bidhaa",
        "productDashboard.qtyOnHand": "Kiasi Kilichopo",
        "productDashboard.runningLow": "Inapungua",
        "productDashboard.allGood": "Kila kitu kiko sawa! Hakuna tahadhari za stoo kwa sasa.",
        "productDashboard.deadStockDetails": "Maelezo ya Bidhaa Zisizouzwa",
        "productDashboard.deadStockDescription": "bidhaa hazijauzwa kwa siku 30+",
        "productDashboard.daysSinceSale": "Siku Tangu Kuuzwa",
        "productDashboard.daysAgo": "siku zilizopita",
        "productDashboard.neverSold": "Haijawahi kuuzwa",
        "common.list": "Orodha",
        "common.add": "Ongeza",
        "common.create": "Unda",
        "common.edit": "Hariri",
        "common.delete": "Futa",
        "expenseCategories.manage": "Dhibiti vitengo vya matumizi.",
        "common.deleteConfirm": "Una uhakika unataka kufuta kipengee hiki? Hatua hii haiwezi kurudishwa.",
        "common.details": "Maelezo",
        "common.seller": "Muuzaji",
        "common.save": "Hifadhi",
        "common.saving": "Inahifadhi...",
        "common.search": "Tafuta",
        "common.apply": "Tumia",
        "common.refresh": "Onyesha upya",
        "common.close": "Funga",
        "common.remove": "Ondoa",
        "common.actions": "Vitendo",
        "common.status": "Hali",
        "common.active": "Inatumika",
        "common.inactive": "Haitumiki",
        "common.all": "Zote",
        "common.activate": "Washa",
        "common.name": "Jina",
        "common.code": "Msimbo",
        "common.address": "Anwani",
        "common.phone": "Simu",
        "common.branch": "Tawi",
        "common.branches": "Matawi",
        "common.allBranches": "Matawi Yote",
        "common.main": "Kuu",
        "common.email": "Barua pepe",
        "common.password": "Nenosiri",
        "common.role": "Jukumu",
        "common.roles": "Majukumu",
        "common.permissions": "Ruhusa",
        "common.module": "Moduli",
        "common.view": "Tazama",
        "common.date": "Tarehe",
        "common.type": "Aina",
        "common.by": "Na",
        "common.description": "Maelezo",
        "common.amount": "Kiasi",
        "common.payment": "Malipo",
        "common.paymentMethod": "Njia ya Malipo",
        "common.category": "Kategoria",
        "common.selectCategory": "Chagua kategoria",
        "common.total": "Jumla",
        "common.show": "Onyesha",
        "common.prev": "Nyuma",
        "common.previous": "Iliyopita",
        "common.next": "Mbele",
        "common.page": "Ukurasa",
        "common.product": "Bidhaa",
        "common.productName": "Jina la Bidhaa",
        "common.productId": "Kitambulisho cha Bidhaa",
        "common.productSearch": "Tafuta Bidhaa",
        "common.sku": "SKU",
        "common.batch": "Kundi",
        "common.batchNumber": "Namba ya Kundi",
        "common.expiry": "Muda Kuisha",
        "common.expiryDate": "Tarehe ya Kuisha",
        "common.expiryAlertDays": "Siku za Onyo la Kuisha Muda",
        "common.expiringExpiredStock": "Stock Inayokaribia / Imeisha Muda",
        "common.lowStock": "Stock Ndogo",
        "common.lowStockThreshold": "Kiwango cha Stock Ndogo",
        "common.threshold": "Kiwango",
        "common.days": "Siku",
        "common.location": "Eneo",
        "common.qty": "Kiasi",
        "common.quantity": "Kiasi",
        "common.price": "Bei",
        "common.unitPrice": "Bei ya Kipimo",
        "common.cost": "Gharama",
        "common.costPrice": "Bei ya Gharama",
        "common.supplier": "Msambazaji",
        "common.invoiceNumber": "Namba ya Ankara",
        "common.reference": "Rejea",
        "common.customer": "Mteja",
        "common.lines": "Mistari",
        "common.addLine": "Ongeza Mstari",
        "common.lineTotal": "Jumla ya mstari",
        "common.grandTotal": "Jumla kuu",
        "common.selectProduct": "Chagua bidhaa...",
        "common.searchProductSku": "Tafuta kwa jina la bidhaa au SKU",
        "common.searchProductSkuBarcode": "Tafuta kwa jina la bidhaa, SKU, au barcode",
        "common.loading": "Inapakia...",
        "common.loadingPermissions": "Inapakia ruhusa\u2026",
        "common.createUser": "Unda Mtumiaji",
        "common.editUser": "Hariri Mtumiaji",
        "common.rolesAvailable": "Majukumu yaliyopo",
        "common.leaveBlankPassword": "Acha wazi kubaki na la sasa",
        "common.assignPermissions": "Weka ruhusa kwa mtumiaji (Tazama / Unda / Hariri / Futa)",
        "common.mode": "Njia",
        "common.day": "Siku",
        "common.month": "Mwezi",
        "common.year": "Mwaka",
        "common.sales": "Mauzo",
        "common.grossProfit": "Faida ya Jumla",
        "common.expenses": "Matumizi",
        "common.netProfit": "Faida Halisi",
        "common.period": "Kipindi",
        "common.noData": "Hakuna data",
        "common.of": "ya",
        "login.hi": "Karibu",
        "login.welcome": "Ingia kuendelea kwenye dashibodi yako",
        "login.remember": "Nikumbuke",
        "login.forgot": "Umesahau nenosiri?",
        "login.submit": "Ingia",
        "login.wait": "Tafadhali subiri...",
        "login.secure": "Ufikiaji salama kwa timu ya GYLA Cosmetics"
      },
      fr: {},
      es: {},
      ar: {}
    };
    TranslationService = class TranslationService2 {
      storageKey = "cisystem-language";
      fallbackLang = "en";
      availableLangs = ["en", "sw", "fr", "es", "ar"];
      _currentLang = signal(this.loadLanguage());
      currentLang = this._currentLang.asReadonly();
      currentLangLabel = computed(() => this._currentLang().toUpperCase());
      setLanguage(lang) {
        const nextLang = this.isSupportedLanguage(lang) ? lang : this.fallbackLang;
        this._currentLang.set(nextLang);
        this.saveLanguage(nextLang);
      }
      translate(key) {
        const lang = this._currentLang();
        const typedKey = key;
        return translations[lang][typedKey] || translations[this.fallbackLang][typedKey] || key;
      }
      loadLanguage() {
        if (typeof window === "undefined")
          return this.fallbackLang;
        try {
          const stored = localStorage.getItem(this.storageKey);
          if (stored === "sw") {
            this.saveLanguage(this.fallbackLang);
            return this.fallbackLang;
          }
          return this.isSupportedLanguage(stored) ? stored : this.fallbackLang;
        } catch {
          return this.fallbackLang;
        }
      }
      saveLanguage(lang) {
        if (typeof window === "undefined")
          return;
        try {
          localStorage.setItem(this.storageKey, lang);
        } catch {
        }
      }
      isSupportedLanguage(lang) {
        return typeof lang === "string" && this.availableLangs.includes(lang);
      }
    };
    TranslationService = __decorate([
      Injectable({ providedIn: "root" })
    ], TranslationService);
  }
});

// src/app/core/i18n/translate.pipe.ts
var TranslatePipe;
var init_translate_pipe = __esm({
  "src/app/core/i18n/translate.pipe.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_translation_service();
    TranslatePipe = class TranslatePipe2 {
      translations = inject(TranslationService);
      transform(key) {
        return this.translations.translate(key);
      }
    };
    TranslatePipe = __decorate([
      Pipe({
        name: "translate",
        standalone: true,
        pure: false
      })
    ], TranslatePipe);
  }
});

// src/app/shared/ui/pager/pager.component.ts
var PagerComponent;
var init_pager_component = __esm({
  "src/app/shared/ui/pager/pager.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_common();
    init_core();
    init_translate_pipe();
    init_core();
    PagerComponent = class PagerComponent2 {
      total = input.required();
      pageSize = model(10);
      pageIndex = model(0);
      totalPages = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())));
      setPageSize(value) {
        this.pageSize.set(Number(value) || 10);
        this.pageIndex.set(0);
      }
      prev() {
        this.pageIndex.update((i) => Math.max(0, i - 1));
      }
      next() {
        this.pageIndex.update((i) => Math.min(this.totalPages() - 1, i + 1));
      }
      static propDecorators = {
        total: [{ type: Input, args: [{ isSignal: true, alias: "total", required: true, transform: void 0 }] }],
        pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false }] }, { type: Output, args: ["pageSizeChange"] }],
        pageIndex: [{ type: Input, args: [{ isSignal: true, alias: "pageIndex", required: false }] }, { type: Output, args: ["pageIndexChange"] }]
      };
    };
    PagerComponent = __decorate([
      Component({
        selector: "cis-pager",
        standalone: true,
        imports: [CommonModule, TranslatePipe],
        template: `
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.total' | translate }}: {{ total() }}</div>
      <div class="flex items-center gap-2">
        <label class="text-xs font-semibold text-slate-600 dark:text-slate-400">
          {{ 'common.show' | translate }}
          <select
            class="ml-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-xs text-slate-900 dark:text-slate-100"
            [value]="pageSize()"
            (change)="setPageSize(($any($event.target)).value)"
          >
            <option [value]="10">10</option>
            <option [value]="20">20</option>
            <option [value]="50">50</option>
            <option [value]="100">100</option>
          </select>
        </label>

        <button
          type="button"
          class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="prev()"
          [disabled]="pageIndex() === 0"
        >
          {{ 'common.prev' | translate }}
        </button>
        <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.page' | translate }} {{ pageIndex() + 1 }} / {{ totalPages() }}</div>
        <button
          type="button"
          class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="next()"
          [disabled]="pageIndex() >= totalPages() - 1"
        >
          {{ 'common.next' | translate }}
        </button>
      </div>
    </div>
  `
      })
    ], PagerComponent);
  }
});

// src/app/shared/utils/date.utils.ts
function toIsoDate(value) {
  const yyyy = value.getFullYear();
  const mm = String(value.getMonth() + 1).padStart(2, "0");
  const dd = String(value.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
var init_date_utils = __esm({
  "src/app/shared/utils/date.utils.ts"() {
    "use strict";
  }
});

// src/app/features/counter/counter.page.ts
var CART_FIELDS, CounterPage;
var init_counter_page3 = __esm({
  "src/app/features/counter/counter.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_counter_page();
    init_counter_page2();
    init_common();
    init_core();
    init_rxjs_interop();
    init_forms();
    init_router();
    init_esm();
    init_graphql_service();
    init_branch_context_service();
    init_pwa_service();
    init_money_pipe();
    init_permission_service();
    init_barcode_scanner_component();
    init_confirm_dialog_component3();
    init_modal_component();
    init_row_actions_menu_component2();
    init_pager_component();
    init_date_utils();
    CART_FIELDS = "id version customer referenceNumber createdAt updatedAt createdBy total lines { productId sku productName quantity unitPrice location }";
    CounterPage = class CounterPage2 {
      perm = inject(PermissionService);
      pwa = inject(PwaService);
      gql = inject(GraphqlService);
      fb = inject(FormBuilder);
      destroyRef = inject(DestroyRef);
      workspace;
      workspaceOpen = signal(false);
      products = signal([]);
      pending = signal([]);
      categories = signal([]);
      lines = signal([]);
      busy = signal(false);
      catalogLoading = signal(false);
      pendingLoading = signal(false);
      categoriesLoading = signal(false);
      catalogError = signal(null);
      pendingError = signal(null);
      actionError = signal(null);
      expenseError = signal(null);
      success = signal(null);
      dirty = signal(false);
      search = signal("");
      category = signal("");
      visibleLimit = signal(36);
      pendingSearch = signal("");
      checkoutOpen = signal(false);
      expenseOpen = signal(false);
      scannerOpen = signal(false);
      cancelTarget = signal(null);
      discardTarget = signal(null);
      cartId = signal(crypto.randomUUID());
      cartVersion = signal(null);
      location = new FormControl("MAIN", { nonNullable: true });
      branchCtx = inject(BranchContext);
      syncLocation = effect(() => {
        const code = this.branchCtx.writeBranch();
        if (code && this.location.value !== code && !this.lines().length) {
          this.location.setValue(code);
        }
      });
      headerForm = this.fb.nonNullable.group({ customer: ["", Validators.maxLength(200)], referenceNumber: ["", Validators.maxLength(120)] });
      expenseForm = this.fb.nonNullable.group({
        date: [toIsoDate(/* @__PURE__ */ new Date()), Validators.required],
        categoryId: ["", Validators.required],
        description: ["", Validators.maxLength(1e3)],
        amount: [0, [Validators.required, Validators.min(0.01)]],
        paymentMethod: ["CASH", Validators.required]
      });
      productCategories = computed(() => [...new Set(this.products().map((p) => p.category || "Uncategorized"))].sort());
      filteredProducts = computed(() => {
        const query = this.search().trim().toLowerCase();
        return this.products().filter((p) => (!this.category() || (p.category || "Uncategorized") === this.category()) && (!query || [p.name, p.sku, p.barcode, p.brand].some((value) => value?.toLowerCase().includes(query))));
      });
      visibleProducts = computed(() => this.filteredProducts().slice(0, this.visibleLimit()));
      quantityByProduct = computed(() => new Map(this.lines().map((line) => [line.productId, line.quantity])));
      itemCount = computed(() => this.lines().reduce((sum, line) => sum + line.quantity, 0));
      total = computed(() => Math.round(this.lines().reduce((sum, line) => sum + line.quantity * line.unitPrice, 0) * 1e4) / 1e4);
      pendingValue = computed(() => this.pending().reduce((sum, cart) => sum + cart.total, 0));
      filteredPending = computed(() => {
        const query = this.pendingSearch().trim().toLowerCase();
        return this.pending().filter((cart) => !query || [cart.id, cart.customer, cart.referenceNumber, ...cart.lines.map((l) => l.productName)].some((value) => value?.toLowerCase().includes(query)));
      });
      pendingPageSize = signal(10);
      pendingPageIndex = signal(0);
      displayedPending = computed(() => {
        const size = this.pendingPageSize();
        const start = this.pendingPageIndex() * size;
        return this.filteredPending().slice(start, start + size);
      });
      stockIssues = computed(() => {
        const byId = new Map(this.products().map((p) => [p.id, p]));
        return this.lines().some((line) => !byId.has(line.productId) || line.quantity > byId.get(line.productId).availableQuantity);
      });
      constructor() {
        this.perm.load();
        this.headerForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.dirty.set(true));
        effect(() => {
          const canSell = this.perm.canCreate("SALES");
          const canViewSales = this.perm.canView("SALES");
          const canExpense = this.perm.canCreate("EXPENSES");
          untracked(() => {
            if (canSell)
              this.loadProducts();
            if (canViewSales)
              this.loadPending();
            if (canExpense)
              this.loadExpenseCategories();
          });
        });
      }
      loadProducts() {
        this.catalogLoading.set(true);
        this.catalogError.set(null);
        this.gql.request(`query CounterProducts($location: String) {
      counterProducts(location: $location) { id sku barcode name brand category unitOfMeasure sellingPrice availableQuantity }
    }`, { location: this.location.value.trim() || this.branchCtx.writeBranch() }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.catalogLoading.set(false))).subscribe({
          next: (data) => this.products.set(data.counterProducts),
          error: (error) => this.catalogError.set(this.message(error, "Could not load products. Please retry."))
        });
      }
      loadPending() {
        if (!this.perm.canView("SALES"))
          return;
        this.pendingLoading.set(true);
        this.pendingError.set(null);
        this.gql.request(`query PendingCounterCarts { pendingCounterCarts { ${CART_FIELDS} } }`).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.pendingLoading.set(false))).subscribe({
          next: (data) => this.pending.set(data.pendingCounterCarts),
          error: (error) => this.pendingError.set(this.message(error, "Could not load pending sales. Please retry."))
        });
      }
      loadExpenseCategories() {
        this.categoriesLoading.set(true);
        this.gql.request("query CounterExpenseCategories { counterExpenseCategories { id name } }").pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.categoriesLoading.set(false))).subscribe({
          next: (data) => this.categories.set(data.counterExpenseCategories),
          error: (error) => this.expenseError.set(this.message(error, "Could not load expense categories."))
        });
      }
      openSale(cart = "new") {
        if (this.busy() || !this.perm.canCreate("SALES"))
          return;
        if (this.dirty() && this.lines().length) {
          this.discardTarget.set(cart);
          return;
        }
        this.startSale(cart);
      }
      startSale(cart) {
        this.actionError.set(null);
        this.success.set(null);
        this.search.set("");
        this.category.set("");
        this.visibleLimit.set(36);
        if (cart === "new")
          this.resetCart();
        else
          this.applyCart(cart);
        this.workspaceOpen.set(true);
        this.loadProducts();
        setTimeout(() => this.scrollTo(this.workspace?.nativeElement));
      }
      viewCart(panel) {
        this.scrollTo(panel);
      }
      viewProducts(section) {
        this.scrollTo(section);
      }
      scrollTo(element) {
        element?.scrollIntoView({ block: "start", behavior: "smooth" });
      }
      closeSale() {
        if (this.busy())
          return;
        if (this.dirty() && this.lines().length)
          this.discardTarget.set("close");
        else
          this.workspaceOpen.set(false);
      }
      confirmDiscard() {
        const target = this.discardTarget();
        this.discardTarget.set(null);
        if (!target)
          return;
        if (target === "close") {
          this.resetCart();
          this.workspaceOpen.set(false);
        } else
          this.startSale(target);
      }
      changeLocation() {
        if (this.lines().length || this.busy())
          return;
        this.products.set([]);
        this.loadProducts();
      }
      setSearch(value) {
        this.search.set(value);
        this.visibleLimit.set(36);
      }
      onSearchEnter() {
        const query = this.search().trim().toLowerCase();
        if (!query)
          return;
        const matches = this.filteredProducts();
        const exact = matches.find((p) => p.barcode?.toLowerCase() === query || p.sku.toLowerCase() === query);
        const product = exact ?? (matches.length === 1 ? matches[0] : void 0);
        if (product)
          this.addScannedProduct(product);
      }
      onScanned(code) {
        const query = code.trim().toLowerCase();
        const product = this.products().find((p) => p.barcode?.toLowerCase() === query || p.sku.toLowerCase() === query);
        if (!product) {
          this.actionError.set(`No product matches barcode "${code.trim()}". Add the barcode to the product first.`);
          return;
        }
        this.addScannedProduct(product);
      }
      addScannedProduct(product) {
        if (!this.canAdd(product)) {
          this.actionError.set(product.availableQuantity === 0 ? `'${product.name}' is out of stock.` : product.sellingPrice === null ? `'${product.name}' has no selling price set.` : `'${product.name}' cannot be added right now.`);
          return;
        }
        this.addProduct(product);
        this.search.set("");
      }
      canAdd(product) {
        return !this.busy() && !this.catalogLoading() && !this.catalogError() && product.sellingPrice !== null && Number.isFinite(product.sellingPrice) && product.sellingPrice >= 0 && (this.quantityByProduct().get(product.id) || 0) < product.availableQuantity;
      }
      addProduct(product) {
        if (!this.canAdd(product))
          return;
        const existing = this.lines().find((line) => line.productId === product.id);
        if (existing)
          this.setQuantity(product.id, existing.quantity + 1);
        else {
          if (this.lines().length >= 100) {
            this.actionError.set("A cart can contain up to 100 different products.");
            return;
          }
          this.lines.update((lines) => [...lines, {
            productId: product.id,
            sku: product.sku,
            productName: product.name,
            quantity: 1,
            unitPrice: product.sellingPrice,
            location: this.location.value.trim() || this.branchCtx.writeBranch()
          }]);
          this.dirty.set(true);
          this.actionError.set(null);
        }
      }
      setQuantity(productId, value) {
        if (this.busy())
          return;
        const quantity = Number(value);
        const product = this.products().find((p) => p.id === productId);
        if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 1e6) {
          this.actionError.set("Enter a valid whole-number quantity.");
          return;
        }
        if (!product || quantity > product.availableQuantity) {
          this.actionError.set("This quantity exceeds the currently available stock.");
          return;
        }
        this.lines.update((lines) => lines.map((line) => line.productId === productId ? __spreadProps(__spreadValues({}, line), { quantity }) : line));
        this.dirty.set(true);
        this.actionError.set(null);
      }
      removeProduct(productId) {
        if (this.busy())
          return;
        this.lines.update((lines) => lines.filter((line) => line.productId !== productId));
        this.dirty.set(true);
      }
      saveCart(checkout = false) {
        if (this.busy() || !this.perm.canCreate("SALES") || !this.pwa.online() || !this.lines().length)
          return;
        this.headerForm.markAllAsTouched();
        if (this.headerForm.invalid)
          return;
        if (checkout && (this.stockIssues() || this.catalogLoading() || this.catalogError())) {
          this.actionError.set("Refresh products and check stock before checkout.");
          return;
        }
        this.busy.set(true);
        this.actionError.set(null);
        const header = this.headerForm.getRawValue();
        this.gql.request(`mutation SaveCounterCart($input: SaveCounterCartInput!) { saveCounterCart(input: $input) { ${CART_FIELDS} } }`, {
          input: {
            id: this.cartId(),
            version: this.cartVersion(),
            customer: header.customer.trim() || null,
            referenceNumber: header.referenceNumber.trim() || null,
            lines: this.lines().map(({ productId, quantity, location }) => ({ productId, quantity, location }))
          }
        }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
          next: (data) => {
            this.applyCart(data.saveCounterCart);
            this.loadPending();
            if (checkout)
              this.checkoutOpen.set(true);
            else {
              this.success.set("Sale held. Any authorized cashier can resume it from pending sales.");
              this.resetCart();
              this.workspaceOpen.set(false);
            }
          },
          error: (error) => this.actionError.set(this.message(error, "Could not hold this sale. Your cart has been kept."))
        });
      }
      completeSale() {
        if (this.busy() || !this.checkoutOpen() || this.cartVersion() === null || !this.pwa.online())
          return;
        this.busy.set(true);
        this.actionError.set(null);
        this.gql.request("mutation CheckoutCounterCart($input: CheckoutCounterCartInput!) { checkoutCounterCart(input: $input) { id } }", {
          input: { id: this.cartId(), version: this.cartVersion(), expectedTotal: this.total() }
        }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
          next: (data) => {
            this.success.set(`Sale #${data.checkoutCounterCart.id} completed. Stock has been updated.`);
            this.checkoutOpen.set(false);
            this.workspaceOpen.set(false);
            this.resetCart();
            this.loadPending();
            this.loadProducts();
          },
          error: (error) => this.actionError.set(this.message(error, "Checkout failed. Your held cart is safe; retrying will not duplicate this sale."))
        });
      }
      cancelHeldCart() {
        const cart = this.cancelTarget();
        if (!cart || this.busy() || !this.pwa.online() || !this.perm.canDelete("SALES"))
          return;
        this.busy.set(true);
        this.cancelTarget.set(null);
        this.gql.request("mutation CancelCounterCart($input: CounterCartVersionInput!) { cancelCounterCart(input: $input) }", { input: { id: cart.id, version: cart.version } }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
          next: () => {
            this.loadPending();
            this.success.set("Held sale cancelled. No stock was changed.");
          },
          error: (error) => this.actionError.set(this.message(error, "Could not cancel the held sale."))
        });
      }
      openExpense() {
        if (this.busy() || !this.perm.canCreate("EXPENSES"))
          return;
        this.expenseError.set(null);
        this.expenseForm.reset({ date: toIsoDate(/* @__PURE__ */ new Date()), categoryId: "", description: "", amount: 0, paymentMethod: "CASH" });
        this.expenseOpen.set(true);
        this.loadExpenseCategories();
      }
      saveExpense() {
        if (this.busy() || !this.pwa.online() || !this.perm.canCreate("EXPENSES"))
          return;
        this.expenseForm.markAllAsTouched();
        if (this.expenseForm.invalid)
          return;
        const value = this.expenseForm.getRawValue();
        if (!Number.isFinite(value.amount) || !this.categories().some((c) => c.id === value.categoryId))
          return;
        this.busy.set(true);
        this.expenseError.set(null);
        this.gql.request("mutation CounterCreateExpense($input: CreateExpenseInput!) { createExpense(input: $input) { id } }", {
          input: __spreadProps(__spreadValues({}, value), { description: value.description.trim() || null })
        }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
          next: () => {
            this.expenseOpen.set(false);
            this.success.set("Expense recorded successfully.");
          },
          error: (error) => this.expenseError.set(this.message(error, "Could not record this expense."))
        });
      }
      canDeactivate() {
        if (this.busy())
          return false;
        return !(this.dirty() && this.lines().length) || window.confirm("Leave Counter without holding your current cart? Unsaved changes will be lost.");
      }
      beforeUnload(event) {
        if (this.busy() || this.dirty() && this.lines().length) {
          event.preventDefault();
          event.returnValue = "";
        }
      }
      applyCart(cart) {
        this.cartId.set(cart.id);
        this.cartVersion.set(cart.version);
        this.lines.set(cart.lines.map((line) => __spreadValues({}, line)));
        this.location.setValue(cart.lines[0]?.location || this.branchCtx.writeBranch());
        this.headerForm.reset({ customer: cart.customer || "", referenceNumber: cart.referenceNumber || "" }, { emitEvent: false });
        this.dirty.set(false);
      }
      resetCart() {
        this.cartId.set(crypto.randomUUID());
        this.cartVersion.set(null);
        this.lines.set([]);
        this.headerForm.reset({ customer: "", referenceNumber: "" }, { emitEvent: false });
        this.dirty.set(false);
      }
      message(error, fallback) {
        return error instanceof Error ? error.message : fallback;
      }
      static ctorParameters = () => [];
      static propDecorators = {
        workspace: [{ type: ViewChild, args: ["saleWorkspace"] }],
        beforeUnload: [{ type: HostListener, args: ["window:beforeunload", ["$event"]] }]
      };
    };
    CounterPage = __decorate([
      Component({
        selector: "cis-counter-page",
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule, RouterLink, MoneyPipe, ModalComponent, ConfirmDialogComponent, BarcodeScannerComponent, RowActionsMenuComponent, PagerComponent],
        template: counter_page_default,
        styles: [counter_page_default2]
      })
    ], CounterPage);
  }
});

// src/app/features/counter/counter.page.spec.ts
var require_counter_page_spec = __commonJS({
  "src/app/features/counter/counter.page.spec.ts"(exports) {
    init_core();
    init_testing();
    init_router();
    init_esm();
    init_graphql_service();
    init_pwa_service();
    init_permission_service();
    init_counter_page3();
    var product = { id: "1", sku: "SKU-1", barcode: "ABC123", name: "Moisturizer", brand: "Gyla", category: "Skincare", unitOfMeasure: "Each", sellingPrice: 12.75, availableQuantity: 5 };
    var held = {
      id: "3d28fa6b-4264-4adf-9f17-b8d2ef95af70",
      version: 2,
      customer: "Customer",
      referenceNumber: "REF-1",
      createdAt: "2026-01-01T12:00:00Z",
      updatedAt: "2026-01-01T12:00:00Z",
      createdBy: "1",
      total: 25.5,
      lines: [{ productId: "1", sku: "SKU-1", productName: "Moisturizer", quantity: 2, unitPrice: 12.75, location: "MAIN" }]
    };
    describe("CounterPage", () => {
      let request;
      const online = signal(true);
      beforeEach(() => __async(null, null, function* () {
        online.set(true);
        request = jasmine.createSpy("request").and.callFake((query) => {
          if (query.includes("query CounterProducts"))
            return of({ counterProducts: [product] });
          if (query.includes("query PendingCounterCarts"))
            return of({ pendingCounterCarts: [held] });
          if (query.includes("query CounterExpenseCategories"))
            return of({ counterExpenseCategories: [{ id: "1", name: "Transport" }] });
          if (query.includes("mutation SaveCounterCart"))
            return of({ saveCounterCart: held });
          if (query.includes("mutation CheckoutCounterCart"))
            return of({ checkoutCounterCart: { id: "99" } });
          if (query.includes("mutation CounterCreateExpense"))
            return of({ createExpense: { id: "4" } });
          return of({ cancelCounterCart: true });
        });
        yield TestBed.configureTestingModule({
          imports: [CounterPage],
          providers: [
            provideRouter([]),
            { provide: GraphqlService, useValue: { request } },
            { provide: PwaService, useValue: { online } },
            { provide: PermissionService, useValue: { load() {
            }, canCreate: () => true, canView: () => true, canDelete: () => true } }
          ]
        }).compileComponents();
      }));
      const setup = () => {
        const fixture = TestBed.createComponent(CounterPage);
        fixture.detectChanges();
        return fixture;
      };
      it("renders the two counter actions and server-backed pending sales", () => {
        const fixture = setup();
        expect(fixture.nativeElement.textContent).toContain("New Sale");
        expect(fixture.nativeElement.textContent).toContain("New Expenses");
        expect(fixture.componentInstance.pending()).toEqual([held]);
      });
      it("combines product selections at their configured selling price", () => {
        const page = setup().componentInstance;
        page.addProduct(product);
        page.addProduct(product);
        expect(page.lines().length).toBe(1);
        expect(page.itemCount()).toBe(2);
        expect(page.total()).toBe(25.5);
      });
      it("rejects invalid quantities, insufficient stock, and missing prices", () => {
        const page = setup().componentInstance;
        page.addProduct(__spreadProps(__spreadValues({}, product), { sellingPrice: null }));
        expect(page.lines()).toEqual([]);
        page.addProduct(product);
        page.setQuantity("1", 1.5);
        page.setQuantity("1", 6);
        expect(page.itemCount()).toBe(1);
        expect(page.actionError()).toBeTruthy();
      });
      it("searches barcodes and filters product categories", () => {
        const page = setup().componentInstance;
        page.setSearch("abc123");
        expect(page.filteredProducts()).toEqual([product]);
        page.category.set("Haircare");
        expect(page.filteredProducts()).toEqual([]);
      });
      it("adds a product to the cart when its barcode is scanned", () => {
        const page = setup().componentInstance;
        page.onScanned("ABC123");
        expect(page.lines()).toEqual([{ productId: "1", sku: "SKU-1", productName: "Moisturizer", quantity: 1, unitPrice: 12.75, location: "MAIN" }]);
        expect(page.actionError()).toBeNull();
      });
      it("reports an error when a scanned barcode matches no product", () => {
        const page = setup().componentInstance;
        page.onScanned("UNKNOWN");
        expect(page.lines()).toEqual([]);
        expect(page.actionError()).toContain("UNKNOWN");
      });
      it("adds the single matching product on hardware-scanner Enter", () => {
        const page = setup().componentInstance;
        page.setSearch("abc123");
        page.onSearchEnter();
        expect(page.itemCount()).toBe(1);
        expect(page.search()).toBe("");
      });
      it("keeps the search when Enter has no exact or single match", () => {
        const page = setup().componentInstance;
        page.setSearch("no-such-product");
        page.onSearchEnter();
        expect(page.itemCount()).toBe(0);
        expect(page.search()).toBe("no-such-product");
      });
      it("holds a cart without submitting client-controlled prices or charging it", () => {
        const page = setup().componentInstance;
        page.addProduct(product);
        const id = page.cartId();
        page.saveCart();
        const call = request.calls.allArgs().find((args) => args[0].includes("mutation SaveCounterCart"));
        expect(call[1].input.id).toBe(id);
        expect(call[1].input.lines).toEqual([{ productId: "1", quantity: 1, location: "MAIN" }]);
        expect(request.calls.allArgs().some((args) => args[0].includes("mutation CheckoutCounterCart"))).toBeFalse();
        expect(page.lines()).toEqual([]);
        expect(page.dirty()).toBeFalse();
      });
      it("requires payment confirmation and prevents double submission", () => {
        const page = setup().componentInstance;
        page.addProduct(product);
        page.saveCart(true);
        expect(page.checkoutOpen()).toBeTrue();
        expect(page.total()).toBe(held.total);
        const pending = new Subject();
        request.and.returnValue(pending);
        request.calls.reset();
        page.completeSale();
        page.completeSale();
        expect(request).toHaveBeenCalledTimes(1);
        expect(request.calls.mostRecent().args[1].input).toEqual({ id: held.id, version: held.version, expectedTotal: held.total });
        pending.next({ checkoutCounterCart: { id: "99" } });
        pending.complete();
        expect(page.lines()).toEqual([]);
        expect(page.success()).toContain("Sale #99");
      });
      it("retains the held cart and checkout identity after a failed charge", () => {
        const page = setup().componentInstance;
        page.openSale(held);
        page.checkoutOpen.set(true);
        request.and.returnValue(throwError(() => new Error("Insufficient stock")));
        page.completeSale();
        expect(page.lines()).toEqual(held.lines);
        expect(page.cartId()).toBe(held.id);
        expect(page.checkoutOpen()).toBeTrue();
        expect(page.busy()).toBeFalse();
      });
      it("does not send mutations offline", () => {
        const page = setup().componentInstance;
        page.addProduct(product);
        online.set(false);
        request.calls.reset();
        page.saveCart();
        expect(request).not.toHaveBeenCalled();
      });
      it("creates an expense using the existing expense API", () => {
        const page = setup().componentInstance;
        page.openExpense();
        page.expenseForm.setValue({ date: "2026-09-15", categoryId: "1", description: "Delivery", amount: 500, paymentMethod: "CASH" });
        page.saveExpense();
        const call = request.calls.allArgs().find((args) => args[0].includes("mutation CounterCreateExpense"));
        expect(call[1].input.amount).toBe(500);
        expect(call[1].input.categoryId).toBe("1");
        expect(page.expenseOpen()).toBeFalse();
      });
      it("warns before navigating away from unsaved cart changes", () => {
        const page = setup().componentInstance;
        page.addProduct(product);
        spyOn(window, "confirm").and.returnValue(false);
        expect(page.canDeactivate()).toBeFalse();
        page.openSale();
        expect(page.discardTarget()).toBe("new");
        expect(page.lines().length).toBe(1);
      });
    });
  }
});
export default require_counter_page_spec();
//# sourceMappingURL=spec-counter.page.spec.js.map
