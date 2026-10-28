import {
  PagerComponent
} from "./chunk-LNJXT4KE.js";
import {
  MoneyPipe
} from "./chunk-WX6AFSP5.js";
import {
  TranslatePipe
} from "./chunk-DPFPPFWE.js";
import {
  CommonModule,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  NgZone,
  Output,
  TemplateRef,
  computed,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-F3YP4G7X.js";

// src/app/shared/ui/table/table-shell.component.ts
var _c0 = [[["", "actions", ""]], "*"];
var _c1 = ["[actions]", "*"];
function TableShellComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function TableShellComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function TableShellComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div");
    \u0275\u0275template(2, TableShellComponent_div_1_div_2_Template, 2, 1, "div", 6)(3, TableShellComponent_div_1_div_3_Template, 2, 1, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subtitle);
  }
}
function TableShellComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementContainerEnd();
  }
}
function TableShellComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emptyMessage);
  }
}
var ResponsiveTablesDirective = class _ResponsiveTablesDirective {
  element = inject(ElementRef);
  zone = inject(NgZone);
  observer;
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.refresh();
      if (typeof MutationObserver === "undefined")
        return;
      this.observer = new MutationObserver(() => this.refresh());
      this.observer.observe(this.element.nativeElement, { childList: true, characterData: true, subtree: true });
    });
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  refresh() {
    for (const table of Array.from(this.element.nativeElement.querySelectorAll("table"))) {
      const header = table.tHead?.rows.item(0);
      if (!header)
        continue;
      table.classList.add("cis-responsive-table");
      table.setAttribute("role", "table");
      table.tHead.setAttribute("role", "rowgroup");
      header.setAttribute("role", "row");
      const labels = Array.from(header.cells).flatMap((cell) => {
        cell.setAttribute("role", "columnheader");
        cell.setAttribute("scope", "col");
        return Array(cell.colSpan).fill(cell.textContent?.trim() ?? "");
      });
      for (const body of Array.from(table.tBodies)) {
        body.setAttribute("role", "rowgroup");
        for (const row of Array.from(body.rows)) {
          row.setAttribute("role", "row");
          let column = 0;
          for (const cell of Array.from(row.cells)) {
            cell.setAttribute("role", cell.tagName === "TH" ? "rowheader" : "cell");
            if (cell.colSpan > 1) {
              cell.setAttribute("data-full-width", "");
              cell.removeAttribute("data-label");
            } else {
              cell.removeAttribute("data-full-width");
              cell.setAttribute("data-label", labels[column] ?? "");
            }
            column += cell.colSpan;
          }
        }
      }
    }
  }
  static \u0275fac = function ResponsiveTablesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResponsiveTablesDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ResponsiveTablesDirective, selectors: [["", "cisResponsiveTables", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponsiveTablesDirective, [{
    type: Directive,
    args: [{
      selector: "[cisResponsiveTables]",
      standalone: true
    }]
  }], null, null);
})();
var TableShellComponent = class _TableShellComponent {
  title = null;
  subtitle = null;
  empty = false;
  emptyMessage = "No data";
  static \u0275fac = function TableShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableShellComponent, selectors: [["cis-table-shell"]], inputs: { title: "title", subtitle: "subtitle", empty: "empty", emptyMessage: "emptyMessage" }, features: [\u0275\u0275HostDirectivesFeature([ResponsiveTablesDirective])], ngContentSelectors: _c1, decls: 6, vars: 4, consts: [["emptyState", ""], [1, "cis-table-surface", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], ["class", "flex flex-wrap items-start justify-between gap-3", 4, "ngIf"], [1, "cis-table-content", 3, "ngClass"], [4, "ngIf", "ngIfElse"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], ["class", "text-base font-semibold text-slate-900", 4, "ngIf"], ["class", "mt-1 text-xs text-slate-500", 4, "ngIf"], [1, "text-base", "font-semibold", "text-slate-900"], [1, "mt-1", "text-xs", "text-slate-500"], [1, "rounded-xl", "bg-slate-50", "p-4", "text-sm", "text-slate-600", "ring-1", "ring-slate-100"]], template: function TableShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, TableShellComponent_div_1_Template, 5, 2, "div", 2);
      \u0275\u0275elementStart(2, "div", 3);
      \u0275\u0275template(3, TableShellComponent_ng_container_3_Template, 2, 0, "ng-container", 4)(4, TableShellComponent_ng_template_4_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const emptyState_r2 = \u0275\u0275reference(5);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.title || ctx.subtitle);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.title || ctx.subtitle ? "mt-3" : "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.empty)("ngIfElse", emptyState_r2);
    }
  }, dependencies: [CommonModule, NgClass, NgIf], styles: ["\n\n[_nghost-%COMP%], \n.cis-table-surface[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.cis-table-content[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n@media (max-width: 767px) {\n  .cis-table-surface[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=table-shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableShellComponent, [{
    type: Component,
    args: [{ selector: "cis-table-shell", standalone: true, imports: [CommonModule], hostDirectives: [ResponsiveTablesDirective], template: `<div class="cis-table-surface rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
  <div *ngIf="title || subtitle" class="flex flex-wrap items-start justify-between gap-3">\r
    <div>\r
      <div *ngIf="title" class="text-base font-semibold text-slate-900">{{ title }}</div>\r
      <div *ngIf="subtitle" class="mt-1 text-xs text-slate-500">{{ subtitle }}</div>\r
    </div>\r
    <ng-content select="[actions]" />\r
  </div>\r
\r
  <div class="cis-table-content" [ngClass]="(title || subtitle) ? 'mt-3' : ''">\r
    <ng-container *ngIf="!empty; else emptyState">\r
      <ng-content />\r
    </ng-container>\r
    <ng-template #emptyState>\r
      <div class="rounded-xl bg-slate-50 p-4 text-sm text-slate-600 ring-1 ring-slate-100">{{ emptyMessage }}</div>\r
    </ng-template>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/shared/ui/table/table-shell.component.scss */\n:host,\n.cis-table-surface {\n  display: block;\n  min-width: 0;\n}\n.cis-table-content {\n  overflow-x: auto;\n}\n@media (max-width: 767px) {\n  .cis-table-surface {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=table-shell.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], empty: [{
    type: Input
  }], emptyMessage: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableShellComponent, { className: "TableShellComponent", filePath: "app/shared/ui/table/table-shell.component.ts", lineNumber: 69 });
})();

// src/app/shared/ui/table/data-table.component.ts
var _c02 = (a0, a1) => [a0, a1];
var _c12 = (a0, a1) => ({ $implicit: a0, index: a1 });
function CisDataTableComponent_cis_pager_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cis-pager", 7);
    \u0275\u0275twoWayListener("pageSizeChange", function CisDataTableComponent_cis_pager_0_Template_cis_pager_pageSizeChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    })("pageIndexChange", function CisDataTableComponent_cis_pager_0_Template_cis_pager_pageIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageIndex, $event) || (ctx_r1.pageIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("total", ctx_r1.rows().length);
    \u0275\u0275twoWayProperty("pageSize", ctx_r1.pageSize)("pageIndex", ctx_r1.pageIndex);
  }
}
function CisDataTableComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c02, ctx_r1.alignClass(c_r3.align), c_r3.class ?? ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, c_r3.label));
  }
}
function CisDataTableComponent_tr_7_td_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CisDataTableComponent_tr_7_td_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CisDataTableComponent_tr_7_td_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    const row_r5 = ctx_r6.$implicit;
    const i_r8 = ctx_r6.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.templateFor(c_r6.key))("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c12, row_r5, i_r8));
  }
}
function CisDataTableComponent_tr_7_td_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "money");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.cellMoney(c_r6, row_r5)));
  }
}
function CisDataTableComponent_tr_7_td_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.badgeClass(c_r6, row_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cellValue(c_r6, row_r5));
  }
}
function CisDataTableComponent_tr_7_td_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cellValue(c_r6, row_r5) ?? "\u2014");
  }
}
function CisDataTableComponent_tr_7_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275elementContainerStart(1, 12);
    \u0275\u0275template(2, CisDataTableComponent_tr_7_td_1_ng_container_2_Template, 2, 5, "ng-container", 13)(3, CisDataTableComponent_tr_7_td_1_ng_container_3_Template, 3, 3, "ng-container", 13)(4, CisDataTableComponent_tr_7_td_1_ng_container_4_Template, 3, 2, "ng-container", 13)(5, CisDataTableComponent_tr_7_td_1_ng_container_5_Template, 2, 1, "ng-container", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c02, ctx_r1.alignClass(c_r6.align), c_r6.class ?? ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", c_r6.type ?? "text");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "template");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "money");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "badge");
  }
}
function CisDataTableComponent_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 9);
    \u0275\u0275listener("click", function CisDataTableComponent_tr_7_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rowClick.emit(row_r5));
    });
    \u0275\u0275template(1, CisDataTableComponent_tr_7_td_1_Template, 6, 8, "td", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cursor-pointer", ctx_r1.clickable());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.columns());
  }
}
function CisDataTableComponent_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 17)(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.columns().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.emptyMessage()), " ");
  }
}
function CisDataTableComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 17)(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.columns().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "common.loading"), " ");
  }
}
var CisCellDirective = class _CisCellDirective {
  cisCell = input.required(...ngDevMode ? [{ debugName: "cisCell" }] : []);
  template = inject(TemplateRef);
  static \u0275fac = function CisCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CisCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _CisCellDirective, selectors: [["ng-template", "cisCell", ""]], inputs: { cisCell: [1, "cisCell"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CisCellDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[cisCell]",
      standalone: true
    }]
  }], null, { cisCell: [{ type: Input, args: [{ isSignal: true, alias: "cisCell", required: true }] }] });
})();
var CisDataTableComponent = class _CisDataTableComponent {
  columns = input.required(...ngDevMode ? [{ debugName: "columns" }] : []);
  rows = input.required(...ngDevMode ? [{ debugName: "rows" }] : []);
  loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Translation key (or text) for the empty state. */
  emptyMessage = input("common.noData", ...ngDevMode ? [{ debugName: "emptyMessage" }] : []);
  /** Built-in pager; set false when the page handles pagination itself. */
  paged = input(true, ...ngDevMode ? [{ debugName: "paged" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  /** Set true when handling rowClick — rows show pointer cursor. */
  clickable = input(false, ...ngDevMode ? [{ debugName: "clickable" }] : []);
  rowClick = output();
  cellTemplates = contentChildren(CisCellDirective, ...ngDevMode ? [{ debugName: "cellTemplates" }] : []);
  templateMap = computed(() => {
    const map = /* @__PURE__ */ new Map();
    for (const d of this.cellTemplates())
      map.set(d.cisCell(), d.template);
    return map;
  }, ...ngDevMode ? [{ debugName: "templateMap" }] : []);
  displayed = computed(() => {
    if (!this.paged())
      return this.rows();
    const start = this.pageIndex() * this.pageSize();
    return this.rows().slice(start, start + this.pageSize());
  }, ...ngDevMode ? [{ debugName: "displayed" }] : []);
  /** Clamp page when the row set shrinks (filters, deletes). */
  clamp = effect(() => {
    const total = this.rows().length;
    const size = this.pageSize();
    if (this.pageIndex() > 0 && this.pageIndex() * size >= Math.max(total, 1)) {
      this.pageIndex.set(Math.max(0, Math.ceil(Math.max(total, 1) / size) - 1));
    }
  }, ...ngDevMode ? [{ debugName: "clamp" }] : []);
  templateFor(key) {
    return this.templateMap().get(key) ?? null;
  }
  cellValue(col, row) {
    if (col.value)
      return col.value(row);
    return row?.[col.key];
  }
  cellMoney(col, row) {
    const v = this.cellValue(col, row);
    const n = Number(v);
    return v == null || Number.isNaN(n) ? null : n;
  }
  badgeClass(col, row) {
    return col.badgeClass?.(row) ?? "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300";
  }
  alignClass(align) {
    return align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";
  }
  static \u0275fac = function CisDataTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CisDataTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CisDataTableComponent, selectors: [["cis-data-table"]], contentQueries: function CisDataTableComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.cellTemplates, CisCellDirective, 4);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { columns: [1, "columns"], rows: [1, "rows"], loading: [1, "loading"], emptyMessage: [1, "emptyMessage"], paged: [1, "paged"], clickable: [1, "clickable"] }, outputs: { rowClick: "rowClick" }, features: [\u0275\u0275HostDirectivesFeature([ResponsiveTablesDirective])], decls: 10, vars: 5, consts: [["class", "mb-3 block", 3, "total", "pageSize", "pageIndex", "pageSizeChange", "pageIndexChange", 4, "ngIf"], [1, "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], ["class", "px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 3, "cursor-pointer", "click", 4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngIf"], [1, "mb-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "px-3", "py-2", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300", 3, "ngClass"], [1, "border-t", "border-slate-100", "dark:border-slate-700", 3, "click"], ["class", "px-3 py-2 text-slate-900 dark:text-slate-300", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300", 3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "inline-block", "rounded-full", "px-2", "py-0.5", "text-xs", "font-semibold", 3, "ngClass"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-6", "text-center", "text-sm", "text-slate-500", "dark:text-slate-400"]], template: function CisDataTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CisDataTableComponent_cis_pager_0_Template, 1, 3, "cis-pager", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "table", 2)(3, "thead", 3)(4, "tr");
      \u0275\u0275template(5, CisDataTableComponent_th_5_Template, 3, 7, "th", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "tbody");
      \u0275\u0275template(7, CisDataTableComponent_tr_7_Template, 2, 3, "tr", 5)(8, CisDataTableComponent_tr_8_Template, 4, 4, "tr", 6)(9, CisDataTableComponent_tr_9_Template, 4, 4, "tr", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.paged() && ctx.rows().length > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.columns());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.displayed());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, PagerComponent, TranslatePipe, MoneyPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CisDataTableComponent, [{
    type: Component,
    args: [{
      selector: "cis-data-table",
      standalone: true,
      imports: [CommonModule, TranslatePipe, MoneyPipe, PagerComponent],
      hostDirectives: [ResponsiveTablesDirective],
      template: `
    <cis-pager
      *ngIf="paged() && rows().length > 0"
      class="mb-3 block"
      [total]="rows().length"
      [(pageSize)]="pageSize"
      [(pageIndex)]="pageIndex"
    />

    <div class="overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th
              *ngFor="let c of columns()"
              class="px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300"
              [ngClass]="[alignClass(c.align), c.class ?? '']"
            >{{ c.label | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let row of displayed(); let i = index"
            class="border-t border-slate-100 dark:border-slate-700"
            [class.cursor-pointer]="clickable()"
            (click)="rowClick.emit(row)"
          >
            <td
              *ngFor="let c of columns()"
              class="px-3 py-2 text-slate-900 dark:text-slate-300"
              [ngClass]="[alignClass(c.align), c.class ?? '']"
            >
              <ng-container [ngSwitch]="c.type ?? 'text'">
                <ng-container *ngSwitchCase="'template'">
                  <ng-container *ngTemplateOutlet="templateFor(c.key); context: { $implicit: row, index: i }" />
                </ng-container>
                <ng-container *ngSwitchCase="'money'">{{ cellMoney(c, row) | money }}</ng-container>
                <ng-container *ngSwitchCase="'badge'">
                  <span class="inline-block rounded-full px-2 py-0.5 text-xs font-semibold" [ngClass]="badgeClass(c, row)">{{ cellValue(c, row) }}</span>
                </ng-container>
                <ng-container *ngSwitchDefault>{{ cellValue(c, row) ?? '\u2014' }}</ng-container>
              </ng-container>
            </td>
          </tr>
          <tr *ngIf="!loading() && rows().length === 0" class="border-t border-slate-100 dark:border-slate-700">
            <td [attr.colspan]="columns().length" class="px-3 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
              {{ emptyMessage() | translate }}
            </td>
          </tr>
          <tr *ngIf="loading()" class="border-t border-slate-100 dark:border-slate-700">
            <td [attr.colspan]="columns().length" class="px-3 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
              {{ 'common.loading' | translate }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
    }]
  }], null, { columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: true }] }], rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: true }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], emptyMessage: [{ type: Input, args: [{ isSignal: true, alias: "emptyMessage", required: false }] }], paged: [{ type: Input, args: [{ isSignal: true, alias: "paged", required: false }] }], clickable: [{ type: Input, args: [{ isSignal: true, alias: "clickable", required: false }] }], rowClick: [{ type: Output, args: ["rowClick"] }], cellTemplates: [{ type: ContentChildren, args: [forwardRef(() => CisCellDirective), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CisDataTableComponent, { className: "CisDataTableComponent", filePath: "app/shared/ui/table/data-table.component.ts", lineNumber: 125 });
})();
var CIS_TABLE_IMPORTS = [CisDataTableComponent, CisCellDirective];

export {
  ResponsiveTablesDirective,
  CisCellDirective,
  CisDataTableComponent,
  CIS_TABLE_IMPORTS
};
//# sourceMappingURL=chunk-RMRI7I2C.js.map
