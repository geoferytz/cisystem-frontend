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
  TranslatePipe
} from "./chunk-DPFPPFWE.js";
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
} from "./chunk-F3YP4G7X.js";
import "./chunk-Y5RQAIA6.js";

// src/app/features/branches/branches.page.ts
function BranchesPage_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function BranchesPage_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "common.add"), " ", \u0275\u0275pipeBind1(3, 4, "common.branch"), " ");
  }
}
function BranchesPage_div_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function BranchesPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275listener("click", function BranchesPage_div_5_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17);
    \u0275\u0275listener("click", function BranchesPage_div_5_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 0)(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 18);
    \u0275\u0275listener("click", function BranchesPage_div_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "form", 19);
    \u0275\u0275listener("ngSubmit", function BranchesPage_div_5_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275element(13, "cis-form-fields", 20);
    \u0275\u0275template(14, BranchesPage_div_5_div_14_Template, 2, 1, "div", 21);
    \u0275\u0275elementStart(15, "div", 22)(16, "button", 23);
    \u0275\u0275listener("click", function BranchesPage_div_5_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 24);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r1.editingId() ? \u0275\u0275pipeBind1(7, 9, "common.edit") : \u0275\u0275pipeBind1(8, 11, "common.add"), " ", \u0275\u0275pipeBind1(9, 13, "common.branch"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.form)("fields", ctx_r1.branchFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 15, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? \u0275\u0275pipeBind1(21, 17, "common.saving") : \u0275\u0275pipeBind1(22, 19, "common.save"), " ");
  }
}
function BranchesPage_tr_36_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.main"));
  }
}
function BranchesPage_tr_36_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function BranchesPage_tr_36_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const b_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(b_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 36);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.edit"), " ");
  }
}
function BranchesPage_tr_36_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function BranchesPage_tr_36_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const b_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.delete(b_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 36);
    \u0275\u0275element(2, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.delete"), " ");
  }
}
function BranchesPage_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 26)(1, "td", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 27)(5, "span", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BranchesPage_tr_36_span_7_Template, 3, 3, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 27)(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 27)(12, "span", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 27)(15, "span", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 27)(20, "cis-row-actions");
    \u0275\u0275template(21, BranchesPage_tr_36_button_21_Template, 5, 4, "button", 32)(22, BranchesPage_tr_36_button_22_Template, 5, 4, "button", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r5.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r5.main);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r5.address || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r5.phone || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-[#B81104]", !b_r5.active)("dark:text-red-400", !b_r5.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r5.active ? \u0275\u0275pipeBind1(17, 12, "common.active") : \u0275\u0275pipeBind1(18, 14, "common.inactive"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("BRANCHES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("BRANCHES") && !b_r5.main);
  }
}
var BranchesPage = class _BranchesPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  branches = signal([], ...ngDevMode ? [{ debugName: "branches" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedBranches = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.branches().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedBranches" }] : []);
  modalOpen = signal(false, ...ngDevMode ? [{ debugName: "modalOpen" }] : []);
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : []);
  fb = inject(FormBuilder);
  form = this.fb.group({
    code: ["", [Validators.required]],
    name: ["", [Validators.required]],
    address: [""],
    phone: [""],
    active: [true, [Validators.required]]
  });
  branchFields = [
    { key: "code", label: "common.code", required: true, placeholder: "e.g. BR2", inputClass: "uppercase" },
    { key: "name", label: "common.name", required: true },
    { key: "address", label: "common.address" },
    { key: "phone", label: "common.phone" },
    {
      key: "active",
      label: "common.status",
      type: "select",
      hide: () => !this.editingId(),
      options: [
        { value: true, label: "common.active" },
        { value: false, label: "common.inactive" }
      ]
    }
  ];
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.load();
  }
  openCreate() {
    this.error.set(null);
    this.editingId.set(null);
    this.form.reset({ code: "", name: "", address: "", phone: "", active: true });
    this.form.controls.code.enable();
    this.modalOpen.set(true);
  }
  openEdit(b) {
    this.error.set(null);
    this.editingId.set(b.id);
    this.form.reset({
      code: b.code,
      name: b.name,
      address: b.address ?? "",
      phone: b.phone ?? "",
      active: b.active
    });
    if (b.main) {
      this.form.controls.code.disable();
    } else {
      this.form.controls.code.enable();
    }
    this.modalOpen.set(true);
  }
  closeModal() {
    this.modalOpen.set(false);
    this.editingId.set(null);
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const query = `query Branches { branches { id code name address phone active main } }`;
    this.gql.request(query).subscribe({
      next: (res) => {
        this.branches.set(res.branches);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load");
        this.loading.set(false);
      }
    });
  }
  save() {
    if (this.form.invalid)
      return;
    this.loading.set(true);
    this.error.set(null);
    const raw = this.form.getRawValue();
    const id = this.editingId();
    const mutation = id ? `mutation UpdateBranch($input: UpdateBranchInput!) { updateBranch(input: $input) { id code name address phone active main } }` : `mutation CreateBranch($input: CreateBranchInput!) { createBranch(input: $input) { id code name address phone active main } }`;
    const input = id ? { id, code: raw.code, name: raw.name, address: raw.address, phone: raw.phone, active: raw.active } : { code: raw.code, name: raw.name, address: raw.address, phone: raw.phone };
    this.gql.request(mutation, { input }).subscribe({
      next: () => {
        this.closeModal();
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to save");
        this.loading.set(false);
      }
    });
  }
  delete(b) {
    if (b.main)
      return;
    const ok = confirm(`Delete branch "${b.name}"?`);
    if (!ok)
      return;
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation DeleteBranch($input: DeleteBranchInput!) { deleteBranch(input: $input) }`;
    this.gql.request(mutation, { input: { id: b.id } }).subscribe({
      next: () => this.load(),
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to delete");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function BranchesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BranchesPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BranchesPage, selectors: [["cis-branches-page"]], decls: 37, vars: 30, consts: [[1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], ["class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white", "type", "button", 3, "click", 4, "ngIf"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-1"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", 3, "click"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [3, "form", "fields"], ["class", "text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-2", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "disabled"], [1, "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2"], [1, "font-mono", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "text-slate-900", "dark:text-slate-300"], ["class", "ml-2 rounded-full bg-teal-100 dark:bg-teal-900/40 px-2 py-0.5 text-[10px] font-bold uppercase text-teal-700 dark:text-teal-300", 4, "ngIf"], [1, "text-slate-800", "dark:text-slate-300"], ["class", "cis-row-action", 3, "disabled", "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", 3, "disabled", "click", 4, "ngIf"], [1, "ml-2", "rounded-full", "bg-teal-100", "dark:bg-teal-900/40", "px-2", "py-0.5", "text-[10px]", "font-bold", "uppercase", "text-teal-700", "dark:text-teal-300"], [1, "cis-row-action", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "cis-row-action", "cis-row-action-danger", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"]], template: function BranchesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, BranchesPage_button_4_Template, 4, 6, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, BranchesPage_div_5_Template, 23, 21, "div", 3);
      \u0275\u0275elementStart(6, "div", 4)(7, "section", 5)(8, "div", 0)(9, "h3", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "cis-pager", 7);
      \u0275\u0275twoWayListener("pageSizeChange", function BranchesPage_Template_cis_pager_pageSizeChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function BranchesPage_Template_cis_pager_pageIndexChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "table", 9)(15, "thead", 10)(16, "tr")(17, "th", 11);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 11);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th", 11);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 11);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 11);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 11);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "tbody");
      \u0275\u0275template(36, BranchesPage_tr_36_Template, 23, 16, "tr", 12);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 14, "nav.branches"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("BRANCHES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modalOpen());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "common.list"));
      \u0275\u0275advance(2);
      \u0275\u0275property("total", ctx.branches().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 18, "common.code"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 20, "common.name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 22, "common.address"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 24, "common.phone"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 26, "common.status"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 28, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedBranches());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, RowActionsMenuComponent, PagerComponent, CisFormFieldsComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BranchesPage, [{
    type: Component,
    args: [{ selector: "cis-branches-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PagerComponent, CIS_FORM_IMPORTS], template: `<div class="flex items-center justify-between">
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ 'nav.branches' | translate }}</h2>
  <button *ngIf="perm.canCreate('BRANCHES')" class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="button" (click)="openCreate()">
    {{ 'common.add' | translate }} {{ 'common.branch' | translate }}
  </button>
</div>

<div *ngIf="modalOpen()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeModal()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">
      <div class="flex items-center justify-between">
        <div class="text-base font-semibold text-slate-900 dark:text-slate-100">
          {{ editingId() ? ('common.edit' | translate) : ('common.add' | translate) }} {{ 'common.branch' | translate }}
        </div>
        <button class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200" type="button" (click)="closeModal()">\u2715</button>
      </div>

      <form class="mt-4 grid gap-3" [formGroup]="form" (ngSubmit)="save()">
        <cis-form-fields [form]="form" [fields]="branchFields" />

        <div class="text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>

        <div class="mt-2 flex items-center justify-end gap-2">
          <button
            type="button"
            class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
            (click)="closeModal()"
          >
            {{ 'common.close' | translate }}
          </button>
          <button
            class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            [disabled]="form.invalid || loading()"
          >
            {{ loading() ? ('common.saving' | translate) : ('common.save' | translate) }}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-1">
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
    <div class="flex items-center justify-between">
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.list' | translate }}</h3>
    </div>

    <cis-pager class="mt-3 block" [total]="branches().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />

    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.code' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.name' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.address' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.phone' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.status' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let b of displayedBranches()" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-2">
              <span class="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">{{ b.code }}</span>
            </td>
            <td class="px-3 py-2">
              <span class="text-slate-900 dark:text-slate-300">{{ b.name }}</span>
              <span *ngIf="b.main" class="ml-2 rounded-full bg-teal-100 dark:bg-teal-900/40 px-2 py-0.5 text-[10px] font-bold uppercase text-teal-700 dark:text-teal-300">{{ 'common.main' | translate }}</span>
            </td>
            <td class="px-3 py-2">
              <span class="text-slate-900 dark:text-slate-300">{{ b.address || '-' }}</span>
            </td>
            <td class="px-3 py-2">
              <span class="text-slate-900 dark:text-slate-300">{{ b.phone || '-' }}</span>
            </td>
            <td class="px-3 py-2">
              <span class="text-slate-800 dark:text-slate-300" [class.text-[#B81104]]="!b.active" [class.dark:text-red-400]="!b.active">
                {{ b.active ? ('common.active' | translate) : ('common.inactive' | translate) }}
              </span>
            </td>
            <td class="px-3 py-2">
              <cis-row-actions>
                <button
                  *ngIf="perm.canEdit('BRANCHES')"
                  class="cis-row-action"
                  (click)="openEdit(b)"
                  [disabled]="loading()"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  {{ 'common.edit' | translate }}
                </button>
                <button
                  *ngIf="perm.canDelete('BRANCHES') && !b.main"
                  class="cis-row-action cis-row-action-danger"
                  (click)="delete(b)"
                  [disabled]="loading()"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  {{ 'common.delete' | translate }}
                </button>
              </cis-row-actions>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BranchesPage, { className: "BranchesPage", filePath: "app/features/branches/branches.page.ts", lineNumber: 38 });
})();
export {
  BranchesPage
};
//# sourceMappingURL=chunk-O7YUTHOY.js.map
