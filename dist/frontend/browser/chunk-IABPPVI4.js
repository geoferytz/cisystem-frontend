import {
  ConfirmDialogComponent
} from "./chunk-BBLDYVLB.js";
import {
  ModalComponent
} from "./chunk-TPFUJ5RZ.js";
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZFAUJJU2.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/purchasing/purchasing.page.ts
var PurchasingPage_Defer_4_DepsFn = () => [import("./chunk-I4C3KLB4.js").then((m) => m.RepurchaseComponent)];
function PurchasingPage_Defer_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cis-repurchase", 41);
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
function PurchasingPage_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", p_r3.name, " \u2014 ", p_r3.sku, "", p_r3.active ? "" : " (inactive)", " ");
  }
}
function PurchasingPage_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    \u0275\u0275property("value", u_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r4.name);
  }
}
function PurchasingPage_p_36_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", p_r5.brand);
  }
}
function PurchasingPage_p_36_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", p_r5.category);
  }
}
function PurchasingPage_p_36_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \xB7 ");
    \u0275\u0275elementStart(2, "strong", 45);
    \u0275\u0275text(3, "Inactive \u2014 receiving will not activate it");
    \u0275\u0275elementEnd()();
  }
}
function PurchasingPage_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275template(2, PurchasingPage_p_36_span_2_Template, 2, 1, "span", 44)(3, PurchasingPage_p_36_span_3_Template, 2, 1, "span", 44)(4, PurchasingPage_p_36_span_4_Template, 4, 0, "span", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r5.sku);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r5.brand);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r5.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r5.active);
  }
}
function PurchasingPage_p_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \xB7 cost/pc ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " \xB7 line total ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r6 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.lineForm.controls.unitSize.value || 0, " pcs per ", u_r6.name, " \u2192 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.linePcs(), " pcs");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, ctx_r1.costPerPiece()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \xB7 selling/", u_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, u_r6.price ?? 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, ctx_r1.lineTotal()));
  }
}
function PurchasingPage_div_56_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 53);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 55)(13, "button", 56);
    \u0275\u0275listener("click", function PurchasingPage_div_56_tr_25_Template_button_click_13_listener() {
      const idx_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeLine(idx_r8));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.productLabel(l_r9.productId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r9.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r9.expiryDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, l_r9.costPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.lineQtyLabel(l_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 8, "common.remove"));
  }
}
function PurchasingPage_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "h4", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48)(5, "table", 34)(6, "thead", 35)(7, "tr")(8, "th", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 36);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 36);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 37);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 37);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "th", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, PurchasingPage_div_56_tr_25_Template, 16, 10, "tr", 50);
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
function PurchasingPage_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function PurchasingPage_ng_container_92_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function PurchasingPage_ng_container_92_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const o_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(o_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "path", 66);
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
function PurchasingPage_ng_container_92_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function PurchasingPage_ng_container_92_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const o_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(o_r11.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "path", 68);
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
function PurchasingPage_ng_container_92_tr_22_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 79)(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 53);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r14.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r14.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r14.expiryDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, l_r14.costPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r14.quantityReceived);
  }
}
function PurchasingPage_ng_container_92_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 69)(1, "td", 70)(2, "div", 71)(3, "span", 72);
    \u0275\u0275text(4, "Purchase details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 73)(6, "table", 74)(7, "thead", 75)(8, "tr")(9, "th", 76);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 76);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 76);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 77);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 77);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, PurchasingPage_ng_container_92_tr_22_tr_25_Template, 12, 7, "tr", 78);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const o_r11 = \u0275\u0275nextContext().$implicit;
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
    \u0275\u0275property("ngForOf", o_r11.lines);
  }
}
function PurchasingPage_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 51)(2, "td", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 54);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 55)(14, "cis-row-actions")(15, "button", 59);
    \u0275\u0275listener("click", function PurchasingPage_ng_container_92_Template_button_click_15_listener() {
      const o_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDetails(o_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 60);
    \u0275\u0275element(17, "path", 61)(18, "circle", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, PurchasingPage_ng_container_92_button_20_Template, 5, 3, "button", 63)(21, PurchasingPage_ng_container_92_button_21_Template, 5, 3, "button", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, PurchasingPage_ng_container_92_tr_22_Template, 26, 16, "tr", 65);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const o_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r11.supplier || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r11.invoiceNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r11.receivedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r11.lines.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, ctx_r1.purchaseTotalValue(o_r11)));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailsOrderId() === o_r11.id ? "Hide details" : "Details", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("PURCHASING"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("PURCHASING"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsOrderId() === o_r11.id);
  }
}
function PurchasingPage_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 80);
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
  selectedProduct = signal(null, ...ngDevMode ? [{ debugName: "selectedProduct" }] : []);
  selectedUnit = signal(null, ...ngDevMode ? [{ debugName: "selectedUnit" }] : []);
  measureOptions = computed(() => {
    const p = this.selectedProduct();
    if (!p)
      return [];
    const units = p.units ?? [];
    const byName = new Map(units.map((u) => [u.name.toLowerCase(), u]));
    const standard = [
      { name: "Piece", qty: 1 },
      { name: "Half Dozen", qty: 6 },
      { name: "Dozen", qty: 12 },
      { name: "Carton", qty: null }
    ];
    const options = standard.map((s) => {
      const u = byName.get(s.name.toLowerCase());
      if (u)
        return { name: u.name, price: u.price, buyingPrice: u.buyingPrice, quantity: u.quantity };
      const qty = s.qty;
      return {
        name: s.name,
        quantity: qty,
        price: p.sellingPrice != null && qty != null ? p.sellingPrice * qty : null,
        buyingPrice: p.buyingPrice != null && qty != null ? p.buyingPrice * qty : null
      };
    });
    for (const u of units) {
      if (!standard.some((s) => s.name.toLowerCase() === u.name.toLowerCase())) {
        options.push({ name: u.name, price: u.price, buyingPrice: u.buyingPrice, quantity: u.quantity });
      }
    }
    return options;
  }, ...ngDevMode ? [{ debugName: "measureOptions" }] : []);
  fb = inject(FormBuilder);
  branchCtx = inject(BranchContext);
  headerForm = this.fb.group({
    supplier: [""],
    invoiceNumber: [""]
  });
  lineForm = this.fb.group({
    productId: [null, [Validators.required]],
    measure: ["", [Validators.required]],
    unitSize: [1, [Validators.required, Validators.min(1)]],
    batchNumber: ["", [Validators.required]],
    expiryDate: ["", [Validators.required]],
    measurePrice: [0, [Validators.required, Validators.min(0)]],
    measureQuantity: [1, [Validators.required, Validators.min(1)]]
  });
  constructor(gql) {
    this.gql = gql;
    this.lineForm.controls.measure.disable();
    this.perm.load();
    this.load();
    this.loadProductOptions();
  }
  loadProductOptions() {
    const q = `query Products { products { id sku name active brand category unitOfMeasure buyingPrice sellingPrice units { name price buyingPrice quantity } batches { batchNumber } } }`;
    this.gql.request(q).subscribe({
      next: (res) => this.productOptions.set(res.products ?? []),
      error: () => this.productOptions.set([])
    });
  }
  onProductChange() {
    const id = Number(this.lineForm.getRawValue().productId);
    const product = this.productOptions().find((p) => Number(p.id) === id) ?? null;
    this.selectedProduct.set(product);
    this.selectedUnit.set(null);
    if (!product) {
      this.lineForm.patchValue({ measure: "", unitSize: null, measurePrice: 0, batchNumber: "" });
      this.lineForm.controls.measure.disable();
      return;
    }
    this.lineForm.controls.measure.enable();
    const batches = product.batches ?? [];
    this.lineForm.patchValue({
      batchNumber: batches.length ? batches[batches.length - 1].batchNumber : `${product.sku}-AUTO`
    });
    const first = this.measureOptions()[0];
    if (first)
      this.applyMeasure(first);
  }
  onMeasureChange() {
    const name = String(this.lineForm.getRawValue().measure ?? "");
    const unit = this.measureOptions().find((u) => u.name === name) ?? null;
    this.applyMeasure(unit);
  }
  applyMeasure(unit) {
    this.selectedUnit.set(unit);
    if (!unit) {
      this.lineForm.patchValue({ measure: "", unitSize: null });
      return;
    }
    const p = this.selectedProduct();
    this.lineForm.patchValue({
      measure: unit.name,
      unitSize: unit.quantity ?? null,
      measurePrice: unit.buyingPrice ?? (unit.quantity != null && p?.buyingPrice != null ? p.buyingPrice * unit.quantity : 0)
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
  productLabel(id) {
    const p = this.productOptions().find((x) => Number(x.id) === Number(id));
    return p ? `${p.name} \u2014 ${p.sku}` : `#${id}`;
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
    const unit = this.selectedUnit();
    const unitSize = Number(raw.unitSize ?? 0);
    if (!raw.productId || !unit || unitSize <= 0)
      return;
    const product = this.selectedProduct();
    const batches = product?.batches ?? [];
    const batchNumber = raw.batchNumber?.trim() || (batches.length ? batches[batches.length - 1].batchNumber : `${product?.sku ?? "BATCH"}-AUTO`);
    const measureQty = Number(raw.measureQuantity ?? 0);
    const measurePrice = Number(raw.measurePrice ?? 0);
    const pcs = Math.round(measureQty * unitSize);
    if (pcs <= 0)
      return;
    this.lines.set([
      ...this.lines(),
      {
        productId: Number(raw.productId),
        batchNumber,
        expiryDate: raw.expiryDate ?? "",
        costPrice: Math.round(measurePrice / unitSize * 1e4) / 1e4,
        quantityReceived: pcs,
        measureName: unit.name,
        measureQuantity: measureQty
      }
    ]);
    this.resetLineForm();
  }
  resetLineForm() {
    this.selectedProduct.set(null);
    this.selectedUnit.set(null);
    this.lineForm.controls.measure.disable();
    this.lineForm.reset({
      productId: null,
      measure: "",
      unitSize: null,
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
    const lineInputs = this.lines().map(({ productId, batchNumber, expiryDate, costPrice, quantityReceived }) => ({ productId, batchNumber, expiryDate, costPrice, quantityReceived }));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchasingPage, selectors: [["cis-purchasing-page"]], decls: 98, vars: 72, consts: [[1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], ["maxWidthClass", "max-w-2xl", 3, "close", "open", "title"], [1, "mt-4", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["formControlName", "supplier", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "invoiceNumber", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [1, "mt-4", "rounded-xl", "bg-slate-50", "dark:bg-slate-700/50", "p-3", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "grid", "gap-3", 3, "ngSubmit", "formGroup"], ["formControlName", "productId", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "change"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "measure", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-xs text-slate-500 dark:text-slate-400", 4, "ngIf"], ["type", "date", "formControlName", "expiryDate", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "number", "min", "1", "step", "1", "formControlName", "unitSize", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "number", "min", "1", "step", "1", "formControlName", "measureQuantity", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "number", "min", "0", "step", "0.01", "formControlName", "measurePrice", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["class", "text-xs text-slate-600 dark:text-slate-400", 4, "ngIf"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white"], ["class", "mt-4", 4, "ngIf"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-4", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-1"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngIf"], ["message", "Are you sure you want to delete this purchase? This action cannot be undone.", "confirmButtonClass", "bg-[#B81104] hover:bg-[#7f0c03]", 3, "cancel", "confirm", "open", "title", "confirmText", "cancelText"], [3, "received", "addPurchase"], [3, "value"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [4, "ngIf"], [1, "text-amber-700", "dark:text-amber-400"], [1, "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "mt-4"], [1, "mt-2", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "px-3", "py-2"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right"], ["type", "button", 1, "text-xs", "font-semibold", "text-[#B81104]", "dark:text-red-400", 3, "click"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "px-3", "py-2", "text-xs", "text-slate-600", "dark:text-slate-400"], ["type", "button", 1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "cis-row-action", "type", "button", 3, "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", "type", "button", 3, "click", 4, "ngIf"], ["class", "border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "border-t", "border-slate-100", "dark:border-slate-700", "bg-slate-50/50", "dark:bg-slate-700/50"], ["colspan", "6", 1, "px-3", "py-3"], [1, "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "inline-flex", "items-center", "rounded-full", "bg-pink-50", "dark:bg-pink-900/30", "px-2.5", "py-1", "text-[11px]", "font-semibold", "text-pink-700", "dark:text-indigo-400", "ring-1", "ring-inset", "ring-pink-200", "dark:ring-pink-700"], [1, "mt-2", "overflow-auto", "rounded-xl", "bg-white", "dark:bg-slate-800", "ring-1", "ring-indigo-100", "dark:ring-pink-700", "border", "border-indigo-100", "dark:border-indigo-700"], [1, "w-full", "border-collapse", "text-xs"], [1, "bg-pink-50", "dark:bg-pink-900/30"], [1, "px-3", "py-2", "text-left", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-indigo-100 dark:border-indigo-700", 4, "ngFor", "ngForOf"], [1, "border-t", "border-indigo-100", "dark:border-indigo-700"], ["colspan", "6", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"]], template: function PurchasingPage_Template(rf, ctx) {
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
      \u0275\u0275elementStart(8, "div", 4)(9, "label", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275element(12, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "label", 5);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275element(16, "input", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 8)(18, "h4", 9);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "form", 10);
      \u0275\u0275listener("ngSubmit", function PurchasingPage_Template_form_ngSubmit_21_listener() {
        return ctx.addLine();
      });
      \u0275\u0275elementStart(22, "div", 4)(23, "label", 5);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementStart(26, "select", 11);
      \u0275\u0275listener("change", function PurchasingPage_Template_select_change_26_listener() {
        return ctx.onProductChange();
      });
      \u0275\u0275elementStart(27, "option", 12);
      \u0275\u0275text(28, "Select product");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, PurchasingPage_option_29_Template, 2, 4, "option", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "label", 5);
      \u0275\u0275text(31, " Purchase type ");
      \u0275\u0275elementStart(32, "select", 14);
      \u0275\u0275listener("change", function PurchasingPage_Template_select_change_32_listener() {
        return ctx.onMeasureChange();
      });
      \u0275\u0275elementStart(33, "option", 15);
      \u0275\u0275text(34, "Select measure");
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, PurchasingPage_option_35_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, PurchasingPage_p_36_Template, 5, 4, "p", 17);
      \u0275\u0275elementStart(37, "div", 4)(38, "label", 5);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275element(41, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "label", 5);
      \u0275\u0275text(43);
      \u0275\u0275element(44, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 4)(46, "label", 5);
      \u0275\u0275text(47);
      \u0275\u0275element(48, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "label", 5);
      \u0275\u0275text(50);
      \u0275\u0275element(51, "input", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(52, PurchasingPage_p_52_Template, 16, 13, "p", 22);
      \u0275\u0275elementStart(53, "button", 23);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(56, PurchasingPage_div_56_Template, 26, 19, "div", 24)(57, PurchasingPage_div_57_Template, 2, 1, "div", 25);
      \u0275\u0275elementStart(58, "div", 26)(59, "button", 27);
      \u0275\u0275listener("click", function PurchasingPage_Template_button_click_59_listener() {
        return ctx.closeCreate();
      });
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 28);
      \u0275\u0275listener("click", function PurchasingPage_Template_button_click_62_listener() {
        return ctx.receive();
      });
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 29)(66, "section", 30)(67, "h3", 31);
      \u0275\u0275text(68, "Purchase Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "cis-pager", 32);
      \u0275\u0275twoWayListener("pageSizeChange", function PurchasingPage_Template_cis_pager_pageSizeChange_69_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function PurchasingPage_Template_cis_pager_pageIndexChange_69_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 33)(71, "table", 34)(72, "thead", 35)(73, "tr")(74, "th", 36);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 36);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 36);
      \u0275\u0275text(81, "Received At");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 37);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 37);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 37);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "tbody");
      \u0275\u0275template(92, PurchasingPage_ng_container_92_Template, 23, 11, "ng-container", 38)(93, PurchasingPage_tr_93_Template, 3, 0, "tr", 39);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(94, "cis-confirm-dialog", 40);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275listener("cancel", function PurchasingPage_Template_cis_confirm_dialog_cancel_94_listener() {
        return ctx.cancelDeleteConfirm();
      })("confirm", function PurchasingPage_Template_cis_confirm_dialog_confirm_94_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      \u0275\u0275advance(6);
      \u0275\u0275property("open", ctx.createOpen())("title", ctx.editingOrderId() ? "Edit Purchase" : "Receive Purchase");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.headerForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 40, "common.supplier"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 42, "common.invoiceNumber"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 44, "common.addLine"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.lineForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 46, "common.product"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.productOptions());
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.measureOptions());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedProduct());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 48, "common.expiryDate"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" pcs per ", ((tmp_13_0 = ctx.selectedUnit()) == null ? null : tmp_13_0.name) || "measure", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Quantity (", ((tmp_14_0 = ctx.selectedUnit()) == null ? null : tmp_14_0.name) || "measure", ") ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" Buying price per ", ((tmp_15_0 = ctx.selectedUnit()) == null ? null : tmp_15_0.name) || "measure", " (TZS) ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedUnit());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 50, "common.addLine"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.lines().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 52, "common.close"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 54, "common.save"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("total", ctx.orders().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 56, "common.supplier"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 58, "common.invoiceNumber"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 60, "common.lines"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 62, "common.total"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 64, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedOrders());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.orders().length);
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275interpolate1("", \u0275\u0275pipeBind1(95, 66, "common.delete"), " purchase?"))("confirmText", \u0275\u0275interpolate(\u0275\u0275pipeBind1(96, 68, "common.delete")))("cancelText", \u0275\u0275interpolate(\u0275\u0275pipeBind1(97, 70, "common.close")))("open", ctx.confirmDeleteOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, ConfirmDialogComponent, ModalComponent, RowActionsMenuComponent, PagerComponent, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(PurchasingPage, () => [import("./chunk-I4C3KLB4.js").then((m) => m.RepurchaseComponent)], (RepurchaseComponent) => {
    setClassMetadata(PurchasingPage, [{
      type: Component,
      args: [{ selector: "cis-purchasing-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, ConfirmDialogComponent, ModalComponent, MoneyPipe, TranslatePipe, RepurchaseComponent, RowActionsMenuComponent, PagerComponent], template: `<div class="flex items-center justify-between">\r
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
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
        {{ 'common.supplier' | translate }}\r
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="supplier" />\r
      </label>\r
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
        {{ 'common.invoiceNumber' | translate }}\r
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="invoiceNumber" />\r
      </label>\r
    </div>\r
  </form>\r
\r
  <div class="mt-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3 ring-1 ring-slate-100 dark:ring-slate-600">\r
    <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ 'common.addLine' | translate }}</h4>\r
\r
    <form class="mt-3 grid gap-3" [formGroup]="lineForm" (ngSubmit)="addLine()">\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.product' | translate }}\r
          <select\r
            class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"\r
            formControlName="productId"\r
            (change)="onProductChange()"\r
          >\r
            <option [ngValue]="null">Select product</option>\r
            <option *ngFor="let p of productOptions()" [ngValue]="p.id">\r
              {{ p.name }} \u2014 {{ p.sku }}{{ p.active ? '' : ' (inactive)' }}\r
            </option>\r
          </select>\r
        </label>\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          Purchase type\r
          <select\r
            class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"\r
            formControlName="measure"\r
            (change)="onMeasureChange()"\r
          >\r
            <option value="">Select measure</option>\r
            <option *ngFor="let u of measureOptions()" [value]="u.name">{{ u.name }}</option>\r
          </select>\r
        </label>\r
      </div>\r
\r
      <p class="text-xs text-slate-500 dark:text-slate-400" *ngIf="selectedProduct() as p">\r
        {{ p.sku }}<span *ngIf="p.brand"> \xB7 {{ p.brand }}</span><span *ngIf="p.category"> \xB7 {{ p.category }}</span>\r
        <span *ngIf="!p.active"> \xB7 <strong class="text-amber-700 dark:text-amber-400">Inactive \u2014 receiving will not activate it</strong></span>\r
      </p>\r
\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.expiryDate' | translate }}\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="date" formControlName="expiryDate" />\r
        </label>\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          pcs per {{ selectedUnit()?.name || 'measure' }}\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" min="1" step="1" formControlName="unitSize" />\r
        </label>\r
      </div>\r
\r
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          Quantity ({{ selectedUnit()?.name || 'measure' }})\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" min="1" step="1" formControlName="measureQuantity" />\r
        </label>\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          Buying price per {{ selectedUnit()?.name || 'measure' }} (TZS)\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" min="0" step="0.01" formControlName="measurePrice" />\r
        </label>\r
      </div>\r
\r
      <p class="text-xs text-slate-600 dark:text-slate-400" *ngIf="selectedUnit() as u">\r
        {{ lineForm.controls.unitSize.value || 0 }} pcs per {{ u.name }} \u2192 <strong>{{ linePcs() }} pcs</strong> \xB7\r
        cost/pc <strong>{{ costPerPiece() | money }}</strong> \xB7\r
        selling/{{ u.name }} <strong>{{ (u.price ?? 0) | money }}</strong> \xB7\r
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
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ productLabel(l.productId) }}</td>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchasingPage, { className: "PurchasingPage", filePath: "app/features/purchasing/purchasing.page.ts", lineNumber: 90 });
})();
export {
  PurchasingPage
};
//# sourceMappingURL=chunk-IABPPVI4.js.map
