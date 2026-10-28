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
  CommonModule,
  Component,
  GraphqlService,
  NgIf,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵtextInterpolate2
} from "./chunk-F3YP4G7X.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/roles/roles.page.ts
function RolesPage_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function RolesPage_button_9_Template_button_click_0_listener() {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "roles.add"), " ");
  }
}
function RolesPage_div_10_Template(rf, ctx) {
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
function RolesPage_div_11_Template(rf, ctx) {
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
function RolesPage_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.name);
  }
}
function RolesPage_ng_template_20_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function RolesPage_ng_template_20_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const r_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPerms(r_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "roles.permsBtn"), " ");
  }
}
function RolesPage_ng_template_20_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function RolesPage_ng_template_20_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const r_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(r_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 24);
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
function RolesPage_ng_template_20_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function RolesPage_ng_template_20_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const r_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDelete(r_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 26);
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
function RolesPage_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cis-row-actions");
    \u0275\u0275template(1, RolesPage_ng_template_20_button_1_Template, 5, 3, "button", 19)(2, RolesPage_ng_template_20_button_2_Template, 5, 3, "button", 19)(3, RolesPage_ng_template_20_button_3_Template, 5, 3, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("USERS_ROLES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("USERS_ROLES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("USERS_ROLES") && r_r5.name !== "ADMIN");
  }
}
function RolesPage_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function RolesPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("click", function RolesPage_div_21_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 30);
    \u0275\u0275listener("click", function RolesPage_div_21_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 31)(5, "div")(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 33);
    \u0275\u0275listener("click", function RolesPage_div_21_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(13, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "form", 34);
    \u0275\u0275listener("ngSubmit", function RolesPage_div_21_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275element(15, "cis-form-fields", 35);
    \u0275\u0275template(16, RolesPage_div_21_div_16_Template, 2, 1, "div", 36);
    \u0275\u0275elementStart(17, "div", 37)(18, "button", 38);
    \u0275\u0275listener("click", function RolesPage_div_21_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 39);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "roles.add"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "roles.nameHelp"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.form)("fields", ctx_r1.roleFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 13, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 15, "common.create"), " ");
  }
}
function RolesPage_div_22_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function RolesPage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("click", function RolesPage_div_22_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 30);
    \u0275\u0275listener("click", function RolesPage_div_22_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 31)(5, "div")(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 33);
    \u0275\u0275listener("click", function RolesPage_div_22_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275text(12, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "form", 34);
    \u0275\u0275listener("ngSubmit", function RolesPage_div_22_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275element(14, "cis-form-fields", 35);
    \u0275\u0275template(15, RolesPage_div_22_div_15_Template, 2, 1, "div", 36);
    \u0275\u0275elementStart(16, "div", 37)(17, "button", 38);
    \u0275\u0275listener("click", function RolesPage_div_22_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 39);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "roles.editRole"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.editingRole()) == null ? null : tmp_2_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.editForm)("fields", ctx_r1.roleFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 11, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.editForm.invalid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 13, "common.save"), " ");
  }
}
function RolesPage_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function RolesPage_div_23_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 43)(2, "div", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 2);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 45);
    \u0275\u0275listener("click", function RolesPage_div_23_div_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closePerms());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 46);
    \u0275\u0275element(13, "cis-permission-matrix", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r12 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r12.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r12.description || \u0275\u0275pipeBind1(9, 4, "users.perm.roleHint"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ownerId", r_r12.id);
  }
}
function RolesPage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("click", function RolesPage_div_23_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePerms());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275template(3, RolesPage_div_23_div_3_Template, 14, 6, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.permsRole());
  }
}
function RolesPage_div_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function RolesPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("click", function RolesPage_div_24_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 48);
    \u0275\u0275listener("click", function RolesPage_div_24_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, RolesPage_div_24_div_10_Template, 2, 1, "div", 5);
    \u0275\u0275elementStart(11, "div", 49)(12, "button", 38);
    \u0275\u0275listener("click", function RolesPage_div_24_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDelete());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 50);
    \u0275\u0275listener("click", function RolesPage_div_24_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 7, "common.delete"), " \u2014 ", (tmp_1_0 = ctx_r1.pendingDelete()) == null ? null : tmp_1_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "roles.deleteConfirm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, "common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "common.delete"), " ");
  }
}
var RolesPage = class _RolesPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  success = signal(null, ...ngDevMode ? [{ debugName: "success" }] : []);
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : []);
  roleCols = [
    { key: "name", label: "common.role", type: "template" },
    { key: "description", label: "roles.description", value: (r) => r.description || "\u2014" },
    { key: "userCount", label: "roles.users" },
    { key: "moduleCount", label: "roles.modules" },
    { key: "actions", label: "common.actions", align: "right", type: "template" }
  ];
  createOpen = signal(false, ...ngDevMode ? [{ debugName: "createOpen" }] : []);
  editOpen = signal(false, ...ngDevMode ? [{ debugName: "editOpen" }] : []);
  editingRole = signal(null, ...ngDevMode ? [{ debugName: "editingRole" }] : []);
  deleteOpen = signal(false, ...ngDevMode ? [{ debugName: "deleteOpen" }] : []);
  pendingDelete = signal(null, ...ngDevMode ? [{ debugName: "pendingDelete" }] : []);
  permsOpen = signal(false, ...ngDevMode ? [{ debugName: "permsOpen" }] : []);
  permsRole = signal(null, ...ngDevMode ? [{ debugName: "permsRole" }] : []);
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: ["", [Validators.required]],
    description: [""]
  });
  editForm = this.fb.group({
    name: ["", [Validators.required]],
    description: [""]
  });
  roleFields = [
    { key: "name", label: "roles.name", required: true, placeholder: "SUPERVISOR", inputClass: "uppercase" },
    { key: "description", label: "roles.description", placeholder: "roles.descriptionHelp" }
  ];
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.gql.request(`query { roleList { id name description userCount moduleCount } }`).subscribe({
      next: (res) => {
        this.roles.set(res.roleList ?? []);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load roles");
        this.loading.set(false);
      }
    });
  }
  openCreate() {
    this.error.set(null);
    this.success.set(null);
    this.createOpen.set(true);
  }
  closeCreate() {
    this.createOpen.set(false);
    this.form.reset({ name: "", description: "" });
  }
  create() {
    if (this.form.invalid)
      return;
    this.loading.set(true);
    this.error.set(null);
    const raw = this.form.getRawValue();
    const mutation = `mutation CreateRole($input: CreateRoleInput!) {
      createRole(input: $input) { id name description userCount moduleCount }
    }`;
    this.gql.request(mutation, {
      input: { name: raw.name, description: raw.description || null }
    }).subscribe({
      next: () => {
        this.closeCreate();
        this.success.set("Role created \u2014 open Permissions to configure what it can do");
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to create role");
        this.loading.set(false);
      }
    });
  }
  openEdit(role) {
    this.editingRole.set(role);
    this.editForm.reset({ name: role.name, description: role.description ?? "" });
    if (role.name === "ADMIN")
      this.editForm.controls.name.disable();
    else
      this.editForm.controls.name.enable();
    this.error.set(null);
    this.success.set(null);
    this.editOpen.set(true);
  }
  closeEdit() {
    this.editOpen.set(false);
    this.editingRole.set(null);
  }
  saveEdit() {
    const role = this.editingRole();
    if (!role || this.editForm.invalid)
      return;
    this.loading.set(true);
    this.error.set(null);
    const raw = this.editForm.getRawValue();
    const mutation = `mutation UpdateRole($input: UpdateRoleInput!) {
      updateRole(input: $input) { id name description userCount moduleCount }
    }`;
    this.gql.request(mutation, {
      input: { roleId: role.id, name: raw.name, description: raw.description ?? "" }
    }).subscribe({
      next: () => {
        this.closeEdit();
        this.success.set("Role updated");
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update role");
        this.loading.set(false);
      }
    });
  }
  openDelete(role) {
    this.pendingDelete.set(role);
    this.deleteOpen.set(true);
  }
  closeDelete() {
    this.deleteOpen.set(false);
    this.pendingDelete.set(null);
  }
  confirmDelete() {
    const role = this.pendingDelete();
    if (!role)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.gql.request(`mutation DeleteRole($roleId: ID!) { deleteRole(roleId: $roleId) }`, { roleId: role.id }).subscribe({
      next: () => {
        this.closeDelete();
        this.success.set("Role deleted");
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to delete role");
        this.loading.set(false);
      }
    });
  }
  openPerms(role) {
    this.permsRole.set(role);
    this.permsOpen.set(true);
  }
  closePerms() {
    this.permsOpen.set(false);
    this.permsRole.set(null);
    this.load();
  }
  static \u0275fac = function RolesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesPage, selectors: [["cis-roles-page"]], decls: 25, vars: 18, consts: [[1, "flex", "items-center"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "ml-auto", "flex", "items-center", "gap-2"], ["type", "button", "class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600", 3, "click", 4, "ngIf"], ["class", "mt-2 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["class", "mt-2 text-sm text-pink-500 dark:text-pink-400", 4, "ngIf"], [1, "mt-4"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3"], [3, "columns", "rows"], ["cisCell", "name"], ["cisCell", "actions"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", 3, "click"], [1, "mt-2", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "mt-2", "text-sm", "text-pink-500", "dark:text-pink-400"], [1, "inline-block", "rounded-full", "bg-violet-50", "px-2.5", "py-1", "text-xs", "font-bold", "text-violet-700", "dark:bg-violet-900/30", "dark:text-violet-300"], ["type", "button", "class", "cis-row-action", 3, "click", 4, "ngIf"], ["type", "button", "class", "cis-row-action cis-row-action-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [3, "form", "fields"], ["class", "text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-1", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "disabled"], [1, "text-sm", "text-[#B81104]", "dark:text-red-400"], ["class", "flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700", 3, "click", 4, "ngIf"], [1, "flex", "max-h-[92vh]", "w-full", "max-w-4xl", "flex-col", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "grid", "h-11", "w-11", "place-items-center", "rounded-2xl", "bg-violet-500", "text-sm", "font-bold", "text-white"], ["type", "button", 1, "ml-auto", "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "min-h-0", "flex-1", "overflow-y-auto"], ["ownerKind", "role", 3, "ownerId"], [1, "w-full", "max-w-sm", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "mt-4", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-[#B81104]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"]], template: function RolesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3);
      \u0275\u0275template(9, RolesPage_button_9_Template, 3, 3, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, RolesPage_div_10_Template, 2, 1, "div", 5)(11, RolesPage_div_11_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(12, "div", 7)(13, "section", 8)(14, "h3", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10)(18, "cis-data-table", 11);
      \u0275\u0275template(19, RolesPage_ng_template_19_Template, 2, 1, "ng-template", 12)(20, RolesPage_ng_template_20_Template, 4, 3, "ng-template", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, RolesPage_div_21_Template, 24, 17, "div", 14)(22, RolesPage_div_22_Template, 23, 15, "div", 14)(23, RolesPage_div_23_Template, 4, 1, "div", 14)(24, RolesPage_div_24_Template, 18, 15, "div", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "roles.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 14, "roles.subtitle"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("USERS_ROLES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 16, "common.list"));
      \u0275\u0275advance(3);
      \u0275\u0275property("columns", ctx.roleCols)("rows", ctx.roles());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.createOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.permsOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteOpen());
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, RowActionsMenuComponent, PermissionMatrixComponent, CisDataTableComponent, CisCellDirective, CisFormFieldsComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesPage, [{
    type: Component,
    args: [{ selector: "cis-roles-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PermissionMatrixComponent, CIS_TABLE_IMPORTS, CIS_FORM_IMPORTS], template: `<div class="flex items-center">
  <div>
    <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ 'roles.title' | translate }}</h2>
    <div class="text-xs text-slate-500 dark:text-slate-400">{{ 'roles.subtitle' | translate }}</div>
  </div>
  <div class="ml-auto flex items-center gap-2">
    <button
      *ngIf="perm.canCreate('USERS_ROLES')"
      type="button"
      class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600"
      (click)="openCreate()"
    >
      {{ 'roles.add' | translate }}
    </button>
  </div>
</div>

<div class="mt-2 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>
<div class="mt-2 text-sm text-pink-500 dark:text-pink-400" *ngIf="success()">{{ success() }}</div>

<div class="mt-4">
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
    <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.list' | translate }}</h3>

    <div class="mt-3">
      <cis-data-table [columns]="roleCols" [rows]="roles()">
        <ng-template cisCell="name" let-r>
          <span class="inline-block rounded-full bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">{{ r.name }}</span>
        </ng-template>
        <ng-template cisCell="actions" let-r>
          <cis-row-actions>
            <button
              *ngIf="perm.canEdit('USERS_ROLES')"
              type="button"
              class="cis-row-action"
              (click)="openPerms(r)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
              {{ 'roles.permsBtn' | translate }}
            </button>
            <button
              *ngIf="perm.canEdit('USERS_ROLES')"
              type="button"
              class="cis-row-action"
              (click)="openEdit(r)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              {{ 'common.edit' | translate }}
            </button>
            <button
              *ngIf="perm.canDelete('USERS_ROLES') && r.name !== 'ADMIN'"
              type="button"
              class="cis-row-action cis-row-action-danger"
              (click)="openDelete(r)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              {{ 'common.delete' | translate }}
            </button>
          </cis-row-actions>
        </ng-template>
      </cis-data-table>
    </div>
  </section>
</div>

<!-- Create role -->
<div *ngIf="createOpen()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeCreate()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'roles.add' | translate }}</div>
          <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ 'roles.nameHelp' | translate }}</div>
        </div>
        <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closeCreate()">\u2715</button>
      </div>

      <form class="mt-4 grid gap-3" [formGroup]="form" (ngSubmit)="create()">
        <cis-form-fields [form]="form" [fields]="roleFields" />

        <div class="text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>

        <div class="mt-1 flex items-center justify-end gap-2">
          <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600" (click)="closeCreate()">
            {{ 'common.close' | translate }}
          </button>
          <button
            class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            [disabled]="form.invalid || loading()"
          >
            {{ 'common.create' | translate }}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Edit role -->
<div *ngIf="editOpen()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeEdit()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'roles.editRole' | translate }}</div>
          <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ editingRole()?.name }}</div>
        </div>
        <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closeEdit()">\u2715</button>
      </div>

      <form class="mt-4 grid gap-3" [formGroup]="editForm" (ngSubmit)="saveEdit()">
        <cis-form-fields [form]="editForm" [fields]="roleFields" />

        <div class="text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>

        <div class="mt-1 flex items-center justify-end gap-2">
          <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600" (click)="closeEdit()">
            {{ 'common.close' | translate }}
          </button>
          <button
            class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            [disabled]="editForm.invalid || loading()"
          >
            {{ 'common.save' | translate }}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Role permissions -->
<div *ngIf="permsOpen()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/40" (click)="closePerms()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()" *ngIf="permsRole() as r">
      <div class="flex items-center gap-3">
        <div class="grid h-11 w-11 place-items-center rounded-2xl bg-violet-500 text-sm font-bold text-white">{{ r.name.charAt(0) }}</div>
        <div>
          <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ r.name }}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">{{ r.description || ('users.perm.roleHint' | translate) }}</div>
        </div>
        <button type="button" class="ml-auto rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closePerms()">\u2715</button>
      </div>

      <div class="mt-4 min-h-0 flex-1 overflow-y-auto">
        <cis-permission-matrix ownerKind="role" [ownerId]="r.id" />
      </div>
    </div>
  </div>
</div>

<!-- Delete role -->
<div *ngIf="deleteOpen()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeDelete()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.delete' | translate }} \u2014 {{ pendingDelete()?.name }}</div>
      <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {{ 'roles.deleteConfirm' | translate }}
      </div>
      <div class="mt-2 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>
      <div class="mt-4 flex items-center justify-end gap-2">
        <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600" (click)="closeDelete()">
          {{ 'common.cancel' | translate }}
        </button>
        <button type="button" class="rounded-xl bg-[#B81104] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70" [disabled]="loading()" (click)="confirmDelete()">
          {{ 'common.delete' | translate }}
        </button>
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesPage, { className: "RolesPage", filePath: "app/features/roles/roles.page.ts", lineNumber: 31 });
})();
export {
  RolesPage
};
//# sourceMappingURL=chunk-KLRBUXBM.js.map
