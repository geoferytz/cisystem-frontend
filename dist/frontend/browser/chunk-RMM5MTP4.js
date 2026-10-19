import {
  PendingReceivingService
} from "./chunk-VCHFA3NO.js";
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
  DatePipe,
  EventEmitter,
  GraphqlService,
  Input,
  NgForOf,
  NgIf,
  Output,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZFAUJJU2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/features/purchasing/repurchase.types.ts
var orderFields = "id supplier invoiceNumber createdAt createdBy activation receivedPurchaseId lines { productId sku productName quantity buyingPrice sellingPrice batchNumber expiryDate location }";

// src/app/features/purchasing/pending-repurchases.component.ts
function PendingRepurchasesComponent_section_0_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.notice());
  }
}
function PendingRepurchasesComponent_section_0_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function PendingRepurchasesComponent_section_0_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyText);
  }
}
function PendingRepurchasesComponent_section_0_article_13_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function PendingRepurchasesComponent_section_0_article_13_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openReceipt(order_r4));
    });
    \u0275\u0275text(1, "Receive");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.busy());
  }
}
function PendingRepurchasesComponent_section_0_article_13_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275pipe(8, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", line_r5.productName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r5.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", line_r5.quantity, " pcs \xB7 Buying ", \u0275\u0275pipeBind1(7, 5, line_r5.buyingPrice), " \xB7 Selling ", \u0275\u0275pipeBind1(8, 7, line_r5.sellingPrice));
  }
}
function PendingRepurchasesComponent_section_0_article_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 16)(1, "div", 9)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PendingRepurchasesComponent_section_0_article_13_button_13_Template, 2, 1, "button", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "details")(15, "summary");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PendingRepurchasesComponent_section_0_article_13_div_17_Template, 9, 9, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r4.supplier || "Repurchase order");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", order_r4.invoiceNumber || order_r4.id.slice(0, 8), " \xB7 ", \u0275\u0275pipeBind2(7, 8, order_r4.createdAt, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r4.activation ? "New product \u2014 pending receipt" : "Pending receipt");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, ctx_r1.orderTotal(order_r4.lines)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.perm.canCreate("PURCHASING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("View ", order_r4.lines.length, " product(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", order_r4.lines);
  }
}
function PendingRepurchasesComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 8)(1, "div", 9)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function PendingRepurchasesComponent_section_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275text(9, "Refresh");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, PendingRepurchasesComponent_section_0_p_10_Template, 2, 1, "p", 10)(11, PendingRepurchasesComponent_section_0_p_11_Template, 2, 1, "p", 4)(12, PendingRepurchasesComponent_section_0_p_12_Template, 2, 1, "p", 11)(13, PendingRepurchasesComponent_section_0_article_13_Template, 18, 13, "article", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rp-panel-flat", ctx_r1.flat);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.notice());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error() && !ctx_r1.receiptOrder());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pending().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pending());
  }
}
function PendingRepurchasesComponent_article_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 21)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "money");
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22)(8, "label");
    \u0275\u0275text(9, "Batch code");
    \u0275\u0275elementStart(10, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PendingRepurchasesComponent_article_5_Template_input_ngModelChange_10_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.batchNumber, $event) || (line_r7.batchNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label");
    \u0275\u0275text(12, "Expiry date");
    \u0275\u0275elementStart(13, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PendingRepurchasesComponent_article_5_Template_input_ngModelChange_13_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.expiryDate, $event) || (line_r7.expiryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r7.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", line_r7.quantity, " pcs \xB7 Buying ", \u0275\u0275pipeBind1(5, 8, line_r7.buyingPrice), " \xB7 Selling ", \u0275\u0275pipeBind1(6, 10, line_r7.sellingPrice));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", line_r7.batchNumber);
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", line_r7.expiryDate);
    \u0275\u0275property("disabled", ctx_r1.busy());
  }
}
function PendingRepurchasesComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
var PendingRepurchasesComponent = class _PendingRepurchasesComponent {
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
  allPending = signal([], ...ngDevMode ? [{ debugName: "allPending" }] : []);
  pending = computed(() => this.allPending().filter((o) => this.kind === "all" || this.kind === "activation" === !!o.activation), ...ngDevMode ? [{ debugName: "pending" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  loaded = signal(false, ...ngDevMode ? [{ debugName: "loaded" }] : []);
  visible = computed(() => !this.hideWhenEmpty || !this.loaded() || this.pending().length > 0 || !!this.error(), ...ngDevMode ? [{ debugName: "visible" }] : []);
  notice = signal(null, ...ngDevMode ? [{ debugName: "notice" }] : []);
  receiptOrder = signal(null, ...ngDevMode ? [{ debugName: "receiptOrder" }] : []);
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
  static \u0275fac = function PendingRepurchasesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingRepurchasesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingRepurchasesComponent, selectors: [["cis-pending-repurchases"]], inputs: { title: "title", subtitle: "subtitle", flat: "flat", kind: "kind", emptyText: "emptyText", hideWhenEmpty: "hideWhenEmpty" }, outputs: { received: "received", ordersLoaded: "ordersLoaded" }, decls: 12, vars: 7, consts: [["class", "rp-panel", 3, "rp-panel-flat", 4, "ngIf"], ["title", "Receive repurchase order", "maxWidthClass", "max-w-3xl", 3, "close", "open"], [1, "rp-receipt"], ["class", "rp-cart-line", 4, "ngFor", "ngForOf"], ["class", "rp-error", "role", "alert", 4, "ngIf"], [1, "rp-actions"], ["type", "button", 3, "click", "disabled"], ["type", "button", 1, "primary", 3, "click", "disabled"], [1, "rp-panel"], [1, "rp-heading"], ["class", "rp-notice", "role", "status", 4, "ngIf"], ["class", "rp-empty", 4, "ngIf"], ["class", "rp-pending", 4, "ngFor", "ngForOf"], ["role", "status", 1, "rp-notice"], ["role", "alert", 1, "rp-error"], [1, "rp-empty"], [1, "rp-pending"], [1, "rp-badge"], ["type", "button", "class", "primary", 3, "disabled", "click", 4, "ngIf"], ["class", "rp-order-line", 4, "ngFor", "ngForOf"], [1, "rp-order-line"], [1, "rp-cart-line"], [1, "rp-prices"], ["maxlength", "80", 3, "ngModelChange", "ngModel", "disabled"], ["type", "date", 3, "ngModelChange", "ngModel", "disabled"]], template: function PendingRepurchasesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PendingRepurchasesComponent_section_0_Template, 14, 9, "section", 0);
      \u0275\u0275elementStart(1, "cis-modal", 1);
      \u0275\u0275listener("close", function PendingRepurchasesComponent_Template_cis_modal_close_1_listener() {
        return !ctx.busy() && ctx.receiptOrder.set(null);
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "p");
      \u0275\u0275text(4, "Confirm the full delivery below. This will add stock to MAIN and apply the order's price changes. Use a new batch code for each product and enter its actual expiry date.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, PendingRepurchasesComponent_article_5_Template, 14, 12, "article", 3)(6, PendingRepurchasesComponent_p_6_Template, 2, 1, "p", 4);
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function PendingRepurchasesComponent_Template_button_click_8_listener() {
        return ctx.receiptOrder.set(null);
      });
      \u0275\u0275text(9, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275listener("click", function PendingRepurchasesComponent_Template_button_click_10_listener() {
        return ctx.receiveOrder();
      });
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.receiptOrder());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.receiptLines);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.busy() ? "Receiving\u2026" : "Confirm receipt & add stock");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, ModalComponent, DatePipe, MoneyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  color: var(--cis-text);\n}\n.rp-panel[_ngcontent-%COMP%] {\n  padding: 22px;\n  border: 1px solid var(--cis-border);\n  border-radius: 20px;\n  background: var(--cis-surface);\n}\n.rp-panel-flat[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n  margin-top: 20px;\n  background: transparent;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 750;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\np[_ngcontent-%COMP%], \nsmall[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\np[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\nbutton[_ngcontent-%COMP%] {\n  min-height: 44px;\n  border-radius: 10px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 650;\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n}\nbutton.primary[_ngcontent-%COMP%] {\n  background: var(--cis-primary);\n  color: white;\n}\nbutton.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--cis-primary-hover);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.rp-heading[_ngcontent-%COMP%], \n.rp-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.rp-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.rp-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.rp-notice[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: var(--cis-primary-soft);\n  border-radius: 12px;\n  color: var(--cis-primary-strong);\n}\n.rp-error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  padding: 10px;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n}\n.dark[_nghost-%COMP%]   .rp-error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .rp-error[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.rp-empty[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  text-align: center;\n}\n.rp-pending[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  border-top: 1px solid var(--cis-border);\n  margin-top: 14px;\n}\nsummary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 12px;\n  padding: 10px 0;\n  color: var(--cis-primary-strong);\n}\n.rp-order-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 8px 0;\n  font-size: 12px;\n}\n.rp-order-line[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n  margin-bottom: 12px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 8px 10px;\n  background: var(--cis-surface);\n  color: var(--cis-text);\n}\n.rp-cart-line[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--cis-border);\n  padding: 16px 0;\n}\n.rp-cart-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.rp-prices[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 10px;\n}\n@media (max-width: 767px) {\n  .rp-panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .rp-prices[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  input[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=pending-repurchases.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingRepurchasesComponent, [{
    type: Component,
    args: [{ selector: "cis-pending-repurchases", standalone: true, imports: [CommonModule, FormsModule, MoneyPipe, ModalComponent], template: `<section class="rp-panel" [class.rp-panel-flat]="flat" *ngIf="visible()">
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
`, styles: ["/* src/app/features/purchasing/pending-repurchases.component.scss */\n:host {\n  display: block;\n  color: var(--cis-text);\n}\n.rp-panel {\n  padding: 22px;\n  border: 1px solid var(--cis-border);\n  border-radius: 20px;\n  background: var(--cis-surface);\n}\n.rp-panel-flat {\n  border: 0;\n  padding: 0;\n  margin-top: 20px;\n  background: transparent;\n}\nh3 {\n  font-size: 18px;\n  font-weight: 750;\n}\nh4 {\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\np,\nsmall,\nlabel {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\np {\n  margin: 8px 0;\n}\nbutton {\n  min-height: 44px;\n  border-radius: 10px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 650;\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n}\nbutton.primary {\n  background: var(--cis-primary);\n  color: white;\n}\nbutton.primary:hover:not(:disabled) {\n  background: var(--cis-primary-hover);\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.rp-heading,\n.rp-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.rp-actions {\n  justify-content: flex-end;\n}\n.rp-badge {\n  display: inline-block;\n  font-size: 11px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.rp-notice {\n  padding: 12px;\n  background: var(--cis-primary-soft);\n  border-radius: 12px;\n  color: var(--cis-primary-strong);\n}\n.rp-error {\n  color: #b91c1c;\n  padding: 10px;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n}\n:host-context(.dark) .rp-error {\n  color: #fca5a5;\n}\n.rp-empty {\n  padding: 20px 0;\n  text-align: center;\n}\n.rp-pending {\n  padding: 16px 0;\n  border-top: 1px solid var(--cis-border);\n  margin-top: 14px;\n}\nsummary {\n  cursor: pointer;\n  font-size: 12px;\n  padding: 10px 0;\n  color: var(--cis-primary-strong);\n}\n.rp-order-line {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 8px 0;\n  font-size: 12px;\n}\n.rp-order-line small {\n  display: block;\n}\nlabel {\n  display: grid;\n  gap: 5px;\n  margin-bottom: 12px;\n}\ninput {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 8px 10px;\n  background: var(--cis-surface);\n  color: var(--cis-text);\n}\n.rp-cart-line {\n  border-top: 1px solid var(--cis-border);\n  padding: 16px 0;\n}\n.rp-cart-line strong {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.rp-prices {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 10px;\n}\n@media (max-width: 767px) {\n  .rp-panel {\n    padding: 16px;\n  }\n  .rp-prices {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  input {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=pending-repurchases.component.css.map */\n"] }]
  }], () => [], { title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], flat: [{
    type: Input
  }], kind: [{
    type: Input
  }], emptyText: [{
    type: Input
  }], hideWhenEmpty: [{
    type: Input
  }], received: [{
    type: Output
  }], ordersLoaded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingRepurchasesComponent, { className: "PendingRepurchasesComponent", filePath: "app/features/purchasing/pending-repurchases.component.ts", lineNumber: 19 });
})();

export {
  orderFields,
  PendingRepurchasesComponent
};
//# sourceMappingURL=chunk-RMM5MTP4.js.map
