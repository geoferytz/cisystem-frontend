import {
  ConfirmDialogComponent
} from "./chunk-BBLDYVLB.js";
import "./chunk-TPFUJ5RZ.js";
import {
  PermissionService
} from "./chunk-B2QE76QF.js";
import {
  RowActionsMenuComponent
} from "./chunk-TCOZMI6S.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-P24S6A7J.js";
import {
  PagerComponent
} from "./chunk-QINOI6LA.js";
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
  ɵɵariaProperty,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceHTML,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZFAUJJU2.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/transfers/transfers.page.ts
var _c0 = () => ["", "PENDING", "DISPATCHED", "RECEIVED", "CANCELLED"];
function TransfersPage_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function TransfersPage_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "transfers.new"), " ");
  }
}
function TransfersPage_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function TransfersPage_button_9_Template_button_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatus(s_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-teal-600", ctx_r1.statusFilter() === s_r4)("text-white", ctx_r1.statusFilter() === s_r4)("bg-slate-100", ctx_r1.statusFilter() !== s_r4)("dark:bg-slate-700", ctx_r1.statusFilter() !== s_r4)("text-slate-700", ctx_r1.statusFilter() !== s_r4)("dark:text-slate-300", ctx_r1.statusFilter() !== s_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4 === "" ? \u0275\u0275pipeBind1(2, 13, "common.all") : s_r4);
  }
}
function TransfersPage_tr_36_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function TransfersPage_tr_36_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const t_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.askAction(t_r6, "dispatch"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "transfers.dispatch"), " ");
  }
}
function TransfersPage_tr_36_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function TransfersPage_tr_36_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const t_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.askAction(t_r6, "receive"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "transfers.receive"), " ");
  }
}
function TransfersPage_tr_36_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function TransfersPage_tr_36_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const t_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.askAction(t_r6, "cancel"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.cancel"), " ");
  }
}
function TransfersPage_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 22)(1, "td", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 25);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 23)(13, "span", 27);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 25);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 23)(19, "cis-row-actions")(20, "button", 28);
    \u0275\u0275listener("click", function TransfersPage_tr_36_Template_button_click_20_listener() {
      const t_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetails(t_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 29);
    \u0275\u0275element(22, "path", 30)(23, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, TransfersPage_tr_36_button_26_Template, 5, 4, "button", 32)(27, TransfersPage_tr_36_button_27_Template, 5, 4, "button", 32)(28, TransfersPage_tr_36_button_28_Template, 5, 4, "button", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6.reference || "#" + t_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.branchName(t_r6.fromBranch), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.branchName(t_r6.toBranch), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", t_r6.lines.length, " \xB7 ", ctx_r1.totalQty(t_r6), " ", \u0275\u0275pipeBind1(11, 13, "common.pcs"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.statusClass(t_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 15, t_r6.createdAt, "yyyy-MM-dd HH:mm"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 18, "common.details"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canDispatch(t_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canReceive(t_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canCancel(t_r6));
  }
}
function TransfersPage_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.noData"));
  }
}
function TransfersPage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function TransfersPage_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success());
  }
}
function TransfersPage_div_40_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r11 = ctx.$implicit;
    \u0275\u0275property("value", b_r11.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", b_r11.name, " (", b_r11.code, ")");
  }
}
function TransfersPage_div_40_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", b_r12.code)("disabled", b_r12.code === ctx_r1.form.getRawValue().fromBranch);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", b_r12.name, " (", b_r12.code, ")");
  }
}
function TransfersPage_div_40_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r1.lines().length, " \xB7 ", ctx_r1.linesTotalQty(), " ", \u0275\u0275pipeBind1(2, 3, "common.pcs"), " ");
  }
}
function TransfersPage_div_40_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 90);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r13 = ctx.$implicit;
    \u0275\u0275property("ngValue", +i_r13.batchId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate6(" ", i_r13.productName, " (", i_r13.sku, ") \xB7 ", i_r13.batchNumber, " \xB7 ", i_r13.expiryDate, " \xB7 ", i_r13.qtyOnHand, " ", \u0275\u0275pipeBind1(2, 7, "common.pcs"), " ");
  }
}
function TransfersPage_div_40_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 3, "transfers.available"), ": ", ctx_r1.selectedBatchMax(), " ", \u0275\u0275pipeBind1(3, 5, "common.pcs"), " ");
  }
}
function TransfersPage_div_40_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "span", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 54);
    \u0275\u0275element(3, "path", 96)(4, "path", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 98)(6, "div", 99);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 101);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function TransfersPage_div_40_div_64_div_1_Template_button_click_10_listener() {
      const l_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeLine(l_r15.batchId));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 102);
    \u0275\u0275element(13, "path", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r15 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(l_r15.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xD7 ", l_r15.quantity);
    \u0275\u0275advance();
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(11, 4, "common.remove")));
  }
}
function TransfersPage_div_40_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275template(1, TransfersPage_div_40_div_64_div_1_Template, 14, 6, "div", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.lines());
  }
}
function TransfersPage_div_40_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "transfers.noLines"), " ");
  }
}
function TransfersPage_div_40_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 105);
    \u0275\u0275element(2, "path", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function TransfersPage_div_40_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 107);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.lines().length, " ", \u0275\u0275pipeBind1(2, 4, "common.items"), " \xB7 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.linesTotalQty(), " ", \u0275\u0275pipeBind1(5, 6, "common.pcs"));
  }
}
function TransfersPage_div_40__svg_svg_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 54);
    \u0275\u0275element(1, "path", 50);
    \u0275\u0275elementEnd();
  }
}
function TransfersPage_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275listener("click", function TransfersPage_div_40_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 44)(3, "div", 45);
    \u0275\u0275listener("click", function TransfersPage_div_40_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 46)(5, "div", 47)(6, "span", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 49);
    \u0275\u0275element(8, "path", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div")(10, "div", 51);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 52);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 53);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function TransfersPage_div_40_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 54);
    \u0275\u0275element(19, "path", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "form", 55);
    \u0275\u0275listener("ngSubmit", function TransfersPage_div_40_Template_form_ngSubmit_20_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCreate());
    });
    \u0275\u0275elementStart(21, "div", 56)(22, "div")(23, "div", 57);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 58)(27, "label", 59);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementStart(30, "select", 60);
    \u0275\u0275listener("change", function TransfersPage_div_40_Template_select_change_30_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFromChange());
    });
    \u0275\u0275template(31, TransfersPage_div_40_option_31_Template, 2, 3, "option", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "span", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 54);
    \u0275\u0275element(34, "path", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "label", 59);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementStart(38, "select", 64)(39, "option", 65);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, TransfersPage_div_40_option_42_Template, 2, 4, "option", 66);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 67)(44, "div", 0)(45, "div", 57);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, TransfersPage_div_40_span_48_Template, 3, 5, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 69)(50, "select", 70);
    \u0275\u0275listener("change", function TransfersPage_div_40_Template_select_change_50_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBatchSelect());
    });
    \u0275\u0275elementStart(51, "option", 71);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, TransfersPage_div_40_option_55_Template, 3, 9, "option", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "input", 73);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementStart(58, "button", 74);
    \u0275\u0275listener("click", function TransfersPage_div_40_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addLine());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 75);
    \u0275\u0275element(60, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(63, TransfersPage_div_40_div_63_Template, 4, 7, "div", 77)(64, TransfersPage_div_40_div_64_Template, 2, 1, "div", 78)(65, TransfersPage_div_40_div_65_Template, 3, 3, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(66, "label", 59);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275element(69, "input", 80);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, TransfersPage_div_40_div_71_Template, 4, 1, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 82)(73, "div", 52);
    \u0275\u0275template(74, TransfersPage_div_40_ng_container_74_Template, 6, 8, "ng-container", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 83)(76, "button", 84);
    \u0275\u0275listener("click", function TransfersPage_div_40_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "button", 85);
    \u0275\u0275listener("click", function TransfersPage_div_40_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCreate());
    });
    \u0275\u0275template(80, TransfersPage_div_40__svg_svg_80_Template, 2, 0, "svg", 86);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 33, "transfers.new"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 35, "transfers.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(17, 37, "common.close")));
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 39, "transfers.route"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 41, "transfers.from"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.branchCtx.locked());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.branchCtx.options());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 43, "transfers.to"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 45, "transfers.chooseDestination"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.branchCtx.options());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 47, "transfers.addStock"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.lines().length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sourceLoading() ? \u0275\u0275pipeBind1(53, 49, "common.loading") : \u0275\u0275pipeBind1(54, 51, "transfers.chooseBatch"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.sourceStock());
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(57, 53, "common.qty")))("max", ctx_r1.selectedBatchMax());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 55, "common.add"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedBatchMax() != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lines().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.lines().length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 57, "transfers.note"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(70, 59, "transfers.notePlaceholder")));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.lines().length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 61, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.lines().length || ctx_r1.form.getRawValue().toBranch === "" || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? \u0275\u0275pipeBind1(82, 63, "common.saving") : \u0275\u0275pipeBind1(83, 65, "transfers.create"), " ");
  }
}
function TransfersPage_div_41_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.viewing().note);
  }
}
function TransfersPage_div_41_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 22)(1, "td", 122);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 122);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 123);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", l_r17.productName, " (", l_r17.sku, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r17.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r17.quantity);
  }
}
function TransfersPage_div_41_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(2, 3, "transfers.dispatched"), ": ", \u0275\u0275pipeBind2(3, 5, ctx_r1.viewing().dispatchedAt, "yyyy-MM-dd HH:mm"), " \xB7 ", ctx_r1.viewing().dispatchedBy);
  }
}
function TransfersPage_div_41_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(2, 3, "transfers.received"), ": ", \u0275\u0275pipeBind2(3, 5, ctx_r1.viewing().receivedAt, "yyyy-MM-dd HH:mm"), " \xB7 ", ctx_r1.viewing().receivedBy);
  }
}
function TransfersPage_div_41_div_38_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 128);
    \u0275\u0275listener("click", function TransfersPage_div_41_div_38_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.closeDetails();
      return \u0275\u0275resetView(ctx_r1.askAction(ctx_r1.viewing(), "dispatch"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "transfers.dispatch"));
  }
}
function TransfersPage_div_41_div_38_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function TransfersPage_div_41_div_38_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.closeDetails();
      return \u0275\u0275resetView(ctx_r1.askAction(ctx_r1.viewing(), "receive"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "transfers.receive"));
  }
}
function TransfersPage_div_41_div_38_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 130);
    \u0275\u0275listener("click", function TransfersPage_div_41_div_38_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.closeDetails();
      return \u0275\u0275resetView(ctx_r1.askAction(ctx_r1.viewing(), "cancel"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.cancel"));
  }
}
function TransfersPage_div_41_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275template(1, TransfersPage_div_41_div_38_button_1_Template, 3, 3, "button", 125)(2, TransfersPage_div_41_div_38_button_2_Template, 3, 3, "button", 126)(3, TransfersPage_div_41_div_38_button_3_Template, 3, 3, "button", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDispatch(ctx_r1.viewing()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canReceive(ctx_r1.viewing()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canCancel(ctx_r1.viewing()));
  }
}
function TransfersPage_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 108);
    \u0275\u0275listener("click", function TransfersPage_div_41_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetails());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 109)(3, "div", 110);
    \u0275\u0275listener("click", function TransfersPage_div_41_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 0)(5, "div", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 111);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 112);
    \u0275\u0275listener("click", function TransfersPage_div_41_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetails());
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 113);
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "span", 26);
    \u0275\u0275text(14, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275template(16, TransfersPage_div_41_div_16_Template, 2, 1, "div", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "table", 115)(18, "thead")(19, "tr", 116)(20, "th", 117);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 117);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 118);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, TransfersPage_div_41_tr_30_Template, 7, 4, "tr", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 119)(32, "div");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, TransfersPage_div_41_div_36_Template, 4, 8, "div", 15)(37, TransfersPage_div_41_div_37_Template, 4, 8, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, TransfersPage_div_41_div_38_Template, 4, 3, "div", 120);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.viewing().reference || "#" + ctx_r1.viewing().id, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusClass(ctx_r1.viewing().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.viewing().status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.branchName(ctx_r1.viewing().fromBranch), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.branchName(ctx_r1.viewing().toBranch), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewing().note);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, "common.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 18, "common.batch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 20, "common.quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.viewing().lines);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(34, 22, "common.created"), ": ", \u0275\u0275pipeBind2(35, 24, ctx_r1.viewing().createdAt, "yyyy-MM-dd HH:mm"), " \xB7 ", ctx_r1.viewing().createdBy);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.viewing().dispatchedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewing().receivedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDispatch(ctx_r1.viewing()) || ctx_r1.canReceive(ctx_r1.viewing()) || ctx_r1.canCancel(ctx_r1.viewing()));
  }
}
var TRANSFER_FIELDS = "id reference fromBranch toBranch status note createdAt createdBy dispatchedAt dispatchedBy receivedAt receivedBy lines { productId batchId sku productName batchNumber quantity }";
var TransfersPage = class _TransfersPage {
  gql;
  perm = inject(PermissionService);
  branchCtx = inject(BranchContext);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  success = signal(null, ...ngDevMode ? [{ debugName: "success" }] : []);
  transfers = signal([], ...ngDevMode ? [{ debugName: "transfers" }] : []);
  statusFilter = signal("", ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedTransfers = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.transfers().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedTransfers" }] : []);
  createOpen = signal(false, ...ngDevMode ? [{ debugName: "createOpen" }] : []);
  detailsOpen = signal(false, ...ngDevMode ? [{ debugName: "detailsOpen" }] : []);
  viewing = signal(null, ...ngDevMode ? [{ debugName: "viewing" }] : []);
  // create form state
  sourceStock = signal([], ...ngDevMode ? [{ debugName: "sourceStock" }] : []);
  sourceLoading = signal(false, ...ngDevMode ? [{ debugName: "sourceLoading" }] : []);
  lines = signal([], ...ngDevMode ? [{ debugName: "lines" }] : []);
  selectedBatchMax = signal(null, ...ngDevMode ? [{ debugName: "selectedBatchMax" }] : []);
  linesTotalQty = computed(() => this.lines().reduce((s, l) => s + l.quantity, 0), ...ngDevMode ? [{ debugName: "linesTotalQty" }] : []);
  confirmOpen = signal(false, ...ngDevMode ? [{ debugName: "confirmOpen" }] : []);
  confirmAction = signal(null, ...ngDevMode ? [{ debugName: "confirmAction" }] : []);
  pendingTransfer = signal(null, ...ngDevMode ? [{ debugName: "pendingTransfer" }] : []);
  fb = inject(FormBuilder);
  form = this.fb.group({
    fromBranch: ["", [Validators.required]],
    toBranch: ["", [Validators.required]],
    note: [""],
    batchId: [null],
    quantity: [1, [Validators.required, Validators.min(1)]]
  });
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.branchCtx.load();
    this.load();
  }
  totalQty(t) {
    return t.lines.reduce((s, l) => s + l.quantity, 0);
  }
  canDispatch(t) {
    return t.status === "PENDING" && this.perm.canEdit("TRANSFERS") && this.canActOn(t.fromBranch);
  }
  canReceive(t) {
    return t.status === "DISPATCHED" && this.perm.canEdit("TRANSFERS") && this.canActOn(t.toBranch);
  }
  canCancel(t) {
    return t.status === "PENDING" && this.perm.canDelete("TRANSFERS") && this.canActOn(t.fromBranch);
  }
  /** Locked users may only act on their own branch's side; unrestricted users may act anywhere. */
  canActOn(branch) {
    const locked = this.branchCtx.lockedCode();
    return locked == null || locked.toUpperCase() === branch.toUpperCase();
  }
  branchName(code) {
    return this.branchCtx.options().find((b) => b.code === code)?.name || code;
  }
  setStatus(value) {
    this.statusFilter.set(value);
    this.load();
  }
  setQuery(value) {
    this.query.set(value);
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const q = `query StockTransfers($filter: StockTransferFilter) {
      stockTransfers(filter: $filter) { ${TRANSFER_FIELDS} }
    }`;
    this.gql.request(q, {
      filter: {
        branch: this.branchCtx.effective(),
        status: this.statusFilter() || null,
        query: this.query() || null
      }
    }).subscribe({
      next: (res) => {
        this.transfers.set(res.stockTransfers ?? []);
        this.pageIndex.set(0);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load transfers");
        this.loading.set(false);
      }
    });
  }
  openCreate() {
    this.error.set(null);
    this.success.set(null);
    this.lines.set([]);
    this.selectedBatchMax.set(null);
    const from = this.branchCtx.writeBranch();
    this.form.reset({ fromBranch: from, toBranch: "", note: "", batchId: null, quantity: 1 });
    this.createOpen.set(true);
    this.loadSourceStock(from);
  }
  closeCreate() {
    this.createOpen.set(false);
    this.lines.set([]);
    this.selectedBatchMax.set(null);
  }
  onFromChange() {
    this.lines.set([]);
    this.selectedBatchMax.set(null);
    const from = this.form.getRawValue().fromBranch;
    if (from)
      this.loadSourceStock(from);
  }
  onBatchSelect() {
    const id = Number(this.form.getRawValue().batchId ?? 0);
    const item = this.sourceStock().find((i) => Number(i.batchId) === id);
    this.selectedBatchMax.set(item ? item.qtyOnHand : null);
  }
  loadSourceStock(branch) {
    this.sourceLoading.set(true);
    const q = `query Inv($filter: InventoryFilter) {
      inventory(filter: $filter) { batchId batchNumber sku productName expiryDate qtyOnHand }
    }`;
    this.gql.request(q, {
      filter: { branch, includeZero: false }
    }).subscribe({
      next: (res) => {
        this.sourceStock.set(res.inventory ?? []);
        this.sourceLoading.set(false);
      },
      error: () => this.sourceLoading.set(false)
    });
  }
  addLine() {
    const raw = this.form.getRawValue();
    const batchId = Number(raw.batchId ?? 0);
    const qty = Number(raw.quantity ?? 0);
    if (!batchId || qty < 1)
      return;
    const item = this.sourceStock().find((i) => Number(i.batchId) === batchId);
    if (!item)
      return;
    if (qty > item.qtyOnHand) {
      this.error.set(`Only ${item.qtyOnHand} available for batch ${item.batchNumber}`);
      return;
    }
    if (this.lines().some((l) => l.batchId === batchId)) {
      this.error.set("Batch already added");
      return;
    }
    this.error.set(null);
    this.lines.set([...this.lines(), {
      batchId,
      quantity: qty,
      available: item.qtyOnHand,
      label: `${item.productName} (${item.sku}) \xB7 ${item.batchNumber} \xB7 ${item.expiryDate}`
    }]);
    this.form.patchValue({ batchId: null, quantity: 1 });
    this.selectedBatchMax.set(null);
  }
  removeLine(batchId) {
    this.lines.set(this.lines().filter((l) => l.batchId !== batchId));
  }
  submitCreate() {
    const raw = this.form.getRawValue();
    if (!raw.fromBranch || !raw.toBranch || !this.lines().length)
      return;
    this.loading.set(true);
    this.error.set(null);
    const m = `mutation CreateTransfer($input: CreateStockTransferInput!) {
      createStockTransfer(input: $input) { ${TRANSFER_FIELDS} }
    }`;
    this.gql.request(m, {
      input: {
        fromBranch: raw.fromBranch,
        toBranch: raw.toBranch,
        note: raw.note || null,
        lines: this.lines().map((l) => ({ batchId: l.batchId, quantity: l.quantity }))
      }
    }).subscribe({
      next: () => {
        this.closeCreate();
        this.success.set("Transfer created \u2014 dispatch it to move the stock");
        this.loading.set(false);
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to create transfer");
        this.loading.set(false);
      }
    });
  }
  openDetails(t) {
    this.viewing.set(t);
    this.detailsOpen.set(true);
  }
  closeDetails() {
    this.detailsOpen.set(false);
    this.viewing.set(null);
  }
  askAction(t, action) {
    this.pendingTransfer.set(t);
    this.confirmAction.set(action);
    this.confirmOpen.set(true);
  }
  cancelConfirm() {
    this.confirmOpen.set(false);
    this.confirmAction.set(null);
    this.pendingTransfer.set(null);
  }
  confirmMessage() {
    const t = this.pendingTransfer();
    const a = this.confirmAction();
    if (!t || !a)
      return "";
    const ref = t.reference || `#${t.id}`;
    if (a === "dispatch")
      return `Dispatch ${ref}? ${this.totalQty(t)} pcs will be deducted from ${t.fromBranch}.`;
    if (a === "receive")
      return `Receive ${ref} at ${t.toBranch}? Stock will be added to the destination.`;
    return `Cancel ${ref}? No stock has moved yet.`;
  }
  runAction() {
    const t = this.pendingTransfer();
    const a = this.confirmAction();
    if (!t || !a)
      return;
    const field = a === "dispatch" ? "dispatchStockTransfer" : a === "receive" ? "receiveStockTransfer" : "cancelStockTransfer";
    const m = `mutation TransferAction($input: StockTransferActionInput!) {
      ${field}(input: $input) { ${TRANSFER_FIELDS} }
    }`;
    this.loading.set(true);
    this.error.set(null);
    this.gql.request(m, { input: { id: t.id } }).subscribe({
      next: (res) => {
        const updated = res[field];
        this.transfers.set(this.transfers().map((x) => x.id === updated.id ? updated : x));
        this.success.set(a === "dispatch" ? "Transfer dispatched \u2014 stock deducted from source" : a === "receive" ? "Transfer received \u2014 stock added to destination" : "Transfer cancelled");
        this.cancelConfirm();
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Action failed");
        this.cancelConfirm();
        this.loading.set(false);
      }
    });
  }
  statusClass(status) {
    switch (status) {
      case "PENDING":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300";
      case "DISPATCHED":
        return "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300";
      case "RECEIVED":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300";
      case "CANCELLED":
        return "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300";
    }
  }
  static \u0275fac = function TransfersPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransfersPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransfersPage, selectors: [["cis-transfers-page"]], decls: 45, vars: 45, consts: [[1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], ["class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white", "type", "button", 3, "click", 4, "ngIf"], [1, "mt-4", "flex", "flex-wrap", "items-center", "gap-3"], [1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", "w-64", 3, "input", "value", "placeholder"], [1, "flex", "gap-1"], ["type", "button", "class", "rounded-lg px-3 py-1.5 text-xs font-semibold", 3, "bg-teal-600", "text-white", "bg-slate-100", "dark:bg-slate-700", "text-slate-700", "dark:text-slate-300", "click", 4, "ngFor", "ngForOf"], [1, "mt-4", "grid", "grid-cols-1", "gap-4"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "mt-1", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["class", "mt-3 text-sm text-emerald-600 dark:text-emerald-400", 4, "ngIf"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], ["title", "Stock Transfer", 3, "cancel", "confirm", "open", "message", "confirmText"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", 3, "click"], ["type", "button", 1, "rounded-lg", "px-3", "py-1.5", "text-xs", "font-semibold", 3, "click"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2"], [1, "font-mono", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "text-slate-400"], [1, "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-bold", 3, "ngClass"], [1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["class", "cis-row-action", 3, "disabled", "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", 3, "disabled", "click", 4, "ngIf"], [1, "cis-row-action", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 12h14m0 0l-6-6m6 6l-6 6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "cis-row-action", "cis-row-action-danger", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], ["colspan", "6", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "mt-3", "text-sm", "text-emerald-600", "dark:text-emerald-400"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/50", "backdrop-blur-[2px]", 3, "click"], [1, "absolute", "inset-0", "flex", "items-end", "justify-center", "sm:items-center", "sm:p-4"], [1, "flex", "w-full", "max-h-[94vh]", "flex-col", "rounded-t-3xl", "bg-white", "dark:bg-slate-800", "shadow-2xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", "sm:max-w-2xl", "sm:rounded-2xl", 3, "click"], [1, "flex", "items-center", "justify-between", "gap-3", "border-b", "border-slate-100", "dark:border-slate-700", "px-5", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "grid", "h-10", "w-10", "shrink-0", "place-items-center", "rounded-xl", "bg-teal-50", "dark:bg-teal-900/40", "text-teal-600", "dark:text-teal-300"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 7h13m0 0l-3-3m3 3l-3 3M16 17H3m0 0l3 3m-3-3l3-3"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], ["type", "button", 1, "grid", "h-9", "w-9", "place-items-center", "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "text-slate-600", "dark:text-slate-300", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click", "aria-label"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4"], [1, "flex-1", "overflow-y-auto", "px-5", "py-4", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-5"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-slate-400", "dark:text-slate-500"], [1, "mt-2", "grid", "gap-2", "sm:grid-cols-[1fr_auto_1fr]", "sm:items-end"], [1, "grid", "gap-1.5", "text-xs", "font-medium", "text-slate-600", "dark:text-slate-300"], ["formControlName", "fromBranch", 1, "w-full", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2.5", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-teal-500", "focus:ring-2", "focus:ring-teal-100", "dark:focus:ring-teal-900/50", "disabled:opacity-60", 3, "change", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "hidden", "h-10", "w-10", "place-items-center", "self-end", "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "text-slate-500", "dark:text-slate-400", "sm:grid"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 12h14m0 0l-4-4m4 4l-4 4"], ["formControlName", "toBranch", 1, "w-full", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2.5", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-teal-500", "focus:ring-2", "focus:ring-teal-100", "dark:focus:ring-teal-900/50"], ["value", "", "disabled", ""], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "bg-slate-50", "dark:bg-slate-700/40", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-600"], ["class", "rounded-full bg-teal-100 dark:bg-teal-900/50 px-2 py-0.5 text-[10px] font-bold text-teal-700 dark:text-teal-300", 4, "ngIf"], [1, "mt-3", "grid", "gap-2", "sm:grid-cols-[1fr_110px_auto]"], ["formControlName", "batchId", 1, "w-full", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2.5", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-teal-500", "focus:ring-2", "focus:ring-teal-100", "dark:focus:ring-teal-900/50", 3, "change"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "min", "1", "formControlName", "quantity", 1, "w-full", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2.5", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-teal-500", "focus:ring-2", "focus:ring-teal-100", "dark:focus:ring-teal-900/50", 3, "max", "placeholder"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "gap-1.5", "rounded-xl", "bg-teal-600", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-teal-700", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 5v14M5 12h14"], ["class", "mt-1.5 text-[11px] font-medium text-teal-600 dark:text-teal-400", 4, "ngIf"], ["class", "mt-3 grid gap-1.5", 4, "ngIf"], ["class", "mt-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 px-3 py-4 text-center text-xs text-slate-500 dark:text-slate-400", 4, "ngIf"], ["formControlName", "note", 1, "w-full", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2.5", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-teal-500", "focus:ring-2", "focus:ring-teal-100", "dark:focus:ring-teal-900/50", 3, "placeholder"], ["class", "flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-900/20 px-3 py-2 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "gap-3", "border-t", "border-slate-100", "dark:border-slate-700", "px-5", "py-3.5"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2.5", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "bg-pink-500", "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "class", "h-4 w-4", 4, "ngIf"], [3, "value"], [3, "value", "disabled"], [1, "rounded-full", "bg-teal-100", "dark:bg-teal-900/50", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-teal-700", "dark:text-teal-300"], [3, "ngValue"], [1, "mt-1.5", "text-[11px]", "font-medium", "text-teal-600", "dark:text-teal-400"], [1, "mt-3", "grid", "gap-1.5"], ["class", "flex items-center gap-3 rounded-xl bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-slate-100 dark:ring-slate-600", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-3", "rounded-xl", "bg-white", "dark:bg-slate-800", "px-3", "py-2", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "grid", "h-8", "w-8", "shrink-0", "place-items-center", "rounded-lg", "bg-teal-50", "dark:bg-teal-900/40", "text-teal-600", "dark:text-teal-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4v10l8 4 8-4V7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 7l8 4 8-4"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium", "text-slate-900", "dark:text-slate-100"], [1, "shrink-0", "rounded-lg", "bg-slate-100", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "font-bold", "text-slate-700", "dark:text-slate-200"], ["type", "button", 1, "grid", "h-7", "w-7", "shrink-0", "place-items-center", "rounded-lg", "text-slate-400", "hover:bg-red-50", "hover:text-[#B81104]", "dark:hover:bg-red-900/30", "dark:hover:text-red-400", 3, "click", "aria-label"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-3.5", "w-3.5"], [1, "mt-3", "rounded-xl", "border", "border-dashed", "border-slate-300", "dark:border-slate-600", "px-3", "py-4", "text-center", "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "flex", "items-center", "gap-2", "rounded-xl", "bg-red-50", "dark:bg-red-900/20", "px-3", "py-2", "text-sm", "text-[#B81104]", "dark:text-red-400"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], [1, "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-xl", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", "max-h-[90vh]", "overflow-auto", 3, "click"], [1, "ml-2", "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-bold", 3, "ngClass"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-3", "text-sm", "text-slate-700", "dark:text-slate-300"], ["class", "mt-1 text-xs text-slate-500 dark:text-slate-400", 4, "ngIf"], [1, "mt-3", "w-full", "border-collapse", "text-sm"], [1, "text-left", "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "py-1"], [1, "py-1", "text-right"], [1, "mt-3", "grid", "gap-1", "text-xs", "text-slate-500", "dark:text-slate-400"], ["class", "mt-4 flex items-center justify-end gap-2", 4, "ngIf"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "py-1.5", "text-slate-900", "dark:text-slate-300"], [1, "py-1.5", "text-right", "text-slate-900", "dark:text-slate-300"], [1, "mt-4", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", "class", "rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white", 3, "click", 4, "ngIf"], ["type", "button", "class", "rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white", 3, "click", 4, "ngIf"], ["type", "button", "class", "rounded-xl bg-slate-200 dark:bg-slate-600 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200", 3, "click", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "bg-sky-600", "px-4", "py-2", "text-sm", "font-semibold", "text-white", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-emerald-600", "px-4", "py-2", "text-sm", "font-semibold", "text-white", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-slate-200", "dark:bg-slate-600", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"]], template: function TransfersPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, TransfersPage_button_4_Template, 3, 3, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "input", 4);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("input", function TransfersPage_Template_input_input_6_listener($event) {
        return ctx.setQuery($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275template(9, TransfersPage_button_9_Template, 3, 15, "button", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "section", 8)(12, "cis-pager", 9);
      \u0275\u0275twoWayListener("pageSizeChange", function TransfersPage_Template_cis_pager_pageSizeChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function TransfersPage_Template_cis_pager_pageIndexChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "table", 11)(15, "thead", 12)(16, "tr")(17, "th", 13);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 13);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th", 13);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 13);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 13);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 13);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "tbody");
      \u0275\u0275template(36, TransfersPage_tr_36_Template, 29, 20, "tr", 14)(37, TransfersPage_tr_37_Template, 4, 3, "tr", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(38, TransfersPage_div_38_Template, 2, 1, "div", 16)(39, TransfersPage_div_39_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, TransfersPage_div_40_Template, 84, 67, "div", 18)(41, TransfersPage_div_41_Template, 39, 27, "div", 18);
      \u0275\u0275elementStart(42, "cis-confirm-dialog", 19);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275listener("cancel", function TransfersPage_Template_cis_confirm_dialog_cancel_42_listener() {
        return ctx.cancelConfirm();
      })("confirm", function TransfersPage_Template_cis_confirm_dialog_confirm_42_listener() {
        return ctx.runAction();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 24, "nav.transfers"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("TRANSFERS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(7, 26, "common.search")))("value", ctx.query());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(44, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("total", ctx.transfers().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 28, "transfers.reference"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 30, "transfers.route"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 32, "common.items"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 34, "common.status"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 36, "common.date"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 38, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedTransfers());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.transfers().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.createOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.detailsOpen() && ctx.viewing());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.confirmOpen())("message", ctx.confirmMessage())("confirmText", ctx.confirmAction() === "cancel" ? \u0275\u0275pipeBind1(43, 40, "common.cancel") : \u0275\u0275pipeBind1(44, 42, "common.confirm"));
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, RowActionsMenuComponent, PagerComponent, ConfirmDialogComponent, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=transfers.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransfersPage, [{
    type: Component,
    args: [{ selector: "cis-transfers-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PagerComponent, ConfirmDialogComponent], template: `<div class="flex items-center justify-between">
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ 'nav.transfers' | translate }}</h2>
  <button *ngIf="perm.canCreate('TRANSFERS')" class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="button" (click)="openCreate()">
    {{ 'transfers.new' | translate }}
  </button>
</div>

<div class="mt-4 flex flex-wrap items-center gap-3">
  <input
    class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8] w-64"
    [value]="query()"
    (input)="setQuery($any($event.target).value)"
    placeholder="{{ 'common.search' | translate }}"
  />
  <div class="flex gap-1">
    <button
      *ngFor="let s of ['', 'PENDING', 'DISPATCHED', 'RECEIVED', 'CANCELLED']"
      type="button"
      class="rounded-lg px-3 py-1.5 text-xs font-semibold"
      [class.bg-teal-600]="statusFilter() === s"
      [class.text-white]="statusFilter() === s"
      [class.bg-slate-100]="statusFilter() !== s"
      [class.dark:bg-slate-700]="statusFilter() !== s"
      [class.text-slate-700]="statusFilter() !== s"
      [class.dark:text-slate-300]="statusFilter() !== s"
      (click)="setStatus(s)"
    >{{ s === '' ? ('common.all' | translate) : s }}</button>
  </div>
</div>

<div class="mt-4 grid grid-cols-1 gap-4">
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
    <cis-pager class="mt-1 block" [total]="transfers().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />

    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'transfers.reference' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'transfers.route' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.items' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.status' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.date' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let t of displayedTransfers()" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-2">
              <span class="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">{{ t.reference || ('#' + t.id) }}</span>
            </td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              {{ branchName(t.fromBranch) }} <span class="text-slate-400">\u2192</span> {{ branchName(t.toBranch) }}
            </td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ t.lines.length }} \xB7 {{ totalQty(t) }} {{ 'common.pcs' | translate }}</td>
            <td class="px-3 py-2">
              <span class="rounded-full px-2 py-0.5 text-[10px] font-bold" [ngClass]="statusClass(t.status)">{{ t.status }}</span>
            </td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ t.createdAt | date:'yyyy-MM-dd HH:mm' }}</td>
            <td class="px-3 py-2">
              <cis-row-actions>
                <button class="cis-row-action" (click)="openDetails(t)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  {{ 'common.details' | translate }}
                </button>
                <button *ngIf="canDispatch(t)" class="cis-row-action" (click)="askAction(t, 'dispatch')" [disabled]="loading()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" /></svg>
                  {{ 'transfers.dispatch' | translate }}
                </button>
                <button *ngIf="canReceive(t)" class="cis-row-action" (click)="askAction(t, 'receive')" [disabled]="loading()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {{ 'transfers.receive' | translate }}
                </button>
                <button *ngIf="canCancel(t)" class="cis-row-action cis-row-action-danger" (click)="askAction(t, 'cancel')" [disabled]="loading()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  {{ 'common.cancel' | translate }}
                </button>
              </cis-row-actions>
            </td>
          </tr>
          <tr *ngIf="!loading() && !transfers().length">
            <td colspan="6" class="px-3 py-6 text-center text-sm text-slate-500 dark:text-slate-400">{{ 'common.noData' | translate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>
    <div class="mt-3 text-sm text-emerald-600 dark:text-emerald-400" *ngIf="success()">{{ success() }}</div>
  </section>
</div>

<!-- Create transfer modal -->
<div *ngIf="createOpen()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]" (click)="closeCreate()"></div>
  <div class="absolute inset-0 flex items-end justify-center sm:items-center sm:p-4">
    <div class="flex w-full max-h-[94vh] flex-col rounded-t-3xl bg-white dark:bg-slate-800 shadow-2xl ring-1 ring-slate-200 dark:ring-slate-700 sm:max-w-2xl sm:rounded-2xl" (click)="$event.stopPropagation()">

      <!-- Header -->
      <div class="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700 px-5 py-4">
        <div class="flex items-center gap-3">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h13m0 0l-3-3m3 3l-3 3M16 17H3m0 0l3 3m-3-3l3-3" />
            </svg>
          </span>
          <div>
            <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'transfers.new' | translate }}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">{{ 'transfers.subtitle' | translate }}</div>
          </div>
        </div>
        <button class="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600" type="button" (click)="closeCreate()" aria-label="{{ 'common.close' | translate }}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <!-- Body -->
      <form class="flex-1 overflow-y-auto px-5 py-4" [formGroup]="form" (ngSubmit)="submitCreate()">
        <div class="grid gap-5">

          <!-- Route -->
          <div>
            <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{{ 'transfers.route' | translate }}</div>
            <div class="mt-2 grid gap-2 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
              <label class="grid gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                {{ 'transfers.from' | translate }}
                <select class="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 dark:focus:ring-teal-900/50 disabled:opacity-60" formControlName="fromBranch" [disabled]="branchCtx.locked()" (change)="onFromChange()">
                  <option *ngFor="let b of branchCtx.options()" [value]="b.code">{{ b.name }} ({{ b.code }})</option>
                </select>
              </label>
              <span class="hidden h-10 w-10 place-items-center self-end rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 sm:grid">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" /></svg>
              </span>
              <label class="grid gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                {{ 'transfers.to' | translate }}
                <select class="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 dark:focus:ring-teal-900/50" formControlName="toBranch">
                  <option value="" disabled>{{ 'transfers.chooseDestination' | translate }}</option>
                  <option *ngFor="let b of branchCtx.options()" [value]="b.code" [disabled]="b.code === form.getRawValue().fromBranch">{{ b.name }} ({{ b.code }})</option>
                </select>
              </label>
            </div>
          </div>

          <!-- Stock -->
          <div class="rounded-2xl bg-slate-50 dark:bg-slate-700/40 p-4 ring-1 ring-slate-100 dark:ring-slate-600">
            <div class="flex items-center justify-between">
              <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{{ 'transfers.addStock' | translate }}</div>
              <span *ngIf="lines().length" class="rounded-full bg-teal-100 dark:bg-teal-900/50 px-2 py-0.5 text-[10px] font-bold text-teal-700 dark:text-teal-300">
                {{ lines().length }} \xB7 {{ linesTotalQty() }} {{ 'common.pcs' | translate }}
              </span>
            </div>

            <div class="mt-3 grid gap-2 sm:grid-cols-[1fr_110px_auto]">
              <select class="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 dark:focus:ring-teal-900/50" formControlName="batchId" (change)="onBatchSelect()">
                <option [ngValue]="null" disabled>{{ sourceLoading() ? ('common.loading' | translate) : ('transfers.chooseBatch' | translate) }}</option>
                <option *ngFor="let i of sourceStock()" [ngValue]="+i.batchId">
                  {{ i.productName }} ({{ i.sku }}) \xB7 {{ i.batchNumber }} \xB7 {{ i.expiryDate }} \xB7 {{ i.qtyOnHand }} {{ 'common.pcs' | translate }}
                </option>
              </select>
              <input type="number" min="1" [max]="selectedBatchMax()" placeholder="{{ 'common.qty' | translate }}" class="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 dark:focus:ring-teal-900/50" formControlName="quantity" />
              <button type="button" class="inline-flex items-center justify-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700" (click)="addLine()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M5 12h14" /></svg>
                {{ 'common.add' | translate }}
              </button>
            </div>
            <div *ngIf="selectedBatchMax() != null" class="mt-1.5 text-[11px] font-medium text-teal-600 dark:text-teal-400">
              {{ 'transfers.available' | translate }}: {{ selectedBatchMax() }} {{ 'common.pcs' | translate }}
            </div>

            <!-- Lines -->
            <div *ngIf="lines().length" class="mt-3 grid gap-1.5">
              <div *ngFor="let l of lines()" class="flex items-center gap-3 rounded-xl bg-white dark:bg-slate-800 px-3 py-2 ring-1 ring-slate-100 dark:ring-slate-600">
                <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4v10l8 4 8-4V7z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4 7l8 4 8-4" /></svg>
                </span>
                <div class="min-w-0 flex-1">
                  <div class="truncate text-sm font-medium text-slate-900 dark:text-slate-100">{{ l.label }}</div>
                </div>
                <span class="shrink-0 rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-bold text-slate-700 dark:text-slate-200">\xD7 {{ l.quantity }}</span>
                <button type="button" class="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-[#B81104] dark:hover:bg-red-900/30 dark:hover:text-red-400" (click)="removeLine(l.batchId)" aria-label="{{ 'common.remove' | translate }}">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            <div *ngIf="!lines().length" class="mt-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 px-3 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
              {{ 'transfers.noLines' | translate }}
            </div>
          </div>

          <!-- Note -->
          <label class="grid gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
            {{ 'transfers.note' | translate }}
            <input placeholder="{{ 'transfers.notePlaceholder' | translate }}" class="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 dark:focus:ring-teal-900/50" formControlName="note" />
          </label>

          <div class="flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-900/20 px-3 py-2 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
            {{ error() }}
          </div>
        </div>
      </form>

      <!-- Footer -->
      <div class="flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-700 px-5 py-3.5">
        <div class="text-xs text-slate-500 dark:text-slate-400">
          <ng-container *ngIf="lines().length">{{ lines().length }} {{ 'common.items' | translate }} \xB7 <span class="font-bold text-slate-700 dark:text-slate-200">{{ linesTotalQty() }} {{ 'common.pcs' | translate }}</span></ng-container>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600" (click)="closeCreate()">
            {{ 'common.close' | translate }}
          </button>
          <button class="inline-flex items-center gap-1.5 rounded-xl bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-60" type="button" (click)="submitCreate()" [disabled]="!lines().length || form.getRawValue().toBranch === '' || loading()">
            <svg *ngIf="!loading()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h13m0 0l-3-3m3 3l-3 3M16 17H3m0 0l3 3m-3-3l3-3" /></svg>
            {{ loading() ? ('common.saving' | translate) : ('transfers.create' | translate) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Details modal -->
<div *ngIf="detailsOpen() && viewing()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeDetails()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 max-h-[90vh] overflow-auto" (click)="$event.stopPropagation()">
      <div class="flex items-center justify-between">
        <div class="text-base font-semibold text-slate-900 dark:text-slate-100">
          {{ viewing()!.reference || ('#' + viewing()!.id) }}
          <span class="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold" [ngClass]="statusClass(viewing()!.status)">{{ viewing()!.status }}</span>
        </div>
        <button class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200" type="button" (click)="closeDetails()">\u2715</button>
      </div>

      <div class="mt-3 text-sm text-slate-700 dark:text-slate-300">
        {{ branchName(viewing()!.fromBranch) }} <span class="text-slate-400">\u2192</span> {{ branchName(viewing()!.toBranch) }}
        <div *ngIf="viewing()!.note" class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ viewing()!.note }}</div>
      </div>

      <table class="mt-3 w-full border-collapse text-sm">
        <thead>
          <tr class="text-left text-xs text-slate-500 dark:text-slate-400">
            <th class="py-1">{{ 'common.product' | translate }}</th>
            <th class="py-1">{{ 'common.batch' | translate }}</th>
            <th class="py-1 text-right">{{ 'common.quantity' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let l of viewing()!.lines" class="border-t border-slate-100 dark:border-slate-700">
            <td class="py-1.5 text-slate-900 dark:text-slate-300">{{ l.productName }} ({{ l.sku }})</td>
            <td class="py-1.5 text-slate-900 dark:text-slate-300">{{ l.batchNumber }}</td>
            <td class="py-1.5 text-right text-slate-900 dark:text-slate-300">{{ l.quantity }}</td>
          </tr>
        </tbody>
      </table>

      <div class="mt-3 grid gap-1 text-xs text-slate-500 dark:text-slate-400">
        <div>{{ 'common.created' | translate }}: {{ viewing()!.createdAt | date:'yyyy-MM-dd HH:mm' }} \xB7 {{ viewing()!.createdBy }}</div>
        <div *ngIf="viewing()!.dispatchedAt">{{ 'transfers.dispatched' | translate }}: {{ viewing()!.dispatchedAt | date:'yyyy-MM-dd HH:mm' }} \xB7 {{ viewing()!.dispatchedBy }}</div>
        <div *ngIf="viewing()!.receivedAt">{{ 'transfers.received' | translate }}: {{ viewing()!.receivedAt | date:'yyyy-MM-dd HH:mm' }} \xB7 {{ viewing()!.receivedBy }}</div>
      </div>

      <div class="mt-4 flex items-center justify-end gap-2" *ngIf="canDispatch(viewing()!) || canReceive(viewing()!) || canCancel(viewing()!)">
        <button *ngIf="canDispatch(viewing()!)" type="button" class="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white" (click)="closeDetails(); askAction(viewing()!, 'dispatch')">{{ 'transfers.dispatch' | translate }}</button>
        <button *ngIf="canReceive(viewing()!)" type="button" class="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white" (click)="closeDetails(); askAction(viewing()!, 'receive')">{{ 'transfers.receive' | translate }}</button>
        <button *ngIf="canCancel(viewing()!)" type="button" class="rounded-xl bg-slate-200 dark:bg-slate-600 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closeDetails(); askAction(viewing()!, 'cancel')">{{ 'common.cancel' | translate }}</button>
      </div>
    </div>
  </div>
</div>

<cis-confirm-dialog
  [open]="confirmOpen()"
  title="Stock Transfer"
  [message]="confirmMessage()"
  [confirmText]="confirmAction() === 'cancel' ? ('common.cancel' | translate) : ('common.confirm' | translate)"
  (cancel)="cancelConfirm()"
  (confirm)="runAction()"
></cis-confirm-dialog>
`, styles: ["/* src/app/features/transfers/transfers.page.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=transfers.page.css.map */\n"] }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransfersPage, { className: "TransfersPage", filePath: "app/features/transfers/transfers.page.ts", lineNumber: 55 });
})();
export {
  TransfersPage
};
//# sourceMappingURL=chunk-KV2F3KAK.js.map
