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
  NgSelectOption,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TD7F3R7N.js";
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefer,
  ɵɵdeferOnImmediate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
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
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4
} from "./chunk-F3YP4G7X.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/inventory/inventory.page.ts
var InventoryPage_Defer_4_DepsFn = () => [import("./chunk-AVA2UQJF.js").then((m) => m.PendingRepurchasesComponent)];
function InventoryPage_Defer_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cis-pending-repurchases", 34);
    \u0275\u0275listener("received", function InventoryPage_Defer_3_Template_cis_pending_repurchases_received_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("hideWhenEmpty", true);
  }
}
function InventoryPage_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function InventoryPage_tr_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36)(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 38)(12, "span", 39);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 40)(15, "span", 41)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td", 42)(19, "cis-row-actions")(20, "button", 43);
    \u0275\u0275listener("click", function InventoryPage_tr_100_Template_button_click_20_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdjust(i_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 44);
    \u0275\u0275element(22, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Adjust ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-amber-50", ctx_r1.isLowStock(i_r4))("dark:bg-amber-900/20", ctx_r1.isLowStock(i_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4.expiryDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4.location);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.statusClasses(i_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabel(i_r4), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", i_r4.qtyOnHand, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function InventoryPage_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 49);
    \u0275\u0275listener("click", function InventoryPage_div_101_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissToast());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-[#FFFACD]", ctx_r1.toastVariant() === "success")("text-emerald-900", ctx_r1.toastVariant() === "success")("ring-pink-500/25", ctx_r1.toastVariant() === "success")("bg-[#B81104]/10", ctx_r1.toastVariant() === "error")("text-red-900", ctx_r1.toastVariant() === "error")("ring-[#B81104]/25", ctx_r1.toastVariant() === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.toastMessage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 14, "common.close"));
  }
}
function InventoryPage_div_102_p_11_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2192 New: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r7.qtyOnHand + ctx_r1.adjustForm.controls.delta.value);
  }
}
function InventoryPage_div_102_p_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2014 this adds stock for this batch at ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.adjustForm.controls.location.value || "MAIN");
  }
}
function InventoryPage_div_102_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, " Current: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275template(5, InventoryPage_div_102_p_11_span_5_Template, 4, 1, "span", 62)(6, InventoryPage_div_102_p_11_span_6_Template, 4, 1, "span", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r7.qtyOnHand);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" at ", row_r7.location, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.adjustForm.controls.location.value === row_r7.location && ctx_r1.adjustForm.controls.delta.value !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.adjustForm.controls.location.value !== row_r7.location);
  }
}
function InventoryPage_div_102_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.adjustError());
  }
}
function InventoryPage_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275listener("click", function InventoryPage_div_102_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelAdjust());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 53)(4, "div", 4);
    \u0275\u0275text(5, "Adjust Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 55)(9, "div", 56);
    \u0275\u0275element(10, "cis-form-fields", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InventoryPage_div_102_p_11_Template, 7, 4, "p", 57);
    \u0275\u0275element(12, "cis-form-fields", 17);
    \u0275\u0275template(13, InventoryPage_div_102_p_13_Template, 2, 1, "p", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 59)(15, "button", 60);
    \u0275\u0275listener("click", function InventoryPage_div_102_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelAdjust());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 61);
    \u0275\u0275listener("click", function InventoryPage_div_102_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmAdjust());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate4(" ", (tmp_1_0 = ctx_r1.pendingAdjust()) == null ? null : tmp_1_0.sku, " - ", (tmp_1_0 = ctx_r1.pendingAdjust()) == null ? null : tmp_1_0.productName, " (Batch ", (tmp_1_0 = ctx_r1.pendingAdjust()) == null ? null : tmp_1_0.batchNumber, ", ", (tmp_1_0 = ctx_r1.pendingAdjust()) == null ? null : tmp_1_0.location, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.adjustForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("form", ctx_r1.adjustForm)("fields", ctx_r1.adjustTopFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pendingAdjust());
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.adjustForm)("fields", ctx_r1.adjustBottomFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.adjustError());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 17, "common.save"), " ");
  }
}
var InventoryPage = class _InventoryPage {
  gql;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  items = signal([], ...ngDevMode ? [{ debugName: "items" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedItems = computed(() => {
    const all = this.items();
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return all.slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedItems" }] : []);
  totalPages = computed(() => {
    return Math.max(1, Math.ceil(this.items().length / this.pageSize()));
  }, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  adjustDialogOpen = signal(false, ...ngDevMode ? [{ debugName: "adjustDialogOpen" }] : []);
  pendingAdjust = signal(null, ...ngDevMode ? [{ debugName: "pendingAdjust" }] : []);
  toastMessage = signal(null, ...ngDevMode ? [{ debugName: "toastMessage" }] : []);
  toastVariant = signal("success", ...ngDevMode ? [{ debugName: "toastVariant" }] : []);
  lowStockKeys = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "lowStockKeys" }] : []);
  analyticsTotalUnits = computed(() => this.items().reduce((sum, i) => sum + Number(i.qtyOnHand ?? 0), 0), ...ngDevMode ? [{ debugName: "analyticsTotalUnits" }] : []);
  analyticsProducts = computed(() => new Set(this.items().map((i) => i.productId)).size, ...ngDevMode ? [{ debugName: "analyticsProducts" }] : []);
  analyticsBatches = computed(() => new Set(this.items().map((i) => i.batchId)).size, ...ngDevMode ? [{ debugName: "analyticsBatches" }] : []);
  analyticsLowStock = computed(() => this.lowStockKeys().size, ...ngDevMode ? [{ debugName: "analyticsLowStock" }] : []);
  fb = inject(FormBuilder);
  branchCtx = inject(BranchContext);
  filterForm = this.fb.group({
    query: [""],
    // includeZero: [false],
    includeZero: [true],
    lowStockThreshold: [10]
  });
  filterFields = [
    { key: "query", label: "common.search", type: "search", placeholder: "common.searchSkuNameBatch" },
    { key: "lowStockThreshold", label: "common.lowStockThreshold", type: "number", inputClass: "w-32" },
    { key: "includeZero", label: "inventory.includeZero", type: "checkbox" }
  ];
  adjustForm = this.fb.group({
    delta: [null, [Validators.required]],
    location: ["", [Validators.required]],
    note: [""]
  });
  adjustTopFields = [
    { key: "delta", label: "inventory.qtyChange", type: "number", required: true, step: 1, placeholder: "e.g. 10 or -3" },
    { key: "location", label: "common.location", required: true, maxlength: 120 }
  ];
  adjustBottomFields = [
    { key: "note", label: "inventory.noteOptional" }
  ];
  adjustError = signal(null, ...ngDevMode ? [{ debugName: "adjustError" }] : []);
  constructor(gql) {
    this.gql = gql;
    this.load();
  }
  openAdjust(i) {
    this.pendingAdjust.set(i);
    this.adjustError.set(null);
    this.adjustForm.reset({ delta: null, location: i.location, note: "" });
    this.adjustDialogOpen.set(true);
  }
  cancelAdjust() {
    this.adjustDialogOpen.set(false);
    this.pendingAdjust.set(null);
  }
  confirmAdjust() {
    const row = this.pendingAdjust();
    if (!row)
      return;
    if (this.adjustForm.invalid) {
      this.adjustForm.markAllAsTouched();
      this.adjustError.set("Enter a quantity change and a location.");
      return;
    }
    const raw = this.adjustForm.getRawValue();
    const delta = Number(raw.delta ?? 0);
    if (!delta || !Number.isSafeInteger(delta)) {
      this.adjustError.set("Enter a whole-number change (use negative to subtract).");
      return;
    }
    const location = (raw.location ?? "").trim();
    if (location === row.location && row.qtyOnHand + delta < 0) {
      this.adjustError.set(`Only ${row.qtyOnHand} in stock here \u2014 the result cannot be negative.`);
      return;
    }
    this.adjustError.set(null);
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation AdjustInventory($input: AdjustInventoryInput!) {
      adjustInventory(input: $input) {
        id productId sku productName unitOfMeasure batchId batchNumber expiryDate location qtyOnHand
      }
    }`;
    this.gql.request(mutation, {
      input: {
        batchId: row.batchId,
        location,
        delta,
        note: raw.note || null
      }
    }).subscribe({
      next: () => {
        this.adjustDialogOpen.set(false);
        this.pendingAdjust.set(null);
        this.showToast("Inventory adjusted successfully", "success");
        this.load();
      },
      error: (e) => {
        this.adjustError.set(e instanceof Error ? e.message : "Failed to adjust inventory");
        this.loading.set(false);
      }
    });
  }
  dismissToast() {
    this.toastMessage.set(null);
  }
  showToast(message, variant) {
    this.toastVariant.set(variant);
    this.toastMessage.set(message);
    window.setTimeout(() => {
      if (this.toastMessage() === message) {
        this.toastMessage.set(null);
      }
    }, 2500);
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const { query, includeZero, lowStockThreshold } = this.filterForm.getRawValue();
    const q = `query Inventory($filter: InventoryFilter) {
      inventory(filter: $filter) {
        id 
        productId 
        sku 
        productName 
        unitOfMeasure
        batchId 
        batchNumber 
        expiryDate 
        location 
        qtyOnHand
      }
    }`;
    this.gql.request(q, {
      filter: {
        query: query || null,
        includeZero: !!includeZero,
        branch: this.branchCtx.effective()
      }
    }).subscribe({
      next: (res) => {
        this.items.set(res.inventory);
        this.pageIndex.set(0);
        const threshold = Number(lowStockThreshold ?? 0);
        if (Number.isFinite(threshold) && threshold > 0) {
          this.loadLowStockAlerts(threshold);
        } else {
          this.lowStockKeys.set(/* @__PURE__ */ new Set());
        }
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load inventory");
        this.loading.set(false);
      }
    });
  }
  setPageSize(size) {
    const next = Number(size);
    if (!Number.isFinite(next) || next <= 0)
      return;
    this.pageSize.set(next);
    this.pageIndex.set(0);
  }
  prevPage() {
    const idx = this.pageIndex();
    if (idx > 0)
      this.pageIndex.set(idx - 1);
  }
  nextPage() {
    const idx = this.pageIndex();
    if (idx < this.totalPages() - 1)
      this.pageIndex.set(idx + 1);
  }
  isLowStock(i) {
    return this.lowStockKeys().has(this.lowStockKey(i.batchId, i.location));
  }
  loadLowStockAlerts(threshold) {
    const q = `query LowStockBatchAlerts($threshold: Int!, $branch: String) {
      lowStockBatchAlerts(threshold: $threshold, branch: $branch) { batchId location qtyOnHand threshold }
    }`;
    this.gql.request(q, { threshold, branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        const set = /* @__PURE__ */ new Set();
        for (const a of res.lowStockBatchAlerts ?? []) {
          set.add(this.lowStockKey(a.batchId, a.location));
        }
        this.lowStockKeys.set(set);
      },
      error: () => {
        this.lowStockKeys.set(/* @__PURE__ */ new Set());
      }
    });
  }
  lowStockKey(batchId, location) {
    return `${batchId}|${(location ?? "").toUpperCase()}`;
  }
  statusLabel(i) {
    if (i.qtyOnHand <= 0)
      return "Out of stock";
    const expiry = this.parseDateOnly(i.expiryDate);
    const today = this.startOfDay(/* @__PURE__ */ new Date());
    if (expiry.getTime() < today.getTime())
      return "Expired";
    const nearExpiryLimit = this.addMonths(today, 3);
    if (expiry.getTime() <= nearExpiryLimit.getTime())
      return "Near expiry";
    return "Sell allowed";
  }
  statusClasses(i) {
    const s = this.statusLabel(i);
    if (s === "Expired")
      return "bg-[#B81104]/10 text-red-800 ring-[#B81104]/25";
    if (s === "Near expiry")
      return "bg-amber-50 text-amber-900 ring-amber-200";
    if (s === "Out of stock")
      return "bg-slate-100 text-slate-700 ring-slate-200";
    return "bg-[#FFFACD] text-emerald-900 ring-pink-500/25";
  }
  startOfDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
  addMonths(d, months) {
    const copy = new Date(d.getTime());
    copy.setMonth(copy.getMonth() + months);
    return this.startOfDay(copy);
  }
  parseDateOnly(value) {
    const trimmed = (value ?? "").trim();
    if (!trimmed)
      return this.startOfDay(/* @__PURE__ */ new Date(0));
    const d = /* @__PURE__ */ new Date(`${trimmed}T00:00:00`);
    if (!Number.isFinite(d.getTime()))
      return this.startOfDay(/* @__PURE__ */ new Date(0));
    return this.startOfDay(d);
  }
  static \u0275fac = function InventoryPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryPage, selectors: [["cis-inventory-page"]], decls: 103, vars: 63, consts: [[1, "flex", "items-center"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-4", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], ["routerLink", "/inventory/analytics", 1, "inline-flex", "items-center", "gap-2", "rounded-xl", "bg-[#7367d8]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-[#006666]"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-4", "w-4"], ["stroke-linecap", "round", "d", "M4 20V10m6 10V4m6 16v-7m4 7H2"], [1, "mt-3", "grid", "grid-cols-2", "gap-3", "sm:grid-cols-4"], [1, "rounded-xl", "bg-slate-50", "p-3", "ring-1", "ring-slate-100", "dark:bg-slate-700/50", "dark:ring-slate-600"], [1, "text-xs", "font-semibold", "text-slate-500", "dark:text-slate-400"], [1, "mt-1", "text-xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], [1, "rounded-xl", "bg-amber-50", "p-3", "ring-1", "ring-amber-100", "dark:bg-amber-900/20", "dark:ring-amber-800"], [1, "text-xs", "font-semibold", "text-amber-800", "dark:text-amber-300"], [1, "mt-1", "text-xl", "font-extrabold", "text-amber-900", "dark:text-amber-200"], [1, "grid", "gap-3", "sm:grid-cols-[1fr_auto_auto_auto_auto]", "sm:items-end", 3, "ngSubmit", "formGroup"], [3, "form", "fields"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-3", "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], [1, "flex", "items-center", "gap-2"], [1, "ml-2", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "text-slate-900", "dark:text-slate-100", 3, "change", "value"], [3, "value"], [1, "rounded-lg", "bg-slate-100", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-200", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 3, "bg-amber-50", "dark:bg-amber-900/20", 4, "ngFor", "ngForOf"], ["class", "fixed right-4 top-4 z-50", "role", "status", "aria-live", "polite", 4, "ngIf"], ["class", "cis-modal-overlay fixed inset-0 z-40", 4, "ngIf"], ["kind", "all", "title", "Pending receiving", "subtitle", "Products waiting for stock. Receive to add them to their branch and make them sellable.", "emptyText", "No pending orders waiting to be received.", 1, "mt-4", 3, "received", "hideWhenEmpty"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2"], [1, "inline-flex", "items-center", "rounded-full", "px-2", "py-1", "text-xs", "font-semibold", "ring-1"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "inline-flex", "items-center", "gap-2"], [1, "px-3", "py-2", "text-right"], [1, "cis-row-action", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "d", "M4 21v-7M4 10V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6M9 8h6m2 8h6"], ["role", "status", "aria-live", "polite", 1, "fixed", "right-4", "top-4", "z-50"], [1, "flex", "items-start", "gap-3", "rounded-xl", "px-4", "py-3", "text-sm", "font-medium", "shadow-lg", "ring-1"], [1, "flex-1"], [1, "text-xs", "font-semibold", "opacity-80", "hover:opacity-100", 3, "click"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-40"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "mt-2", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "mt-4", "grid", "gap-3", 3, "formGroup"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], ["class", "text-xs text-slate-500 dark:text-slate-400", 4, "ngIf"], ["class", "text-sm text-[#B81104] dark:text-red-400", "role", "alert", 4, "ngIf"], [1, "mt-5", "flex", "justify-end", "gap-2"], [1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [4, "ngIf"], ["role", "alert", 1, "text-sm", "text-[#B81104]", "dark:text-red-400"]], template: function InventoryPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Inventory");
      \u0275\u0275elementEnd()();
      \u0275\u0275domTemplate(3, InventoryPage_Defer_3_Template, 1, 1);
      \u0275\u0275defer(4, 3, InventoryPage_Defer_4_DepsFn);
      \u0275\u0275deferOnImmediate();
      \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "div")(9, "h3", 4);
      \u0275\u0275text(10, "Analytics Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 5);
      \u0275\u0275text(12, "Stock movement, aging and recommendations for your inventory");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "a", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 7);
      \u0275\u0275element(15, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Inventory Analytics ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11);
      \u0275\u0275text(20, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 10)(24, "div", 11);
      \u0275\u0275text(25, "Units On Hand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 12);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 10)(29, "div", 11);
      \u0275\u0275text(30, "Batches");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 12);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 13)(34, "div", 14);
      \u0275\u0275text(35, "Low Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 15);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 2)(39, "form", 16);
      \u0275\u0275listener("ngSubmit", function InventoryPage_Template_form_ngSubmit_39_listener() {
        return ctx.load();
      });
      \u0275\u0275element(40, "cis-form-fields", 17);
      \u0275\u0275elementStart(41, "button", 18);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(44, InventoryPage_div_44_Template, 2, 1, "div", 19);
      \u0275\u0275elementStart(45, "div", 20)(46, "div", 21);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 22)(50, "label", 21);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementStart(53, "select", 23);
      \u0275\u0275listener("change", function InventoryPage_Template_select_change_53_listener($event) {
        return ctx.setPageSize($event.target.value);
      });
      \u0275\u0275elementStart(54, "option", 24);
      \u0275\u0275text(55, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 24);
      \u0275\u0275text(57, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option", 24);
      \u0275\u0275text(59, "50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 24);
      \u0275\u0275text(61, "100");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "button", 25);
      \u0275\u0275listener("click", function InventoryPage_Template_button_click_62_listener() {
        return ctx.prevPage();
      });
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 21);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 25);
      \u0275\u0275listener("click", function InventoryPage_Template_button_click_68_listener() {
        return ctx.nextPage();
      });
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 26)(72, "table", 27)(73, "thead", 28)(74, "tr")(75, "th", 29);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 29);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 29);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 29);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 29);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 29);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th", 30);
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 30);
      \u0275\u0275text(97);
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "tbody");
      \u0275\u0275template(100, InventoryPage_tr_100_Template, 24, 14, "tr", 31);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(101, InventoryPage_div_101_Template, 7, 16, "div", 32)(102, InventoryPage_div_102_Template, 21, 19, "div", 33);
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275textInterpolate(ctx.analyticsProducts());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.analyticsTotalUnits());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.analyticsBatches());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.analyticsLowStock());
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance();
      \u0275\u0275property("form", ctx.filterForm)("fields", ctx.filterFields);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 35, "common.apply"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(48, 37, "common.total"), ": ", ctx.items().length);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 39, "common.show"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.pageSize());
      \u0275\u0275advance();
      \u0275\u0275property("value", 10);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 50);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 100);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.pageIndex() === 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 41, "common.prev"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(67, 43, "common.page"), " ", ctx.pageIndex() + 1, " / ", ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.pageIndex() >= ctx.totalPages() - 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 45, "common.next"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 47, "common.sku"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 49, "common.product"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 51, "common.batch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 53, "common.expiry"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 55, "common.location"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 57, "common.status"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 59, "common.qty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 61, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedItems());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toastMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.adjustDialogOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, FormGroupDirective, RouterLink, RowActionsMenuComponent, CisFormFieldsComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(InventoryPage, () => [import("./chunk-AVA2UQJF.js").then((m) => m.PendingRepurchasesComponent)], (PendingRepurchasesComponent) => {
    setClassMetadata(InventoryPage, [{
      type: Component,
      args: [{ selector: "cis-inventory-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslatePipe, PendingRepurchasesComponent, RowActionsMenuComponent, CIS_FORM_IMPORTS], template: `<div class="flex items-center">
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Inventory</h2>
</div>

@defer (on immediate) {
  <cis-pending-repurchases
    class="mt-4"
    kind="all"
    [hideWhenEmpty]="true"
    title="Pending receiving"
    subtitle="Products waiting for stock. Receive to add them to their branch and make them sellable."
    emptyText="No pending orders waiting to be received."
    (received)="load()"
  ></cis-pending-repurchases>
}

<div class="mt-4 rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
  <div class="flex flex-wrap items-center justify-between gap-3">
    <div>
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">Analytics Overview</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400">Stock movement, aging and recommendations for your inventory</p>
    </div>
    <a
      routerLink="/inventory/analytics"
      class="inline-flex items-center gap-2 rounded-xl bg-[#7367d8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#006666]"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4" aria-hidden="true"><path stroke-linecap="round" d="M4 20V10m6 10V4m6 16v-7m4 7H2" /></svg>
      Inventory Analytics
    </a>
  </div>

  <div class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
    <div class="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100 dark:bg-slate-700/50 dark:ring-slate-600">
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Products</div>
      <div class="mt-1 text-xl font-extrabold text-slate-900 dark:text-slate-100">{{ analyticsProducts() }}</div>
    </div>
    <div class="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100 dark:bg-slate-700/50 dark:ring-slate-600">
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Units On Hand</div>
      <div class="mt-1 text-xl font-extrabold text-slate-900 dark:text-slate-100">{{ analyticsTotalUnits() }}</div>
    </div>
    <div class="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100 dark:bg-slate-700/50 dark:ring-slate-600">
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Batches</div>
      <div class="mt-1 text-xl font-extrabold text-slate-900 dark:text-slate-100">{{ analyticsBatches() }}</div>
    </div>
    <div class="rounded-xl bg-amber-50 p-3 ring-1 ring-amber-100 dark:bg-amber-900/20 dark:ring-amber-800">
      <div class="text-xs font-semibold text-amber-800 dark:text-amber-300">Low Stock</div>
      <div class="mt-1 text-xl font-extrabold text-amber-900 dark:text-amber-200">{{ analyticsLowStock() }}</div>
    </div>
  </div>
</div>

<div class="mt-4 rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
  <form class="grid gap-3 sm:grid-cols-[1fr_auto_auto_auto_auto] sm:items-end" [formGroup]="filterForm" (ngSubmit)="load()">
    <cis-form-fields [form]="filterForm" [fields]="filterFields" />

    <button class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="submit">
      {{ 'common.apply' | translate }}
    </button>
  </form>

  <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>

  <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
    <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.total' | translate }}: {{ items().length }}</div>
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
        class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        (click)="prevPage()"
        [disabled]="pageIndex() === 0"
      >
        {{ 'common.prev' | translate }}
      </button>
      <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.page' | translate }} {{ pageIndex() + 1 }} / {{ totalPages() }}</div>
      <button
        class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        (click)="nextPage()"
        [disabled]="pageIndex() >= totalPages() - 1"
      >
        {{ 'common.next' | translate }}
      </button>
    </div>
  </div>

  <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
    <table class="w-full border-collapse text-sm">
      <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.batch' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.expiry' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.location' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.status' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let i of displayedItems()" class="border-t border-slate-100 dark:border-slate-700" [class.bg-amber-50]="isLowStock(i)" [class.dark:bg-amber-900/20]="isLowStock(i)">
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ i.sku }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ i.productName }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ i.batchNumber }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ i.expiryDate }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ i.location }}</td>
          <td class="px-3 py-2">
            <span class="inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ring-1" [class]="statusClasses(i)">
              {{ statusLabel(i) }}
            </span>
          </td>
          <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">
            <span class="inline-flex items-center gap-2">
              <span>
                {{ i.qtyOnHand }}
                <!-- <span class="text-xs font-medium text-slate-500" *ngIf="i.unitOfMeasure">{{ i.unitOfMeasure }}</span> -->
              </span>
              <!-- <span
                *ngIf="isLowStock(i)"
                class="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-900 ring-1 ring-amber-200"
              >
                Low
              </span> -->
            </span>
          </td>
          <td class="px-3 py-2 text-right">
            <cis-row-actions>
              <button
                class="cis-row-action"
                (click)="openAdjust(i)"
                [disabled]="loading()"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" d="M4 21v-7M4 10V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6M9 8h6m2 8h6" /></svg>
                Adjust
              </button>
            </cis-row-actions>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div
  *ngIf="toastMessage()"
  class="fixed right-4 top-4 z-50"
  role="status"
  aria-live="polite"
>
  <div
    class="flex items-start gap-3 rounded-xl px-4 py-3 text-sm font-medium shadow-lg ring-1"
    [class.bg-[#FFFACD]]="toastVariant() === 'success'"
    [class.text-emerald-900]="toastVariant() === 'success'"
    [class.ring-pink-500/25]="toastVariant() === 'success'"
    [class.bg-[#B81104]/10]="toastVariant() === 'error'"
    [class.text-red-900]="toastVariant() === 'error'"
    [class.ring-[#B81104]/25]="toastVariant() === 'error'"
  >
    <div class="flex-1">{{ toastMessage() }}</div>
    <button class="text-xs font-semibold opacity-80 hover:opacity-100" (click)="dismissToast()">{{ 'common.close' | translate }}</button>
  </div>
</div>

<div *ngIf="adjustDialogOpen()" class="cis-modal-overlay fixed inset-0 z-40">
  <div class="absolute inset-0 bg-slate-900/40" (click)="cancelAdjust()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700">
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">Adjust Inventory</div>
      <div class="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {{ pendingAdjust()?.sku }} - {{ pendingAdjust()?.productName }}
        (Batch {{ pendingAdjust()?.batchNumber }}, {{ pendingAdjust()?.location }})
      </div>

      <div class="mt-4 grid gap-3" [formGroup]="adjustForm">
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <cis-form-fields [form]="adjustForm" [fields]="adjustTopFields" />
        </div>

        <p class="text-xs text-slate-500 dark:text-slate-400" *ngIf="pendingAdjust() as row">
          Current: <strong>{{ row.qtyOnHand }}</strong> at {{ row.location }}
          <span *ngIf="adjustForm.controls.location.value === row.location && adjustForm.controls.delta.value !== null">
            \u2192 New: <strong>{{ row.qtyOnHand + adjustForm.controls.delta.value }}</strong>
          </span>
          <span *ngIf="adjustForm.controls.location.value !== row.location">
            \u2014 this adds stock for this batch at <strong>{{ adjustForm.controls.location.value || 'MAIN' }}</strong>
          </span>
        </p>

        <cis-form-fields [form]="adjustForm" [fields]="adjustBottomFields" />

        <p class="text-sm text-[#B81104] dark:text-red-400" role="alert" *ngIf="adjustError()">{{ adjustError() }}</p>
      </div>

      <div class="mt-5 flex justify-end gap-2">
        <button
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"
          (click)="cancelAdjust()"
          [disabled]="loading()"
        >
          {{ 'common.close' | translate }}
        </button>
        <button
          class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-70"
          (click)="confirmAdjust()"
          [disabled]="loading()"
        >
          {{ 'common.save' | translate }}
        </button>
      </div>
    </div>
  </div>
</div>
` }]
    }], () => [{ type: GraphqlService }], null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryPage, { className: "InventoryPage", filePath: "app/features/inventory/inventory.page.ts", lineNumber: 52 });
})();
export {
  InventoryPage
};
//# sourceMappingURL=chunk-KMHOEUVD.js.map
