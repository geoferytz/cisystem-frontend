import {
  TranslatePipe
} from "./chunk-V35BCXNA.js";
import {
  CommonModule,
  Component,
  Input,
  Output,
  computed,
  input,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-ZFAUJJU2.js";

// src/app/shared/ui/pager/pager.component.ts
var PagerComponent = class _PagerComponent {
  total = input.required(...ngDevMode ? [{ debugName: "total" }] : []);
  pageSize = model(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = model(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  totalPages = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  setPageSize(value) {
    this.pageSize.set(Number(value) || 10);
    this.pageIndex.set(0);
  }
  prev() {
    this.pageIndex.update((i) => Math.max(0, i - 1));
  }
  next() {
    this.pageIndex.update((i) => Math.min(this.totalPages() - 1, i + 1));
  }
  static \u0275fac = function PagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagerComponent, selectors: [["cis-pager"]], inputs: { total: [1, "total"], pageSize: [1, "pageSize"], pageIndex: [1, "pageIndex"] }, outputs: { pageSize: "pageSizeChange", pageIndex: "pageIndexChange" }, decls: 26, vars: 25, consts: [[1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], [1, "flex", "items-center", "gap-2"], [1, "ml-2", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "text-slate-900", "dark:text-slate-100", 3, "change", "value"], [3, "value"], ["type", "button", 1, "rounded-lg", "bg-slate-100", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-200", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"]], template: function PagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 2)(5, "label", 1);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275domElementStart(8, "select", 3);
      \u0275\u0275domListener("change", function PagerComponent_Template_select_change_8_listener($event) {
        return ctx.setPageSize($event.target.value);
      });
      \u0275\u0275domElementStart(9, "option", 4);
      \u0275\u0275text(10, "10");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "option", 4);
      \u0275\u0275text(12, "20");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "option", 4);
      \u0275\u0275text(14, "50");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "option", 4);
      \u0275\u0275text(16, "100");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(17, "button", 5);
      \u0275\u0275domListener("click", function PagerComponent_Template_button_click_17_listener() {
        return ctx.prev();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 1);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "button", 5);
      \u0275\u0275domListener("click", function PagerComponent_Template_button_click_23_listener() {
        return ctx.next();
      });
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 15, "common.total"), ": ", ctx.total());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 17, "common.show"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("value", ctx.pageSize());
      \u0275\u0275advance();
      \u0275\u0275domProperty("value", 10);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("value", 20);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("value", 50);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("value", 100);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", ctx.pageIndex() === 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "common.prev"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(22, 21, "common.page"), " ", ctx.pageIndex() + 1, " / ", ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", ctx.pageIndex() >= ctx.totalPages() - 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 23, "common.next"), " ");
    }
  }, dependencies: [CommonModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerComponent, [{
    type: Component,
    args: [{
      selector: "cis-pager",
      standalone: true,
      imports: [CommonModule, TranslatePipe],
      template: `
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.total' | translate }}: {{ total() }}</div>
      <div class="flex items-center gap-2">
        <label class="text-xs font-semibold text-slate-600 dark:text-slate-400">
          {{ 'common.show' | translate }}
          <select
            class="ml-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-xs text-slate-900 dark:text-slate-100"
            [value]="pageSize()"
            (change)="setPageSize(($any($event.target)).value)"
          >
            <option [value]="10">10</option>
            <option [value]="20">20</option>
            <option [value]="50">50</option>
            <option [value]="100">100</option>
          </select>
        </label>

        <button
          type="button"
          class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="prev()"
          [disabled]="pageIndex() === 0"
        >
          {{ 'common.prev' | translate }}
        </button>
        <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.page' | translate }} {{ pageIndex() + 1 }} / {{ totalPages() }}</div>
        <button
          type="button"
          class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="next()"
          [disabled]="pageIndex() >= totalPages() - 1"
        >
          {{ 'common.next' | translate }}
        </button>
      </div>
    </div>
  `
    }]
  }], null, { total: [{ type: Input, args: [{ isSignal: true, alias: "total", required: true }] }], pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false }] }, { type: Output, args: ["pageSizeChange"] }], pageIndex: [{ type: Input, args: [{ isSignal: true, alias: "pageIndex", required: false }] }, { type: Output, args: ["pageIndexChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagerComponent, { className: "PagerComponent", filePath: "app/shared/ui/pager/pager.component.ts", lineNumber: 48 });
})();

export {
  PagerComponent
};
//# sourceMappingURL=chunk-QINOI6LA.js.map
