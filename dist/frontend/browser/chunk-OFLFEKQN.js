import {
  ModalComponent
} from "./chunk-Z6ZNV4D7.js";
import {
  PermissionService
} from "./chunk-MUULZ2RC.js";
import {
  RowActionsMenuComponent
} from "./chunk-NDY7KUDP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CXEU7F5R.js";
import {
  PagerComponent
} from "./chunk-LNJXT4KE.js";
import {
  MoneyPipe
} from "./chunk-WX6AFSP5.js";
import {
  TranslatePipe
} from "./chunk-DPFPPFWE.js";
import {
  BranchContext,
  CommonModule,
  Component,
  DatePipe,
  GraphqlService,
  NgClass,
  NgForOf,
  NgIf,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F3YP4G7X.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/returns/returns.page.ts
var _c0 = () => ["all", "return", "exchange"];
var _c1 = () => ["week", "month", "year", "all"];
function ReturnsPage_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ReturnsPage_button_37_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setType(t_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.typeFilter() === t_r2 ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow" : "text-slate-500 dark:text-slate-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, t_r2 === "all" ? "customers.tabAll" : t_r2 === "return" ? "returns.tabReturn" : "returns.tabExchange"));
  }
}
function ReturnsPage_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ReturnsPage_button_40_Template_button_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPeriod(p_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.period() === p_r5 ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow" : "text-slate-500 dark:text-slate-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "customers.period." + p_r5));
  }
}
function ReturnsPage_tr_78_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", r_r7.settlementAmount > 0 ? "text-red-600 dark:text-red-400" : r_r7.settlementAmount < 0 ? "text-emerald-600 dark:text-emerald-400" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", r_r7.settlementAmount > 0 ? "+" : "", "", \u0275\u0275pipeBind1(3, 3, r_r7.settlementAmount));
  }
}
function ReturnsPage_tr_78_ng_template_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "money");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "returns.debtCredit"), ": ", \u0275\u0275pipeBind1(3, 4, r_r7.debtCreditAmount));
  }
}
function ReturnsPage_tr_78_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "money");
    \u0275\u0275template(2, ReturnsPage_tr_78_ng_template_19_span_2_Template, 4, 6, "span", 46);
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 2, r_r7.refundAmount));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r7.debtCreditAmount > 0);
  }
}
function ReturnsPage_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 34)(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 33);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 36);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 37);
    \u0275\u0275template(18, ReturnsPage_tr_78_ng_container_18_Template, 4, 5, "ng-container", 38)(19, ReturnsPage_tr_78_ng_template_19_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 39);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 40)(25, "cis-row-actions")(26, "button", 41);
    \u0275\u0275listener("click", function ReturnsPage_tr_78_Template_button_click_26_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.details.set(r_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 42);
    \u0275\u0275element(28, "path", 43)(29, "circle", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const refundCell_r8 = \u0275\u0275reference(20);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 12, r_r7.returnedAt, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", r_r7.isExchange ? "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, r_r7.isExchange ? "returns.tabExchange" : "returns.tabReturn"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.customer || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.originalReference || "#" + r_r7.originalSalesOrderId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, r_r7.returnValue));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", r_r7.isExchange)("ngIfElse", refundCell_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", r_r7.lossAmount > 0 ? "text-red-600 dark:text-red-400" : "text-slate-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.lossAmount > 0 ? \u0275\u0275pipeBind1(23, 19, r_r7.lossAmount) : "-");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 21, "common.details"), " ");
  }
}
function ReturnsPage_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "returns.empty"));
  }
}
function ReturnsPage_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.loading"));
  }
}
function ReturnsPage_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function ReturnsPage_ng_container_84_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "returns.exchangeSale"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r9.exchangeReference);
  }
}
function ReturnsPage_ng_container_84_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "returns.reason"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r9.reason);
  }
}
function ReturnsPage_ng_container_84_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 34)(2, "div", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 37);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 34)(14, "span", 35);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 63);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r10.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r10.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r10.batchNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r10.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, l_r10.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", l_r10.condition === "RESALABLE" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "returns.cond." + l_r10.condition));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", l_r10.lossAmount > 0 ? "font-semibold text-red-600 dark:text-red-400" : "text-slate-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r10.lossAmount > 0 ? \u0275\u0275pipeBind1(19, 13, l_r10.lossAmount) : "-");
  }
}
function ReturnsPage_ng_container_84_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 64);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "returns.loss"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, r_r9.lossAmount));
  }
}
function ReturnsPage_ng_container_84_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "returns.debtCredit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, r_r9.debtCreditAmount));
  }
}
function ReturnsPage_ng_container_84_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 3, "returns.refund"), " (", r_r9.refundMethod, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, r_r9.refundAmount));
  }
}
function ReturnsPage_ng_container_84_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "returns.settlement"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", r_r9.settlementAmount > 0 ? "text-red-600 dark:text-red-400" : r_r9.settlementAmount < 0 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-slate-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(6, 6, r_r9.settlementAmount > 0 ? "returns.customerPays" : r_r9.settlementAmount < 0 ? "returns.shopRefunds" : "returns.evenExchange"), " ", \u0275\u0275pipeBind1(7, 8, r_r9.settlementAmount < 0 ? -r_r9.settlementAmount : r_r9.settlementAmount), " ");
  }
}
function ReturnsPage_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50)(2, "div")(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "span", 51);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "span", 51);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "span", 51);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "span", 51);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ReturnsPage_ng_container_84_div_29_Template, 5, 4, "div", 28)(30, ReturnsPage_ng_container_84_div_30_Template, 5, 4, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "table", 53)(33, "thead", 20)(34, "tr")(35, "th", 54);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 54);
    \u0275\u0275text(39, "Batch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 55);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 55);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 54);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 55);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "tbody");
    \u0275\u0275template(53, ReturnsPage_ng_container_84_tr_53_Template, 20, 15, "tr", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 56)(55, "div", 57)(56, "span", 58);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 59);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, ReturnsPage_ng_container_84_div_62_Template, 7, 6, "div", 60)(63, ReturnsPage_ng_container_84_div_63_Template, 7, 6, "div", 60)(64, ReturnsPage_ng_container_84_div_64_Template, 7, 7, "div", 60)(65, ReturnsPage_ng_container_84_div_65_Template, 8, 10, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r9 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 24, "returns.type"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 26, r_r9.isExchange ? "returns.tabExchange" : "returns.tabReturn"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 28, "customers.date"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 30, r_r9.returnedAt, "medium"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 33, "common.customer"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r9.customer || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 35, "common.seller"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r9.returnedBy || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 37, "returns.original"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r9.originalReference || "#" + r_r9.originalSalesOrderId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.exchangeReference);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.reason);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 39, "common.product"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 41, "common.quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 43, "common.price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 45, "returns.condition"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 47, "returns.loss"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", r_r9.lines);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 49, "returns.returnValue"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 51, r_r9.returnValue));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r9.lossAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.debtCreditAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.refundAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r9.isExchange);
  }
}
var FIELDS = `id reference originalSalesOrderId originalReference exchangeSalesOrderId exchangeReference customer returnedAt returnedBy reason branch
  returnValue lossAmount refundMethod refundAmount debtCreditAmount settlementAmount isExchange
  lines { id productName sku batchNumber quantity unitPrice condition lossAmount }`;
var ReturnsPage = class _ReturnsPage {
  gql = inject(GraphqlService);
  perm = inject(PermissionService);
  branchCtx = inject(BranchContext);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  returns = signal([], ...ngDevMode ? [{ debugName: "returns" }] : []);
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  typeFilter = signal("all", ...ngDevMode ? [{ debugName: "typeFilter" }] : []);
  period = signal("month", ...ngDevMode ? [{ debugName: "period" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  details = signal(null, ...ngDevMode ? [{ debugName: "details" }] : []);
  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const type = this.typeFilter();
    const since = this.periodStart();
    return this.returns().filter((r) => {
      if (type === "return" && r.isExchange)
        return false;
      if (type === "exchange" && !r.isExchange)
        return false;
      if (since && new Date(r.returnedAt).getTime() < since)
        return false;
      if (!q)
        return true;
      return [r.reference, r.originalReference, r.exchangeReference, r.customer, r.reason, ...r.lines.map((l) => l.productName)].some((v) => (v ?? "").toLowerCase().includes(q));
    });
  }, ...ngDevMode ? [{ debugName: "filtered" }] : []);
  paged = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    return this.filtered().slice(start, start + this.pageSize());
  }, ...ngDevMode ? [{ debugName: "paged" }] : []);
  statTotal = computed(() => this.filtered().length, ...ngDevMode ? [{ debugName: "statTotal" }] : []);
  statValue = computed(() => this.filtered().reduce((s, r) => s + r.returnValue, 0), ...ngDevMode ? [{ debugName: "statValue" }] : []);
  statLoss = computed(() => this.filtered().reduce((s, r) => s + r.lossAmount, 0), ...ngDevMode ? [{ debugName: "statLoss" }] : []);
  statExchanges = computed(() => this.filtered().filter((r) => r.isExchange).length, ...ngDevMode ? [{ debugName: "statExchanges" }] : []);
  constructor() {
    this.perm.load();
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.gql.request(`query SalesReturns($branch: String) { salesReturns(branch: $branch) { ${FIELDS} } }`, { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.returns.set(res.salesReturns ?? []);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load returns");
        this.loading.set(false);
      }
    });
  }
  setQuery(v) {
    this.query.set(v);
    this.pageIndex.set(0);
  }
  setType(v) {
    this.typeFilter.set(v);
    this.pageIndex.set(0);
  }
  setPeriod(v) {
    this.period.set(v);
    this.pageIndex.set(0);
  }
  conditionSummary(r) {
    const good = r.lines.filter((l) => l.condition === "RESALABLE").reduce((s, l) => s + l.quantity, 0);
    const bad = r.lines.filter((l) => l.condition !== "RESALABLE").reduce((s, l) => s + l.quantity, 0);
    return [good ? `${good} ok` : "", bad ? `${bad} loss` : ""].filter(Boolean).join(" \xB7 ");
  }
  periodStart() {
    const now = /* @__PURE__ */ new Date();
    switch (this.period()) {
      case "week": {
        const d = new Date(now);
        d.setDate(d.getDate() - 7);
        return d.getTime();
      }
      case "month": {
        const d = new Date(now);
        d.setMonth(d.getMonth() - 1);
        return d.getTime();
      }
      case "year": {
        const d = new Date(now);
        d.setFullYear(d.getFullYear() - 1);
        return d.getTime();
      }
      default:
        return null;
    }
  }
  static \u0275fac = function ReturnsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReturnsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReturnsPage, selectors: [["cis-returns-page"]], decls: 85, vars: 76, consts: [["refundCell", ""], [1, "mb-4"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2", "lg:grid-cols-4", "cis-stat-grid"], [1, "rounded-xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-slate-500", "dark:text-slate-400"], [1, "mt-2", "text-2xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], ["data-tone", "red", 1, "rounded-xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "mt-2", "text-2xl", "font-extrabold", "text-red-600", "dark:text-red-400"], [1, "mt-4", "rounded-xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "flex", "gap-1", "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "p-1"], ["type", "button", "class", "rounded-lg px-3 py-1.5 text-xs font-semibold", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["type", "button", "class", "rounded-lg px-2.5 py-1.5 text-[11px] font-semibold", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "text", 1, "w-56", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click", "disabled"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngIf"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["maxWidthClass", "max-w-2xl", 3, "close", "open", "title"], [4, "ngIf"], ["type", "button", 1, "rounded-lg", "px-3", "py-1.5", "text-xs", "font-semibold", 3, "click", "ngClass"], ["type", "button", 1, "rounded-lg", "px-2.5", "py-1.5", "text-[11px]", "font-semibold", 3, "click", "ngClass"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2"], [1, "inline-flex", "rounded-full", "px-2", "py-0.5", "text-[11px]", "font-semibold", 3, "ngClass"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"], [4, "ngIf", "ngIfElse"], [1, "px-3", "py-2", "text-right", "font-semibold", 3, "ngClass"], [1, "px-3", "py-2", "text-right"], ["type", "button", 1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [3, "ngClass"], ["class", "block text-[11px] text-amber-600 dark:text-amber-400", 4, "ngIf"], [1, "block", "text-[11px]", "text-amber-600", "dark:text-amber-400"], ["colspan", "9", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "grid", "grid-cols-2", "gap-x-6", "gap-y-1", "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "font-semibold"], ["class", "col-span-2", 4, "ngIf"], [1, "w-full", "border-collapse", "text-xs"], [1, "px-3", "py-2", "text-left", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "mt-3", "grid", "gap-1", "rounded-xl", "border", "border-slate-200", "bg-slate-50", "p-3", "text-sm", "dark:border-slate-600", "dark:bg-slate-700/50"], [1, "flex", "justify-between"], [1, "text-slate-600", "dark:text-slate-400"], [1, "font-semibold", "text-slate-900", "dark:text-slate-100"], ["class", "flex justify-between", 4, "ngIf"], [1, "col-span-2"], [1, "text-[11px]", "text-slate-500"], [1, "px-3", "py-2", "text-right", 3, "ngClass"], [1, "font-semibold", "text-red-600", "dark:text-red-400"], [1, "font-semibold", "text-amber-600", "dark:text-amber-400"], [1, "font-bold", 3, "ngClass"]], template: function ReturnsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h2", 2);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 5)(15, "div", 6);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 8)(22, "div", 6);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 9);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 5)(29, "div", 6);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 7);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 10)(35, "div", 11)(36, "div", 12);
      \u0275\u0275template(37, ReturnsPage_button_37_Template, 3, 4, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 14)(39, "div", 12);
      \u0275\u0275template(40, ReturnsPage_button_40_Template, 3, 4, "button", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "input", 16);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275listener("ngModelChange", function ReturnsPage_Template_input_ngModelChange_41_listener($event) {
        return ctx.setQuery($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 17);
      \u0275\u0275listener("click", function ReturnsPage_Template_button_click_43_listener() {
        return ctx.load();
      });
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 18)(47, "table", 19)(48, "thead", 20)(49, "tr")(50, "th", 21);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 21);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 21);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 21);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 21);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 22);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 22);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 22);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 22);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "tbody");
      \u0275\u0275template(78, ReturnsPage_tr_78_Template, 32, 23, "tr", 23)(79, ReturnsPage_tr_79_Template, 4, 3, "tr", 24)(80, ReturnsPage_tr_80_Template, 4, 3, "tr", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "cis-pager", 25);
      \u0275\u0275twoWayListener("pageSizeChange", function ReturnsPage_Template_cis_pager_pageSizeChange_81_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function ReturnsPage_Template_cis_pager_pageIndexChange_81_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(82, ReturnsPage_div_82_Template, 2, 1, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "cis-modal", 27);
      \u0275\u0275listener("close", function ReturnsPage_Template_cis_modal_close_83_listener() {
        return ctx.details.set(null);
      });
      \u0275\u0275template(84, ReturnsPage_ng_container_84_Template, 66, 53, "ng-container", 28);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_33_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 36, "returns.pageTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 38, "returns.subtitle"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 40, "returns.stat.total"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statTotal());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 42, "returns.stat.value"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 44, ctx.statValue()));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 46, "returns.stat.loss"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 48, ctx.statLoss()));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 50, "returns.stat.exchanges"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statExchanges());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(74, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(75, _c1));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(42, 52, "common.search")))("ngModel", ctx.query());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 54, "common.refresh"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 56, "common.reference"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 58, "customers.date"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 60, "returns.type"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 62, "common.customer"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 64, "returns.original"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 66, "returns.returnValue"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 68, "returns.refund"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 70, "returns.loss"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 72, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.paged());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.filtered().length && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("total", ctx.filtered().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.details() !== null)("title", ((tmp_33_0 = ctx.details()) == null ? null : tmp_33_0.reference) ?? "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.details());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ModalComponent, PagerComponent, RowActionsMenuComponent, DatePipe, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnsPage, [{
    type: Component,
    args: [{ selector: "cis-returns-page", standalone: true, imports: [CommonModule, FormsModule, MoneyPipe, TranslatePipe, ModalComponent, PagerComponent, RowActionsMenuComponent], template: `<div class="mb-4">
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ 'returns.pageTitle' | translate }}</h2>
  <p class="text-xs text-slate-500 dark:text-slate-400">{{ 'returns.subtitle' | translate }}</p>
</div>

<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 cis-stat-grid">
  <div class="rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700">
    <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'returns.stat.total' | translate }}</div>
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ statTotal() }}</div>
  </div>
  <div class="rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700">
    <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'returns.stat.value' | translate }}</div>
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ statValue() | money }}</div>
  </div>
  <div class="rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700" data-tone="red">
    <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'returns.stat.loss' | translate }}</div>
    <div class="mt-2 text-2xl font-extrabold text-red-600 dark:text-red-400">{{ statLoss() | money }}</div>
  </div>
  <div class="rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700">
    <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'returns.stat.exchanges' | translate }}</div>
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ statExchanges() }}</div>
  </div>
</div>

<div class="mt-4 rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700">
  <div class="flex flex-wrap items-center justify-between gap-3">
    <div class="flex gap-1 rounded-xl bg-slate-100 dark:bg-slate-700 p-1">
      <button *ngFor="let t of ['all', 'return', 'exchange']" type="button" class="rounded-lg px-3 py-1.5 text-xs font-semibold"
        [ngClass]="typeFilter() === t ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow' : 'text-slate-500 dark:text-slate-400'"
        (click)="setType($any(t))">{{ (t === 'all' ? 'customers.tabAll' : t === 'return' ? 'returns.tabReturn' : 'returns.tabExchange') | translate }}</button>
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <div class="flex gap-1 rounded-xl bg-slate-100 dark:bg-slate-700 p-1">
        <button *ngFor="let p of ['week', 'month', 'year', 'all']" type="button" class="rounded-lg px-2.5 py-1.5 text-[11px] font-semibold"
          [ngClass]="period() === p ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow' : 'text-slate-500 dark:text-slate-400'"
          (click)="setPeriod($any(p))">{{ ('customers.period.' + p) | translate }}</button>
      </div>
      <input class="w-56 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="text"
        [ngModel]="query()" (ngModelChange)="setQuery($event)" placeholder="{{ 'common.search' | translate }}" />
      <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200" (click)="load()" [disabled]="loading()">{{ 'common.refresh' | translate }}</button>
    </div>
  </div>

  <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
    <table class="w-full border-collapse text-sm">
      <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.reference' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.date' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.type' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.customer' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.original' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.returnValue' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.refund' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.loss' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let r of paged()" class="border-t border-slate-100 dark:border-slate-700">
          <td class="px-3 py-2 font-semibold text-slate-900 dark:text-slate-100">{{ r.reference }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ r.returnedAt | date:'short' }}</td>
          <td class="px-3 py-2">
            <span class="inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold"
              [ngClass]="r.isExchange ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'">
              {{ (r.isExchange ? 'returns.tabExchange' : 'returns.tabReturn') | translate }}
            </span>
          </td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ r.customer || '-' }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ r.originalReference || '#' + r.originalSalesOrderId }}</td>
          <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ r.returnValue | money }}</td>
          <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">
            <ng-container *ngIf="r.isExchange; else refundCell">
              <span [ngClass]="r.settlementAmount > 0 ? 'text-red-600 dark:text-red-400' : r.settlementAmount < 0 ? 'text-emerald-600 dark:text-emerald-400' : ''">{{ r.settlementAmount > 0 ? '+' : '' }}{{ r.settlementAmount | money }}</span>
            </ng-container>
            <ng-template #refundCell>{{ r.refundAmount | money }}<span *ngIf="r.debtCreditAmount > 0" class="block text-[11px] text-amber-600 dark:text-amber-400">{{ 'returns.debtCredit' | translate }}: {{ r.debtCreditAmount | money }}</span></ng-template>
          </td>
          <td class="px-3 py-2 text-right font-semibold" [ngClass]="r.lossAmount > 0 ? 'text-red-600 dark:text-red-400' : 'text-slate-400'">{{ r.lossAmount > 0 ? (r.lossAmount | money) : '-' }}</td>
          <td class="px-3 py-2 text-right">
            <cis-row-actions>
              <button class="cis-row-action" type="button" (click)="details.set(r)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                {{ 'common.details' | translate }}
              </button>
            </cis-row-actions>
          </td>
        </tr>
        <tr *ngIf="!filtered().length && !loading()" class="border-t border-slate-100 dark:border-slate-700">
          <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="9">{{ 'returns.empty' | translate }}</td>
        </tr>
        <tr *ngIf="loading()" class="border-t border-slate-100 dark:border-slate-700">
          <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="9">{{ 'common.loading' | translate }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <cis-pager class="mt-3 block" [total]="filtered().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />
  <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>
</div>

<cis-modal [open]="details() !== null" [title]="details()?.reference ?? ''" maxWidthClass="max-w-2xl" (close)="details.set(null)">
  <ng-container *ngIf="details() as r">
    <div class="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
      <div><span class="font-semibold">{{ 'returns.type' | translate }}:</span> {{ (r.isExchange ? 'returns.tabExchange' : 'returns.tabReturn') | translate }}</div>
      <div><span class="font-semibold">{{ 'customers.date' | translate }}:</span> {{ r.returnedAt | date:'medium' }}</div>
      <div><span class="font-semibold">{{ 'common.customer' | translate }}:</span> {{ r.customer || '-' }}</div>
      <div><span class="font-semibold">{{ 'common.seller' | translate }}:</span> {{ r.returnedBy || '-' }}</div>
      <div><span class="font-semibold">{{ 'returns.original' | translate }}:</span> {{ r.originalReference || '#' + r.originalSalesOrderId }}</div>
      <div *ngIf="r.exchangeReference"><span class="font-semibold">{{ 'returns.exchangeSale' | translate }}:</span> {{ r.exchangeReference }}</div>
      <div *ngIf="r.reason" class="col-span-2"><span class="font-semibold">{{ 'returns.reason' | translate }}:</span> {{ r.reason }}</div>
    </div>

    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-xs">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>
            <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">Batch</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.quantity' | translate }}</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.price' | translate }}</th>
            <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.condition' | translate }}</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.loss' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let l of r.lines" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-2"><div class="font-semibold text-slate-900 dark:text-slate-100">{{ l.productName }}</div><div class="text-[11px] text-slate-500">{{ l.sku }}</div></td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.batchNumber || '-' }}</td>
            <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ l.quantity }}</td>
            <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ l.unitPrice | money }}</td>
            <td class="px-3 py-2"><span class="inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold" [ngClass]="l.condition === 'RESALABLE' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300'">{{ ('returns.cond.' + l.condition) | translate }}</span></td>
            <td class="px-3 py-2 text-right" [ngClass]="l.lossAmount > 0 ? 'font-semibold text-red-600 dark:text-red-400' : 'text-slate-400'">{{ l.lossAmount > 0 ? (l.lossAmount | money) : '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-3 grid gap-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-700/50">
      <div class="flex justify-between"><span class="text-slate-600 dark:text-slate-400">{{ 'returns.returnValue' | translate }}</span><span class="font-semibold text-slate-900 dark:text-slate-100">{{ r.returnValue | money }}</span></div>
      <div class="flex justify-between" *ngIf="r.lossAmount > 0"><span class="text-slate-600 dark:text-slate-400">{{ 'returns.loss' | translate }}</span><span class="font-semibold text-red-600 dark:text-red-400">{{ r.lossAmount | money }}</span></div>
      <div class="flex justify-between" *ngIf="r.debtCreditAmount > 0"><span class="text-slate-600 dark:text-slate-400">{{ 'returns.debtCredit' | translate }}</span><span class="font-semibold text-amber-600 dark:text-amber-400">{{ r.debtCreditAmount | money }}</span></div>
      <div class="flex justify-between" *ngIf="r.refundAmount > 0"><span class="text-slate-600 dark:text-slate-400">{{ 'returns.refund' | translate }} ({{ r.refundMethod }})</span><span class="font-semibold text-slate-900 dark:text-slate-100">{{ r.refundAmount | money }}</span></div>
      <div class="flex justify-between" *ngIf="r.isExchange"><span class="text-slate-600 dark:text-slate-400">{{ 'returns.settlement' | translate }}</span>
        <span class="font-bold" [ngClass]="r.settlementAmount > 0 ? 'text-red-600 dark:text-red-400' : r.settlementAmount < 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-slate-100'">
          {{ (r.settlementAmount > 0 ? 'returns.customerPays' : r.settlementAmount < 0 ? 'returns.shopRefunds' : 'returns.evenExchange') | translate }} {{ (r.settlementAmount < 0 ? -r.settlementAmount : r.settlementAmount) | money }}
        </span>
      </div>
    </div>
  </ng-container>
</cis-modal>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReturnsPage, { className: "ReturnsPage", filePath: "app/features/returns/returns.page.ts", lineNumber: 57 });
})();
export {
  ReturnsPage
};
//# sourceMappingURL=chunk-OFLFEKQN.js.map
