import {
  ConfirmDialogComponent
} from "./chunk-N7IOF3IM.js";
import {
  ModalComponent
} from "./chunk-Z6ZNV4D7.js";
import {
  PermissionService
} from "./chunk-MUULZ2RC.js";
import {
  CIS_FORM_IMPORTS,
  CisFormFieldsComponent
} from "./chunk-XGYQYOHY.js";
import {
  RowActionsMenuComponent
} from "./chunk-NDY7KUDP.js";
import {
  FormBuilder,
  FormGroupDirective,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TD7F3R7N.js";
import {
  PagerComponent
} from "./chunk-LNJXT4KE.js";
import {
  MoneyPipe
} from "./chunk-WX6AFSP5.js";
import {
  RouterLink
} from "./chunk-ICDIWG7Q.js";
import {
  TranslatePipe
} from "./chunk-DPFPPFWE.js";
import {
  BranchContext,
  CommonModule,
  Component,
  GraphqlService,
  NgForOf,
  NgIf,
  computed,
  inject,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefer,
  ɵɵdeferOnImmediate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F3YP4G7X.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/purchasing/purchasing.page.ts
var PurchasingPage_Defer_4_DepsFn = () => [import("./chunk-SGFJ6FQD.js").then((m) => m.RepurchaseComponent)];
function PurchasingPage_Defer_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cis-repurchase", 29);
    \u0275\u0275listener("received", function PurchasingPage_Defer_3_Template_cis_repurchase_received_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    })("addPurchase", function PurchasingPage_Defer_3_Template_cis_repurchase_addPurchase_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function PurchasingPage_div_46_tr_25_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "NEW");
    \u0275\u0275elementEnd();
  }
}
function PurchasingPage_div_46_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275template(3, PurchasingPage_div_46_tr_25_span_3_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 37);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 39)(14, "button", 40);
    \u0275\u0275listener("click", function PurchasingPage_div_46_tr_25_Template_button_click_14_listener() {
      const idx_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeLine(idx_r4));
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", l_r5.displayName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", l_r5.newProduct);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.expiryDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, l_r5.costPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lineQtyLabel(l_r5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 9, "common.remove"));
  }
}
function PurchasingPage_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h4", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "table", 22)(6, "thead", 23)(7, "tr")(8, "th", 24);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 24);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 24);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 25);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 25);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "th", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, PurchasingPage_div_46_tr_25_Template, 17, 11, "tr", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "common.lines"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "common.productId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "common.batch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "common.expiry"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "common.cost"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 17, "common.qty"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.lines());
  }
}
function PurchasingPage_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function PurchasingPage_ng_container_82_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function PurchasingPage_ng_container_82_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const o_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(o_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "common.edit"), " ");
  }
}
function PurchasingPage_ng_container_82_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function PurchasingPage_ng_container_82_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const o_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(o_r7.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "common.delete"), " ");
  }
}
function PurchasingPage_ng_container_82_tr_22_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 64)(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 37);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 38);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r10.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r10.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r10.expiryDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, l_r10.costPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r10.quantityReceived);
  }
}
function PurchasingPage_ng_container_82_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 54)(1, "td", 55)(2, "div", 56)(3, "span", 57);
    \u0275\u0275text(4, "Purchase details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 58)(6, "table", 59)(7, "thead", 60)(8, "tr")(9, "th", 61);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 61);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 61);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 62);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 62);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, PurchasingPage_ng_container_82_tr_22_tr_25_Template, 12, 7, "tr", 63);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const o_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "common.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 8, "common.batch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "common.expiry"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 12, "common.cost"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 14, "common.qty"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", o_r7.lines);
  }
}
function PurchasingPage_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 34)(2, "td", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 39)(14, "cis-row-actions")(15, "button", 44);
    \u0275\u0275listener("click", function PurchasingPage_ng_container_82_Template_button_click_15_listener() {
      const o_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDetails(o_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 45);
    \u0275\u0275element(17, "path", 46)(18, "circle", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, PurchasingPage_ng_container_82_button_20_Template, 5, 3, "button", 48)(21, PurchasingPage_ng_container_82_button_21_Template, 5, 3, "button", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, PurchasingPage_ng_container_82_tr_22_Template, 26, 16, "tr", 50);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r7.supplier || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r7.invoiceNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r7.receivedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r7.lines.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, ctx_r1.purchaseTotalValue(o_r7)));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailsOrderId() === o_r7.id ? "Hide details" : "Details", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("PURCHASING"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("PURCHASING"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsOrderId() === o_r7.id);
  }
}
function PurchasingPage_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 65);
    \u0275\u0275text(2, "No purchase orders yet");
    \u0275\u0275elementEnd()();
  }
}
var PurchasingPage = class _PurchasingPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  createOpen = signal(false, ...ngDevMode ? [{ debugName: "createOpen" }] : []);
  editingOrderId = signal(null, ...ngDevMode ? [{ debugName: "editingOrderId" }] : []);
  detailsOrderId = signal(null, ...ngDevMode ? [{ debugName: "detailsOrderId" }] : []);
  confirmDeleteOpen = signal(false, ...ngDevMode ? [{ debugName: "confirmDeleteOpen" }] : []);
  pendingDeleteOrderId = signal(null, ...ngDevMode ? [{ debugName: "pendingDeleteOrderId" }] : []);
  orders = signal([], ...ngDevMode ? [{ debugName: "orders" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedOrders = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.orders().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedOrders" }] : []);
  lines = signal([], ...ngDevMode ? [{ debugName: "lines" }] : []);
  productOptions = signal([], ...ngDevMode ? [{ debugName: "productOptions" }] : []);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  fb = inject(FormBuilder);
  branchCtx = inject(BranchContext);
  headerForm = this.fb.group({
    supplier: [""],
    invoiceNumber: [""]
  });
  headerFields = [
    { key: "supplier", label: "common.supplier" },
    { key: "invoiceNumber", label: "common.invoiceNumber" }
  ];
  lineForm = this.fb.group({
    sku: [""],
    name: ["", [Validators.required]],
    barcode: [""],
    brand: [""],
    category: [""],
    variant: [""],
    sellingPrice: [null, [Validators.min(0)]],
    measure: ["Piece", [Validators.required]],
    unitSize: [1, [Validators.required, Validators.min(1)]],
    batchNumber: [""],
    expiryDate: ["", [Validators.required]],
    measurePrice: [0, [Validators.required, Validators.min(0)]],
    measureQuantity: [1, [Validators.required, Validators.min(1)]]
  });
  measureName() {
    return (this.lineForm.controls.measure.value ?? "").trim() || "measure";
  }
  lineFieldsA = [
    { key: "sku", label: "SKU", labelHint: "auto if empty", placeholder: "PRD-00001" },
    { key: "name", label: "Product Name", required: true }
  ];
  lineFieldsB = [
    { key: "barcode", label: "Barcode" },
    { key: "brand", label: "Brand" }
  ];
  lineFieldsC = [
    {
      key: "category",
      label: "Category",
      type: "select",
      options: () => [
        { value: "", label: "expenses.selectCategory" },
        ...this.categories().map((c) => ({ value: c.name, label: c.name }))
      ]
    },
    { key: "variant", label: "Variant" }
  ];
  lineFieldsD = [
    { key: "measure", label: "Purchase type / measure", required: true, placeholder: "e.g. Piece, Dozen, Carton" },
    {
      key: "unitSize",
      type: "number",
      required: true,
      min: 1,
      step: 1,
      label: () => `pcs per ${this.measureName()}`
    }
  ];
  lineFieldsE = [
    { key: "expiryDate", label: "common.expiryDate", type: "date", required: true },
    { key: "batchNumber", label: "common.batchNumber", labelHint: "auto if empty", placeholder: "B1-0001" }
  ];
  lineFieldsF = [
    {
      key: "measureQuantity",
      type: "number",
      required: true,
      min: 1,
      step: 1,
      label: () => `Quantity (${this.measureName()})`
    },
    {
      key: "measurePrice",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      label: () => `Buying price per ${this.measureName()} (TZS)`
    }
  ];
  lineFieldsG = [
    { key: "sellingPrice", label: "Selling price per piece (TZS)", type: "number", min: 0, step: 0.01 }
  ];
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.load();
    this.loadProductOptions();
    this.loadCategories();
  }
  loadProductOptions() {
    const q = `query Products { products { id sku name } }`;
    this.gql.request(q).subscribe({
      next: (res) => this.productOptions.set(res.products ?? []),
      error: () => this.productOptions.set([])
    });
  }
  loadCategories() {
    const q = `query Categories { categories { id name } }`;
    this.gql.request(q).subscribe({
      next: (res) => this.categories.set(res.categories ?? []),
      error: () => this.categories.set([])
    });
  }
  linePcs() {
    const raw = this.lineForm.getRawValue();
    const size = Number(raw.unitSize ?? 0);
    const qty = Number(raw.measureQuantity ?? 0);
    return size > 0 ? Math.max(0, qty) * size : 0;
  }
  costPerPiece() {
    const raw = this.lineForm.getRawValue();
    const size = Number(raw.unitSize ?? 0);
    const price = Number(raw.measurePrice ?? 0);
    return size > 0 ? price / size : 0;
  }
  lineTotal() {
    const raw = this.lineForm.getRawValue();
    return Number(raw.measurePrice ?? 0) * Number(raw.measureQuantity ?? 0);
  }
  lineQtyLabel(l) {
    if (l.measureName)
      return `${l.measureQuantity} \xD7 ${l.measureName} (${l.quantityReceived} pcs)`;
    return `${l.quantityReceived} pcs`;
  }
  openDeleteConfirm(id) {
    this.pendingDeleteOrderId.set(String(id));
    this.confirmDeleteOpen.set(true);
  }
  cancelDeleteConfirm() {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteOrderId.set(null);
  }
  confirmDelete() {
    const id = this.pendingDeleteOrderId();
    if (!id)
      return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteOrderId.set(null);
    this.deletePurchase(id);
  }
  toggleDetails(o) {
    const id = String(o.id);
    this.detailsOrderId.set(this.detailsOrderId() === id ? null : id);
  }
  openCreate() {
    this.error.set(null);
    this.editingOrderId.set(null);
    this.headerForm.reset({ supplier: "", invoiceNumber: "" });
    this.resetLineForm();
    this.lines.set([]);
    this.createOpen.set(true);
  }
  openEdit(o) {
    this.error.set(null);
    this.editingOrderId.set(String(o.id));
    this.headerForm.reset({ supplier: o.supplier ?? "", invoiceNumber: o.invoiceNumber ?? "" });
    this.resetLineForm();
    this.lines.set((o.lines ?? []).map((l) => ({
      productId: Number(l.productId),
      newProduct: null,
      displayName: `${l.productName ?? ""}${l.sku ? ` \u2014 ${l.sku}` : ""}`,
      batchNumber: String(l.batchNumber ?? ""),
      expiryDate: String(l.expiryDate ?? ""),
      costPrice: Number(l.costPrice ?? 0),
      quantityReceived: Number(l.quantityReceived ?? 0),
      measureName: null,
      measureQuantity: null
    })));
    this.createOpen.set(true);
  }
  closeCreate() {
    this.createOpen.set(false);
    this.editingOrderId.set(null);
  }
  purchaseTotalValue(o) {
    return (o.lines ?? []).reduce((sum, l) => sum + Number(l.quantityReceived ?? 0) * Number(l.costPrice ?? 0), 0);
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const q = `query PurchaseOrders($branch: String) { purchaseOrders(branch: $branch) { id supplier invoiceNumber receivedAt receivedBy branch lines { id productId sku productName batchId batchNumber expiryDate costPrice quantityReceived } } }`;
    this.gql.request(q, { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.orders.set(res.purchaseOrders);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load purchase orders");
        this.loading.set(false);
      }
    });
  }
  addLine() {
    if (this.lineForm.invalid)
      return;
    const raw = this.lineForm.getRawValue();
    const unitSize = Number(raw.unitSize ?? 0);
    if (unitSize <= 0)
      return;
    const name = (raw.name ?? "").trim();
    if (!name)
      return;
    const sku = raw.sku?.trim() || null;
    const existing = this.productOptions().find((p) => p.name.trim().toLowerCase() === name.toLowerCase() || sku != null && p.sku.trim().toLowerCase() === sku.toLowerCase());
    if (existing) {
      this.error.set(`"${existing.name}" already exists in the system (SKU ${existing.sku}). Add Purchase is for new products only.`);
      return;
    }
    const dup = this.lines().find((l) => l.newProduct != null && (l.newProduct.name.toLowerCase() === name.toLowerCase() || sku != null && l.newProduct.sku?.toLowerCase() === sku.toLowerCase()));
    if (dup) {
      this.error.set(`"${name}" is already added as a line below.`);
      return;
    }
    this.error.set(null);
    const measure = (raw.measure ?? "").trim() || "Piece";
    const measureQty = Number(raw.measureQuantity ?? 0);
    const measurePrice = Number(raw.measurePrice ?? 0);
    const pcs = Math.round(measureQty * unitSize);
    if (pcs <= 0)
      return;
    const costPrice = Math.round(measurePrice / unitSize * 1e4) / 1e4;
    const sellingPrice = raw.sellingPrice != null ? Number(raw.sellingPrice) : null;
    const newProduct = {
      sku,
      barcode: raw.barcode?.trim() || null,
      name,
      brand: raw.brand?.trim() || null,
      category: raw.category?.trim() || null,
      variant: raw.variant?.trim() || null,
      unitOfMeasure: "pcs",
      buyingPrice: costPrice,
      sellingPrice,
      units: [{
        name: measure,
        price: sellingPrice != null ? Math.round(sellingPrice * unitSize * 100) / 100 : null,
        buyingPrice: measurePrice,
        quantity: unitSize
      }]
    };
    this.lines.set([
      ...this.lines(),
      {
        productId: null,
        newProduct,
        displayName: name,
        batchNumber: raw.batchNumber?.trim() || null,
        expiryDate: raw.expiryDate ?? "",
        costPrice,
        quantityReceived: pcs,
        measureName: measure,
        measureQuantity: measureQty
      }
    ]);
    this.resetLineForm();
  }
  resetLineForm() {
    this.lineForm.reset({
      sku: "",
      name: "",
      barcode: "",
      brand: "",
      category: "",
      variant: "",
      sellingPrice: null,
      measure: "Piece",
      unitSize: 1,
      batchNumber: "",
      expiryDate: "",
      measurePrice: 0,
      measureQuantity: 1
    });
  }
  removeLine(index) {
    this.lines.set(this.lines().filter((_, i) => i !== index));
  }
  receive() {
    this.savePurchase();
  }
  savePurchase() {
    if (!this.lines().length) {
      this.error.set("Add at least one line");
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const header = this.headerForm.getRawValue();
    const lineInputs = this.lines().map(({ productId, newProduct, batchNumber, expiryDate, costPrice, quantityReceived }) => ({ productId, newProduct, batchNumber, expiryDate, costPrice, quantityReceived }));
    const editingId = this.editingOrderId();
    if (editingId) {
      const mutation2 = `mutation UpdatePurchase($input: UpdatePurchaseInput!) {
        updatePurchase(input: $input) {
          id supplier invoiceNumber receivedAt receivedBy
          lines { id productId sku productName batchId batchNumber expiryDate costPrice quantityReceived }
        }
      }`;
      this.gql.request(mutation2, {
        input: {
          id: editingId,
          supplier: header.supplier || null,
          invoiceNumber: header.invoiceNumber || null,
          branch: this.branchCtx.writeBranch(),
          lines: lineInputs
        }
      }).subscribe({
        next: () => {
          this.headerForm.reset({ supplier: "", invoiceNumber: "" });
          this.lines.set([]);
          this.createOpen.set(false);
          this.editingOrderId.set(null);
          this.load();
        },
        error: (e) => {
          this.error.set(e instanceof Error ? e.message : "Failed to update purchase");
          this.loading.set(false);
        }
      });
      return;
    }
    const mutation = `mutation Receive($input: ReceivePurchaseInput!) {
      receivePurchase(input: $input) {
        id supplier invoiceNumber receivedAt receivedBy
        lines { id productId sku productName batchId batchNumber expiryDate costPrice quantityReceived }
      }
    }`;
    this.gql.request(mutation, {
      input: {
        supplier: header.supplier || null,
        invoiceNumber: header.invoiceNumber || null,
        branch: this.branchCtx.writeBranch(),
        lines: lineInputs
      }
    }).subscribe({
      next: () => {
        this.headerForm.reset({ supplier: "", invoiceNumber: "" });
        this.lines.set([]);
        this.createOpen.set(false);
        this.editingOrderId.set(null);
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to receive purchase");
        this.loading.set(false);
      }
    });
  }
  deletePurchase(id) {
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation DeletePurchase($input: DeletePurchaseInput!) { deletePurchase(input: $input) }`;
    this.gql.request(mutation, { input: { id } }).subscribe({
      next: () => {
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to delete purchase");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function PurchasingPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchasingPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchasingPage, selectors: [["cis-purchasing-page"]], decls: 88, vars: 77, consts: [[1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], ["maxWidthClass", "max-w-2xl", 3, "close", "open", "title"], [1, "mt-4", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [3, "form", "fields"], [1, "mt-4", "rounded-xl", "bg-slate-50", "dark:bg-slate-700/50", "p-3", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "mt-3", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [1, "text-xs", "text-slate-600", "dark:text-slate-400"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white"], ["class", "mt-4", 4, "ngIf"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-4", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-1"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngIf"], ["message", "Are you sure you want to delete this purchase? This action cannot be undone.", "confirmButtonClass", "bg-[#B81104] hover:bg-[#7f0c03]", 3, "cancel", "confirm", "open", "title", "confirmText", "cancelText"], [3, "received", "addPurchase"], [1, "mt-4"], [1, "mt-2", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "px-3", "py-2"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], ["class", "ml-1 inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:ring-emerald-700", 4, "ngIf"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right"], ["type", "button", 1, "text-xs", "font-semibold", "text-[#B81104]", "dark:text-red-400", 3, "click"], [1, "ml-1", "inline-flex", "items-center", "rounded-full", "bg-emerald-50", "px-1.5", "py-0.5", "text-[10px]", "font-semibold", "text-emerald-700", "ring-1", "ring-inset", "ring-emerald-200", "dark:bg-emerald-900/30", "dark:text-emerald-400", "dark:ring-emerald-700"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "px-3", "py-2", "text-xs", "text-slate-600", "dark:text-slate-400"], ["type", "button", 1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "cis-row-action", "type", "button", 3, "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", "type", "button", 3, "click", 4, "ngIf"], ["class", "border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "border-t", "border-slate-100", "dark:border-slate-700", "bg-slate-50/50", "dark:bg-slate-700/50"], ["colspan", "6", 1, "px-3", "py-3"], [1, "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "inline-flex", "items-center", "rounded-full", "bg-pink-50", "dark:bg-pink-900/30", "px-2.5", "py-1", "text-[11px]", "font-semibold", "text-pink-700", "dark:text-indigo-400", "ring-1", "ring-inset", "ring-pink-200", "dark:ring-pink-700"], [1, "mt-2", "overflow-auto", "rounded-xl", "bg-white", "dark:bg-slate-800", "ring-1", "ring-indigo-100", "dark:ring-pink-700", "border", "border-indigo-100", "dark:border-indigo-700"], [1, "w-full", "border-collapse", "text-xs"], [1, "bg-pink-50", "dark:bg-pink-900/30"], [1, "px-3", "py-2", "text-left", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-indigo-100 dark:border-indigo-700", 4, "ngFor", "ngForOf"], [1, "border-t", "border-indigo-100", "dark:border-indigo-700"], ["colspan", "6", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"]], template: function PurchasingPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Purchases & Stock In");
      \u0275\u0275elementEnd()();
      \u0275\u0275domTemplate(3, PurchasingPage_Defer_3_Template, 1, 0);
      \u0275\u0275defer(4, 3, PurchasingPage_Defer_4_DepsFn);
      \u0275\u0275deferOnImmediate();
      \u0275\u0275elementStart(6, "cis-modal", 2);
      \u0275\u0275listener("close", function PurchasingPage_Template_cis_modal_close_6_listener() {
        return ctx.closeCreate();
      });
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function PurchasingPage_Template_form_ngSubmit_7_listener() {
        return ctx.receive();
      });
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275element(9, "cis-form-fields", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "h4", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 8);
      \u0275\u0275text(15, " Enter details of a product that is not yet in the system. It will be saved to the product table and its stock added to inventory when this purchase is received. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "form", 9);
      \u0275\u0275listener("ngSubmit", function PurchasingPage_Template_form_ngSubmit_16_listener() {
        return ctx.addLine();
      });
      \u0275\u0275elementStart(17, "div", 4);
      \u0275\u0275element(18, "cis-form-fields", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 4);
      \u0275\u0275element(20, "cis-form-fields", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 4);
      \u0275\u0275element(22, "cis-form-fields", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 4);
      \u0275\u0275element(24, "cis-form-fields", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 4);
      \u0275\u0275element(26, "cis-form-fields", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 4);
      \u0275\u0275element(28, "cis-form-fields", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 4);
      \u0275\u0275element(30, "cis-form-fields", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 10);
      \u0275\u0275text(32);
      \u0275\u0275elementStart(33, "strong");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " \xB7 cost/pc ");
      \u0275\u0275elementStart(36, "strong");
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " \xB7 line total ");
      \u0275\u0275elementStart(40, "strong");
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "button", 11);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(46, PurchasingPage_div_46_Template, 26, 19, "div", 12)(47, PurchasingPage_div_47_Template, 2, 1, "div", 13);
      \u0275\u0275elementStart(48, "div", 14)(49, "button", 15);
      \u0275\u0275listener("click", function PurchasingPage_Template_button_click_49_listener() {
        return ctx.closeCreate();
      });
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 16);
      \u0275\u0275listener("click", function PurchasingPage_Template_button_click_52_listener() {
        return ctx.receive();
      });
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 17)(56, "section", 18)(57, "h3", 19);
      \u0275\u0275text(58, "Purchase Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "cis-pager", 20);
      \u0275\u0275twoWayListener("pageSizeChange", function PurchasingPage_Template_cis_pager_pageSizeChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function PurchasingPage_Template_cis_pager_pageIndexChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 21)(61, "table", 22)(62, "thead", 23)(63, "tr")(64, "th", 24);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 24);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 24);
      \u0275\u0275text(71, "Received At");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 25);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 25);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 25);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "tbody");
      \u0275\u0275template(82, PurchasingPage_ng_container_82_Template, 23, 11, "ng-container", 26)(83, PurchasingPage_tr_83_Template, 3, 0, "tr", 27);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(84, "cis-confirm-dialog", 28);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275listener("cancel", function PurchasingPage_Template_cis_confirm_dialog_cancel_84_listener() {
        return ctx.cancelDeleteConfirm();
      })("confirm", function PurchasingPage_Template_cis_confirm_dialog_confirm_84_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("open", ctx.createOpen())("title", ctx.editingOrderId() ? "Edit Purchase" : "Receive Purchase");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.headerForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("form", ctx.headerForm)("fields", ctx.headerFields);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 49, "common.addLine"), " \u2014 New product");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.lineForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("form", ctx.lineForm)("fields", ctx.lineFieldsA);
      \u0275\u0275advance(2);
      \u0275\u0275property("form", ctx.lineForm)("fields", ctx.lineFieldsB);
      \u0275\u0275advance(2);
      \u0275\u0275property("form", ctx.lineForm)("fields", ctx.lineFieldsC);
      \u0275\u0275advance(2);
      \u0275\u0275property("form", ctx.lineForm)("fields", ctx.lineFieldsD);
      \u0275\u0275advance(2);
      \u0275\u0275property("form", ctx.lineForm)("fields", ctx.lineFieldsE);
      \u0275\u0275advance(2);
      \u0275\u0275property("form", ctx.lineForm)("fields", ctx.lineFieldsF);
      \u0275\u0275advance(2);
      \u0275\u0275property("form", ctx.lineForm)("fields", ctx.lineFieldsG);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.lineForm.controls.unitSize.value || 0, " pcs per ", ctx.lineForm.controls.measure.value || "measure", " \u2192 ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.linePcs(), " pcs");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 51, ctx.costPerPiece()));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 53, ctx.lineTotal()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 55, "common.addLine"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.lines().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 57, "common.close"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 59, "common.save"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("total", ctx.orders().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 61, "common.supplier"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 63, "common.invoiceNumber"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 65, "common.lines"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 67, "common.total"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 69, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedOrders());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.orders().length);
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275interpolate1("", \u0275\u0275pipeBind1(85, 71, "common.delete"), " purchase?"))("confirmText", \u0275\u0275interpolate(\u0275\u0275pipeBind1(86, 73, "common.delete")))("cancelText", \u0275\u0275interpolate(\u0275\u0275pipeBind1(87, 75, "common.close")))("open", ctx.confirmDeleteOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, ConfirmDialogComponent, ModalComponent, RowActionsMenuComponent, PagerComponent, CisFormFieldsComponent, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(PurchasingPage, () => [import("./chunk-SGFJ6FQD.js").then((m) => m.RepurchaseComponent)], (RepurchaseComponent) => {
    setClassMetadata(PurchasingPage, [{
      type: Component,
      args: [{ selector: "cis-purchasing-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, ConfirmDialogComponent, ModalComponent, MoneyPipe, TranslatePipe, RepurchaseComponent, RowActionsMenuComponent, PagerComponent, CIS_FORM_IMPORTS], template: `<div class="flex items-center justify-between">\r
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Purchases & Stock In</h2>\r
</div>\r
\r
@defer (on immediate) {\r
  <cis-repurchase (received)="load()" (addPurchase)="openCreate()" />\r
}\r
\r
<cis-modal\r
  [open]="createOpen()"\r
  [title]="editingOrderId() ? ('Edit Purchase') : ('Receive Purchase')"\r
  maxWidthClass="max-w-2xl"\r
  (close)="closeCreate()"\r
>\r
  <form class="mt-4 grid gap-3" [formGroup]="headerForm" (ngSubmit)="receive()">\r
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
      <cis-form-fields [form]="headerForm" [fields]="headerFields" />\r
    </div>\r
  </form>\r
\r
  <div class="mt-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3 ring-1 ring-slate-100 dark:ring-slate-600">\r
    <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ 'common.addLine' | translate }} \u2014 New product</h4>\r
    <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">\r
      Enter details of a product that is not yet in the system. It will be saved to the product table and its stock added to inventory when this purchase is received.\r
    </p>\r
\r
    <form class="mt-3 grid gap-3" [formGroup]="lineForm" (ngSubmit)="addLine()">\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <cis-form-fields [form]="lineForm" [fields]="lineFieldsA" />\r
      </div>\r
\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <cis-form-fields [form]="lineForm" [fields]="lineFieldsB" />\r
      </div>\r
\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <cis-form-fields [form]="lineForm" [fields]="lineFieldsC" />\r
      </div>\r
\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <cis-form-fields [form]="lineForm" [fields]="lineFieldsD" />\r
      </div>\r
\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <cis-form-fields [form]="lineForm" [fields]="lineFieldsE" />\r
      </div>\r
\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <cis-form-fields [form]="lineForm" [fields]="lineFieldsF" />\r
      </div>\r
\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <cis-form-fields [form]="lineForm" [fields]="lineFieldsG" />\r
      </div>\r
\r
      <p class="text-xs text-slate-600 dark:text-slate-400">\r
        {{ lineForm.controls.unitSize.value || 0 }} pcs per {{ lineForm.controls.measure.value || 'measure' }} \u2192\r
        <strong>{{ linePcs() }} pcs</strong> \xB7\r
        cost/pc <strong>{{ costPerPiece() | money }}</strong> \xB7\r
        line total <strong>{{ lineTotal() | money }}</strong>\r
      </p>\r
\r
      <button class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="submit">\r
        {{ 'common.addLine' | translate }}\r
      </button>\r
    </form>\r
  </div>\r
\r
  <div class="mt-4" *ngIf="lines().length">\r
    <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ 'common.lines' | translate }}</h4>\r
    <div class="mt-2 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-slate-50 dark:bg-slate-700">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.productId' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.batch' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.expiry' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.cost' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>\r
            <th class="px-3 py-2"></th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let l of lines(); let idx = index" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">\r
              {{ l.displayName }}\r
              <span *ngIf="l.newProduct" class="ml-1 inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:ring-emerald-700">NEW</span>\r
            </td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.batchNumber }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.expiryDate }}</td>\r
            <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ l.costPrice | money}}</td>\r
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ lineQtyLabel(l) }}</td>\r
            <td class="px-3 py-2 text-right">\r
              <button class="text-xs font-semibold text-[#B81104] dark:text-red-400" type="button" (click)="removeLine(idx)">{{ 'common.remove' | translate }}</button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
  <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
  <div class="mt-4 flex items-center justify-end gap-2">\r
    <button\r
      type="button"\r
      class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"\r
      (click)="closeCreate()"\r
    >\r
      {{ 'common.close' | translate }}\r
    </button>\r
    <button\r
      type="button"\r
      class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
      (click)="receive()"\r
      [disabled]="loading()"\r
    >\r
      {{ 'common.save' | translate }}\r
    </button>\r
  </div>\r
</cis-modal>\r
\r
<div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-1">\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">Purchase Orders</h3>\r
\r
    <cis-pager class="mt-3 block" [total]="orders().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />\r
\r
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-slate-50 dark:bg-slate-700">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.supplier' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.invoiceNumber' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Received At</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.lines' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.total' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <ng-container *ngFor="let o of displayedOrders()">\r
            <tr class="border-t border-slate-100 dark:border-slate-700">\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ o.supplier || '-' }}</td>\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ o.invoiceNumber || '-' }}</td>\r
              <td class="px-3 py-2 text-xs text-slate-600 dark:text-slate-400">{{ o.receivedAt }}</td>\r
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ o.lines.length }}</td>\r
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ purchaseTotalValue(o) | money}}</td>\r
              <td class="px-3 py-2 text-right">\r
                <cis-row-actions>\r
                  <button\r
                    class="cis-row-action"\r
                    type="button"\r
                    (click)="toggleDetails(o)"\r
                  >\r
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>\r
                    {{ detailsOrderId() === o.id ? 'Hide details' : 'Details' }}\r
                  </button>\r
\r
                  <button\r
                    *ngIf="perm.canEdit('PURCHASING')"\r
                    class="cis-row-action"\r
                    type="button"\r
                    (click)="openEdit(o)"\r
                  >\r
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>\r
                    {{ 'common.edit' | translate }}\r
                  </button>\r
\r
                  <button\r
                    *ngIf="perm.canDelete('PURCHASING')"\r
                    class="cis-row-action cis-row-action-danger"\r
                    type="button"\r
                    (click)="openDeleteConfirm(o.id)"\r
                  >\r
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>\r
                    {{ 'common.delete' | translate }}\r
                  </button>\r
                </cis-row-actions>\r
              </td>\r
            </tr>\r
\r
            <tr *ngIf="detailsOrderId() === o.id" class="border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50">\r
              <td class="px-3 py-3" colspan="6">\r
                <div class="text-xs font-semibold text-slate-700 dark:text-slate-300">\r
                  <span\r
                    class="inline-flex items-center rounded-full bg-pink-50 dark:bg-pink-900/30 px-2.5 py-1 text-[11px] font-semibold text-pink-700 dark:text-indigo-400 ring-1 ring-inset ring-pink-200 dark:ring-pink-700"\r
                    >Purchase details</span\r
                  >\r
                </div>\r
                <div class="mt-2 overflow-auto rounded-xl bg-white dark:bg-slate-800 ring-1 ring-indigo-100 dark:ring-pink-700 border border-indigo-100 dark:border-indigo-700">\r
                  <table class="w-full border-collapse text-xs">\r
                    <thead class="bg-pink-50 dark:bg-pink-900/30">\r
                      <tr>\r
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>\r
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.batch' | translate }}</th>\r
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.expiry' | translate }}</th>\r
                        <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.cost' | translate }}</th>\r
                        <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      <tr *ngFor="let l of o.lines" class="border-t border-indigo-100 dark:border-indigo-700">\r
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.productName }}</td>\r
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.batchNumber }}</td>\r
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.expiryDate }}</td>\r
                        <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ l.costPrice | money}}</td>\r
                        <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ l.quantityReceived }}</td>\r
                      </tr>\r
                    </tbody>\r
                  </table>\r
                </div>\r
              </td>\r
            </tr>\r
          </ng-container>\r
\r
          <tr *ngIf="!orders().length" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="6">No purchase orders yet</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </section>\r
</div>\r
\r
<cis-confirm-dialog\r
  [open]="confirmDeleteOpen()"\r
  title="{{ 'common.delete' | translate }} purchase?"\r
  message="Are you sure you want to delete this purchase? This action cannot be undone."\r
  confirmText="{{ 'common.delete' | translate }}"\r
  cancelText="{{ 'common.close' | translate }}"\r
  confirmButtonClass="bg-[#B81104] hover:bg-[#7f0c03]"\r
  (cancel)="cancelDeleteConfirm()"\r
  (confirm)="confirmDelete()"\r
></cis-confirm-dialog>\r
` }]
    }], () => [{ type: GraphqlService }], null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchasingPage, { className: "PurchasingPage", filePath: "app/features/purchasing/purchasing.page.ts", lineNumber: 91 });
})();
export {
  PurchasingPage
};
//# sourceMappingURL=chunk-7JOZF5VI.js.map
