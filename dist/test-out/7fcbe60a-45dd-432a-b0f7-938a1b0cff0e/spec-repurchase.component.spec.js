import {
  BranchContext,
  FormsModule,
  MoneyPipe,
  PermissionService,
  init_branch_context_service,
  init_forms,
  init_money_pipe,
  init_permission_service
} from "./chunk-PPRAD6WO.js";
import {
  By,
  GraphqlService,
  init_graphql_service,
  init_platform_browser
} from "./chunk-W65P7JEF.js";
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
  EventEmitter,
  Injectable,
  Input,
  Output,
  Subject,
  TestBed,
  ViewChild,
  __decorate,
  computed,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  inject,
  of,
  signal,
  throwError
} from "./chunk-NONR5GBI.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\features\purchasing\pending-repurchases.component.html
var pending_repurchases_component_default;
var init_pending_repurchases_component = __esm({
  "angular:jit:template:src\\app\\features\\purchasing\\pending-repurchases.component.html"() {
    pending_repurchases_component_default = `<section class="rp-panel" [class.rp-panel-flat]="flat" *ngIf="visible()">
  <div class="rp-heading">
    <div><h3>{{ title }}</h3><p>{{ subtitle }}</p></div>
    <div class="rp-actions">
      <button type="button" (click)="refresh()" [disabled]="busy()">Refresh</button>
    </div>
  </div>
  <p class="rp-notice" role="status" *ngIf="notice()">{{ notice() }}</p>
  <p class="rp-error" role="alert" *ngIf="error() && !receiptOrder()">{{ error() }}</p>
  <p class="rp-empty" *ngIf="!pending().length">{{ emptyText }}</p>
  <article class="rp-pending" *ngFor="let order of pending()">
    <div class="rp-heading">
      <div><strong>{{ order.supplier || 'Repurchase order' }}</strong><p>{{ order.invoiceNumber || order.id.slice(0, 8) }} \xB7 {{ order.createdAt | date:'medium' }}</p></div>
      <span class="rp-badge">{{ order.activation ? 'New product \u2014 pending receipt' : 'Pending receipt' }}</span>
      <strong>{{ orderTotal(order.lines) | money }}</strong>
      <button type="button" class="primary" *ngIf="perm.canCreate('PURCHASING')" [disabled]="busy()" (click)="openReceipt(order)">Receive</button>
    </div>
    <details><summary>View {{ order.lines.length }} product(s)</summary>
      <div class="rp-order-line" *ngFor="let line of order.lines">
        <span>{{ line.productName }} <small>{{ line.sku }}</small></span>
        <span>{{ line.quantity }} pcs \xB7 Buying {{ line.buyingPrice | money }} \xB7 Selling {{ line.sellingPrice | money }}</span>
      </div>
    </details>
  </article>
</section>

<cis-modal [open]="!!receiptOrder()" title="Receive repurchase order" maxWidthClass="max-w-3xl" (close)="!busy() && receiptOrder.set(null)">
  <div class="rp-receipt">
    <p>Confirm the full delivery below. This will add stock to MAIN and apply the order's price changes. Use a new batch code for each product and enter its actual expiry date.</p>
    <article class="rp-cart-line" *ngFor="let line of receiptLines">
      <strong>{{ line.productName }}</strong><p>{{ line.quantity }} pcs \xB7 Buying {{ line.buyingPrice | money }} \xB7 Selling {{ line.sellingPrice | money }}</p>
      <div class="rp-prices">
        <label>Batch code<input [(ngModel)]="line.batchNumber" maxlength="80" [disabled]="busy()" /></label>
        <label>Expiry date<input type="date" [(ngModel)]="line.expiryDate" [disabled]="busy()" /></label>
      </div>
    </article>
    <p class="rp-error" role="alert" *ngIf="error()">{{ error() }}</p>
    <div class="rp-actions"><button type="button" [disabled]="busy()" (click)="receiptOrder.set(null)">Close</button><button type="button" class="primary" [disabled]="busy()" (click)="receiveOrder()">{{ busy() ? 'Receiving\u2026' : 'Confirm receipt & add stock' }}</button></div>
  </div>
</cis-modal>
`;
  }
});

// angular:jit:style:src\app\features\purchasing\pending-repurchases.component.scss
var pending_repurchases_component_default2;
var init_pending_repurchases_component2 = __esm({
  "angular:jit:style:src\\app\\features\\purchasing\\pending-repurchases.component.scss"() {
    pending_repurchases_component_default2 = "/* src/app/features/purchasing/pending-repurchases.component.scss */\n:host {\n  display: block;\n  color: var(--cis-text);\n}\n.rp-panel {\n  padding: 22px;\n  border: 1px solid var(--cis-border);\n  border-radius: 20px;\n  background: var(--cis-surface);\n}\n.rp-panel-flat {\n  border: 0;\n  padding: 0;\n  margin-top: 20px;\n  background: transparent;\n}\nh3 {\n  font-size: 18px;\n  font-weight: 750;\n}\nh4 {\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\np,\nsmall,\nlabel {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\np {\n  margin: 8px 0;\n}\nbutton {\n  min-height: 44px;\n  border-radius: 10px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 650;\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n}\nbutton.primary {\n  background: var(--cis-primary);\n  color: white;\n}\nbutton.primary:hover:not(:disabled) {\n  background: var(--cis-primary-hover);\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.rp-heading,\n.rp-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.rp-actions {\n  justify-content: flex-end;\n}\n.rp-badge {\n  display: inline-block;\n  font-size: 11px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.rp-notice {\n  padding: 12px;\n  background: var(--cis-primary-soft);\n  border-radius: 12px;\n  color: var(--cis-primary-strong);\n}\n.rp-error {\n  color: #b91c1c;\n  padding: 10px;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n}\n:host-context(.dark) .rp-error {\n  color: #fca5a5;\n}\n.rp-empty {\n  padding: 20px 0;\n  text-align: center;\n}\n.rp-pending {\n  padding: 16px 0;\n  border-top: 1px solid var(--cis-border);\n  margin-top: 14px;\n}\nsummary {\n  cursor: pointer;\n  font-size: 12px;\n  padding: 10px 0;\n  color: var(--cis-primary-strong);\n}\n.rp-order-line {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 8px 0;\n  font-size: 12px;\n}\n.rp-order-line small {\n  display: block;\n}\nlabel {\n  display: grid;\n  gap: 5px;\n  margin-bottom: 12px;\n}\ninput {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 8px 10px;\n  background: var(--cis-surface);\n  color: var(--cis-text);\n}\n.rp-cart-line {\n  border-top: 1px solid var(--cis-border);\n  padding: 16px 0;\n}\n.rp-cart-line strong {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.rp-prices {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 10px;\n}\n@media (max-width: 767px) {\n  .rp-panel {\n    padding: 16px;\n  }\n  .rp-prices {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  input {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=pending-repurchases.component.css.map */\n";
  }
});

// src/app/shared/services/pending-receiving.service.ts
var PendingReceivingService;
var init_pending_receiving_service = __esm({
  "src/app/shared/services/pending-receiving.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_graphql_service();
    init_branch_context_service();
    PendingReceivingService = class PendingReceivingService2 {
      gql = inject(GraphqlService);
      branchCtx = inject(BranchContext);
      count = signal(0);
      refresh() {
        this.gql.request("query PendingRepurchasesBadge($branch: String) { pendingRepurchases(branch: $branch) { id activation } }", { branch: this.branchCtx.effective() }).subscribe({
          next: (res) => this.sync(res.pendingRepurchases),
          error: () => this.count.set(0)
        });
      }
      sync(orders) {
        this.count.set((orders ?? []).filter((o) => o.activation).length);
      }
    };
    PendingReceivingService = __decorate([
      Injectable({ providedIn: "root" })
    ], PendingReceivingService);
  }
});

// src/app/features/purchasing/repurchase.types.ts
var orderFields;
var init_repurchase_types = __esm({
  "src/app/features/purchasing/repurchase.types.ts"() {
    "use strict";
    orderFields = "id supplier invoiceNumber createdAt createdBy activation receivedPurchaseId lines { productId sku productName quantity buyingPrice sellingPrice batchNumber expiryDate location }";
  }
});

// src/app/features/purchasing/pending-repurchases.component.ts
var PendingRepurchasesComponent;
var init_pending_repurchases_component3 = __esm({
  "src/app/features/purchasing/pending-repurchases.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_pending_repurchases_component();
    init_pending_repurchases_component2();
    init_common();
    init_core();
    init_forms();
    init_graphql_service();
    init_branch_context_service();
    init_money_pipe();
    init_pending_receiving_service();
    init_permission_service();
    init_modal_component();
    init_repurchase_types();
    PendingRepurchasesComponent = class PendingRepurchasesComponent2 {
      title = "Pending repurchase orders";
      subtitle = "Receive deliveries to add stock at MAIN.";
      flat = false;
      kind = "all";
      emptyText = "No pending repurchase orders.";
      hideWhenEmpty = false;
      received = new EventEmitter();
      ordersLoaded = new EventEmitter();
      perm = inject(PermissionService);
      gql = inject(GraphqlService);
      branchCtx = inject(BranchContext);
      badge = inject(PendingReceivingService);
      allPending = signal([]);
      pending = computed(() => this.allPending().filter((o) => this.kind === "all" || this.kind === "activation" === !!o.activation));
      busy = signal(false);
      error = signal(null);
      loaded = signal(false);
      visible = computed(() => !this.hideWhenEmpty || !this.loaded() || this.pending().length > 0 || !!this.error());
      notice = signal(null);
      receiptOrder = signal(null);
      receiptLines = [];
      constructor() {
        this.refresh();
      }
      refresh() {
        this.gql.request(`query PendingRepurchases($branch: String) { pendingRepurchases(branch: $branch) { ${orderFields} } }`, { branch: this.branchCtx.effective() }).subscribe({
          next: (res) => {
            this.allPending.set(res.pendingRepurchases);
            this.loaded.set(true);
            this.badge.sync(res.pendingRepurchases);
            this.ordersLoaded.emit(res.pendingRepurchases);
          },
          error: (e) => this.error.set(e instanceof Error ? e.message : "Could not load pending repurchases. Please refresh.")
        });
      }
      showNotice(message) {
        this.notice.set(message);
      }
      orderTotal(lines) {
        return lines.reduce((sum, l) => sum + l.buyingPrice * l.quantity, 0);
      }
      openReceipt(order) {
        this.error.set(null);
        this.receiptLines = order.lines.map((l) => __spreadProps(__spreadValues({}, l), {
          batchNumber: l.batchNumber?.trim() || `RP-${order.id.slice(0, 8)}-${l.productId}`,
          expiryDate: l.expiryDate ?? ""
        }));
        this.receiptOrder.set(order);
      }
      receiveOrder() {
        const order = this.receiptOrder();
        if (!order || this.busy() || !this.perm.canCreate("PURCHASING"))
          return;
        const now = /* @__PURE__ */ new Date();
        const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
        if (this.receiptLines.some((l) => !l.batchNumber.trim() || l.batchNumber.trim().length > 80 || !/^\d{4}-\d{2}-\d{2}$/.test(l.expiryDate) || l.expiryDate < today)) {
          this.error.set("Enter a batch code and a non-expired expiry date for every product.");
          return;
        }
        this.busy.set(true);
        this.error.set(null);
        this.gql.request(`mutation ReceiveRepurchase($input: ReceiveRepurchaseOrderInput!) {
      receiveRepurchase(input: $input) { ${orderFields} }
    }`, { input: { id: order.id, lines: this.receiptLines.map(({ productId, batchNumber, expiryDate }) => ({ productId, batchNumber, expiryDate })) } }).subscribe({
          next: () => {
            this.busy.set(false);
            this.receiptOrder.set(null);
            this.notice.set("Purchase received. Inventory at MAIN and approved price changes have been updated.");
            this.refresh();
            this.received.emit();
          },
          error: (e) => {
            this.busy.set(false);
            this.error.set(e instanceof Error ? e.message : "Could not receive order. You can safely retry.");
          }
        });
      }
      static ctorParameters = () => [];
      static propDecorators = {
        title: [{ type: Input }],
        subtitle: [{ type: Input }],
        flat: [{ type: Input }],
        kind: [{ type: Input }],
        emptyText: [{ type: Input }],
        hideWhenEmpty: [{ type: Input }],
        received: [{ type: Output }],
        ordersLoaded: [{ type: Output }]
      };
    };
    PendingRepurchasesComponent = __decorate([
      Component({
        selector: "cis-pending-repurchases",
        standalone: true,
        imports: [CommonModule, FormsModule, MoneyPipe, ModalComponent],
        template: pending_repurchases_component_default,
        styles: [pending_repurchases_component_default2]
      })
    ], PendingRepurchasesComponent);
  }
});

// angular:jit:template:src\app\features\purchasing\repurchase.component.html
var repurchase_component_default;
var init_repurchase_component = __esm({
  "angular:jit:template:src\\app\\features\\purchasing\\repurchase.component.html"() {
    repurchase_component_default = `<section class="repurchase-summary">
  <div class="rp-heading">
    <div><h3>Repurchase orders</h3><p>Replenish products, then receive deliveries into MAIN.</p></div>
    <div class="rp-actions">
      <button type="button" class="accent" *ngIf="perm.canCreate('PURCHASING')" (click)="addPurchase.emit()"> + Add Purchase</button>
      <button type="button" class="primary" *ngIf="perm.canCreate('PURCHASING')" (click)="openRepurchase()">Repurchase</button>
    </div>
  </div>
  <cis-pending-repurchases [flat]="true" kind="repurchase" (ordersLoaded)="onOrdersLoaded($event)" (received)="received.emit()"></cis-pending-repurchases>
</section>

<cis-modal [open]="open()" title="Repurchase Product" maxWidthClass="max-w-7xl" (close)="!busy() && open.set(false)">
  <div class="rp-workspace">
    <section class="rp-catalog">
      <label class="rp-search">Search products
        <input type="search" placeholder="Product name, SKU, barcode or brand" [ngModel]="search()" (ngModelChange)="search.set($event)" />
      </label>
      <div class="rp-filters" role="group" aria-label="Product stock filter">
        <button *ngFor="let tab of filters" type="button" [class.selected]="filter() === tab.id" [attr.aria-pressed]="filter() === tab.id" (click)="filter.set(tab.id)">{{ tab.label }}</button>
      </div>
      <p>Stock shown is non-expired stock at MAIN. Inactive products cannot be repurchased.</p>
      <p role="status" *ngIf="loading()">Loading products\u2026</p>
      <button type="button" *ngIf="error() && !products().length" (click)="loadProducts()">Retry product loading</button>
      <p class="rp-empty" *ngIf="!loading() && !filteredProducts().length">No products match this filter.</p>
      <div class="rp-products">
        <article class="rp-product" *ngFor="let product of filteredProducts()">
          <div class="rp-heading"><span class="rp-monogram">{{ product.name.slice(0, 2).toUpperCase() }}</span><span class="rp-badge">{{ !product.active ? 'Inactive' : product.availableQuantity > 0 ? product.availableQuantity + ' pcs' : 'Out of stock' }}</span></div>
          <h4>{{ product.name }}</h4><small>{{ product.sku }}</small>
          <p>Buying <strong>{{ (product.buyingPrice ?? 0) | money }}</strong></p>
          <details><summary>View details</summary>
            <dl><dt>Brand</dt><dd>{{ product.brand || '\u2014' }}</dd><dt>Category</dt><dd>{{ product.category || '\u2014' }}</dd><dt>Barcode</dt><dd>{{ product.barcode || '\u2014' }}</dd><dt>Unit</dt><dd>{{ product.unitOfMeasure || 'pcs' }}</dd><dt>Selling price</dt><dd>{{ (product.sellingPrice ?? 0) | money }}</dd></dl>
          </details>
          <button type="button" class="primary" [disabled]="!product.active || busy() || locked()" (click)="addProduct(product)">Add to cart</button>
        </article>
      </div>
    </section>
    <section class="rp-cart">
      <div class="rp-heading"><h3>Order cart</h3><span class="rp-badge">{{ itemCount() }} pcs</span></div>
      <p>Submit now, receive later. Stock is not added on submission.</p>
      <label>Supplier<input [(ngModel)]="supplier" maxlength="200" [disabled]="busy() || locked()" /></label>
      <label>Invoice / reference<input [(ngModel)]="invoiceNumber" maxlength="120" [disabled]="busy() || locked()" /></label>
      <p class="rp-empty" *ngIf="!cart().length">Add products from the catalog to start your order.</p>
      <article class="rp-cart-line" *ngFor="let line of cart()">
        <div class="rp-heading"><strong>{{ line.productName }}</strong><button type="button" [disabled]="busy() || locked()" (click)="removeProduct(line.productId)" [attr.aria-label]="'Remove ' + line.productName">Remove</button></div>
        <small>{{ line.sku }}</small>
        <div class="rp-prices">
          <label>Buying price<input type="number" min="0" max="1000000000" step="0.0001" [value]="line.buyingPrice" (change)="changeLine(line.productId, 'buyingPrice', $event)" [disabled]="busy() || locked() || !perm.canEdit('PRODUCTS')" /></label>
          <label>Selling price<input type="number" min="0" max="1000000000" step="0.0001" [value]="line.sellingPrice" (change)="changeLine(line.productId, 'sellingPrice', $event)" [disabled]="busy() || locked() || !perm.canEdit('PRODUCTS')" /></label>
        </div>
        <div class="rp-heading">
          <div class="rp-stepper">
            <button type="button" [disabled]="line.quantity <= 1 || busy() || locked()" (click)="setLine(line.productId, 'quantity', line.quantity - 1)" [attr.aria-label]="'Reduce quantity for ' + line.productName">\u2212</button>
            <input type="number" min="1" max="1000000" step="1" [attr.aria-label]="'Quantity in pcs for ' + line.productName" [value]="line.quantity" (change)="changeLine(line.productId, 'quantity', $event)" [disabled]="busy() || locked()" />
            <button type="button" [disabled]="busy() || locked()" (click)="setLine(line.productId, 'quantity', line.quantity + 1)" [attr.aria-label]="'Increase quantity for ' + line.productName">+</button>
          </div>
          <strong>{{ line.quantity * line.buyingPrice | money }}</strong>
        </div>
      </article>
      <p *ngIf="!perm.canEdit('PRODUCTS')">Product-edit permission is required to change prices.</p>
      <p class="rp-error" role="alert" *ngIf="error()">{{ error() }}</p>
      <div class="rp-heading rp-total"><span>Order total</span><strong>{{ total() | money }}</strong></div>
      <button type="button" class="primary rp-submit" [disabled]="busy() || !cart().length" (click)="submit()">{{ busy() ? 'Submitting\u2026' : locked() ? 'Retry submit' : 'Submit Order' }}</button>
      <p *ngIf="locked() && !busy()">The cart is preserved while submission is unconfirmed. Retry safely without creating another order.</p>
    </section>
  </div>
</cis-modal>
`;
  }
});

// angular:jit:style:src\app\features\purchasing\repurchase.component.scss
var repurchase_component_default2;
var init_repurchase_component2 = __esm({
  "angular:jit:style:src\\app\\features\\purchasing\\repurchase.component.scss"() {
    repurchase_component_default2 = "/* src/app/features/purchasing/repurchase.component.scss */\n:host {\n  display: block;\n  color: var(--cis-text);\n}\n.repurchase-summary {\n  margin-top: 20px;\n  padding: 22px;\n  border: 1px solid var(--cis-border);\n  border-radius: 20px;\n  background: var(--cis-surface);\n}\nh3 {\n  font-size: 18px;\n  font-weight: 750;\n}\nh4 {\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\np,\nsmall,\nlabel {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\np {\n  margin: 8px 0;\n}\nbutton {\n  min-height: 44px;\n  border-radius: 10px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 650;\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n}\nbutton.primary {\n  background: var(--cis-primary);\n  color: white;\n}\nbutton.primary:hover:not(:disabled) {\n  background: var(--cis-primary-hover);\n}\nbutton.accent {\n  background: #03cdd4;\n  color: white;\n}\nbutton.accent:hover:not(:disabled) {\n  background: #02686b;\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.rp-heading,\n.rp-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.rp-actions {\n  justify-content: flex-end;\n}\n.rp-badge {\n  display: inline-block;\n  font-size: 11px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.rp-error {\n  color: #b91c1c;\n  padding: 10px;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n}\n:host-context(.dark) .rp-error {\n  color: #fca5a5;\n}\n.rp-empty {\n  padding: 20px 0;\n  text-align: center;\n}\n.rp-workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 350px;\n  gap: 24px;\n  margin-top: 16px;\n}\n.rp-catalog,\n.rp-cart {\n  min-width: 0;\n}\nlabel {\n  display: grid;\n  gap: 5px;\n  margin-bottom: 12px;\n}\ninput {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 8px 10px;\n  background: var(--cis-surface);\n  color: var(--cis-text);\n}\n.rp-filters {\n  display: flex;\n  gap: 6px;\n  overflow-x: auto;\n  padding-bottom: 5px;\n}\n.rp-filters button {\n  flex-shrink: 0;\n}\n.rp-filters .selected {\n  background: var(--cis-primary);\n  color: white;\n}\n.rp-products {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 12px;\n}\n.rp-product {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border: 1px solid var(--cis-border);\n  border-radius: 16px;\n  padding: 14px;\n}\n.rp-product > button {\n  margin-top: auto;\n}\n.rp-monogram {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  font-weight: 750;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\ndl {\n  font-size: 12px;\n}\ndt {\n  color: var(--cis-muted);\n}\ndd {\n  margin-bottom: 6px;\n  overflow-wrap: anywhere;\n}\n.rp-cart {\n  padding: 18px;\n  border-radius: 16px;\n  background: var(--cis-page);\n  align-self: start;\n}\n.rp-cart-line {\n  border-top: 1px solid var(--cis-border);\n  padding: 16px 0;\n}\n.rp-cart-line strong {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.rp-prices {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 10px;\n}\n.rp-stepper {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.rp-stepper input {\n  width: 65px;\n  text-align: center;\n}\n.rp-stepper button {\n  padding: 8px 12px;\n}\n.rp-total {\n  border-top: 1px dashed var(--cis-border);\n  padding: 16px 0;\n}\n.rp-submit {\n  width: 100%;\n}\n@media (max-width: 1000px) {\n  .rp-workspace {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .repurchase-summary {\n    padding: 16px;\n  }\n  .rp-products {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .rp-product {\n    padding: 10px;\n  }\n  .rp-prices {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  input {\n    font-size: 16px;\n  }\n  .rp-cart {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=repurchase.component.css.map */\n";
  }
});

// src/app/features/purchasing/repurchase.component.ts
var RepurchaseComponent;
var init_repurchase_component3 = __esm({
  "src/app/features/purchasing/repurchase.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_repurchase_component();
    init_repurchase_component2();
    init_common();
    init_core();
    init_forms();
    init_graphql_service();
    init_branch_context_service();
    init_money_pipe();
    init_permission_service();
    init_modal_component();
    init_pending_repurchases_component3();
    init_repurchase_types();
    RepurchaseComponent = class RepurchaseComponent2 {
      received = new EventEmitter();
      addPurchase = new EventEmitter();
      pendingComponent;
      perm = inject(PermissionService);
      gql = inject(GraphqlService);
      branchCtx = inject(BranchContext);
      open = signal(false);
      loading = signal(false);
      busy = signal(false);
      error = signal(null);
      products = signal([]);
      cart = signal([]);
      search = signal("");
      filter = signal("all");
      filters = [{ id: "all", label: "All Products" }, { id: "inventory", label: "Inventory" }, { id: "out", label: "Out of Stock" }];
      supplier = "";
      invoiceNumber = "";
      requestId = crypto.randomUUID();
      submission = null;
      locked = signal(false);
      filteredProducts = computed(() => {
        const query = this.search().trim().toLowerCase();
        return this.products().filter((p) => [p.name, p.sku, p.barcode, p.brand, p.category].some((v) => v?.toLowerCase().includes(query)) && (this.filter() === "all" || (this.filter() === "inventory" ? p.availableQuantity > 0 : p.availableQuantity <= 0)));
      });
      itemCount = computed(() => this.cart().reduce((sum, l) => sum + l.quantity, 0));
      total = computed(() => this.orderTotal(this.cart()));
      onOrdersLoaded(orders) {
        if (orders.some((o) => o.id === this.requestId)) {
          this.cart.set([]);
          this.submission = null;
          this.requestId = crypto.randomUUID();
          this.supplier = "";
          this.invoiceNumber = "";
          this.error.set(null);
          this.pendingComponent?.showNotice("Your submitted order is listed below and is ready to receive.");
        }
      }
      openRepurchase() {
        this.open.set(true);
        this.loadProducts();
      }
      loadProducts() {
        this.loading.set(true);
        this.error.set(null);
        this.gql.request(`query RepurchaseProducts($branch: String) {
      repurchaseProducts(branch: $branch) { id sku name barcode brand category unitOfMeasure active buyingPrice sellingPrice availableQuantity }
    }`, { branch: this.branchCtx.writeBranch() }).subscribe({
          next: (res) => {
            this.products.set(res.repurchaseProducts);
            this.loading.set(false);
          },
          error: (e) => {
            this.error.set(e instanceof Error ? e.message : "Could not load products");
            this.loading.set(false);
          }
        });
      }
      addProduct(p) {
        if (this.locked() || this.busy() || !p.active)
          return;
        const line = this.cart().find((l) => l.productId === p.id);
        if (line) {
          this.setLine(p.id, "quantity", line.quantity + 1);
          return;
        }
        this.cart.update((lines) => [...lines, {
          productId: p.id,
          sku: p.sku,
          productName: p.name,
          quantity: 1,
          buyingPrice: p.buyingPrice ?? 0,
          sellingPrice: p.sellingPrice ?? 0
        }]);
      }
      setLine(id, field, value) {
        if (this.locked() || this.busy())
          return;
        const number = Number(value);
        if (value === null || value === "" || !Number.isFinite(number) || number < (field === "quantity" ? 1 : 0) || field === "quantity" && (!Number.isInteger(number) || number > 1e6) || field !== "quantity" && (number > 1e9 || Math.abs(number * 1e4 - Math.round(number * 1e4)) > 1e-3)) {
          this.error.set("Enter a whole quantity (1\u20131000000) and non-negative prices with up to four decimal places.");
          return;
        }
        this.error.set(null);
        this.cart.update((lines) => lines.map((l) => l.productId === id ? __spreadProps(__spreadValues({}, l), { [field]: number }) : l));
      }
      changeLine(id, field, event) {
        const input = event.target;
        this.setLine(id, field, input.value);
        input.value = String(this.cart().find((l) => l.productId === id)?.[field] ?? "");
      }
      removeProduct(id) {
        if (!this.locked() && !this.busy())
          this.cart.update((lines) => lines.filter((l) => l.productId !== id));
      }
      orderTotal(lines) {
        return lines.reduce((sum, l) => sum + l.buyingPrice * l.quantity, 0);
      }
      submit() {
        if (this.busy() || !this.cart().length || !this.perm.canCreate("PURCHASING"))
          return;
        if (!this.submission)
          this.submission = {
            id: this.requestId,
            supplier: this.supplier,
            invoiceNumber: this.invoiceNumber,
            branch: this.branchCtx.writeBranch(),
            lines: this.cart().map(({ productId, quantity, buyingPrice, sellingPrice }) => ({ productId, quantity, buyingPrice, sellingPrice }))
          };
        this.busy.set(true);
        this.locked.set(true);
        this.error.set(null);
        this.gql.request(`mutation SubmitRepurchase($input: SubmitRepurchaseInput!) {
      submitRepurchase(input: $input) { ${orderFields} }
    }`, { input: this.submission }).subscribe({
          next: () => {
            this.busy.set(false);
            this.locked.set(false);
            this.submission = null;
            this.requestId = crypto.randomUUID();
            this.cart.set([]);
            this.supplier = "";
            this.invoiceNumber = "";
            this.open.set(false);
            this.pendingComponent?.showNotice("Order submitted. Stock and prices will update only when you receive it.");
            this.pendingComponent?.refresh();
          },
          error: (e) => {
            this.busy.set(false);
            this.locked.set(false);
            this.submission = null;
            this.error.set((e instanceof Error ? e.message : "Submission could not be confirmed") + ". Retry to confirm the same order, or close and refresh pending orders.");
          }
        });
      }
      static propDecorators = {
        received: [{ type: Output }],
        addPurchase: [{ type: Output }],
        pendingComponent: [{ type: ViewChild, args: [PendingRepurchasesComponent] }]
      };
    };
    RepurchaseComponent = __decorate([
      Component({
        selector: "cis-repurchase",
        standalone: true,
        imports: [CommonModule, FormsModule, MoneyPipe, ModalComponent, PendingRepurchasesComponent],
        template: repurchase_component_default,
        styles: [repurchase_component_default2]
      })
    ], RepurchaseComponent);
  }
});

// src/app/features/purchasing/repurchase.component.spec.ts
var require_repurchase_component_spec = __commonJS({
  "src/app/features/purchasing/repurchase.component.spec.ts"(exports) {
    init_testing();
    init_platform_browser();
    init_esm();
    init_graphql_service();
    init_permission_service();
    init_pending_repurchases_component3();
    init_repurchase_component3();
    var product = { id: "1", sku: "SKU-1", name: "Cream", barcode: "1234", brand: "Naboo", category: "Skincare", unitOfMeasure: "pcs", active: true, buyingPrice: 5, sellingPrice: 10, availableQuantity: 2 };
    var order = {
      id: "33b44fba-9e7e-49c0-8df5-ded9a6d214e2",
      supplier: "Supplier",
      invoiceNumber: "INV-1",
      createdAt: "2026-01-01T00:00:00Z",
      createdBy: "storekeeper",
      activation: false,
      receivedPurchaseId: null,
      lines: [{ productId: "1", sku: "SKU-1", productName: "Cream", buyingPrice: 5, sellingPrice: 10, quantity: 2 }]
    };
    describe("RepurchaseComponent", () => {
      let request;
      beforeEach(() => __async(null, null, function* () {
        request = jasmine.createSpy("request").and.callFake((query) => {
          if (query.includes("query PendingRepurchases"))
            return of({ pendingRepurchases: [order] });
          if (query.includes("query RepurchaseProducts"))
            return of({ repurchaseProducts: [product, __spreadProps(__spreadValues({}, product), { id: "2", name: "Soap", availableQuantity: 0 })] });
          if (query.includes("mutation SubmitRepurchase"))
            return of({ submitRepurchase: order });
          return of({ receiveRepurchase: __spreadProps(__spreadValues({}, order), { receivedPurchaseId: "9" }) });
        });
        yield TestBed.configureTestingModule({ imports: [RepurchaseComponent], providers: [
          { provide: GraphqlService, useValue: { request } },
          { provide: PermissionService, useValue: { canCreate: () => true, canEdit: () => true } }
        ] }).compileComponents();
      }));
      const setup = () => {
        const fixture = TestBed.createComponent(RepurchaseComponent);
        fixture.detectChanges();
        return fixture;
      };
      it("renders pending orders and the repurchase entry point", () => {
        const fixture = setup();
        expect(fixture.nativeElement.textContent).toContain("Repurchase");
        expect(fixture.nativeElement.textContent).toContain("Pending receipt");
      });
      it("searches products and filters inventory versus out-of-stock", () => {
        const page = setup().componentInstance;
        page.openRepurchase();
        expect(page.filteredProducts().length).toBe(2);
        page.filter.set("out");
        expect(page.filteredProducts()[0].name).toBe("Soap");
        page.filter.set("inventory");
        expect(page.filteredProducts()).toEqual([product]);
        page.search.set("1234");
        expect(page.filteredProducts()).toEqual([product]);
        page.search.set("unknown");
        expect(page.filteredProducts()).toEqual([]);
      });
      it("combines cart items and recalculates totals from buying prices", () => {
        const page = setup().componentInstance;
        page.addProduct(product);
        page.addProduct(product);
        expect(page.cart().length).toBe(1);
        page.setLine("1", "buyingPrice", 7);
        page.setLine("1", "sellingPrice", 12);
        expect(page.total()).toBe(14);
        expect(page.itemCount()).toBe(2);
        page.removeProduct("1");
        expect(page.cart()).toEqual([]);
      });
      it("rejects inactive products and invalid quantities or prices", () => {
        const page = setup().componentInstance;
        page.addProduct(__spreadProps(__spreadValues({}, product), { active: false }));
        expect(page.cart()).toEqual([]);
        page.addProduct(product);
        page.setLine("1", "quantity", 0);
        page.setLine("1", "quantity", 1.5);
        page.setLine("1", "buyingPrice", -1);
        expect(page.cart()[0].quantity).toBe(1);
        expect(page.cart()[0].buyingPrice).toBe(5);
        expect(page.error()).toBeTruthy();
      });
      it("submits a pending order without calling inventory receipt", () => {
        const page = setup().componentInstance;
        page.addProduct(product);
        page.submit();
        expect(request.calls.allArgs().some((args) => String(args[0]).includes("mutation SubmitRepurchase"))).toBeTrue();
        expect(request.calls.allArgs().some((args) => String(args[0]).includes("mutation ReceiveRepurchase"))).toBeFalse();
        expect(page.cart()).toEqual([]);
      });
      it("blocks duplicate submissions and preserves the request id after failures", () => {
        const page = setup().componentInstance;
        const response = new Subject();
        request.and.returnValue(response);
        page.addProduct(product);
        page.submit();
        const input = request.calls.mostRecent().args[1].input;
        page.submit();
        expect(request.calls.allArgs().filter((args) => String(args[0]).includes("mutation SubmitRepurchase")).length).toBe(1);
        response.error(new Error("Network interrupted"));
        expect(page.cart().length).toBe(1);
        request.and.returnValue(throwError(() => new Error("Still offline")));
        page.submit();
        expect(request.calls.mostRecent().args[1].input.id).toBe(input.id);
        expect(page.busy()).toBeFalse();
      });
      it("requires batch expiry details before receiving and emits a refresh afterwards", () => {
        const fixture = setup();
        const pending = fixture.debugElement.query(By.directive(PendingRepurchasesComponent)).componentInstance;
        spyOn(pending.received, "emit");
        pending.openReceipt(order);
        pending.receiveOrder();
        expect(pending.error()).toContain("expiry date");
        expect(pending.received.emit).not.toHaveBeenCalled();
        pending.receiptLines[0].expiryDate = "2099-01-01";
        pending.receiveOrder();
        expect(pending.received.emit).toHaveBeenCalled();
        expect(pending.receiptOrder()).toBeNull();
      });
      it("renders the catalog and cart in the repurchase modal", () => {
        const fixture = setup();
        fixture.componentInstance.openRepurchase();
        fixture.componentInstance.addProduct(product);
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain("All Products");
        expect(fixture.nativeElement.textContent).toContain("Order cart");
        expect(fixture.nativeElement.textContent).toContain("Selling price");
      });
    });
  }
});
export default require_repurchase_component_spec();
//# sourceMappingURL=spec-repurchase.component.spec.js.map
