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
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
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
  GraphqlService,
  NgForOf,
  NgIf,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
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
} from "./chunk-ZFAUJJU2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/features/users/users.page.ts
function UsersPage_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function UsersPage_button_4_Template_button_click_0_listener() {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.createUser"), " ");
  }
}
function UsersPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function UsersPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success());
  }
}
function UsersPage_tr_36_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function UsersPage_tr_36_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const u_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(u_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "path", 30);
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
function UsersPage_tr_36_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function UsersPage_tr_36_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const u_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDelete(u_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "path", 32);
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
function UsersPage_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 20)(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 22)(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 24)(15, "cis-row-actions")(16, "button", 25);
    \u0275\u0275listener("click", function UsersPage_tr_36_Template_button_click_16_listener() {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPermissions(u_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 26);
    \u0275\u0275element(18, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, UsersPage_tr_36_button_21_Template, 5, 3, "button", 28)(22, UsersPage_tr_36_button_22_Template, 5, 3, "button", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.roles.join(", "));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.branchName || u_r4.branchCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-[#B81104]", !u_r4.active)("dark\\:text-red-400", !u_r4.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r4.active ? \u0275\u0275pipeBind1(12, 12, "common.active") : \u0275\u0275pipeBind1(13, 14, "common.inactive"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "common.permissions"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("USERS_ROLES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("USERS_ROLES"));
  }
}
function UsersPage_div_37_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275property("value", r_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r8);
  }
}
function UsersPage_div_37_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", b_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", b_r9.name, " (", b_r9.code, ")");
  }
}
function UsersPage_div_37_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function UsersPage_div_37_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success());
  }
}
function UsersPage_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275listener("click", function UsersPage_div_37_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 35)(3, "div", 36);
    \u0275\u0275listener("click", function UsersPage_div_37_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 37)(5, "div")(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 39);
    \u0275\u0275listener("click", function UsersPage_div_37_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(14, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "form", 40);
    \u0275\u0275listener("ngSubmit", function UsersPage_div_37_Template_form_ngSubmit_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275elementStart(16, "label", 41);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275element(19, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label", 41);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275element(23, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label", 41);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275element(27, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 41);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "select", 45);
    \u0275\u0275template(32, UsersPage_div_37_option_32_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "label", 41);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementStart(36, "select", 47)(37, "option", 48);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, UsersPage_div_37_option_40_Template, 2, 3, "option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, UsersPage_div_37_div_41_Template, 2, 1, "div", 50)(42, UsersPage_div_37_div_42_Template, 2, 1, "div", 51);
    \u0275\u0275elementStart(43, "div", 52)(44, "button", 53);
    \u0275\u0275listener("click", function UsersPage_div_37_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 54);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 18, "common.createUser"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(11, 20, "common.rolesAvailable"), ": ", ctx_r1.roles().join(", ") || \u0275\u0275pipeBind1(12, 22, "common.loading"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 24, "common.name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 26, "common.email"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 28, "common.password"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 30, "common.role"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.roles());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 32, "common.branch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 34, "common.allBranches"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.branchCtx.options());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.success());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 36, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 38, "common.create"), " ");
  }
}
function UsersPage_div_38_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 20)(1, "td", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 68)(4, "input", 69);
    \u0275\u0275listener("change", function UsersPage_div_38_tr_40_Template_input_change_4_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePermission(p_r12.module, "canView"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 68)(6, "input", 69);
    \u0275\u0275listener("change", function UsersPage_div_38_tr_40_Template_input_change_6_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePermission(p_r12.module, "canCreate"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 68)(8, "input", 69);
    \u0275\u0275listener("change", function UsersPage_div_38_tr_40_Template_input_change_8_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePermission(p_r12.module, "canEdit"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 68)(10, "input", 69);
    \u0275\u0275listener("change", function UsersPage_div_38_tr_40_Template_input_change_10_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePermission(p_r12.module, "canDelete"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.module);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", p_r12.canView);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", p_r12.canCreate);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", p_r12.canEdit);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", p_r12.canDelete);
  }
}
function UsersPage_div_38_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.loadingPermissions"));
  }
}
function UsersPage_div_38_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function UsersPage_div_38_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success());
  }
}
function UsersPage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275listener("click", function UsersPage_div_38_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePermissions());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 35)(3, "div", 58);
    \u0275\u0275listener("click", function UsersPage_div_38_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 59)(5, "div")(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 60)(13, "button", 61);
    \u0275\u0275listener("click", function UsersPage_div_38_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadUserPermissions());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 62);
    \u0275\u0275listener("click", function UsersPage_div_38_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePermissions());
    });
    \u0275\u0275text(17, " S ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 63);
    \u0275\u0275listener("click", function UsersPage_div_38_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePermissions());
    });
    \u0275\u0275text(19, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 64)(21, "table", 11)(22, "thead", 12)(23, "tr")(24, "th", 13);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 65);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 65);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 65);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 65);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "tbody");
    \u0275\u0275template(40, UsersPage_div_38_tr_40_Template, 11, 5, "tr", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, UsersPage_div_38_div_41_Template, 3, 3, "div", 66)(42, UsersPage_div_38_div_42_Template, 2, 1, "div", 4)(43, UsersPage_div_38_div_43_Template, 2, 1, "div", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 14, "common.permissions"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "common.assignPermissions"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.selectedUserId() || ctx_r1.permissionsLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 18, "common.refresh"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedUserId() || ctx_r1.permissionsLoading());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 20, "common.module"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 22, "common.view"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 24, "common.create"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 26, "common.edit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 28, "common.delete"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.permissions());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.permissionsLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.success());
  }
}
function UsersPage_div_39_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    \u0275\u0275property("value", r_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r14);
  }
}
function UsersPage_div_39_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r15 = ctx.$implicit;
    \u0275\u0275property("ngValue", b_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", b_r15.name, " (", b_r15.code, ")");
  }
}
function UsersPage_div_39_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function UsersPage_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275listener("click", function UsersPage_div_39_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 35)(3, "div", 36);
    \u0275\u0275listener("click", function UsersPage_div_39_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 37)(5, "div")(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 39);
    \u0275\u0275listener("click", function UsersPage_div_39_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275text(12, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "form", 40);
    \u0275\u0275listener("ngSubmit", function UsersPage_div_39_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275elementStart(14, "label", 41);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275element(17, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 41);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275element(21, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 41);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275element(25, "input", 71);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 41);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementStart(30, "select", 45);
    \u0275\u0275template(31, UsersPage_div_39_option_31_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "label", 41);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "select", 47)(36, "option", 48);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, UsersPage_div_39_option_39_Template, 2, 3, "option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, UsersPage_div_39_div_40_Template, 2, 1, "div", 50);
    \u0275\u0275elementStart(41, "div", 52)(42, "button", 53);
    \u0275\u0275listener("click", function UsersPage_div_39_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 54);
    \u0275\u0275text(46, " S ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 17, "common.editUser"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.editingUser()) == null ? null : tmp_2_0.email);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 19, "common.name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 21, "common.email"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 23, "common.password"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(26, 25, "common.leaveBlankPassword")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 27, "common.role"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.roles());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 29, "common.branch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 31, "common.allBranches"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.branchCtx.options());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 33, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.editForm.invalid || ctx_r1.loading());
  }
}
function UsersPage_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275listener("click", function UsersPage_div_40_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 35)(3, "div", 36);
    \u0275\u0275listener("click", function UsersPage_div_40_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 72);
    \u0275\u0275text(8, " Are you sure you want to permanently delete ");
    \u0275\u0275elementStart(9, "span", 73);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 74)(13, "button", 75);
    \u0275\u0275listener("click", function UsersPage_div_40_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDelete());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 76);
    \u0275\u0275listener("click", function UsersPage_div_40_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "common.delete"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.pendingDelete()) == null ? null : tmp_2_0.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", (tmp_3_0 = ctx_r1.pendingDelete()) == null ? null : tmp_3_0.email, ")? ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 9, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "common.delete"), " ");
  }
}
var UsersPage = class _UsersPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  success = signal(null, ...ngDevMode ? [{ debugName: "success" }] : []);
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedUsers = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.users().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedUsers" }] : []);
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : []);
  createOpen = signal(false, ...ngDevMode ? [{ debugName: "createOpen" }] : []);
  editOpen = signal(false, ...ngDevMode ? [{ debugName: "editOpen" }] : []);
  editingUser = signal(null, ...ngDevMode ? [{ debugName: "editingUser" }] : []);
  deleteOpen = signal(false, ...ngDevMode ? [{ debugName: "deleteOpen" }] : []);
  pendingDelete = signal(null, ...ngDevMode ? [{ debugName: "pendingDelete" }] : []);
  permissionsOpen = signal(false, ...ngDevMode ? [{ debugName: "permissionsOpen" }] : []);
  selectedUserId = signal("", ...ngDevMode ? [{ debugName: "selectedUserId" }] : []);
  permissionsLoading = signal(false, ...ngDevMode ? [{ debugName: "permissionsLoading" }] : []);
  permissions = signal([], ...ngDevMode ? [{ debugName: "permissions" }] : []);
  modules = [
    { key: "PRODUCTS", label: "Products" },
    { key: "CATEGORIES", label: "Categories" },
    { key: "INVENTORY", label: "Inventory" },
    { key: "STOCK_MOVEMENTS", label: "Stock Movements" },
    { key: "SALES", label: "Sales" },
    { key: "MY_SALES", label: "My Sales" },
    { key: "PURCHASING", label: "Purchasing" },
    { key: "EXPENSES", label: "Expenses" },
    { key: "EXPENSE_CATEGORIES", label: "Expense Categories" },
    { key: "REPORTS", label: "Reports" },
    { key: "PROFIT_MANAGEMENT", label: "Profit Management" },
    { key: "USERS_ROLES", label: "Users & Roles" },
    { key: "BRANCHES", label: "Branches" },
    { key: "TRANSFERS", label: "Transfers" }
  ];
  fb = inject(FormBuilder);
  branchCtx = inject(BranchContext);
  form = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    role: ["STOREKEEPER", [Validators.required]],
    branchId: [null]
  });
  editForm = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: [""],
    role: ["STOREKEEPER", [Validators.required]],
    branchId: [null]
  });
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.load();
  }
  openCreate() {
    this.success.set(null);
    this.error.set(null);
    this.createOpen.set(true);
  }
  closeCreate() {
    this.createOpen.set(false);
    this.form.reset({ name: "", email: "", password: "", role: "STOREKEEPER" });
  }
  openPermissions(userId) {
    this.permissionsOpen.set(true);
    this.onSelectUserForPermissions(userId);
  }
  closePermissions() {
    this.permissionsOpen.set(false);
    this.selectedUserId.set("");
    this.permissions.set([]);
  }
  defaultPermissions() {
    return this.modules.map((m) => ({
      module: m.key,
      canView: false,
      canCreate: false,
      canEdit: false,
      canDelete: false
    }));
  }
  onSelectUserForPermissions(userId) {
    this.selectedUserId.set(String(userId || ""));
    this.permissions.set(this.defaultPermissions());
    if (!this.selectedUserId())
      return;
    this.loadUserPermissions();
  }
  loadUserPermissions() {
    const userId = this.selectedUserId();
    if (!userId)
      return;
    this.permissionsLoading.set(true);
    this.error.set(null);
    this.success.set(null);
    const q = `query UserPermissions($userId: ID!) { userPermissions(userId: $userId) { module canView canCreate canEdit canDelete } }`;
    this.gql.request(q, { userId }).subscribe({
      next: (res) => {
        const incoming = res.userPermissions ?? [];
        const map = new Map(incoming.map((p) => [String(p.module).toUpperCase(), p]));
        this.permissions.set(this.modules.map((m) => {
          const p = map.get(m.key);
          return {
            module: m.key,
            canView: Boolean(p?.canView),
            canCreate: Boolean(p?.canCreate),
            canEdit: Boolean(p?.canEdit),
            canDelete: Boolean(p?.canDelete)
          };
        }));
        this.permissionsLoading.set(false);
      },
      error: (e) => {
        this.permissions.set(this.defaultPermissions());
        this.error.set(e instanceof Error ? e.message : "Failed to load permissions");
        this.permissionsLoading.set(false);
      }
    });
  }
  togglePermission(module, key) {
    const mod = String(module).toUpperCase();
    this.permissions.set(this.permissions().map((p) => {
      if (String(p.module).toUpperCase() !== mod)
        return p;
      return __spreadProps(__spreadValues({}, p), {
        [key]: !p[key]
      });
    }));
  }
  savePermissions() {
    const userId = this.selectedUserId();
    if (!userId)
      return;
    this.permissionsLoading.set(true);
    this.error.set(null);
    this.success.set(null);
    const mutation = `mutation SetUserPermissions($input: SetUserPermissionsInput!) {
      setUserPermissions(input: $input) { module canView canCreate canEdit canDelete }
    }`;
    this.gql.request(mutation, {
      input: {
        userId,
        permissions: this.permissions().map((p) => ({
          module: p.module,
          canView: p.canView,
          canCreate: p.canCreate,
          canEdit: p.canEdit,
          canDelete: p.canDelete
        }))
      }
    }).subscribe({
      next: () => {
        this.success.set("Permissions updated");
        this.permissionsLoading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update permissions");
        this.permissionsLoading.set(false);
      }
    });
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    const qUsers = `query { users { id name email plainPassword active roles branchId branchCode branchName } }`;
    const qRoles = `query { roles }`;
    this.gql.request(qUsers).subscribe({
      next: (res) => {
        this.users.set(res.users);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load users");
        this.loading.set(false);
      }
    });
    this.gql.request(qRoles).subscribe({
      next: (res) => this.roles.set(res.roles.filter((r) => r === "ADMIN" || r === "STOREKEEPER")),
      error: () => {
      }
    });
  }
  create() {
    if (this.form.invalid)
      return;
    this.loading.set(true);
    this.error.set(null);
    const raw = this.form.getRawValue();
    const role = String(raw.role || "").trim();
    const roles = role ? [role] : [];
    const mutation = `mutation CreateUser($input: CreateUserInput!) { createUser(input: $input) { id name email plainPassword active roles branchId branchCode branchName } }`;
    this.gql.request(mutation, {
      input: {
        name: raw.name,
        email: raw.email,
        password: raw.password,
        roles,
        branchId: raw.branchId || null
      }
    }).subscribe({
      next: () => {
        this.closeCreate();
        this.success.set("User created");
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to create user");
        this.loading.set(false);
      }
    });
  }
  openEdit(user) {
    this.editingUser.set(user);
    this.editForm.reset({
      name: user.name,
      email: user.email,
      password: "",
      role: user.roles[0] ?? "STOREKEEPER",
      branchId: user.branchId ?? null
    });
    this.error.set(null);
    this.success.set(null);
    this.editOpen.set(true);
  }
  closeEdit() {
    this.editOpen.set(false);
    this.editingUser.set(null);
  }
  saveEdit() {
    const user = this.editingUser();
    if (!user || this.editForm.invalid)
      return;
    this.loading.set(true);
    this.error.set(null);
    const raw = this.editForm.getRawValue();
    const role = String(raw.role || "").trim();
    const roles = role ? [role] : [];
    const password = (raw.password || "").trim();
    const mutation = `mutation UpdateUser($input: UpdateUserInput!) { updateUser(input: $input) { id name email plainPassword active roles branchId branchCode branchName } }`;
    this.gql.request(mutation, {
      input: {
        userId: user.id,
        name: raw.name,
        email: raw.email,
        password: password || null,
        roles,
        branchId: raw.branchId || null
      }
    }).subscribe({
      next: () => {
        this.closeEdit();
        this.success.set("User updated");
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update user");
        this.loading.set(false);
      }
    });
  }
  openDelete(user) {
    this.pendingDelete.set(user);
    this.deleteOpen.set(true);
  }
  closeDelete() {
    this.deleteOpen.set(false);
    this.pendingDelete.set(null);
  }
  confirmDelete() {
    const user = this.pendingDelete();
    if (!user)
      return;
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation DeleteUser($userId: ID!) { deleteUser(userId: $userId) }`;
    this.gql.request(mutation, { userId: user.id }).subscribe({
      next: () => {
        this.closeDelete();
        this.success.set("User deleted");
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to delete user");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function UsersPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersPage, selectors: [["cis-users-page"]], decls: 41, vars: 32, consts: [[1, "flex", "items-center"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "ml-auto", "flex", "items-center", "gap-2"], ["type", "button", "class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600", 3, "click", 4, "ngIf"], ["class", "mt-2 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["class", "mt-2 text-sm text-pink-500 dark:text-pink-400", 4, "ngIf"], [1, "mt-4"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", 3, "click"], [1, "mt-2", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "mt-2", "text-sm", "text-pink-500", "dark:text-pink-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2"], [1, "text-slate-800", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right"], ["type", "button", 1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"], ["type", "button", "class", "cis-row-action", 3, "click", 4, "ngIf"], ["type", "button", "class", "cis-row-action cis-row-action-danger", 3, "click", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["formControlName", "name", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "email", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "password", "formControlName", "password", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "role", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "branchId", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["class", "text-sm text-pink-500 dark:text-pink-400", 4, "ngIf"], [1, "mt-1", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "disabled"], [3, "value"], [1, "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "text-sm", "text-pink-500", "dark:text-pink-400"], [1, "w-full", "max-w-3xl", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "flex", "flex-col", "gap-1", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "px-3", "py-2", "text-center", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400", 4, "ngIf"], [1, "px-3", "py-2", "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-center"], ["type", "checkbox", 3, "change", "checked"], [1, "mt-3", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], ["type", "text", "formControlName", "password", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "placeholder"], [1, "mt-2", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "mt-5", "flex", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], ["type", "button", 1, "rounded-xl", "bg-[#B81104]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-[#7f0c03]", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"]], template: function UsersPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Users & Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275template(4, UsersPage_button_4_Template, 3, 3, "button", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, UsersPage_div_5_Template, 2, 1, "div", 4)(6, UsersPage_div_6_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(7, "div", 6)(8, "section", 7)(9, "h3", 8);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "cis-pager", 9);
      \u0275\u0275twoWayListener("pageSizeChange", function UsersPage_Template_cis_pager_pageSizeChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function UsersPage_Template_cis_pager_pageIndexChange_12_listener($event) {
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
      \u0275\u0275elementStart(32, "th", 14);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "tbody");
      \u0275\u0275template(36, UsersPage_tr_36_Template, 23, 18, "tr", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(37, UsersPage_div_37_Template, 50, 40, "div", 16)(38, UsersPage_div_38_Template, 44, 30, "div", 16)(39, UsersPage_div_39_Template, 47, 35, "div", 16)(40, UsersPage_div_40_Template, 19, 13, "div", 16);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("USERS_ROLES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 18, "common.list"));
      \u0275\u0275advance(2);
      \u0275\u0275property("total", ctx.users().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "common.name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, "common.email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 24, "common.roles"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 26, "common.branch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 28, "common.status"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 30, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedUsers());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.createOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.permissionsOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RowActionsMenuComponent, PagerComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersPage, [{
    type: Component,
    args: [{ selector: "cis-users-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PagerComponent], template: `<div class="flex items-center">\r
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Users & Roles</h2>\r
  <div class="ml-auto flex items-center gap-2">\r
    <button\r
      *ngIf="perm.canCreate('USERS_ROLES')"\r
      type="button"\r
      class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"\r
      (click)="openCreate()"\r
    >\r
      {{ 'common.createUser' | translate }}\r
    </button>\r
  </div>\r
</div>\r
\r
<div class="mt-2 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
<div class="mt-2 text-sm text-pink-500 dark:text-pink-400" *ngIf="success()">{{ success() }}</div>\r
\r
<div class="mt-4">\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.list' | translate }}</h3>\r
\r
    <cis-pager class="mt-3 block" [total]="users().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />\r
\r
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-slate-50 dark:bg-slate-700">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.name' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.email' | translate }}</th>\r
            <!-- <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600">Password</th> -->\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.roles' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.branch' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.status' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let u of displayedUsers()" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ u.name }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ u.email }}</td>\r
            <!-- <td class="px-3 py-2 text-xs text-slate-500">{{ u.plainPassword || '\u2022\u2022\u2022\u2022\u2022\u2022' }}</td> -->\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ u.roles.join(', ') }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ u.branchName || u.branchCode || '\u2014' }}</td>\r
            <td class="px-3 py-2">\r
              <span class="text-slate-800 dark:text-slate-300" [class.text-[#B81104]]="!u.active" [class.dark\\:text-red-400]="!u.active">{{ u.active ? ('common.active' | translate) : ('common.inactive' | translate) }}</span>\r
            </td>\r
            <td class="px-3 py-2 text-right">\r
              <cis-row-actions>\r
                <button\r
                  type="button"\r
                  class="cis-row-action"\r
                  (click)="openPermissions(u.id)"\r
                >\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>\r
                  {{ 'common.permissions' | translate }}\r
                </button>\r
                <button\r
                  *ngIf="perm.canEdit('USERS_ROLES')"\r
                  type="button"\r
                  class="cis-row-action"\r
                  (click)="openEdit(u)"\r
                >\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>\r
                  {{ 'common.edit' | translate }}\r
                </button>\r
                <button\r
                  *ngIf="perm.canDelete('USERS_ROLES')"\r
                  type="button"\r
                  class="cis-row-action cis-row-action-danger"\r
                  (click)="openDelete(u)"\r
                >\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>\r
                  {{ 'common.delete' | translate }}\r
                </button>\r
              </cis-row-actions>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </section>\r
</div>\r
\r
<div *ngIf="createOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeCreate()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">\r
      <div class="flex items-start justify-between gap-4">\r
        <div>\r
          <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.createUser' | translate }}</div>\r
          <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ 'common.rolesAvailable' | translate }}: {{ roles().join(', ') || ('common.loading' | translate) }}</div>\r
        </div>\r
        <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closeCreate()">\u2715</button>\r
      </div>\r
\r
      <form class="mt-4 grid gap-3" [formGroup]="form" (ngSubmit)="create()">\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.name' | translate }}\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="name" />\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.email' | translate }}\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="email" />\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.password' | translate }}\r
          <input type="password" class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="password" />\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.role' | translate }}\r
          <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="role">\r
            <option *ngFor="let r of roles()" [value]="r">{{ r }}</option>\r
          </select>\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.branch' | translate }}\r
          <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="branchId">\r
            <option [ngValue]="null">{{ 'common.allBranches' | translate }}</option>\r
            <option *ngFor="let b of branchCtx.options()" [ngValue]="b.id">{{ b.name }} ({{ b.code }})</option>\r
          </select>\r
        </label>\r
\r
        <div class="text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
        <div class="text-sm text-pink-500 dark:text-pink-400" *ngIf="success()">{{ success() }}</div>\r
\r
        <div class="mt-1 flex items-center justify-end gap-2">\r
          <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600" (click)="closeCreate()">\r
            {{ 'common.close' | translate }}\r
          </button>\r
          <button\r
            class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
            type="submit"\r
            [disabled]="form.invalid || loading()"\r
          >\r
            {{ 'common.create' | translate }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="permissionsOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closePermissions()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">\r
      <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">\r
        <div>\r
          <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.permissions' | translate }}</div>\r
          <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ 'common.assignPermissions' | translate }}</div>\r
        </div>\r
        <div class="flex items-center gap-2">\r
          <button\r
            type="button"\r
            class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-60"\r
            (click)="loadUserPermissions()"\r
            [disabled]="!selectedUserId() || permissionsLoading()"\r
          >\r
            {{ 'common.refresh' | translate }}\r
          </button>\r
          <button\r
            type="button"\r
            class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
            (click)="savePermissions()"\r
            [disabled]="!selectedUserId() || permissionsLoading()"\r
          >\r
            S\r
          </button>\r
          <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closePermissions()">\u2715</button>\r
        </div>\r
      </div>\r
\r
      <div class="mt-4 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
        <table class="w-full border-collapse text-sm">\r
          <thead class="bg-slate-50 dark:bg-slate-700">\r
            <tr>\r
              <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.module' | translate }}</th>\r
              <th class="px-3 py-2 text-center text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.view' | translate }}</th>\r
              <th class="px-3 py-2 text-center text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.create' | translate }}</th>\r
              <th class="px-3 py-2 text-center text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.edit' | translate }}</th>\r
              <th class="px-3 py-2 text-center text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.delete' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let p of permissions()" class="border-t border-slate-100 dark:border-slate-700">\r
              <td class="px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-300">{{ p.module }}</td>\r
              <td class="px-3 py-2 text-center">\r
                <input type="checkbox" [checked]="p.canView" (change)="togglePermission(p.module, 'canView')" />\r
              </td>\r
              <td class="px-3 py-2 text-center">\r
                <input type="checkbox" [checked]="p.canCreate" (change)="togglePermission(p.module, 'canCreate')" />\r
              </td>\r
              <td class="px-3 py-2 text-center">\r
                <input type="checkbox" [checked]="p.canEdit" (change)="togglePermission(p.module, 'canEdit')" />\r
              </td>\r
              <td class="px-3 py-2 text-center">\r
                <input type="checkbox" [checked]="p.canDelete" (change)="togglePermission(p.module, 'canDelete')" />\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <div *ngIf="permissionsLoading()" class="mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.loadingPermissions' | translate }}</div>\r
      <div class="mt-2 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
      <div class="mt-2 text-sm text-pink-500 dark:text-pink-400" *ngIf="success()">{{ success() }}</div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="editOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeEdit()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">\r
      <div class="flex items-start justify-between gap-4">\r
        <div>\r
          <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.editUser' | translate }}</div>\r
          <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ editingUser()?.email }}</div>\r
        </div>\r
        <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closeEdit()">\u2715</button>\r
      </div>\r
\r
      <form class="mt-4 grid gap-3" [formGroup]="editForm" (ngSubmit)="saveEdit()">\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.name' | translate }}\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="name" />\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.email' | translate }}\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="email" />\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.password' | translate }}\r
          <input type="text" class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="password" placeholder="{{ 'common.leaveBlankPassword' | translate }}" />\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.role' | translate }}\r
          <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="role">\r
            <option *ngFor="let r of roles()" [value]="r">{{ r }}</option>\r
          </select>\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.branch' | translate }}\r
          <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="branchId">\r
            <option [ngValue]="null">{{ 'common.allBranches' | translate }}</option>\r
            <option *ngFor="let b of branchCtx.options()" [ngValue]="b.id">{{ b.name }} ({{ b.code }})</option>\r
          </select>\r
        </label>\r
\r
        <div class="text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
        <div class="mt-1 flex items-center justify-end gap-2">\r
          <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600" (click)="closeEdit()">\r
            {{ 'common.close' | translate }}\r
          </button>\r
          <button\r
            class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
            type="submit"\r
            [disabled]="editForm.invalid || loading()"\r
          >\r
            S\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="deleteOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeDelete()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">\r
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.delete' | translate }}</div>\r
      <div class="mt-2 text-sm text-slate-600 dark:text-slate-400">\r
        Are you sure you want to permanently delete\r
        <span class="font-semibold text-slate-900 dark:text-slate-300">{{ pendingDelete()?.name }}</span>\r
        ({{ pendingDelete()?.email }})?\r
      </div>\r
\r
      <div class="mt-5 flex justify-end gap-2">\r
        <button\r
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"\r
          type="button"\r
          (click)="closeDelete()"\r
          [disabled]="loading()"\r
        >\r
          {{ 'common.close' | translate }}\r
        </button>\r
        <button\r
          class="rounded-xl bg-[#B81104] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7f0c03] disabled:cursor-not-allowed disabled:opacity-70"\r
          type="button"\r
          (click)="confirmDelete()"\r
          [disabled]="loading()"\r
        >\r
          {{ 'common.delete' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersPage, { className: "UsersPage", filePath: "app/features/users/users.page.ts", lineNumber: 66 });
})();
export {
  UsersPage
};
//# sourceMappingURL=chunk-WTJSFZGF.js.map
