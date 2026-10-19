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
  DatePipe,
  DecimalPipe,
  GraphqlService,
  NgForOf,
  NgIf,
  computed,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
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
} from "./chunk-ZFAUJJU2.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/inventory-analytics/inventory-analytics.page.ts
function InventoryAnalyticsPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function InventoryAnalyticsPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Loading analytics\u2026");
    \u0275\u0275elementEnd();
  }
}
function InventoryAnalyticsPage_section_28_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.agingBucketBadge(b_r2.bucket));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", b_r2.bucket, ": ", b_r2.qty, " pcs ");
  }
}
function InventoryAnalyticsPage_section_28_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "No stock on hand.");
    \u0275\u0275elementEnd();
  }
}
function InventoryAnalyticsPage_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    \u0275\u0275text(4, "Products Tracked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "div", 20);
    \u0275\u0275text(9, "Units On Hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 19)(13, "div", 20);
    \u0275\u0275text(14, "Stock Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 19)(19, "div", 20);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 21);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 22)(24, "div", 23)(25, "div", 24);
    \u0275\u0275text(26, "Fast Moving");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 25);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 26)(30, "div", 27);
    \u0275\u0275text(31, "Slow Moving");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 28);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 29)(35, "div", 30);
    \u0275\u0275text(36, "Dead Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 31);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 32)(40, "div", 20);
    \u0275\u0275text(41, "No Movement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 33);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 19)(45, "h3", 34);
    \u0275\u0275text(46, "Stock Aging Snapshot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 35);
    \u0275\u0275template(48, InventoryAnalyticsPage_section_28_span_48_Template, 2, 4, "span", 36)(49, InventoryAnalyticsPage_section_28_span_49_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.stats().length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalUnits());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, ctx_r0.stockValue() ?? 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Units Sold (", ctx_r0.period(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.unitsSold());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.fastCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.slowCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.deadCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.idleCount());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.agingBuckets());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.agingBuckets().length);
  }
}
function InventoryAnalyticsPage_section_29_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 50)(1, "td", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 52)(6, "span", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 55);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 55);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 55);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.classBadge(s_r4.stockClass));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.classLabel(s_r4.stockClass));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.qtyOnHand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.soldQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.daysSupply !== null ? \u0275\u0275pipeBind2(14, 9, s_r4.daysSupply, "1.0-0") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 12, s_r4.stockValue));
  }
}
function InventoryAnalyticsPage_section_29_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2, "No products in this classification.");
    \u0275\u0275elementEnd()();
  }
}
function InventoryAnalyticsPage_section_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 39)(1, "div", 40)(2, "button", 41);
    \u0275\u0275listener("click", function InventoryAnalyticsPage_section_29_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setClassFilter("all"));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function InventoryAnalyticsPage_section_29_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setClassFilter("fast"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 41);
    \u0275\u0275listener("click", function InventoryAnalyticsPage_section_29_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setClassFilter("slow"));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 41);
    \u0275\u0275listener("click", function InventoryAnalyticsPage_section_29_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setClassFilter("dead"));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "cis-pager", 42);
    \u0275\u0275twoWayListener("pageSizeChange", function InventoryAnalyticsPage_section_29_Template_cis_pager_pageSizeChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.classPageSize, $event) || (ctx_r0.classPageSize = $event);
      return \u0275\u0275resetView($event);
    })("pageIndexChange", function InventoryAnalyticsPage_section_29_Template_cis_pager_pageIndexChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.classPageIndex, $event) || (ctx_r0.classPageIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 43)(12, "table", 44)(13, "thead", 45)(14, "tr")(15, "th", 46);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 46);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 46);
    \u0275\u0275text(22, "Classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 47);
    \u0275\u0275text(24, "On Hand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 47);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 47);
    \u0275\u0275text(28, "Days of Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 47);
    \u0275\u0275text(30, "Stock Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275template(32, InventoryAnalyticsPage_section_29_tr_32_Template, 18, 14, "tr", 48)(33, InventoryAnalyticsPage_section_29_tr_33_Template, 3, 0, "tr", 49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-slate-900", ctx_r0.classFilter() === "all")("text-white", ctx_r0.classFilter() === "all")("ring-slate-900", ctx_r0.classFilter() === "all")("bg-white", ctx_r0.classFilter() !== "all")("text-slate-600", ctx_r0.classFilter() !== "all")("ring-slate-200", ctx_r0.classFilter() !== "all")("dark:bg-slate-100", ctx_r0.classFilter() === "all")("dark:text-slate-900", ctx_r0.classFilter() === "all")("dark:bg-slate-800", ctx_r0.classFilter() !== "all")("dark:text-slate-300", ctx_r0.classFilter() !== "all")("dark:ring-slate-600", ctx_r0.classFilter() !== "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("All Classification (", ctx_r0.stats().length, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-emerald-600", ctx_r0.classFilter() === "fast")("text-white", ctx_r0.classFilter() === "fast")("ring-emerald-600", ctx_r0.classFilter() === "fast")("bg-white", ctx_r0.classFilter() !== "fast")("text-emerald-700", ctx_r0.classFilter() !== "fast")("ring-emerald-200", ctx_r0.classFilter() !== "fast")("dark:bg-emerald-800", ctx_r0.classFilter() !== "fast")("dark:text-emerald-300", ctx_r0.classFilter() !== "fast")("dark:ring-emerald-700", ctx_r0.classFilter() !== "fast");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Fast Moving (", ctx_r0.fastCount(), ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-amber-500", ctx_r0.classFilter() === "slow")("text-white", ctx_r0.classFilter() === "slow")("ring-amber-500", ctx_r0.classFilter() === "slow")("bg-white", ctx_r0.classFilter() !== "slow")("text-amber-700", ctx_r0.classFilter() !== "slow")("ring-amber-200", ctx_r0.classFilter() !== "slow")("dark:bg-amber-800", ctx_r0.classFilter() !== "slow")("dark:text-amber-300", ctx_r0.classFilter() !== "slow")("dark:ring-amber-700", ctx_r0.classFilter() !== "slow");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Slow Moving (", ctx_r0.slowCount(), ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-[#B81104]", ctx_r0.classFilter() === "dead")("text-white", ctx_r0.classFilter() === "dead")("ring-[#B81104]", ctx_r0.classFilter() === "dead")("bg-white", ctx_r0.classFilter() !== "dead")("text-red-700", ctx_r0.classFilter() !== "dead")("ring-red-200", ctx_r0.classFilter() !== "dead")("dark:bg-slate-800", ctx_r0.classFilter() !== "dead")("dark:text-red-300", ctx_r0.classFilter() !== "dead")("dark:ring-red-700", ctx_r0.classFilter() !== "dead");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Dead Stock (", ctx_r0.deadCount(), ")");
    \u0275\u0275advance();
    \u0275\u0275property("total", ctx_r0.filteredClass().length);
    \u0275\u0275twoWayProperty("pageSize", ctx_r0.classPageSize)("pageIndex", ctx_r0.classPageIndex);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 88, "common.sku"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 90, "common.product"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Sold (", ctx_r0.period(), ")");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.displayedClass());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.displayedClass().length);
  }
}
function InventoryAnalyticsPage_section_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.agingBucketBadge(b_r6.bucket));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", b_r6.bucket, ": ", b_r6.qty, " pcs");
  }
}
function InventoryAnalyticsPage_section_30_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 50)(1, "td", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 51);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 54);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 52)(15, "span", 53);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 54);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.receivedAt ? \u0275\u0275pipeBind2(11, 10, a_r7.receivedAt, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r7.daysInStock ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.agingBucketBadge(a_r7.bucket));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r7.bucket);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.qtyOnHand);
  }
}
function InventoryAnalyticsPage_section_30_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 59);
    \u0275\u0275text(2, "No stock on hand.");
    \u0275\u0275elementEnd()();
  }
}
function InventoryAnalyticsPage_section_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 39)(1, "div", 40);
    \u0275\u0275template(2, InventoryAnalyticsPage_section_30_span_2_Template, 2, 4, "span", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "cis-pager", 42);
    \u0275\u0275twoWayListener("pageSizeChange", function InventoryAnalyticsPage_section_30_Template_cis_pager_pageSizeChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.agingPageSize, $event) || (ctx_r0.agingPageSize = $event);
      return \u0275\u0275resetView($event);
    })("pageIndexChange", function InventoryAnalyticsPage_section_30_Template_cis_pager_pageIndexChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.agingPageIndex, $event) || (ctx_r0.agingPageIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "table", 44)(6, "thead", 45)(7, "tr")(8, "th", 46);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 46);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 46);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 46);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 46);
    \u0275\u0275text(21, "Received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 47);
    \u0275\u0275text(23, "Days in Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 46);
    \u0275\u0275text(25, "Age Bucket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 47);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, InventoryAnalyticsPage_section_30_tr_30_Template, 19, 13, "tr", 48)(31, InventoryAnalyticsPage_section_30_tr_31_Template, 3, 0, "tr", 49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.agingBuckets());
    \u0275\u0275advance();
    \u0275\u0275property("total", ctx_r0.aging().length);
    \u0275\u0275twoWayProperty("pageSize", ctx_r0.agingPageSize)("pageIndex", ctx_r0.agingPageIndex);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "common.sku"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "common.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 15, "common.batch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 17, "common.location"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 19, "common.qty"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.displayedAging());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.displayedAging().length);
  }
}
function InventoryAnalyticsPage_section_31_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "div", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.priorityBadge(r_r9.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.priority);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r9.title, " \u2014 ", r_r9.productName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", r_r9.sku, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.detail);
  }
}
function InventoryAnalyticsPage_section_31_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, " No recommendations \u2014 inventory looks healthy for this period. ");
    \u0275\u0275elementEnd();
  }
}
function InventoryAnalyticsPage_section_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 39)(1, "div", 40)(2, "button", 41);
    \u0275\u0275listener("click", function InventoryAnalyticsPage_section_31_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRecFilter("all"));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function InventoryAnalyticsPage_section_31_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRecFilter("high"));
    });
    \u0275\u0275text(5, "High Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 41);
    \u0275\u0275listener("click", function InventoryAnalyticsPage_section_31_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRecFilter("medium"));
    });
    \u0275\u0275text(7, "Medium Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 41);
    \u0275\u0275listener("click", function InventoryAnalyticsPage_section_31_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRecFilter("low"));
    });
    \u0275\u0275text(9, "Low Priority");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "cis-pager", 42);
    \u0275\u0275twoWayListener("pageSizeChange", function InventoryAnalyticsPage_section_31_Template_cis_pager_pageSizeChange_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.recPageSize, $event) || (ctx_r0.recPageSize = $event);
      return \u0275\u0275resetView($event);
    })("pageIndexChange", function InventoryAnalyticsPage_section_31_Template_cis_pager_pageIndexChange_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.recPageIndex, $event) || (ctx_r0.recPageIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 60);
    \u0275\u0275template(12, InventoryAnalyticsPage_section_31_div_12_Template, 10, 7, "div", 61)(13, InventoryAnalyticsPage_section_31_div_13_Template, 2, 0, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-slate-900", ctx_r0.recFilter() === "all")("text-white", ctx_r0.recFilter() === "all")("ring-slate-900", ctx_r0.recFilter() === "all")("bg-white", ctx_r0.recFilter() !== "all")("text-slate-600", ctx_r0.recFilter() !== "all")("ring-slate-200", ctx_r0.recFilter() !== "all")("dark:bg-slate-100", ctx_r0.recFilter() === "all")("dark:text-slate-900", ctx_r0.recFilter() === "all")("dark:bg-slate-800", ctx_r0.recFilter() !== "all")("dark:text-slate-300", ctx_r0.recFilter() !== "all")("dark:ring-slate-600", ctx_r0.recFilter() !== "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("All Priority (", ctx_r0.recommendations().length, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-[#B81104]", ctx_r0.recFilter() === "high")("text-white", ctx_r0.recFilter() === "high")("ring-[#B81104]", ctx_r0.recFilter() === "high")("bg-white", ctx_r0.recFilter() !== "high")("text-red-700", ctx_r0.recFilter() !== "high")("ring-red-200", ctx_r0.recFilter() !== "high")("dark:bg-slate-800", ctx_r0.recFilter() !== "high")("dark:text-red-300", ctx_r0.recFilter() !== "high")("dark:ring-red-700", ctx_r0.recFilter() !== "high");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-amber-500", ctx_r0.recFilter() === "medium")("text-white", ctx_r0.recFilter() === "medium")("ring-amber-500", ctx_r0.recFilter() === "medium")("bg-white", ctx_r0.recFilter() !== "medium")("text-amber-700", ctx_r0.recFilter() !== "medium")("ring-amber-200", ctx_r0.recFilter() !== "medium")("dark:bg-amber-800", ctx_r0.recFilter() !== "medium")("dark:text-amber-300", ctx_r0.recFilter() !== "medium")("dark:ring-amber-700", ctx_r0.recFilter() !== "medium");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-sky-600", ctx_r0.recFilter() === "low")("text-white", ctx_r0.recFilter() === "low")("ring-sky-600", ctx_r0.recFilter() === "low")("bg-white", ctx_r0.recFilter() !== "low")("text-sky-700", ctx_r0.recFilter() !== "low")("ring-sky-200", ctx_r0.recFilter() !== "low")("dark:bg-sky-800", ctx_r0.recFilter() !== "low")("dark:text-sky-300", ctx_r0.recFilter() !== "low")("dark:ring-sky-700", ctx_r0.recFilter() !== "low");
    \u0275\u0275advance(2);
    \u0275\u0275property("total", ctx_r0.filteredRecs().length);
    \u0275\u0275twoWayProperty("pageSize", ctx_r0.recPageSize)("pageIndex", ctx_r0.recPageIndex);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.displayedRecs());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.displayedRecs().length);
  }
}
var DAY_MS = 24 * 60 * 60 * 1e3;
var InventoryAnalyticsPage = class _InventoryAnalyticsPage {
  gql = inject(GraphqlService);
  branchCtx = inject(BranchContext);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  period = signal("monthly", ...ngDevMode ? [{ debugName: "period" }] : []);
  tab = signal("overview", ...ngDevMode ? [{ debugName: "tab" }] : []);
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  inventory = signal([], ...ngDevMode ? [{ debugName: "inventory" }] : []);
  sales = signal([], ...ngDevMode ? [{ debugName: "sales" }] : []);
  inMovements = signal([], ...ngDevMode ? [{ debugName: "inMovements" }] : []);
  stockValue = signal(null, ...ngDevMode ? [{ debugName: "stockValue" }] : []);
  periodDays = computed(() => ({ weekly: 7, monthly: 30, yearly: 365 })[this.period()], ...ngDevMode ? [{ debugName: "periodDays" }] : []);
  stats = computed(() => {
    const days = this.periodDays();
    const cutoff = Date.now() - days * DAY_MS;
    const qtyMap = /* @__PURE__ */ new Map();
    for (const item of this.inventory()) {
      qtyMap.set(item.productId, (qtyMap.get(item.productId) ?? 0) + Number(item.qtyOnHand ?? 0));
    }
    const soldMap = /* @__PURE__ */ new Map();
    for (const order of this.sales()) {
      const soldDate = new Date(order.soldAt);
      for (const line of order.lines) {
        const entry = soldMap.get(line.productId) ?? { qty: 0, revenue: 0, last: null };
        if (soldDate.getTime() >= cutoff) {
          entry.qty += Number(line.quantity ?? 0);
          entry.revenue += Number(line.quantity ?? 0) * Number(line.unitPrice ?? 0);
        }
        if (!entry.last || soldDate > entry.last)
          entry.last = soldDate;
        soldMap.set(line.productId, entry);
      }
    }
    const rows = [];
    for (const p of this.products().filter((x) => x.active)) {
      const qtyOnHand = qtyMap.get(p.id) ?? 0;
      const sold = soldMap.get(p.id);
      const soldQty = sold?.qty ?? 0;
      const dailyRate = soldQty / days;
      const daysSupply = dailyRate > 0 ? qtyOnHand / dailyRate : null;
      let stockClass;
      if (soldQty > 0 && (daysSupply === null || daysSupply <= 30))
        stockClass = "fast";
      else if (soldQty > 0)
        stockClass = "slow";
      else if (qtyOnHand > 0)
        stockClass = "dead";
      else
        stockClass = "none";
      rows.push({
        productId: p.id,
        sku: p.sku,
        productName: p.name,
        category: p.category,
        qtyOnHand,
        stockValue: qtyOnHand * Number(p.buyingPrice ?? 0),
        soldQty,
        soldRevenue: sold?.revenue ?? 0,
        dailyRate,
        daysSupply,
        lastSale: sold?.last ?? null,
        stockClass
      });
    }
    rows.sort((a, b) => b.soldQty - a.soldQty || b.qtyOnHand - a.qtyOnHand);
    return rows;
  }, ...ngDevMode ? [{ debugName: "stats" }] : []);
  classFilter = signal("all", ...ngDevMode ? [{ debugName: "classFilter" }] : []);
  filteredClass = computed(() => {
    const f = this.classFilter();
    return f === "all" ? this.stats() : this.stats().filter((s) => s.stockClass === f);
  }, ...ngDevMode ? [{ debugName: "filteredClass" }] : []);
  classPageSize = signal(10, ...ngDevMode ? [{ debugName: "classPageSize" }] : []);
  classPageIndex = signal(0, ...ngDevMode ? [{ debugName: "classPageIndex" }] : []);
  displayedClass = computed(() => {
    const size = this.classPageSize();
    const start = this.classPageIndex() * size;
    return this.filteredClass().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedClass" }] : []);
  aging = computed(() => {
    const receivedMap = /* @__PURE__ */ new Map();
    for (const mv of this.inMovements()) {
      const d = new Date(mv.createdAt);
      const existing = receivedMap.get(mv.batchId);
      if (!existing || d < existing)
        receivedMap.set(mv.batchId, d);
    }
    const now = Date.now();
    const rows = [];
    for (const item of this.inventory()) {
      if (Number(item.qtyOnHand ?? 0) <= 0)
        continue;
      const received = receivedMap.get(item.batchId) ?? null;
      const daysInStock = received ? Math.floor((now - received.getTime()) / DAY_MS) : null;
      const bucket = daysInStock === null ? "Unknown" : daysInStock <= 30 ? "0-30 days" : daysInStock <= 60 ? "31-60 days" : daysInStock <= 90 ? "61-90 days" : "90+ days";
      rows.push({
        productId: item.productId,
        sku: item.sku,
        productName: item.productName,
        batchId: item.batchId,
        batchNumber: item.batchNumber,
        location: item.location,
        expiryDate: item.expiryDate,
        qtyOnHand: Number(item.qtyOnHand),
        receivedAt: received,
        daysInStock,
        bucket
      });
    }
    rows.sort((a, b) => (b.daysInStock ?? -1) - (a.daysInStock ?? -1));
    return rows;
  }, ...ngDevMode ? [{ debugName: "aging" }] : []);
  agingPageSize = signal(10, ...ngDevMode ? [{ debugName: "agingPageSize" }] : []);
  agingPageIndex = signal(0, ...ngDevMode ? [{ debugName: "agingPageIndex" }] : []);
  displayedAging = computed(() => {
    const size = this.agingPageSize();
    const start = this.agingPageIndex() * size;
    return this.aging().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedAging" }] : []);
  agingBuckets = computed(() => {
    const buckets = /* @__PURE__ */ new Map();
    for (const row of this.aging()) {
      buckets.set(row.bucket, (buckets.get(row.bucket) ?? 0) + row.qtyOnHand);
    }
    return ["0-30 days", "31-60 days", "61-90 days", "90+ days", "Unknown"].filter((b) => buckets.has(b)).map((b) => ({ bucket: b, qty: buckets.get(b) ?? 0 }));
  }, ...ngDevMode ? [{ debugName: "agingBuckets" }] : []);
  recommendations = computed(() => {
    const recs = [];
    const expiringSoon = this.expiringSoonCount();
    for (const s of this.stats()) {
      if (s.stockClass === "dead") {
        recs.push({
          priority: s.qtyOnHand >= 20 ? "high" : "medium",
          productId: s.productId,
          sku: s.sku,
          productName: s.productName,
          title: "Clear dead stock",
          detail: `${s.qtyOnHand} pcs in stock with no sales in the last ${this.periodDays()} days. Consider a discount, bundle, or return to supplier.`
        });
      } else if (s.stockClass === "fast" && s.daysSupply !== null && s.daysSupply <= 7) {
        recs.push({
          priority: "high",
          productId: s.productId,
          sku: s.sku,
          productName: s.productName,
          title: "Reorder urgently",
          detail: `Fast mover with only ~${Math.round(s.daysSupply)} day(s) of stock left (${s.qtyOnHand} pcs). Repurchase now to avoid a stock-out.`
        });
      } else if (s.stockClass === "fast" && s.daysSupply !== null && s.daysSupply <= 30) {
        recs.push({
          priority: "medium",
          productId: s.productId,
          sku: s.sku,
          productName: s.productName,
          title: "Plan repurchase",
          detail: `~${Math.round(s.daysSupply)} day(s) of stock remaining. Schedule a repurchase soon.`
        });
      } else if (s.stockClass === "slow") {
        recs.push({
          priority: "low",
          productId: s.productId,
          sku: s.sku,
          productName: s.productName,
          title: "Monitor slow mover",
          detail: `Selling slowly \u2014 ~${s.daysSupply !== null ? Math.round(s.daysSupply) : "\u2014"} day(s) of stock. Avoid over-ordering.`
        });
      }
    }
    if (expiringSoon > 0) {
      recs.push({
        priority: "high",
        productId: "",
        sku: "\u2014",
        productName: `${expiringSoon} batch(es)`,
        title: "Expiring stock",
        detail: `${expiringSoon} batch(es) expire within 90 days. Prioritize selling these first (FEFO) or mark them down.`
      });
    }
    const order = { high: 0, medium: 1, low: 2 };
    recs.sort((a, b) => order[a.priority] - order[b.priority]);
    return recs;
  }, ...ngDevMode ? [{ debugName: "recommendations" }] : []);
  recFilter = signal("all", ...ngDevMode ? [{ debugName: "recFilter" }] : []);
  filteredRecs = computed(() => {
    const f = this.recFilter();
    return f === "all" ? this.recommendations() : this.recommendations().filter((r) => r.priority === f);
  }, ...ngDevMode ? [{ debugName: "filteredRecs" }] : []);
  recPageSize = signal(10, ...ngDevMode ? [{ debugName: "recPageSize" }] : []);
  recPageIndex = signal(0, ...ngDevMode ? [{ debugName: "recPageIndex" }] : []);
  displayedRecs = computed(() => {
    const size = this.recPageSize();
    const start = this.recPageIndex() * size;
    return this.filteredRecs().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedRecs" }] : []);
  totalUnits = computed(() => this.stats().reduce((sum, s) => sum + s.qtyOnHand, 0), ...ngDevMode ? [{ debugName: "totalUnits" }] : []);
  unitsSold = computed(() => this.stats().reduce((sum, s) => sum + s.soldQty, 0), ...ngDevMode ? [{ debugName: "unitsSold" }] : []);
  periodRevenue = computed(() => this.stats().reduce((sum, s) => sum + s.soldRevenue, 0), ...ngDevMode ? [{ debugName: "periodRevenue" }] : []);
  fastCount = computed(() => this.stats().filter((s) => s.stockClass === "fast").length, ...ngDevMode ? [{ debugName: "fastCount" }] : []);
  slowCount = computed(() => this.stats().filter((s) => s.stockClass === "slow").length, ...ngDevMode ? [{ debugName: "slowCount" }] : []);
  deadCount = computed(() => this.stats().filter((s) => s.stockClass === "dead").length, ...ngDevMode ? [{ debugName: "deadCount" }] : []);
  idleCount = computed(() => this.stats().filter((s) => s.stockClass === "none").length, ...ngDevMode ? [{ debugName: "idleCount" }] : []);
  constructor() {
    this.load();
  }
  setPeriod(p) {
    this.period.set(p);
    this.classPageIndex.set(0);
    this.recPageIndex.set(0);
  }
  setTab(t) {
    this.tab.set(t);
  }
  setClassFilter(f) {
    this.classFilter.set(f);
    this.classPageIndex.set(0);
  }
  setRecFilter(f) {
    this.recFilter.set(f);
    this.recPageIndex.set(0);
  }
  classLabel(c) {
    return { fast: "Fast Moving", slow: "Slow Moving", dead: "Dead Stock", none: "No Movement" }[c];
  }
  classBadge(c) {
    switch (c) {
      case "fast":
        return "bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-700";
      case "slow":
        return "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-700";
      case "dead":
        return "bg-[#B81104]/10 text-red-800 ring-[#B81104]/25 dark:text-red-300";
      default:
        return "bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600";
    }
  }
  priorityBadge(p) {
    switch (p) {
      case "high":
        return "bg-[#B81104]/10 text-red-800 ring-[#B81104]/25 dark:text-red-300";
      case "medium":
        return "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-700";
      default:
        return "bg-sky-50 text-sky-800 ring-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:ring-sky-700";
    }
  }
  agingBucketBadge(b) {
    switch (b) {
      case "0-30 days":
        return "bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-700";
      case "31-60 days":
        return "bg-sky-50 text-sky-800 ring-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:ring-sky-700";
      case "61-90 days":
        return "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-700";
      default:
        return "bg-[#B81104]/10 text-red-800 ring-[#B81104]/25 dark:text-red-300";
    }
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const qProducts = `query { products { id sku name category buyingPrice sellingPrice active } }`;
    const qInventory = `query Inv($branch: String) { inventory(filter: { includeZero: true, branch: $branch }) { productId sku productName batchId batchNumber expiryDate location qtyOnHand } }`;
    const qSales = `query Sales($branch: String) { salesOrders(branch: $branch) { id soldAt lines { productId productName quantity unitPrice } } }`;
    const qMovements = `query { stockMovements(filter: { type: "IN" }) { id batchId batchNumber productId createdAt quantity } }`;
    const qValuation = `query Val($branch: String) { inventoryValuation(branch: $branch) { totalStockValue } }`;
    forkJoin({
      products: this.gql.request(qProducts),
      inventory: this.gql.request(qInventory, { branch: this.branchCtx.effective() }),
      sales: this.gql.request(qSales, { branch: this.branchCtx.effective() }),
      movements: this.gql.request(qMovements),
      valuation: this.gql.request(qValuation)
    }).subscribe({
      next: ({ products, inventory, sales, movements, valuation }) => {
        this.products.set(products.products);
        this.inventory.set(inventory.inventory);
        this.sales.set(sales.salesOrders);
        this.inMovements.set(movements.stockMovements);
        this.stockValue.set(valuation.inventoryValuation.totalStockValue);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load inventory analytics");
        this.loading.set(false);
      }
    });
  }
  expiringSoonCount() {
    const limit = Date.now() + 90 * DAY_MS;
    return this.inventory().filter((i) => {
      if (Number(i.qtyOnHand ?? 0) <= 0)
        return false;
      const d = /* @__PURE__ */ new Date(`${String(i.expiryDate ?? "").trim()}T00:00:00`);
      return Number.isFinite(d.getTime()) && d.getTime() <= limit;
    }).length;
  }
  static \u0275fac = function InventoryAnalyticsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryAnalyticsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryAnalyticsPage, selectors: [["cis-inventory-analytics-page"]], decls: 32, vars: 96, consts: [[1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-3"], ["routerLink", "/inventory", "aria-label", "Back to inventory", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-slate-100", "text-slate-700", "hover:bg-slate-200", "dark:bg-slate-700", "dark:text-slate-200", "dark:hover:bg-slate-600"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "flex", "items-center", "gap-1", "rounded-xl", "bg-slate-100", "p-1", "dark:bg-slate-700"], ["type", "button", 1, "rounded-lg", "px-3", "py-1.5", "text-xs", "font-semibold", 3, "click"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-4", "flex", "flex-wrap", "gap-2", "border-b", "border-slate-200", "pb-2", "dark:border-slate-700"], ["type", "button", 1, "rounded-xl", "px-3", "py-2", "text-sm", "font-semibold", 3, "click"], ["class", "mt-3 text-sm text-slate-500 dark:text-slate-400", 4, "ngIf"], ["class", "mt-4 grid gap-4", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "mt-3", "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "mt-4", "grid", "gap-4"], [1, "cis-stat-grid", "grid", "grid-cols-2", "gap-3", "md:grid-cols-4"], [1, "rounded-2xl", "bg-white", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:bg-slate-800", "dark:ring-slate-700"], [1, "text-xs", "font-semibold", "text-slate-500", "dark:text-slate-400"], [1, "mt-1", "text-2xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], [1, "grid", "grid-cols-2", "gap-3", "md:grid-cols-4"], [1, "rounded-2xl", "bg-emerald-50", "p-4", "ring-1", "ring-emerald-100", "dark:bg-emerald-900/20", "dark:ring-emerald-800"], [1, "text-xs", "font-semibold", "text-emerald-800", "dark:text-emerald-300"], [1, "mt-1", "text-2xl", "font-extrabold", "text-emerald-900", "dark:text-emerald-200"], [1, "rounded-2xl", "bg-amber-50", "p-4", "ring-1", "ring-amber-100", "dark:bg-amber-900/20", "dark:ring-amber-800"], [1, "text-xs", "font-semibold", "text-amber-800", "dark:text-amber-300"], [1, "mt-1", "text-2xl", "font-extrabold", "text-amber-900", "dark:text-amber-200"], [1, "rounded-2xl", "bg-[#B81104]/10", "p-4", "ring-1", "ring-[#B81104]/20"], [1, "text-xs", "font-semibold", "text-red-800", "dark:text-red-300"], [1, "mt-1", "text-2xl", "font-extrabold", "text-red-900", "dark:text-red-200"], [1, "rounded-2xl", "bg-slate-50", "p-4", "ring-1", "ring-slate-200", "dark:bg-slate-800", "dark:ring-slate-700"], [1, "mt-1", "text-2xl", "font-extrabold", "text-slate-700", "dark:text-slate-200"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], ["class", "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1", 3, "class", 4, "ngFor", "ngForOf"], ["class", "text-xs text-slate-500 dark:text-slate-400", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", "ring-1"], [1, "mt-4"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "rounded-full", "px-3", "py-1.5", "text-xs", "font-semibold", "ring-1", 3, "click"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-2xl", "bg-white", "shadow-sm", "ring-1", "ring-slate-100", "dark:bg-slate-800", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2"], [1, "inline-flex", "items-center", "rounded-full", "px-2", "py-1", "text-xs", "font-semibold", "ring-1"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"], ["colspan", "7", 1, "px-3", "py-4", "text-center", "text-sm", "text-slate-500", "dark:text-slate-400"], ["class", "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1", 3, "class", 4, "ngFor", "ngForOf"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "px-3", "py-1.5", "text-xs", "font-semibold", "ring-1"], ["colspan", "8", 1, "px-3", "py-4", "text-center", "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "mt-3", "grid", "gap-2"], ["class", "flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700", 4, "ngFor", "ngForOf"], ["class", "rounded-2xl bg-white p-4 text-center text-sm text-slate-500 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700", 4, "ngIf"], [1, "flex", "items-start", "gap-3", "rounded-2xl", "bg-white", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:bg-slate-800", "dark:ring-slate-700"], [1, "mt-0.5", "inline-flex", "shrink-0", "items-center", "rounded-full", "px-2", "py-1", "text-xs", "font-semibold", "uppercase", "ring-1"], [1, "min-w-0"], [1, "text-xs", "font-normal", "text-slate-500", "dark:text-slate-400"], [1, "mt-1", "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "rounded-2xl", "bg-white", "p-4", "text-center", "text-sm", "text-slate-500", "shadow-sm", "ring-1", "ring-slate-100", "dark:bg-slate-800", "dark:text-slate-400", "dark:ring-slate-700"]], template: function InventoryAnalyticsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "div")(6, "h2", 5);
      \u0275\u0275text(7, "Inventory Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, "Stock performance, aging and recommendations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
      \u0275\u0275listener("click", function InventoryAnalyticsPage_Template_button_click_11_listener() {
        return ctx.setPeriod("weekly");
      });
      \u0275\u0275text(12, "Weekly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275listener("click", function InventoryAnalyticsPage_Template_button_click_13_listener() {
        return ctx.setPeriod("monthly");
      });
      \u0275\u0275text(14, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275listener("click", function InventoryAnalyticsPage_Template_button_click_15_listener() {
        return ctx.setPeriod("yearly");
      });
      \u0275\u0275text(16, "Yearly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, InventoryAnalyticsPage_div_17_Template, 2, 1, "div", 9);
      \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
      \u0275\u0275listener("click", function InventoryAnalyticsPage_Template_button_click_19_listener() {
        return ctx.setTab("overview");
      });
      \u0275\u0275text(20, "Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 11);
      \u0275\u0275listener("click", function InventoryAnalyticsPage_Template_button_click_21_listener() {
        return ctx.setTab("classification");
      });
      \u0275\u0275text(22, "Classification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 11);
      \u0275\u0275listener("click", function InventoryAnalyticsPage_Template_button_click_23_listener() {
        return ctx.setTab("aging");
      });
      \u0275\u0275text(24, "Stock Aging");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 11);
      \u0275\u0275listener("click", function InventoryAnalyticsPage_Template_button_click_25_listener() {
        return ctx.setTab("recommendations");
      });
      \u0275\u0275text(26, "Strategic Recommendations");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, InventoryAnalyticsPage_div_27_Template, 2, 0, "div", 12)(28, InventoryAnalyticsPage_section_28_Template, 50, 13, "section", 13)(29, InventoryAnalyticsPage_section_29_Template, 34, 92, "section", 14)(30, InventoryAnalyticsPage_section_30_Template, 32, 21, "section", 14)(31, InventoryAnalyticsPage_section_31_Template, 14, 82, "section", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("bg-white", ctx.period() === "weekly")("text-slate-900", ctx.period() === "weekly")("shadow-sm", ctx.period() === "weekly")("text-slate-600", ctx.period() !== "weekly")("dark:bg-slate-800", ctx.period() === "weekly")("dark:text-slate-100", ctx.period() === "weekly")("dark:text-slate-300", ctx.period() !== "weekly");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-white", ctx.period() === "monthly")("text-slate-900", ctx.period() === "monthly")("shadow-sm", ctx.period() === "monthly")("text-slate-600", ctx.period() !== "monthly")("dark:bg-slate-800", ctx.period() === "monthly")("dark:text-slate-100", ctx.period() === "monthly")("dark:text-slate-300", ctx.period() !== "monthly");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-white", ctx.period() === "yearly")("text-slate-900", ctx.period() === "yearly")("shadow-sm", ctx.period() === "yearly")("text-slate-600", ctx.period() !== "yearly")("dark:bg-slate-800", ctx.period() === "yearly")("dark:text-slate-100", ctx.period() === "yearly")("dark:text-slate-300", ctx.period() !== "yearly");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-[#7367d8]", ctx.tab() === "overview")("text-white", ctx.tab() === "overview")("text-slate-600", ctx.tab() !== "overview")("dark:text-slate-300", ctx.tab() !== "overview")("hover:bg-slate-100", ctx.tab() !== "overview")("dark:hover:bg-slate-700", ctx.tab() !== "overview");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-[#7367d8]", ctx.tab() === "classification")("text-white", ctx.tab() === "classification")("text-slate-600", ctx.tab() !== "classification")("dark:text-slate-300", ctx.tab() !== "classification")("hover:bg-slate-100", ctx.tab() !== "classification")("dark:hover:bg-slate-700", ctx.tab() !== "classification");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-[#7367d8]", ctx.tab() === "aging")("text-white", ctx.tab() === "aging")("text-slate-600", ctx.tab() !== "aging")("dark:text-slate-300", ctx.tab() !== "aging")("hover:bg-slate-100", ctx.tab() !== "aging")("dark:hover:bg-slate-700", ctx.tab() !== "aging");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-[#7367d8]", ctx.tab() === "recommendations")("text-white", ctx.tab() === "recommendations")("text-slate-600", ctx.tab() !== "recommendations")("dark:text-slate-300", ctx.tab() !== "recommendations")("hover:bg-slate-100", ctx.tab() !== "recommendations")("dark:hover:bg-slate-700", ctx.tab() !== "recommendations");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tab() === "overview" && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tab() === "classification" && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tab() === "aging" && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tab() === "recommendations" && !ctx.loading());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, PagerComponent, DecimalPipe, DatePipe, TranslatePipe, MoneyPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryAnalyticsPage, [{
    type: Component,
    args: [{ selector: "cis-inventory-analytics-page", standalone: true, imports: [CommonModule, RouterLink, TranslatePipe, MoneyPipe, PagerComponent], template: `<div class="flex flex-wrap items-center justify-between gap-3">
  <div class="flex items-center gap-3">
    <a routerLink="/inventory" class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600" aria-label="Back to inventory">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
    </a>
    <div>
      <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Inventory Analytics</h2>
      <p class="text-xs text-slate-500 dark:text-slate-400">Stock performance, aging and recommendations</p>
    </div>
  </div>

  <div class="flex items-center gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-700">
    <button type="button" class="rounded-lg px-3 py-1.5 text-xs font-semibold" [class.bg-white]="period() === 'weekly'" [class.text-slate-900]="period() === 'weekly'" [class.shadow-sm]="period() === 'weekly'" [class.text-slate-600]="period() !== 'weekly'" [class.dark:bg-slate-800]="period() === 'weekly'" [class.dark:text-slate-100]="period() === 'weekly'" [class.dark:text-slate-300]="period() !== 'weekly'" (click)="setPeriod('weekly')">Weekly</button>
    <button type="button" class="rounded-lg px-3 py-1.5 text-xs font-semibold" [class.bg-white]="period() === 'monthly'" [class.text-slate-900]="period() === 'monthly'" [class.shadow-sm]="period() === 'monthly'" [class.text-slate-600]="period() !== 'monthly'" [class.dark:bg-slate-800]="period() === 'monthly'" [class.dark:text-slate-100]="period() === 'monthly'" [class.dark:text-slate-300]="period() !== 'monthly'" (click)="setPeriod('monthly')">Monthly</button>
    <button type="button" class="rounded-lg px-3 py-1.5 text-xs font-semibold" [class.bg-white]="period() === 'yearly'" [class.text-slate-900]="period() === 'yearly'" [class.shadow-sm]="period() === 'yearly'" [class.text-slate-600]="period() !== 'yearly'" [class.dark:bg-slate-800]="period() === 'yearly'" [class.dark:text-slate-100]="period() === 'yearly'" [class.dark:text-slate-300]="period() !== 'yearly'" (click)="setPeriod('yearly')">Yearly</button>
  </div>
</div>

<div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>

<div class="mt-4 flex flex-wrap gap-2 border-b border-slate-200 pb-2 dark:border-slate-700">
  <button type="button" class="rounded-xl px-3 py-2 text-sm font-semibold" [class.bg-[#7367d8]]="tab() === 'overview'" [class.text-white]="tab() === 'overview'" [class.text-slate-600]="tab() !== 'overview'" [class.dark:text-slate-300]="tab() !== 'overview'" [class.hover:bg-slate-100]="tab() !== 'overview'" [class.dark:hover:bg-slate-700]="tab() !== 'overview'" (click)="setTab('overview')">Overview</button>
  <button type="button" class="rounded-xl px-3 py-2 text-sm font-semibold" [class.bg-[#7367d8]]="tab() === 'classification'" [class.text-white]="tab() === 'classification'" [class.text-slate-600]="tab() !== 'classification'" [class.dark:text-slate-300]="tab() !== 'classification'" [class.hover:bg-slate-100]="tab() !== 'classification'" [class.dark:hover:bg-slate-700]="tab() !== 'classification'" (click)="setTab('classification')">Classification</button>
  <button type="button" class="rounded-xl px-3 py-2 text-sm font-semibold" [class.bg-[#7367d8]]="tab() === 'aging'" [class.text-white]="tab() === 'aging'" [class.text-slate-600]="tab() !== 'aging'" [class.dark:text-slate-300]="tab() !== 'aging'" [class.hover:bg-slate-100]="tab() !== 'aging'" [class.dark:hover:bg-slate-700]="tab() !== 'aging'" (click)="setTab('aging')">Stock Aging</button>
  <button type="button" class="rounded-xl px-3 py-2 text-sm font-semibold" [class.bg-[#7367d8]]="tab() === 'recommendations'" [class.text-white]="tab() === 'recommendations'" [class.text-slate-600]="tab() !== 'recommendations'" [class.dark:text-slate-300]="tab() !== 'recommendations'" [class.hover:bg-slate-100]="tab() !== 'recommendations'" [class.dark:hover:bg-slate-700]="tab() !== 'recommendations'" (click)="setTab('recommendations')">Strategic Recommendations</button>
</div>

<div class="mt-3 text-sm text-slate-500 dark:text-slate-400" *ngIf="loading()">Loading analytics\u2026</div>

<!-- Overview -->
<section *ngIf="tab() === 'overview' && !loading()" class="mt-4 grid gap-4">
  <div class="cis-stat-grid grid grid-cols-2 gap-3 md:grid-cols-4">
    <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Products Tracked</div>
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ stats().length }}</div>
    </div>
    <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Units On Hand</div>
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ totalUnits() }}</div>
    </div>
    <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Stock Value</div>
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ (stockValue() ?? 0) | money }}</div>
    </div>
    <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Units Sold ({{ period() }})</div>
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ unitsSold() }}</div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
    <div class="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100 dark:bg-emerald-900/20 dark:ring-emerald-800">
      <div class="text-xs font-semibold text-emerald-800 dark:text-emerald-300">Fast Moving</div>
      <div class="mt-1 text-2xl font-extrabold text-emerald-900 dark:text-emerald-200">{{ fastCount() }}</div>
    </div>
    <div class="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100 dark:bg-amber-900/20 dark:ring-amber-800">
      <div class="text-xs font-semibold text-amber-800 dark:text-amber-300">Slow Moving</div>
      <div class="mt-1 text-2xl font-extrabold text-amber-900 dark:text-amber-200">{{ slowCount() }}</div>
    </div>
    <div class="rounded-2xl bg-[#B81104]/10 p-4 ring-1 ring-[#B81104]/20">
      <div class="text-xs font-semibold text-red-800 dark:text-red-300">Dead Stock</div>
      <div class="mt-1 text-2xl font-extrabold text-red-900 dark:text-red-200">{{ deadCount() }}</div>
    </div>
    <div class="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">No Movement</div>
      <div class="mt-1 text-2xl font-extrabold text-slate-700 dark:text-slate-200">{{ idleCount() }}</div>
    </div>
  </div>

  <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
    <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-100">Stock Aging Snapshot</h3>
    <div class="mt-3 flex flex-wrap gap-2">
      <span *ngFor="let b of agingBuckets()" class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1" [class]="agingBucketBadge(b.bucket)">
        {{ b.bucket }}: {{ b.qty }} pcs
      </span>
      <span *ngIf="!agingBuckets().length" class="text-xs text-slate-500 dark:text-slate-400">No stock on hand.</span>
    </div>
  </div>
</section>

<!-- Classification -->
<section *ngIf="tab() === 'classification' && !loading()" class="mt-4">
  <div class="flex flex-wrap gap-2">
    <button type="button" class="rounded-full px-3 py-1.5 text-xs font-semibold ring-1" [class.bg-slate-900]="classFilter() === 'all'" [class.text-white]="classFilter() === 'all'" [class.ring-slate-900]="classFilter() === 'all'" [class.bg-white]="classFilter() !== 'all'" [class.text-slate-600]="classFilter() !== 'all'" [class.ring-slate-200]="classFilter() !== 'all'" [class.dark:bg-slate-100]="classFilter() === 'all'" [class.dark:text-slate-900]="classFilter() === 'all'" [class.dark:bg-slate-800]="classFilter() !== 'all'" [class.dark:text-slate-300]="classFilter() !== 'all'" [class.dark:ring-slate-600]="classFilter() !== 'all'" (click)="setClassFilter('all')">All Classification ({{ stats().length }})</button>
    <button type="button" class="rounded-full px-3 py-1.5 text-xs font-semibold ring-1" [class.bg-emerald-600]="classFilter() === 'fast'" [class.text-white]="classFilter() === 'fast'" [class.ring-emerald-600]="classFilter() === 'fast'" [class.bg-white]="classFilter() !== 'fast'" [class.text-emerald-700]="classFilter() !== 'fast'" [class.ring-emerald-200]="classFilter() !== 'fast'" [class.dark:bg-emerald-800]="classFilter() !== 'fast'" [class.dark:text-emerald-300]="classFilter() !== 'fast'" [class.dark:ring-emerald-700]="classFilter() !== 'fast'" (click)="setClassFilter('fast')">Fast Moving ({{ fastCount() }})</button>
    <button type="button" class="rounded-full px-3 py-1.5 text-xs font-semibold ring-1" [class.bg-amber-500]="classFilter() === 'slow'" [class.text-white]="classFilter() === 'slow'" [class.ring-amber-500]="classFilter() === 'slow'" [class.bg-white]="classFilter() !== 'slow'" [class.text-amber-700]="classFilter() !== 'slow'" [class.ring-amber-200]="classFilter() !== 'slow'" [class.dark:bg-amber-800]="classFilter() !== 'slow'" [class.dark:text-amber-300]="classFilter() !== 'slow'" [class.dark:ring-amber-700]="classFilter() !== 'slow'" (click)="setClassFilter('slow')">Slow Moving ({{ slowCount() }})</button>
    <button type="button" class="rounded-full px-3 py-1.5 text-xs font-semibold ring-1" [class.bg-[#B81104]]="classFilter() === 'dead'" [class.text-white]="classFilter() === 'dead'" [class.ring-[#B81104]]="classFilter() === 'dead'" [class.bg-white]="classFilter() !== 'dead'" [class.text-red-700]="classFilter() !== 'dead'" [class.ring-red-200]="classFilter() !== 'dead'" [class.dark:bg-slate-800]="classFilter() !== 'dead'" [class.dark:text-red-300]="classFilter() !== 'dead'" [class.dark:ring-red-700]="classFilter() !== 'dead'" (click)="setClassFilter('dead')">Dead Stock ({{ deadCount() }})</button>
  </div>

  <cis-pager class="mt-3 block" [total]="filteredClass().length" [(pageSize)]="classPageSize" [(pageIndex)]="classPageIndex" />

  <div class="mt-3 overflow-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
    <table class="w-full border-collapse text-sm">
      <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Classification</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">On Hand</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">Sold ({{ period() }})</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">Days of Stock</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">Stock Value</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let s of displayedClass()" class="border-t border-slate-100 dark:border-slate-700">
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ s.sku }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ s.productName }}</td>
          <td class="px-3 py-2"><span class="inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ring-1" [class]="classBadge(s.stockClass)">{{ classLabel(s.stockClass) }}</span></td>
          <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ s.qtyOnHand }}</td>
          <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ s.soldQty }}</td>
          <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ s.daysSupply !== null ? (s.daysSupply | number:'1.0-0') : '\u2014' }}</td>
          <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ s.stockValue | money }}</td>
        </tr>
        <tr *ngIf="!displayedClass().length">
          <td colspan="7" class="px-3 py-4 text-center text-sm text-slate-500 dark:text-slate-400">No products in this classification.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Stock Aging -->
<section *ngIf="tab() === 'aging' && !loading()" class="mt-4">
  <div class="flex flex-wrap gap-2">
    <span *ngFor="let b of agingBuckets()" class="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1" [class]="agingBucketBadge(b.bucket)">{{ b.bucket }}: {{ b.qty }} pcs</span>
  </div>

  <cis-pager class="mt-3 block" [total]="aging().length" [(pageSize)]="agingPageSize" [(pageIndex)]="agingPageIndex" />

  <div class="mt-3 overflow-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
    <table class="w-full border-collapse text-sm">
      <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.batch' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.location' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Received</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">Days in Stock</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Age Bucket</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let a of displayedAging()" class="border-t border-slate-100 dark:border-slate-700">
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.sku }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.productName }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.batchNumber }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.location }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.receivedAt ? (a.receivedAt | date:'dd MMM yyyy') : '\u2014' }}</td>
          <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ a.daysInStock ?? '\u2014' }}</td>
          <td class="px-3 py-2"><span class="inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ring-1" [class]="agingBucketBadge(a.bucket)">{{ a.bucket }}</span></td>
          <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ a.qtyOnHand }}</td>
        </tr>
        <tr *ngIf="!displayedAging().length">
          <td colspan="8" class="px-3 py-4 text-center text-sm text-slate-500 dark:text-slate-400">No stock on hand.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Recommendations -->
<section *ngIf="tab() === 'recommendations' && !loading()" class="mt-4">
  <div class="flex flex-wrap gap-2">
    <button type="button" class="rounded-full px-3 py-1.5 text-xs font-semibold ring-1" [class.bg-slate-900]="recFilter() === 'all'" [class.text-white]="recFilter() === 'all'" [class.ring-slate-900]="recFilter() === 'all'" [class.bg-white]="recFilter() !== 'all'" [class.text-slate-600]="recFilter() !== 'all'" [class.ring-slate-200]="recFilter() !== 'all'" [class.dark:bg-slate-100]="recFilter() === 'all'" [class.dark:text-slate-900]="recFilter() === 'all'" [class.dark:bg-slate-800]="recFilter() !== 'all'" [class.dark:text-slate-300]="recFilter() !== 'all'" [class.dark:ring-slate-600]="recFilter() !== 'all'" (click)="setRecFilter('all')">All Priority ({{ recommendations().length }})</button>
    <button type="button" class="rounded-full px-3 py-1.5 text-xs font-semibold ring-1" [class.bg-[#B81104]]="recFilter() === 'high'" [class.text-white]="recFilter() === 'high'" [class.ring-[#B81104]]="recFilter() === 'high'" [class.bg-white]="recFilter() !== 'high'" [class.text-red-700]="recFilter() !== 'high'" [class.ring-red-200]="recFilter() !== 'high'" [class.dark:bg-slate-800]="recFilter() !== 'high'" [class.dark:text-red-300]="recFilter() !== 'high'" [class.dark:ring-red-700]="recFilter() !== 'high'" (click)="setRecFilter('high')">High Priority</button>
    <button type="button" class="rounded-full px-3 py-1.5 text-xs font-semibold ring-1" [class.bg-amber-500]="recFilter() === 'medium'" [class.text-white]="recFilter() === 'medium'" [class.ring-amber-500]="recFilter() === 'medium'" [class.bg-white]="recFilter() !== 'medium'" [class.text-amber-700]="recFilter() !== 'medium'" [class.ring-amber-200]="recFilter() !== 'medium'" [class.dark:bg-amber-800]="recFilter() !== 'medium'" [class.dark:text-amber-300]="recFilter() !== 'medium'" [class.dark:ring-amber-700]="recFilter() !== 'medium'" (click)="setRecFilter('medium')">Medium Priority</button>
    <button type="button" class="rounded-full px-3 py-1.5 text-xs font-semibold ring-1" [class.bg-sky-600]="recFilter() === 'low'" [class.text-white]="recFilter() === 'low'" [class.ring-sky-600]="recFilter() === 'low'" [class.bg-white]="recFilter() !== 'low'" [class.text-sky-700]="recFilter() !== 'low'" [class.ring-sky-200]="recFilter() !== 'low'" [class.dark:bg-sky-800]="recFilter() !== 'low'" [class.dark:text-sky-300]="recFilter() !== 'low'" [class.dark:ring-sky-700]="recFilter() !== 'low'" (click)="setRecFilter('low')">Low Priority</button>
  </div>

  <cis-pager class="mt-3 block" [total]="filteredRecs().length" [(pageSize)]="recPageSize" [(pageIndex)]="recPageIndex" />

  <div class="mt-3 grid gap-2">
    <div *ngFor="let r of displayedRecs()" class="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
      <span class="mt-0.5 inline-flex shrink-0 items-center rounded-full px-2 py-1 text-xs font-semibold uppercase ring-1" [class]="priorityBadge(r.priority)">{{ r.priority }}</span>
      <div class="min-w-0">
        <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ r.title }} \u2014 {{ r.productName }} <span class="text-xs font-normal text-slate-500 dark:text-slate-400">({{ r.sku }})</span></div>
        <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">{{ r.detail }}</div>
      </div>
    </div>
    <div *ngIf="!displayedRecs().length" class="rounded-2xl bg-white p-4 text-center text-sm text-slate-500 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700">
      No recommendations \u2014 inventory looks healthy for this period.
    </div>
  </div>
</section>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryAnalyticsPage, { className: "InventoryAnalyticsPage", filePath: "app/features/inventory-analytics/inventory-analytics.page.ts", lineNumber: 111 });
})();
export {
  InventoryAnalyticsPage
};
//# sourceMappingURL=chunk-7KJ7FDFE.js.map
