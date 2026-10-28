import {
  PermissionMatrixComponent
} from "./chunk-IXBEG42G.js";
import {
  CIS_TABLE_IMPORTS,
  CisCellDirective,
  CisDataTableComponent
} from "./chunk-RMRI7I2C.js";
import {
  PermissionService
} from "./chunk-MUULZ2RC.js";
import {
  CIS_FORM_IMPORTS,
  CisFieldTplDirective,
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
import "./chunk-LNJXT4KE.js";
import "./chunk-WX6AFSP5.js";
import {
  TranslatePipe
} from "./chunk-DPFPPFWE.js";
import {
  BranchContext,
  CommonModule,
  Component,
  GraphqlService,
  NgClass,
  NgForOf,
  NgIf,
  UpperCasePipe,
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
  ɵɵtextInterpolate3
} from "./chunk-F3YP4G7X.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/features/users/users.page.ts
function UsersPage_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
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
    \u0275\u0275elementStart(0, "div", 16);
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
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success());
  }
}
function UsersPage_ng_template_14_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3);
  }
}
function UsersPage_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UsersPage_ng_template_14_span_0_Template, 2, 1, "span", 18);
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    \u0275\u0275property("ngForOf", u_r4.roles);
  }
}
function UsersPage_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    \u0275\u0275classProp("text-[#B81104]", !u_r5.active)("dark\\:text-red-400", !u_r5.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r5.active ? \u0275\u0275pipeBind1(2, 5, "common.active") : \u0275\u0275pipeBind1(3, 7, "common.inactive"));
  }
}
function UsersPage_ng_template_16_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function UsersPage_ng_template_16_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const u_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(u_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 27);
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
function UsersPage_ng_template_16_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function UsersPage_ng_template_16_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const u_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDelete(u_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 29);
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
function UsersPage_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cis-row-actions")(1, "button", 21);
    \u0275\u0275listener("click", function UsersPage_ng_template_16_Template_button_click_1_listener() {
      const u_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openProfile(u_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UsersPage_ng_template_16_button_6_Template, 5, 3, "button", 24)(7, UsersPage_ng_template_16_button_7_Template, 5, 3, "button", 25);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 21);
    \u0275\u0275listener("click", function UsersPage_ng_template_16_Template_button_click_8_listener() {
      const u_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetails(u_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 22);
    \u0275\u0275element(10, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "users.viewProfile"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("USERS_ROLES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("USERS_ROLES"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "users.moreDetails"), " ");
  }
}
function UsersPage_div_17_ng_template_17_label_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 50)(1, "input", 51);
    \u0275\u0275listener("change", function UsersPage_div_17_ng_template_17_label_8_Template_input_change_1_listener() {
      const b_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleViewBranch(b_r12.code));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-pink-50", ctx_r1.viewBranchesSel().has(b_r12.code))("border-pink-300", ctx_r1.viewBranchesSel().has(b_r12.code));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.viewBranchesSel().has(b_r12.code));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r12.code, " ");
  }
}
function UsersPage_div_17_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 47);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 48);
    \u0275\u0275template(8, UsersPage_div_17_ng_template_17_label_8_Template, 3, 6, "label", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "users.viewBranches"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "users.viewBranchesHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.viewBranchOptions(ctx_r1.form.value.branchId));
  }
}
function UsersPage_div_17_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function UsersPage_div_17_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success());
  }
}
function UsersPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275listener("click", function UsersPage_div_17_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 33);
    \u0275\u0275listener("click", function UsersPage_div_17_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 34)(5, "div")(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 35);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 36);
    \u0275\u0275listener("click", function UsersPage_div_17_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(14, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "form", 37);
    \u0275\u0275listener("ngSubmit", function UsersPage_div_17_Template_form_ngSubmit_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275elementStart(16, "cis-form-fields", 38);
    \u0275\u0275template(17, UsersPage_div_17_ng_template_17_Template, 9, 7, "ng-template", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, UsersPage_div_17_div_18_Template, 2, 1, "div", 40)(19, UsersPage_div_17_div_19_Template, 2, 1, "div", 41);
    \u0275\u0275elementStart(20, "div", 42)(21, "button", 43);
    \u0275\u0275listener("click", function UsersPage_div_17_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 44);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "common.createUser"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(11, 13, "common.rolesAvailable"), ": ", ctx_r1.roles().join(", ") || \u0275\u0275pipeBind1(12, 15, "common.loading"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.form)("fields", ctx_r1.createFields);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.success());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 17, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 19, "common.create"), " ");
  }
}
function UsersPage_div_18_div_3_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r15 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "users.viewBranches"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r15.viewBranches.join(", "));
  }
}
function UsersPage_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function UsersPage_div_18_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 55)(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 36);
    \u0275\u0275listener("click", function UsersPage_div_18_div_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeProfile());
    });
    \u0275\u0275text(12, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 58)(14, "div", 59)(15, "span", 60);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 61);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 59)(21, "span", 60);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 61);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, UsersPage_div_18_div_3_div_27_Template, 6, 4, "div", 62);
    \u0275\u0275elementStart(28, "div", 59)(29, "span", 60);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 63);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 64)(37, "button", 65);
    \u0275\u0275listener("click", function UsersPage_div_18_div_3_Template_button_click_37_listener() {
      const u_r15 = \u0275\u0275restoreView(_r14).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.closeProfile();
      return \u0275\u0275resetView(ctx_r1.openDetails(u_r15));
    });
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r15 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, u_r15.name == null ? null : u_r15.name.charAt(0)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r15.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "common.roles"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r15.roles.join(", "));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 16, "common.branch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r15.branchName || u_r15.branchCode || \u0275\u0275pipeBind1(26, 18, "common.allBranches"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r15.viewBranches == null ? null : u_r15.viewBranches.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 20, "common.status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", u_r15.active ? "text-emerald-600 dark:text-emerald-400" : "text-[#B81104] dark:text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r15.active ? \u0275\u0275pipeBind1(34, 22, "common.active") : \u0275\u0275pipeBind1(35, 24, "common.inactive"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 26, "users.moreDetails"), " ");
  }
}
function UsersPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275listener("click", function UsersPage_div_18_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeProfile());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 32);
    \u0275\u0275template(3, UsersPage_div_18_div_3_Template, 40, 28, "div", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.profileUser());
  }
}
function UsersPage_div_19_div_3_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function UsersPage_div_19_div_3_button_19_Template_button_click_0_listener() {
      const t_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.detailsTab.set(t_r19.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.detailsTab() === t_r19.key ? t_r19.key === "danger" ? "bg-red-500 text-white shadow-sm" : "bg-pink-500 text-white shadow-sm" : t_r19.key === "danger" ? "bg-red-50 text-[#B81104] hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, t_r19.label));
  }
}
function UsersPage_div_19_div_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function UsersPage_div_19_div_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.success());
  }
}
function UsersPage_div_19_div_3_div_23_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r20 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "users.viewBranches"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r20.viewBranches.join(", "));
  }
}
function UsersPage_div_19_div_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 83)(8, "div", 84);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 85);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 83)(14, "div", 84);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 85);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 83)(20, "div", 84);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 85);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, UsersPage_div_19_div_3_div_23_div_26_Template, 6, 4, "div", 86);
    \u0275\u0275elementStart(27, "div", 83)(28, "div", 84);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 87);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r20 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "common.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r20.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, "common.email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r20.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 16, "common.roles"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r20.roles.join(", "));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 18, "common.branch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r20.branchName || u_r20.branchCode || \u0275\u0275pipeBind1(25, 20, "common.allBranches"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r20.viewBranches == null ? null : u_r20.viewBranches.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 22, "common.status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", u_r20.active ? "text-emerald-600 dark:text-emerald-400" : "text-[#B81104] dark:text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r20.active ? \u0275\u0275pipeBind1(33, 24, "common.active") : \u0275\u0275pipeBind1(34, 26, "common.inactive"));
  }
}
function UsersPage_div_19_div_3_div_24_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 92)(1, "input", 93);
    \u0275\u0275listener("change", function UsersPage_div_19_div_3_div_24_label_5_Template_input_change_1_listener() {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleRole(r_r23));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.roleSel().has(r_r23) ? "border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-700 dark:bg-violet-900/30 dark:text-violet-300" : "border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.roleSel().has(r_r23));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r23, " ");
  }
}
function UsersPage_div_19_div_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 88);
    \u0275\u0275template(5, UsersPage_div_19_div_3_div_24_label_5_Template, 3, 3, "label", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 90)(7, "button", 91);
    \u0275\u0275listener("click", function UsersPage_div_19_div_3_div_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveRoles());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 47);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "users.details.rolesHint"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.roles());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading() || ctx_r1.roleSel().size === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "common.save"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "users.details.rolesNote"));
  }
}
function UsersPage_div_19_div_3_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "cis-permission-matrix", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r20 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ownerId", u_r20.id);
  }
}
function UsersPage_div_19_div_3_form_26_ng_template_2_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 50)(1, "input", 51);
    \u0275\u0275listener("change", function UsersPage_div_19_div_3_form_26_ng_template_2_label_5_Template_input_change_1_listener() {
      const b_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleViewBranch(b_r26.code));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("bg-pink-50", ctx_r1.viewBranchesSel().has(b_r26.code))("border-pink-300", ctx_r1.viewBranchesSel().has(b_r26.code));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.viewBranchesSel().has(b_r26.code));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r26.code, " ");
  }
}
function UsersPage_div_19_div_3_form_26_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48);
    \u0275\u0275template(5, UsersPage_div_19_div_3_form_26_ng_template_2_label_5_Template, 3, 6, "label", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "users.viewBranches"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.viewBranchOptions(ctx_r1.editForm.value.branchId));
  }
}
function UsersPage_div_19_div_3_form_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 95);
    \u0275\u0275listener("ngSubmit", function UsersPage_div_19_div_3_form_26_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275elementStart(1, "cis-form-fields", 38);
    \u0275\u0275template(2, UsersPage_div_19_div_3_form_26_ng_template_2_Template, 6, 4, "ng-template", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "button", 44);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.editForm)("fields", ctx_r1.editFields);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.editForm.invalid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "common.save"), " ");
  }
}
function UsersPage_div_19_div_3_div_27_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function UsersPage_div_19_div_3_div_27_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const u_r20 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDelete(u_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.delete"));
  }
}
function UsersPage_div_19_div_3_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97)(2, "div", 98);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 99);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 88)(11, "button", 100);
    \u0275\u0275listener("click", function UsersPage_div_19_div_3_div_27_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleActive());
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UsersPage_div_19_div_3_div_27_button_15_Template, 3, 3, "button", 101);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r20 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", u_r20.active ? \u0275\u0275pipeBind1(4, 6, "users.details.disableTitle") : \u0275\u0275pipeBind1(5, 8, "users.details.enableTitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", u_r20.active ? \u0275\u0275pipeBind1(8, 10, "users.details.disableDesc") : \u0275\u0275pipeBind1(9, 12, "users.details.enableDesc"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", u_r20.active ? "bg-red-500 hover:bg-red-600" : "bg-emerald-500 hover:bg-emerald-600")("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r20.active ? \u0275\u0275pipeBind1(13, 14, "users.details.disableBtn") : \u0275\u0275pipeBind1(14, 16, "users.details.enableBtn"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("USERS_ROLES"));
  }
}
function UsersPage_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function UsersPage_div_19_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 55)(2, "div", 56);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 68)(6, "div", 69)(7, "div", 70);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 71);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 72);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 73);
    \u0275\u0275listener("click", function UsersPage_div_19_div_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeDetails());
    });
    \u0275\u0275text(17, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 74);
    \u0275\u0275template(19, UsersPage_div_19_div_3_button_19_Template, 3, 4, "button", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, UsersPage_div_19_div_3_div_20_Template, 2, 1, "div", 4)(21, UsersPage_div_19_div_3_div_21_Template, 2, 1, "div", 5);
    \u0275\u0275elementStart(22, "div", 76);
    \u0275\u0275template(23, UsersPage_div_19_div_3_div_23_Template, 35, 28, "div", 77)(24, UsersPage_div_19_div_3_div_24_Template, 13, 11, "div", 78)(25, UsersPage_div_19_div_3_div_25_Template, 2, 1, "div", 78)(26, UsersPage_div_19_div_3_form_26_Template, 7, 7, "form", 79)(27, UsersPage_div_19_div_3_div_27_Template, 16, 18, "div", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r20 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 15, u_r20.name == null ? null : u_r20.name.charAt(0)));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r20.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", u_r20.active ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" : "bg-red-100 text-[#B81104] dark:bg-red-900/40 dark:text-red-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r20.active ? \u0275\u0275pipeBind1(11, 17, "common.active") : \u0275\u0275pipeBind1(12, 19, "common.inactive"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("", u_r20.email, " \xB7 ", u_r20.roles.join(", "), " \xB7 ", u_r20.branchName || u_r20.branchCode || \u0275\u0275pipeBind1(15, 21, "common.allBranches"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.detailsTabs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.success());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.detailsTab() === "profile");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsTab() === "roles");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsTab() === "permissions");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsTab() === "edit");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsTab() === "danger");
  }
}
function UsersPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275listener("click", function UsersPage_div_19_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetails());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 32);
    \u0275\u0275template(3, UsersPage_div_19_div_3_Template, 28, 23, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.detailsUser());
  }
}
function UsersPage_div_20_ng_template_15_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 50)(1, "input", 51);
    \u0275\u0275listener("change", function UsersPage_div_20_ng_template_15_label_5_Template_input_change_1_listener() {
      const b_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleViewBranch(b_r31.code));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r31 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-pink-50", ctx_r1.viewBranchesSel().has(b_r31.code))("border-pink-300", ctx_r1.viewBranchesSel().has(b_r31.code));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.viewBranchesSel().has(b_r31.code));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r31.code, " ");
  }
}
function UsersPage_div_20_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48);
    \u0275\u0275template(5, UsersPage_div_20_ng_template_15_label_5_Template, 3, 6, "label", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "users.viewBranches"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.viewBranchOptions(ctx_r1.editForm.value.branchId));
  }
}
function UsersPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275listener("click", function UsersPage_div_20_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 33);
    \u0275\u0275listener("click", function UsersPage_div_20_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r29);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 34)(5, "div")(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 36);
    \u0275\u0275listener("click", function UsersPage_div_20_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275text(12, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "form", 37);
    \u0275\u0275listener("ngSubmit", function UsersPage_div_20_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275elementStart(14, "cis-form-fields", 38);
    \u0275\u0275template(15, UsersPage_div_20_ng_template_15_Template, 6, 4, "ng-template", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 42)(17, "button", 43);
    \u0275\u0275listener("click", function UsersPage_div_20_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 44);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "common.editUser"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.editingUser()) == null ? null : tmp_2_0.email);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.editForm)("fields", ctx_r1.editFields);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 10, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.editForm.invalid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 12, "common.save"), " ");
  }
}
function UsersPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275listener("click", function UsersPage_div_21_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 103);
    \u0275\u0275listener("click", function UsersPage_div_21_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r32);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "b");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 104)(14, "button", 43);
    \u0275\u0275listener("click", function UsersPage_div_21_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDelete());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 105);
    \u0275\u0275listener("click", function UsersPage_div_21_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "common.deleteUser"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "common.deleteUserConfirm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.pendingDelete()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 12, "common.delete"), " ");
  }
}
var UsersPage = class _UsersPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  success = signal(null, ...ngDevMode ? [{ debugName: "success" }] : []);
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  userCols = [
    { key: "name", label: "common.name" },
    { key: "email", label: "common.email" },
    { key: "roles", label: "common.roles", type: "template" },
    { key: "branch", label: "common.branch", value: (u) => u.branchName || u.branchCode || "\u2014" },
    { key: "status", label: "common.status", type: "template" },
    { key: "actions", label: "common.actions", align: "right", type: "template" }
  ];
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : []);
  createOpen = signal(false, ...ngDevMode ? [{ debugName: "createOpen" }] : []);
  editOpen = signal(false, ...ngDevMode ? [{ debugName: "editOpen" }] : []);
  editingUser = signal(null, ...ngDevMode ? [{ debugName: "editingUser" }] : []);
  deleteOpen = signal(false, ...ngDevMode ? [{ debugName: "deleteOpen" }] : []);
  pendingDelete = signal(null, ...ngDevMode ? [{ debugName: "pendingDelete" }] : []);
  profileOpen = signal(false, ...ngDevMode ? [{ debugName: "profileOpen" }] : []);
  profileUser = signal(null, ...ngDevMode ? [{ debugName: "profileUser" }] : []);
  detailsOpen = signal(false, ...ngDevMode ? [{ debugName: "detailsOpen" }] : []);
  detailsUser = signal(null, ...ngDevMode ? [{ debugName: "detailsUser" }] : []);
  detailsTab = signal("profile", ...ngDevMode ? [{ debugName: "detailsTab" }] : []);
  detailsTabs = [
    { key: "profile", label: "users.details.tabProfile" },
    { key: "roles", label: "users.details.tabRoles" },
    { key: "permissions", label: "users.details.tabPermissions" },
    { key: "edit", label: "users.details.tabEdit" },
    { key: "danger", label: "users.details.tabDanger" }
  ];
  /** Selected roles inside the Assign Roles tab. */
  roleSel = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "roleSel" }] : []);
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
  /** Extra branches the user may view read-only (excludes their home branch). */
  viewBranchesSel = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "viewBranchesSel" }] : []);
  roleOptions = () => this.roles().map((r) => ({ value: r, label: r }));
  branchOptions = () => [
    { value: null, label: "common.allBranches" },
    ...this.branchCtx.options().map((b) => ({ value: b.id, label: `${b.name} (${b.code})` }))
  ];
  createFields = [
    { key: "name", label: "common.name", required: true },
    { key: "email", label: "common.email", type: "email", required: true },
    { key: "password", label: "common.password", type: "password", required: true },
    { key: "role", label: "common.role", type: "select", options: this.roleOptions },
    { key: "branchId", label: "common.branch", type: "select", options: this.branchOptions },
    { key: "viewBranches", label: "users.viewBranches", type: "template", hide: () => !this.form.value.branchId }
  ];
  editFields = [
    { key: "name", label: "common.name", required: true },
    { key: "email", label: "common.email", type: "email", required: true },
    { key: "password", label: "common.newPassword", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022" },
    { key: "role", label: "common.role", type: "select", options: this.roleOptions },
    { key: "branchId", label: "common.branch", type: "select", options: this.branchOptions },
    { key: "viewBranches", label: "users.viewBranches", type: "template", hide: () => !this.editForm.value.branchId }
  ];
  toggleViewBranch(code) {
    const next = new Set(this.viewBranchesSel());
    if (next.has(code))
      next.delete(code);
    else
      next.add(code);
    this.viewBranchesSel.set(next);
  }
  /** Branch options minus the chosen home branch — home already grants full access. */
  viewBranchOptions(formBranchId) {
    const home = this.branchCtx.options().find((b) => b.id === formBranchId)?.code;
    return this.branchCtx.options().filter((b) => b.code !== home);
  }
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.load();
  }
  openCreate() {
    this.success.set(null);
    this.error.set(null);
    this.viewBranchesSel.set(/* @__PURE__ */ new Set());
    this.createOpen.set(true);
  }
  closeCreate() {
    this.createOpen.set(false);
    this.form.reset({ name: "", email: "", password: "", role: "STOREKEEPER" });
  }
  openProfile(user) {
    this.profileUser.set(user);
    this.profileOpen.set(true);
  }
  closeProfile() {
    this.profileOpen.set(false);
    this.profileUser.set(null);
  }
  openDetails(user) {
    this.detailsUser.set(user);
    this.detailsTab.set("profile");
    this.roleSel.set(new Set(user.roles ?? []));
    this.error.set(null);
    this.success.set(null);
    this.editForm.reset({
      name: user.name,
      email: user.email,
      password: "",
      role: user.roles[0] ?? "STOREKEEPER",
      branchId: user.branchId ?? null
    });
    this.editingUser.set(user);
    this.viewBranchesSel.set(new Set(user.viewBranches ?? []));
    this.detailsOpen.set(true);
  }
  closeDetails() {
    this.detailsOpen.set(false);
    this.detailsUser.set(null);
  }
  toggleRole(name) {
    const next = new Set(this.roleSel());
    if (next.has(name))
      next.delete(name);
    else
      next.add(name);
    this.roleSel.set(next);
  }
  saveRoles() {
    const user = this.detailsUser();
    if (!user)
      return;
    if (this.roleSel().size === 0) {
      this.error.set("Select at least one role");
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    const mutation = `mutation SetUserRoles($input: SetUserRolesInput!) {
      setUserRoles(input: $input) { id name email active roles branchId branchCode branchName viewBranches }
    }`;
    this.gql.request(mutation, {
      input: { userId: user.id, roles: [...this.roleSel()] }
    }).subscribe({
      next: (res) => {
        const updated = res.setUserRoles;
        this.detailsUser.set(__spreadProps(__spreadValues({}, user), { roles: updated.roles }));
        this.users.set(this.users().map((u) => u.id === user.id ? __spreadProps(__spreadValues({}, u), { roles: updated.roles }) : u));
        this.success.set("Roles updated \u2014 the user gets them on next login/refresh");
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update roles");
        this.loading.set(false);
      }
    });
  }
  toggleActive() {
    const user = this.detailsUser();
    if (!user)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    const mutation = `mutation SetUserActive($input: SetUserActiveInput!) {
      setUserActive(input: $input) { id name email active roles branchId branchCode branchName viewBranches }
    }`;
    this.gql.request(mutation, {
      input: { userId: user.id, active: !user.active }
    }).subscribe({
      next: (res) => {
        const updated = res.setUserActive;
        this.detailsUser.set(__spreadProps(__spreadValues({}, user), { active: updated.active }));
        this.users.set(this.users().map((u) => u.id === user.id ? __spreadProps(__spreadValues({}, u), { active: updated.active }) : u));
        this.success.set(updated.active ? "User enabled" : "User disabled");
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update status");
        this.loading.set(false);
      }
    });
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    const qUsers = `query { users { id name email plainPassword active roles branchId branchCode branchName viewBranches } }`;
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
      next: (res) => this.roles.set(res.roles),
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
    const mutation = `mutation CreateUser($input: CreateUserInput!) { createUser(input: $input) { id name email plainPassword active roles branchId branchCode branchName viewBranches } }`;
    this.gql.request(mutation, {
      input: {
        name: raw.name,
        email: raw.email,
        password: raw.password,
        roles,
        branchId: raw.branchId || null,
        viewBranches: [...this.viewBranchesSel()]
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
    this.viewBranchesSel.set(new Set(user.viewBranches ?? []));
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
    const mutation = `mutation UpdateUser($input: UpdateUserInput!) { updateUser(input: $input) { id name email plainPassword active roles branchId branchCode branchName viewBranches } }`;
    this.gql.request(mutation, {
      input: {
        userId: user.id,
        name: raw.name,
        email: raw.email,
        password: password || null,
        roles,
        branchId: raw.branchId || null,
        viewBranches: [...this.viewBranchesSel()]
      }
    }).subscribe({
      next: (res) => {
        const updated = res.updateUser;
        if (this.detailsOpen() && this.detailsUser()?.id === user.id) {
          this.detailsUser.set(__spreadValues(__spreadValues({}, user), updated));
          this.success.set("User updated");
        } else {
          this.closeEdit();
          this.success.set("User updated");
        }
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
        this.closeDetails();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersPage, selectors: [["cis-users-page"]], decls: 22, vars: 13, consts: [[1, "flex", "items-center"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "ml-auto", "flex", "items-center", "gap-2"], ["type", "button", "class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600", 3, "click", 4, "ngIf"], ["class", "mt-2 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["class", "mt-2 text-sm text-pink-500 dark:text-pink-400", 4, "ngIf"], [1, "mt-4"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3"], [3, "columns", "rows"], ["cisCell", "roles"], ["cisCell", "status"], ["cisCell", "actions"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", 3, "click"], [1, "mt-2", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "mt-2", "text-sm", "text-pink-500", "dark:text-pink-400"], ["class", "mr-1 inline-block rounded-full bg-violet-50 px-2 py-0.5 text-[11px] font-bold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300", 4, "ngFor", "ngForOf"], [1, "mr-1", "inline-block", "rounded-full", "bg-violet-50", "px-2", "py-0.5", "text-[11px]", "font-bold", "text-violet-700", "dark:bg-violet-900/30", "dark:text-violet-300"], [1, "text-slate-800", "dark:text-slate-300"], ["type", "button", 1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"], ["type", "button", "class", "cis-row-action", 3, "click", 4, "ngIf"], ["type", "button", "class", "cis-row-action cis-row-action-danger", 3, "click", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8.25 4.5l7.5 7.5-7.5 7.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [3, "form", "fields"], ["cisField", "viewBranches"], ["class", "text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["class", "text-sm text-pink-500 dark:text-pink-400", 4, "ngIf"], [1, "mt-1", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "disabled"], [1, "grid", "gap-1.5"], [1, "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "text-[11px]", "text-slate-500", "dark:text-slate-400"], [1, "flex", "flex-wrap", "gap-2"], ["class", "flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700", 3, "bg-pink-50", "border-pink-300", 4, "ngFor", "ngForOf"], [1, "flex", "cursor-pointer", "items-center", "gap-1.5", "rounded-lg", "border", "border-slate-200", "px-2.5", "py-1.5", "text-xs", "font-semibold", "text-slate-700", "hover:bg-slate-50", "dark:border-slate-600", "dark:text-slate-300", "dark:hover:bg-slate-700"], ["type", "checkbox", 1, "h-3.5", "w-3.5", "accent-pink-500", 3, "change", "checked"], [1, "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "text-sm", "text-pink-500", "dark:text-pink-400"], ["class", "w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "gap-3"], [1, "grid", "h-12", "w-12", "place-items-center", "rounded-2xl", "bg-pink-500", "text-lg", "font-bold", "text-white"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "mt-4", "grid", "gap-2", "text-sm"], [1, "flex", "justify-between", "rounded-xl", "bg-slate-50", "px-3", "py-2", "dark:bg-slate-700/40"], [1, "text-slate-500", "dark:text-slate-400"], [1, "font-semibold", "text-slate-900", "dark:text-slate-100"], ["class", "flex justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40", 4, "ngIf"], [1, "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", 3, "click"], ["class", "flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700", 3, "click", 4, "ngIf"], [1, "flex", "max-h-[92vh]", "w-full", "max-w-4xl", "flex-col", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "min-w-0"], [1, "flex", "items-center", "gap-2"], [1, "truncate", "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "rounded-full", "px-2", "py-0.5", "text-[10px]", "font-bold", 3, "ngClass"], [1, "truncate", "text-xs", "text-slate-500", "dark:text-slate-400"], ["type", "button", 1, "ml-auto", "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "flex", "flex-wrap", "gap-2"], ["type", "button", "class", "rounded-xl px-3 py-2 text-xs font-semibold transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mt-3", "min-h-0", "flex-1", "overflow-y-auto"], ["class", "grid gap-2 text-sm sm:grid-cols-2", 4, "ngIf"], [4, "ngIf"], ["class", "grid max-w-lg gap-3", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "max-w-lg", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "px-3", "py-2", "text-xs", "font-semibold", "transition", 3, "click", "ngClass"], [1, "grid", "gap-2", "text-sm", "sm:grid-cols-2"], [1, "rounded-xl", "bg-slate-50", "px-3", "py-2", "dark:bg-slate-700/40"], [1, "text-[11px]", "uppercase", "tracking-wide", "text-slate-500", "dark:text-slate-400"], [1, "mt-0.5", "font-semibold", "text-slate-900", "dark:text-slate-100"], ["class", "rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40", 4, "ngIf"], [1, "mt-0.5", "font-semibold", 3, "ngClass"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], ["class", "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mt-4", "flex", "items-center", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "flex", "cursor-pointer", "items-center", "gap-2", "rounded-xl", "border", "px-3", "py-2", "text-sm", "font-semibold", "transition", 3, "ngClass"], ["type", "checkbox", 1, "h-4", "w-4", "accent-violet-500", 3, "change", "checked"], ["ownerKind", "user", 3, "ownerId"], [1, "grid", "max-w-lg", "gap-3", 3, "ngSubmit", "formGroup"], [1, "max-w-lg"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4", "dark:border-red-800", "dark:bg-red-900/20"], [1, "text-sm", "font-bold", "text-[#B81104]", "dark:text-red-300"], [1, "mt-1", "text-xs", "text-red-700", "dark:text-red-300"], ["type", "button", 1, "rounded-xl", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "ngClass", "disabled"], ["type", "button", "class", "rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#B81104] ring-1 ring-red-200 hover:bg-red-50 dark:bg-slate-800 dark:text-red-300 dark:ring-red-800", 3, "click", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "bg-white", "px-4", "py-2", "text-sm", "font-semibold", "text-[#B81104]", "ring-1", "ring-red-200", "hover:bg-red-50", "dark:bg-slate-800", "dark:text-red-300", "dark:ring-red-800", 3, "click"], [1, "w-full", "max-w-sm", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "mt-4", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-[#B81104]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"]], template: function UsersPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275template(4, UsersPage_button_4_Template, 3, 3, "button", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, UsersPage_div_5_Template, 2, 1, "div", 4)(6, UsersPage_div_6_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(7, "div", 6)(8, "section", 7)(9, "h3", 8);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "cis-data-table", 10);
      \u0275\u0275template(14, UsersPage_ng_template_14_Template, 1, 1, "ng-template", 11)(15, UsersPage_ng_template_15_Template, 4, 9, "ng-template", 12)(16, UsersPage_ng_template_16_Template, 13, 8, "ng-template", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(17, UsersPage_div_17_Template, 27, 21, "div", 14)(18, UsersPage_div_18_Template, 4, 1, "div", 14)(19, UsersPage_div_19_Template, 4, 1, "div", 14)(20, UsersPage_div_20_Template, 23, 14, "div", 14)(21, UsersPage_div_21_Template, 20, 14, "div", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("USERS_ROLES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error() && !ctx.detailsOpen() && !ctx.createOpen() && !ctx.editOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success() && !ctx.detailsOpen());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "common.list"));
      \u0275\u0275advance(3);
      \u0275\u0275property("columns", ctx.userCols)("rows", ctx.users());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.createOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.profileOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.detailsOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, RowActionsMenuComponent, PermissionMatrixComponent, CisDataTableComponent, CisCellDirective, CisFormFieldsComponent, CisFieldTplDirective, UpperCasePipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersPage, [{
    type: Component,
    args: [{ selector: "cis-users-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PermissionMatrixComponent, CIS_TABLE_IMPORTS, CIS_FORM_IMPORTS], template: `<div class="flex items-center">\r
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Users</h2>\r
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
<div class="mt-2 text-sm text-[#B81104] dark:text-red-400" *ngIf="error() && !detailsOpen() && !createOpen() && !editOpen()">{{ error() }}</div>\r
<div class="mt-2 text-sm text-pink-500 dark:text-pink-400" *ngIf="success() && !detailsOpen()">{{ success() }}</div>\r
\r
<div class="mt-4">\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.list' | translate }}</h3>\r
\r
    <div class="mt-3">\r
      <cis-data-table [columns]="userCols" [rows]="users()">\r
        <ng-template cisCell="roles" let-u>\r
          <span\r
            *ngFor="let r of u.roles"\r
            class="mr-1 inline-block rounded-full bg-violet-50 px-2 py-0.5 text-[11px] font-bold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"\r
          >{{ r }}</span>\r
        </ng-template>\r
        <ng-template cisCell="status" let-u>\r
          <span class="text-slate-800 dark:text-slate-300" [class.text-[#B81104]]="!u.active" [class.dark\\:text-red-400]="!u.active">{{ u.active ? ('common.active' | translate) : ('common.inactive' | translate) }}</span>\r
        </ng-template>\r
        <ng-template cisCell="actions" let-u>\r
          <cis-row-actions>\r
            <button\r
              type="button"\r
              class="cis-row-action"\r
              (click)="openProfile(u)"\r
            >\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>\r
              {{ 'users.viewProfile' | translate }}\r
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
            <button\r
              type="button"\r
              class="cis-row-action"\r
              (click)="openDetails(u)"\r
            >\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>\r
              {{ 'users.moreDetails' | translate }}\r
            </button>\r
          </cis-row-actions>\r
        </ng-template>\r
      </cis-data-table>\r
    </div>\r
  </section>\r
</div>\r
\r
<!-- Create user -->\r
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
        <cis-form-fields [form]="form" [fields]="createFields">\r
          <ng-template cisField="viewBranches">\r
            <div class="grid gap-1.5">\r
              <div class="text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'users.viewBranches' | translate }}</div>\r
              <div class="text-[11px] text-slate-500 dark:text-slate-400">{{ 'users.viewBranchesHelp' | translate }}</div>\r
              <div class="flex flex-wrap gap-2">\r
                <label *ngFor="let b of viewBranchOptions(form.value.branchId)" class="flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" [class.bg-pink-50]="viewBranchesSel().has(b.code)" [class.border-pink-300]="viewBranchesSel().has(b.code)">\r
                  <input type="checkbox" class="h-3.5 w-3.5 accent-pink-500" [checked]="viewBranchesSel().has(b.code)" (change)="toggleViewBranch(b.code)" />\r
                  {{ b.code }}\r
                </label>\r
              </div>\r
            </div>\r
          </ng-template>\r
        </cis-form-fields>\r
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
<!-- View profile -->\r
<div *ngIf="profileOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeProfile()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()" *ngIf="profileUser() as u">\r
      <div class="flex items-start justify-between gap-4">\r
        <div class="flex items-center gap-3">\r
          <div class="grid h-12 w-12 place-items-center rounded-2xl bg-pink-500 text-lg font-bold text-white">{{ u.name?.charAt(0) | uppercase }}</div>\r
          <div>\r
            <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ u.name }}</div>\r
            <div class="text-xs text-slate-500 dark:text-slate-400">{{ u.email }}</div>\r
          </div>\r
        </div>\r
        <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closeProfile()">\u2715</button>\r
      </div>\r
\r
      <div class="mt-4 grid gap-2 text-sm">\r
        <div class="flex justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40">\r
          <span class="text-slate-500 dark:text-slate-400">{{ 'common.roles' | translate }}</span>\r
          <span class="font-semibold text-slate-900 dark:text-slate-100">{{ u.roles.join(', ') }}</span>\r
        </div>\r
        <div class="flex justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40">\r
          <span class="text-slate-500 dark:text-slate-400">{{ 'common.branch' | translate }}</span>\r
          <span class="font-semibold text-slate-900 dark:text-slate-100">{{ u.branchName || u.branchCode || ('common.allBranches' | translate) }}</span>\r
        </div>\r
        <div class="flex justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40" *ngIf="u.viewBranches?.length">\r
          <span class="text-slate-500 dark:text-slate-400">{{ 'users.viewBranches' | translate }}</span>\r
          <span class="font-semibold text-slate-900 dark:text-slate-100">{{ u.viewBranches!.join(', ') }}</span>\r
        </div>\r
        <div class="flex justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40">\r
          <span class="text-slate-500 dark:text-slate-400">{{ 'common.status' | translate }}</span>\r
          <span class="font-semibold" [ngClass]="u.active ? 'text-emerald-600 dark:text-emerald-400' : 'text-[#B81104] dark:text-red-400'">{{ u.active ? ('common.active' | translate) : ('common.inactive' | translate) }}</span>\r
        </div>\r
      </div>\r
\r
      <div class="mt-4 flex justify-end">\r
        <button type="button" class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" (click)="closeProfile(); openDetails(u)">\r
          {{ 'users.moreDetails' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- More Details (tabs) -->\r
<div *ngIf="detailsOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeDetails()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()" *ngIf="detailsUser() as u">\r
\r
      <!-- Header -->\r
      <div class="flex items-center gap-3">\r
        <div class="grid h-12 w-12 place-items-center rounded-2xl bg-pink-500 text-lg font-bold text-white">{{ u.name?.charAt(0) | uppercase }}</div>\r
        <div class="min-w-0">\r
          <div class="flex items-center gap-2">\r
            <div class="truncate text-base font-semibold text-slate-900 dark:text-slate-100">{{ u.name }}</div>\r
            <span class="rounded-full px-2 py-0.5 text-[10px] font-bold" [ngClass]="u.active ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-red-100 text-[#B81104] dark:bg-red-900/40 dark:text-red-300'">{{ u.active ? ('common.active' | translate) : ('common.inactive' | translate) }}</span>\r
          </div>\r
          <div class="truncate text-xs text-slate-500 dark:text-slate-400">{{ u.email }} \xB7 {{ u.roles.join(', ') }} \xB7 {{ u.branchName || u.branchCode || ('common.allBranches' | translate) }}</div>\r
        </div>\r
        <button type="button" class="ml-auto rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closeDetails()">\u2715</button>\r
      </div>\r
\r
      <!-- Tabs -->\r
      <div class="mt-4 flex flex-wrap gap-2">\r
        <button\r
          *ngFor="let t of detailsTabs"\r
          type="button"\r
          class="rounded-xl px-3 py-2 text-xs font-semibold transition"\r
          [ngClass]="detailsTab() === t.key\r
            ? (t.key === 'danger' ? 'bg-red-500 text-white shadow-sm' : 'bg-pink-500 text-white shadow-sm')\r
            : (t.key === 'danger' ? 'bg-red-50 text-[#B81104] hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600')"\r
          (click)="detailsTab.set(t.key)"\r
        >{{ t.label | translate }}</button>\r
      </div>\r
\r
      <div class="mt-2 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
      <div class="mt-2 text-sm text-pink-500 dark:text-pink-400" *ngIf="success()">{{ success() }}</div>\r
\r
      <!-- Tab content -->\r
      <div class="mt-3 min-h-0 flex-1 overflow-y-auto">\r
\r
        <!-- Profile -->\r
        <div *ngIf="detailsTab() === 'profile'" class="grid gap-2 text-sm sm:grid-cols-2">\r
          <div class="rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40">\r
            <div class="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'common.name' | translate }}</div>\r
            <div class="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">{{ u.name }}</div>\r
          </div>\r
          <div class="rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40">\r
            <div class="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'common.email' | translate }}</div>\r
            <div class="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">{{ u.email }}</div>\r
          </div>\r
          <div class="rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40">\r
            <div class="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'common.roles' | translate }}</div>\r
            <div class="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">{{ u.roles.join(', ') }}</div>\r
          </div>\r
          <div class="rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40">\r
            <div class="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'common.branch' | translate }}</div>\r
            <div class="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">{{ u.branchName || u.branchCode || ('common.allBranches' | translate) }}</div>\r
          </div>\r
          <div class="rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40" *ngIf="u.viewBranches?.length">\r
            <div class="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'users.viewBranches' | translate }}</div>\r
            <div class="mt-0.5 font-semibold text-slate-900 dark:text-slate-100">{{ u.viewBranches!.join(', ') }}</div>\r
          </div>\r
          <div class="rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-700/40">\r
            <div class="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'common.status' | translate }}</div>\r
            <div class="mt-0.5 font-semibold" [ngClass]="u.active ? 'text-emerald-600 dark:text-emerald-400' : 'text-[#B81104] dark:text-red-400'">{{ u.active ? ('common.active' | translate) : ('common.inactive' | translate) }}</div>\r
          </div>\r
        </div>\r
\r
        <!-- Assign roles -->\r
        <div *ngIf="detailsTab() === 'roles'">\r
          <div class="text-xs text-slate-500 dark:text-slate-400">{{ 'users.details.rolesHint' | translate }}</div>\r
          <div class="mt-3 flex flex-wrap gap-2">\r
            <label\r
              *ngFor="let r of roles()"\r
              class="flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition"\r
              [ngClass]="roleSel().has(r)\r
                ? 'border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-700 dark:bg-violet-900/30 dark:text-violet-300'\r
                : 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700'"\r
            >\r
              <input type="checkbox" class="h-4 w-4 accent-violet-500" [checked]="roleSel().has(r)" (change)="toggleRole(r)" />\r
              {{ r }}\r
            </label>\r
          </div>\r
          <div class="mt-4 flex items-center gap-2">\r
            <button\r
              type="button"\r
              class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
              [disabled]="loading() || roleSel().size === 0"\r
              (click)="saveRoles()"\r
            >{{ 'common.save' | translate }}</button>\r
            <span class="text-[11px] text-slate-500 dark:text-slate-400">{{ 'users.details.rolesNote' | translate }}</span>\r
          </div>\r
        </div>\r
\r
        <!-- Permissions -->\r
        <div *ngIf="detailsTab() === 'permissions'">\r
          <cis-permission-matrix ownerKind="user" [ownerId]="u.id" />\r
        </div>\r
\r
        <!-- Edit user -->\r
        <form *ngIf="detailsTab() === 'edit'" class="grid max-w-lg gap-3" [formGroup]="editForm" (ngSubmit)="saveEdit()">\r
          <cis-form-fields [form]="editForm" [fields]="editFields">\r
            <ng-template cisField="viewBranches">\r
              <div class="grid gap-1.5">\r
                <div class="text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'users.viewBranches' | translate }}</div>\r
                <div class="flex flex-wrap gap-2">\r
                  <label *ngFor="let b of viewBranchOptions(editForm.value.branchId)" class="flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" [class.bg-pink-50]="viewBranchesSel().has(b.code)" [class.border-pink-300]="viewBranchesSel().has(b.code)">\r
                    <input type="checkbox" class="h-3.5 w-3.5 accent-pink-500" [checked]="viewBranchesSel().has(b.code)" (change)="toggleViewBranch(b.code)" />\r
                    {{ b.code }}\r
                  </label>\r
                </div>\r
              </div>\r
            </ng-template>\r
          </cis-form-fields>\r
          <div class="mt-1 flex items-center justify-end gap-2">\r
            <button\r
              class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
              type="submit"\r
              [disabled]="editForm.invalid || loading()"\r
            >\r
              {{ 'common.save' | translate }}\r
            </button>\r
          </div>\r
        </form>\r
\r
        <!-- Disable / danger -->\r
        <div *ngIf="detailsTab() === 'danger'" class="max-w-lg">\r
          <div class="rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">\r
            <div class="text-sm font-bold text-[#B81104] dark:text-red-300">\r
              {{ u.active ? ('users.details.disableTitle' | translate) : ('users.details.enableTitle' | translate) }}\r
            </div>\r
            <div class="mt-1 text-xs text-red-700 dark:text-red-300">\r
              {{ u.active ? ('users.details.disableDesc' | translate) : ('users.details.enableDesc' | translate) }}\r
            </div>\r
            <div class="mt-3 flex flex-wrap gap-2">\r
              <button\r
                type="button"\r
                class="rounded-xl px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
                [ngClass]="u.active ? 'bg-red-500 hover:bg-red-600' : 'bg-emerald-500 hover:bg-emerald-600'"\r
                [disabled]="loading()"\r
                (click)="toggleActive()"\r
              >\r
                {{ u.active ? ('users.details.disableBtn' | translate) : ('users.details.enableBtn' | translate) }}\r
              </button>\r
              <button\r
                *ngIf="perm.canDelete('USERS_ROLES')"\r
                type="button"\r
                class="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#B81104] ring-1 ring-red-200 hover:bg-red-50 dark:bg-slate-800 dark:text-red-300 dark:ring-red-800"\r
                (click)="openDelete(u)"\r
              >{{ 'common.delete' | translate }}</button>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Edit user (standalone) -->\r
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
        <cis-form-fields [form]="editForm" [fields]="editFields">\r
          <ng-template cisField="viewBranches">\r
            <div class="grid gap-1.5">\r
              <div class="text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'users.viewBranches' | translate }}</div>\r
              <div class="flex flex-wrap gap-2">\r
                <label *ngFor="let b of viewBranchOptions(editForm.value.branchId)" class="flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" [class.bg-pink-50]="viewBranchesSel().has(b.code)" [class.border-pink-300]="viewBranchesSel().has(b.code)">\r
                  <input type="checkbox" class="h-3.5 w-3.5 accent-pink-500" [checked]="viewBranchesSel().has(b.code)" (change)="toggleViewBranch(b.code)" />\r
                  {{ b.code }}\r
                </label>\r
              </div>\r
            </div>\r
          </ng-template>\r
        </cis-form-fields>\r
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
            {{ 'common.save' | translate }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete user -->\r
<div *ngIf="deleteOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeDelete()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">\r
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.deleteUser' | translate }}</div>\r
      <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">\r
        {{ 'common.deleteUserConfirm' | translate }} <b>{{ pendingDelete()?.name }}</b>?\r
      </div>\r
      <div class="mt-4 flex items-center justify-end gap-2">\r
        <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600" (click)="closeDelete()">\r
          {{ 'common.cancel' | translate }}\r
        </button>\r
        <button type="button" class="rounded-xl bg-[#B81104] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70" [disabled]="loading()" (click)="confirmDelete()">\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersPage, { className: "UsersPage", filePath: "app/features/users/users.page.ts", lineNumber: 63 });
})();
export {
  UsersPage
};
//# sourceMappingURL=chunk-RA5POLZL.js.map
