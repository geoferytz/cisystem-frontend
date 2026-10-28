import {
  ModalComponent
} from "./chunk-Z6ZNV4D7.js";
import {
  PermissionService
} from "./chunk-MUULZ2RC.js";
import {
  CIS_FORM_IMPORTS,
  CisFormFieldsComponent
} from "./chunk-ELX72Y6T.js";
import "./chunk-O3WQKP2X.js";
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
} from "./chunk-CXEU7F5R.js";
import {
  PagerComponent
} from "./chunk-LNJXT4KE.js";
import {
  MoneyPipe
} from "./chunk-WX6AFSP5.js";
import {
  TranslatePipe,
  TranslationService
} from "./chunk-DPFPPFWE.js";
import {
  CommonModule,
  Component,
  DatePipe,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F3YP4G7X.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/customers/customers.page.ts
var _c0 = () => ["week", "month", "year", "all"];
function CustomersPage_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function CustomersPage_button_50_Template_button_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPeriod(p_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.period() === p_r2 ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow" : "text-slate-500 dark:text-slate-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "customers.period." + p_r2));
  }
}
function CustomersPage_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function CustomersPage_button_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCreate());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind1(2, 1, "customers.new"), " ");
  }
}
function CustomersPage_ng_container_77_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.address);
  }
}
function CustomersPage_ng_container_77_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "money");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.customerStats(c_r6).debt));
  }
}
function CustomersPage_ng_container_77_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function CustomersPage_ng_container_77_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function CustomersPage_ng_container_77_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const c_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPayFromRow(c_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "customers.addPayment"), " ");
  }
}
function CustomersPage_ng_container_77_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function CustomersPage_ng_container_77_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const c_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEdit(c_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 55);
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
function CustomersPage_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 37)(2, "td", 38)(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CustomersPage_ng_container_77_div_5_Template, 2, 1, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 42);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 43);
    \u0275\u0275template(14, CustomersPage_ng_container_77_span_14_Template, 3, 3, "span", 44)(15, CustomersPage_ng_container_77_span_15_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 46)(17, "cis-row-actions")(18, "button", 47);
    \u0275\u0275listener("click", function CustomersPage_ng_container_77_Template_button_click_18_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDetails(c_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 48);
    \u0275\u0275element(20, "path", 49)(21, "circle", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, CustomersPage_ng_container_77_button_24_Template, 5, 3, "button", 51)(25, CustomersPage_ng_container_77_button_25_Template, 5, 3, "button", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r6.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.phone || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.customerStats(c_r6).orderCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, ctx_r2.customerStats(c_r6).totalPurchases));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.customerStats(c_r6).debt > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.customerStats(c_r6).debt <= 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 12, "common.details"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.customerStats(c_r6).debt > 0 && ctx_r2.perm.canEdit("CUSTOMERS"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.perm.canEdit("CUSTOMERS"));
  }
}
function CustomersPage_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "customers.empty"));
  }
}
function CustomersPage_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.loading"));
  }
}
function CustomersPage_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function CustomersPage_ng_container_101_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "customers.email"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r9.email);
  }
}
function CustomersPage_ng_container_101_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "customers.address"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r9.address);
  }
}
function CustomersPage_ng_container_101_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function CustomersPage_ng_container_101_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPay());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "customers.addPayment"), " ");
  }
}
function CustomersPage_ng_container_101_form_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 70);
    \u0275\u0275listener("ngSubmit", function CustomersPage_ng_container_101_form_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.savePayment());
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275element(2, "cis-form-fields", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "button", 72);
    \u0275\u0275listener("click", function CustomersPage_ng_container_101_form_27_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.payOpen.set(false));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 73);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.paymentForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("form", ctx_r2.paymentForm)("fields", ctx_r2.paymentFields);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.paying());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "common.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.paying());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.paying() ? \u0275\u0275pipeBind1(9, 9, "common.loading") : \u0275\u0275pipeBind1(10, 11, "customers.savePayment"), " ");
  }
}
function CustomersPage_ng_container_101_div_28_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 78);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, p_r12.paidAt, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", p_r12.salesOrderId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, p_r12.amount));
  }
}
function CustomersPage_ng_container_101_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 76)(5, "table", 66)(6, "thead", 19)(7, "tr")(8, "th", 67);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 67);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 68);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, CustomersPage_ng_container_101_div_28_tr_18_Template, 9, 8, "tr", 77);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "customers.paymentHistory"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "customers.date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "customers.order"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "customers.amount"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.detailsPayments());
  }
}
function CustomersPage_ng_container_101_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div")(2, "span", 59);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "span", 59);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "span", 59);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "span", 59);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r13 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 8, "customers.date"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 10, s_r13.soldAt, "yyyy-MM-dd"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 13, "common.seller"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r13.soldBy || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 15, "customers.method"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r13.paymentMethod || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 17, "customers.received"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 19, s_r13.amountReceived ?? ctx_r2.orderNet(s_r13)));
  }
}
function CustomersPage_ng_container_101_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 80);
    \u0275\u0275listener("click", function CustomersPage_ng_container_101_tr_50_Template_tr_click_0_listener() {
      const o_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectSale(o_r15));
    });
    \u0275\u0275elementStart(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 42);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 81);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 82);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.selectedSale() === o_r15 ? "bg-pink-50 dark:bg-pink-900/20" : "hover:bg-slate-50 dark:hover:bg-slate-700/40");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, o_r15.soldAt, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r15.paymentMethod || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, ctx_r2.orderNet(o_r15)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, o_r15.amountReceived ?? ctx_r2.orderNet(o_r15)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.orderDebt(o_r15) > 0 ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, ctx_r2.orderDebt(o_r15)));
  }
}
function CustomersPage_ng_container_101_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "customers.noSales"));
  }
}
function CustomersPage_ng_container_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58)(2, "div")(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "span", 59);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CustomersPage_ng_container_101_div_12_Template, 5, 4, "div", 34)(13, CustomersPage_ng_container_101_div_13_Template, 5, 4, "div", 34);
    \u0275\u0275elementStart(14, "div")(15, "span", 59);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 60);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 61)(22, "span", 62);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, CustomersPage_ng_container_101_button_26_Template, 3, 3, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, CustomersPage_ng_container_101_form_27_Template, 11, 13, "form", 63)(28, CustomersPage_ng_container_101_div_28_Template, 19, 13, "div", 64)(29, CustomersPage_ng_container_101_div_29_Template, 23, 21, "div", 65);
    \u0275\u0275elementStart(30, "div", 17)(31, "table", 66)(32, "thead", 19)(33, "tr")(34, "th", 67);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 67);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 68);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 68);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 68);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275template(50, CustomersPage_ng_container_101_tr_50_Template, 15, 16, "tr", 69)(51, CustomersPage_ng_container_101_tr_51_Template, 4, 3, "tr", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 22, "customers.name"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r9.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 24, "customers.phone"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r9.phone || "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r9.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r9.address);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 26, "customers.debt"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.customerStats(c_r9).debt > 0 ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 28, ctx_r2.customerStats(c_r9).debt));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.customerStats(c_r9).debt > 0 ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300" : "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.customerStats(c_r9).debt > 0 ? \u0275\u0275pipeBind1(24, 30, "customers.tabDebtors") : \u0275\u0275pipeBind1(25, 32, "customers.paidBadge"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.customerStats(c_r9).debt > 0 && ctx_r2.perm.canEdit("CUSTOMERS"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.payOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailsPayments().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedSale());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 34, "customers.date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 36, "customers.method"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 38, "common.total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 40, "customers.received"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 42, "customers.debt"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.detailsOrders());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.detailsOrders().length);
  }
}
var CustomersPage = class _CustomersPage {
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  customers = signal([], ...ngDevMode ? [{ debugName: "customers" }] : []);
  orders = signal([], ...ngDevMode ? [{ debugName: "orders" }] : []);
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  activeTab = signal("all", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  period = signal("month", ...ngDevMode ? [{ debugName: "period" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  createOpen = signal(false, ...ngDevMode ? [{ debugName: "createOpen" }] : []);
  editingCustomerId = signal(null, ...ngDevMode ? [{ debugName: "editingCustomerId" }] : []);
  detailsCustomer = signal(null, ...ngDevMode ? [{ debugName: "detailsCustomer" }] : []);
  selectedSale = signal(null, ...ngDevMode ? [{ debugName: "selectedSale" }] : []);
  detailsPayments = signal([], ...ngDevMode ? [{ debugName: "detailsPayments" }] : []);
  payOpen = signal(false, ...ngDevMode ? [{ debugName: "payOpen" }] : []);
  paying = signal(false, ...ngDevMode ? [{ debugName: "paying" }] : []);
  fb = inject(FormBuilder);
  gql = inject(GraphqlService);
  t = inject(TranslationService);
  customerForm = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(200)]],
    phone: ["", [Validators.maxLength(40)]],
    email: ["", [Validators.maxLength(320)]],
    address: ["", [Validators.maxLength(500)]]
  });
  customerTopFields = [
    { key: "name", label: "customers.name", required: true, errorMessage: "customers.nameRequired", maxlength: 200 }
  ];
  customerMidFields = [
    { key: "phone", label: "customers.phone", type: "tel", maxlength: 40 },
    { key: "email", label: "customers.email", type: "email", maxlength: 320 }
  ];
  customerBottomFields = [
    { key: "address", label: "customers.address", maxlength: 500 }
  ];
  paymentForm = this.fb.group({
    amount: [null, [Validators.required, Validators.min(0.01)]],
    paidAt: ["", [Validators.required]]
  });
  paymentFields = [
    {
      key: "amount",
      label: "customers.paymentAmount",
      type: "currency",
      required: true,
      min: 0.01,
      hint: () => {
        const c = this.detailsCustomer();
        return c ? `${this.t.translate("customers.debt")}: ${this.fmtMoney(this.customerStats(c).debt)}` : "";
      }
    },
    { key: "paidAt", label: "customers.paymentDate", type: "date", required: true }
  ];
  fmtMoney(v) {
    return `${new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v)} TSH`;
  }
  inPeriod(soldAt, period) {
    if (period === "all")
      return true;
    const d = new Date(soldAt);
    if (isNaN(d.getTime()))
      return false;
    const now = /* @__PURE__ */ new Date();
    if (period === "year")
      return d.getFullYear() === now.getFullYear();
    if (period === "month")
      return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
    const day = now.getDay();
    const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (day + 6) % 7);
    return d >= monday && d <= now;
  }
  orderNet(o) {
    const lines = (o.lines ?? []).reduce((s, l) => s + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
    return Math.max(0, lines - Number(o.discount ?? 0));
  }
  orderDebt(o) {
    const net = this.orderNet(o);
    const received = o.amountReceived == null ? net : Math.max(0, Number(o.amountReceived));
    return Math.max(0, net - received);
  }
  ordersFor(customerId) {
    return this.orders().filter((o) => String(o.customerId ?? "") === String(customerId));
  }
  customerStats(c) {
    const all = this.ordersFor(c.id);
    const inPeriod = all.filter((o) => this.inPeriod(o.soldAt, this.period()));
    return {
      totalPurchases: inPeriod.reduce((s, o) => s + this.orderNet(o), 0),
      orderCount: inPeriod.length,
      lifetimeOrders: all.length,
      debt: all.reduce((s, o) => s + this.orderDebt(o), 0)
    };
  }
  filteredCustomers = computed(() => {
    const q = this.query().trim().toLowerCase();
    let list = this.customers();
    if (q) {
      list = list.filter((c) => (c.name || "").toLowerCase().includes(q) || (c.phone || "").toLowerCase().includes(q) || (c.email || "").toLowerCase().includes(q));
    }
    const tab = this.activeTab();
    if (tab === "debtors")
      return list.filter((c) => this.customerStats(c).debt > 0);
    if (tab === "paid")
      return list.filter((c) => this.customerStats(c).lifetimeOrders > 0 && this.customerStats(c).debt <= 0);
    return list;
  }, ...ngDevMode ? [{ debugName: "filteredCustomers" }] : []);
  displayedCustomers = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.filteredCustomers().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedCustomers" }] : []);
  statTotalCustomers = computed(() => this.customers().length, ...ngDevMode ? [{ debugName: "statTotalCustomers" }] : []);
  statDebtors = computed(() => this.customers().filter((c) => this.customerStats(c).debt > 0).length, ...ngDevMode ? [{ debugName: "statDebtors" }] : []);
  statTotalDebt = computed(() => this.customers().reduce((s, c) => s + this.customerStats(c).debt, 0), ...ngDevMode ? [{ debugName: "statTotalDebt" }] : []);
  statFrequentBuyers = computed(() => this.customers().filter((c) => this.customerStats(c).lifetimeOrders >= 2).length, ...ngDevMode ? [{ debugName: "statFrequentBuyers" }] : []);
  statPaidCustomers = computed(() => this.customers().filter((c) => this.customerStats(c).lifetimeOrders > 0 && this.customerStats(c).debt <= 0).length, ...ngDevMode ? [{ debugName: "statPaidCustomers" }] : []);
  statPeriodPurchases = computed(() => this.orders().filter((o) => this.inPeriod(o.soldAt, this.period())).reduce((s, o) => s + this.orderNet(o), 0), ...ngDevMode ? [{ debugName: "statPeriodPurchases" }] : []);
  constructor() {
    this.perm.load();
    this.refresh();
  }
  refresh() {
    this.loading.set(true);
    this.error.set(null);
    forkJoin({
      customers: this.gql.request("query Customers($query: String) { customers(query: $query) { id name phone email address createdAt } }", { query: null }),
      orders: this.gql.request("query SalesOrders($branch: String) { salesOrders(branch: $branch) { id customer customerId soldAt soldBy discount amountReceived paymentMethod lines { quantity unitPrice } } }", { branch: null })
    }).subscribe({
      next: (res) => {
        this.customers.set(res.customers.customers ?? []);
        this.orders.set((res.orders.salesOrders ?? []).slice().sort((a, b) => String(b.soldAt).localeCompare(String(a.soldAt))));
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load customers");
        this.loading.set(false);
      }
    });
  }
  onQueryInput(value) {
    this.query.set(value);
    this.pageIndex.set(0);
  }
  setTab(tab) {
    this.activeTab.set(tab);
    this.pageIndex.set(0);
  }
  setPeriod(p) {
    this.period.set(p);
  }
  toggleDetails(c) {
    this.detailsCustomer.set(c);
    this.payOpen.set(false);
    this.detailsPayments.set([]);
    this.selectedSale.set(this.ordersFor(c.id)[0] ?? null);
    this.paymentForm.reset({ amount: null, paidAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) });
    this.gql.request("query CustomerPayments($customerId: ID!) { customerPayments(customerId: $customerId) { id salesOrderId amount paidAt } }", { customerId: c.id }).subscribe({
      next: (res) => this.detailsPayments.set(res.customerPayments ?? []),
      error: () => this.detailsPayments.set([])
    });
  }
  closeDetails() {
    this.detailsCustomer.set(null);
    this.selectedSale.set(null);
    this.detailsPayments.set([]);
    this.payOpen.set(false);
  }
  selectSale(o) {
    this.selectedSale.set(o);
  }
  openPayFromRow(c) {
    this.toggleDetails(c);
    this.openPay();
  }
  openPay() {
    const c = this.detailsCustomer();
    if (!c)
      return;
    const debt = this.customerStats(c).debt;
    this.paymentForm.reset({ amount: debt > 0 ? Math.round(debt * 100) / 100 : null, paidAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) });
    this.payOpen.set(true);
  }
  savePayment() {
    const c = this.detailsCustomer();
    if (!c)
      return;
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }
    const v = this.paymentForm.getRawValue();
    const debt = this.customerStats(c).debt;
    if (v.amount == null || v.amount <= 0 || v.amount > debt + 1e-3) {
      this.error.set("Payment amount must be greater than zero and not exceed the outstanding debt");
      return;
    }
    this.paying.set(true);
    const paidAtIso = (/* @__PURE__ */ new Date(`${v.paidAt}T12:00:00`)).toISOString();
    this.gql.request("mutation RecordCustomerPayment($customerId: ID!, $amount: Float!, $paidAt: String) { recordCustomerPayment(customerId: $customerId, amount: $amount, paidAt: $paidAt) { id salesOrderId amount paidAt } }", { customerId: c.id, amount: v.amount, paidAt: paidAtIso }).subscribe({
      next: () => {
        this.paying.set(false);
        this.payOpen.set(false);
        this.refreshOrdersAndPayments(c);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to record payment");
        this.paying.set(false);
      }
    });
  }
  refreshOrdersAndPayments(c) {
    forkJoin({
      orders: this.gql.request("query SalesOrders($branch: String) { salesOrders(branch: $branch) { id customer customerId soldAt soldBy discount amountReceived paymentMethod lines { quantity unitPrice } } }", { branch: null }),
      payments: this.gql.request("query CustomerPayments($customerId: ID!) { customerPayments(customerId: $customerId) { id salesOrderId amount paidAt } }", { customerId: c.id })
    }).subscribe({
      next: (res) => {
        this.orders.set((res.orders.salesOrders ?? []).slice().sort((a, b) => String(b.soldAt).localeCompare(String(a.soldAt))));
        this.detailsPayments.set(res.payments.customerPayments ?? []);
        const s = this.selectedSale();
        if (s) {
          this.selectedSale.set(this.ordersFor(c.id).find((o) => String(o.id) === String(s.id)) ?? null);
        }
      }
    });
  }
  detailsOrders() {
    const c = this.detailsCustomer();
    return c ? this.ordersFor(c.id).slice(0, 10) : [];
  }
  openCreate() {
    this.error.set(null);
    this.editingCustomerId.set(null);
    this.customerForm.reset({ name: "", phone: "", email: "", address: "" });
    this.createOpen.set(true);
  }
  openEdit(c) {
    this.error.set(null);
    this.editingCustomerId.set(String(c.id));
    this.customerForm.reset({
      name: c.name ?? "",
      phone: c.phone ?? "",
      email: c.email ?? "",
      address: c.address ?? ""
    });
    this.createOpen.set(true);
  }
  closeCreate() {
    this.createOpen.set(false);
    this.editingCustomerId.set(null);
  }
  saveCustomer() {
    if (this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      return;
    }
    const v = this.customerForm.getRawValue();
    const editingId = this.editingCustomerId();
    this.loading.set(true);
    if (editingId) {
      this.gql.request("mutation UpdateCustomer($input: UpdateCustomerInput!) { updateCustomer(input: $input) { id name phone email address createdAt } }", { input: { id: editingId, name: v.name, phone: v.phone || null, email: v.email || null, address: v.address || null } }).subscribe({
        next: () => {
          this.loading.set(false);
          this.closeCreate();
          this.refresh();
        },
        error: (e) => {
          this.loading.set(false);
          this.error.set(e instanceof Error ? e.message : "Failed to update customer");
        }
      });
      return;
    }
    this.gql.request("mutation CreateCustomer($input: CreateCustomerInput!) { createCustomer(input: $input) { id name phone email address createdAt } }", { input: { name: v.name, phone: v.phone || null, email: v.email || null, address: v.address || null } }).subscribe({
      next: () => {
        this.loading.set(false);
        this.closeCreate();
        this.refresh();
      },
      error: (e) => {
        this.loading.set(false);
        this.error.set(e instanceof Error ? e.message : "Failed to create customer");
      }
    });
  }
  static \u0275fac = function CustomersPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomersPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersPage, selectors: [["cis-customers-page"]], decls: 102, vars: 99, consts: [[1, "mb-4", "flex", "items-center", "justify-between"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2", "lg:grid-cols-4", "cis-stat-grid"], [1, "rounded-xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-slate-500", "dark:text-slate-400"], [1, "mt-2", "text-2xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], ["data-tone", "red", 1, "rounded-xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-xs", "font-semibold", "text-red-600", "dark:text-red-400"], ["data-tone", "green", 1, "rounded-xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "mt-4", "rounded-xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "flex", "gap-1", "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "p-1"], ["type", "button", 1, "rounded-lg", "px-3", "py-1.5", "text-xs", "font-semibold", 3, "click", "ngClass"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["type", "button", "class", "rounded-lg px-2.5 py-1.5 text-[11px] font-semibold", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "text", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "w-56", 3, "input", "value", "placeholder"], ["type", "button", "class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600", 3, "click", 4, "ngIf"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngIf"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["maxWidthClass", "max-w-lg", 3, "close", "open", "title"], [1, "grid", "gap-3", 3, "ngSubmit", "formGroup"], [3, "form", "fields"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "mt-2", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", 3, "disabled"], ["maxWidthClass", "max-w-2xl", 3, "close", "open", "title"], [4, "ngIf"], ["type", "button", 1, "rounded-lg", "px-2.5", "py-1.5", "text-[11px]", "font-semibold", 3, "click", "ngClass"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", 3, "click"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2"], [1, "font-semibold", "text-slate-900", "dark:text-slate-100"], ["class", "text-xs text-slate-500 dark:text-slate-400", 4, "ngIf"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold"], ["class", "text-red-600 dark:text-red-400", 4, "ngIf"], ["class", "text-emerald-600 dark:text-emerald-400", 4, "ngIf"], [1, "px-3", "py-2", "text-right"], ["type", "button", 1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "cis-row-action", "type", "button", 3, "click", 4, "ngIf"], [1, "text-red-600", "dark:text-red-400"], [1, "text-emerald-600", "dark:text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2m0-8v2m0 10v2M20 12a8 8 0 11-16 0 8 8 0 0116 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["colspan", "6", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "grid", "grid-cols-2", "gap-x-6", "gap-y-1", "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "font-semibold"], [3, "ngClass"], [1, "mt-3", "flex", "items-center", "justify-between", "gap-2"], [1, "inline-flex", "items-center", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], ["class", "mt-3 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], ["class", "mt-3 grid grid-cols-2 gap-x-6 gap-y-1 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 dark:bg-slate-700/50 dark:text-slate-400", 4, "ngIf"], [1, "w-full", "border-collapse", "text-xs"], [1, "px-3", "py-2", "text-left", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "cursor-pointer border-t border-slate-100 dark:border-slate-700", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mt-3", "grid", "gap-3", "rounded-xl", "border", "border-slate-200", "bg-slate-50", "p-3", "dark:border-slate-600", "dark:bg-slate-700/50", 3, "ngSubmit", "formGroup"], [1, "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click", "disabled"], ["type", "submit", 1, "rounded-xl", "bg-emerald-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-emerald-600", 3, "disabled"], [1, "mt-3"], [1, "mb-1", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], [1, "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-emerald-600", "dark:text-emerald-400"], [1, "mt-3", "grid", "grid-cols-2", "gap-x-6", "gap-y-1", "rounded-xl", "bg-slate-50", "p-3", "text-xs", "text-slate-600", "dark:bg-slate-700/50", "dark:text-slate-400"], [1, "cursor-pointer", "border-t", "border-slate-100", "dark:border-slate-700", 3, "click", "ngClass"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", 3, "ngClass"], ["colspan", "5", 1, "px-3", "py-4", "text-center", "text-slate-500", "dark:text-slate-400"]], template: function CustomersPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 1);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 2)(9, "div", 3)(10, "div", 4);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 5);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 6)(16, "div", 4);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 5);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 7);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 3)(25, "div", 4);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 5);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 8)(31, "div", 4);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 5);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 9)(37, "div", 10)(38, "div", 11)(39, "button", 12);
      \u0275\u0275listener("click", function CustomersPage_Template_button_click_39_listener() {
        return ctx.setTab("all");
      });
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 12);
      \u0275\u0275listener("click", function CustomersPage_Template_button_click_42_listener() {
        return ctx.setTab("debtors");
      });
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 12);
      \u0275\u0275listener("click", function CustomersPage_Template_button_click_45_listener() {
        return ctx.setTab("paid");
      });
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 13)(49, "div", 11);
      \u0275\u0275template(50, CustomersPage_button_50_Template, 3, 4, "button", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "input", 15);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275listener("input", function CustomersPage_Template_input_input_51_listener($event) {
        return ctx.onQueryInput($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(53, CustomersPage_button_53_Template, 3, 3, "button", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 17)(55, "table", 18)(56, "thead", 19)(57, "tr")(58, "th", 20);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 20);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 21);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 21);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 21);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 21);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "tbody");
      \u0275\u0275template(77, CustomersPage_ng_container_77_Template, 26, 14, "ng-container", 22)(78, CustomersPage_tr_78_Template, 4, 3, "tr", 23)(79, CustomersPage_tr_79_Template, 4, 3, "tr", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "cis-pager", 24);
      \u0275\u0275twoWayListener("pageSizeChange", function CustomersPage_Template_cis_pager_pageSizeChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function CustomersPage_Template_cis_pager_pageIndexChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, CustomersPage_div_81_Template, 2, 1, "div", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "cis-modal", 26);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275listener("close", function CustomersPage_Template_cis_modal_close_82_listener() {
        return ctx.closeCreate();
      });
      \u0275\u0275elementStart(85, "form", 27);
      \u0275\u0275listener("ngSubmit", function CustomersPage_Template_form_ngSubmit_85_listener() {
        return ctx.saveCustomer();
      });
      \u0275\u0275element(86, "cis-form-fields", 28);
      \u0275\u0275elementStart(87, "div", 29);
      \u0275\u0275element(88, "cis-form-fields", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "cis-form-fields", 28);
      \u0275\u0275elementStart(90, "div", 30)(91, "button", 31);
      \u0275\u0275listener("click", function CustomersPage_Template_button_click_91_listener() {
        return ctx.closeCreate();
      });
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "button", 32);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(98, "cis-modal", 33);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275listener("close", function CustomersPage_Template_cis_modal_close_98_listener() {
        return ctx.closeDetails();
      });
      \u0275\u0275template(101, CustomersPage_ng_container_101_Template, 52, 44, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 50, "customers.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 52, "customers.subtitle"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 54, "customers.total"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statTotalCustomers());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 56, "customers.debtors"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statDebtors());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 58, ctx.statTotalDebt()));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 60, "customers.frequent"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statFrequentBuyers());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 62, "customers.paidUp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.statPaidCustomers());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.activeTab() === "all" ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow" : "text-slate-500 dark:text-slate-400");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 64, "customers.tabAll"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeTab() === "debtors" ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow" : "text-slate-500 dark:text-slate-400");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 66, "customers.tabDebtors"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.activeTab() === "paid" ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow" : "text-slate-500 dark:text-slate-400");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 68, "customers.tabPaid"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(98, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(52, 70, "customers.search")))("value", ctx.query());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("CUSTOMERS"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 72, "customers.name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 74, "customers.phone"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 76, "customers.orders"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 78, "customers.purchases"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 80, "customers.debt"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 82, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedCustomers());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.filteredCustomers().length && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("total", ctx.filteredCustomers().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.createOpen())("title", ctx.editingCustomerId() ? \u0275\u0275pipeBind1(83, 84, "customers.edit") : \u0275\u0275pipeBind1(84, 86, "customers.new"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.customerForm);
      \u0275\u0275advance();
      \u0275\u0275property("form", ctx.customerForm)("fields", ctx.customerTopFields);
      \u0275\u0275advance(2);
      \u0275\u0275property("form", ctx.customerForm)("fields", ctx.customerMidFields);
      \u0275\u0275advance();
      \u0275\u0275property("form", ctx.customerForm)("fields", ctx.customerBottomFields);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 88, "common.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editingCustomerId() ? \u0275\u0275pipeBind1(96, 90, "common.save") : \u0275\u0275pipeBind1(97, 92, "common.create"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("open", ctx.detailsCustomer() !== null)("title", ctx.payOpen() ? \u0275\u0275pipeBind1(99, 94, "common.payDebt") : \u0275\u0275pipeBind1(100, 96, "customers.recentSales"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.detailsCustomer());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, RowActionsMenuComponent, PagerComponent, ModalComponent, CisFormFieldsComponent, DatePipe, MoneyPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=customers.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomersPage, [{
    type: Component,
    args: [{ selector: "cis-customers-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, MoneyPipe, TranslatePipe, RowActionsMenuComponent, PagerComponent, ModalComponent, CIS_FORM_IMPORTS], template: `<div class="mb-4 flex items-center justify-between">
  <div>
    <h2>{{ 'customers.title' | translate }}</h2>
    <p class="text-xs text-slate-500 dark:text-slate-400">{{ 'customers.subtitle' | translate }}</p>
  </div>
</div>

<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 cis-stat-grid">
  <div class="rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700">
    <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'customers.total' | translate }}</div>
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ statTotalCustomers() }}</div>
  </div>
  <div class="rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700" data-tone="red">
    <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'customers.debtors' | translate }}</div>
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ statDebtors() }}</div>
    <div class="text-xs font-semibold text-red-600 dark:text-red-400">{{ statTotalDebt() | money }}</div>
  </div>
  <div class="rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700">
    <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'customers.frequent' | translate }}</div>
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ statFrequentBuyers() }}</div>
  </div>
  <div class="rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700" data-tone="green">
    <div class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'customers.paidUp' | translate }}</div>
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ statPaidCustomers() }}</div>
  </div>
</div>

<div class="mt-4 rounded-xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-100 dark:ring-slate-700">
  <div class="flex flex-wrap items-center justify-between gap-3">
    <div class="flex gap-1 rounded-xl bg-slate-100 dark:bg-slate-700 p-1">
      <button
        type="button"
        class="rounded-lg px-3 py-1.5 text-xs font-semibold"
        [ngClass]="activeTab() === 'all' ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow' : 'text-slate-500 dark:text-slate-400'"
        (click)="setTab('all')"
      >{{ 'customers.tabAll' | translate }}</button>
      <button
        type="button"
        class="rounded-lg px-3 py-1.5 text-xs font-semibold"
        [ngClass]="activeTab() === 'debtors' ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow' : 'text-slate-500 dark:text-slate-400'"
        (click)="setTab('debtors')"
      >{{ 'customers.tabDebtors' | translate }}</button>
      <button
        type="button"
        class="rounded-lg px-3 py-1.5 text-xs font-semibold"
        [ngClass]="activeTab() === 'paid' ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow' : 'text-slate-500 dark:text-slate-400'"
        (click)="setTab('paid')"
      >{{ 'customers.tabPaid' | translate }}</button>
    </div>

    <div class="flex flex-wrap items-center gap-3">
      <div class="flex gap-1 rounded-xl bg-slate-100 dark:bg-slate-700 p-1">
        <button *ngFor="let p of ['week', 'month', 'year', 'all']" type="button"
          class="rounded-lg px-2.5 py-1.5 text-[11px] font-semibold"
          [ngClass]="period() === p ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow' : 'text-slate-500 dark:text-slate-400'"
          (click)="setPeriod($any(p))"
        >{{ ('customers.period.' + p) | translate }}</button>
      </div>
      <input
        class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 w-56"
        type="text"
        [value]="query()"
        (input)="onQueryInput($any($event.target).value)"
        placeholder="{{ 'customers.search' | translate }}"
      />
      <button
        type="button"
        class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
        (click)="openCreate()"
        *ngIf="perm.canCreate('CUSTOMERS')"
      >
        + {{ 'customers.new' | translate }}
      </button>
    </div>
  </div>

  <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
    <table class="w-full border-collapse text-sm">
      <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.name' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.phone' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.orders' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.purchases' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.debt' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let c of displayedCustomers()">
          <tr class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-2">
              <div class="font-semibold text-slate-900 dark:text-slate-100">{{ c.name }}</div>
              <div class="text-xs text-slate-500 dark:text-slate-400" *ngIf="c.address">{{ c.address }}</div>
            </td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ c.phone || '-' }}</td>
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ customerStats(c).orderCount }}</td>
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ customerStats(c).totalPurchases | money }}</td>
            <td class="px-3 py-2 text-right font-semibold">
              <span *ngIf="customerStats(c).debt > 0" class="text-red-600 dark:text-red-400">{{ customerStats(c).debt | money }}</span>
              <span *ngIf="customerStats(c).debt <= 0" class="text-emerald-600 dark:text-emerald-400">-</span>
            </td>
            <td class="px-3 py-2 text-right">
              <cis-row-actions>
                <button class="cis-row-action" type="button" (click)="toggleDetails(c)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  {{ 'common.details' | translate }}
                </button>
                <button *ngIf="customerStats(c).debt > 0 && perm.canEdit('CUSTOMERS')" class="cis-row-action" type="button" (click)="openPayFromRow(c)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2m0-8v2m0 10v2M20 12a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
                  {{ 'customers.addPayment' | translate }}
                </button>
                <button *ngIf="perm.canEdit('CUSTOMERS')" class="cis-row-action" type="button" (click)="openEdit(c)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  {{ 'common.edit' | translate }}
                </button>
              </cis-row-actions>
            </td>
          </tr>

        </ng-container>

        <tr *ngIf="!filteredCustomers().length && !loading()" class="border-t border-slate-100 dark:border-slate-700">
          <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="6">{{ 'customers.empty' | translate }}</td>
        </tr>
        <tr *ngIf="loading()" class="border-t border-slate-100 dark:border-slate-700">
          <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="6">{{ 'common.loading' | translate }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <cis-pager class="mt-3 block" [total]="filteredCustomers().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />

  <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>
</div>

<cis-modal
  [open]="createOpen()"
  [title]="editingCustomerId() ? ('customers.edit' | translate) : ('customers.new' | translate)"
  maxWidthClass="max-w-lg"
  (close)="closeCreate()"
>
  <form class="grid gap-3" [formGroup]="customerForm" (ngSubmit)="saveCustomer()">
    <cis-form-fields [form]="customerForm" [fields]="customerTopFields" />
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <cis-form-fields [form]="customerForm" [fields]="customerMidFields" />
    </div>
    <cis-form-fields [form]="customerForm" [fields]="customerBottomFields" />

    <div class="mt-2 flex items-center justify-end gap-2">
      <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closeCreate()">{{ 'common.cancel' | translate }}</button>
      <button type="submit" class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600" [disabled]="loading()">
        {{ editingCustomerId() ? ('common.save' | translate) : ('common.create' | translate) }}
      </button>
    </div>
  </form>
</cis-modal>

<cis-modal
  [open]="detailsCustomer() !== null"
  [title]="payOpen() ? ('common.payDebt' | translate) : ('customers.recentSales' | translate)"
  maxWidthClass="max-w-2xl"
  (close)="closeDetails()"
>
  <ng-container *ngIf="detailsCustomer() as c">
    <div class="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
      <div><span class="font-semibold">{{ 'customers.name' | translate }}:</span> {{ c.name }}</div>
      <div><span class="font-semibold">{{ 'customers.phone' | translate }}:</span> {{ c.phone || '-' }}</div>
      <div *ngIf="c.email"><span class="font-semibold">{{ 'customers.email' | translate }}:</span> {{ c.email }}</div>
      <div *ngIf="c.address"><span class="font-semibold">{{ 'customers.address' | translate }}:</span> {{ c.address }}</div>
      <div><span class="font-semibold">{{ 'customers.debt' | translate }}:</span> <span [ngClass]="customerStats(c).debt > 0 ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'">{{ customerStats(c).debt | money }}</span></div>
    </div>

    <div class="mt-3 flex items-center justify-between gap-2">
      <span
        class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
        [ngClass]="customerStats(c).debt > 0 ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'"
      >
        {{ customerStats(c).debt > 0 ? ('customers.tabDebtors' | translate) : ('customers.paidBadge' | translate) }}
      </span>
      <button
        *ngIf="customerStats(c).debt > 0 && perm.canEdit('CUSTOMERS')"
        type="button"
        class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
        (click)="openPay()"
      >
        {{ 'customers.addPayment' | translate }}
      </button>
    </div>

    <form *ngIf="payOpen()" class="mt-3 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50" [formGroup]="paymentForm" (ngSubmit)="savePayment()">
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <cis-form-fields [form]="paymentForm" [fields]="paymentFields" />
      </div>
      <div class="flex items-center justify-end gap-2">
        <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="payOpen.set(false)" [disabled]="paying()">{{ 'common.cancel' | translate }}</button>
        <button type="submit" class="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600" [disabled]="paying()">
          {{ paying() ? ('common.loading' | translate) : ('customers.savePayment' | translate) }}
        </button>
      </div>
    </form>

    <div *ngIf="detailsPayments().length" class="mt-3">
      <div class="mb-1 text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'customers.paymentHistory' | translate }}</div>
      <div class="overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
        <table class="w-full border-collapse text-xs">
          <thead class="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.date' | translate }}</th>
              <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.order' | translate }}</th>
              <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.amount' | translate }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of detailsPayments()" class="border-t border-slate-100 dark:border-slate-700">
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ p.paidAt | date:'yyyy-MM-dd' }}</td>
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">#{{ p.salesOrderId }}</td>
              <td class="px-3 py-2 text-right font-semibold text-emerald-600 dark:text-emerald-400">{{ p.amount | money }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div *ngIf="selectedSale() as s" class="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 dark:bg-slate-700/50 dark:text-slate-400">
      <div><span class="font-semibold">{{ 'customers.date' | translate }}:</span> {{ s.soldAt | date:'yyyy-MM-dd' }}</div>
      <div><span class="font-semibold">{{ 'common.seller' | translate }}:</span> {{ s.soldBy || '-' }}</div>
      <div><span class="font-semibold">{{ 'customers.method' | translate }}:</span> {{ s.paymentMethod || '-' }}</div>
      <div><span class="font-semibold">{{ 'customers.received' | translate }}:</span> {{ (s.amountReceived ?? orderNet(s)) | money }}</div>
    </div>

    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-xs">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.date' | translate }}</th>
            <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.method' | translate }}</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.total' | translate }}</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.received' | translate }}</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'customers.debt' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let o of detailsOrders()" class="cursor-pointer border-t border-slate-100 dark:border-slate-700" [ngClass]="selectedSale() === o ? 'bg-pink-50 dark:bg-pink-900/20' : 'hover:bg-slate-50 dark:hover:bg-slate-700/40'" (click)="selectSale(o)">
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ o.soldAt | date:'yyyy-MM-dd' }}</td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ o.paymentMethod || '-' }}</td>
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ orderNet(o) | money }}</td>
            <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ (o.amountReceived ?? orderNet(o)) | money }}</td>
            <td class="px-3 py-2 text-right font-semibold" [ngClass]="orderDebt(o) > 0 ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'">{{ orderDebt(o) | money }}</td>
          </tr>
          <tr *ngIf="!detailsOrders().length">
            <td class="px-3 py-4 text-center text-slate-500 dark:text-slate-400" colspan="5">{{ 'customers.noSales' | translate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </ng-container>
</cis-modal>
`, styles: ["/* src/app/features/customers/customers.page.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=customers.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersPage, { className: "CustomersPage", filePath: "app/features/customers/customers.page.ts", lineNumber: 51 });
})();
export {
  CustomersPage
};
//# sourceMappingURL=chunk-MBSOH2WB.js.map
