import {
  PendingRepurchasesComponent,
  orderFields
} from "./chunk-RMM5MTP4.js";
import "./chunk-VCHFA3NO.js";
import {
  ModalComponent
} from "./chunk-TPFUJ5RZ.js";
import {
  PermissionService
} from "./chunk-B2QE76QF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-P24S6A7J.js";
import {
  MoneyPipe
} from "./chunk-7HLJHSCP.js";
import {
  BranchContext
} from "./chunk-ZQNAR4DZ.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  GraphqlService,
  NgForOf,
  NgIf,
  Output,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ZFAUJJU2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/features/purchasing/repurchase.component.ts
function RepurchaseComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function RepurchaseComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPurchase.emit());
    });
    \u0275\u0275text(1, " + Add Purchase");
    \u0275\u0275elementEnd();
  }
}
function RepurchaseComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function RepurchaseComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openRepurchase());
    });
    \u0275\u0275text(1, "Repurchase");
    \u0275\u0275elementEnd();
  }
}
function RepurchaseComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RepurchaseComponent_button_18_Template_button_click_0_listener() {
      const tab_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filter.set(tab_r5.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.filter() === tab_r5.id);
    \u0275\u0275attribute("aria-pressed", ctx_r1.filter() === tab_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r5.label);
  }
}
function RepurchaseComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Loading products\u2026");
    \u0275\u0275elementEnd();
  }
}
function RepurchaseComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RepurchaseComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadProducts());
    });
    \u0275\u0275text(1, "Retry product loading");
    \u0275\u0275elementEnd();
  }
}
function RepurchaseComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "No products match this filter.");
    \u0275\u0275elementEnd();
  }
}
function RepurchaseComponent_article_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 32)(1, "div", 1)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Buying ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "details")(16, "summary");
    \u0275\u0275text(17, "View details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dl")(19, "dt");
    \u0275\u0275text(20, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dd");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dt");
    \u0275\u0275text(24, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dt");
    \u0275\u0275text(28, "Barcode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dd");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dt");
    \u0275\u0275text(32, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dd");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "dt");
    \u0275\u0275text(36, "Selling price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dd");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "button", 34);
    \u0275\u0275listener("click", function RepurchaseComponent_article_25_Template_button_click_40_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addProduct(product_r8));
    });
    \u0275\u0275text(41, "Add to cart");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r8.name.slice(0, 2).toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!product_r8.active ? "Inactive" : product_r8.availableQuantity > 0 ? product_r8.availableQuantity + " pcs" : "Out of stock");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.sku);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, product_r8.buyingPrice ?? 0));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(product_r8.brand || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r8.category || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r8.barcode || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r8.unitOfMeasure || "pcs");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 13, product_r8.sellingPrice ?? 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !product_r8.active || ctx_r1.busy() || ctx_r1.locked());
  }
}
function RepurchaseComponent_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "Add products from the catalog to start your order.");
    \u0275\u0275elementEnd();
  }
}
function RepurchaseComponent_article_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 35)(1, "div", 1)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function RepurchaseComponent_article_41_Template_button_click_4_listener() {
      const line_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeProduct(line_r10.productId));
    });
    \u0275\u0275text(5, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37)(9, "label");
    \u0275\u0275text(10, "Buying price");
    \u0275\u0275elementStart(11, "input", 38);
    \u0275\u0275listener("change", function RepurchaseComponent_article_41_Template_input_change_11_listener($event) {
      const line_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeLine(line_r10.productId, "buyingPrice", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label");
    \u0275\u0275text(13, "Selling price");
    \u0275\u0275elementStart(14, "input", 38);
    \u0275\u0275listener("change", function RepurchaseComponent_article_41_Template_input_change_14_listener($event) {
      const line_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeLine(line_r10.productId, "sellingPrice", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 37)(16, "label");
    \u0275\u0275text(17, "Batch number");
    \u0275\u0275elementStart(18, "input", 39);
    \u0275\u0275listener("input", function RepurchaseComponent_article_41_Template_input_input_18_listener($event) {
      const line_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setText(line_r10.productId, "batchNumber", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label");
    \u0275\u0275text(20, "Expiry date");
    \u0275\u0275elementStart(21, "input", 40);
    \u0275\u0275listener("input", function RepurchaseComponent_article_41_Template_input_input_21_listener($event) {
      const line_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setText(line_r10.productId, "expiryDate", $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 1)(23, "div", 41)(24, "button", 36);
    \u0275\u0275listener("click", function RepurchaseComponent_article_41_Template_button_click_24_listener() {
      const line_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLine(line_r10.productId, "quantity", line_r10.quantity - 1));
    });
    \u0275\u0275text(25, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 42);
    \u0275\u0275listener("change", function RepurchaseComponent_article_41_Template_input_change_26_listener($event) {
      const line_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeLine(line_r10.productId, "quantity", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 36);
    \u0275\u0275listener("click", function RepurchaseComponent_article_41_Template_button_click_27_listener() {
      const line_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLine(line_r10.productId, "quantity", line_r10.quantity + 1));
    });
    \u0275\u0275text(28, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "money");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const line_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r10.productName);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy() || ctx_r1.locked());
    \u0275\u0275attribute("aria-label", "Remove " + line_r10.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r10.sku);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", line_r10.buyingPrice)("disabled", ctx_r1.busy() || ctx_r1.locked() || !ctx_r1.perm.canEdit("PRODUCTS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", line_r10.sellingPrice)("disabled", ctx_r1.busy() || ctx_r1.locked() || !ctx_r1.perm.canEdit("PRODUCTS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", line_r10.batchNumber || "")("disabled", ctx_r1.busy() || ctx_r1.locked());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", line_r10.expiryDate || "")("disabled", ctx_r1.busy() || ctx_r1.locked());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", line_r10.quantity <= 1 || ctx_r1.busy() || ctx_r1.locked());
    \u0275\u0275attribute("aria-label", "Reduce quantity for " + line_r10.productName);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", line_r10.quantity)("disabled", ctx_r1.busy() || ctx_r1.locked());
    \u0275\u0275attribute("aria-label", "Quantity in pcs for " + line_r10.productName);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy() || ctx_r1.locked());
    \u0275\u0275attribute("aria-label", "Increase quantity for " + line_r10.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 20, line_r10.quantity * line_r10.buyingPrice));
  }
}
function RepurchaseComponent_p_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Product-edit permission is required to change prices.");
    \u0275\u0275elementEnd();
  }
}
function RepurchaseComponent_p_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function RepurchaseComponent_p_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "The cart is preserved while submission is unconfirmed. Retry safely without creating another order.");
    \u0275\u0275elementEnd();
  }
}
var RepurchaseComponent = class _RepurchaseComponent {
  received = new EventEmitter();
  addPurchase = new EventEmitter();
  pendingComponent;
  perm = inject(PermissionService);
  gql = inject(GraphqlService);
  branchCtx = inject(BranchContext);
  open = signal(false, ...ngDevMode ? [{ debugName: "open" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  cart = signal([], ...ngDevMode ? [{ debugName: "cart" }] : []);
  search = signal("", ...ngDevMode ? [{ debugName: "search" }] : []);
  filter = signal("all", ...ngDevMode ? [{ debugName: "filter" }] : []);
  filters = [{ id: "all", label: "All Products" }, { id: "inventory", label: "Inventory" }, { id: "out", label: "Out of Stock" }];
  supplier = "";
  invoiceNumber = "";
  requestId = crypto.randomUUID();
  submission = null;
  locked = signal(false, ...ngDevMode ? [{ debugName: "locked" }] : []);
  filteredProducts = computed(() => {
    const query = this.search().trim().toLowerCase();
    return this.products().filter((p) => [p.name, p.sku, p.barcode, p.brand, p.category].some((v) => v?.toLowerCase().includes(query)) && (this.filter() === "all" || (this.filter() === "inventory" ? p.availableQuantity > 0 : p.availableQuantity <= 0)));
  }, ...ngDevMode ? [{ debugName: "filteredProducts" }] : []);
  itemCount = computed(() => this.cart().reduce((sum, l) => sum + l.quantity, 0), ...ngDevMode ? [{ debugName: "itemCount" }] : []);
  total = computed(() => this.orderTotal(this.cart()), ...ngDevMode ? [{ debugName: "total" }] : []);
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
  setText(id, field, value) {
    if (this.locked() || this.busy())
      return;
    this.cart.update((lines) => lines.map((l) => l.productId === id ? __spreadProps(__spreadValues({}, l), { [field]: value.trim() }) : l));
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
        lines: this.cart().map(({ productId, quantity, buyingPrice, sellingPrice, batchNumber, expiryDate }) => ({ productId, quantity, buyingPrice, sellingPrice, batchNumber: (batchNumber ?? "").trim() || null, expiryDate: (expiryDate ?? "").trim() || null }))
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
  static \u0275fac = function RepurchaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepurchaseComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepurchaseComponent, selectors: [["cis-repurchase"]], viewQuery: function RepurchaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(PendingRepurchasesComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pendingComponent = _t.first);
    }
  }, outputs: { received: "received", addPurchase: "addPurchase" }, decls: 53, vars: 25, consts: [[1, "repurchase-summary"], [1, "rp-heading"], [1, "rp-actions"], ["type", "button", "class", "accent", 3, "click", 4, "ngIf"], ["type", "button", "class", "primary", 3, "click", 4, "ngIf"], ["kind", "repurchase", 3, "ordersLoaded", "received", "flat"], ["title", "Repurchase Product", "maxWidthClass", "max-w-7xl", 3, "close", "open"], [1, "rp-workspace"], [1, "rp-catalog"], [1, "rp-search"], ["type", "search", "placeholder", "Product name, SKU, barcode or brand", 3, "ngModelChange", "ngModel"], ["role", "group", "aria-label", "Product stock filter", 1, "rp-filters"], ["type", "button", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["role", "status", 4, "ngIf"], ["type", "button", 3, "click", 4, "ngIf"], ["class", "rp-empty", 4, "ngIf"], [1, "rp-products"], ["class", "rp-product", 4, "ngFor", "ngForOf"], [1, "rp-cart"], [1, "rp-badge"], ["maxlength", "200", 3, "ngModelChange", "ngModel", "disabled"], ["maxlength", "120", 3, "ngModelChange", "ngModel", "disabled"], ["class", "rp-cart-line", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "rp-error", "role", "alert", 4, "ngIf"], [1, "rp-heading", "rp-total"], ["type", "button", 1, "primary", "rp-submit", 3, "click", "disabled"], ["type", "button", 1, "accent", 3, "click"], ["type", "button", 1, "primary", 3, "click"], ["type", "button", 3, "click"], ["role", "status"], [1, "rp-empty"], [1, "rp-product"], [1, "rp-monogram"], ["type", "button", 1, "primary", 3, "click", "disabled"], [1, "rp-cart-line"], ["type", "button", 3, "click", "disabled"], [1, "rp-prices"], ["type", "number", "min", "0", "max", "1000000000", "step", "0.0001", 3, "change", "value", "disabled"], ["type", "text", "maxlength", "80", "placeholder", "e.g. BN-2025-01", 3, "input", "value", "disabled"], ["type", "date", 3, "input", "value", "disabled"], [1, "rp-stepper"], ["type", "number", "min", "1", "max", "1000000", "step", "1", 3, "change", "value", "disabled"], ["role", "alert", 1, "rp-error"]], template: function RepurchaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h3");
      \u0275\u0275text(4, "Repurchase orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Replenish products, then receive deliveries into MAIN.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 2);
      \u0275\u0275template(8, RepurchaseComponent_button_8_Template, 2, 0, "button", 3)(9, RepurchaseComponent_button_9_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "cis-pending-repurchases", 5);
      \u0275\u0275listener("ordersLoaded", function RepurchaseComponent_Template_cis_pending_repurchases_ordersLoaded_10_listener($event) {
        return ctx.onOrdersLoaded($event);
      })("received", function RepurchaseComponent_Template_cis_pending_repurchases_received_10_listener() {
        return ctx.received.emit();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "cis-modal", 6);
      \u0275\u0275listener("close", function RepurchaseComponent_Template_cis_modal_close_11_listener() {
        return !ctx.busy() && ctx.open.set(false);
      });
      \u0275\u0275elementStart(12, "div", 7)(13, "section", 8)(14, "label", 9);
      \u0275\u0275text(15, "Search products ");
      \u0275\u0275elementStart(16, "input", 10);
      \u0275\u0275listener("ngModelChange", function RepurchaseComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.search.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275template(18, RepurchaseComponent_button_18_Template, 2, 4, "button", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20, "Stock shown is non-expired stock at MAIN. Inactive products cannot be repurchased.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, RepurchaseComponent_p_21_Template, 2, 0, "p", 13)(22, RepurchaseComponent_button_22_Template, 2, 0, "button", 14)(23, RepurchaseComponent_p_23_Template, 2, 0, "p", 15);
      \u0275\u0275elementStart(24, "div", 16);
      \u0275\u0275template(25, RepurchaseComponent_article_25_Template, 42, 15, "article", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "section", 18)(27, "div", 1)(28, "h3");
      \u0275\u0275text(29, "Order cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "Submit now, receive later. Stock is not added on submission.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "label");
      \u0275\u0275text(35, "Supplier");
      \u0275\u0275elementStart(36, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function RepurchaseComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.supplier, $event) || (ctx.supplier = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "label");
      \u0275\u0275text(38, "Invoice / reference");
      \u0275\u0275elementStart(39, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function RepurchaseComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.invoiceNumber, $event) || (ctx.invoiceNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, RepurchaseComponent_p_40_Template, 2, 0, "p", 15)(41, RepurchaseComponent_article_41_Template, 32, 22, "article", 22)(42, RepurchaseComponent_p_42_Template, 2, 0, "p", 23)(43, RepurchaseComponent_p_43_Template, 2, 1, "p", 24);
      \u0275\u0275elementStart(44, "div", 25)(45, "span");
      \u0275\u0275text(46, "Order total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "strong");
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "button", 26);
      \u0275\u0275listener("click", function RepurchaseComponent_Template_button_click_50_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, RepurchaseComponent_p_52_Template, 2, 0, "p", 23);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("PURCHASING"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.perm.canCreate("PURCHASING"));
      \u0275\u0275advance();
      \u0275\u0275property("flat", true);
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.open());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.search());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.filters);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error() && !ctx.products().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.filteredProducts().length);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.filteredProducts());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.itemCount(), " pcs");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.supplier);
      \u0275\u0275property("disabled", ctx.busy() || ctx.locked());
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.invoiceNumber);
      \u0275\u0275property("disabled", ctx.busy() || ctx.locked());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cart().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.cart());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.perm.canEdit("PRODUCTS"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 23, ctx.total()));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy() || !ctx.cart().length);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.busy() ? "Submitting\u2026" : ctx.locked() ? "Retry submit" : "Submit Order");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.locked() && !ctx.busy());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, ModalComponent, PendingRepurchasesComponent, MoneyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  color: var(--cis-text);\n}\n.repurchase-summary[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 22px;\n  border: 1px solid var(--cis-border);\n  border-radius: 20px;\n  background: var(--cis-surface);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 750;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\np[_ngcontent-%COMP%], \nsmall[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\np[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\nbutton[_ngcontent-%COMP%] {\n  min-height: 44px;\n  border-radius: 10px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 650;\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n}\nbutton.primary[_ngcontent-%COMP%] {\n  background: var(--cis-primary);\n  color: white;\n}\nbutton.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--cis-primary-hover);\n}\nbutton.accent[_ngcontent-%COMP%] {\n  background: #03cdd4;\n  color: white;\n}\nbutton.accent[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #02686b;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.rp-heading[_ngcontent-%COMP%], \n.rp-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.rp-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.rp-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.rp-error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  padding: 10px;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n}\n.dark[_nghost-%COMP%]   .rp-error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .rp-error[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.rp-empty[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  text-align: center;\n}\n.rp-workspace[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 350px;\n  gap: 24px;\n  margin-top: 16px;\n}\n.rp-catalog[_ngcontent-%COMP%], \n.rp-cart[_ngcontent-%COMP%] {\n  min-width: 0;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n  margin-bottom: 12px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 8px 10px;\n  background: var(--cis-surface);\n  color: var(--cis-text);\n}\n.rp-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  overflow-x: auto;\n  padding-bottom: 5px;\n}\n.rp-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.rp-filters[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background: var(--cis-primary);\n  color: white;\n}\n.rp-products[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 12px;\n}\n.rp-product[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border: 1px solid var(--cis-border);\n  border-radius: 16px;\n  padding: 14px;\n}\n.rp-product[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.rp-monogram[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  font-weight: 750;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\ndl[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\ndt[_ngcontent-%COMP%] {\n  color: var(--cis-muted);\n}\ndd[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  overflow-wrap: anywhere;\n}\n.rp-cart[_ngcontent-%COMP%] {\n  padding: 18px;\n  border-radius: 16px;\n  background: var(--cis-page);\n  align-self: start;\n}\n.rp-cart-line[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--cis-border);\n  padding: 16px 0;\n}\n.rp-cart-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.rp-prices[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 10px;\n}\n.rp-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.rp-stepper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 65px;\n  text-align: center;\n}\n.rp-stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n}\n.rp-total[_ngcontent-%COMP%] {\n  border-top: 1px dashed var(--cis-border);\n  padding: 16px 0;\n}\n.rp-submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 1000px) {\n  .rp-workspace[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .repurchase-summary[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .rp-products[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .rp-product[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .rp-prices[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  input[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .rp-cart[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=repurchase.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepurchaseComponent, [{
    type: Component,
    args: [{ selector: "cis-repurchase", standalone: true, imports: [CommonModule, FormsModule, MoneyPipe, ModalComponent, PendingRepurchasesComponent], template: `<section class="repurchase-summary">
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
        <div class="rp-prices">
          <label>Batch number<input type="text" maxlength="80" [value]="line.batchNumber || ''" (input)="setText(line.productId, 'batchNumber', $any($event.target).value)" [disabled]="busy() || locked()" placeholder="e.g. BN-2025-01" /></label>
          <label>Expiry date<input type="date" [value]="line.expiryDate || ''" (input)="setText(line.productId, 'expiryDate', $any($event.target).value)" [disabled]="busy() || locked()" /></label>
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
`, styles: ["/* src/app/features/purchasing/repurchase.component.scss */\n:host {\n  display: block;\n  color: var(--cis-text);\n}\n.repurchase-summary {\n  margin-top: 20px;\n  padding: 22px;\n  border: 1px solid var(--cis-border);\n  border-radius: 20px;\n  background: var(--cis-surface);\n}\nh3 {\n  font-size: 18px;\n  font-weight: 750;\n}\nh4 {\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\np,\nsmall,\nlabel {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\np {\n  margin: 8px 0;\n}\nbutton {\n  min-height: 44px;\n  border-radius: 10px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 650;\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n}\nbutton.primary {\n  background: var(--cis-primary);\n  color: white;\n}\nbutton.primary:hover:not(:disabled) {\n  background: var(--cis-primary-hover);\n}\nbutton.accent {\n  background: #03cdd4;\n  color: white;\n}\nbutton.accent:hover:not(:disabled) {\n  background: #02686b;\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.rp-heading,\n.rp-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.rp-actions {\n  justify-content: flex-end;\n}\n.rp-badge {\n  display: inline-block;\n  font-size: 11px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.rp-error {\n  color: #b91c1c;\n  padding: 10px;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n}\n:host-context(.dark) .rp-error {\n  color: #fca5a5;\n}\n.rp-empty {\n  padding: 20px 0;\n  text-align: center;\n}\n.rp-workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 350px;\n  gap: 24px;\n  margin-top: 16px;\n}\n.rp-catalog,\n.rp-cart {\n  min-width: 0;\n}\nlabel {\n  display: grid;\n  gap: 5px;\n  margin-bottom: 12px;\n}\ninput {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 8px 10px;\n  background: var(--cis-surface);\n  color: var(--cis-text);\n}\n.rp-filters {\n  display: flex;\n  gap: 6px;\n  overflow-x: auto;\n  padding-bottom: 5px;\n}\n.rp-filters button {\n  flex-shrink: 0;\n}\n.rp-filters .selected {\n  background: var(--cis-primary);\n  color: white;\n}\n.rp-products {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 12px;\n}\n.rp-product {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border: 1px solid var(--cis-border);\n  border-radius: 16px;\n  padding: 14px;\n}\n.rp-product > button {\n  margin-top: auto;\n}\n.rp-monogram {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  font-weight: 750;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\ndl {\n  font-size: 12px;\n}\ndt {\n  color: var(--cis-muted);\n}\ndd {\n  margin-bottom: 6px;\n  overflow-wrap: anywhere;\n}\n.rp-cart {\n  padding: 18px;\n  border-radius: 16px;\n  background: var(--cis-page);\n  align-self: start;\n}\n.rp-cart-line {\n  border-top: 1px solid var(--cis-border);\n  padding: 16px 0;\n}\n.rp-cart-line strong {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.rp-prices {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 10px;\n}\n.rp-stepper {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.rp-stepper input {\n  width: 65px;\n  text-align: center;\n}\n.rp-stepper button {\n  padding: 8px 12px;\n}\n.rp-total {\n  border-top: 1px dashed var(--cis-border);\n  padding: 16px 0;\n}\n.rp-submit {\n  width: 100%;\n}\n@media (max-width: 1000px) {\n  .rp-workspace {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .repurchase-summary {\n    padding: 16px;\n  }\n  .rp-products {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .rp-product {\n    padding: 10px;\n  }\n  .rp-prices {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  input {\n    font-size: 16px;\n  }\n  .rp-cart {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=repurchase.component.css.map */\n"] }]
  }], null, { received: [{
    type: Output
  }], addPurchase: [{
    type: Output
  }], pendingComponent: [{
    type: ViewChild,
    args: [PendingRepurchasesComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepurchaseComponent, { className: "RepurchaseComponent", filePath: "app/features/purchasing/repurchase.component.ts", lineNumber: 21 });
})();
export {
  RepurchaseComponent
};
//# sourceMappingURL=chunk-I4C3KLB4.js.map
