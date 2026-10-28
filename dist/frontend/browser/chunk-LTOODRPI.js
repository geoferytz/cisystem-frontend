import {
  BarcodeScannerComponent,
  PwaService,
  ReceiptDialogComponent,
  ReturnDialogComponent,
  takeUntilDestroyed
} from "./chunk-NLVFH436.js";
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
  RowActionsMenuComponent
} from "./chunk-NDY7KUDP.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  TranslatePipe,
  TranslationService
} from "./chunk-DPFPPFWE.js";
import {
  BranchContext,
  CommonModule,
  Component,
  DatePipe,
  DestroyRef,
  GraphqlService,
  HostListener,
  NgForOf,
  NgIf,
  ToastService,
  UpperCasePipe,
  ViewChild,
  computed,
  effect,
  finalize,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-F3YP4G7X.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/shared/utils/date.utils.ts
function toIsoDate(value) {
  const yyyy = value.getFullYear();
  const mm = String(value.getMonth() + 1).padStart(2, "0");
  const dd = String(value.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// src/app/features/counter/counter.page.ts
var _c0 = ["saleWorkspace"];
function CounterPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actionError());
  }
}
function CounterPage_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function CounterPage_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openExpense());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span")(5, "strong");
    \u0275\u0275text(6, "New Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8, "Record an expense without leaving the counter.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.busy() || !ctx_r0.canExpense());
  }
}
function CounterPage_a_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 67)(1, "span", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8, "Tap here to open the expenses page.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.expenseSuccess());
  }
}
function CounterPage_a_28__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 68);
  }
}
function CounterPage_a_28__svg_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "path", 72)(2, "path", 73)(3, "path", 74);
    \u0275\u0275elementContainerEnd();
  }
}
function CounterPage_a_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69)(1, "span", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275template(3, CounterPage_a_28__svg_path_3_Template, 1, 0, "path", 70)(4, CounterPage_a_28__svg_ng_container_4_Template, 4, 0, "ng-container", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 12);
    \u0275\u0275text(11, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("success-state", !!ctx_r0.success());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.success());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.success());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.success() || "View Sales");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.success() ? "Tap here to open the sales page." : "See all sales, customers and debts.");
  }
}
function CounterPage_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function CounterPage_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printLastSale());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 76)(4, "path", 77)(5, "rect", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 12);
    \u0275\u0275text(13, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 2, "sales.printReceipt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r0.lastSale()) == null ? null : tmp_2_0.referenceNumber) || "#" + ((tmp_2_0 = ctx_r0.lastSale()) == null ? null : tmp_2_0.id));
  }
}
function CounterPage_section_56_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    \u0275\u0275property("value", b_r5.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", b_r5.name, " (", b_r5.code, ")");
  }
}
function CounterPage_section_56_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function CounterPage_section_56_button_31_Template_button_click_0_listener() {
      const name_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.category.set(name_r7);
      return \u0275\u0275resetView(ctx_r0.visibleLimit.set(36));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.category() === name_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(name_r7);
  }
}
function CounterPage_section_56_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.catalogError());
  }
}
function CounterPage_section_56_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275text(1, "Loading your product catalog\u2026");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_section_56_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function CounterPage_section_56_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      \u0275\u0275nextContext();
      const cartPanel_r9 = \u0275\u0275reference(39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewCart(cartPanel_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "money");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("View cart (", ctx_r0.itemCount(), ") \xB7 ", \u0275\u0275pipeBind1(2, 2, ctx_r0.total()));
  }
}
function CounterPage_section_56_div_35_button_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const count_r12 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", count_r12, " in cart");
  }
}
function CounterPage_section_56_div_35_button_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", product_r11.brand);
  }
}
function CounterPage_section_56_div_35_button_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "common.expiry"), ": ", product_r11.expiryDate, " ");
  }
}
function CounterPage_section_56_div_35_button_1_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-[#B81104]", product_r11.daysToExpiry <= 7)("dark:text-red-400", product_r11.daysToExpiry <= 7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 7, "common.expiresIn"), " ", product_r11.daysToExpiry, " ", \u0275\u0275pipeBind1(3, 9, "common.days"), " ");
  }
}
function CounterPage_section_56_div_35_button_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "money");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "common.suggested"), " ", \u0275\u0275pipeBind1(3, 4, product_r11.suggestedSellingPrice), " ");
  }
}
function CounterPage_section_56_div_35_button_1_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 137);
    \u0275\u0275listener("click", function CounterPage_section_56_div_35_button_1_button_22_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const product_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.addProduct(product_r11, true);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "money");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r0.canAddDiscounted(product_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Add ", \u0275\u0275pipeBind1(2, 2, product_r11.suggestedSellingPrice));
  }
}
function CounterPage_section_56_div_35_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 122);
    \u0275\u0275listener("click", function CounterPage_section_56_div_35_button_1_Template_button_click_0_listener() {
      const product_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addProduct(product_r11));
    });
    \u0275\u0275elementStart(1, "span", 123)(2, "span", 124);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CounterPage_section_56_div_35_button_1_span_5_Template, 2, 1, "span", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 126);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11);
    \u0275\u0275template(12, CounterPage_section_56_div_35_button_1_span_12_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CounterPage_section_56_div_35_button_1_span_13_Template, 3, 4, "span", 127);
    \u0275\u0275elementStart(14, "span", 128);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CounterPage_section_56_div_35_button_1_small_17_Template, 4, 11, "small", 129)(18, CounterPage_section_56_div_35_button_1_span_18_Template, 4, 6, "span", 130);
    \u0275\u0275elementStart(19, "span", 131)(20, "small");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, CounterPage_section_56_div_35_button_1_button_22_Template, 3, 4, "button", 132);
    \u0275\u0275elementStart(23, "span", 133);
    \u0275\u0275text(24, "+");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("in-cart", ctx_r0.quantityByProduct().has(product_r11.id));
    \u0275\u0275property("disabled", !ctx_r0.canAdd(product_r11));
    \u0275\u0275attribute("aria-label", "Add " + product_r11.name + " to cart");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 18, product_r11.name.slice(0, 2)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.quantityByProduct().get(product_r11.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r11.category || "Uncategorized");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r11.sku);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r11.brand);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r11.expiryDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r11.sellingPrice === null ? "Price not set" : \u0275\u0275pipeBind1(16, 20, product_r11.sellingPrice));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r11.daysToExpiry !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r11.suggestedSellingPrice !== null);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("out-of-stock", product_r11.availableQuantity === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r11.availableQuantity > 0 ? product_r11.availableQuantity + " available" : "Out of stock");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r11.suggestedSellingPrice !== null);
  }
}
function CounterPage_section_56_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275template(1, CounterPage_section_56_div_35_button_1_Template, 25, 22, "button", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.visibleProducts());
  }
}
function CounterPage_section_56_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "h3");
    \u0275\u0275text(2, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try another search or category.");
    \u0275\u0275elementEnd()();
  }
}
function CounterPage_section_56_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 139);
    \u0275\u0275listener("click", function CounterPage_section_56_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.visibleLimit.set(ctx_r0.visibleLimit() + 36));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Show more products (", ctx_r0.filteredProducts().length - ctx_r0.visibleLimit(), " remaining)");
  }
}
function CounterPage_section_56_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 140);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CounterPage_section_56_button_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openFindSale());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(1, 4, "returns.action")))("disabled", ctx_r0.busy());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u21A9 ", \u0275\u0275pipeBind1(3, 6, "returns.tabReturn"));
  }
}
function CounterPage_section_56_option_61_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", c_r16.phone);
  }
}
function CounterPage_section_56_option_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 105);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CounterPage_section_56_option_61_span_2_Template, 2, 1, "span", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.phone);
  }
}
function CounterPage_section_56_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "money");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r0.customerName(ctx_r0.headerForm.controls.customerId.value), " \xB7 ", \u0275\u0275pipeBind1(2, 3, "customers.debt"), ": ", \u0275\u0275pipeBind1(3, 5, ctx_r0.customerDebt()), " ");
  }
}
function CounterPage_section_56_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142)(1, "button", 143);
    \u0275\u0275listener("click", function CounterPage_section_56_div_63_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.newCustomerOpen.set(true));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "customers.newInline"));
  }
}
function CounterPage_section_56_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275element(1, "input", 145);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "input", 146);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "div", 147)(6, "button", 41);
    \u0275\u0275listener("click", function CounterPage_section_56_div_69_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.newCustomerOpen.set(false));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 42);
    \u0275\u0275listener("click", function CounterPage_section_56_div_69_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.createCustomerInline());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r0.newCustomerForm);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate1("", \u0275\u0275pipeBind1(2, 9, "customers.name"), " *"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(4, 11, "customers.phone")));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.newCustomerBusy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "common.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.newCustomerBusy() || ctx_r0.newCustomerForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.newCustomerBusy() ? "\u2026" : \u0275\u0275pipeBind1(11, 15, "customers.createInline"));
  }
}
function CounterPage_section_56_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 148);
    \u0275\u0275element(2, "path", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Your cart is ready");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Select a product to start this sale.");
    \u0275\u0275elementEnd()();
  }
}
function CounterPage_section_56_article_72_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 158);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "common.expiry"), ": ", line_r20.expiryDate);
  }
}
function CounterPage_section_56_article_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 150)(1, "div", 151)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275template(7, CounterPage_section_56_article_72_span_7_Template, 3, 4, "span", 152);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 153);
    \u0275\u0275listener("click", function CounterPage_section_56_article_72_Template_button_click_8_listener() {
      const line_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeProduct(line_r20.productId));
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 154)(14, "div", 155)(15, "button", 156);
    \u0275\u0275listener("click", function CounterPage_section_56_article_72_Template_button_click_15_listener() {
      const line_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setQuantity(line_r20.productId, line_r20.quantity - 1));
    });
    \u0275\u0275text(16, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 157);
    \u0275\u0275listener("change", function CounterPage_section_56_article_72_Template_input_change_17_listener($event) {
      const line_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setQuantity(line_r20.productId, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 156);
    \u0275\u0275listener("click", function CounterPage_section_56_article_72_Template_button_click_18_listener() {
      const line_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setQuantity(line_r20.productId, line_r20.quantity + 1));
    });
    \u0275\u0275text(19, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "money");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const line_r20 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(line_r20.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", line_r20.sku, " \xB7 ", line_r20.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", line_r20.expiryDate);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275attribute("aria-label", "Remove " + line_r20.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 15, line_r20.unitPrice), " each");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.busy() || line_r20.quantity <= 1);
    \u0275\u0275attribute("aria-label", "Decrease " + line_r20.productName + " quantity");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", line_r20.quantity)("readonly", ctx_r0.busy());
    \u0275\u0275attribute("aria-label", line_r20.productName + " quantity");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275attribute("aria-label", "Increase " + line_r20.productName + " quantity");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 17, line_r20.quantity * line_r20.unitPrice));
  }
}
function CounterPage_section_56_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275text(1, "Some items no longer have enough stock. Adjust quantities or hold this cart.");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_section_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 79, 0)(2, "div", 80)(3, "div", 81)(4, "div")(5, "h2");
    \u0275\u0275text(6, "Choose products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Prices come from your product settings.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 41);
    \u0275\u0275listener("click", function CounterPage_section_56_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSale());
    });
    \u0275\u0275text(10, "Close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 82)(12, "label", 83)(13, "span", 84);
    \u0275\u0275text(14, "Search products");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 85);
    \u0275\u0275element(16, "circle", 86)(17, "path", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "input", 88);
    \u0275\u0275listener("input", function CounterPage_section_56_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setSearch($event.target.value));
    })("keydown.enter", function CounterPage_section_56_Template_input_keydown_enter_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.onSearchEnter();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 89);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "select", 90);
    \u0275\u0275listener("change", function CounterPage_section_56_Template_select_change_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changeLocation());
    });
    \u0275\u0275template(23, CounterPage_section_56_option_23_Template, 2, 3, "option", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 41);
    \u0275\u0275listener("click", function CounterPage_section_56_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.scannerOpen.set(true));
    });
    \u0275\u0275text(25, "Scan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 41);
    \u0275\u0275listener("click", function CounterPage_section_56_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadProducts());
    });
    \u0275\u0275text(27, "Refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 91)(29, "button", 92);
    \u0275\u0275listener("click", function CounterPage_section_56_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.category.set("");
      return \u0275\u0275resetView(ctx_r0.visibleLimit.set(36));
    });
    \u0275\u0275text(30, "All products");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, CounterPage_section_56_button_31_Template, 2, 3, "button", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, CounterPage_section_56_div_32_Template, 2, 1, "div", 6)(33, CounterPage_section_56_div_33_Template, 2, 0, "div", 94)(34, CounterPage_section_56_button_34_Template, 3, 4, "button", 95)(35, CounterPage_section_56_div_35_Template, 2, 1, "div", 96)(36, CounterPage_section_56_div_36_Template, 5, 0, "div", 97)(37, CounterPage_section_56_button_37_Template, 2, 1, "button", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "aside", 99, 1)(40, "div", 81)(41, "div")(42, "h2");
    \u0275\u0275text(43, "Sales cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 100);
    \u0275\u0275template(47, CounterPage_section_56_button_47_Template, 4, 8, "button", 101);
    \u0275\u0275elementStart(48, "span", 102);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "form", 103)(51, "label");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementStart(54, "small");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "select", 104)(58, "option", 105);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, CounterPage_section_56_option_61_Template, 3, 3, "option", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, CounterPage_section_56_div_62_Template, 4, 7, "div", 37)(63, CounterPage_section_56_div_63_Template, 4, 4, "div", 107);
    \u0275\u0275elementStart(64, "label");
    \u0275\u0275text(65, "Reference ");
    \u0275\u0275elementStart(66, "small");
    \u0275\u0275text(67, "(optional \u2014 auto)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, CounterPage_section_56_div_69_Template, 12, 17, "div", 109)(70, CounterPage_section_56_div_70_Template, 7, 0, "div", 97);
    \u0275\u0275elementStart(71, "div", 110);
    \u0275\u0275template(72, CounterPage_section_56_article_72_Template, 23, 19, "article", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 112);
    \u0275\u0275template(74, CounterPage_section_56_div_74_Template, 2, 0, "div", 53);
    \u0275\u0275elementStart(75, "div", 113)(76, "span");
    \u0275\u0275text(77, "Total to charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "strong", 26);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "p", 39);
    \u0275\u0275text(82, "Stock is checked again at checkout. Held carts do not reserve stock.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "button", 114);
    \u0275\u0275listener("click", function CounterPage_section_56_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCart(true));
    });
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 115);
    \u0275\u0275listener("click", function CounterPage_section_56_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCart());
    });
    \u0275\u0275text(87, "Hold sale for later");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "button", 116);
    \u0275\u0275listener("click", function CounterPage_section_56_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r4);
      const saleWorkspace_r21 = \u0275\u0275reference(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewProducts(saleWorkspace_r21));
    });
    \u0275\u0275text(89, "Back to products");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r0.search());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 38, "common.branch"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.location)("disabled", ctx_r0.lines().length > 0 || ctx_r0.busy() || ctx_r0.branchCtx.locked());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.branchCtx.options());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.catalogLoading() || ctx_r0.busy());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("selected", !ctx_r0.category());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.productCategories());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.catalogError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.catalogLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.lines().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.catalogLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.catalogLoading() && !ctx_r0.catalogError() && !ctx_r0.filteredProducts().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredProducts().length > ctx_r0.visibleLimit());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.cartVersion() === null ? "New transaction" : "Resumed held sale");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.canReturn());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.itemCount());
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.headerForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 40, "common.customer"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(optional \u2014 ", \u0275\u0275pipeBind1(56, 42, "customers.walkIn"), " if empty)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 44, "customers.walkIn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.customers());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.customerDebt() != null && ctx_r0.headerForm.controls.customerId.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.newCustomerOpen());
    \u0275\u0275advance(5);
    \u0275\u0275property("readonly", ctx_r0.busy());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.newCustomerOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.lines().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.lines());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.stockIssues() && ctx_r0.lines().length && !ctx_r0.catalogLoading());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 46, ctx_r0.total()));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.busy() || !ctx_r0.lines().length || !ctx_r0.pwa.online() || ctx_r0.stockIssues() || ctx_r0.catalogLoading() || !!ctx_r0.catalogError());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.busy() ? "Please wait\u2026" : "Charge " + \u0275\u0275pipeBind1(85, 48, ctx_r0.total()));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.busy() || !ctx_r0.lines().length || !ctx_r0.pwa.online());
  }
}
function CounterPage_section_57_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingError());
  }
}
function CounterPage_section_57_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275text(1, "Loading pending sales\u2026");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_section_57_cis_pager_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cis-pager", 165);
    \u0275\u0275twoWayListener("pageSizeChange", function CounterPage_section_57_cis_pager_20_Template_cis_pager_pageSizeChange_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pendingPageSize, $event) || (ctx_r0.pendingPageSize = $event);
      return \u0275\u0275resetView($event);
    })("pageIndexChange", function CounterPage_section_57_cis_pager_20_Template_cis_pager_pageIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pendingPageIndex, $event) || (ctx_r0.pendingPageIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("total", ctx_r0.filteredPending().length);
    \u0275\u0275twoWayProperty("pageSize", ctx_r0.pendingPageSize)("pageIndex", ctx_r0.pendingPageIndex);
  }
}
function CounterPage_section_57_div_21_tr_17_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 174);
    \u0275\u0275listener("click", function CounterPage_section_57_div_21_tr_17_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const cart_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelTarget.set(cart_r25));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 171);
    \u0275\u0275element(2, "path", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Cancel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r0.busy());
  }
}
function CounterPage_section_57_div_21_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "span", 169);
    \u0275\u0275text(20, "On hold");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "cis-row-actions")(23, "button", 170);
    \u0275\u0275listener("click", function CounterPage_section_57_div_21_tr_17_Template_button_click_23_listener() {
      const cart_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSale(cart_r25));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 171);
    \u0275\u0275element(25, "path", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, CounterPage_section_57_div_21_tr_17_button_27_Template, 4, 1, "button", 173);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cart_r25 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cart_r25.customer || "Walk-in customer");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cart_r25.referenceNumber || "#" + cart_r25.id.slice(0, 8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", cart_r25.lines.length, " products");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 7, cart_r25.updatedAt, "dd MMM, HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, cart_r25.total));
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.busy() || !ctx_r0.canSell());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.canDeleteCarts());
  }
}
function CounterPage_section_57_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166)(1, "table", 167)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Sale / customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Last saved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, CounterPage_section_57_div_21_tr_17_Template, 28, 12, "tr", 168);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.displayedPending());
  }
}
function CounterPage_section_57_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pendingSearch() ? "No matching sales" : "All caught up");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pendingSearch() ? "Try a different customer or reference." : "No held sales right now. Start a new sale and hold it here whenever you need.");
  }
}
function CounterPage_section_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 160)(1, "div", 81)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Pending sales ");
    \u0275\u0275elementStart(5, "span", 102);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Held carts from all cashiers. Resume a sale when the customer is ready.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 41);
    \u0275\u0275listener("click", function CounterPage_section_57_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadPending());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label", 161)(12, "span", 84);
    \u0275\u0275text(13, "Search pending sales");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 85);
    \u0275\u0275element(15, "circle", 86)(16, "path", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "input", 162);
    \u0275\u0275listener("input", function CounterPage_section_57_Template_input_input_17_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pendingSearch.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, CounterPage_section_57_div_18_Template, 2, 1, "div", 6)(19, CounterPage_section_57_div_19_Template, 2, 0, "div", 94)(20, CounterPage_section_57_cis_pager_20_Template, 1, 3, "cis-pager", 163)(21, CounterPage_section_57_div_21_Template, 18, 1, "div", 164)(22, CounterPage_section_57_div_22_Template, 5, 2, "div", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.pending().length);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.pendingLoading() || ctx_r0.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingLoading() ? "Refreshing\u2026" : "Refresh list");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r0.pendingSearch());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pendingError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pendingLoading() && !ctx_r0.pending().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredPending().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredPending().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pendingLoading() && !ctx_r0.pendingError() && !ctx_r0.filteredPending().length);
  }
}
function CounterPage_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "money");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, ctx_r0.debtPreview()), " ", \u0275\u0275pipeBind1(3, 4, "customers.debtNote"), " ");
  }
}
function CounterPage_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.discountError());
  }
}
function CounterPage_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275text(1, "Select a registered customer to sell on debt.");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_div_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actionError());
  }
}
function CounterPage_option_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    \u0275\u0275property("value", item_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r27.name);
  }
}
function CounterPage_p_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 159);
    \u0275\u0275text(1, "No expense categories are available. Ask an administrator to create a category, then ");
    \u0275\u0275elementStart(2, "button", 92);
    \u0275\u0275listener("click", function CounterPage_p_145_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadExpenseCategories());
    });
    \u0275\u0275text(3, "retry");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ".");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_p_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1, "Choose a date and category, and enter an amount greater than zero.");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_p_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.expenseError());
  }
}
function CounterPage_p_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.findSaleError());
  }
}
var CART_FIELDS = "id version customer referenceNumber createdAt updatedAt createdBy total lines { productId sku productName quantity unitPrice location }";
var CounterPage = class _CounterPage {
  perm = inject(PermissionService);
  pwa = inject(PwaService);
  gql = inject(GraphqlService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  workspace;
  workspaceOpen = signal(false, ...ngDevMode ? [{ debugName: "workspaceOpen" }] : []);
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  pending = signal([], ...ngDevMode ? [{ debugName: "pending" }] : []);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  lines = signal([], ...ngDevMode ? [{ debugName: "lines" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  catalogLoading = signal(false, ...ngDevMode ? [{ debugName: "catalogLoading" }] : []);
  pendingLoading = signal(false, ...ngDevMode ? [{ debugName: "pendingLoading" }] : []);
  categoriesLoading = signal(false, ...ngDevMode ? [{ debugName: "categoriesLoading" }] : []);
  catalogError = signal(null, ...ngDevMode ? [{ debugName: "catalogError" }] : []);
  pendingError = signal(null, ...ngDevMode ? [{ debugName: "pendingError" }] : []);
  actionError = signal(null, ...ngDevMode ? [{ debugName: "actionError" }] : []);
  expenseError = signal(null, ...ngDevMode ? [{ debugName: "expenseError" }] : []);
  success = signal(null, ...ngDevMode ? [{ debugName: "success" }] : []);
  expenseSuccess = signal(null, ...ngDevMode ? [{ debugName: "expenseSuccess" }] : []);
  customerDebt = signal(null, ...ngDevMode ? [{ debugName: "customerDebt" }] : []);
  lastSale = signal(null, ...ngDevMode ? [{ debugName: "lastSale" }] : []);
  receiptOpen = signal(false, ...ngDevMode ? [{ debugName: "receiptOpen" }] : []);
  receiptOrder = signal(null, ...ngDevMode ? [{ debugName: "receiptOrder" }] : []);
  lastDebtCustomerId = null;
  // ---- Returns / exchange from the counter
  toast = inject(ToastService);
  i18n = inject(TranslationService);
  findSaleOpen = signal(false, ...ngDevMode ? [{ debugName: "findSaleOpen" }] : []);
  findSaleQuery = signal("", ...ngDevMode ? [{ debugName: "findSaleQuery" }] : []);
  findSaleBusy = signal(false, ...ngDevMode ? [{ debugName: "findSaleBusy" }] : []);
  findSaleError = signal(null, ...ngDevMode ? [{ debugName: "findSaleError" }] : []);
  returnOrderId = signal(null, ...ngDevMode ? [{ debugName: "returnOrderId" }] : []);
  canReturn() {
    return this.perm.canCreate("RETURNS") || this.perm.canCreate("COUNTER") || this.perm.canCreate("SALES");
  }
  openFindSale() {
    this.findSaleQuery.set("");
    this.findSaleError.set(null);
    this.findSaleOpen.set(true);
  }
  findSale() {
    const q = this.findSaleQuery().trim();
    if (!q || this.findSaleBusy())
      return;
    this.findSaleBusy.set(true);
    this.findSaleError.set(null);
    this.gql.request("query FindSaleForReturn { salesOrders { id referenceNumber } }").pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.findSaleBusy.set(false))).subscribe({
      next: (res) => {
        const needle = q.toLowerCase().replace(/^#/, "");
        const match = res.salesOrders.find((o) => (o.referenceNumber ?? "").toLowerCase() === needle) ?? res.salesOrders.find((o) => String(o.id) === needle);
        if (!match) {
          this.findSaleError.set(this.i18n.translate("returns.saleNotFound"));
          return;
        }
        this.findSaleOpen.set(false);
        this.returnOrderId.set(String(match.id));
      },
      error: (error) => this.findSaleError.set(this.message(error, "Could not search sales."))
    });
  }
  onReturnCompleted(r) {
    this.toast.success(`${this.i18n.translate(r.isExchange ? "returns.exchangeDone" : "returns.returnDone")} \u2014 ${r.reference}`);
    this.loadProducts();
  }
  dirty = signal(false, ...ngDevMode ? [{ debugName: "dirty" }] : []);
  search = signal("", ...ngDevMode ? [{ debugName: "search" }] : []);
  category = signal("", ...ngDevMode ? [{ debugName: "category" }] : []);
  visibleLimit = signal(36, ...ngDevMode ? [{ debugName: "visibleLimit" }] : []);
  pendingSearch = signal("", ...ngDevMode ? [{ debugName: "pendingSearch" }] : []);
  checkoutOpen = signal(false, ...ngDevMode ? [{ debugName: "checkoutOpen" }] : []);
  expenseOpen = signal(false, ...ngDevMode ? [{ debugName: "expenseOpen" }] : []);
  scannerOpen = signal(false, ...ngDevMode ? [{ debugName: "scannerOpen" }] : []);
  cancelTarget = signal(null, ...ngDevMode ? [{ debugName: "cancelTarget" }] : []);
  discardTarget = signal(null, ...ngDevMode ? [{ debugName: "discardTarget" }] : []);
  leaveResolve = null;
  cartId = signal(crypto.randomUUID(), ...ngDevMode ? [{ debugName: "cartId" }] : []);
  cartVersion = signal(null, ...ngDevMode ? [{ debugName: "cartVersion" }] : []);
  location = new FormControl("MAIN", { nonNullable: true });
  branchCtx = inject(BranchContext);
  syncLocation = effect(() => {
    const code = this.branchCtx.writeBranch();
    if (code && this.location.value !== code && !this.lines().length) {
      this.location.setValue(code);
    }
  }, ...ngDevMode ? [{ debugName: "syncLocation" }] : []);
  headerForm = this.fb.nonNullable.group({ customer: ["", Validators.maxLength(200)], customerId: [null], referenceNumber: ["", Validators.maxLength(120)] });
  customers = signal([], ...ngDevMode ? [{ debugName: "customers" }] : []);
  newCustomerOpen = signal(false, ...ngDevMode ? [{ debugName: "newCustomerOpen" }] : []);
  newCustomerBusy = signal(false, ...ngDevMode ? [{ debugName: "newCustomerBusy" }] : []);
  newCustomerForm = this.fb.nonNullable.group({ name: ["", [Validators.required, Validators.maxLength(200)]], phone: ["", [Validators.maxLength(40)]] });
  paymentMethod = signal("CASH", ...ngDevMode ? [{ debugName: "paymentMethod" }] : []);
  canSell = () => this.perm.canCreate("COUNTER") || this.perm.canCreate("SALES");
  canViewSales = () => this.perm.canView("COUNTER") || this.perm.canView("SALES");
  canDeleteCarts = () => this.perm.canDelete("COUNTER") || this.perm.canDelete("SALES");
  canExpense = () => this.perm.canCreate("COUNTER") || this.perm.canCreate("EXPENSES");
  amountReceived = signal(null, ...ngDevMode ? [{ debugName: "amountReceived" }] : []);
  debtPreview = computed(() => {
    const r = this.amountReceived();
    if (r == null)
      return 0;
    return Math.round(Math.max(0, this.payable() - r) * 1e4) / 1e4;
  }, ...ngDevMode ? [{ debugName: "debtPreview" }] : []);
  discountControl = this.fb.nonNullable.control(0);
  discountAmount = signal(0, ...ngDevMode ? [{ debugName: "discountAmount" }] : []);
  payable = computed(() => Math.round(Math.max(0, this.total() - this.discountAmount()) * 1e4) / 1e4, ...ngDevMode ? [{ debugName: "payable" }] : []);
  discountError = computed(() => {
    const d = this.discountAmount();
    if (d < 0)
      return "Discount cannot be negative.";
    if (d > this.total())
      return "Discount cannot exceed the sale total.";
    return null;
  }, ...ngDevMode ? [{ debugName: "discountError" }] : []);
  expenseForm = this.fb.nonNullable.group({
    date: [toIsoDate(/* @__PURE__ */ new Date()), Validators.required],
    categoryId: ["", Validators.required],
    description: ["", Validators.maxLength(1e3)],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    paymentMethod: ["CASH", Validators.required]
  });
  productCategories = computed(() => [...new Set(this.products().map((p) => p.category || "Uncategorized"))].sort(), ...ngDevMode ? [{ debugName: "productCategories" }] : []);
  filteredProducts = computed(() => {
    const query = this.search().trim().toLowerCase();
    return this.products().filter((p) => (p.availableQuantity ?? 0) > 0 && (!this.category() || (p.category || "Uncategorized") === this.category()) && (!query || [p.name, p.sku, p.barcode, p.brand].some((value) => value?.toLowerCase().includes(query))));
  }, ...ngDevMode ? [{ debugName: "filteredProducts" }] : []);
  visibleProducts = computed(() => this.filteredProducts().slice(0, this.visibleLimit()), ...ngDevMode ? [{ debugName: "visibleProducts" }] : []);
  quantityByProduct = computed(() => new Map(this.lines().map((line) => [line.productId, line.quantity])), ...ngDevMode ? [{ debugName: "quantityByProduct" }] : []);
  itemCount = computed(() => this.lines().reduce((sum, line) => sum + line.quantity, 0), ...ngDevMode ? [{ debugName: "itemCount" }] : []);
  total = computed(() => Math.round(this.lines().reduce((sum, line) => sum + line.quantity * line.unitPrice, 0) * 1e4) / 1e4, ...ngDevMode ? [{ debugName: "total" }] : []);
  pendingValue = computed(() => this.pending().reduce((sum, cart) => sum + cart.total, 0), ...ngDevMode ? [{ debugName: "pendingValue" }] : []);
  filteredPending = computed(() => {
    const query = this.pendingSearch().trim().toLowerCase();
    return this.pending().filter((cart) => !query || [cart.id, cart.customer, cart.referenceNumber, ...cart.lines.map((l) => l.productName)].some((value) => value?.toLowerCase().includes(query)));
  }, ...ngDevMode ? [{ debugName: "filteredPending" }] : []);
  pendingPageSize = signal(10, ...ngDevMode ? [{ debugName: "pendingPageSize" }] : []);
  pendingPageIndex = signal(0, ...ngDevMode ? [{ debugName: "pendingPageIndex" }] : []);
  displayedPending = computed(() => {
    const size = this.pendingPageSize();
    const start = this.pendingPageIndex() * size;
    return this.filteredPending().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedPending" }] : []);
  stockIssues = computed(() => {
    const byId = new Map(this.products().map((p) => [p.id, p]));
    return this.lines().some((line) => !byId.has(line.productId) || line.quantity > byId.get(line.productId).availableQuantity);
  }, ...ngDevMode ? [{ debugName: "stockIssues" }] : []);
  constructor() {
    this.perm.load();
    this.loadCustomers();
    this.headerForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.dirty.set(true);
      const v = this.headerForm.getRawValue();
      if (v.customerId && v.customer !== this.customerName(v.customerId)) {
        this.headerForm.controls.customer.setValue(this.customerName(v.customerId), { emitEvent: false });
      }
      if (v.customerId !== this.lastDebtCustomerId) {
        this.lastDebtCustomerId = v.customerId;
        this.loadCustomerDebt(v.customerId);
      }
    });
    this.discountControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((v) => this.discountAmount.set(Number(v) || 0));
    effect(() => {
      const canSell = this.canSell();
      const canViewSales = this.canViewSales();
      const canExpense = this.canExpense();
      untracked(() => {
        if (canSell)
          this.loadProducts();
        if (canViewSales)
          this.loadPending();
        if (canExpense)
          this.loadExpenseCategories();
      });
    });
  }
  loadProducts() {
    this.catalogLoading.set(true);
    this.catalogError.set(null);
    this.gql.request(`query CounterProducts($location: String) {
      counterProducts(location: $location) { id sku barcode name brand category unitOfMeasure sellingPrice availableQuantity batchNumber expiryDate daysToExpiry suggestedSellingPrice }
    }`, { location: this.location.value.trim() || this.branchCtx.writeBranch() }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.catalogLoading.set(false))).subscribe({
      next: (data) => this.products.set(data.counterProducts),
      error: (error) => this.catalogError.set(this.message(error, "Could not load products. Please retry."))
    });
  }
  loadPending() {
    if (!this.canViewSales())
      return;
    this.pendingLoading.set(true);
    this.pendingError.set(null);
    this.gql.request(`query PendingCounterCarts { pendingCounterCarts { ${CART_FIELDS} } }`).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.pendingLoading.set(false))).subscribe({
      next: (data) => this.pending.set(data.pendingCounterCarts),
      error: (error) => this.pendingError.set(this.message(error, "Could not load pending sales. Please retry."))
    });
  }
  loadExpenseCategories() {
    this.categoriesLoading.set(true);
    this.gql.request("query CounterExpenseCategories { counterExpenseCategories { id name } }").pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.categoriesLoading.set(false))).subscribe({
      next: (data) => this.categories.set(data.counterExpenseCategories),
      error: (error) => this.expenseError.set(this.message(error, "Could not load expense categories."))
    });
  }
  openSale(cart = "new") {
    if (this.busy() || !this.canSell())
      return;
    if (this.dirty() && this.lines().length) {
      this.discardTarget.set(cart);
      return;
    }
    this.startSale(cart);
  }
  startSale(cart) {
    this.actionError.set(null);
    this.success.set(null);
    this.expenseSuccess.set(null);
    this.search.set("");
    this.category.set("");
    this.visibleLimit.set(36);
    if (cart === "new")
      this.resetCart();
    else
      this.applyCart(cart);
    this.workspaceOpen.set(true);
    this.loadProducts();
    setTimeout(() => this.scrollTo(this.workspace?.nativeElement));
  }
  viewCart(panel) {
    this.scrollTo(panel);
  }
  viewProducts(section) {
    this.scrollTo(section);
  }
  scrollTo(element) {
    element?.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  closeSale() {
    if (this.busy())
      return;
    if (this.dirty() && this.lines().length)
      this.discardTarget.set("close");
    else
      this.workspaceOpen.set(false);
  }
  confirmDiscard() {
    const target = this.discardTarget();
    this.discardTarget.set(null);
    if (!target)
      return;
    if (target === "leave") {
      this.resolveLeave(true);
      return;
    }
    if (target === "close") {
      this.resetCart();
      this.workspaceOpen.set(false);
    } else
      this.startSale(target);
  }
  cancelDiscard() {
    const target = this.discardTarget();
    this.discardTarget.set(null);
    if (target === "leave")
      this.resolveLeave(false);
  }
  resolveLeave(value) {
    const resolve = this.leaveResolve;
    this.leaveResolve = null;
    resolve?.(value);
  }
  changeLocation() {
    if (this.lines().length || this.busy())
      return;
    this.products.set([]);
    this.loadProducts();
  }
  setSearch(value) {
    this.search.set(value);
    this.visibleLimit.set(36);
  }
  onSearchEnter() {
    const query = this.search().trim().toLowerCase();
    if (!query)
      return;
    const matches = this.filteredProducts();
    const exact = matches.find((p) => p.barcode?.toLowerCase() === query || p.sku.toLowerCase() === query);
    const product = exact ?? (matches.length === 1 ? matches[0] : void 0);
    if (product)
      this.addScannedProduct(product);
  }
  onScanned(code) {
    const query = code.trim().toLowerCase();
    const product = this.products().find((p) => p.barcode?.toLowerCase() === query || p.sku.toLowerCase() === query);
    if (!product) {
      this.actionError.set(`No product matches barcode "${code.trim()}". Add the barcode to the product first.`);
      return;
    }
    this.addScannedProduct(product);
  }
  addScannedProduct(product) {
    if (!this.canAdd(product)) {
      this.actionError.set(product.availableQuantity === 0 ? `'${product.name}' is out of stock.` : product.sellingPrice === null ? `'${product.name}' has no selling price set.` : `'${product.name}' cannot be added right now.`);
      return;
    }
    this.addProduct(product);
    this.search.set("");
  }
  canAdd(product) {
    return !this.busy() && !this.catalogLoading() && !this.catalogError() && product.sellingPrice !== null && Number.isFinite(product.sellingPrice) && product.sellingPrice >= 0 && (this.quantityByProduct().get(product.id) || 0) < product.availableQuantity;
  }
  canAddDiscounted(product) {
    return this.canAdd(product) && product.suggestedSellingPrice !== null && Number.isFinite(product.suggestedSellingPrice) && product.suggestedSellingPrice >= 0;
  }
  addProduct(product, discounted = false) {
    if (discounted ? !this.canAddDiscounted(product) : !this.canAdd(product))
      return;
    const existing = this.lines().find((line) => line.productId === product.id);
    const unitPrice = discounted ? product.suggestedSellingPrice : product.sellingPrice;
    if (existing) {
      if (Math.abs(existing.unitPrice - unitPrice) > 1e-4) {
        this.actionError.set("This product is already in the cart at a different price. Remove it first.");
        return;
      }
      this.setQuantity(product.id, existing.quantity + 1);
    } else {
      if (this.lines().length >= 100) {
        this.actionError.set("A cart can contain up to 100 different products.");
        return;
      }
      this.lines.update((lines) => [...lines, {
        productId: product.id,
        sku: product.sku,
        productName: product.name,
        quantity: 1,
        unitPrice,
        expiryDate: product.expiryDate,
        location: this.location.value.trim() || this.branchCtx.writeBranch()
      }]);
      this.dirty.set(true);
      this.actionError.set(null);
    }
  }
  setQuantity(productId, value) {
    if (this.busy())
      return;
    const quantity = Number(value);
    const product = this.products().find((p) => p.id === productId);
    if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 1e6) {
      this.actionError.set("Enter a valid whole-number quantity.");
      return;
    }
    if (!product || quantity > product.availableQuantity) {
      this.actionError.set("This quantity exceeds the currently available stock.");
      return;
    }
    this.lines.update((lines) => lines.map((line) => line.productId === productId ? __spreadProps(__spreadValues({}, line), { quantity }) : line));
    this.dirty.set(true);
    this.actionError.set(null);
  }
  removeProduct(productId) {
    if (this.busy())
      return;
    this.lines.update((lines) => lines.filter((line) => line.productId !== productId));
    this.dirty.set(true);
  }
  saveCart(checkout = false) {
    if (this.busy() || !this.canSell() || !this.pwa.online() || !this.lines().length)
      return;
    this.headerForm.markAllAsTouched();
    if (this.headerForm.invalid)
      return;
    if (checkout && (this.stockIssues() || this.catalogLoading() || this.catalogError())) {
      this.actionError.set("Refresh products and check stock before checkout.");
      return;
    }
    this.busy.set(true);
    this.actionError.set(null);
    const header = this.headerForm.getRawValue();
    this.gql.request(`mutation SaveCounterCart($input: SaveCounterCartInput!) { saveCounterCart(input: $input) { ${CART_FIELDS} } }`, {
      input: {
        id: this.cartId(),
        version: this.cartVersion(),
        customer: header.customer.trim() || null,
        referenceNumber: header.referenceNumber.trim() || null,
        lines: this.lines().map(({ productId, quantity, location }) => ({ productId, quantity, location }))
      }
    }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
      next: (data) => {
        this.applyCart(data.saveCounterCart);
        this.loadPending();
        if (checkout)
          this.checkoutOpen.set(true);
        else {
          this.success.set("Sale held. Any authorized cashier can resume it from pending sales.");
          this.resetCart();
          this.workspaceOpen.set(false);
        }
      },
      error: (error) => this.actionError.set(this.message(error, "Could not hold this sale. Your cart has been kept."))
    });
  }
  completeSale() {
    if (this.busy() || !this.checkoutOpen() || this.cartVersion() === null || !this.pwa.online())
      return;
    if (this.discountError()) {
      this.actionError.set(this.discountError());
      return;
    }
    const customerId = this.headerForm.controls.customerId.value;
    const received = this.amountReceived();
    if (received != null && (!Number.isFinite(received) || received < 0)) {
      this.actionError.set("Amount received cannot be negative.");
      return;
    }
    if (this.debtPreview() > 0 && !customerId) {
      this.actionError.set("Select a registered customer to sell on debt.");
      return;
    }
    this.busy.set(true);
    this.actionError.set(null);
    this.gql.request("mutation CheckoutCounterCart($input: CheckoutCounterCartInput!) { checkoutCounterCart(input: $input) { id referenceNumber soldAt soldBy customer paymentMethod amountReceived discount returnedValue lines { productName quantity unitPrice returnedQuantity } } }", {
      input: {
        id: this.cartId(),
        version: this.cartVersion(),
        expectedTotal: this.total(),
        discount: this.discountAmount() || null,
        customerId,
        paymentMethod: this.paymentMethod(),
        amountReceived: received
      }
    }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
      next: (data) => {
        this.lastSale.set(data.checkoutCounterCart);
        this.success.set(`Sale #${data.checkoutCounterCart.id} completed. Stock has been updated.`);
        this.checkoutOpen.set(false);
        this.workspaceOpen.set(false);
        this.resetCart();
        this.loadPending();
        this.loadProducts();
        this.receiptOrder.set(data.checkoutCounterCart);
        this.receiptOpen.set(true);
      },
      error: (error) => this.actionError.set(this.message(error, "Checkout failed. Your held cart is safe; retrying will not duplicate this sale."))
    });
  }
  cancelHeldCart() {
    const cart = this.cancelTarget();
    if (!cart || this.busy() || !this.pwa.online() || !this.canDeleteCarts())
      return;
    this.busy.set(true);
    this.cancelTarget.set(null);
    this.gql.request("mutation CancelCounterCart($input: CounterCartVersionInput!) { cancelCounterCart(input: $input) }", { input: { id: cart.id, version: cart.version } }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
      next: () => {
        this.loadPending();
        this.success.set("Held sale cancelled. No stock was changed.");
      },
      error: (error) => this.actionError.set(this.message(error, "Could not cancel the held sale."))
    });
  }
  printLastSale() {
    const sale = this.lastSale();
    if (sale) {
      this.receiptOrder.set(sale);
      this.receiptOpen.set(true);
    }
  }
  openExpense() {
    if (this.busy() || !this.canExpense())
      return;
    this.expenseError.set(null);
    this.expenseForm.reset({ date: toIsoDate(/* @__PURE__ */ new Date()), categoryId: "", description: "", amount: 0, paymentMethod: "CASH" });
    this.expenseOpen.set(true);
    this.loadExpenseCategories();
  }
  saveExpense() {
    if (this.busy() || !this.pwa.online() || !this.canExpense())
      return;
    this.expenseForm.markAllAsTouched();
    if (this.expenseForm.invalid)
      return;
    const value = this.expenseForm.getRawValue();
    if (!Number.isFinite(value.amount) || !this.categories().some((c) => c.id === value.categoryId))
      return;
    this.busy.set(true);
    this.expenseError.set(null);
    this.gql.request("mutation CounterCreateExpense($input: CreateExpenseInput!) { createExpense(input: $input) { id } }", {
      input: __spreadProps(__spreadValues({}, value), { description: value.description.trim() || null })
    }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
      next: () => {
        this.expenseOpen.set(false);
        this.expenseSuccess.set("Expense recorded successfully.");
      },
      error: (error) => this.expenseError.set(this.message(error, "Could not record this expense."))
    });
  }
  canDeactivate() {
    if (this.busy())
      return false;
    if (!(this.dirty() && this.lines().length))
      return true;
    this.discardTarget.set("leave");
    return new Promise((resolve) => {
      this.leaveResolve = resolve;
    });
  }
  beforeUnload(event) {
    if (this.busy() || this.dirty() && this.lines().length) {
      event.preventDefault();
      event.returnValue = "";
    }
  }
  applyCart(cart) {
    this.cartId.set(cart.id);
    this.cartVersion.set(cart.version);
    this.lines.set(cart.lines.map((line) => __spreadValues({}, line)));
    this.location.setValue(cart.lines[0]?.location || this.branchCtx.writeBranch());
    const match = cart.customer ? this.customers().find((c) => c.name === cart.customer) : null;
    this.headerForm.reset({ customer: cart.customer || "", customerId: match ? Number(match.id) : null, referenceNumber: cart.referenceNumber || "" }, { emitEvent: false });
    this.lastDebtCustomerId = match ? Number(match.id) : null;
    this.loadCustomerDebt(this.lastDebtCustomerId);
    this.paymentMethod.set("CASH");
    this.amountReceived.set(null);
    this.discountControl.setValue(0, { emitEvent: false });
    this.discountAmount.set(0);
    this.dirty.set(false);
  }
  resetCart() {
    this.cartId.set(crypto.randomUUID());
    this.cartVersion.set(null);
    this.lines.set([]);
    this.headerForm.reset({ customer: "", customerId: null, referenceNumber: "" }, { emitEvent: false });
    this.lastDebtCustomerId = null;
    this.customerDebt.set(null);
    this.paymentMethod.set("CASH");
    this.amountReceived.set(null);
    this.discountControl.setValue(0, { emitEvent: false });
    this.discountAmount.set(0);
    this.dirty.set(false);
  }
  loadCustomerDebt(customerId) {
    if (customerId == null) {
      this.customerDebt.set(null);
      return;
    }
    this.gql.request("query CustomerDebt($customerId: ID!) { customerDebt(customerId: $customerId) }", { customerId: String(customerId) }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (r) => {
        if (this.lastDebtCustomerId === customerId)
          this.customerDebt.set(r.customerDebt > 0 ? r.customerDebt : null);
      },
      error: () => this.customerDebt.set(null)
    });
  }
  customerName(id) {
    const c = this.customers().find((x) => Number(x.id) === Number(id));
    return c?.name || "";
  }
  loadCustomers() {
    this.gql.request("query Customers($query: String) { customers(query: $query) { id name phone } }", { query: null }).subscribe({
      next: (res) => this.customers.set(res.customers ?? []),
      error: () => {
      }
    });
  }
  createCustomerInline() {
    if (this.newCustomerBusy() || this.newCustomerForm.invalid) {
      this.newCustomerForm.markAllAsTouched();
      return;
    }
    this.newCustomerBusy.set(true);
    const v = this.newCustomerForm.getRawValue();
    this.gql.request("mutation CreateCustomer($input: CreateCustomerInput!) { createCustomer(input: $input) { id name } }", { input: { name: v.name.trim(), phone: v.phone.trim() || null } }).subscribe({
      next: (res) => {
        const c = res.createCustomer;
        this.customers.update((list) => [c, ...list]);
        this.headerForm.controls.customerId.setValue(Number(c.id));
        this.headerForm.controls.customer.setValue(c.name, { emitEvent: false });
        this.newCustomerForm.reset({ name: "", phone: "" });
        this.newCustomerOpen.set(false);
        this.newCustomerBusy.set(false);
      },
      error: (e) => {
        this.newCustomerBusy.set(false);
        this.actionError.set(this.message(e, "Failed to register customer"));
      }
    });
  }
  message(error, fallback) {
    return error instanceof Error ? error.message : fallback;
  }
  static \u0275fac = function CounterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CounterPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CounterPage, selectors: [["cis-counter-page"]], viewQuery: function CounterPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.workspace = _t.first);
    }
  }, hostBindings: function CounterPage_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("beforeunload", function CounterPage_beforeunload_HostBindingHandler($event) {
        return ctx.beforeUnload($event);
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 173, vars: 95, consts: [["saleWorkspace", ""], ["cartPanel", ""], [1, "counter-page"], [1, "counter-heading"], [1, "counter-eyebrow"], [1, "counter-connection"], ["class", "counter-notice error", "role", "alert", 4, "ngIf"], ["aria-label", "Counter actions", 1, "counter-actions"], ["type", "button", "data-counter-action", "sale", 1, "counter-action", "sale-action", 3, "click", "disabled"], [1, "counter-action-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.7", "aria-hidden", "true"], ["d", "M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01M12 8h5m-2.5-2.5v5"], ["aria-hidden", "true", 1, "counter-arrow"], [1, "counter-action-pair"], ["class", "counter-action expense-action", "type", "button", "data-counter-action", "expense", 3, "disabled", "click", 4, "ngIf"], ["class", "counter-action expense-action success-state", "routerLink", "/expenses", "role", "status", 4, "ngIf"], ["class", "counter-action viewsales-action", "routerLink", "/sales", "role", "status", 3, "success-state", 4, "ngIf"], ["class", "counter-action", "type", "button", 3, "click", 4, "ngIf"], ["aria-label", "Counter overview", 1, "counter-overview"], ["class", "counter-workspace scroll-mt-28", "aria-label", "New sale workspace", 4, "ngIf"], ["class", "counter-panel counter-pending", "aria-label", "Pending sales", 4, "ngIf"], ["title", "Complete this sale", "maxWidthClass", "max-w-md", 3, "close", "open"], [1, "counter-checkout-summary"], [1, "counter-discount"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 3, "formControl", "readonly"], [1, "counter-checkout-summary", "payable"], ["aria-live", "polite"], [1, "counter-payment-row"], [3, "ngModelChange", "ngModel", "disabled"], ["value", "CASH"], ["value", "M-PESA"], ["value", "AIRTEL_MONEY"], ["value", "TIGO_PESA"], ["value", "CARD"], ["value", "BANK"], ["value", "OTHER"], ["type", "number", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel", "readonly", "placeholder"], ["class", "counter-notice warning", "role", "status", 4, "ngIf"], ["class", "counter-notice warning", "role", "alert", 4, "ngIf"], [1, "counter-hint"], [1, "counter-modal-actions"], ["type", "button", 1, "counter-button", "secondary", 3, "click", "disabled"], ["type", "button", 1, "counter-button", "primary", 3, "click", "disabled"], ["title", "New Expenses", "maxWidthClass", "max-w-lg", 3, "close", "open"], [1, "counter-expense-form", 3, "ngSubmit", "formGroup"], ["type", "date", "formControlName", "date", 3, "readonly"], ["formControlName", "categoryId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "min", "0.01", "step", "0.01", "formControlName", "amount", 3, "readonly"], ["formControlName", "paymentMethod"], ["value", "MPESA"], ["formControlName", "description", "rows", "3", "maxlength", "1000", "placeholder", "What was this expense for?", 3, "readonly"], ["class", "counter-notice warning", 4, "ngIf"], ["type", "submit", 1, "counter-button", "primary", 3, "disabled"], ["title", "Discard unsaved cart changes?", "message", "Your unsaved changes will be lost. To keep this cart, go back and choose Hold sale for later.", "confirmText", "Discard changes", "cancelText", "Keep editing", 3, "confirm", "cancel", "open"], ["title", "Scan product barcode", 3, "scanned", "close", "open"], ["title", "Cancel this held sale?", "message", "The cart will be removed from pending sales. No inventory or completed sales will be changed.", "confirmText", "Cancel held sale", "cancelText", "Keep sale", 3, "confirm", "cancel", "open"], ["maxWidthClass", "max-w-md", 3, "close", "open", "title"], [1, "mt-3", "grid", "gap-3", 3, "ngSubmit"], ["type", "text", "name", "ref", "placeholder", "211026-0002", "autofocus", "", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "counter-button", "secondary", 3, "click"], [3, "close", "completed", "open", "salesOrderId", "isAdmin", "location"], [3, "close", "open", "order"], ["role", "alert", 1, "counter-notice", "error"], ["type", "button", "data-counter-action", "expense", 1, "counter-action", "expense-action", 3, "click", "disabled"], ["d", "M6 3h12v18l-3-2-3 2-3-2-3 2V3ZM9 7h6M9 11h6M9 15h3"], ["routerLink", "/expenses", "role", "status", 1, "counter-action", "expense-action", "success-state"], ["d", "m5 13 4 4L19 7"], ["routerLink", "/sales", "role", "status", 1, "counter-action", "viewsales-action"], ["d", "m5 13 4 4L19 7", 4, "ngIf"], [4, "ngIf"], ["d", "M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2"], ["d", "M12 6v2m0 10v2"], ["d", "M20 12a8 8 0 11-16 0 8 8 0 0116 0z"], ["type", "button", 1, "counter-action", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 9V4a1 1 0 011-1h10a1 1 0 011 1v5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"], ["x", "6", "y", "14", "width", "12", "height", "7", "rx", "1"], ["aria-label", "New sale workspace", 1, "counter-workspace", "scroll-mt-28"], [1, "counter-catalog", "counter-panel"], [1, "counter-section-heading"], [1, "counter-catalog-tools"], [1, "counter-search"], [1, "sr-only"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["cx", "10.5", "cy", "10.5", "r", "6.5"], ["d", "m16 16 5 5"], ["type", "search", "placeholder", "Search name, SKU, barcode, or brand", 3, "input", "keydown.enter", "value"], [1, "counter-location"], ["aria-label", "Branch", 3, "change", "formControl", "disabled"], ["aria-label", "Product category", 1, "counter-category-tabs"], ["type", "button", 3, "click"], ["type", "button", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "counter-empty", "role", "status", 4, "ngIf"], ["type", "button", "class", "sticky top-24 z-10 mb-3 w-full rounded-xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white shadow-lg min-[1101px]:hidden", 3, "click", 4, "ngIf"], ["class", "counter-product-grid", 4, "ngIf"], ["class", "counter-empty", 4, "ngIf"], ["type", "button", "class", "counter-button secondary counter-load-more", 3, "click", 4, "ngIf"], ["aria-label", "Sales cart", 1, "counter-cart", "counter-panel", "scroll-mt-28"], [1, "flex", "items-center", "gap-2"], ["type", "button", "class", "counter-button secondary", 3, "disabled", "title", "click", 4, "ngIf"], [1, "counter-count"], [1, "counter-customer-form", 3, "formGroup"], ["formControlName", "customerId", 3, "disabled"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "counter-new-customer", 4, "ngIf"], ["formControlName", "referenceNumber", "maxlength", "120", "placeholder", "Auto (e.g. 201026-0001)", 3, "readonly"], ["class", "counter-new-customer-form", 3, "formGroup", 4, "ngIf"], [1, "counter-cart-lines"], ["class", "counter-cart-line", 4, "ngFor", "ngForOf"], [1, "counter-cart-footer"], [1, "counter-total"], ["type", "button", 1, "counter-button", "primary", "counter-charge", 3, "click", "disabled"], ["type", "button", 1, "counter-button", "secondary", "counter-charge", 3, "click", "disabled"], ["type", "button", 1, "counter-button", "secondary", "counter-charge", "min-[1101px]:hidden", 3, "click"], [3, "value"], ["role", "status", 1, "counter-empty"], ["type", "button", 1, "sticky", "top-24", "z-10", "mb-3", "w-full", "rounded-xl", "bg-primary-500", "px-4", "py-3", "text-sm", "font-semibold", "text-white", "shadow-lg", "min-[1101px]:hidden", 3, "click"], [1, "counter-product-grid"], ["type", "button", "class", "counter-product", 3, "in-cart", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "counter-product", 3, "click", "disabled"], [1, "counter-product-top"], ["aria-hidden", "true", 1, "counter-product-monogram"], ["class", "counter-product-count", 4, "ngIf"], [1, "counter-product-category"], ["class", "inline-flex w-fit items-center gap-1 rounded-lg bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300", 4, "ngIf"], [1, "counter-product-price"], [3, "text-[#B81104]", "dark:text-red-400", 4, "ngIf"], ["class", "counter-product-price", "style", "font-size: 0.8rem; color: #7367d8;", 4, "ngIf"], [1, "counter-product-bottom"], ["type", "button", "class", "counter-button secondary", "style", "padding: 0.25rem 0.5rem; font-size: 0.7rem;", 3, "disabled", "click", 4, "ngIf"], ["aria-hidden", "true", 1, "counter-add"], [1, "counter-product-count"], [1, "inline-flex", "w-fit", "items-center", "gap-1", "rounded-lg", "bg-amber-100", "px-2", "py-1", "text-xs", "font-semibold", "text-amber-700", "dark:bg-amber-900/50", "dark:text-amber-300"], [1, "counter-product-price", 2, "font-size", "0.8rem", "color", "#7367d8"], ["type", "button", 1, "counter-button", "secondary", 2, "padding", "0.25rem 0.5rem", "font-size", "0.7rem", 3, "click", "disabled"], [1, "counter-empty"], ["type", "button", 1, "counter-button", "secondary", "counter-load-more", 3, "click"], ["type", "button", 1, "counter-button", "secondary", 3, "click", "disabled", "title"], ["role", "status", 1, "counter-notice", "warning"], [1, "counter-new-customer"], ["type", "button", 1, "counter-link", 3, "click", "disabled"], [1, "counter-new-customer-form", 3, "formGroup"], ["formControlName", "name", "maxlength", "200", 3, "placeholder"], ["formControlName", "phone", "maxlength", "40", 3, "placeholder"], [1, "counter-new-customer-actions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "aria-hidden", "true"], ["d", "M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01"], [1, "counter-cart-line"], [1, "counter-line-title"], ["class", "ml-1 inline-flex items-center rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", 4, "ngIf"], ["type", "button", 1, "counter-remove", 3, "click", "disabled"], [1, "counter-line-bottom"], [1, "counter-stepper"], ["type", "button", 3, "click", "disabled"], ["type", "number", "min", "1", "step", "1", 3, "change", "value", "readonly"], [1, "ml-1", "inline-flex", "items-center", "rounded-md", "bg-amber-100", "px-1.5", "py-0.5", "text-[10px]", "font-semibold", "text-amber-700", "dark:bg-amber-900/40", "dark:text-amber-300"], [1, "counter-notice", "warning"], ["aria-label", "Pending sales", 1, "counter-panel", "counter-pending"], [1, "counter-search", "counter-pending-search"], ["type", "search", "placeholder", "Search customer, reference, or product", 3, "input", "value"], ["class", "mt-2 block", 3, "total", "pageSize", "pageIndex", "pageSizeChange", "pageIndexChange", 4, "ngIf"], ["class", "counter-pending-table", 4, "ngIf"], [1, "mt-2", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "counter-pending-table"], [1, "w-full", "border-collapse", "text-sm"], [4, "ngFor", "ngForOf"], [1, "counter-status"], ["type", "button", 1, "cis-row-action", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 4l14 8-14 8V4z"], ["type", "button", "class", "cis-row-action cis-row-action-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"], ["role", "alert", 1, "counter-notice", "warning"]], template: function CounterPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "div")(3, "div", 4);
      \u0275\u0275text(4, "POINT OF SALE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Counter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "A clear workspace for every sale, every customer, every day.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275element(10, "span");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, CounterPage_div_12_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(13, "section", 7)(14, "button", 8);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_14_listener() {
        return ctx.openSale();
      });
      \u0275\u0275elementStart(15, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 10);
      \u0275\u0275element(17, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span")(19, "strong");
      \u0275\u0275text(20, "New Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "small");
      \u0275\u0275text(22, "Browse products, build a cart, and checkout.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "span", 12);
      \u0275\u0275text(24, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 13);
      \u0275\u0275template(26, CounterPage_button_26_Template, 11, 1, "button", 14)(27, CounterPage_a_27_Template, 11, 1, "a", 15)(28, CounterPage_a_28_Template, 12, 6, "a", 16)(29, CounterPage_button_29_Template, 14, 4, "button", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "section", 18)(31, "div")(32, "span");
      \u0275\u0275text(33, "Held sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "strong");
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "small");
      \u0275\u0275text(37, "Ready to resume");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div")(39, "span");
      \u0275\u0275text(40, "Pending value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "strong");
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "small");
      \u0275\u0275text(45, "Not yet included in completed sales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div")(47, "span");
      \u0275\u0275text(48, "Current cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "strong");
      \u0275\u0275text(50);
      \u0275\u0275elementStart(51, "small");
      \u0275\u0275text(52, "items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "small");
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(56, CounterPage_section_56_Template, 90, 50, "section", 19)(57, CounterPage_section_57_Template, 23, 9, "section", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "cis-modal", 21);
      \u0275\u0275listener("close", function CounterPage_Template_cis_modal_close_58_listener() {
        return !ctx.busy() && ctx.checkoutOpen.set(false);
      });
      \u0275\u0275elementStart(59, "div", 22)(60, "span");
      \u0275\u0275text(61, "Subtotal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "strong");
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p");
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "label", 23)(68, "span");
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 25)(73, "span");
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "strong", 26);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 27)(80, "label", 23)(81, "span");
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "select", 28);
      \u0275\u0275listener("ngModelChange", function CounterPage_Template_select_ngModelChange_84_listener($event) {
        return ctx.paymentMethod.set($event);
      });
      \u0275\u0275elementStart(85, "option", 29);
      \u0275\u0275text(86, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "option", 30);
      \u0275\u0275text(88, "M-Pesa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option", 31);
      \u0275\u0275text(90, "Airtel Money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "option", 32);
      \u0275\u0275text(92, "Tigo-Pesa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "option", 33);
      \u0275\u0275text(94, "Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "option", 34);
      \u0275\u0275text(96, "Bank");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "option", 35);
      \u0275\u0275text(98, "Other");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "label", 23)(100, "span");
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "input", 36);
      \u0275\u0275listener("ngModelChange", function CounterPage_Template_input_ngModelChange_103_listener($event) {
        return ctx.amountReceived.set($event == null || $event === "" ? null : +$event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(104, CounterPage_div_104_Template, 4, 6, "div", 37)(105, CounterPage_div_105_Template, 2, 1, "div", 6)(106, CounterPage_div_106_Template, 2, 0, "div", 38);
      \u0275\u0275elementStart(107, "p", 39);
      \u0275\u0275text(108, "Confirm that payment has been collected before completing this sale. This records the sale and deducts stock; it does not process an online payment.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(109, CounterPage_div_109_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(110, "div", 40)(111, "button", 41);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_111_listener() {
        return ctx.checkoutOpen.set(false);
      });
      \u0275\u0275text(112, "Back to cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "button", 42);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_113_listener() {
        return ctx.completeSale();
      });
      \u0275\u0275text(114);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "cis-modal", 43);
      \u0275\u0275listener("close", function CounterPage_Template_cis_modal_close_115_listener() {
        return !ctx.busy() && ctx.expenseOpen.set(false);
      });
      \u0275\u0275elementStart(116, "p", 39);
      \u0275\u0275text(117, "Record an expense against the correct category and payment method.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "form", 44);
      \u0275\u0275listener("ngSubmit", function CounterPage_Template_form_ngSubmit_118_listener() {
        return ctx.saveExpense();
      });
      \u0275\u0275elementStart(119, "label");
      \u0275\u0275text(120, "Date");
      \u0275\u0275element(121, "input", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "label");
      \u0275\u0275text(123, "Category");
      \u0275\u0275elementStart(124, "select", 46)(125, "option", 47);
      \u0275\u0275text(126);
      \u0275\u0275elementEnd();
      \u0275\u0275template(127, CounterPage_option_127_Template, 2, 2, "option", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "label");
      \u0275\u0275text(129, "Amount (TSH)");
      \u0275\u0275element(130, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "label");
      \u0275\u0275text(132, "Payment method");
      \u0275\u0275elementStart(133, "select", 50)(134, "option", 29);
      \u0275\u0275text(135, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "option", 51);
      \u0275\u0275text(137, "M-Pesa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "option", 34);
      \u0275\u0275text(139, "Bank");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "label");
      \u0275\u0275text(141, "Description ");
      \u0275\u0275elementStart(142, "small");
      \u0275\u0275text(143, "(optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(144, "textarea", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275template(145, CounterPage_p_145_Template, 5, 0, "p", 53)(146, CounterPage_p_146_Template, 2, 0, "p", 6)(147, CounterPage_p_147_Template, 2, 1, "p", 6);
      \u0275\u0275elementStart(148, "div", 40)(149, "button", 41);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_149_listener() {
        return ctx.expenseOpen.set(false);
      });
      \u0275\u0275text(150, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "button", 54);
      \u0275\u0275text(152);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(153, "cis-confirm-dialog", 55);
      \u0275\u0275listener("confirm", function CounterPage_Template_cis_confirm_dialog_confirm_153_listener() {
        return ctx.confirmDiscard();
      })("cancel", function CounterPage_Template_cis_confirm_dialog_cancel_153_listener() {
        return ctx.cancelDiscard();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "cis-barcode-scanner", 56);
      \u0275\u0275listener("scanned", function CounterPage_Template_cis_barcode_scanner_scanned_154_listener($event) {
        return ctx.onScanned($event);
      })("close", function CounterPage_Template_cis_barcode_scanner_close_154_listener() {
        return ctx.scannerOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "cis-confirm-dialog", 57);
      \u0275\u0275listener("confirm", function CounterPage_Template_cis_confirm_dialog_confirm_155_listener() {
        return ctx.cancelHeldCart();
      })("cancel", function CounterPage_Template_cis_confirm_dialog_cancel_155_listener() {
        return ctx.cancelTarget.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "cis-modal", 58);
      \u0275\u0275pipe(157, "translate");
      \u0275\u0275listener("close", function CounterPage_Template_cis_modal_close_156_listener() {
        return ctx.findSaleOpen.set(false);
      });
      \u0275\u0275elementStart(158, "p", 39);
      \u0275\u0275text(159);
      \u0275\u0275pipe(160, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "form", 59);
      \u0275\u0275listener("ngSubmit", function CounterPage_Template_form_ngSubmit_161_listener() {
        return ctx.findSale();
      });
      \u0275\u0275elementStart(162, "input", 60);
      \u0275\u0275listener("ngModelChange", function CounterPage_Template_input_ngModelChange_162_listener($event) {
        return ctx.findSaleQuery.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(163, CounterPage_p_163_Template, 2, 1, "p", 6);
      \u0275\u0275elementStart(164, "div", 40)(165, "button", 61);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_165_listener() {
        return ctx.findSaleOpen.set(false);
      });
      \u0275\u0275text(166);
      \u0275\u0275pipe(167, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "button", 54);
      \u0275\u0275text(169);
      \u0275\u0275pipe(170, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(171, "cis-return-dialog", 62);
      \u0275\u0275listener("close", function CounterPage_Template_cis_return_dialog_close_171_listener() {
        return ctx.returnOrderId.set(null);
      })("completed", function CounterPage_Template_cis_return_dialog_completed_171_listener($event) {
        return ctx.onReturnCompleted($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "cis-receipt-dialog", 63);
      \u0275\u0275listener("close", function CounterPage_Template_cis_receipt_dialog_close_172_listener() {
        return ctx.receiptOpen.set(false);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-offline", !ctx.pwa.online());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pwa.online() ? "Connected" : "Offline");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.actionError() && !ctx.checkoutOpen());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy() || !ctx.canSell());
      \u0275\u0275advance(11);
      \u0275\u0275classProp("single", !ctx.perm.canView("SALES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.expenseSuccess());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expenseSuccess());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.perm.canView("SALES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastSale());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.pending().length);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 71, ctx.pendingValue()));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.itemCount(), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 73, ctx.total()));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.workspaceOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.perm.canView("SALES"));
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.checkoutOpen());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 75, ctx.total()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.itemCount(), " items \xB7 ", ctx.headerForm.controls.customer.value || "Walk-in customer");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(70, 77, "common.discount"), " (TSH)");
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.discountControl)("readonly", ctx.busy());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 79, "common.totalToCollect"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 81, ctx.payable()));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 83, "customers.paymentMethod"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.paymentMethod())("disabled", ctx.busy());
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(102, 85, "customers.receivedAmount"), " (TSH)");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.payable()))("ngModel", ctx.amountReceived())("readonly", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.debtPreview() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.discountError());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.debtPreview() > 0 && !ctx.headerForm.controls.customerId.value);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.actionError());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy() || !ctx.pwa.online() || !!ctx.discountError() || ctx.debtPreview() > 0 && !ctx.headerForm.controls.customerId.value);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.busy() ? "Completing\u2026" : "Payment received \xB7 Complete sale");
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.expenseOpen());
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.expenseForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("readonly", ctx.busy());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.categoriesLoading() ? "Loading categories\u2026" : "Select an expense category");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.categories());
      \u0275\u0275advance(3);
      \u0275\u0275property("readonly", ctx.busy());
      \u0275\u0275advance(14);
      \u0275\u0275property("readonly", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.categoriesLoading() && !ctx.categories().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expenseForm.touched && ctx.expenseForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expenseError());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy() || ctx.categoriesLoading() || !ctx.categories().length || !ctx.pwa.online());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.busy() ? "Saving\u2026" : "Save expense");
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.discardTarget());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.scannerOpen());
      \u0275\u0275advance();
      \u0275\u0275property("open", !!ctx.cancelTarget());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.findSaleOpen())("title", \u0275\u0275pipeBind1(157, 87, "returns.findSale"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(160, 89, "returns.findSaleHint"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.findSaleQuery());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.findSaleError());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(167, 91, "common.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.findSaleBusy() || !ctx.findSaleQuery().trim());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.findSaleBusy() ? "\u2026" : \u0275\u0275pipeBind1(170, 93, "returns.findSale"));
      \u0275\u0275advance(2);
      \u0275\u0275property("open", ctx.returnOrderId() !== null)("salesOrderId", ctx.returnOrderId())("isAdmin", ctx.perm.isAdmin())("location", ctx.location.value.trim() || ctx.branchCtx.writeBranch());
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.receiptOpen())("order", ctx.receiptOrder());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, NgModel, NgForm, ReactiveFormsModule, FormControlDirective, FormGroupDirective, FormControlName, RouterLink, ModalComponent, ConfirmDialogComponent, BarcodeScannerComponent, RowActionsMenuComponent, PagerComponent, ReturnDialogComponent, ReceiptDialogComponent, UpperCasePipe, DatePipe, MoneyPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n  color: var(--cis-text);\n}\n.counter-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 24px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  color: var(--cis-text);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nsmall[_ngcontent-%COMP%], \n.counter-hint[_ngcontent-%COMP%], \n.counter-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.counter-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\n.counter-heading[_ngcontent-%COMP%], \n.counter-section-heading[_ngcontent-%COMP%], \n.counter-action[_ngcontent-%COMP%], \n.counter-product-top[_ngcontent-%COMP%], \n.counter-product-bottom[_ngcontent-%COMP%], \n.counter-line-title[_ngcontent-%COMP%], \n.counter-line-bottom[_ngcontent-%COMP%], \n.counter-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.counter-heading[_ngcontent-%COMP%], \n.counter-section-heading[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.counter-eyebrow[_ngcontent-%COMP%] {\n  color: var(--cis-primary);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n}\n.counter-connection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px;\n  border-radius: 30px;\n  background: var(--cis-surface);\n  font-size: 12px;\n}\n.counter-connection[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #16a085;\n}\n.counter-connection.is-offline[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.counter-actions[_ngcontent-%COMP%], \n.counter-overview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.counter-action-pair[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.counter-action-pair.single[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.counter-action-pair[_ngcontent-%COMP%]   .counter-action[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 18px;\n  text-decoration: none;\n  color: inherit;\n}\n.counter-action-pair[_ngcontent-%COMP%]   .counter-action-icon[_ngcontent-%COMP%] {\n  flex: 0 0 42px;\n  height: 42px;\n  border-radius: 12px;\n}\n.counter-action-pair[_ngcontent-%COMP%]   .counter-action-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.counter-action-pair[_ngcontent-%COMP%]   .counter-action[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.counter-action-pair[_ngcontent-%COMP%]   .counter-action[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 4px;\n}\n.counter-overview[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.counter-action[_ngcontent-%COMP%] {\n  justify-content: start;\n  padding: 24px;\n  border-radius: 22px;\n  text-align: left;\n}\n.sale-action[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      #7367d8,\n      #4e43a8);\n  color: white;\n}\n.sale-action[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.counter-panel[_ngcontent-%COMP%], \n.expense-action[_ngcontent-%COMP%], \n.viewsales-action[_ngcontent-%COMP%], \n.counter-overview[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.counter-product[_ngcontent-%COMP%] {\n  border: 1px solid var(--cis-border);\n  background: var(--cis-surface);\n}\n.counter-action-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex: 0 0 54px;\n  height: 54px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.1411764706);\n}\n.expense-action[_ngcontent-%COMP%]   .counter-action-icon[_ngcontent-%COMP%], \n.viewsales-action[_ngcontent-%COMP%]   .counter-action-icon[_ngcontent-%COMP%], \n.counter-product-monogram[_ngcontent-%COMP%], \n.counter-count[_ngcontent-%COMP%], \n.counter-add[_ngcontent-%COMP%] {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.viewsales-action.success-state[_ngcontent-%COMP%], \n.expense-action.success-state[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      #ffc145,\n      #f0a21b);\n  border-color: transparent;\n  color: #1e293b;\n}\n.success-state[_ngcontent-%COMP%]   .counter-action-icon[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.0784313725);\n  color: #1e293b;\n}\n.counter-action-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.counter-action[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 21px;\n}\n.counter-action[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n}\n.counter-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 24px;\n}\n.counter-overview[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n  border-radius: 18px;\n}\n.counter-overview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.counter-overview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--cis-muted);\n}\n.counter-overview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin: 7px 0;\n  font-size: 23px;\n  font-weight: 800;\n}\n.counter-overview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline;\n}\n.counter-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 22px;\n  border-radius: 20px;\n}\n.counter-workspace[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 350px;\n  gap: 20px;\n  align-items: start;\n}\n.counter-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 10px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.counter-button.primary[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--cis-primary);\n}\n.counter-button.primary[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #5f52c7;\n}\n.counter-button.secondary[_ngcontent-%COMP%] {\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n  border: 1px solid var(--cis-border);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.counter-catalog-tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 20px 0 14px;\n}\n.counter-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 160px;\n  padding: 0 12px;\n  border: 1px solid var(--cis-border);\n  border-radius: 12px;\n  background: var(--cis-page);\n}\n.counter-search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.counter-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 0;\n  background: transparent;\n  font-size: 13px;\n}\n.counter-location[_ngcontent-%COMP%] {\n  width: 105px;\n  font-size: 10px;\n}\n.counter-category-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  overflow-x: auto;\n  padding-bottom: 16px;\n}\n.counter-category-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 8px 12px;\n  border-radius: 9px;\n  font-size: 11px;\n  background: var(--cis-page);\n}\n.counter-category-tabs[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.counter-product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));\n  gap: 12px;\n}\n.counter-product[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  gap: 7px;\n  padding: 14px;\n  border-radius: 16px;\n  text-align: left;\n}\n.counter-product.in-cart[_ngcontent-%COMP%], \n.counter-product[_ngcontent-%COMP%]:not(:disabled):hover {\n  border-color: var(--cis-primary);\n  background: var(--cis-page);\n}\n.counter-product[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.counter-product[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.counter-product-top[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.counter-product-monogram[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 12px;\n  font-weight: 800;\n}\n.counter-product-count[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.counter-product-price[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 6px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.counter-product-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.counter-product[_ngcontent-%COMP%]   .out-of-stock[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.counter-add[_ngcontent-%COMP%], \n.counter-count[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  min-width: 28px;\n  min-height: 28px;\n  border-radius: 8px;\n  padding: 3px;\n}\n.counter-load-more[_ngcontent-%COMP%], \n.counter-charge[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n}\n.counter-cart[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n}\n.counter-customer-form[_ngcontent-%COMP%], \n.counter-expense-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 13px;\n  margin-top: 18px;\n}\n.counter-customer-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.counter-expense-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--cis-muted);\n}\ninput[_ngcontent-%COMP%]:not([type=search]), \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 9px 11px;\n  background: var(--cis-page);\n  color: var(--cis-text);\n  font-size: 13px;\n}\n.counter-cart-lines[_ngcontent-%COMP%] {\n  max-height: 420px;\n  overflow-y: auto;\n  margin-top: 16px;\n}\n.counter-cart-line[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  border-top: 1px solid var(--cis-border);\n}\n.counter-cart-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.counter-line-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.counter-remove[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  font-size: 21px;\n}\n.counter-line-bottom[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.counter-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.counter-stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 34px;\n  min-height: 40px;\n  background: var(--cis-page);\n}\n.counter-stepper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 48px;\n  border: 0;\n  border-radius: 0;\n  padding: 4px;\n  text-align: center;\n  appearance: textfield;\n}\n.counter-stepper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  appearance: none;\n}\n.counter-cart-footer[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-top: 1px dashed var(--cis-border);\n  padding-top: 18px;\n}\n.counter-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--cis-primary-strong);\n}\n.counter-hint[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.counter-notice[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  line-height: 1.6;\n  margin: 10px 0;\n}\n.counter-notice[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  text-decoration: underline;\n}\n.counter-notice.success[_ngcontent-%COMP%] {\n  background: #e7f7ef;\n  color: #166747;\n}\n.counter-notice.error[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  color: #a12b35;\n}\n.counter-notice.warning[_ngcontent-%COMP%], \n.counter-status[_ngcontent-%COMP%] {\n  background: #fff6e5;\n  color: #875508;\n}\n.counter-empty[_ngcontent-%COMP%] {\n  padding: 36px 18px;\n  text-align: center;\n  color: var(--cis-muted);\n  font-size: 13px;\n}\n.counter-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  margin: 0 auto 15px;\n}\n.counter-pending-search[_ngcontent-%COMP%] {\n  max-width: 440px;\n  margin: 20px 0;\n}\n.counter-pending-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 12px;\n}\n.counter-pending-table[_ngcontent-%COMP%]   :is(th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]) {\n  padding: 13px 14px;\n  text-align: left;\n  font-size: 12px;\n}\n.counter-pending-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--cis-border);\n}\n.counter-pending-table[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.counter-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.counter-row-actions[_ngcontent-%COMP%], \n.counter-modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.counter-modal-actions[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  flex-wrap: wrap;\n}\n.counter-checkout-summary[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 16px;\n  background: var(--cis-primary-soft);\n  text-align: center;\n  color: var(--cis-primary-strong);\n}\n.counter-checkout-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 30px;\n  font-weight: 800;\n  margin: 8px 0;\n}\n.counter-checkout-summary.payable[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.counter-discount[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  margin-top: 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--cis-muted);\n}\n.counter-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.counter-discount[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid var(--cis-border);\n  border-radius: 12px;\n  padding: 10px 14px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--cis-ink);\n  background: var(--cis-card, #fff);\n  outline: none;\n}\n.counter-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.counter-discount[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--cis-primary);\n}\n.counter-payment-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.counter-link[_ngcontent-%COMP%] {\n  color: var(--cis-primary);\n  font-size: 12px;\n  font-weight: 700;\n  text-decoration: underline;\n  background: none;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.counter-new-customer[_ngcontent-%COMP%] {\n  margin: 4px 0 8px;\n  text-align: right;\n}\n.counter-new-customer-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  margin: 8px 0;\n  padding: 12px;\n  border: 1px dashed var(--cis-border);\n  border-radius: 12px;\n}\n.counter-new-customer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--cis-ink);\n  background: var(--cis-card, #fff);\n  outline: none;\n}\n.counter-new-customer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--cis-primary);\n}\n.counter-new-customer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n@media (max-width: 767px) {\n  .counter-payment-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1100px) {\n  .counter-workspace[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .counter-cart[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 767px) {\n  .counter-actions[_ngcontent-%COMP%], \n   .counter-overview[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .counter-action[_ngcontent-%COMP%], \n   .counter-panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .counter-product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .counter-product[_ngcontent-%COMP%] {\n    padding: 11px;\n  }\n  .counter-catalog-tools[_ngcontent-%COMP%]   .counter-search[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n  .counter-location[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .counter-cart-lines[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n  .counter-modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .counter-modal-actions[_ngcontent-%COMP%]   .counter-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .counter-pending-search[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  input[_ngcontent-%COMP%], \n   select[_ngcontent-%COMP%], \n   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=counter.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterPage, [{
    type: Component,
    args: [{ selector: "cis-counter-page", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, MoneyPipe, ModalComponent, ConfirmDialogComponent, BarcodeScannerComponent, RowActionsMenuComponent, PagerComponent, TranslatePipe, ReturnDialogComponent, ReceiptDialogComponent], template: `<div class="counter-page">\r
  <header class="counter-heading">\r
    <div>\r
      <div class="counter-eyebrow">POINT OF SALE</div>\r
      <h1>Counter</h1>\r
      <p>A clear workspace for every sale, every customer, every day.</p>\r
    </div>\r
    <span class="counter-connection" [class.is-offline]="!pwa.online()"><span></span>{{ pwa.online() ? 'Connected' : 'Offline' }}</span>\r
  </header>\r
\r
  <div class="counter-notice error" role="alert" *ngIf="actionError() && !checkoutOpen()">{{ actionError() }}</div>\r
\r
  <section class="counter-actions" aria-label="Counter actions">\r
    <button class="counter-action sale-action" type="button" data-counter-action="sale" (click)="openSale()" [disabled]="busy() || !canSell()">\r
      <span class="counter-action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01M12 8h5m-2.5-2.5v5" /></svg></span>\r
      <span><strong>New Sale</strong><small>Browse products, build a cart, and checkout.</small></span>\r
      <span class="counter-arrow" aria-hidden="true">\u2192</span>\r
    </button>\r
    <div class="counter-action-pair" [class.single]="!perm.canView('SALES')">\r
      <button *ngIf="!expenseSuccess()" class="counter-action expense-action" type="button" data-counter-action="expense" (click)="openExpense()" [disabled]="busy() || !canExpense()">\r
        <span class="counter-action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3ZM9 7h6M9 11h6M9 15h3" /></svg></span>\r
        <span><strong>New Expenses</strong><small>Record an expense without leaving the counter.</small></span>\r
        <span class="counter-arrow" aria-hidden="true">\u2192</span>\r
      </button>\r
      <a *ngIf="expenseSuccess()" class="counter-action expense-action success-state" routerLink="/expenses" role="status">\r
        <span class="counter-action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg></span>\r
        <span><strong>{{ expenseSuccess() }}</strong><small>Tap here to open the expenses page.</small></span>\r
        <span class="counter-arrow" aria-hidden="true">\u2192</span>\r
      </a>\r
      <a class="counter-action viewsales-action" [class.success-state]="!!success()" routerLink="/sales" *ngIf="perm.canView('SALES')" role="status">\r
        <span class="counter-action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path *ngIf="success()" d="m5 13 4 4L19 7" /><ng-container *ngIf="!success()"><path d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" /><path d="M12 6v2m0 10v2" /><path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" /></ng-container></svg></span>\r
        <span><strong>{{ success() || 'View Sales' }}</strong><small>{{ success() ? 'Tap here to open the sales page.' : 'See all sales, customers and debts.' }}</small></span>\r
        <span class="counter-arrow" aria-hidden="true">\u2192</span>\r
      </a>\r
      <button\r
        *ngIf="lastSale()"\r
        class="counter-action"\r
        type="button"\r
        (click)="printLastSale()"\r
      >\r
        <span class="counter-action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9V4a1 1 0 011-1h10a1 1 0 011 1v5" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="7" rx="1" /></svg></span>\r
        <span><strong>{{ 'sales.printReceipt' | translate }}</strong><small>{{ lastSale()?.referenceNumber || '#' + lastSale()?.id }}</small></span>\r
        <span class="counter-arrow" aria-hidden="true">\u2192</span>\r
      </button>\r
    </div>\r
  </section>\r
\r
  <section class="counter-overview" aria-label="Counter overview">\r
    <div><span>Held sales</span><strong>{{ pending().length }}</strong><small>Ready to resume</small></div>\r
    <div><span>Pending value</span><strong>{{ pendingValue() | money }}</strong><small>Not yet included in completed sales</small></div>\r
    <div><span>Current cart</span><strong>{{ itemCount() }} <small>items</small></strong><small>{{ total() | money }}</small></div>\r
  </section>\r
\r
  <section #saleWorkspace class="counter-workspace scroll-mt-28" *ngIf="workspaceOpen()" aria-label="New sale workspace">\r
    <div class="counter-catalog counter-panel">\r
      <div class="counter-section-heading">\r
        <div><h2>Choose products</h2><p>Prices come from your product settings.</p></div>\r
        <button type="button" class="counter-button secondary" (click)="closeSale()" [disabled]="busy()">Close</button>\r
      </div>\r
      <div class="counter-catalog-tools">\r
        <label class="counter-search"><span class="sr-only">Search products</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><input type="search" placeholder="Search name, SKU, barcode, or brand" [value]="search()" (input)="setSearch($any($event.target).value)" (keydown.enter)="onSearchEnter(); $event.preventDefault()" /></label>\r
        <label class="counter-location">{{ 'common.branch' | translate }}<select [formControl]="location" [disabled]="lines().length > 0 || busy() || branchCtx.locked()" (change)="changeLocation()" aria-label="Branch"><option *ngFor="let b of branchCtx.options()" [value]="b.code">{{ b.name }} ({{ b.code }})</option></select></label>\r
        <button type="button" class="counter-button secondary" (click)="scannerOpen.set(true)" [disabled]="busy()">Scan</button>\r
        <button type="button" class="counter-button secondary" (click)="loadProducts()" [disabled]="catalogLoading() || busy()">Refresh</button>\r
      </div>\r
      <div class="counter-category-tabs" aria-label="Product category">\r
        <button type="button" [class.selected]="!category()" (click)="category.set(''); visibleLimit.set(36)">All products</button>\r
        <button type="button" *ngFor="let name of productCategories()" [class.selected]="category() === name" (click)="category.set(name); visibleLimit.set(36)">{{ name }}</button>\r
      </div>\r
      <div class="counter-notice error" role="alert" *ngIf="catalogError()">{{ catalogError() }}</div>\r
      <div class="counter-empty" role="status" *ngIf="catalogLoading()">Loading your product catalog\u2026</div>\r
      <button type="button" *ngIf="lines().length" class="sticky top-24 z-10 mb-3 w-full rounded-xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white shadow-lg min-[1101px]:hidden" (click)="viewCart(cartPanel)">View cart ({{ itemCount() }}) \xB7 {{ total() | money }}</button>\r
      <div class="counter-product-grid" *ngIf="!catalogLoading()">\r
        <button type="button" class="counter-product" *ngFor="let product of visibleProducts()" [class.in-cart]="quantityByProduct().has(product.id)" [disabled]="!canAdd(product)" (click)="addProduct(product)" [attr.aria-label]="'Add ' + product.name + ' to cart'">\r
          <span class="counter-product-top"><span class="counter-product-monogram" aria-hidden="true">{{ product.name.slice(0, 2) | uppercase }}</span><span class="counter-product-count" *ngIf="quantityByProduct().get(product.id) as count">{{ count }} in cart</span></span>\r
          <small class="counter-product-category">{{ product.category || 'Uncategorized' }}</small>\r
          <strong>{{ product.name }}</strong>\r
          <small>{{ product.sku }}<span *ngIf="product.brand"> \xB7 {{ product.brand }}</span></small>\r
          <span *ngIf="product.expiryDate" class="inline-flex w-fit items-center gap-1 rounded-lg bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">\r
            {{ 'common.expiry' | translate }}: {{ product.expiryDate }}\r
          </span>\r
          <span class="counter-product-price">{{ product.sellingPrice === null ? 'Price not set' : (product.sellingPrice | money) }}</span>\r
          <small *ngIf="product.daysToExpiry !== null" [class.text-[#B81104]]="product.daysToExpiry <= 7" [class.dark:text-red-400]="product.daysToExpiry <= 7">\r
            {{ 'common.expiresIn' | translate }} {{ product.daysToExpiry }} {{ 'common.days' | translate }}\r
          </small>\r
          <span *ngIf="product.suggestedSellingPrice !== null" class="counter-product-price" style="font-size: 0.8rem; color: #7367d8;">\r
            {{ 'common.suggested' | translate }} {{ product.suggestedSellingPrice | money }}\r
          </span>\r
          <span class="counter-product-bottom">\r
            <small [class.out-of-stock]="product.availableQuantity === 0">{{ product.availableQuantity > 0 ? product.availableQuantity + ' available' : 'Out of stock' }}</small>\r
            <button *ngIf="product.suggestedSellingPrice !== null" type="button" class="counter-button secondary" style="padding: 0.25rem 0.5rem; font-size: 0.7rem;" (click)="addProduct(product, true); $event.stopPropagation()" [disabled]="!canAddDiscounted(product)">Add {{ product.suggestedSellingPrice | money }}</button>\r
            <span class="counter-add" aria-hidden="true">+</span>\r
          </span>\r
        </button>\r
      </div>\r
      <div class="counter-empty" *ngIf="!catalogLoading() && !catalogError() && !filteredProducts().length"><h3>No products found</h3><p>Try another search or category.</p></div>\r
      <button type="button" class="counter-button secondary counter-load-more" *ngIf="filteredProducts().length > visibleLimit()" (click)="visibleLimit.set(visibleLimit() + 36)">Show more products ({{ filteredProducts().length - visibleLimit() }} remaining)</button>\r
    </div>\r
\r
    <aside #cartPanel class="counter-cart counter-panel scroll-mt-28" aria-label="Sales cart">\r
      <div class="counter-section-heading"><div><h2>Sales cart</h2><p>{{ cartVersion() === null ? 'New transaction' : 'Resumed held sale' }}</p></div><div class="flex items-center gap-2"><button *ngIf="canReturn()" type="button" class="counter-button secondary" (click)="openFindSale()" [disabled]="busy()" title="{{ 'returns.action' | translate }}">\u21A9 {{ 'returns.tabReturn' | translate }}</button><span class="counter-count">{{ itemCount() }}</span></div></div>\r
      <form class="counter-customer-form" [formGroup]="headerForm">\r
        <label>\r
          {{ 'common.customer' | translate }} <small>(optional \u2014 {{ 'customers.walkIn' | translate }} if empty)</small>\r
          <select formControlName="customerId" [disabled]="busy()">\r
            <option [ngValue]="null">{{ 'customers.walkIn' | translate }}</option>\r
            <option *ngFor="let c of customers()" [ngValue]="c.id">{{ c.name }}<span *ngIf="c.phone"> \xB7 {{ c.phone }}</span></option>\r
          </select>\r
        </label>\r
        <div class="counter-notice warning" *ngIf="customerDebt() != null && headerForm.controls.customerId.value" role="status">\r
          {{ customerName(headerForm.controls.customerId.value) }} \xB7 {{ 'customers.debt' | translate }}: {{ customerDebt() | money }}\r
        </div>\r
        <div class="counter-new-customer" *ngIf="!newCustomerOpen()">\r
          <button type="button" class="counter-link" (click)="newCustomerOpen.set(true)" [disabled]="busy()">{{ 'customers.newInline' | translate }}</button>\r
        </div>\r
        <label>Reference <small>(optional \u2014 auto)</small><input formControlName="referenceNumber" maxlength="120" placeholder="Auto (e.g. 201026-0001)" [readonly]="busy()" /></label>\r
      </form>\r
      <div class="counter-new-customer-form" *ngIf="newCustomerOpen()" [formGroup]="newCustomerForm">\r
        <input formControlName="name" maxlength="200" placeholder="{{ 'customers.name' | translate }} *" />\r
        <input formControlName="phone" maxlength="40" placeholder="{{ 'customers.phone' | translate }}" />\r
        <div class="counter-new-customer-actions">\r
          <button type="button" class="counter-button secondary" (click)="newCustomerOpen.set(false)" [disabled]="newCustomerBusy()">{{ 'common.cancel' | translate }}</button>\r
          <button type="button" class="counter-button primary" (click)="createCustomerInline()" [disabled]="newCustomerBusy() || newCustomerForm.invalid">{{ newCustomerBusy() ? '\u2026' : ('customers.createInline' | translate) }}</button>\r
        </div>\r
      </div>\r
      <div class="counter-empty" *ngIf="!lines().length"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01" /></svg><h3>Your cart is ready</h3><p>Select a product to start this sale.</p></div>\r
      <div class="counter-cart-lines">\r
        <article class="counter-cart-line" *ngFor="let line of lines()">\r
          <div class="counter-line-title"><div><strong>{{ line.productName }}</strong><small>{{ line.sku }} \xB7 {{ line.location }}<span *ngIf="line.expiryDate" class="ml-1 inline-flex items-center rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ 'common.expiry' | translate }}: {{ line.expiryDate }}</span></small></div><button type="button" class="counter-remove" [attr.aria-label]="'Remove ' + line.productName" (click)="removeProduct(line.productId)" [disabled]="busy()">\xD7</button></div>\r
          <small>{{ line.unitPrice | money }} each</small>\r
          <div class="counter-line-bottom"><div class="counter-stepper"><button type="button" [attr.aria-label]="'Decrease ' + line.productName + ' quantity'" (click)="setQuantity(line.productId, line.quantity - 1)" [disabled]="busy() || line.quantity <= 1">\u2212</button><input type="number" min="1" step="1" [value]="line.quantity" [readonly]="busy()" (change)="setQuantity(line.productId, $any($event.target).value)" [attr.aria-label]="line.productName + ' quantity'" /><button type="button" [attr.aria-label]="'Increase ' + line.productName + ' quantity'" (click)="setQuantity(line.productId, line.quantity + 1)" [disabled]="busy()">+</button></div><strong>{{ line.quantity * line.unitPrice | money }}</strong></div>\r
        </article>\r
      </div>\r
      <div class="counter-cart-footer">\r
        <div class="counter-notice warning" *ngIf="stockIssues() && lines().length && !catalogLoading()">Some items no longer have enough stock. Adjust quantities or hold this cart.</div>\r
        <div class="counter-total"><span>Total to charge</span><strong aria-live="polite">{{ total() | money }}</strong></div>\r
        <p class="counter-hint">Stock is checked again at checkout. Held carts do not reserve stock.</p>\r
        <button type="button" class="counter-button primary counter-charge" (click)="saveCart(true)" [disabled]="busy() || !lines().length || !pwa.online() || stockIssues() || catalogLoading() || !!catalogError()">{{ busy() ? 'Please wait\u2026' : 'Charge ' + (total() | money) }}</button>\r
        <button type="button" class="counter-button secondary counter-charge" (click)="saveCart()" [disabled]="busy() || !lines().length || !pwa.online()">Hold sale for later</button>\r
        <button type="button" class="counter-button secondary counter-charge min-[1101px]:hidden" (click)="viewProducts(saleWorkspace)">Back to products</button>\r
      </div>\r
    </aside>\r
  </section>\r
\r
  <section class="counter-panel counter-pending" *ngIf="perm.canView('SALES')" aria-label="Pending sales">\r
    <div class="counter-section-heading"><div><h2>Pending sales <span class="counter-count">{{ pending().length }}</span></h2><p>Held carts from all cashiers. Resume a sale when the customer is ready.</p></div><button type="button" class="counter-button secondary" (click)="loadPending()" [disabled]="pendingLoading() || busy()">{{ pendingLoading() ? 'Refreshing\u2026' : 'Refresh list' }}</button></div>\r
    <label class="counter-search counter-pending-search"><span class="sr-only">Search pending sales</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><input type="search" placeholder="Search customer, reference, or product" [value]="pendingSearch()" (input)="pendingSearch.set($any($event.target).value)" /></label>\r
    <div class="counter-notice error" role="alert" *ngIf="pendingError()">{{ pendingError() }}</div>\r
    <div class="counter-empty" role="status" *ngIf="pendingLoading() && !pending().length">Loading pending sales\u2026</div>\r
    <cis-pager class="mt-2 block" *ngIf="filteredPending().length" [total]="filteredPending().length" [(pageSize)]="pendingPageSize" [(pageIndex)]="pendingPageIndex" />\r
    <div class="counter-pending-table" *ngIf="filteredPending().length">\r
      <table class="w-full border-collapse text-sm">\r
        <thead><tr><th>Sale / customer</th><th>Items</th><th>Last saved</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead>\r
        <tbody><tr *ngFor="let cart of displayedPending()">\r
          <td><div><strong>{{ cart.customer || 'Walk-in customer' }}</strong><small>{{ cart.referenceNumber || '#' + cart.id.slice(0, 8) }}</small></div></td>\r
          <td><span>{{ cart.lines.length }} products</span></td>\r
          <td><span>{{ cart.updatedAt | date:'dd MMM, HH:mm' }}</span></td>\r
          <td><strong>{{ cart.total | money }}</strong></td>\r
          <td><span class="counter-status">On hold</span></td>\r
          <td><cis-row-actions><button type="button" class="cis-row-action" (click)="openSale(cart)" [disabled]="busy() || !canSell()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 4l14 8-14 8V4z" /></svg>Resume</button><button type="button" class="cis-row-action cis-row-action-danger" *ngIf="canDeleteCarts()" (click)="cancelTarget.set(cart)" [disabled]="busy()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Cancel</button></cis-row-actions></td>\r
        </tr></tbody>\r
      </table>\r
    </div>\r
    <div class="counter-empty" *ngIf="!pendingLoading() && !pendingError() && !filteredPending().length"><h3>{{ pendingSearch() ? 'No matching sales' : 'All caught up' }}</h3><p>{{ pendingSearch() ? 'Try a different customer or reference.' : 'No held sales right now. Start a new sale and hold it here whenever you need.' }}</p></div>\r
  </section>\r
</div>\r
\r
<cis-modal [open]="checkoutOpen()" title="Complete this sale" maxWidthClass="max-w-md" (close)="!busy() && checkoutOpen.set(false)">\r
  <div class="counter-checkout-summary">\r
    <span>Subtotal</span><strong>{{ total() | money }}</strong>\r
    <p>{{ itemCount() }} items \xB7 {{ headerForm.controls.customer.value || 'Walk-in customer' }}</p>\r
  </div>\r
  <label class="counter-discount">\r
    <span>{{ 'common.discount' | translate }} (TSH)</span>\r
    <input type="number" min="0" step="0.01" [formControl]="discountControl" [readonly]="busy()" placeholder="0.00" />\r
  </label>\r
  <div class="counter-checkout-summary payable"><span>{{ 'common.totalToCollect' | translate }}</span><strong aria-live="polite">{{ payable() | money }}</strong></div>\r
  <div class="counter-payment-row">\r
    <label class="counter-discount">\r
      <span>{{ 'customers.paymentMethod' | translate }}</span>\r
      <select [ngModel]="paymentMethod()" (ngModelChange)="paymentMethod.set($event)" [disabled]="busy()">\r
        <option value="CASH">Cash</option>\r
        <option value="M-PESA">M-Pesa</option>\r
        <option value="AIRTEL_MONEY">Airtel Money</option>\r
        <option value="TIGO_PESA">Tigo-Pesa</option>\r
        <option value="CARD">Card</option>\r
        <option value="BANK">Bank</option>\r
        <option value="OTHER">Other</option>\r
      </select>\r
    </label>\r
    <label class="counter-discount">\r
      <span>{{ 'customers.receivedAmount' | translate }} (TSH)</span>\r
      <input type="number" min="0" step="0.01" [ngModel]="amountReceived()" (ngModelChange)="amountReceived.set($event == null || $event === '' ? null : +$event)" [readonly]="busy()" placeholder="{{ payable() }}" />\r
    </label>\r
  </div>\r
  <div class="counter-notice warning" role="status" *ngIf="debtPreview() > 0">\r
    {{ debtPreview() | money }} {{ 'customers.debtNote' | translate }}\r
  </div>\r
  <div class="counter-notice error" role="alert" *ngIf="discountError()">{{ discountError() }}</div>\r
  <div class="counter-notice warning" role="alert" *ngIf="debtPreview() > 0 && !headerForm.controls.customerId.value">Select a registered customer to sell on debt.</div>\r
  <p class="counter-hint">Confirm that payment has been collected before completing this sale. This records the sale and deducts stock; it does not process an online payment.</p>\r
  <div class="counter-notice error" role="alert" *ngIf="actionError()">{{ actionError() }}</div>\r
  <div class="counter-modal-actions"><button type="button" class="counter-button secondary" (click)="checkoutOpen.set(false)" [disabled]="busy()">Back to cart</button><button type="button" class="counter-button primary" (click)="completeSale()" [disabled]="busy() || !pwa.online() || !!discountError() || (debtPreview() > 0 && !headerForm.controls.customerId.value)">{{ busy() ? 'Completing\u2026' : 'Payment received \xB7 Complete sale' }}</button></div>\r
</cis-modal>\r
\r
<cis-modal [open]="expenseOpen()" title="New Expenses" maxWidthClass="max-w-lg" (close)="!busy() && expenseOpen.set(false)">\r
  <p class="counter-hint">Record an expense against the correct category and payment method.</p>\r
  <form class="counter-expense-form" [formGroup]="expenseForm" (ngSubmit)="saveExpense()">\r
    <label>Date<input type="date" formControlName="date" [readonly]="busy()" /></label>\r
    <label>Category<select formControlName="categoryId"><option value="">{{ categoriesLoading() ? 'Loading categories\u2026' : 'Select an expense category' }}</option><option *ngFor="let item of categories()" [value]="item.id">{{ item.name }}</option></select></label>\r
    <label>Amount (TSH)<input type="number" min="0.01" step="0.01" formControlName="amount" [readonly]="busy()" /></label>\r
    <label>Payment method<select formControlName="paymentMethod"><option value="CASH">Cash</option><option value="MPESA">M-Pesa</option><option value="BANK">Bank</option></select></label>\r
    <label>Description <small>(optional)</small><textarea formControlName="description" rows="3" maxlength="1000" placeholder="What was this expense for?" [readonly]="busy()"></textarea></label>\r
    <p class="counter-notice warning" *ngIf="!categoriesLoading() && !categories().length">No expense categories are available. Ask an administrator to create a category, then <button type="button" (click)="loadExpenseCategories()">retry</button>.</p>\r
    <p class="counter-notice error" role="alert" *ngIf="expenseForm.touched && expenseForm.invalid">Choose a date and category, and enter an amount greater than zero.</p>\r
    <p class="counter-notice error" role="alert" *ngIf="expenseError()">{{ expenseError() }}</p>\r
    <div class="counter-modal-actions"><button type="button" class="counter-button secondary" (click)="expenseOpen.set(false)" [disabled]="busy()">Cancel</button><button type="submit" class="counter-button primary" [disabled]="busy() || categoriesLoading() || !categories().length || !pwa.online()">{{ busy() ? 'Saving\u2026' : 'Save expense' }}</button></div>\r
  </form>\r
</cis-modal>\r
\r
<cis-confirm-dialog [open]="!!discardTarget()" title="Discard unsaved cart changes?" message="Your unsaved changes will be lost. To keep this cart, go back and choose Hold sale for later." confirmText="Discard changes" cancelText="Keep editing" (confirm)="confirmDiscard()" (cancel)="cancelDiscard()" />\r
<cis-barcode-scanner [open]="scannerOpen()" title="Scan product barcode" (scanned)="onScanned($event)" (close)="scannerOpen.set(false)" />\r
\r
<cis-confirm-dialog [open]="!!cancelTarget()" title="Cancel this held sale?" message="The cart will be removed from pending sales. No inventory or completed sales will be changed." confirmText="Cancel held sale" cancelText="Keep sale" (confirm)="cancelHeldCart()" (cancel)="cancelTarget.set(null)" />\r
\r
<cis-modal [open]="findSaleOpen()" [title]="'returns.findSale' | translate" maxWidthClass="max-w-md" (close)="findSaleOpen.set(false)">\r
  <p class="counter-hint">{{ 'returns.findSaleHint' | translate }}</p>\r
  <form class="mt-3 grid gap-3" (ngSubmit)="findSale()">\r
    <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="text" [ngModel]="findSaleQuery()" (ngModelChange)="findSaleQuery.set($event)" name="ref" placeholder="211026-0002" autofocus />\r
    <p class="counter-notice error" role="alert" *ngIf="findSaleError()">{{ findSaleError() }}</p>\r
    <div class="counter-modal-actions">\r
      <button type="button" class="counter-button secondary" (click)="findSaleOpen.set(false)">{{ 'common.cancel' | translate }}</button>\r
      <button type="submit" class="counter-button primary" [disabled]="findSaleBusy() || !findSaleQuery().trim()">{{ findSaleBusy() ? '\u2026' : ('returns.findSale' | translate) }}</button>\r
    </div>\r
  </form>\r
</cis-modal>\r
\r
<cis-return-dialog\r
  [open]="returnOrderId() !== null"\r
  [salesOrderId]="returnOrderId()"\r
  [isAdmin]="perm.isAdmin()"\r
  [location]="location.value.trim() || branchCtx.writeBranch()"\r
  (close)="returnOrderId.set(null)"\r
  (completed)="onReturnCompleted($event)"\r
/>\r
\r
<cis-receipt-dialog\r
  [open]="receiptOpen()"\r
  [order]="receiptOrder()"\r
  (close)="receiptOpen.set(false)"\r
/>\r
`, styles: ["/* src/app/features/counter/counter.page.scss */\n:host {\n  display: block;\n  min-width: 0;\n  color: var(--cis-text);\n}\n.counter-page {\n  display: grid;\n  gap: 24px;\n}\nh1 {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  color: var(--cis-text);\n}\nh2 {\n  font-size: 18px;\n  font-weight: 700;\n}\nh3 {\n  font-weight: 600;\n}\nsmall,\n.counter-hint,\n.counter-heading p,\n.counter-section-heading p {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\n.counter-heading,\n.counter-section-heading,\n.counter-action,\n.counter-product-top,\n.counter-product-bottom,\n.counter-line-title,\n.counter-line-bottom,\n.counter-total {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.counter-heading,\n.counter-section-heading {\n  flex-wrap: wrap;\n}\n.counter-eyebrow {\n  color: var(--cis-primary);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n}\n.counter-connection {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px;\n  border-radius: 30px;\n  background: var(--cis-surface);\n  font-size: 12px;\n}\n.counter-connection > span {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #16a085;\n}\n.counter-connection.is-offline > span {\n  background: #d97706;\n}\n.counter-actions,\n.counter-overview {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.counter-action-pair {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.counter-action-pair.single {\n  grid-template-columns: 1fr;\n}\n.counter-action-pair .counter-action {\n  padding: 16px;\n  border-radius: 18px;\n  text-decoration: none;\n  color: inherit;\n}\n.counter-action-pair .counter-action-icon {\n  flex: 0 0 42px;\n  height: 42px;\n  border-radius: 12px;\n}\n.counter-action-pair .counter-action-icon svg {\n  width: 22px;\n  height: 22px;\n}\n.counter-action-pair .counter-action strong {\n  font-size: 15px;\n}\n.counter-action-pair .counter-action small {\n  font-size: 11px;\n  margin-top: 4px;\n}\n.counter-overview {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.counter-action {\n  justify-content: start;\n  padding: 24px;\n  border-radius: 22px;\n  text-align: left;\n}\n.sale-action {\n  background:\n    linear-gradient(\n      120deg,\n      #7367d8,\n      #4e43a8);\n  color: white;\n}\n.sale-action small {\n  color: inherit;\n}\n.counter-panel,\n.expense-action,\n.viewsales-action,\n.counter-overview > div,\n.counter-product {\n  border: 1px solid var(--cis-border);\n  background: var(--cis-surface);\n}\n.counter-action-icon {\n  display: grid;\n  place-items: center;\n  flex: 0 0 54px;\n  height: 54px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.1411764706);\n}\n.expense-action .counter-action-icon,\n.viewsales-action .counter-action-icon,\n.counter-product-monogram,\n.counter-count,\n.counter-add {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.viewsales-action.success-state,\n.expense-action.success-state {\n  background:\n    linear-gradient(\n      120deg,\n      #ffc145,\n      #f0a21b);\n  border-color: transparent;\n  color: #1e293b;\n}\n.success-state .counter-action-icon {\n  background: rgba(30, 41, 59, 0.0784313725);\n  color: #1e293b;\n}\n.counter-action-icon svg {\n  width: 30px;\n  height: 30px;\n}\n.counter-action strong {\n  display: block;\n  font-size: 21px;\n}\n.counter-action small {\n  display: block;\n  margin-top: 6px;\n}\n.counter-arrow {\n  margin-left: auto;\n  font-size: 24px;\n}\n.counter-overview > div {\n  padding: 18px 22px;\n  border-radius: 18px;\n}\n.counter-overview span,\n.counter-overview small {\n  display: block;\n  font-size: 11px;\n  color: var(--cis-muted);\n}\n.counter-overview strong {\n  display: block;\n  margin: 7px 0;\n  font-size: 23px;\n  font-weight: 800;\n}\n.counter-overview strong small {\n  display: inline;\n}\n.counter-panel {\n  min-width: 0;\n  padding: 22px;\n  border-radius: 20px;\n}\n.counter-workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 350px;\n  gap: 20px;\n  align-items: start;\n}\n.counter-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 10px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.counter-button.primary {\n  color: white;\n  background: var(--cis-primary);\n}\n.counter-button.primary:not(:disabled):hover {\n  background: #5f52c7;\n}\n.counter-button.secondary {\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n  border: 1px solid var(--cis-border);\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.counter-catalog-tools {\n  display: flex;\n  align-items: end;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 20px 0 14px;\n}\n.counter-search {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 160px;\n  padding: 0 12px;\n  border: 1px solid var(--cis-border);\n  border-radius: 12px;\n  background: var(--cis-page);\n}\n.counter-search svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.counter-search input {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 0;\n  background: transparent;\n  font-size: 13px;\n}\n.counter-location {\n  width: 105px;\n  font-size: 10px;\n}\n.counter-category-tabs {\n  display: flex;\n  gap: 7px;\n  overflow-x: auto;\n  padding-bottom: 16px;\n}\n.counter-category-tabs button {\n  flex-shrink: 0;\n  padding: 8px 12px;\n  border-radius: 9px;\n  font-size: 11px;\n  background: var(--cis-page);\n}\n.counter-category-tabs .selected {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.counter-product-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));\n  gap: 12px;\n}\n.counter-product {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  gap: 7px;\n  padding: 14px;\n  border-radius: 16px;\n  text-align: left;\n}\n.counter-product.in-cart,\n.counter-product:not(:disabled):hover {\n  border-color: var(--cis-primary);\n  background: var(--cis-page);\n}\n.counter-product strong {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.counter-product small {\n  font-size: 10px;\n}\n.counter-product-top {\n  width: 100%;\n}\n.counter-product-monogram {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 12px;\n  font-weight: 800;\n}\n.counter-product-count {\n  font-size: 9px;\n}\n.counter-product-price {\n  margin-top: auto;\n  padding-top: 6px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.counter-product-bottom {\n  width: 100%;\n}\n.counter-product .out-of-stock {\n  color: #b45309;\n}\n.counter-add,\n.counter-count {\n  display: inline-grid;\n  place-items: center;\n  min-width: 28px;\n  min-height: 28px;\n  border-radius: 8px;\n  padding: 3px;\n}\n.counter-load-more,\n.counter-charge {\n  width: 100%;\n  margin-top: 12px;\n}\n.counter-cart {\n  position: sticky;\n  top: 20px;\n}\n.counter-customer-form,\n.counter-expense-form {\n  display: grid;\n  gap: 13px;\n  margin-top: 18px;\n}\n.counter-customer-form label,\n.counter-expense-form label {\n  display: grid;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--cis-muted);\n}\ninput:not([type=search]),\nselect,\ntextarea {\n  width: 100%;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 9px 11px;\n  background: var(--cis-page);\n  color: var(--cis-text);\n  font-size: 13px;\n}\n.counter-cart-lines {\n  max-height: 420px;\n  overflow-y: auto;\n  margin-top: 16px;\n}\n.counter-cart-line {\n  padding: 15px 0;\n  border-top: 1px solid var(--cis-border);\n}\n.counter-cart-line strong {\n  font-size: 12px;\n}\n.counter-line-title small {\n  display: block;\n}\n.counter-remove {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  font-size: 21px;\n}\n.counter-line-bottom {\n  margin-top: 10px;\n}\n.counter-stepper {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.counter-stepper button {\n  width: 34px;\n  min-height: 40px;\n  background: var(--cis-page);\n}\n.counter-stepper input {\n  width: 48px;\n  border: 0;\n  border-radius: 0;\n  padding: 4px;\n  text-align: center;\n  appearance: textfield;\n}\n.counter-stepper input::-webkit-inner-spin-button {\n  appearance: none;\n}\n.counter-cart-footer {\n  margin-top: 16px;\n  border-top: 1px dashed var(--cis-border);\n  padding-top: 18px;\n}\n.counter-total strong {\n  font-size: 20px;\n  color: var(--cis-primary-strong);\n}\n.counter-hint {\n  margin: 10px 0;\n}\n.counter-notice {\n  padding: 12px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  line-height: 1.6;\n  margin: 10px 0;\n}\n.counter-notice a {\n  margin-left: 8px;\n  text-decoration: underline;\n}\n.counter-notice.success {\n  background: #e7f7ef;\n  color: #166747;\n}\n.counter-notice.error {\n  background: #fff0f0;\n  color: #a12b35;\n}\n.counter-notice.warning,\n.counter-status {\n  background: #fff6e5;\n  color: #875508;\n}\n.counter-empty {\n  padding: 36px 18px;\n  text-align: center;\n  color: var(--cis-muted);\n  font-size: 13px;\n}\n.counter-empty svg {\n  width: 42px;\n  height: 42px;\n  margin: 0 auto 15px;\n}\n.counter-pending-search {\n  max-width: 440px;\n  margin: 20px 0;\n}\n.counter-pending-table {\n  overflow-x: auto;\n  border-radius: 12px;\n}\n.counter-pending-table :is(th, td) {\n  padding: 13px 14px;\n  text-align: left;\n  font-size: 12px;\n}\n.counter-pending-table td {\n  border-bottom: 1px solid var(--cis-border);\n}\n.counter-pending-table small {\n  display: block;\n}\n.counter-status {\n  display: inline-block;\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.counter-row-actions,\n.counter-modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.counter-modal-actions {\n  margin-top: 22px;\n  flex-wrap: wrap;\n}\n.counter-checkout-summary {\n  padding: 22px;\n  border-radius: 16px;\n  background: var(--cis-primary-soft);\n  text-align: center;\n  color: var(--cis-primary-strong);\n}\n.counter-checkout-summary strong {\n  display: block;\n  font-size: 30px;\n  font-weight: 800;\n  margin: 8px 0;\n}\n.counter-checkout-summary.payable {\n  margin-top: 14px;\n}\n.counter-discount {\n  display: grid;\n  gap: 6px;\n  margin-top: 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--cis-muted);\n}\n.counter-discount input,\n.counter-discount select {\n  border: 1px solid var(--cis-border);\n  border-radius: 12px;\n  padding: 10px 14px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--cis-ink);\n  background: var(--cis-card, #fff);\n  outline: none;\n}\n.counter-discount input:focus,\n.counter-discount select:focus {\n  border-color: var(--cis-primary);\n}\n.counter-payment-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.counter-link {\n  color: var(--cis-primary);\n  font-size: 12px;\n  font-weight: 700;\n  text-decoration: underline;\n  background: none;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.counter-new-customer {\n  margin: 4px 0 8px;\n  text-align: right;\n}\n.counter-new-customer-form {\n  display: grid;\n  gap: 8px;\n  margin: 8px 0;\n  padding: 12px;\n  border: 1px dashed var(--cis-border);\n  border-radius: 12px;\n}\n.counter-new-customer-form input {\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 9px 12px;\n  font-size: 13px;\n  color: var(--cis-ink);\n  background: var(--cis-card, #fff);\n  outline: none;\n}\n.counter-new-customer-form input:focus {\n  border-color: var(--cis-primary);\n}\n.counter-new-customer-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n@media (max-width: 767px) {\n  .counter-payment-row {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1100px) {\n  .counter-workspace {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .counter-cart {\n    position: static;\n  }\n}\n@media (max-width: 767px) {\n  .counter-actions,\n  .counter-overview {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .counter-action,\n  .counter-panel {\n    padding: 16px;\n  }\n  .counter-product-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .counter-product {\n    padding: 11px;\n  }\n  .counter-catalog-tools .counter-search {\n    flex-basis: 100%;\n  }\n  .counter-location {\n    flex: 1;\n  }\n  .counter-cart-lines {\n    max-height: none;\n  }\n  .counter-modal-actions {\n    flex-direction: column;\n  }\n  .counter-modal-actions .counter-button {\n    width: 100%;\n  }\n  .counter-pending-search {\n    min-width: 0;\n  }\n  input,\n  select,\n  textarea {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=counter.page.css.map */\n"] }]
  }], () => [], { workspace: [{
    type: ViewChild,
    args: ["saleWorkspace"]
  }], beforeUnload: [{
    type: HostListener,
    args: ["window:beforeunload", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CounterPage, { className: "CounterPage", filePath: "app/features/counter/counter.page.ts", lineNumber: 41 });
})();
export {
  CounterPage
};
//# sourceMappingURL=chunk-LTOODRPI.js.map
