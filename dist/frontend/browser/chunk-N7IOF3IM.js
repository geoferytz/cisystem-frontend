import {
  ModalComponent
} from "./chunk-Z6ZNV4D7.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgClass,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F3YP4G7X.js";

// src/app/shared/ui/confirm-dialog/confirm-dialog.component.ts
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  open = false;
  title = "Confirm";
  message = "Are you sure?";
  confirmText = "Confirm";
  cancelText = "Cancel";
  confirmButtonClass = "bg-[#B81104] hover:bg-[#7f0c03]";
  cancel = new EventEmitter();
  confirm = new EventEmitter();
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["cis-confirm-dialog"]], inputs: { open: "open", title: "title", message: "message", confirmText: "confirmText", cancelText: "cancelText", confirmButtonClass: "confirmButtonClass" }, outputs: { cancel: "cancel", confirm: "confirm" }, decls: 8, vars: 6, consts: [["maxWidthClass", "max-w-sm", 3, "close", "open", "title"], [1, "text-sm", "text-slate-600"], [1, "mt-4", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "hover:bg-slate-200", 3, "click"], ["type", "button", 1, "rounded-xl", "px-4", "py-2", "text-sm", "font-semibold", "text-white", 3, "click", "ngClass"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "cis-modal", 0);
      \u0275\u0275listener("close", function ConfirmDialogComponent_Template_cis_modal_close_0_listener() {
        return ctx.cancel.emit();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_4_listener() {
        return ctx.cancel.emit();
      });
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
        return ctx.confirm.emit();
      });
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("open", ctx.open)("title", ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.cancelText, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.confirmButtonClass);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.confirmText, " ");
    }
  }, dependencies: [CommonModule, NgClass, ModalComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "cis-confirm-dialog", standalone: true, imports: [CommonModule, ModalComponent], template: '<cis-modal [open]="open" [title]="title" maxWidthClass="max-w-sm" (close)="cancel.emit()">\r\n  <div class="text-sm text-slate-600">{{ message }}</div>\r\n\r\n  <div class="mt-4 flex items-center justify-end gap-2">\r\n    <button\r\n      type="button"\r\n      class="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-200"\r\n      (click)="cancel.emit()"\r\n    >\r\n      {{ cancelText }}\r\n    </button>\r\n    <button\r\n      type="button"\r\n      class="rounded-xl px-4 py-2 text-sm font-semibold text-white"\r\n      [ngClass]="confirmButtonClass"\r\n      (click)="confirm.emit()"\r\n    >\r\n      {{ confirmText }}\r\n    </button>\r\n  </div>\r\n</cis-modal>\r\n' }]
  }], null, { open: [{
    type: Input,
    args: [{ required: true }]
  }], title: [{
    type: Input
  }], message: [{
    type: Input
  }], confirmText: [{
    type: Input
  }], cancelText: [{
    type: Input
  }], confirmButtonClass: [{
    type: Input
  }], cancel: [{
    type: Output
  }], confirm: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "app/shared/ui/confirm-dialog/confirm-dialog.component.ts", lineNumber: 13 });
})();

export {
  ConfirmDialogComponent
};
//# sourceMappingURL=chunk-N7IOF3IM.js.map
