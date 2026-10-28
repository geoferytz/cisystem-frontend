import {
  TranslatePipe
} from "./chunk-DPFPPFWE.js";
import {
  CommonModule,
  Component,
  GraphqlService,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  computed,
  effect,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/shared/ui/permission-matrix/permission-matrix.component.ts
function PermissionMatrixComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function PermissionMatrixComponent_button_14_Template_button_click_0_listener() {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeModule.set(m_r2.key));
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.activeModule() === m_r2.key ? "bg-pink-500 text-white shadow-sm" : "bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-700/50 dark:text-slate-200 dark:hover:bg-slate-700");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.activeModule() === m_r2.key ? "bg-white/25 text-white" : ctx_r2.grantedCount(m_r2.key) ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" : "bg-slate-200 text-slate-500 dark:bg-slate-600 dark:text-slate-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.grantedCount(m_r2.key), "/", ctx_r2.totalCount(m_r2.key));
  }
}
function PermissionMatrixComponent_section_15_label_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 25)(1, "input", 26);
    \u0275\u0275listener("change", function PermissionMatrixComponent_section_15_label_15_Template_input_change_1_listener() {
      const a_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const p_r7 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePermission(p_r7.module, a_r6.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span")(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("ngClass", p_r7[a_r6.key] ? "bg-pink-50 ring-pink-200 dark:bg-pink-900/20 dark:ring-pink-800" : "ring-slate-200 hover:bg-slate-50 dark:ring-slate-700 dark:hover:bg-slate-700/40");
    \u0275\u0275advance();
    \u0275\u0275property("checked", p_r7[a_r6.key]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, a_r6.label));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, a_r6.desc));
  }
}
function PermissionMatrixComponent_section_15_ng_container_16_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 25)(1, "input", 31);
    \u0275\u0275listener("change", function PermissionMatrixComponent_section_15_ng_container_16_label_5_Template_input_change_1_listener() {
      const a_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleExtra(a_r9.code));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span")(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r9 = ctx.$implicit;
    const p_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("ngClass", p_r7.extras.includes(a_r9.code) ? "bg-violet-50 ring-violet-200 dark:bg-violet-900/20 dark:ring-violet-800" : "ring-slate-200 hover:bg-slate-50 dark:ring-slate-700 dark:hover:bg-slate-700/40");
    \u0275\u0275advance();
    \u0275\u0275property("checked", p_r7.extras.includes(a_r9.code));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r9.description);
  }
}
function PermissionMatrixComponent_section_15_ng_container_16_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "users.perm.needsView"));
  }
}
function PermissionMatrixComponent_section_15_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275template(5, PermissionMatrixComponent_section_15_ng_container_16_label_5_Template, 7, 4, "label", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PermissionMatrixComponent_section_15_ng_container_16_p_6_Template, 3, 3, "p", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "users.perm.extra"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.activeExtras());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r7.canView);
  }
}
function PermissionMatrixComponent_section_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "button", 19);
    \u0275\u0275listener("click", function PermissionMatrixComponent_section_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAllForModule(true));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 20);
    \u0275\u0275listener("click", function PermissionMatrixComponent_section_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAllForModule(false));
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 21);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 22);
    \u0275\u0275template(15, PermissionMatrixComponent_section_15_label_15_Template, 9, 8, "label", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PermissionMatrixComponent_section_15_ng_container_16_Template, 7, 5, "ng-container", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.activeModuleLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "users.perm.grantAll"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "users.perm.clearAll"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "users.perm.basic"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.basicActions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeExtras().length);
  }
}
function PermissionMatrixComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.loadingPermissions"));
  }
}
function PermissionMatrixComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function PermissionMatrixComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.success());
  }
}
var MODULES = [
  { key: "COUNTER", label: "Counter" },
  { key: "PRODUCTS", label: "Products" },
  { key: "CATEGORIES", label: "Categories" },
  { key: "INVENTORY", label: "Inventory" },
  { key: "STOCK_MOVEMENTS", label: "Stock Movements" },
  { key: "EXPIRY_ALERTS", label: "Expiry & Alerts" },
  { key: "SALES", label: "Sales" },
  { key: "MY_SALES", label: "My Sales" },
  { key: "CUSTOMERS", label: "Customers" },
  { key: "RETURNS", label: "Returns" },
  { key: "PURCHASING", label: "Purchasing" },
  { key: "EXPENSES", label: "Expenses" },
  { key: "EXPENSE_CATEGORIES", label: "Expense Categories" },
  { key: "REPORTS", label: "Reports" },
  { key: "PROFIT_MANAGEMENT", label: "Profit Management" },
  { key: "USERS_ROLES", label: "Users & Roles" },
  { key: "BRANCHES", label: "Branches" },
  { key: "TRANSFERS", label: "Transfers" }
];
var PermissionMatrixComponent = class _PermissionMatrixComponent {
  gql;
  /** 'user' edits user_permissions; 'role' edits role_permissions. */
  ownerKind = input.required(...ngDevMode ? [{ debugName: "ownerKind" }] : []);
  ownerId = input.required(...ngDevMode ? [{ debugName: "ownerId" }] : []);
  saved = output();
  modules = MODULES;
  basicActions = [
    { key: "canView", label: "common.view", desc: "users.perm.viewDesc" },
    { key: "canCreate", label: "common.create", desc: "users.perm.createDesc" },
    { key: "canEdit", label: "common.edit", desc: "users.perm.editDesc" },
    { key: "canDelete", label: "common.delete", desc: "users.perm.deleteDesc" }
  ];
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  success = signal(null, ...ngDevMode ? [{ debugName: "success" }] : []);
  permissions = signal([], ...ngDevMode ? [{ debugName: "permissions" }] : []);
  catalog = signal([], ...ngDevMode ? [{ debugName: "catalog" }] : []);
  activeModule = signal(MODULES[0].key, ...ngDevMode ? [{ debugName: "activeModule" }] : []);
  activePerm = computed(() => this.permissions().find((p) => p.module === this.activeModule()) ?? null, ...ngDevMode ? [{ debugName: "activePerm" }] : []);
  activeExtras = computed(() => this.catalog().find((c) => c.module === this.activeModule())?.actions ?? [], ...ngDevMode ? [{ debugName: "activeExtras" }] : []);
  activeModuleLabel = computed(() => MODULES.find((m) => m.key === this.activeModule())?.label ?? this.activeModule(), ...ngDevMode ? [{ debugName: "activeModuleLabel" }] : []);
  loadTrigger = effect(() => {
    const id = this.ownerId();
    const kind = this.ownerKind();
    if (id !== null && id !== void 0 && String(id) !== "") {
      this.loadCatalog();
      this.load(kind, String(id));
    }
  }, ...ngDevMode ? [{ debugName: "loadTrigger" }] : []);
  constructor(gql) {
    this.gql = gql;
  }
  grantedCount(module) {
    const p = this.permissions().find((x) => x.module === module);
    if (!p)
      return 0;
    return [p.canView, p.canCreate, p.canEdit, p.canDelete].filter(Boolean).length + (p.canView ? p.extras.length : 0);
  }
  totalCount(module) {
    return 4 + (this.catalog().find((c) => c.module === module)?.actions.length ?? 0);
  }
  toggleExtra(code) {
    const mod = this.activeModule();
    this.permissions.set(this.permissions().map((p) => {
      if (p.module !== mod)
        return p;
      const has = p.extras.includes(code);
      return __spreadProps(__spreadValues({}, p), { canView: has ? p.canView : true, extras: has ? p.extras.filter((c) => c !== code) : [...p.extras, code] });
    }));
  }
  togglePermission(module, key) {
    const mod = String(module).toUpperCase();
    this.permissions.set(this.permissions().map((p) => String(p.module).toUpperCase() === mod ? __spreadProps(__spreadValues({}, p), { [key]: !p[key] }) : p));
  }
  setAllForModule(on) {
    const mod = this.activeModule();
    const codes = this.activeExtras().map((a) => a.code);
    this.permissions.set(this.permissions().map((p) => p.module !== mod ? p : __spreadProps(__spreadValues({}, p), { canView: on, canCreate: on, canEdit: on, canDelete: on, extras: on ? codes : [] })));
  }
  reload() {
    this.load(this.ownerKind(), String(this.ownerId()));
  }
  defaultPermissions() {
    return MODULES.map((m) => ({ module: m.key, canView: false, canCreate: false, canEdit: false, canDelete: false, extras: [] }));
  }
  loadCatalog() {
    if (this.catalog().length)
      return;
    this.gql.request(`query PermissionCatalog { permissionCatalog { module actions { code label description } } }`).subscribe({ next: (res) => this.catalog.set(res.permissionCatalog ?? []), error: () => {
    } });
  }
  load(kind, id) {
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    this.permissions.set(this.defaultPermissions());
    const field = kind === "role" ? "rolePermissions" : "userPermissions";
    const arg = kind === "role" ? "roleId" : "userId";
    const q = `query Perms($id: ID!) { ${field}(${arg}: $id) { module canView canCreate canEdit canDelete extras } }`;
    this.gql.request(q, { id }).subscribe({
      next: (res) => {
        const incoming = res[field] ?? [];
        const map = new Map(incoming.map((p) => [String(p.module).toUpperCase(), p]));
        this.permissions.set(MODULES.map((m) => {
          const p = map.get(m.key);
          return {
            module: m.key,
            canView: Boolean(p?.canView),
            canCreate: Boolean(p?.canCreate),
            canEdit: Boolean(p?.canEdit),
            canDelete: Boolean(p?.canDelete),
            extras: p?.extras ?? []
          };
        }));
        this.loading.set(false);
      },
      error: (e) => {
        this.permissions.set(this.defaultPermissions());
        this.error.set(e instanceof Error ? e.message : "Failed to load permissions");
        this.loading.set(false);
      }
    });
  }
  save() {
    const id = String(this.ownerId());
    if (!id)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    const kind = this.ownerKind();
    const field = kind === "role" ? "setRolePermissions" : "setUserPermissions";
    const inputType = kind === "role" ? "SetRolePermissionsInput" : "SetUserPermissionsInput";
    const idKey = kind === "role" ? "roleId" : "userId";
    const mutation = `mutation Save($input: ${inputType}!) {
      ${field}(input: $input) { module canView canCreate canEdit canDelete extras }
    }`;
    this.gql.request(mutation, {
      input: {
        [idKey]: id,
        permissions: this.permissions().map((p) => ({
          module: p.module,
          canView: p.canView,
          canCreate: p.canCreate,
          canEdit: p.canEdit,
          canDelete: p.canDelete,
          extras: p.canView ? p.extras : []
        }))
      }
    }).subscribe({
      next: () => {
        this.success.set("Permissions updated");
        this.loading.set(false);
        this.saved.emit();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update permissions");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function PermissionMatrixComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionMatrixComponent)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionMatrixComponent, selectors: [["cis-permission-matrix"]], inputs: { ownerKind: [1, "ownerKind"], ownerId: [1, "ownerId"] }, outputs: { saved: "saved" }, decls: 19, vars: 18, consts: [[1, "flex", "items-center", "gap-2"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "ml-auto", "flex", "items-center", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-1.5", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-1.5", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "mt-3", "grid", "min-h-0", "gap-4", "md:grid-cols-[220px_1fr]"], [1, "flex", "gap-1.5", "overflow-x-auto", "md:max-h-[52vh]", "md:flex-col", "md:overflow-y-auto", "md:overflow-x-visible", "md:pr-1"], ["type", "button", "class", "flex shrink-0 items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "min-h-0 overflow-y-auto rounded-2xl p-4 ring-1 ring-slate-100 dark:ring-slate-700 md:max-h-[52vh]", 4, "ngIf"], ["class", "mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400", 4, "ngIf"], ["class", "mt-2 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["class", "mt-2 text-sm text-pink-500 dark:text-pink-400", 4, "ngIf"], ["type", "button", 1, "flex", "shrink-0", "items-center", "justify-between", "gap-2", "rounded-xl", "px-3", "py-2", "text-left", "text-sm", "font-semibold", "transition", 3, "click", "ngClass"], [1, "truncate"], [1, "rounded-full", "px-1.5", "py-0.5", "text-[10px]", "font-bold", 3, "ngClass"], [1, "min-h-0", "overflow-y-auto", "rounded-2xl", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-700", "md:max-h-[52vh]"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "text-base", "font-bold", "text-slate-900", "dark:text-slate-100"], [1, "flex", "gap-2"], ["type", "button", 1, "rounded-lg", "bg-emerald-50", "px-3", "py-1.5", "text-xs", "font-semibold", "text-emerald-700", "hover:bg-emerald-100", "dark:bg-emerald-900/30", "dark:text-emerald-300", 3, "click"], ["type", "button", 1, "rounded-lg", "bg-slate-100", "px-3", "py-1.5", "text-xs", "font-semibold", "text-slate-600", "hover:bg-slate-200", "dark:bg-slate-700", "dark:text-slate-300", 3, "click"], [1, "mt-4", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-slate-500", "dark:text-slate-400"], [1, "mt-2", "grid", "gap-2", "sm:grid-cols-2"], ["class", "flex cursor-pointer items-start gap-3 rounded-xl p-3 ring-1 transition", 3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "flex", "cursor-pointer", "items-start", "gap-3", "rounded-xl", "p-3", "ring-1", "transition", 3, "ngClass"], ["type", "checkbox", 1, "mt-0.5", "h-4", "w-4", "accent-pink-500", 3, "change", "checked"], [1, "block", "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "block", "text-[11px]", "text-slate-500", "dark:text-slate-400"], [1, "mt-5", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-slate-500", "dark:text-slate-400"], ["class", "mt-2 text-[11px] text-amber-600 dark:text-amber-400", 4, "ngIf"], ["type", "checkbox", 1, "mt-0.5", "h-4", "w-4", "accent-violet-500", 3, "change", "checked"], [1, "mt-2", "text-[11px]", "text-amber-600", "dark:text-amber-400"], [1, "mt-3", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], [1, "mt-2", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "mt-2", "text-sm", "text-pink-500", "dark:text-pink-400"]], template: function PermissionMatrixComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
      \u0275\u0275listener("click", function PermissionMatrixComponent_Template_button_click_6_listener() {
        return ctx.reload();
      });
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275listener("click", function PermissionMatrixComponent_Template_button_click_9_listener() {
        return ctx.save();
      });
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 5)(13, "nav", 6);
      \u0275\u0275template(14, PermissionMatrixComponent_button_14_Template, 5, 5, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, PermissionMatrixComponent_section_15_Template, 17, 12, "section", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, PermissionMatrixComponent_div_16_Template, 3, 3, "div", 9)(17, PermissionMatrixComponent_div_17_Template, 2, 1, "div", 10)(18, PermissionMatrixComponent_div_18_Template, 2, 1, "div", 11);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.ownerKind() === "role" ? \u0275\u0275pipeBind1(3, 10, "users.perm.roleHint") : \u0275\u0275pipeBind1(4, 12, "common.assignPermissions"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 14, "common.refresh"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 16, "common.save"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.modules);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activePerm());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionMatrixComponent, [{
    type: Component,
    args: [{
      selector: "cis-permission-matrix",
      standalone: true,
      imports: [CommonModule, TranslatePipe],
      template: `
    <div class="flex items-center gap-2">
      <div class="text-xs text-slate-500 dark:text-slate-400">
        {{ ownerKind() === 'role' ? ('users.perm.roleHint' | translate) : ('common.assignPermissions' | translate) }}
      </div>
      <div class="ml-auto flex items-center gap-2">
        <button
          type="button"
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="reload()"
          [disabled]="loading()"
        >
          {{ 'common.refresh' | translate }}
        </button>
        <button
          type="button"
          class="rounded-xl bg-pink-500 px-4 py-1.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          (click)="save()"
          [disabled]="loading()"
        >
          {{ 'common.save' | translate }}
        </button>
      </div>
    </div>

    <div class="mt-3 grid min-h-0 gap-4 md:grid-cols-[220px_1fr]">
      <nav class="flex gap-1.5 overflow-x-auto md:max-h-[52vh] md:flex-col md:overflow-y-auto md:overflow-x-visible md:pr-1">
        <button
          *ngFor="let m of modules"
          type="button"
          class="flex shrink-0 items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold transition"
          [ngClass]="activeModule() === m.key
            ? 'bg-pink-500 text-white shadow-sm'
            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-700/50 dark:text-slate-200 dark:hover:bg-slate-700'"
          (click)="activeModule.set(m.key)"
        >
          <span class="truncate">{{ m.label }}</span>
          <span
            class="rounded-full px-1.5 py-0.5 text-[10px] font-bold"
            [ngClass]="activeModule() === m.key
              ? 'bg-white/25 text-white'
              : grantedCount(m.key) ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-slate-200 text-slate-500 dark:bg-slate-600 dark:text-slate-300'"
          >{{ grantedCount(m.key) }}/{{ totalCount(m.key) }}</span>
        </button>
      </nav>

      <section *ngIf="activePerm() as p" class="min-h-0 overflow-y-auto rounded-2xl p-4 ring-1 ring-slate-100 dark:ring-slate-700 md:max-h-[52vh]">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="text-base font-bold text-slate-900 dark:text-slate-100">{{ activeModuleLabel() }}</div>
          <div class="flex gap-2">
            <button type="button" class="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300" (click)="setAllForModule(true)">{{ 'users.perm.grantAll' | translate }}</button>
            <button type="button" class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300" (click)="setAllForModule(false)">{{ 'users.perm.clearAll' | translate }}</button>
          </div>
        </div>

        <div class="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'users.perm.basic' | translate }}</div>
        <div class="mt-2 grid gap-2 sm:grid-cols-2">
          <label
            *ngFor="let a of basicActions"
            class="flex cursor-pointer items-start gap-3 rounded-xl p-3 ring-1 transition"
            [ngClass]="p[a.key] ? 'bg-pink-50 ring-pink-200 dark:bg-pink-900/20 dark:ring-pink-800' : 'ring-slate-200 hover:bg-slate-50 dark:ring-slate-700 dark:hover:bg-slate-700/40'"
          >
            <input type="checkbox" class="mt-0.5 h-4 w-4 accent-pink-500" [checked]="p[a.key]" (change)="togglePermission(p.module, a.key)" />
            <span>
              <span class="block text-sm font-semibold text-slate-900 dark:text-slate-100">{{ a.label | translate }}</span>
              <span class="block text-[11px] text-slate-500 dark:text-slate-400">{{ a.desc | translate }}</span>
            </span>
          </label>
        </div>

        <ng-container *ngIf="activeExtras().length">
          <div class="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'users.perm.extra' | translate }}</div>
          <div class="mt-2 grid gap-2 sm:grid-cols-2">
            <label
              *ngFor="let a of activeExtras()"
              class="flex cursor-pointer items-start gap-3 rounded-xl p-3 ring-1 transition"
              [ngClass]="p.extras.includes(a.code) ? 'bg-violet-50 ring-violet-200 dark:bg-violet-900/20 dark:ring-violet-800' : 'ring-slate-200 hover:bg-slate-50 dark:ring-slate-700 dark:hover:bg-slate-700/40'"
            >
              <input type="checkbox" class="mt-0.5 h-4 w-4 accent-violet-500" [checked]="p.extras.includes(a.code)" (change)="toggleExtra(a.code)" />
              <span>
                <span class="block text-sm font-semibold text-slate-900 dark:text-slate-100">{{ a.label }}</span>
                <span class="block text-[11px] text-slate-500 dark:text-slate-400">{{ a.description }}</span>
              </span>
            </label>
          </div>
          <p *ngIf="!p.canView" class="mt-2 text-[11px] text-amber-600 dark:text-amber-400">{{ 'users.perm.needsView' | translate }}</p>
        </ng-container>
      </section>
    </div>

    <div *ngIf="loading()" class="mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.loadingPermissions' | translate }}</div>
    <div class="mt-2 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>
    <div class="mt-2 text-sm text-pink-500 dark:text-pink-400" *ngIf="success()">{{ success() }}</div>
  `
    }]
  }], () => [{ type: GraphqlService }], { ownerKind: [{ type: Input, args: [{ isSignal: true, alias: "ownerKind", required: true }] }], ownerId: [{ type: Input, args: [{ isSignal: true, alias: "ownerId", required: true }] }], saved: [{ type: Output, args: ["saved"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionMatrixComponent, { className: "PermissionMatrixComponent", filePath: "app/shared/ui/permission-matrix/permission-matrix.component.ts", lineNumber: 142 });
})();

export {
  PermissionMatrixComponent
};
//# sourceMappingURL=chunk-IXBEG42G.js.map
