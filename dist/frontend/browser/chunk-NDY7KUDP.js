import {
  CommonModule,
  Component,
  HostListener,
  NgIf,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-F3YP4G7X.js";

// src/app/shared/ui/row-actions-menu/row-actions-menu.component.ts
var _c0 = ["*"];
function RowActionsMenuComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275listener("click", function RowActionsMenuComponent_ng_container_5_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275listener("click", function RowActionsMenuComponent_ng_container_5_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275projection(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("left", ctx_r1.left(), "px")("top", ctx_r1.openUp() ? null : ctx_r1.top(), "px")("bottom", ctx_r1.openUp() ? ctx_r1.bottom() : null, "px");
  }
}
var RowActionsMenuComponent = class _RowActionsMenuComponent {
  open = signal(false, ...ngDevMode ? [{ debugName: "open" }] : []);
  top = signal(0, ...ngDevMode ? [{ debugName: "top" }] : []);
  left = signal(0, ...ngDevMode ? [{ debugName: "left" }] : []);
  bottom = signal(0, ...ngDevMode ? [{ debugName: "bottom" }] : []);
  openUp = signal(false, ...ngDevMode ? [{ debugName: "openUp" }] : []);
  toggle(event) {
    event.stopPropagation();
    if (this.open()) {
      this.close();
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const menuWidth = 176;
    const spaceBelow = window.innerHeight - rect.bottom;
    this.openUp.set(spaceBelow < 200 && rect.top > spaceBelow);
    this.top.set(rect.bottom + 6);
    this.bottom.set(window.innerHeight - rect.top + 6);
    this.left.set(Math.max(8, Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 8)));
    this.open.set(true);
  }
  close() {
    this.open.set(false);
  }
  onResize() {
    this.close();
  }
  onScroll() {
    this.close();
  }
  onEscape() {
    this.close();
  }
  static \u0275fac = function RowActionsMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RowActionsMenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RowActionsMenuComponent, selectors: [["cis-row-actions"]], hostBindings: function RowActionsMenuComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function RowActionsMenuComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow)("scroll", function RowActionsMenuComponent_scroll_HostBindingHandler() {
        return ctx.onScroll();
      }, \u0275\u0275resolveWindow)("keydown.escape", function RowActionsMenuComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveWindow);
    }
  }, ngContentSelectors: _c0, decls: 6, vars: 2, consts: [["type", "button", "aria-haspopup", "menu", "aria-label", "Actions", 1, "grid", "h-8", "w-8", "place-items-center", "rounded-lg", "text-slate-500", "hover:bg-slate-100", "hover:text-slate-700", "dark:text-slate-400", "dark:hover:bg-slate-700", "dark:hover:text-slate-200", 3, "click"], ["viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true", 1, "h-5", "w-5"], ["cx", "12", "cy", "5", "r", "1.7"], ["cx", "12", "cy", "12", "r", "1.7"], ["cx", "12", "cy", "19", "r", "1.7"], [4, "ngIf"], ["aria-hidden", "true", 1, "fixed", "inset-0", "z-[70]", 3, "click"], ["role", "menu", 1, "fixed", "z-[71]", "w-44", "overflow-hidden", "rounded-xl", "bg-white", "py-1", "shadow-lg", "ring-1", "ring-slate-200", "dark:bg-slate-800", "dark:ring-slate-700", 3, "click"]], template: function RowActionsMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function RowActionsMenuComponent_Template_button_click_0_listener($event) {
        return ctx.toggle($event);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "circle", 2)(3, "circle", 3)(4, "circle", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, RowActionsMenuComponent_ng_container_5_Template, 4, 6, "ng-container", 5);
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-expanded", ctx.open());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.open());
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=row-actions-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowActionsMenuComponent, [{
    type: Component,
    args: [{ selector: "cis-row-actions", standalone: true, imports: [CommonModule], template: `
    <button
      type="button"
      class="grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
      [attr.aria-expanded]="open()"
      aria-haspopup="menu"
      aria-label="Actions"
      (click)="toggle($event)"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="5" r="1.7" />
        <circle cx="12" cy="12" r="1.7" />
        <circle cx="12" cy="19" r="1.7" />
      </svg>
    </button>
    <ng-container *ngIf="open()">
      <div class="fixed inset-0 z-[70]" (click)="close()" aria-hidden="true"></div>
      <div
        class="fixed z-[71] w-44 overflow-hidden rounded-xl bg-white py-1 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700"
        [style.left.px]="left()"
        [style.top.px]="openUp() ? null : top()"
        [style.bottom.px]="openUp() ? bottom() : null"
        role="menu"
        (click)="close()"
      >
        <ng-content />
      </div>
    </ng-container>
  `, styles: ["/* angular:styles/component:scss;41c3dbcfc2ee8fd9277cff75b34aa614ffa57c0b6e06685f230727bf41af9ecc;E:/CISYSTEM/frontend/src/app/shared/ui/row-actions-menu/row-actions-menu.component.ts */\n:host {\n  display: inline-block;\n}\n/*# sourceMappingURL=row-actions-menu.component.css.map */\n"] }]
  }], null, { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }], onScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }], onEscape: [{
    type: HostListener,
    args: ["window:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RowActionsMenuComponent, { className: "RowActionsMenuComponent", filePath: "app/shared/ui/row-actions-menu/row-actions-menu.component.ts", lineNumber: 45 });
})();

export {
  RowActionsMenuComponent
};
//# sourceMappingURL=chunk-NDY7KUDP.js.map
