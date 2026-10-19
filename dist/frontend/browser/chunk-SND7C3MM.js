import {
  BaseChartDirective
} from "./chunk-FLID2NBG.js";
import {
  PagerComponent
} from "./chunk-QINOI6LA.js";
import {
  MoneyPipe
} from "./chunk-7HLJHSCP.js";
import {
  RouterLink
} from "./chunk-EUKW24HZ.js";
import {
  TranslatePipe
} from "./chunk-V35BCXNA.js";
import {
  BranchContext
} from "./chunk-ZQNAR4DZ.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  GraphqlService,
  NgClass,
  NgForOf,
  NgIf,
  computed,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZFAUJJU2.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/product-dashboard/product-dashboard.page.ts
function ProductDashboardPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "productDashboard.loading"));
  }
}
function ProductDashboardPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ProductDashboardPage_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50)(5, "label", 49);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "select", 51);
    \u0275\u0275listener("change", function ProductDashboardPage_div_98_Template_select_change_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setAlertsPageSize($event.target.value));
    });
    \u0275\u0275elementStart(9, "option", 52);
    \u0275\u0275text(10, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 52);
    \u0275\u0275text(12, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 52);
    \u0275\u0275text(14, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 52);
    \u0275\u0275text(16, "50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 53);
    \u0275\u0275listener("click", function ProductDashboardPage_div_98_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.alertsPrevPage());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 49);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 53);
    \u0275\u0275listener("click", function ProductDashboardPage_div_98_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.alertsNextPage());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 15, "productDashboard.total"), ": ", ctx_r0.alerts().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 17, "productDashboard.show"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.alertsPageSize());
    \u0275\u0275advance();
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.alertsPageIndex() === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "productDashboard.prev"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(22, 21, "productDashboard.page"), " ", ctx_r0.alertsPageIndex() + 1, " / ", ctx_r0.alertsTotalPages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.alertsPageIndex() >= ctx_r0.alertsTotalPages() - 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 23, "productDashboard.next"), " ");
  }
}
function ProductDashboardPage_div_99_tr_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275element(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "productDashboard.outOfStock"), " ");
  }
}
function ProductDashboardPage_div_99_tr_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275element(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "productDashboard.runningLow"), " ");
  }
}
function ProductDashboardPage_div_99_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 60)(1, "td", 61);
    \u0275\u0275template(2, ProductDashboardPage_div_99_tr_16_span_2_Template, 4, 3, "span", 62)(3, ProductDashboardPage_div_99_tr_16_span_3_Template, 4, 3, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", a_r3.status === "out_of_stock");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r3.status === "running_low");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.productName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", a_r3.status === "out_of_stock" ? "text-red-700 dark:text-red-400" : "text-amber-700 dark:text-amber-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r3.qtyOnHand, " ");
  }
}
function ProductDashboardPage_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "table", 55)(2, "thead", 56)(3, "tr")(4, "th", 57);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 57);
    \u0275\u0275text(8, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 57);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 58);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, ProductDashboardPage_div_99_tr_16_Template, 10, 6, "tr", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "productDashboard.status"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "productDashboard.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 8, "productDashboard.qtyOnHand"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.displayedAlerts());
  }
}
function ProductDashboardPage_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "productDashboard.allGood"));
  }
}
function ProductDashboardPage_div_101_tr_26_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", d_r5.daysSinceLastSale, " ", \u0275\u0275pipeBind1(2, 2, "productDashboard.daysAgo"));
  }
}
function ProductDashboardPage_div_101_tr_26_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "productDashboard.neverSold"));
  }
}
function ProductDashboardPage_div_101_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 60)(1, "td", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 77);
    \u0275\u0275template(8, ProductDashboardPage_div_101_tr_26_span_8_Template, 3, 4, "span", 78)(9, ProductDashboardPage_div_101_tr_26_span_9_Template, 3, 3, "span", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.qtyOnHand);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r5.daysSinceLastSale !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r5.daysSinceLastSale === null);
  }
}
function ProductDashboardPage_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 0)(2, "div")(3, "h3", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "cis-pager", 74);
    \u0275\u0275twoWayListener("pageSizeChange", function ProductDashboardPage_div_101_Template_cis_pager_pageSizeChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.deadStockPageSize, $event) || (ctx_r0.deadStockPageSize = $event);
      return \u0275\u0275resetView($event);
    })("pageIndexChange", function ProductDashboardPage_div_101_Template_cis_pager_pageIndexChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.deadStockPageIndex, $event) || (ctx_r0.deadStockPageIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 75)(11, "table", 55)(12, "thead", 56)(13, "tr")(14, "th", 57);
    \u0275\u0275text(15, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 57);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 58);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 58);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, ProductDashboardPage_div_101_tr_26_Template, 10, 5, "tr", 59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "productDashboard.deadStockDetails"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.deadStockItems().length, " ", \u0275\u0275pipeBind1(8, 12, "productDashboard.deadStockDescription"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("total", ctx_r0.deadStockItems().length);
    \u0275\u0275twoWayProperty("pageSize", ctx_r0.deadStockPageSize)("pageIndex", ctx_r0.deadStockPageIndex);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "productDashboard.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, "productDashboard.qtyOnHand"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 18, "productDashboard.daysSinceSale"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.displayedDeadStock());
  }
}
var ProductDashboardPage = class _ProductDashboardPage {
  gql = inject(GraphqlService);
  branchCtx = inject(BranchContext);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  totalProducts = signal(0, ...ngDevMode ? [{ debugName: "totalProducts" }] : []);
  totalStockQty = signal(0, ...ngDevMode ? [{ debugName: "totalStockQty" }] : []);
  lowStockCount = signal(0, ...ngDevMode ? [{ debugName: "lowStockCount" }] : []);
  outOfStockCount = signal(0, ...ngDevMode ? [{ debugName: "outOfStockCount" }] : []);
  inventoryValue = signal(null, ...ngDevMode ? [{ debugName: "inventoryValue" }] : []);
  alerts = signal([], ...ngDevMode ? [{ debugName: "alerts" }] : []);
  alertsPageSize = signal(5, ...ngDevMode ? [{ debugName: "alertsPageSize" }] : []);
  alertsPageIndex = signal(0, ...ngDevMode ? [{ debugName: "alertsPageIndex" }] : []);
  displayedAlerts = computed(() => {
    const all = this.alerts();
    const size = this.alertsPageSize();
    const idx = this.alertsPageIndex();
    return all.slice(idx * size, idx * size + size);
  }, ...ngDevMode ? [{ debugName: "displayedAlerts" }] : []);
  alertsTotalPages = computed(() => {
    const size = this.alertsPageSize();
    const total = this.alerts().length;
    return Math.max(1, Math.ceil(total / size));
  }, ...ngDevMode ? [{ debugName: "alertsTotalPages" }] : []);
  lowStockThreshold = 10;
  // Chart 1: Stock by Category
  categoryLabels = signal([], ...ngDevMode ? [{ debugName: "categoryLabels" }] : []);
  categoryValues = signal([], ...ngDevMode ? [{ debugName: "categoryValues" }] : []);
  categoryChartData = computed(() => ({
    labels: this.categoryLabels(),
    datasets: [
      {
        data: this.categoryValues(),
        backgroundColor: [
          "#6366f1",
          "#ec4899",
          "#f59e0b",
          "#10b981",
          "#3b82f6",
          "#8b5cf6",
          "#ef4444",
          "#8f86e3",
          "#f97316",
          "#64748b"
        ]
      }
    ]
  }), ...ngDevMode ? [{ debugName: "categoryChartData" }] : []);
  categoryChartOptions = {
    responsive: true,
    plugins: { legend: { position: "bottom" } }
  };
  // Chart 2: Most Sold Products
  mostSoldLabels = signal([], ...ngDevMode ? [{ debugName: "mostSoldLabels" }] : []);
  mostSoldValues = signal([], ...ngDevMode ? [{ debugName: "mostSoldValues" }] : []);
  mostSoldChartData = computed(() => ({
    labels: this.mostSoldLabels(),
    datasets: [
      {
        label: "Qty Sold",
        data: this.mostSoldValues(),
        backgroundColor: "rgba(99, 102, 241, 0.75)",
        borderColor: "#6366f1",
        borderWidth: 1
      }
    ]
  }), ...ngDevMode ? [{ debugName: "mostSoldChartData" }] : []);
  mostSoldChartOptions = {
    responsive: true,
    indexAxis: "y",
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true },
      y: { ticks: { autoSkip: false } }
    }
  };
  // Chart 3: Dead Stock
  deadStockItems = signal([], ...ngDevMode ? [{ debugName: "deadStockItems" }] : []);
  deadStockPageSize = signal(10, ...ngDevMode ? [{ debugName: "deadStockPageSize" }] : []);
  deadStockPageIndex = signal(0, ...ngDevMode ? [{ debugName: "deadStockPageIndex" }] : []);
  displayedDeadStock = computed(() => {
    const all = this.deadStockItems();
    const start = this.deadStockPageIndex() * this.deadStockPageSize();
    return all.slice(start, start + this.deadStockPageSize());
  }, ...ngDevMode ? [{ debugName: "displayedDeadStock" }] : []);
  deadStockLabels = signal([], ...ngDevMode ? [{ debugName: "deadStockLabels" }] : []);
  deadStockValues = signal([], ...ngDevMode ? [{ debugName: "deadStockValues" }] : []);
  deadStockChartData = computed(() => ({
    labels: this.deadStockLabels(),
    datasets: [
      {
        label: "Qty on Hand (Not Sold 30+ Days)",
        data: this.deadStockValues(),
        backgroundColor: "rgba(239, 68, 68, 0.75)",
        borderColor: "#ef4444",
        borderWidth: 1
      }
    ]
  }), ...ngDevMode ? [{ debugName: "deadStockChartData" }] : []);
  deadStockChartOptions = {
    responsive: true,
    indexAxis: "y",
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true },
      y: { ticks: { autoSkip: false } }
    }
  };
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const qProducts = `query { products { id sku name category buyingPrice sellingPrice active } }`;
    const qInventory = `query Inv($branch: String) { inventory(filter: { includeZero: true, branch: $branch }) { id productId sku productName batchId batchNumber qtyOnHand } }`;
    const qSales = `query Sales($branch: String) { salesOrders(branch: $branch) { id soldAt lines { productId productName quantity } } }`;
    const qLowStock = `query LowStock($threshold: Int!, $branch: String) { lowStockAlerts(threshold: $threshold, branch: $branch) { productId sku productName qtyOnHand threshold } }`;
    const qValuation = `query Val($branch: String) { inventoryValuation(branch: $branch) { totalStockValue } }`;
    forkJoin({
      products: this.gql.request(qProducts),
      inventory: this.gql.request(qInventory, { branch: this.branchCtx.effective() }),
      sales: this.gql.request(qSales, { branch: this.branchCtx.effective() }),
      lowStock: this.gql.request(qLowStock, {
        threshold: this.lowStockThreshold,
        branch: this.branchCtx.effective()
      }),
      valuation: this.gql.request(qValuation, { branch: this.branchCtx.effective() })
    }).subscribe({
      next: ({ products, inventory, sales, lowStock, valuation }) => {
        this.processData(products, inventory, sales, lowStock, valuation);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load product dashboard");
        this.loading.set(false);
      }
    });
  }
  processData(products, inventory, sales, lowStock, valuation) {
    const activeProducts = products.products.filter((p) => p.active);
    this.totalProducts.set(activeProducts.length);
    const inventoryItems = inventory.inventory;
    const totalQty = inventoryItems.reduce((sum, item) => sum + Number(item.qtyOnHand ?? 0), 0);
    this.totalStockQty.set(totalQty);
    this.inventoryValue.set(valuation.inventoryValuation.totalStockValue);
    const productQtyMap = /* @__PURE__ */ new Map();
    for (const item of inventoryItems) {
      const current = productQtyMap.get(item.productId) ?? 0;
      productQtyMap.set(item.productId, current + Number(item.qtyOnHand ?? 0));
    }
    const outOfStock = [];
    for (const p of activeProducts) {
      const qty = productQtyMap.get(p.id) ?? 0;
      if (qty <= 0) {
        outOfStock.push({
          productId: p.id,
          sku: p.sku,
          productName: p.name,
          qtyOnHand: 0,
          status: "out_of_stock"
        });
      }
    }
    this.outOfStockCount.set(outOfStock.length);
    const lowStockAlerts = lowStock.lowStockAlerts ?? [];
    this.lowStockCount.set(lowStockAlerts.filter((a) => Number(a.qtyOnHand) > 0).length);
    const runningLow = lowStockAlerts.filter((a) => Number(a.qtyOnHand) > 0).map((a) => ({
      productId: a.productId,
      sku: a.sku,
      productName: a.productName,
      qtyOnHand: Number(a.qtyOnHand),
      status: "running_low"
    }));
    this.alerts.set([...outOfStock, ...runningLow]);
    const categoryMap = /* @__PURE__ */ new Map();
    for (const p of activeProducts) {
      const cat = (p.category ?? "Uncategorized").trim() || "Uncategorized";
      const qty = productQtyMap.get(p.id) ?? 0;
      categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + qty);
    }
    const catEntries = Array.from(categoryMap.entries()).sort((a, b) => b[1] - a[1]);
    this.categoryLabels.set(catEntries.map((e) => e[0]));
    this.categoryValues.set(catEntries.map((e) => e[1]));
    const soldMap = /* @__PURE__ */ new Map();
    for (const order of sales.salesOrders) {
      for (const line of order.lines) {
        const existing = soldMap.get(line.productId);
        if (existing) {
          existing.qty += Number(line.quantity ?? 0);
        } else {
          soldMap.set(line.productId, {
            name: line.productName,
            qty: Number(line.quantity ?? 0)
          });
        }
      }
    }
    const topSold = Array.from(soldMap.values()).sort((a, b) => b.qty - a.qty).slice(0, 10);
    this.mostSoldLabels.set(topSold.map((x) => x.name));
    this.mostSoldValues.set(topSold.map((x) => x.qty));
    const now = /* @__PURE__ */ new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1e3);
    const recentlySoldIds = /* @__PURE__ */ new Set();
    const lastSaleMap = /* @__PURE__ */ new Map();
    for (const order of sales.salesOrders) {
      const soldDate = new Date(order.soldAt);
      for (const line of order.lines) {
        const existing = lastSaleMap.get(line.productId);
        if (!existing || soldDate > existing) {
          lastSaleMap.set(line.productId, soldDate);
        }
        if (soldDate >= thirtyDaysAgo) {
          recentlySoldIds.add(line.productId);
        }
      }
    }
    const deadStock = [];
    for (const p of activeProducts) {
      const qty = productQtyMap.get(p.id) ?? 0;
      if (qty > 0 && !recentlySoldIds.has(p.id)) {
        const lastSale = lastSaleMap.get(p.id);
        const daysSince = lastSale ? Math.floor((now.getTime() - lastSale.getTime()) / (24 * 60 * 60 * 1e3)) : null;
        deadStock.push({
          productId: p.id,
          sku: p.sku,
          productName: p.name,
          qtyOnHand: qty,
          daysSinceLastSale: daysSince
        });
      }
    }
    deadStock.sort((a, b) => b.qtyOnHand - a.qtyOnHand);
    this.deadStockItems.set(deadStock);
    const topDead = deadStock.slice(0, 10);
    this.deadStockLabels.set(topDead.map((x) => x.productName));
    this.deadStockValues.set(topDead.map((x) => x.qtyOnHand));
  }
  setAlertsPageSize(size) {
    const next = Number(size);
    if (!Number.isFinite(next) || next <= 0)
      return;
    this.alertsPageSize.set(next);
    this.alertsPageIndex.set(0);
  }
  alertsPrevPage() {
    const idx = this.alertsPageIndex();
    if (idx > 0)
      this.alertsPageIndex.set(idx - 1);
  }
  alertsNextPage() {
    const idx = this.alertsPageIndex();
    if (idx < this.alertsTotalPages() - 1)
      this.alertsPageIndex.set(idx + 1);
  }
  formatCurrency(value) {
    if (value == null)
      return "-";
    return value.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  static \u0275fac = function ProductDashboardPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDashboardPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDashboardPage, selectors: [["cis-product-dashboard-page"]], decls: 102, vars: 65, consts: [[1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-sm", "text-slate-600", "dark:text-slate-400"], ["type", "button", 1, "rounded-xl", "bg-purple-600", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-purple-900", "disabled:opacity-70", 3, "click", "disabled"], ["class", "mt-4 text-sm text-slate-600 dark:text-slate-400", 4, "ngIf"], ["class", "mt-4 text-sm text-red-700 dark:text-red-400", 4, "ngIf"], [1, "cis-stat-grid", "mt-6", "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-5"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "flex", "items-center", "gap-3"], [1, "grid", "h-10", "w-10", "shrink-0", "place-items-center", "rounded-xl", "bg-indigo-100", "dark:bg-pink-900/30", "text-indigo-600", "dark:text-indigo-400"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4v10l8 4 8-4V7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 7l8 4 8-4"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-slate-500", "dark:text-slate-400"], [1, "mt-3", "text-3xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "grid", "h-10", "w-10", "shrink-0", "place-items-center", "rounded-xl", "bg-emerald-100", "dark:bg-emerald-900/30", "text-emerald-600", "dark:text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-sm", "ring-1", "ring-amber-200", "dark:ring-amber-700"], [1, "grid", "h-10", "w-10", "shrink-0", "place-items-center", "rounded-xl", "bg-amber-100", "dark:bg-amber-900/30", "text-amber-600", "dark:text-amber-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v4m0 4h.01"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-amber-700", "dark:text-amber-400"], [1, "mt-3", "text-3xl", "font-extrabold", "text-amber-700", "dark:text-amber-400"], [1, "mt-1", "text-xs", "text-amber-600", "dark:text-amber-500"], ["data-tone", "red", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-sm", "ring-1", "ring-red-200", "dark:ring-red-700"], [1, "grid", "h-10", "w-10", "shrink-0", "place-items-center", "rounded-xl", "bg-red-100", "dark:bg-red-900/30", "text-red-600", "dark:text-red-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-red-700", "dark:text-red-400"], [1, "mt-3", "text-3xl", "font-extrabold", "text-red-700", "dark:text-red-400"], [1, "mt-1", "text-xs", "text-red-600", "dark:text-red-500"], ["data-tone", "blue", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "grid", "h-10", "w-10", "shrink-0", "place-items-center", "rounded-xl", "bg-purple-100", "dark:bg-purple-900/30", "text-purple-600", "dark:text-purple-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v2m0 10v2"], [1, "mt-3", "text-2xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], [1, "mt-8"], [1, "text-lg", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-sm", "text-slate-500", "dark:text-slate-400"], ["routerLink", "/expiry-alerts", 1, "text-sm", "font-semibold", "text-purple-900", "dark:text-purple-400", "hover:underline"], ["class", "mt-4 flex flex-wrap items-center justify-between gap-2", 4, "ngIf"], ["class", "mt-3 overflow-auto rounded-2xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700", 4, "ngIf"], ["class", "mt-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 p-6 text-center ring-1 ring-emerald-200 dark:ring-emerald-700", 4, "ngIf"], ["class", "mt-6", 4, "ngIf"], [1, "mt-4", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "mt-4", "text-sm", "text-red-700", "dark:text-red-400"], [1, "mt-4", "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], [1, "flex", "items-center", "gap-2"], [1, "ml-2", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "text-slate-900", "dark:text-slate-100", 3, "change", "value"], [3, "value"], [1, "rounded-lg", "bg-slate-100", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-200", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], [1, "mt-3", "overflow-auto", "rounded-2xl", "bg-white", "dark:bg-slate-800", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-4", "py-3", "text-left", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-slate-600", "dark:text-slate-300"], [1, "px-4", "py-3", "text-right", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-700/50", 4, "ngFor", "ngForOf"], [1, "border-t", "border-slate-100", "dark:border-slate-700", "hover:bg-slate-50/50", "dark:hover:bg-slate-700/50"], [1, "px-4", "py-3"], ["class", "inline-flex items-center gap-1.5 rounded-full bg-red-50 dark:bg-red-900/30 px-2.5 py-1 text-xs font-semibold text-red-700 dark:text-red-400", 4, "ngIf"], ["class", "inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400", 4, "ngIf"], [1, "px-4", "py-3", "font-mono", "text-xs", "text-slate-600", "dark:text-slate-300"], [1, "px-4", "py-3", "font-medium", "text-slate-900", "dark:text-slate-100"], [1, "px-4", "py-3", "text-right", "font-semibold", 3, "ngClass"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "bg-red-50", "dark:bg-red-900/30", "px-2.5", "py-1", "text-xs", "font-semibold", "text-red-700", "dark:text-red-400"], [1, "h-2", "w-2", "rounded-full", "bg-red-500"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "bg-amber-50", "dark:bg-amber-900/30", "px-2.5", "py-1", "text-xs", "font-semibold", "text-amber-700", "dark:text-amber-400"], [1, "h-2", "w-2", "rounded-full", "bg-amber-500"], [1, "mt-4", "rounded-2xl", "bg-emerald-50", "dark:bg-emerald-900/20", "p-6", "text-center", "ring-1", "ring-emerald-200", "dark:ring-emerald-700"], [1, "text-sm", "font-semibold", "text-emerald-700", "dark:text-emerald-400"], [1, "mt-6"], [1, "mt-4", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-4", "overflow-auto", "rounded-2xl", "bg-white", "dark:bg-slate-800", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "px-4", "py-3", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "px-4", "py-3", "text-right"], ["class", "font-semibold text-red-600 dark:text-red-400", 4, "ngIf"], ["class", "text-xs text-slate-400 dark:text-slate-500", 4, "ngIf"], [1, "font-semibold", "text-red-600", "dark:text-red-400"], [1, "text-xs", "text-slate-400", "dark:text-slate-500"]], template: function ProductDashboardPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function ProductDashboardPage_Template_button_click_8_listener() {
        return ctx.load();
      });
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, ProductDashboardPage_div_11_Template, 3, 3, "div", 4)(12, ProductDashboardPage_div_12_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(13, "div", 6)(14, "section", 7)(15, "div", 8)(16, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 10);
      \u0275\u0275element(18, "path", 11)(19, "path", 12)(20, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 15);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "section", 7)(30, "div", 8)(31, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 10);
      \u0275\u0275element(33, "path", 18)(34, "path", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "div", 14);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 15);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 16);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "section", 20)(45, "div", 8)(46, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(47, "svg", 10);
      \u0275\u0275element(48, "path", 22)(49, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "div", 24);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 25);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 26);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "section", 27)(60, "div", 8)(61, "div", 28);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(62, "svg", 10);
      \u0275\u0275element(63, "path", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "div", 30);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 31);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 32);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "section", 33)(73, "div", 8)(74, "div", 34);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(75, "svg", 10);
      \u0275\u0275element(76, "path", 35)(77, "path", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(78, "div", 14);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 37);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 16);
      \u0275\u0275text(85, "\u03A3 (costPrice \xD7 quantity)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 38)(87, "div", 0)(88, "div")(89, "h3", 39);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 40);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "a", 41);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(98, ProductDashboardPage_div_98_Template, 26, 25, "div", 42)(99, ProductDashboardPage_div_99_Template, 17, 10, "div", 43)(100, ProductDashboardPage_div_100_Template, 4, 3, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275template(101, ProductDashboardPage_div_101_Template, 27, 20, "div", 45);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 29, "productDashboard.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 31, "productDashboard.subtitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 33, "productDashboard.refresh"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 35, "productDashboard.totalProducts"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalProducts());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 37, "productDashboard.activeProducts"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 39, "productDashboard.totalStock"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 41, ctx.totalStockQty()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 43, "productDashboard.totalUnits"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 45, "productDashboard.lowStock"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lowStockCount());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(57, 47, "productDashboard.lowStockHelp"), " (\u2264 ", ctx.lowStockThreshold, " ", \u0275\u0275pipeBind1(58, 49, "productDashboard.units"), ")");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 51, "productDashboard.outOfStock"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.outOfStockCount());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 53, "productDashboard.zeroQtyProducts"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 55, "productDashboard.inventoryValue"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 57, ctx.inventoryValue()));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 59, "productDashboard.stockAlerts"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 61, "productDashboard.stockAlertsSubtitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 63, "productDashboard.viewAllAlerts"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.alerts().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.alerts().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.alerts().length === 0 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deadStockItems().length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, PagerComponent, DecimalPipe, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDashboardPage, [{
    type: Component,
    args: [{ selector: "cis-product-dashboard-page", standalone: true, imports: [CommonModule, RouterLink, BaseChartDirective, MoneyPipe, TranslatePipe, PagerComponent], template: `<!-- Header -->\r
<div class="flex items-center justify-between">\r
  <div>\r
    <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ 'productDashboard.title' | translate }}</h2>\r
    <div class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ 'productDashboard.subtitle' | translate }}</div>\r
  </div>\r
  <button\r
    type="button"\r
    class="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-900 disabled:opacity-70"\r
    (click)="load()"\r
    [disabled]="loading()"\r
  >\r
    {{ 'productDashboard.refresh' | translate }}\r
  </button>\r
</div>\r
\r
<div class="mt-4 text-sm text-slate-600 dark:text-slate-400" *ngIf="loading()">{{ 'productDashboard.loading' | translate }}</div>\r
<div class="mt-4 text-sm text-red-700 dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- SECTION 1 \u2014 Top Summary Cards                                  -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="cis-stat-grid mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">\r
  <!-- Total Products -->\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="flex items-center gap-3">\r
      <div class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-100 dark:bg-pink-900/30 text-indigo-600 dark:text-indigo-400">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4v10l8 4 8-4V7z" />\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18" />\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7l8 4 8-4" />\r
        </svg>\r
      </div>\r
      <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'productDashboard.totalProducts' | translate }}</div>\r
    </div>\r
    <div class="mt-3 text-3xl font-extrabold text-slate-900 dark:text-slate-100">{{ totalProducts() }}</div>\r
    <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ 'productDashboard.activeProducts' | translate }}</div>\r
  </section>\r
\r
  <!-- Total Stock Quantity -->\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="flex items-center gap-3">\r
      <div class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6" />\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />\r
        </svg>\r
      </div>\r
      <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'productDashboard.totalStock' | translate }}</div>\r
    </div>\r
    <div class="mt-3 text-3xl font-extrabold text-slate-900 dark:text-slate-100">{{ totalStockQty() | number }}</div>\r
    <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ 'productDashboard.totalUnits' | translate }}</div>\r
  </section>\r
\r
  <!-- Low Stock Items -->\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-amber-200 dark:ring-amber-700">\r
    <div class="flex items-center gap-3">\r
      <div class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01" />\r
          <path\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"\r
          />\r
        </svg>\r
      </div>\r
      <div class="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">{{ 'productDashboard.lowStock' | translate }}</div>\r
    </div>\r
    <div class="mt-3 text-3xl font-extrabold text-amber-700 dark:text-amber-400">{{ lowStockCount() }}</div>\r
    <div class="mt-1 text-xs text-amber-600 dark:text-amber-500">{{ 'productDashboard.lowStockHelp' | translate }} (&le; {{ lowStockThreshold }} {{ 'productDashboard.units' | translate }})</div>\r
  </section>\r
\r
  <!-- Out of Stock -->\r
  <section data-tone="red" class="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-red-200 dark:ring-red-700">\r
    <div class="flex items-center gap-3">\r
      <div class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"\r
          />\r
        </svg>\r
      </div>\r
      <div class="text-xs font-semibold uppercase tracking-wide text-red-700 dark:text-red-400">{{ 'productDashboard.outOfStock' | translate }}</div>\r
    </div>\r
    <div class="mt-3 text-3xl font-extrabold text-red-700 dark:text-red-400">{{ outOfStockCount() }}</div>\r
    <div class="mt-1 text-xs text-red-600 dark:text-red-500">{{ 'productDashboard.zeroQtyProducts' | translate }}</div>\r
  </section>\r
\r
  <!-- Inventory Value -->\r
  <section data-tone="blue" class="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="flex items-center gap-3">\r
      <div class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />\r
        </svg>\r
      </div>\r
      <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'productDashboard.inventoryValue' | translate }}</div>\r
    </div>\r
    <div class="mt-3 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ inventoryValue() | money }}</div>\r
    <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">&Sigma; (costPrice &times; quantity)</div>\r
  </section>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- SECTION 2 \u2014 Stock Alerts                                       -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="mt-8">\r
  <div class="flex items-center justify-between">\r
    <div>\r
      <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ 'productDashboard.stockAlerts' | translate }}</h3>\r
      <div class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ 'productDashboard.stockAlertsSubtitle' | translate }}</div>\r
    </div>\r
    <a class="text-sm font-semibold text-purple-900 dark:text-purple-400 hover:underline" routerLink="/expiry-alerts">{{ 'productDashboard.viewAllAlerts' | translate }}</a>\r
  </div>\r
\r
  <!-- Alerts Pagination -->\r
  <div class="mt-4 flex flex-wrap items-center justify-between gap-2" *ngIf="alerts().length > 0">\r
    <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'productDashboard.total' | translate }}: {{ alerts().length }}</div>\r
    <div class="flex items-center gap-2">\r
      <label class="text-xs font-semibold text-slate-600 dark:text-slate-400">\r
        {{ 'productDashboard.show' | translate }}\r
        <select\r
          class="ml-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-xs text-slate-900 dark:text-slate-100"\r
          [value]="alertsPageSize()"\r
          (change)="setAlertsPageSize(($any($event.target)).value)"\r
        >\r
          <option [value]="5">5</option>\r
          <option [value]="10">10</option>\r
          <option [value]="20">20</option>\r
          <option [value]="50">50</option>\r
        </select>\r
      </label>\r
\r
      <button\r
        class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"\r
        (click)="alertsPrevPage()"\r
        [disabled]="alertsPageIndex() === 0"\r
      >\r
        {{ 'productDashboard.prev' | translate }}\r
      </button>\r
      <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'productDashboard.page' | translate }} {{ alertsPageIndex() + 1 }} / {{ alertsTotalPages() }}</div>\r
      <button\r
        class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"\r
        (click)="alertsNextPage()"\r
        [disabled]="alertsPageIndex() >= alertsTotalPages() - 1"\r
      >\r
        {{ 'productDashboard.next' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Alerts Table -->\r
  <div class="mt-3 overflow-auto rounded-2xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700" *ngIf="alerts().length > 0">\r
    <table class="w-full border-collapse text-sm">\r
      <thead class="bg-slate-50 dark:bg-slate-700">\r
        <tr>\r
          <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{{ 'productDashboard.status' | translate }}</th>\r
          <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">SKU</th>\r
          <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{{ 'productDashboard.product' | translate }}</th>\r
          <th class="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{{ 'productDashboard.qtyOnHand' | translate }}</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let a of displayedAlerts()" class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-700/50">\r
          <td class="px-4 py-3">\r
            <span\r
              *ngIf="a.status === 'out_of_stock'"\r
              class="inline-flex items-center gap-1.5 rounded-full bg-red-50 dark:bg-red-900/30 px-2.5 py-1 text-xs font-semibold text-red-700 dark:text-red-400"\r
            >\r
              <span class="h-2 w-2 rounded-full bg-red-500"></span>\r
              {{ 'productDashboard.outOfStock' | translate }}\r
            </span>\r
            <span\r
              *ngIf="a.status === 'running_low'"\r
              class="inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400"\r
            >\r
              <span class="h-2 w-2 rounded-full bg-amber-500"></span>\r
              {{ 'productDashboard.runningLow' | translate }}\r
            </span>\r
          </td>\r
          <td class="px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-300">{{ a.sku }}</td>\r
          <td class="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{{ a.productName }}</td>\r
          <td\r
            class="px-4 py-3 text-right font-semibold"\r
            [ngClass]="a.status === 'out_of_stock' ? 'text-red-700 dark:text-red-400' : 'text-amber-700 dark:text-amber-400'"\r
          >\r
            {{ a.qtyOnHand }}\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- No Alerts -->\r
  <div\r
    class="mt-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 p-6 text-center ring-1 ring-emerald-200 dark:ring-emerald-700"\r
    *ngIf="alerts().length === 0 && !loading()"\r
  >\r
    <div class="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{{ 'productDashboard.allGood' | translate }}</div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- SECTION 3 \u2014 Charts                                             -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3"> -->\r
  <!-- Chart 1: Stock by Category -->\r
  <!-- <section class="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <h4 class="text-base font-semibold text-slate-900 dark:text-slate-100">Stock by Category</h4>\r
    <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">Inventory distribution across categories</div>\r
    <div class="mt-4" *ngIf="categoryLabels().length > 0">\r
      <canvas baseChart [type]="'doughnut'" [data]="categoryChartData()" [options]="categoryChartOptions"></canvas>\r
    </div>\r
    <div class="mt-4 py-8 text-center text-sm text-slate-400 dark:text-slate-500" *ngIf="categoryLabels().length === 0 && !loading()">\r
      No category data available\r
    </div>\r
  </section> -->\r
\r
  <!-- Chart 2: Most Sold Products -->\r
  <!-- <section class="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <h4 class="text-base font-semibold text-slate-900 dark:text-slate-100">Most Sold Products</h4>\r
    <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">Top 10 by total quantity sold (from sales)</div>\r
    <div class="mt-4" *ngIf="mostSoldLabels().length > 0">\r
      <canvas baseChart [type]="'bar'" [data]="mostSoldChartData()" [options]="mostSoldChartOptions"></canvas>\r
    </div>\r
    <div class="mt-4 py-8 text-center text-sm text-slate-400 dark:text-slate-500" *ngIf="mostSoldLabels().length === 0 && !loading()">\r
      No sales data available\r
    </div>\r
  </section> -->\r
\r
  <!-- Chart 3: Dead Stock -->\r
  <!-- <section class="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <h4 class="text-base font-semibold text-slate-900 dark:text-slate-100">Dead Stock</h4>\r
    <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">Products not sold in 30+ days (still in inventory)</div>\r
    <div class="mt-4" *ngIf="deadStockLabels().length > 0">\r
      <canvas baseChart [type]="'bar'" [data]="deadStockChartData()" [options]="deadStockChartOptions"></canvas>\r
    </div>\r
    <div class="mt-4 py-8 text-center text-sm text-slate-400 dark:text-slate-500" *ngIf="deadStockLabels().length === 0 && !loading()">\r
      No dead stock detected\r
    </div>\r
  </section> -->\r
<!-- </div> -->\r
\r
<!-- Dead Stock Detail Table -->\r
<div class="mt-6" *ngIf="deadStockItems().length > 0">\r
  <div class="flex items-center justify-between">\r
    <div>\r
      <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ 'productDashboard.deadStockDetails' | translate }}</h3>\r
      <div class="mt-1 text-sm text-slate-500 dark:text-slate-400">\r
        {{ deadStockItems().length }} {{ 'productDashboard.deadStockDescription' | translate }}\r
      </div>\r
    </div>\r
  </div>\r
\r
  <cis-pager class="mt-4 block" [total]="deadStockItems().length" [(pageSize)]="deadStockPageSize" [(pageIndex)]="deadStockPageIndex" />\r
\r
  <div class="mt-4 overflow-auto rounded-2xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <table class="w-full border-collapse text-sm">\r
      <thead class="bg-slate-50 dark:bg-slate-700">\r
        <tr>\r
          <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">SKU</th>\r
          <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{{ 'productDashboard.product' | translate }}</th>\r
          <th class="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{{ 'productDashboard.qtyOnHand' | translate }}</th>\r
          <th class="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{{ 'productDashboard.daysSinceSale' | translate }}</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let d of displayedDeadStock()" class="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-700/50">\r
          <td class="px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-300">{{ d.sku }}</td>\r
          <td class="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{{ d.productName }}</td>\r
          <td class="px-4 py-3 text-right font-semibold text-slate-900 dark:text-slate-100">{{ d.qtyOnHand }}</td>\r
          <td class="px-4 py-3 text-right">\r
            <span *ngIf="d.daysSinceLastSale !== null" class="font-semibold text-red-600 dark:text-red-400"\r
              >{{ d.daysSinceLastSale }} {{ 'productDashboard.daysAgo' | translate }}</span\r
            >\r
            <span *ngIf="d.daysSinceLastSale === null" class="text-xs text-slate-400 dark:text-slate-500">{{ 'productDashboard.neverSold' | translate }}</span>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDashboardPage, { className: "ProductDashboardPage", filePath: "app/features/product-dashboard/product-dashboard.page.ts", lineNumber: 80 });
})();
export {
  ProductDashboardPage
};
//# sourceMappingURL=chunk-SND7C3MM.js.map
