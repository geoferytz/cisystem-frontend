import {
  BarcodeScannerComponent,
  PwaService,
  takeUntilDestroyed
} from "./chunk-4GAGM7GI.js";
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
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
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
  DatePipe,
  DestroyRef,
  GraphqlService,
  HostListener,
  NgForOf,
  NgIf,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
} from "./chunk-ZFAUJJU2.js";
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
function CounterPage_div_12_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275text(1, "View sales");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CounterPage_div_12_a_2_Template, 2, 0, "a", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.success(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.perm.canView("SALES"));
  }
}
function CounterPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actionError());
  }
}
function CounterPage_section_63_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    \u0275\u0275property("value", b_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", b_r3.name, " (", b_r3.code, ")");
  }
}
function CounterPage_section_63_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function CounterPage_section_63_button_31_Template_button_click_0_listener() {
      const name_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.category.set(name_r5);
      return \u0275\u0275resetView(ctx_r0.visibleLimit.set(36));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.category() === name_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(name_r5);
  }
}
function CounterPage_section_63_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.catalogError());
  }
}
function CounterPage_section_63_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1, "Loading your product catalog\u2026");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_section_63_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function CounterPage_section_63_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      \u0275\u0275nextContext();
      const cartPanel_r7 = \u0275\u0275reference(39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewCart(cartPanel_r7));
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
function CounterPage_section_63_div_35_button_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const count_r10 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", count_r10, " in cart");
  }
}
function CounterPage_section_63_div_35_button_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", product_r9.brand);
  }
}
function CounterPage_section_63_div_35_button_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "common.expiry"), ": ", product_r9.expiryDate, " ");
  }
}
function CounterPage_section_63_div_35_button_1_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-[#B81104]", product_r9.daysToExpiry <= 7)("dark:text-red-400", product_r9.daysToExpiry <= 7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 7, "common.expiresIn"), " ", product_r9.daysToExpiry, " ", \u0275\u0275pipeBind1(3, 9, "common.days"), " ");
  }
}
function CounterPage_section_63_div_35_button_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "money");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "common.suggested"), " ", \u0275\u0275pipeBind1(3, 4, product_r9.suggestedSellingPrice), " ");
  }
}
function CounterPage_section_63_div_35_button_1_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function CounterPage_section_63_div_35_button_1_button_22_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const product_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.addProduct(product_r9, true);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "money");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r0.canAddDiscounted(product_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Add ", \u0275\u0275pipeBind1(2, 2, product_r9.suggestedSellingPrice));
  }
}
function CounterPage_section_63_div_35_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function CounterPage_section_63_div_35_button_1_Template_button_click_0_listener() {
      const product_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addProduct(product_r9));
    });
    \u0275\u0275elementStart(1, "span", 85)(2, "span", 86);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CounterPage_section_63_div_35_button_1_span_5_Template, 2, 1, "span", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11);
    \u0275\u0275template(12, CounterPage_section_63_div_35_button_1_span_12_Template, 2, 1, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CounterPage_section_63_div_35_button_1_span_13_Template, 3, 4, "span", 90);
    \u0275\u0275elementStart(14, "span", 91);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CounterPage_section_63_div_35_button_1_small_17_Template, 4, 11, "small", 92)(18, CounterPage_section_63_div_35_button_1_span_18_Template, 4, 6, "span", 93);
    \u0275\u0275elementStart(19, "span", 94)(20, "small");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, CounterPage_section_63_div_35_button_1_button_22_Template, 3, 4, "button", 95);
    \u0275\u0275elementStart(23, "span", 96);
    \u0275\u0275text(24, "+");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("in-cart", ctx_r0.quantityByProduct().has(product_r9.id));
    \u0275\u0275property("disabled", !ctx_r0.canAdd(product_r9));
    \u0275\u0275attribute("aria-label", "Add " + product_r9.name + " to cart");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 18, product_r9.name.slice(0, 2)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.quantityByProduct().get(product_r9.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r9.category || "Uncategorized");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r9.sku);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r9.brand);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r9.expiryDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r9.sellingPrice === null ? "Price not set" : \u0275\u0275pipeBind1(16, 20, product_r9.sellingPrice));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r9.daysToExpiry !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r9.suggestedSellingPrice !== null);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("out-of-stock", product_r9.availableQuantity === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r9.availableQuantity > 0 ? product_r9.availableQuantity + " available" : "Out of stock");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r9.suggestedSellingPrice !== null);
  }
}
function CounterPage_section_63_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275template(1, CounterPage_section_63_div_35_button_1_Template, 25, 22, "button", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.visibleProducts());
  }
}
function CounterPage_section_63_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "h3");
    \u0275\u0275text(2, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try another search or category.");
    \u0275\u0275elementEnd()();
  }
}
function CounterPage_section_63_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function CounterPage_section_63_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
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
function CounterPage_section_63_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 103);
    \u0275\u0275element(2, "path", 104);
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
function CounterPage_section_63_article_61_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "common.expiry"), ": ", line_r14.expiryDate);
  }
}
function CounterPage_section_63_article_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 105)(1, "div", 106)(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275template(7, CounterPage_section_63_article_61_span_7_Template, 3, 4, "span", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 108);
    \u0275\u0275listener("click", function CounterPage_section_63_article_61_Template_button_click_8_listener() {
      const line_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeProduct(line_r14.productId));
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "small");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 109)(14, "div", 110)(15, "button", 111);
    \u0275\u0275listener("click", function CounterPage_section_63_article_61_Template_button_click_15_listener() {
      const line_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setQuantity(line_r14.productId, line_r14.quantity - 1));
    });
    \u0275\u0275text(16, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 112);
    \u0275\u0275listener("change", function CounterPage_section_63_article_61_Template_input_change_17_listener($event) {
      const line_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setQuantity(line_r14.productId, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 111);
    \u0275\u0275listener("click", function CounterPage_section_63_article_61_Template_button_click_18_listener() {
      const line_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setQuantity(line_r14.productId, line_r14.quantity + 1));
    });
    \u0275\u0275text(19, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "money");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const line_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(line_r14.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", line_r14.sku, " \xB7 ", line_r14.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", line_r14.expiryDate);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275attribute("aria-label", "Remove " + line_r14.productName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 15, line_r14.unitPrice), " each");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.busy() || line_r14.quantity <= 1);
    \u0275\u0275attribute("aria-label", "Decrease " + line_r14.productName + " quantity");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", line_r14.quantity)("readonly", ctx_r0.busy());
    \u0275\u0275attribute("aria-label", line_r14.productName + " quantity");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275attribute("aria-label", "Increase " + line_r14.productName + " quantity");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 17, line_r14.quantity * line_r14.unitPrice));
  }
}
function CounterPage_section_63_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1, "Some items no longer have enough stock. Adjust quantities or hold this cart.");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_section_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 46, 0)(2, "div", 47)(3, "div", 48)(4, "div")(5, "h2");
    \u0275\u0275text(6, "Choose products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Prices come from your product settings.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function CounterPage_section_63_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSale());
    });
    \u0275\u0275text(10, "Close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 49)(12, "label", 50)(13, "span", 51);
    \u0275\u0275text(14, "Search products");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 52);
    \u0275\u0275element(16, "circle", 53)(17, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "input", 55);
    \u0275\u0275listener("input", function CounterPage_section_63_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setSearch($event.target.value));
    })("keydown.enter", function CounterPage_section_63_Template_input_keydown_enter_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.onSearchEnter();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 56);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "select", 57);
    \u0275\u0275listener("change", function CounterPage_section_63_Template_select_change_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changeLocation());
    });
    \u0275\u0275template(23, CounterPage_section_63_option_23_Template, 2, 3, "option", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 23);
    \u0275\u0275listener("click", function CounterPage_section_63_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.scannerOpen.set(true));
    });
    \u0275\u0275text(25, "Scan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 23);
    \u0275\u0275listener("click", function CounterPage_section_63_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadProducts());
    });
    \u0275\u0275text(27, "Refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 58)(29, "button", 59);
    \u0275\u0275listener("click", function CounterPage_section_63_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.category.set("");
      return \u0275\u0275resetView(ctx_r0.visibleLimit.set(36));
    });
    \u0275\u0275text(30, "All products");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, CounterPage_section_63_button_31_Template, 2, 3, "button", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, CounterPage_section_63_div_32_Template, 2, 1, "div", 7)(33, CounterPage_section_63_div_33_Template, 2, 0, "div", 61)(34, CounterPage_section_63_button_34_Template, 3, 4, "button", 62)(35, CounterPage_section_63_div_35_Template, 2, 1, "div", 63)(36, CounterPage_section_63_div_36_Template, 5, 0, "div", 64)(37, CounterPage_section_63_button_37_Template, 2, 1, "button", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "aside", 66, 1)(40, "div", 48)(41, "div")(42, "h2");
    \u0275\u0275text(43, "Sales cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "span", 67);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "form", 68)(49, "label");
    \u0275\u0275text(50, "Customer ");
    \u0275\u0275elementStart(51, "small");
    \u0275\u0275text(52, "(optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "label");
    \u0275\u0275text(55, "Reference ");
    \u0275\u0275elementStart(56, "small");
    \u0275\u0275text(57, "(optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, CounterPage_section_63_div_59_Template, 7, 0, "div", 64);
    \u0275\u0275elementStart(60, "div", 71);
    \u0275\u0275template(61, CounterPage_section_63_article_61_Template, 23, 19, "article", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 73);
    \u0275\u0275template(63, CounterPage_section_63_div_63_Template, 2, 0, "div", 37);
    \u0275\u0275elementStart(64, "div", 74)(65, "span");
    \u0275\u0275text(66, "Total to charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "strong", 75);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "p", 21);
    \u0275\u0275text(71, "Stock is checked again at checkout. Held carts do not reserve stock.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 76);
    \u0275\u0275listener("click", function CounterPage_section_63_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCart(true));
    });
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 77);
    \u0275\u0275listener("click", function CounterPage_section_63_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCart());
    });
    \u0275\u0275text(76, "Hold sale for later");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 78);
    \u0275\u0275listener("click", function CounterPage_section_63_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r2);
      const saleWorkspace_r15 = \u0275\u0275reference(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewProducts(saleWorkspace_r15));
    });
    \u0275\u0275text(78, "Back to products");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r0.search());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 29, "common.branch"));
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
    \u0275\u0275textInterpolate(ctx_r0.itemCount());
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.headerForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("readonly", ctx_r0.busy());
    \u0275\u0275advance(5);
    \u0275\u0275property("readonly", ctx_r0.busy());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.lines().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.lines());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.stockIssues() && ctx_r0.lines().length && !ctx_r0.catalogLoading());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 31, ctx_r0.total()));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.busy() || !ctx_r0.lines().length || !ctx_r0.pwa.online() || ctx_r0.stockIssues() || ctx_r0.catalogLoading() || !!ctx_r0.catalogError());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.busy() ? "Please wait\u2026" : "Charge " + \u0275\u0275pipeBind1(74, 33, ctx_r0.total()));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.busy() || !ctx_r0.lines().length || !ctx_r0.pwa.online());
  }
}
function CounterPage_section_64_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingError());
  }
}
function CounterPage_section_64_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1, "Loading pending sales\u2026");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_section_64_cis_pager_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cis-pager", 120);
    \u0275\u0275twoWayListener("pageSizeChange", function CounterPage_section_64_cis_pager_20_Template_cis_pager_pageSizeChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pendingPageSize, $event) || (ctx_r0.pendingPageSize = $event);
      return \u0275\u0275resetView($event);
    })("pageIndexChange", function CounterPage_section_64_cis_pager_20_Template_cis_pager_pageIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
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
function CounterPage_section_64_div_21_tr_17_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function CounterPage_section_64_div_21_tr_17_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const cart_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelTarget.set(cart_r19));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 126);
    \u0275\u0275element(2, "path", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Cancel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r0.busy());
  }
}
function CounterPage_section_64_div_21_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(18, "td")(19, "span", 124);
    \u0275\u0275text(20, "On hold");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "cis-row-actions")(23, "button", 125);
    \u0275\u0275listener("click", function CounterPage_section_64_div_21_tr_17_Template_button_click_23_listener() {
      const cart_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSale(cart_r19));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 126);
    \u0275\u0275element(25, "path", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "Resume");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, CounterPage_section_64_div_21_tr_17_button_27_Template, 4, 1, "button", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cart_r19 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cart_r19.customer || "Walk-in customer");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cart_r19.referenceNumber || "#" + cart_r19.id.slice(0, 8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", cart_r19.lines.length, " products");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 7, cart_r19.updatedAt, "dd MMM, HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, cart_r19.total));
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.busy() || !ctx_r0.perm.canCreate("SALES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.perm.canDelete("SALES"));
  }
}
function CounterPage_section_64_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "table", 122)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275template(17, CounterPage_section_64_div_21_tr_17_Template, 28, 12, "tr", 123);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.displayedPending());
  }
}
function CounterPage_section_64_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "h3");
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
function CounterPage_section_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 115)(1, "div", 48)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Pending sales ");
    \u0275\u0275elementStart(5, "span", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Held carts from all cashiers. Resume a sale when the customer is ready.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function CounterPage_section_64_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadPending());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label", 116)(12, "span", 51);
    \u0275\u0275text(13, "Search pending sales");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 52);
    \u0275\u0275element(15, "circle", 53)(16, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "input", 117);
    \u0275\u0275listener("input", function CounterPage_section_64_Template_input_input_17_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pendingSearch.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, CounterPage_section_64_div_18_Template, 2, 1, "div", 7)(19, CounterPage_section_64_div_19_Template, 2, 0, "div", 61)(20, CounterPage_section_64_cis_pager_20_Template, 1, 3, "cis-pager", 118)(21, CounterPage_section_64_div_21_Template, 18, 1, "div", 119)(22, CounterPage_section_64_div_22_Template, 5, 2, "div", 64);
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
function CounterPage_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actionError());
  }
}
function CounterPage_option_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    \u0275\u0275property("value", item_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r21.name);
  }
}
function CounterPage_p_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 114);
    \u0275\u0275text(1, "No expense categories are available. Ask an administrator to create a category, then ");
    \u0275\u0275elementStart(2, "button", 59);
    \u0275\u0275listener("click", function CounterPage_p_112_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadExpenseCategories());
    });
    \u0275\u0275text(3, "retry");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ".");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_p_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1, "Choose a date and category, and enter an amount greater than zero.");
    \u0275\u0275elementEnd();
  }
}
function CounterPage_p_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.expenseError());
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
  headerForm = this.fb.nonNullable.group({ customer: ["", Validators.maxLength(200)], referenceNumber: ["", Validators.maxLength(120)] });
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
    return this.products().filter((p) => (!this.category() || (p.category || "Uncategorized") === this.category()) && (!query || [p.name, p.sku, p.barcode, p.brand].some((value) => value?.toLowerCase().includes(query))));
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
    this.headerForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.dirty.set(true));
    effect(() => {
      const canSell = this.perm.canCreate("SALES");
      const canViewSales = this.perm.canView("SALES");
      const canExpense = this.perm.canCreate("EXPENSES");
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
    if (!this.perm.canView("SALES"))
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
    if (this.busy() || !this.perm.canCreate("SALES"))
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
    if (this.busy() || !this.perm.canCreate("SALES") || !this.pwa.online() || !this.lines().length)
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
    this.busy.set(true);
    this.actionError.set(null);
    this.gql.request("mutation CheckoutCounterCart($input: CheckoutCounterCartInput!) { checkoutCounterCart(input: $input) { id } }", {
      input: { id: this.cartId(), version: this.cartVersion(), expectedTotal: this.total() }
    }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))).subscribe({
      next: (data) => {
        this.success.set(`Sale #${data.checkoutCounterCart.id} completed. Stock has been updated.`);
        this.checkoutOpen.set(false);
        this.workspaceOpen.set(false);
        this.resetCart();
        this.loadPending();
        this.loadProducts();
      },
      error: (error) => this.actionError.set(this.message(error, "Checkout failed. Your held cart is safe; retrying will not duplicate this sale."))
    });
  }
  cancelHeldCart() {
    const cart = this.cancelTarget();
    if (!cart || this.busy() || !this.pwa.online() || !this.perm.canDelete("SALES"))
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
  openExpense() {
    if (this.busy() || !this.perm.canCreate("EXPENSES"))
      return;
    this.expenseError.set(null);
    this.expenseForm.reset({ date: toIsoDate(/* @__PURE__ */ new Date()), categoryId: "", description: "", amount: 0, paymentMethod: "CASH" });
    this.expenseOpen.set(true);
    this.loadExpenseCategories();
  }
  saveExpense() {
    if (this.busy() || !this.pwa.online() || !this.perm.canCreate("EXPENSES"))
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
        this.success.set("Expense recorded successfully.");
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
    this.headerForm.reset({ customer: cart.customer || "", referenceNumber: cart.referenceNumber || "" }, { emitEvent: false });
    this.dirty.set(false);
  }
  resetCart() {
    this.cartId.set(crypto.randomUUID());
    this.cartVersion.set(null);
    this.lines.set([]);
    this.headerForm.reset({ customer: "", referenceNumber: "" }, { emitEvent: false });
    this.dirty.set(false);
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
  }, decls: 123, vars: 43, consts: [["saleWorkspace", ""], ["cartPanel", ""], [1, "counter-page"], [1, "counter-heading"], [1, "counter-eyebrow"], [1, "counter-connection"], ["class", "counter-notice success", "role", "status", 4, "ngIf"], ["class", "counter-notice error", "role", "alert", 4, "ngIf"], ["aria-label", "Counter actions", 1, "counter-actions"], ["type", "button", "data-counter-action", "sale", 1, "counter-action", "sale-action", 3, "click", "disabled"], [1, "counter-action-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.7", "aria-hidden", "true"], ["d", "M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01M12 8h5m-2.5-2.5v5"], ["aria-hidden", "true", 1, "counter-arrow"], ["type", "button", "data-counter-action", "expense", 1, "counter-action", "expense-action", 3, "click", "disabled"], ["d", "M6 3h12v18l-3-2-3 2-3-2-3 2V3ZM9 7h6M9 11h6M9 15h3"], ["aria-label", "Counter overview", 1, "counter-overview"], ["class", "counter-workspace scroll-mt-28", "aria-label", "New sale workspace", 4, "ngIf"], ["class", "counter-panel counter-pending", "aria-label", "Pending sales", 4, "ngIf"], ["title", "Complete this sale", "maxWidthClass", "max-w-md", 3, "close", "open"], [1, "counter-checkout-summary"], [1, "counter-hint"], [1, "counter-modal-actions"], ["type", "button", 1, "counter-button", "secondary", 3, "click", "disabled"], ["type", "button", 1, "counter-button", "primary", 3, "click", "disabled"], ["title", "New Expenses", "maxWidthClass", "max-w-lg", 3, "close", "open"], [1, "counter-expense-form", 3, "ngSubmit", "formGroup"], ["type", "date", "formControlName", "date", 3, "readonly"], ["formControlName", "categoryId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "min", "0.01", "step", "0.01", "formControlName", "amount", 3, "readonly"], ["formControlName", "paymentMethod"], ["value", "CASH"], ["value", "MPESA"], ["value", "BANK"], ["formControlName", "description", "rows", "3", "maxlength", "1000", "placeholder", "What was this expense for?", 3, "readonly"], ["class", "counter-notice warning", 4, "ngIf"], ["type", "submit", 1, "counter-button", "primary", 3, "disabled"], ["title", "Discard unsaved cart changes?", "message", "Your unsaved changes will be lost. To keep this cart, go back and choose Hold sale for later.", "confirmText", "Discard changes", "cancelText", "Keep editing", 3, "confirm", "cancel", "open"], ["title", "Scan product barcode", 3, "scanned", "close", "open"], ["title", "Cancel this held sale?", "message", "The cart will be removed from pending sales. No inventory or completed sales will be changed.", "confirmText", "Cancel held sale", "cancelText", "Keep sale", 3, "confirm", "cancel", "open"], ["role", "status", 1, "counter-notice", "success"], ["routerLink", "/sales", 4, "ngIf"], ["routerLink", "/sales"], ["role", "alert", 1, "counter-notice", "error"], ["aria-label", "New sale workspace", 1, "counter-workspace", "scroll-mt-28"], [1, "counter-catalog", "counter-panel"], [1, "counter-section-heading"], [1, "counter-catalog-tools"], [1, "counter-search"], [1, "sr-only"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["cx", "10.5", "cy", "10.5", "r", "6.5"], ["d", "m16 16 5 5"], ["type", "search", "placeholder", "Search name, SKU, barcode, or brand", 3, "input", "keydown.enter", "value"], [1, "counter-location"], ["aria-label", "Branch", 3, "change", "formControl", "disabled"], ["aria-label", "Product category", 1, "counter-category-tabs"], ["type", "button", 3, "click"], ["type", "button", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "counter-empty", "role", "status", 4, "ngIf"], ["type", "button", "class", "sticky top-24 z-10 mb-3 w-full rounded-xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white shadow-lg min-[1101px]:hidden", 3, "click", 4, "ngIf"], ["class", "counter-product-grid", 4, "ngIf"], ["class", "counter-empty", 4, "ngIf"], ["type", "button", "class", "counter-button secondary counter-load-more", 3, "click", 4, "ngIf"], ["aria-label", "Sales cart", 1, "counter-cart", "counter-panel", "scroll-mt-28"], [1, "counter-count"], [1, "counter-customer-form", 3, "formGroup"], ["formControlName", "customer", "maxlength", "200", "placeholder", "Walk-in customer", 3, "readonly"], ["formControlName", "referenceNumber", "maxlength", "120", "placeholder", "Order or receipt reference", 3, "readonly"], [1, "counter-cart-lines"], ["class", "counter-cart-line", 4, "ngFor", "ngForOf"], [1, "counter-cart-footer"], [1, "counter-total"], ["aria-live", "polite"], ["type", "button", 1, "counter-button", "primary", "counter-charge", 3, "click", "disabled"], ["type", "button", 1, "counter-button", "secondary", "counter-charge", 3, "click", "disabled"], ["type", "button", 1, "counter-button", "secondary", "counter-charge", "min-[1101px]:hidden", 3, "click"], [3, "value"], ["role", "status", 1, "counter-empty"], ["type", "button", 1, "sticky", "top-24", "z-10", "mb-3", "w-full", "rounded-xl", "bg-primary-500", "px-4", "py-3", "text-sm", "font-semibold", "text-white", "shadow-lg", "min-[1101px]:hidden", 3, "click"], [1, "counter-product-grid"], ["type", "button", "class", "counter-product", 3, "in-cart", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "counter-product", 3, "click", "disabled"], [1, "counter-product-top"], ["aria-hidden", "true", 1, "counter-product-monogram"], ["class", "counter-product-count", 4, "ngIf"], [1, "counter-product-category"], [4, "ngIf"], ["class", "inline-flex w-fit items-center gap-1 rounded-lg bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300", 4, "ngIf"], [1, "counter-product-price"], [3, "text-[#B81104]", "dark:text-red-400", 4, "ngIf"], ["class", "counter-product-price", "style", "font-size: 0.8rem; color: #7367d8;", 4, "ngIf"], [1, "counter-product-bottom"], ["type", "button", "class", "counter-button secondary", "style", "padding: 0.25rem 0.5rem; font-size: 0.7rem;", 3, "disabled", "click", 4, "ngIf"], ["aria-hidden", "true", 1, "counter-add"], [1, "counter-product-count"], [1, "inline-flex", "w-fit", "items-center", "gap-1", "rounded-lg", "bg-amber-100", "px-2", "py-1", "text-xs", "font-semibold", "text-amber-700", "dark:bg-amber-900/50", "dark:text-amber-300"], [1, "counter-product-price", 2, "font-size", "0.8rem", "color", "#7367d8"], ["type", "button", 1, "counter-button", "secondary", 2, "padding", "0.25rem 0.5rem", "font-size", "0.7rem", 3, "click", "disabled"], [1, "counter-empty"], ["type", "button", 1, "counter-button", "secondary", "counter-load-more", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "aria-hidden", "true"], ["d", "M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01"], [1, "counter-cart-line"], [1, "counter-line-title"], ["class", "ml-1 inline-flex items-center rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", 4, "ngIf"], ["type", "button", 1, "counter-remove", 3, "click", "disabled"], [1, "counter-line-bottom"], [1, "counter-stepper"], ["type", "button", 3, "click", "disabled"], ["type", "number", "min", "1", "step", "1", 3, "change", "value", "readonly"], [1, "ml-1", "inline-flex", "items-center", "rounded-md", "bg-amber-100", "px-1.5", "py-0.5", "text-[10px]", "font-semibold", "text-amber-700", "dark:bg-amber-900/40", "dark:text-amber-300"], [1, "counter-notice", "warning"], ["aria-label", "Pending sales", 1, "counter-panel", "counter-pending"], [1, "counter-search", "counter-pending-search"], ["type", "search", "placeholder", "Search customer, reference, or product", 3, "input", "value"], ["class", "mt-2 block", 3, "total", "pageSize", "pageIndex", "pageSizeChange", "pageIndexChange", 4, "ngIf"], ["class", "counter-pending-table", 4, "ngIf"], [1, "mt-2", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "counter-pending-table"], [1, "w-full", "border-collapse", "text-sm"], [4, "ngFor", "ngForOf"], [1, "counter-status"], ["type", "button", 1, "cis-row-action", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 4l14 8-14 8V4z"], ["type", "button", "class", "cis-row-action cis-row-action-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"]], template: function CounterPage_Template(rf, ctx) {
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
      \u0275\u0275template(12, CounterPage_div_12_Template, 3, 2, "div", 6)(13, CounterPage_div_13_Template, 2, 1, "div", 7);
      \u0275\u0275elementStart(14, "section", 8)(15, "button", 9);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_15_listener() {
        return ctx.openSale();
      });
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 11);
      \u0275\u0275element(18, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "span")(20, "strong");
      \u0275\u0275text(21, "New Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "small");
      \u0275\u0275text(23, "Browse products, build a cart, and checkout.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "span", 13);
      \u0275\u0275text(25, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 14);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_26_listener() {
        return ctx.openExpense();
      });
      \u0275\u0275elementStart(27, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 11);
      \u0275\u0275element(29, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "span")(31, "strong");
      \u0275\u0275text(32, "New Expenses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "small");
      \u0275\u0275text(34, "Record an expense without leaving the counter.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "span", 13);
      \u0275\u0275text(36, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "section", 16)(38, "div")(39, "span");
      \u0275\u0275text(40, "Held sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "strong");
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "small");
      \u0275\u0275text(44, "Ready to resume");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div")(46, "span");
      \u0275\u0275text(47, "Pending value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "strong");
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "small");
      \u0275\u0275text(52, "Not yet included in completed sales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div")(54, "span");
      \u0275\u0275text(55, "Current cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "strong");
      \u0275\u0275text(57);
      \u0275\u0275elementStart(58, "small");
      \u0275\u0275text(59, "items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "small");
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(63, CounterPage_section_63_Template, 79, 35, "section", 17)(64, CounterPage_section_64_Template, 23, 9, "section", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "cis-modal", 19);
      \u0275\u0275listener("close", function CounterPage_Template_cis_modal_close_65_listener() {
        return !ctx.busy() && ctx.checkoutOpen.set(false);
      });
      \u0275\u0275elementStart(66, "div", 20)(67, "span");
      \u0275\u0275text(68, "Total to collect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "strong");
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p");
      \u0275\u0275text(73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "p", 21);
      \u0275\u0275text(75, "Confirm that payment has been collected before completing this sale. This records the sale and deducts stock; it does not process an online payment.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, CounterPage_div_76_Template, 2, 1, "div", 7);
      \u0275\u0275elementStart(77, "div", 22)(78, "button", 23);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_78_listener() {
        return ctx.checkoutOpen.set(false);
      });
      \u0275\u0275text(79, "Back to cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "button", 24);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_80_listener() {
        return ctx.completeSale();
      });
      \u0275\u0275text(81);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "cis-modal", 25);
      \u0275\u0275listener("close", function CounterPage_Template_cis_modal_close_82_listener() {
        return !ctx.busy() && ctx.expenseOpen.set(false);
      });
      \u0275\u0275elementStart(83, "p", 21);
      \u0275\u0275text(84, "Record an expense against the correct category and payment method.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "form", 26);
      \u0275\u0275listener("ngSubmit", function CounterPage_Template_form_ngSubmit_85_listener() {
        return ctx.saveExpense();
      });
      \u0275\u0275elementStart(86, "label");
      \u0275\u0275text(87, "Date");
      \u0275\u0275element(88, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "label");
      \u0275\u0275text(90, "Category");
      \u0275\u0275elementStart(91, "select", 28)(92, "option", 29);
      \u0275\u0275text(93);
      \u0275\u0275elementEnd();
      \u0275\u0275template(94, CounterPage_option_94_Template, 2, 2, "option", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "label");
      \u0275\u0275text(96, "Amount (TSH)");
      \u0275\u0275element(97, "input", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "label");
      \u0275\u0275text(99, "Payment method");
      \u0275\u0275elementStart(100, "select", 32)(101, "option", 33);
      \u0275\u0275text(102, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "option", 34);
      \u0275\u0275text(104, "M-Pesa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "option", 35);
      \u0275\u0275text(106, "Bank");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "label");
      \u0275\u0275text(108, "Description ");
      \u0275\u0275elementStart(109, "small");
      \u0275\u0275text(110, "(optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "textarea", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275template(112, CounterPage_p_112_Template, 5, 0, "p", 37)(113, CounterPage_p_113_Template, 2, 0, "p", 7)(114, CounterPage_p_114_Template, 2, 1, "p", 7);
      \u0275\u0275elementStart(115, "div", 22)(116, "button", 23);
      \u0275\u0275listener("click", function CounterPage_Template_button_click_116_listener() {
        return ctx.expenseOpen.set(false);
      });
      \u0275\u0275text(117, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "button", 38);
      \u0275\u0275text(119);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(120, "cis-confirm-dialog", 39);
      \u0275\u0275listener("confirm", function CounterPage_Template_cis_confirm_dialog_confirm_120_listener() {
        return ctx.confirmDiscard();
      })("cancel", function CounterPage_Template_cis_confirm_dialog_cancel_120_listener() {
        return ctx.cancelDiscard();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "cis-barcode-scanner", 40);
      \u0275\u0275listener("scanned", function CounterPage_Template_cis_barcode_scanner_scanned_121_listener($event) {
        return ctx.onScanned($event);
      })("close", function CounterPage_Template_cis_barcode_scanner_close_121_listener() {
        return ctx.scannerOpen.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "cis-confirm-dialog", 41);
      \u0275\u0275listener("confirm", function CounterPage_Template_cis_confirm_dialog_confirm_122_listener() {
        return ctx.cancelHeldCart();
      })("cancel", function CounterPage_Template_cis_confirm_dialog_cancel_122_listener() {
        return ctx.cancelTarget.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-offline", !ctx.pwa.online());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pwa.online() ? "Connected" : "Offline");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.actionError() && !ctx.checkoutOpen());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy() || !ctx.perm.canCreate("SALES"));
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", ctx.busy() || !ctx.perm.canCreate("EXPENSES"));
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate(ctx.pending().length);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 37, ctx.pendingValue()));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.itemCount(), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 39, ctx.total()));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.workspaceOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.perm.canView("SALES"));
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.checkoutOpen());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 41, ctx.total()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.itemCount(), " items \xB7 ", ctx.headerForm.controls.customer.value || "Walk-in customer");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.actionError());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy() || !ctx.pwa.online());
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
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, FormControlDirective, FormGroupDirective, FormControlName, RouterLink, ModalComponent, ConfirmDialogComponent, BarcodeScannerComponent, RowActionsMenuComponent, PagerComponent, UpperCasePipe, DatePipe, MoneyPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n  color: var(--cis-text);\n}\n.counter-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 24px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nsmall[_ngcontent-%COMP%], \n.counter-hint[_ngcontent-%COMP%], \n.counter-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.counter-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\n.counter-heading[_ngcontent-%COMP%], \n.counter-section-heading[_ngcontent-%COMP%], \n.counter-action[_ngcontent-%COMP%], \n.counter-product-top[_ngcontent-%COMP%], \n.counter-product-bottom[_ngcontent-%COMP%], \n.counter-line-title[_ngcontent-%COMP%], \n.counter-line-bottom[_ngcontent-%COMP%], \n.counter-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.counter-heading[_ngcontent-%COMP%], \n.counter-section-heading[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.counter-eyebrow[_ngcontent-%COMP%] {\n  color: var(--cis-primary);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n}\n.counter-connection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px;\n  border-radius: 30px;\n  background: var(--cis-surface);\n  font-size: 12px;\n}\n.counter-connection[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #16a085;\n}\n.counter-connection.is-offline[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.counter-actions[_ngcontent-%COMP%], \n.counter-overview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.counter-overview[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.counter-action[_ngcontent-%COMP%] {\n  justify-content: start;\n  padding: 24px;\n  border-radius: 22px;\n  text-align: left;\n}\n.sale-action[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      #7367d8,\n      #4e43a8);\n  color: white;\n}\n.sale-action[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.counter-panel[_ngcontent-%COMP%], \n.expense-action[_ngcontent-%COMP%], \n.counter-overview[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.counter-product[_ngcontent-%COMP%] {\n  border: 1px solid var(--cis-border);\n  background: var(--cis-surface);\n}\n.counter-action-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex: 0 0 54px;\n  height: 54px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.1411764706);\n}\n.expense-action[_ngcontent-%COMP%]   .counter-action-icon[_ngcontent-%COMP%], \n.counter-product-monogram[_ngcontent-%COMP%], \n.counter-count[_ngcontent-%COMP%], \n.counter-add[_ngcontent-%COMP%] {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.counter-action-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.counter-action[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 21px;\n}\n.counter-action[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n}\n.counter-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 24px;\n}\n.counter-overview[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n  border-radius: 18px;\n}\n.counter-overview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.counter-overview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--cis-muted);\n}\n.counter-overview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin: 7px 0;\n  font-size: 23px;\n  font-weight: 800;\n}\n.counter-overview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline;\n}\n.counter-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 22px;\n  border-radius: 20px;\n}\n.counter-workspace[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 350px;\n  gap: 20px;\n  align-items: start;\n}\n.counter-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 10px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.counter-button.primary[_ngcontent-%COMP%] {\n  color: white;\n  background: var(--cis-primary);\n}\n.counter-button.primary[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #5f52c7;\n}\n.counter-button.secondary[_ngcontent-%COMP%] {\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n  border: 1px solid var(--cis-border);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.counter-catalog-tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 20px 0 14px;\n}\n.counter-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 160px;\n  padding: 0 12px;\n  border: 1px solid var(--cis-border);\n  border-radius: 12px;\n  background: var(--cis-page);\n}\n.counter-search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.counter-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 0;\n  background: transparent;\n  font-size: 13px;\n}\n.counter-location[_ngcontent-%COMP%] {\n  width: 105px;\n  font-size: 10px;\n}\n.counter-category-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  overflow-x: auto;\n  padding-bottom: 16px;\n}\n.counter-category-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 8px 12px;\n  border-radius: 9px;\n  font-size: 11px;\n  background: var(--cis-page);\n}\n.counter-category-tabs[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.counter-product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));\n  gap: 12px;\n}\n.counter-product[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  gap: 7px;\n  padding: 14px;\n  border-radius: 16px;\n  text-align: left;\n}\n.counter-product.in-cart[_ngcontent-%COMP%], \n.counter-product[_ngcontent-%COMP%]:not(:disabled):hover {\n  border-color: var(--cis-primary);\n  background: var(--cis-page);\n}\n.counter-product[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.counter-product[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.counter-product-top[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.counter-product-monogram[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 12px;\n  font-weight: 800;\n}\n.counter-product-count[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.counter-product-price[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 6px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.counter-product-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.counter-product[_ngcontent-%COMP%]   .out-of-stock[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.counter-add[_ngcontent-%COMP%], \n.counter-count[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  min-width: 28px;\n  min-height: 28px;\n  border-radius: 8px;\n  padding: 3px;\n}\n.counter-load-more[_ngcontent-%COMP%], \n.counter-charge[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n}\n.counter-cart[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n}\n.counter-customer-form[_ngcontent-%COMP%], \n.counter-expense-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 13px;\n  margin-top: 18px;\n}\n.counter-customer-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.counter-expense-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--cis-muted);\n}\ninput[_ngcontent-%COMP%]:not([type=search]), \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 9px 11px;\n  background: var(--cis-page);\n  color: var(--cis-text);\n  font-size: 13px;\n}\n.counter-cart-lines[_ngcontent-%COMP%] {\n  max-height: 420px;\n  overflow-y: auto;\n  margin-top: 16px;\n}\n.counter-cart-line[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  border-top: 1px solid var(--cis-border);\n}\n.counter-cart-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.counter-line-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.counter-remove[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  font-size: 21px;\n}\n.counter-line-bottom[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.counter-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.counter-stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 34px;\n  min-height: 40px;\n  background: var(--cis-page);\n}\n.counter-stepper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 48px;\n  border: 0;\n  border-radius: 0;\n  padding: 4px;\n  text-align: center;\n  appearance: textfield;\n}\n.counter-stepper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  appearance: none;\n}\n.counter-cart-footer[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-top: 1px dashed var(--cis-border);\n  padding-top: 18px;\n}\n.counter-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--cis-primary-strong);\n}\n.counter-hint[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.counter-notice[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  line-height: 1.6;\n  margin: 10px 0;\n}\n.counter-notice[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  text-decoration: underline;\n}\n.counter-notice.success[_ngcontent-%COMP%] {\n  background: #e7f7ef;\n  color: #166747;\n}\n.counter-notice.error[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  color: #a12b35;\n}\n.counter-notice.warning[_ngcontent-%COMP%], \n.counter-status[_ngcontent-%COMP%] {\n  background: #fff6e5;\n  color: #875508;\n}\n.counter-empty[_ngcontent-%COMP%] {\n  padding: 36px 18px;\n  text-align: center;\n  color: var(--cis-muted);\n  font-size: 13px;\n}\n.counter-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  margin: 0 auto 15px;\n}\n.counter-pending-search[_ngcontent-%COMP%] {\n  max-width: 440px;\n  margin: 20px 0;\n}\n.counter-pending-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 12px;\n}\n.counter-pending-table[_ngcontent-%COMP%]   :is(th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]) {\n  padding: 13px 14px;\n  text-align: left;\n  font-size: 12px;\n}\n.counter-pending-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--cis-border);\n}\n.counter-pending-table[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.counter-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.counter-row-actions[_ngcontent-%COMP%], \n.counter-modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.counter-modal-actions[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  flex-wrap: wrap;\n}\n.counter-checkout-summary[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 16px;\n  background: var(--cis-primary-soft);\n  text-align: center;\n  color: var(--cis-primary-strong);\n}\n.counter-checkout-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 30px;\n  font-weight: 800;\n  margin: 8px 0;\n}\n@media (max-width: 1100px) {\n  .counter-workspace[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .counter-cart[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 767px) {\n  .counter-actions[_ngcontent-%COMP%], \n   .counter-overview[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .counter-action[_ngcontent-%COMP%], \n   .counter-panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .counter-product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .counter-product[_ngcontent-%COMP%] {\n    padding: 11px;\n  }\n  .counter-catalog-tools[_ngcontent-%COMP%]   .counter-search[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n  .counter-location[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .counter-cart-lines[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n  .counter-modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .counter-modal-actions[_ngcontent-%COMP%]   .counter-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .counter-pending-search[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  input[_ngcontent-%COMP%], \n   select[_ngcontent-%COMP%], \n   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=counter.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterPage, [{
    type: Component,
    args: [{ selector: "cis-counter-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, MoneyPipe, ModalComponent, ConfirmDialogComponent, BarcodeScannerComponent, RowActionsMenuComponent, PagerComponent, TranslatePipe], template: `<div class="counter-page">
  <header class="counter-heading">
    <div>
      <div class="counter-eyebrow">POINT OF SALE</div>
      <h1>Counter</h1>
      <p>A clear workspace for every sale, every customer, every day.</p>
    </div>
    <span class="counter-connection" [class.is-offline]="!pwa.online()"><span></span>{{ pwa.online() ? 'Connected' : 'Offline' }}</span>
  </header>

  <div class="counter-notice success" role="status" *ngIf="success()">{{ success() }} <a *ngIf="perm.canView('SALES')" routerLink="/sales">View sales</a></div>
  <div class="counter-notice error" role="alert" *ngIf="actionError() && !checkoutOpen()">{{ actionError() }}</div>

  <section class="counter-actions" aria-label="Counter actions">
    <button class="counter-action sale-action" type="button" data-counter-action="sale" (click)="openSale()" [disabled]="busy() || !perm.canCreate('SALES')">
      <span class="counter-action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01M12 8h5m-2.5-2.5v5" /></svg></span>
      <span><strong>New Sale</strong><small>Browse products, build a cart, and checkout.</small></span>
      <span class="counter-arrow" aria-hidden="true">\u2192</span>
    </button>
    <button class="counter-action expense-action" type="button" data-counter-action="expense" (click)="openExpense()" [disabled]="busy() || !perm.canCreate('EXPENSES')">
      <span class="counter-action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3ZM9 7h6M9 11h6M9 15h3" /></svg></span>
      <span><strong>New Expenses</strong><small>Record an expense without leaving the counter.</small></span>
      <span class="counter-arrow" aria-hidden="true">\u2192</span>
    </button>
  </section>

  <section class="counter-overview" aria-label="Counter overview">
    <div><span>Held sales</span><strong>{{ pending().length }}</strong><small>Ready to resume</small></div>
    <div><span>Pending value</span><strong>{{ pendingValue() | money }}</strong><small>Not yet included in completed sales</small></div>
    <div><span>Current cart</span><strong>{{ itemCount() }} <small>items</small></strong><small>{{ total() | money }}</small></div>
  </section>

  <section #saleWorkspace class="counter-workspace scroll-mt-28" *ngIf="workspaceOpen()" aria-label="New sale workspace">
    <div class="counter-catalog counter-panel">
      <div class="counter-section-heading">
        <div><h2>Choose products</h2><p>Prices come from your product settings.</p></div>
        <button type="button" class="counter-button secondary" (click)="closeSale()" [disabled]="busy()">Close</button>
      </div>
      <div class="counter-catalog-tools">
        <label class="counter-search"><span class="sr-only">Search products</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><input type="search" placeholder="Search name, SKU, barcode, or brand" [value]="search()" (input)="setSearch($any($event.target).value)" (keydown.enter)="onSearchEnter(); $event.preventDefault()" /></label>
        <label class="counter-location">{{ 'common.branch' | translate }}<select [formControl]="location" [disabled]="lines().length > 0 || busy() || branchCtx.locked()" (change)="changeLocation()" aria-label="Branch"><option *ngFor="let b of branchCtx.options()" [value]="b.code">{{ b.name }} ({{ b.code }})</option></select></label>
        <button type="button" class="counter-button secondary" (click)="scannerOpen.set(true)" [disabled]="busy()">Scan</button>
        <button type="button" class="counter-button secondary" (click)="loadProducts()" [disabled]="catalogLoading() || busy()">Refresh</button>
      </div>
      <div class="counter-category-tabs" aria-label="Product category">
        <button type="button" [class.selected]="!category()" (click)="category.set(''); visibleLimit.set(36)">All products</button>
        <button type="button" *ngFor="let name of productCategories()" [class.selected]="category() === name" (click)="category.set(name); visibleLimit.set(36)">{{ name }}</button>
      </div>
      <div class="counter-notice error" role="alert" *ngIf="catalogError()">{{ catalogError() }}</div>
      <div class="counter-empty" role="status" *ngIf="catalogLoading()">Loading your product catalog\u2026</div>
      <button type="button" *ngIf="lines().length" class="sticky top-24 z-10 mb-3 w-full rounded-xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white shadow-lg min-[1101px]:hidden" (click)="viewCart(cartPanel)">View cart ({{ itemCount() }}) \xB7 {{ total() | money }}</button>
      <div class="counter-product-grid" *ngIf="!catalogLoading()">
        <button type="button" class="counter-product" *ngFor="let product of visibleProducts()" [class.in-cart]="quantityByProduct().has(product.id)" [disabled]="!canAdd(product)" (click)="addProduct(product)" [attr.aria-label]="'Add ' + product.name + ' to cart'">
          <span class="counter-product-top"><span class="counter-product-monogram" aria-hidden="true">{{ product.name.slice(0, 2) | uppercase }}</span><span class="counter-product-count" *ngIf="quantityByProduct().get(product.id) as count">{{ count }} in cart</span></span>
          <small class="counter-product-category">{{ product.category || 'Uncategorized' }}</small>
          <strong>{{ product.name }}</strong>
          <small>{{ product.sku }}<span *ngIf="product.brand"> \xB7 {{ product.brand }}</span></small>
          <span *ngIf="product.expiryDate" class="inline-flex w-fit items-center gap-1 rounded-lg bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
            {{ 'common.expiry' | translate }}: {{ product.expiryDate }}
          </span>
          <span class="counter-product-price">{{ product.sellingPrice === null ? 'Price not set' : (product.sellingPrice | money) }}</span>
          <small *ngIf="product.daysToExpiry !== null" [class.text-[#B81104]]="product.daysToExpiry <= 7" [class.dark:text-red-400]="product.daysToExpiry <= 7">
            {{ 'common.expiresIn' | translate }} {{ product.daysToExpiry }} {{ 'common.days' | translate }}
          </small>
          <span *ngIf="product.suggestedSellingPrice !== null" class="counter-product-price" style="font-size: 0.8rem; color: #7367d8;">
            {{ 'common.suggested' | translate }} {{ product.suggestedSellingPrice | money }}
          </span>
          <span class="counter-product-bottom">
            <small [class.out-of-stock]="product.availableQuantity === 0">{{ product.availableQuantity > 0 ? product.availableQuantity + ' available' : 'Out of stock' }}</small>
            <button *ngIf="product.suggestedSellingPrice !== null" type="button" class="counter-button secondary" style="padding: 0.25rem 0.5rem; font-size: 0.7rem;" (click)="addProduct(product, true); $event.stopPropagation()" [disabled]="!canAddDiscounted(product)">Add {{ product.suggestedSellingPrice | money }}</button>
            <span class="counter-add" aria-hidden="true">+</span>
          </span>
        </button>
      </div>
      <div class="counter-empty" *ngIf="!catalogLoading() && !catalogError() && !filteredProducts().length"><h3>No products found</h3><p>Try another search or category.</p></div>
      <button type="button" class="counter-button secondary counter-load-more" *ngIf="filteredProducts().length > visibleLimit()" (click)="visibleLimit.set(visibleLimit() + 36)">Show more products ({{ filteredProducts().length - visibleLimit() }} remaining)</button>
    </div>

    <aside #cartPanel class="counter-cart counter-panel scroll-mt-28" aria-label="Sales cart">
      <div class="counter-section-heading"><div><h2>Sales cart</h2><p>{{ cartVersion() === null ? 'New transaction' : 'Resumed held sale' }}</p></div><span class="counter-count">{{ itemCount() }}</span></div>
      <form class="counter-customer-form" [formGroup]="headerForm">
        <label>Customer <small>(optional)</small><input formControlName="customer" maxlength="200" placeholder="Walk-in customer" [readonly]="busy()" /></label>
        <label>Reference <small>(optional)</small><input formControlName="referenceNumber" maxlength="120" placeholder="Order or receipt reference" [readonly]="busy()" /></label>
      </form>
      <div class="counter-empty" *ngIf="!lines().length"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 3h2l3 12h10l3-9H6M9 20h.01M18 20h.01" /></svg><h3>Your cart is ready</h3><p>Select a product to start this sale.</p></div>
      <div class="counter-cart-lines">
        <article class="counter-cart-line" *ngFor="let line of lines()">
          <div class="counter-line-title"><div><strong>{{ line.productName }}</strong><small>{{ line.sku }} \xB7 {{ line.location }}<span *ngIf="line.expiryDate" class="ml-1 inline-flex items-center rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ 'common.expiry' | translate }}: {{ line.expiryDate }}</span></small></div><button type="button" class="counter-remove" [attr.aria-label]="'Remove ' + line.productName" (click)="removeProduct(line.productId)" [disabled]="busy()">\xD7</button></div>
          <small>{{ line.unitPrice | money }} each</small>
          <div class="counter-line-bottom"><div class="counter-stepper"><button type="button" [attr.aria-label]="'Decrease ' + line.productName + ' quantity'" (click)="setQuantity(line.productId, line.quantity - 1)" [disabled]="busy() || line.quantity <= 1">\u2212</button><input type="number" min="1" step="1" [value]="line.quantity" [readonly]="busy()" (change)="setQuantity(line.productId, $any($event.target).value)" [attr.aria-label]="line.productName + ' quantity'" /><button type="button" [attr.aria-label]="'Increase ' + line.productName + ' quantity'" (click)="setQuantity(line.productId, line.quantity + 1)" [disabled]="busy()">+</button></div><strong>{{ line.quantity * line.unitPrice | money }}</strong></div>
        </article>
      </div>
      <div class="counter-cart-footer">
        <div class="counter-notice warning" *ngIf="stockIssues() && lines().length && !catalogLoading()">Some items no longer have enough stock. Adjust quantities or hold this cart.</div>
        <div class="counter-total"><span>Total to charge</span><strong aria-live="polite">{{ total() | money }}</strong></div>
        <p class="counter-hint">Stock is checked again at checkout. Held carts do not reserve stock.</p>
        <button type="button" class="counter-button primary counter-charge" (click)="saveCart(true)" [disabled]="busy() || !lines().length || !pwa.online() || stockIssues() || catalogLoading() || !!catalogError()">{{ busy() ? 'Please wait\u2026' : 'Charge ' + (total() | money) }}</button>
        <button type="button" class="counter-button secondary counter-charge" (click)="saveCart()" [disabled]="busy() || !lines().length || !pwa.online()">Hold sale for later</button>
        <button type="button" class="counter-button secondary counter-charge min-[1101px]:hidden" (click)="viewProducts(saleWorkspace)">Back to products</button>
      </div>
    </aside>
  </section>

  <section class="counter-panel counter-pending" *ngIf="perm.canView('SALES')" aria-label="Pending sales">
    <div class="counter-section-heading"><div><h2>Pending sales <span class="counter-count">{{ pending().length }}</span></h2><p>Held carts from all cashiers. Resume a sale when the customer is ready.</p></div><button type="button" class="counter-button secondary" (click)="loadPending()" [disabled]="pendingLoading() || busy()">{{ pendingLoading() ? 'Refreshing\u2026' : 'Refresh list' }}</button></div>
    <label class="counter-search counter-pending-search"><span class="sr-only">Search pending sales</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><input type="search" placeholder="Search customer, reference, or product" [value]="pendingSearch()" (input)="pendingSearch.set($any($event.target).value)" /></label>
    <div class="counter-notice error" role="alert" *ngIf="pendingError()">{{ pendingError() }}</div>
    <div class="counter-empty" role="status" *ngIf="pendingLoading() && !pending().length">Loading pending sales\u2026</div>
    <cis-pager class="mt-2 block" *ngIf="filteredPending().length" [total]="filteredPending().length" [(pageSize)]="pendingPageSize" [(pageIndex)]="pendingPageIndex" />
    <div class="counter-pending-table" *ngIf="filteredPending().length">
      <table class="w-full border-collapse text-sm">
        <thead><tr><th>Sale / customer</th><th>Items</th><th>Last saved</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody><tr *ngFor="let cart of displayedPending()">
          <td><div><strong>{{ cart.customer || 'Walk-in customer' }}</strong><small>{{ cart.referenceNumber || '#' + cart.id.slice(0, 8) }}</small></div></td>
          <td><span>{{ cart.lines.length }} products</span></td>
          <td><span>{{ cart.updatedAt | date:'dd MMM, HH:mm' }}</span></td>
          <td><strong>{{ cart.total | money }}</strong></td>
          <td><span class="counter-status">On hold</span></td>
          <td><cis-row-actions><button type="button" class="cis-row-action" (click)="openSale(cart)" [disabled]="busy() || !perm.canCreate('SALES')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 4l14 8-14 8V4z" /></svg>Resume</button><button type="button" class="cis-row-action cis-row-action-danger" *ngIf="perm.canDelete('SALES')" (click)="cancelTarget.set(cart)" [disabled]="busy()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Cancel</button></cis-row-actions></td>
        </tr></tbody>
      </table>
    </div>
    <div class="counter-empty" *ngIf="!pendingLoading() && !pendingError() && !filteredPending().length"><h3>{{ pendingSearch() ? 'No matching sales' : 'All caught up' }}</h3><p>{{ pendingSearch() ? 'Try a different customer or reference.' : 'No held sales right now. Start a new sale and hold it here whenever you need.' }}</p></div>
  </section>
</div>

<cis-modal [open]="checkoutOpen()" title="Complete this sale" maxWidthClass="max-w-md" (close)="!busy() && checkoutOpen.set(false)">
  <div class="counter-checkout-summary"><span>Total to collect</span><strong>{{ total() | money }}</strong><p>{{ itemCount() }} items \xB7 {{ headerForm.controls.customer.value || 'Walk-in customer' }}</p></div>
  <p class="counter-hint">Confirm that payment has been collected before completing this sale. This records the sale and deducts stock; it does not process an online payment.</p>
  <div class="counter-notice error" role="alert" *ngIf="actionError()">{{ actionError() }}</div>
  <div class="counter-modal-actions"><button type="button" class="counter-button secondary" (click)="checkoutOpen.set(false)" [disabled]="busy()">Back to cart</button><button type="button" class="counter-button primary" (click)="completeSale()" [disabled]="busy() || !pwa.online()">{{ busy() ? 'Completing\u2026' : 'Payment received \xB7 Complete sale' }}</button></div>
</cis-modal>

<cis-modal [open]="expenseOpen()" title="New Expenses" maxWidthClass="max-w-lg" (close)="!busy() && expenseOpen.set(false)">
  <p class="counter-hint">Record an expense against the correct category and payment method.</p>
  <form class="counter-expense-form" [formGroup]="expenseForm" (ngSubmit)="saveExpense()">
    <label>Date<input type="date" formControlName="date" [readonly]="busy()" /></label>
    <label>Category<select formControlName="categoryId"><option value="">{{ categoriesLoading() ? 'Loading categories\u2026' : 'Select an expense category' }}</option><option *ngFor="let item of categories()" [value]="item.id">{{ item.name }}</option></select></label>
    <label>Amount (TSH)<input type="number" min="0.01" step="0.01" formControlName="amount" [readonly]="busy()" /></label>
    <label>Payment method<select formControlName="paymentMethod"><option value="CASH">Cash</option><option value="MPESA">M-Pesa</option><option value="BANK">Bank</option></select></label>
    <label>Description <small>(optional)</small><textarea formControlName="description" rows="3" maxlength="1000" placeholder="What was this expense for?" [readonly]="busy()"></textarea></label>
    <p class="counter-notice warning" *ngIf="!categoriesLoading() && !categories().length">No expense categories are available. Ask an administrator to create a category, then <button type="button" (click)="loadExpenseCategories()">retry</button>.</p>
    <p class="counter-notice error" role="alert" *ngIf="expenseForm.touched && expenseForm.invalid">Choose a date and category, and enter an amount greater than zero.</p>
    <p class="counter-notice error" role="alert" *ngIf="expenseError()">{{ expenseError() }}</p>
    <div class="counter-modal-actions"><button type="button" class="counter-button secondary" (click)="expenseOpen.set(false)" [disabled]="busy()">Cancel</button><button type="submit" class="counter-button primary" [disabled]="busy() || categoriesLoading() || !categories().length || !pwa.online()">{{ busy() ? 'Saving\u2026' : 'Save expense' }}</button></div>
  </form>
</cis-modal>

<cis-confirm-dialog [open]="!!discardTarget()" title="Discard unsaved cart changes?" message="Your unsaved changes will be lost. To keep this cart, go back and choose Hold sale for later." confirmText="Discard changes" cancelText="Keep editing" (confirm)="confirmDiscard()" (cancel)="cancelDiscard()" />
<cis-barcode-scanner [open]="scannerOpen()" title="Scan product barcode" (scanned)="onScanned($event)" (close)="scannerOpen.set(false)" />

<cis-confirm-dialog [open]="!!cancelTarget()" title="Cancel this held sale?" message="The cart will be removed from pending sales. No inventory or completed sales will be changed." confirmText="Cancel held sale" cancelText="Keep sale" (confirm)="cancelHeldCart()" (cancel)="cancelTarget.set(null)" />
`, styles: ["/* src/app/features/counter/counter.page.scss */\n:host {\n  display: block;\n  min-width: 0;\n  color: var(--cis-text);\n}\n.counter-page {\n  display: grid;\n  gap: 24px;\n}\nh1 {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 700;\n}\nh3 {\n  font-weight: 600;\n}\nsmall,\n.counter-hint,\n.counter-heading p,\n.counter-section-heading p {\n  font-size: 12px;\n  color: var(--cis-muted);\n  line-height: 1.6;\n}\n.counter-heading,\n.counter-section-heading,\n.counter-action,\n.counter-product-top,\n.counter-product-bottom,\n.counter-line-title,\n.counter-line-bottom,\n.counter-total {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.counter-heading,\n.counter-section-heading {\n  flex-wrap: wrap;\n}\n.counter-eyebrow {\n  color: var(--cis-primary);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n}\n.counter-connection {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px;\n  border-radius: 30px;\n  background: var(--cis-surface);\n  font-size: 12px;\n}\n.counter-connection > span {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #16a085;\n}\n.counter-connection.is-offline > span {\n  background: #d97706;\n}\n.counter-actions,\n.counter-overview {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.counter-overview {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.counter-action {\n  justify-content: start;\n  padding: 24px;\n  border-radius: 22px;\n  text-align: left;\n}\n.sale-action {\n  background:\n    linear-gradient(\n      120deg,\n      #7367d8,\n      #4e43a8);\n  color: white;\n}\n.sale-action small {\n  color: inherit;\n}\n.counter-panel,\n.expense-action,\n.counter-overview > div,\n.counter-product {\n  border: 1px solid var(--cis-border);\n  background: var(--cis-surface);\n}\n.counter-action-icon {\n  display: grid;\n  place-items: center;\n  flex: 0 0 54px;\n  height: 54px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.1411764706);\n}\n.expense-action .counter-action-icon,\n.counter-product-monogram,\n.counter-count,\n.counter-add {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.counter-action-icon svg {\n  width: 30px;\n  height: 30px;\n}\n.counter-action strong {\n  display: block;\n  font-size: 21px;\n}\n.counter-action small {\n  display: block;\n  margin-top: 6px;\n}\n.counter-arrow {\n  margin-left: auto;\n  font-size: 24px;\n}\n.counter-overview > div {\n  padding: 18px 22px;\n  border-radius: 18px;\n}\n.counter-overview span,\n.counter-overview small {\n  display: block;\n  font-size: 11px;\n  color: var(--cis-muted);\n}\n.counter-overview strong {\n  display: block;\n  margin: 7px 0;\n  font-size: 23px;\n  font-weight: 800;\n}\n.counter-overview strong small {\n  display: inline;\n}\n.counter-panel {\n  min-width: 0;\n  padding: 22px;\n  border-radius: 20px;\n}\n.counter-workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 350px;\n  gap: 20px;\n  align-items: start;\n}\n.counter-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 10px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.counter-button.primary {\n  color: white;\n  background: var(--cis-primary);\n}\n.counter-button.primary:not(:disabled):hover {\n  background: #5f52c7;\n}\n.counter-button.secondary {\n  background: var(--cis-page);\n  color: var(--cis-primary-strong);\n  border: 1px solid var(--cis-border);\n}\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.counter-catalog-tools {\n  display: flex;\n  align-items: end;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 20px 0 14px;\n}\n.counter-search {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 160px;\n  padding: 0 12px;\n  border: 1px solid var(--cis-border);\n  border-radius: 12px;\n  background: var(--cis-page);\n}\n.counter-search svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.counter-search input {\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  border: 0;\n  background: transparent;\n  font-size: 13px;\n}\n.counter-location {\n  width: 105px;\n  font-size: 10px;\n}\n.counter-category-tabs {\n  display: flex;\n  gap: 7px;\n  overflow-x: auto;\n  padding-bottom: 16px;\n}\n.counter-category-tabs button {\n  flex-shrink: 0;\n  padding: 8px 12px;\n  border-radius: 9px;\n  font-size: 11px;\n  background: var(--cis-page);\n}\n.counter-category-tabs .selected {\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n}\n.counter-product-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));\n  gap: 12px;\n}\n.counter-product {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  gap: 7px;\n  padding: 14px;\n  border-radius: 16px;\n  text-align: left;\n}\n.counter-product.in-cart,\n.counter-product:not(:disabled):hover {\n  border-color: var(--cis-primary);\n  background: var(--cis-page);\n}\n.counter-product strong {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.counter-product small {\n  font-size: 10px;\n}\n.counter-product-top {\n  width: 100%;\n}\n.counter-product-monogram {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 12px;\n  font-weight: 800;\n}\n.counter-product-count {\n  font-size: 9px;\n}\n.counter-product-price {\n  margin-top: auto;\n  padding-top: 6px;\n  font-weight: 800;\n  font-size: 13px;\n}\n.counter-product-bottom {\n  width: 100%;\n}\n.counter-product .out-of-stock {\n  color: #b45309;\n}\n.counter-add,\n.counter-count {\n  display: inline-grid;\n  place-items: center;\n  min-width: 28px;\n  min-height: 28px;\n  border-radius: 8px;\n  padding: 3px;\n}\n.counter-load-more,\n.counter-charge {\n  width: 100%;\n  margin-top: 12px;\n}\n.counter-cart {\n  position: sticky;\n  top: 20px;\n}\n.counter-customer-form,\n.counter-expense-form {\n  display: grid;\n  gap: 13px;\n  margin-top: 18px;\n}\n.counter-customer-form label,\n.counter-expense-form label {\n  display: grid;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--cis-muted);\n}\ninput:not([type=search]),\nselect,\ntextarea {\n  width: 100%;\n  min-height: 44px;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  padding: 9px 11px;\n  background: var(--cis-page);\n  color: var(--cis-text);\n  font-size: 13px;\n}\n.counter-cart-lines {\n  max-height: 420px;\n  overflow-y: auto;\n  margin-top: 16px;\n}\n.counter-cart-line {\n  padding: 15px 0;\n  border-top: 1px solid var(--cis-border);\n}\n.counter-cart-line strong {\n  font-size: 12px;\n}\n.counter-line-title small {\n  display: block;\n}\n.counter-remove {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  font-size: 21px;\n}\n.counter-line-bottom {\n  margin-top: 10px;\n}\n.counter-stepper {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  border: 1px solid var(--cis-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.counter-stepper button {\n  width: 34px;\n  min-height: 40px;\n  background: var(--cis-page);\n}\n.counter-stepper input {\n  width: 48px;\n  border: 0;\n  border-radius: 0;\n  padding: 4px;\n  text-align: center;\n  appearance: textfield;\n}\n.counter-stepper input::-webkit-inner-spin-button {\n  appearance: none;\n}\n.counter-cart-footer {\n  margin-top: 16px;\n  border-top: 1px dashed var(--cis-border);\n  padding-top: 18px;\n}\n.counter-total strong {\n  font-size: 20px;\n  color: var(--cis-primary-strong);\n}\n.counter-hint {\n  margin: 10px 0;\n}\n.counter-notice {\n  padding: 12px 15px;\n  border-radius: 12px;\n  font-size: 12px;\n  line-height: 1.6;\n  margin: 10px 0;\n}\n.counter-notice a {\n  margin-left: 8px;\n  text-decoration: underline;\n}\n.counter-notice.success {\n  background: #e7f7ef;\n  color: #166747;\n}\n.counter-notice.error {\n  background: #fff0f0;\n  color: #a12b35;\n}\n.counter-notice.warning,\n.counter-status {\n  background: #fff6e5;\n  color: #875508;\n}\n.counter-empty {\n  padding: 36px 18px;\n  text-align: center;\n  color: var(--cis-muted);\n  font-size: 13px;\n}\n.counter-empty svg {\n  width: 42px;\n  height: 42px;\n  margin: 0 auto 15px;\n}\n.counter-pending-search {\n  max-width: 440px;\n  margin: 20px 0;\n}\n.counter-pending-table {\n  overflow-x: auto;\n  border-radius: 12px;\n}\n.counter-pending-table :is(th, td) {\n  padding: 13px 14px;\n  text-align: left;\n  font-size: 12px;\n}\n.counter-pending-table td {\n  border-bottom: 1px solid var(--cis-border);\n}\n.counter-pending-table small {\n  display: block;\n}\n.counter-status {\n  display: inline-block;\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.counter-row-actions,\n.counter-modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.counter-modal-actions {\n  margin-top: 22px;\n  flex-wrap: wrap;\n}\n.counter-checkout-summary {\n  padding: 22px;\n  border-radius: 16px;\n  background: var(--cis-primary-soft);\n  text-align: center;\n  color: var(--cis-primary-strong);\n}\n.counter-checkout-summary strong {\n  display: block;\n  font-size: 30px;\n  font-weight: 800;\n  margin: 8px 0;\n}\n@media (max-width: 1100px) {\n  .counter-workspace {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .counter-cart {\n    position: static;\n  }\n}\n@media (max-width: 767px) {\n  .counter-actions,\n  .counter-overview {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .counter-action,\n  .counter-panel {\n    padding: 16px;\n  }\n  .counter-product-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n  .counter-product {\n    padding: 11px;\n  }\n  .counter-catalog-tools .counter-search {\n    flex-basis: 100%;\n  }\n  .counter-location {\n    flex: 1;\n  }\n  .counter-cart-lines {\n    max-height: none;\n  }\n  .counter-modal-actions {\n    flex-direction: column;\n  }\n  .counter-modal-actions .counter-button {\n    width: 100%;\n  }\n  .counter-pending-search {\n    min-width: 0;\n  }\n  input,\n  select,\n  textarea {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=counter.page.css.map */\n"] }]
  }], () => [], { workspace: [{
    type: ViewChild,
    args: ["saleWorkspace"]
  }], beforeUnload: [{
    type: HostListener,
    args: ["window:beforeunload", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CounterPage, { className: "CounterPage", filePath: "app/features/counter/counter.page.ts", lineNumber: 37 });
})();
export {
  CounterPage
};
//# sourceMappingURL=chunk-5SCOTTYG.js.map
