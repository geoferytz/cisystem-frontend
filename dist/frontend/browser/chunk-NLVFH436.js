import {
  ModalComponent
} from "./chunk-Z6ZNV4D7.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TD7F3R7N.js";
import {
  MoneyPipe
} from "./chunk-WX6AFSP5.js";
import {
  TranslatePipe
} from "./chunk-DPFPPFWE.js";
import {
  ApplicationRef,
  CommonModule,
  Component,
  DatePipe,
  DestroyRef,
  EventEmitter,
  GraphqlService,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NEVER,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Output,
  RuntimeError,
  Subject,
  ViewChild,
  assertInInjectionContext,
  computed,
  filter,
  formatRuntimeError,
  inject,
  makeEnvironmentProviders,
  map,
  provideAppInitializer,
  setClassMetadata,
  signal,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-F3YP4G7X.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// src/app/shared/ui/barcode-scanner/barcode-scanner.component.ts
var _c0 = ["preview"];
function BarcodeScannerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementEnd();
  }
}
function BarcodeScannerComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Starting camera\u2026");
    \u0275\u0275elementEnd();
  }
}
function BarcodeScannerComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Point the camera at the product barcode.");
    \u0275\u0275elementEnd();
  }
}
function BarcodeScannerComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
var BarcodeScannerComponent = class _BarcodeScannerComponent {
  open = false;
  title = "Scan barcode";
  scanned = new EventEmitter();
  close = new EventEmitter();
  preview;
  status = "idle";
  errorMessage = "";
  controls;
  generation = 0;
  ngOnChanges(changes) {
    if (!changes["open"])
      return;
    if (this.open) {
      this.status = "starting";
      this.errorMessage = "";
      setTimeout(() => this.start());
    } else {
      this.stop();
    }
  }
  ngOnDestroy() {
    this.stop();
  }
  requestClose() {
    this.stop();
    this.close.emit();
  }
  start() {
    return __async(this, null, function* () {
      const generation = ++this.generation;
      if (!this.open)
        return;
      if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
        this.status = "error";
        this.errorMessage = "Camera scanning needs a secure (HTTPS) connection or localhost.";
        return;
      }
      const video = this.preview?.nativeElement;
      if (!video)
        return;
      try {
        const [{ BrowserMultiFormatReader, BarcodeFormat }, { DecodeHintType }] = yield Promise.all([
          import("./chunk-7BHFTDZJ.js"),
          import("./chunk-2MDFZV3M.js")
        ]);
        if (generation !== this.generation)
          return;
        const hints = /* @__PURE__ */ new Map();
        hints.set(DecodeHintType.POSSIBLE_FORMATS, [
          BarcodeFormat.EAN_13,
          BarcodeFormat.EAN_8,
          BarcodeFormat.UPC_A,
          BarcodeFormat.UPC_E,
          BarcodeFormat.CODE_128,
          BarcodeFormat.CODE_39,
          BarcodeFormat.CODE_93,
          BarcodeFormat.ITF,
          BarcodeFormat.QR_CODE,
          BarcodeFormat.DATA_MATRIX
        ]);
        const reader = new BrowserMultiFormatReader(hints, { delayBetweenScanAttempts: 200, delayBetweenScanSuccess: 1500 });
        const controls = yield reader.decodeFromConstraints({ video: { facingMode: "environment" }, audio: false }, video, (result, _error, scanControls) => {
          if (!result || generation !== this.generation)
            return;
          const text = result.getText().trim();
          if (!text)
            return;
          scanControls.stop();
          this.scanned.emit(text);
          this.requestClose();
        });
        if (generation !== this.generation) {
          controls.stop();
          return;
        }
        this.controls = controls;
        this.status = "scanning";
      } catch (error) {
        if (generation !== this.generation)
          return;
        this.status = "error";
        this.errorMessage = this.describeError(error);
      }
    });
  }
  stop() {
    this.generation++;
    this.controls?.stop();
    this.controls = void 0;
    const video = this.preview?.nativeElement;
    const stream = video?.srcObject;
    if (stream instanceof MediaStream)
      stream.getTracks().forEach((track) => track.stop());
    if (video)
      video.srcObject = null;
    if (this.status !== "error")
      this.status = "idle";
  }
  describeError(error) {
    if (error instanceof DOMException) {
      if (error.name === "NotAllowedError")
        return "Camera permission was denied. Allow camera access for this site and try again.";
      if (error.name === "NotFoundError" || error.name === "OverconstrainedError")
        return "No camera was found on this device.";
      if (error.name === "NotReadableError")
        return "The camera is busy in another app. Close it and try again.";
      if (error.name === "SecurityError")
        return "Camera scanning needs a secure (HTTPS) connection or localhost.";
    }
    return "Could not start the camera. Check browser permissions and try again.";
  }
  static \u0275fac = function BarcodeScannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarcodeScannerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarcodeScannerComponent, selectors: [["cis-barcode-scanner"]], viewQuery: function BarcodeScannerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.preview = _t.first);
    }
  }, inputs: { open: "open", title: "title" }, outputs: { scanned: "scanned", close: "close" }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 6, consts: [["preview", ""], ["maxWidthClass", "max-w-md", 3, "close", "open", "title"], [1, "scanner-body"], ["playsinline", "", "muted", "", "autoplay", "", 1, "scanner-video"], ["class", "scanner-overlay", "aria-hidden", "true", 4, "ngIf"], ["class", "scanner-status", "role", "status", 4, "ngIf"], ["class", "scanner-error", "role", "alert", 4, "ngIf"], [1, "scanner-actions"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "hover:bg-slate-200", "dark:bg-slate-700", "dark:text-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["aria-hidden", "true", 1, "scanner-overlay"], [1, "scanner-frame"], ["role", "status", 1, "scanner-status"], ["role", "alert", 1, "scanner-error"]], template: function BarcodeScannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "cis-modal", 1);
      \u0275\u0275listener("close", function BarcodeScannerComponent_Template_cis_modal_close_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestClose());
      });
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275element(2, "video", 3, 0);
      \u0275\u0275template(4, BarcodeScannerComponent_div_4_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, BarcodeScannerComponent_p_5_Template, 2, 0, "p", 5)(6, BarcodeScannerComponent_p_6_Template, 2, 0, "p", 5)(7, BarcodeScannerComponent_p_7_Template, 2, 1, "p", 6);
      \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
      \u0275\u0275listener("click", function BarcodeScannerComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestClose());
      });
      \u0275\u0275text(10, "Cancel");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("open", ctx.open)("title", ctx.title);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.status === "starting" || ctx.status === "scanning");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.status === "starting");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.status === "scanning");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.status === "error");
    }
  }, dependencies: [CommonModule, NgIf, ModalComponent], styles: ["\n\n.scanner-body[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  background: #0f172a;\n}\n.scanner-video[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  aspect-ratio: 4/3;\n  object-fit: cover;\n}\n.scanner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n.scanner-frame[_ngcontent-%COMP%] {\n  width: 72%;\n  height: 55%;\n  border: 3px solid rgba(167, 139, 250, 0.95);\n  border-radius: 14px;\n  box-shadow: 0 0 0 9999px rgba(15, 23, 42, 0.4);\n}\n.scanner-status[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 13px;\n  color: #64748b;\n  text-align: center;\n}\n.scanner-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 13px;\n  color: #b81104;\n  text-align: center;\n}\n.scanner-actions[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=barcode-scanner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarcodeScannerComponent, [{
    type: Component,
    args: [{ selector: "cis-barcode-scanner", standalone: true, imports: [CommonModule, ModalComponent], template: `<cis-modal [open]="open" [title]="title" maxWidthClass="max-w-md" (close)="requestClose()">
  <div class="scanner-body">
    <video #preview class="scanner-video" playsinline muted autoplay></video>
    <div class="scanner-overlay" *ngIf="status === 'starting' || status === 'scanning'" aria-hidden="true"><span class="scanner-frame"></span></div>
  </div>
  <p class="scanner-status" role="status" *ngIf="status === 'starting'">Starting camera\u2026</p>
  <p class="scanner-status" role="status" *ngIf="status === 'scanning'">Point the camera at the product barcode.</p>
  <p class="scanner-error" role="alert" *ngIf="status === 'error'">{{ errorMessage }}</p>
  <div class="scanner-actions">
    <button type="button" class="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600" (click)="requestClose()">Cancel</button>
  </div>
</cis-modal>
`, styles: ["/* src/app/shared/ui/barcode-scanner/barcode-scanner.component.scss */\n.scanner-body {\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  background: #0f172a;\n}\n.scanner-video {\n  display: block;\n  width: 100%;\n  aspect-ratio: 4/3;\n  object-fit: cover;\n}\n.scanner-overlay {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n.scanner-frame {\n  width: 72%;\n  height: 55%;\n  border: 3px solid rgba(167, 139, 250, 0.95);\n  border-radius: 14px;\n  box-shadow: 0 0 0 9999px rgba(15, 23, 42, 0.4);\n}\n.scanner-status {\n  margin-top: 10px;\n  font-size: 13px;\n  color: #64748b;\n  text-align: center;\n}\n.scanner-error {\n  margin-top: 10px;\n  font-size: 13px;\n  color: #b81104;\n  text-align: center;\n}\n.scanner-actions {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=barcode-scanner.component.css.map */\n"] }]
  }], null, { open: [{
    type: Input,
    args: [{ required: true }]
  }], title: [{
    type: Input
  }], scanned: [{
    type: Output
  }], close: [{
    type: Output
  }], preview: [{
    type: ViewChild,
    args: ["preview"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarcodeScannerComponent, { className: "BarcodeScannerComponent", filePath: "app/shared/ui/barcode-scanner/barcode-scanner.component.ts", lineNumber: 15 });
})();

// src/app/shared/ui/return-dialog/return-dialog.component.ts
function ReturnDialogComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.loading"));
  }
}
function ReturnDialogComponent_ng_container_10_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "customers.debt"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, s_r2.customerDebt));
  }
}
function ReturnDialogComponent_ng_container_10_div_19_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 32)(1, "input", 33);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_div_19_label_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.overrideWindow.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r3.overrideWindow());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "returns.overrideWindow"), " ");
  }
}
function ReturnDialogComponent_ng_container_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275template(4, ReturnDialogComponent_ng_container_10_div_19_label_4_Template, 4, 4, "label", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 4, "returns.windowPassed"), " (", s_r2.windowDays, " ", \u0275\u0275pipeBind1(3, 6, "returns.days"), ") ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.isAdmin);
  }
}
function ReturnDialogComponent_ng_container_10_tr_44_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \xB7 ", \u0275\u0275pipeBind1(2, 2, "returns.alreadyReturned"), ": ", r_r7.line.returnedQuantity);
  }
}
function ReturnDialogComponent_ng_container_10_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 35)(2, "input", 36);
    \u0275\u0275listener("change", function ReturnDialogComponent_ng_container_10_tr_44_Template_input_change_2_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRow(i_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 37)(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38);
    \u0275\u0275text(7);
    \u0275\u0275template(8, ReturnDialogComponent_ng_container_10_tr_44_span_8_Template, 3, 4, "span", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 39);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 41)(17, "input", 42);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_tr_44_Template_input_ngModelChange_17_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setQty(i_r6, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 37)(19, "select", 43);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_tr_44_Template_select_ngModelChange_19_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setCondition(i_r6, $event));
    });
    \u0275\u0275elementStart(20, "option", 44);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 45);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 46);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275classProp("opacity-50", r_r7.line.returnableQuantity <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", r_r7.selected)("disabled", r_r7.line.returnableQuantity <= 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r7.line.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.line.sku);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r7.line.returnedQuantity > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.line.soldQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.line.returnableQuantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, r_r7.line.effectiveUnitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275property("max", r_r7.line.returnableQuantity)("ngModel", r_r7.qty)("disabled", !r_r7.selected);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", r_r7.condition)("disabled", !r_r7.selected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 20, "returns.cond.RESALABLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 22, "returns.cond.DAMAGED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 24, "returns.cond.EXPIRED"));
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_48_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ReturnDialogComponent_ng_container_10_ng_container_48_div_7_button_1_Template_button_click_0_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.addProduct(p_r10));
    });
    \u0275\u0275elementStart(1, "span")(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 57);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", p_r10.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 3, p_r10.sellingPrice));
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_48_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.noData"));
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_48_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, ReturnDialogComponent_ng_container_10_ng_container_48_div_7_button_1_Template, 9, 5, "button", 53)(2, ReturnDialogComponent_ng_container_10_ng_container_48_div_7_div_2_Template, 3, 3, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredProducts());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.filteredProducts().length);
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_48_div_8_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 37)(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 41)(7, "input", 63);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_ng_container_48_div_8_tr_18_Template_input_ngModelChange_7_listener($event) {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.setNewQty(i_r12, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 41)(9, "input", 64);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_ng_container_48_div_8_tr_18_Template_input_ngModelChange_9_listener($event) {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.setNewPrice(i_r12, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 41)(14, "button", 65);
    \u0275\u0275listener("click", function ReturnDialogComponent_ng_container_10_ng_container_48_div_8_tr_18_Template_button_click_14_listener() {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.removeNewLine(i_r12));
    });
    \u0275\u0275text(15, "\xD7");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r13.sku);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", l_r13.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", l_r13.unitPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, l_r13.quantity * l_r13.unitPrice));
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_48_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "table", 14)(2, "thead", 15)(3, "tr")(4, "th", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 18);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 18);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 18);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, ReturnDialogComponent_ng_container_10_ng_container_48_div_8_tr_18_Template, 16, 7, "tr", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "common.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "common.quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "common.price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, "common.total"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.newLines());
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48)(5, "input", 49);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_ng_container_48_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.productQuery.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ReturnDialogComponent_ng_container_10_ng_container_48_div_7_Template, 3, 2, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ReturnDialogComponent_ng_container_10_ng_container_48_div_8_Template, 19, 13, "div", 51);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "returns.newProducts"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(6, 8, "returns.searchProduct")))("ngModel", ctx_r3.productQuery());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.productQuery().trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.newLines().length);
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 66)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "returns.newTotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, ctx_r3.newTotal()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.difference() > 0 ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300" : ctx_r3.difference() < 0 ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, ctx_r3.difference() > 0 ? "returns.customerPays" : ctx_r3.difference() < 0 ? "returns.shopRefunds" : "returns.evenExchange"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, ctx_r3.difference() < 0 ? -ctx_r3.difference() : ctx_r3.difference()));
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_60_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "money");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, ctx_r3.difference() - (ctx_r3.amountReceived() ?? ctx_r3.difference())), " ", \u0275\u0275pipeBind1(3, 4, "returns.debtNote"));
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "select", 67);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_ng_container_60_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.paymentMethod.set($event));
    });
    \u0275\u0275elementStart(5, "option", 68);
    \u0275\u0275text(6, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 69);
    \u0275\u0275text(8, "M-Pesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 70);
    \u0275\u0275text(10, "Airtel Money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 71);
    \u0275\u0275text(12, "Tigo-Pesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 72);
    \u0275\u0275text(14, "Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 73);
    \u0275\u0275text(16, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 74);
    \u0275\u0275text(18, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "label", 27);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "input", 75);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_ng_container_60_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.amountReceived.set($event === "" ? null : +$event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, ReturnDialogComponent_ng_container_10_ng_container_60_div_23_Template, 4, 6, "div", 76);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 5, "customers.paymentMethod"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.paymentMethod());
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 7, "customers.receivedAmount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.amountReceived() ?? ctx_r3.difference());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r3.amountReceived() ?? ctx_r3.difference()) < ctx_r3.difference());
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 82)(5, "input", 83);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_ng_container_61_div_1_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.debtCredit.set($event === "" || $event === null ? null : +$event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 84);
    \u0275\u0275listener("click", function ReturnDialogComponent_ng_container_10_ng_container_61_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.useFullDebtCredit());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "returns.debtChoice"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.debtCredit());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "returns.applyToDebt"));
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_61_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 67);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_ng_container_61_label_2_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.refundMethod.set($event));
    });
    \u0275\u0275elementStart(7, "option", 68);
    \u0275\u0275text(8, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 69);
    \u0275\u0275text(10, "M-Pesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 70);
    \u0275\u0275text(12, "Airtel Money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 71);
    \u0275\u0275text(14, "Tigo-Pesa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 73);
    \u0275\u0275text(16, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 74);
    \u0275\u0275text(18, "Other");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 3, "returns.refundMethod"), " \u2014 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, ctx_r3.cashRefund()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.refundMethod());
  }
}
function ReturnDialogComponent_ng_container_10_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReturnDialogComponent_ng_container_10_ng_container_61_div_1_Template, 9, 7, "div", 78)(2, ReturnDialogComponent_ng_container_10_ng_container_61_label_2_Template, 19, 7, "label", 79);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hasDebt());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.cashRefund() > 0);
  }
}
function ReturnDialogComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div")(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ReturnDialogComponent_ng_container_10_div_18_Template, 7, 6, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ReturnDialogComponent_ng_container_10_div_19_Template, 5, 8, "div", 12);
    \u0275\u0275elementStart(20, "div", 13)(21, "table", 14)(22, "thead", 15)(23, "tr");
    \u0275\u0275element(24, "th", 16);
    \u0275\u0275elementStart(25, "th", 17);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 18);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 18);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 18);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 18);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 17);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "tbody");
    \u0275\u0275template(44, ReturnDialogComponent_ng_container_10_tr_44_Template, 29, 26, "tr", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "p", 20);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, ReturnDialogComponent_ng_container_10_ng_container_48_Template, 9, 10, "ng-container", 4);
    \u0275\u0275elementStart(49, "div", 21)(50, "div", 22)(51, "div", 23)(52, "span", 24);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 25);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, ReturnDialogComponent_ng_container_10_ng_container_58_Template, 15, 13, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 26);
    \u0275\u0275template(60, ReturnDialogComponent_ng_container_10_ng_container_60_Template, 24, 9, "ng-container", 4)(61, ReturnDialogComponent_ng_container_10_ng_container_61_Template, 3, 2, "ng-container", 4);
    \u0275\u0275elementStart(62, "label", 27);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementStart(65, "input", 28);
    \u0275\u0275listener("ngModelChange", function ReturnDialogComponent_ng_container_10_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reason.set($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 24, "common.reference"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r2.referenceNumber || "#" + s_r2.salesOrderId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 26, "common.customer"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r2.customer || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 28, "customers.date"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 30, s_r2.soldAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.hasDebt());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r2.withinWindow);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 33, "common.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 35, "returns.sold"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 37, "returns.returnable"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 39, "common.price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 41, "returns.qtyToReturn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 43, "returns.condition"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.rows());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 45, "returns.conditionHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.mode() === "exchange");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 47, "returns.returnValue"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 49, ctx_r3.returnValue()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.mode() === "exchange");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.mode() === "exchange" && ctx_r3.difference() > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.refundTotal() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(64, 51, "returns.reason"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.reason());
  }
}
function ReturnDialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.error());
  }
}
var RESULT_FIELDS = "id reference isExchange returnValue lossAmount refundAmount debtCreditAmount settlementAmount exchangeReference";
var ReturnDialogComponent = class _ReturnDialogComponent {
  gql = inject(GraphqlService);
  open = false;
  salesOrderId = null;
  isAdmin = false;
  location = null;
  close = new EventEmitter();
  completed = new EventEmitter();
  mode = signal("return", ...ngDevMode ? [{ debugName: "mode" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  sale = signal(null, ...ngDevMode ? [{ debugName: "sale" }] : []);
  rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : []);
  reason = signal("", ...ngDevMode ? [{ debugName: "reason" }] : []);
  refundMethod = signal("CASH", ...ngDevMode ? [{ debugName: "refundMethod" }] : []);
  debtCredit = signal(null, ...ngDevMode ? [{ debugName: "debtCredit" }] : []);
  overrideWindow = signal(false, ...ngDevMode ? [{ debugName: "overrideWindow" }] : []);
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  productQuery = signal("", ...ngDevMode ? [{ debugName: "productQuery" }] : []);
  newLines = signal([], ...ngDevMode ? [{ debugName: "newLines" }] : []);
  paymentMethod = signal("CASH", ...ngDevMode ? [{ debugName: "paymentMethod" }] : []);
  amountReceived = signal(null, ...ngDevMode ? [{ debugName: "amountReceived" }] : []);
  selectedRows = computed(() => this.rows().filter((r) => r.selected && r.qty > 0), ...ngDevMode ? [{ debugName: "selectedRows" }] : []);
  returnValue = computed(() => this.selectedRows().reduce((s, r) => s + r.qty * r.line.effectiveUnitPrice, 0), ...ngDevMode ? [{ debugName: "returnValue" }] : []);
  newTotal = computed(() => this.newLines().reduce((s, l) => s + l.quantity * l.unitPrice, 0), ...ngDevMode ? [{ debugName: "newTotal" }] : []);
  /** + customer pays extra, − shop refunds the difference. */
  difference = computed(() => this.newTotal() - this.returnValue(), ...ngDevMode ? [{ debugName: "difference" }] : []);
  refundTotal = computed(() => this.mode() === "return" ? this.returnValue() : Math.max(0, -this.difference()), ...ngDevMode ? [{ debugName: "refundTotal" }] : []);
  cashRefund = computed(() => Math.max(0, this.refundTotal() - (this.debtCredit() ?? 0)), ...ngDevMode ? [{ debugName: "cashRefund" }] : []);
  hasDebt = computed(() => (this.sale()?.customerDebt ?? 0) > 0 && !!this.sale()?.customerId, ...ngDevMode ? [{ debugName: "hasDebt" }] : []);
  windowBlocked = computed(() => !!this.sale() && !this.sale().withinWindow && !(this.isAdmin && this.overrideWindow()), ...ngDevMode ? [{ debugName: "windowBlocked" }] : []);
  filteredProducts = computed(() => {
    const q = this.productQuery().trim().toLowerCase();
    const list = this.products().filter((p) => p.active);
    if (!q)
      return list.slice(0, 30);
    return list.filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)).slice(0, 30);
  }, ...ngDevMode ? [{ debugName: "filteredProducts" }] : []);
  canSubmit = computed(() => {
    if (this.saving() || this.loading() || this.windowBlocked() || !this.selectedRows().length)
      return false;
    if (this.mode() === "exchange" && !this.newLines().length)
      return false;
    const credit = this.debtCredit() ?? 0;
    if (credit < 0 || credit > this.refundTotal() + 1e-3)
      return false;
    if (credit > (this.sale()?.customerDebt ?? 0) + 1e-3)
      return false;
    return true;
  }, ...ngDevMode ? [{ debugName: "canSubmit" }] : []);
  ngOnChanges(changes) {
    if ((changes["open"] || changes["salesOrderId"]) && this.open && this.salesOrderId != null)
      this.load();
    if (changes["open"] && !this.open)
      this.reset();
  }
  setMode(mode) {
    this.mode.set(mode);
    this.error.set(null);
    if (mode === "exchange" && !this.products().length)
      this.loadProducts();
  }
  toggleRow(i) {
    this.rows.update((rows) => rows.map((r, idx) => idx === i ? __spreadProps(__spreadValues({}, r), { selected: !r.selected, qty: !r.selected && r.qty === 0 ? r.line.returnableQuantity : r.qty }) : r));
  }
  setQty(i, value) {
    const n = Math.floor(Number(value) || 0);
    this.rows.update((rows) => rows.map((r, idx) => idx === i ? __spreadProps(__spreadValues({}, r), { qty: Math.max(0, Math.min(r.line.returnableQuantity, n)) }) : r));
  }
  setCondition(i, value) {
    this.rows.update((rows) => rows.map((r, idx) => idx === i ? __spreadProps(__spreadValues({}, r), { condition: value }) : r));
  }
  addProduct(p) {
    this.newLines.update((lines) => {
      const existing = lines.find((l) => l.productId === p.id);
      if (existing)
        return lines.map((l) => l.productId === p.id ? __spreadProps(__spreadValues({}, l), { quantity: l.quantity + 1 }) : l);
      return [...lines, { productId: p.id, sku: p.sku, name: p.name, quantity: 1, unitPrice: Number(p.sellingPrice ?? 0) }];
    });
    this.productQuery.set("");
  }
  setNewQty(i, value) {
    const n = Math.max(1, Math.floor(Number(value) || 1));
    this.newLines.update((lines) => lines.map((l, idx) => idx === i ? __spreadProps(__spreadValues({}, l), { quantity: n }) : l));
  }
  setNewPrice(i, value) {
    const n = Math.max(0, Number(value) || 0);
    this.newLines.update((lines) => lines.map((l, idx) => idx === i ? __spreadProps(__spreadValues({}, l), { unitPrice: n }) : l));
  }
  removeNewLine(i) {
    this.newLines.update((lines) => lines.filter((_, idx) => idx !== i));
  }
  useFullDebtCredit() {
    this.debtCredit.set(Math.min(this.refundTotal(), this.sale()?.customerDebt ?? 0));
  }
  submit() {
    if (!this.canSubmit() || !this.sale())
      return;
    this.saving.set(true);
    this.error.set(null);
    const lines = this.selectedRows().map((r) => ({ salesOrderLineId: r.line.lineId, quantity: r.qty, condition: r.condition }));
    const common = {
      salesOrderId: this.sale().salesOrderId,
      reason: this.reason().trim() || null,
      refundMethod: this.refundMethod(),
      debtCreditAmount: this.debtCredit() || null,
      overrideWindow: this.isAdmin && this.overrideWindow()
    };
    const req = this.mode() === "return" ? this.gql.request(`mutation CreateSalesReturn($input: CreateSalesReturnInput!) { createSalesReturn(input: $input) { ${RESULT_FIELDS} } }`, { input: __spreadProps(__spreadValues({}, common), { lines }) }) : this.gql.request(`mutation CreateExchange($input: CreateExchangeInput!) { createExchange(input: $input) { ${RESULT_FIELDS} } }`, { input: __spreadProps(__spreadValues({}, common), {
      returnLines: lines,
      newLines: this.newLines().map((l) => ({ productId: l.productId, quantity: l.quantity, unitPrice: l.unitPrice, location: this.location })),
      paymentMethod: this.paymentMethod(),
      amountReceived: this.difference() > 0 ? this.amountReceived() ?? this.difference() : 0
    }) });
    req.subscribe({
      next: (res) => {
        this.saving.set(false);
        const result = res.createSalesReturn ?? res.createExchange;
        if (result)
          this.completed.emit(result);
        this.close.emit();
      },
      error: (e) => {
        this.saving.set(false);
        this.error.set(e instanceof Error ? e.message : "Failed to record return");
      }
    });
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.gql.request(`query ReturnableLines($id: ID!) { returnableLines(salesOrderId: $id) {
        salesOrderId referenceNumber customer customerId soldAt withinWindow windowDays customerDebt
        lines { lineId productId sku productName soldQuantity returnedQuantity returnableQuantity unitPrice effectiveUnitPrice location }
      } }`, { id: String(this.salesOrderId) }).subscribe({
      next: (res) => {
        this.sale.set(res.returnableLines);
        this.rows.set(res.returnableLines.lines.map((line) => ({ line, selected: false, qty: 0, condition: "RESALABLE" })));
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load sale");
        this.loading.set(false);
      }
    });
  }
  loadProducts() {
    this.gql.request("query ReturnProducts { products { id sku name sellingPrice active } }").subscribe({
      next: (res) => this.products.set(res.products ?? []),
      error: () => this.products.set([])
    });
  }
  reset() {
    this.mode.set("return");
    this.sale.set(null);
    this.rows.set([]);
    this.reason.set("");
    this.refundMethod.set("CASH");
    this.debtCredit.set(null);
    this.overrideWindow.set(false);
    this.newLines.set([]);
    this.productQuery.set("");
    this.paymentMethod.set("CASH");
    this.amountReceived.set(null);
    this.error.set(null);
  }
  static \u0275fac = function ReturnDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReturnDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReturnDialogComponent, selectors: [["cis-return-dialog"]], inputs: { open: "open", salesOrderId: "salesOrderId", isAdmin: "isAdmin", location: "location" }, outputs: { close: "close", completed: "completed" }, features: [\u0275\u0275NgOnChangesFeature], decls: 20, vars: 25, consts: [["maxWidthClass", "max-w-4xl", 3, "close", "open", "title"], [1, "flex", "gap-1", "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "p-1", "w-fit"], ["type", "button", 1, "rounded-lg", "px-4", "py-1.5", "text-xs", "font-semibold", 3, "click", "ngClass"], ["class", "mt-4 text-sm text-slate-500 dark:text-slate-400", 4, "ngIf"], [4, "ngIf"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-4", "flex", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click", "disabled"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], [1, "mt-4", "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "mt-3", "grid", "grid-cols-2", "gap-x-6", "gap-y-1", "text-xs", "text-slate-600", "dark:text-slate-400", "sm:grid-cols-4"], [1, "font-semibold"], ["class", "mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200", 4, "ngIf"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-xs"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "w-8", "px-3", "py-2"], [1, "px-3", "py-2", "text-left", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 3, "opacity-50", 4, "ngFor", "ngForOf"], [1, "mt-1", "text-[11px]", "text-slate-500", "dark:text-slate-400"], [1, "mt-4", "grid", "gap-3", "rounded-xl", "border", "border-slate-200", "bg-slate-50", "p-3", "text-sm", "dark:border-slate-600", "dark:bg-slate-700/50", "sm:grid-cols-2"], [1, "grid", "gap-1"], [1, "flex", "justify-between"], [1, "text-slate-600", "dark:text-slate-400"], [1, "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "grid", "gap-2"], [1, "grid", "gap-1", "text-xs", "text-slate-700", "dark:text-slate-300"], ["type", "text", "maxlength", "1000", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "ngModel"], [1, "text-red-600", "dark:text-red-400"], [1, "mt-3", "rounded-xl", "border", "border-amber-200", "bg-amber-50", "px-3", "py-2", "text-xs", "text-amber-800", "dark:border-amber-700", "dark:bg-amber-900/30", "dark:text-amber-200"], ["class", "ml-3 inline-flex items-center gap-1.5 font-semibold", 4, "ngIf"], [1, "ml-3", "inline-flex", "items-center", "gap-1.5", "font-semibold"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-center"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "px-3", "py-2"], [1, "text-[11px]", "text-slate-500", "dark:text-slate-400"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right"], ["type", "number", "min", "0", 1, "w-20", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-right", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "max", "ngModel", "disabled"], [1, "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "ngModel", "disabled"], ["value", "RESALABLE"], ["value", "DAMAGED"], ["value", "EXPIRED"], [1, "mt-4", "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "relative", "mt-2"], ["type", "text", 1, "w-full", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-xl bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700", 4, "ngIf"], ["class", "mt-2 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700", 4, "ngIf"], [1, "absolute", "z-10", "mt-1", "max-h-56", "w-full", "overflow-auto", "rounded-xl", "bg-white", "dark:bg-slate-800", "shadow-lg", "ring-1", "ring-slate-200", "dark:ring-slate-700"], ["type", "button", "class", "flex w-full items-center justify-between px-3 py-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-slate-700", 3, "click", 4, "ngFor", "ngForOf"], ["class", "px-3 py-2 text-xs text-slate-500", 4, "ngIf"], ["type", "button", 1, "flex", "w-full", "items-center", "justify-between", "px-3", "py-2", "text-left", "text-xs", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click"], [1, "text-slate-500"], [1, "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "px-3", "py-2", "text-xs", "text-slate-500"], [1, "mt-2", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-8"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [1, "text-[11px]", "text-slate-500"], ["type", "number", "min", "1", 1, "w-16", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-right", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "w-24", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-right", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Remove", 1, "text-slate-400", "hover:text-red-600", 3, "click"], [1, "mt-1", "flex", "justify-between", "rounded-lg", "px-2", "py-1.5", "font-bold", 3, "ngClass"], [1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "ngModel"], ["value", "CASH"], ["value", "M-PESA"], ["value", "AIRTEL_MONEY"], ["value", "TIGO_PESA"], ["value", "CARD"], ["value", "BANK"], ["value", "OTHER"], ["type", "number", "min", "0", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-semibold text-amber-600 dark:text-amber-400", 4, "ngIf"], [1, "text-xs", "font-semibold", "text-amber-600", "dark:text-amber-400"], ["class", "rounded-lg border border-amber-200 bg-amber-50 p-2 text-xs dark:border-amber-700 dark:bg-amber-900/20", 4, "ngIf"], ["class", "grid gap-1 text-xs text-slate-700 dark:text-slate-300", 4, "ngIf"], [1, "rounded-lg", "border", "border-amber-200", "bg-amber-50", "p-2", "text-xs", "dark:border-amber-700", "dark:bg-amber-900/20"], [1, "font-semibold", "text-amber-800", "dark:text-amber-200"], [1, "mt-1", "flex", "items-center", "gap-2"], ["type", "number", "min", "0", "placeholder", "0", 1, "w-32", "rounded-lg", "border", "border-amber-300", "bg-white", "px-2", "py-1", "text-slate-900", "dark:border-amber-600", "dark:bg-slate-800", "dark:text-slate-100", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "text-xs", "font-semibold", "text-amber-800", "underline", "dark:text-amber-200", 3, "click"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"]], template: function ReturnDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "cis-modal", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("close", function ReturnDialogComponent_Template_cis_modal_close_0_listener() {
        return !ctx.saving() && ctx.close.emit();
      });
      \u0275\u0275elementStart(2, "div", 1)(3, "button", 2);
      \u0275\u0275listener("click", function ReturnDialogComponent_Template_button_click_3_listener() {
        return ctx.setMode("return");
      });
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 2);
      \u0275\u0275listener("click", function ReturnDialogComponent_Template_button_click_6_listener() {
        return ctx.setMode("exchange");
      });
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ReturnDialogComponent_div_9_Template, 3, 3, "div", 3)(10, ReturnDialogComponent_ng_container_10_Template, 66, 53, "ng-container", 4)(11, ReturnDialogComponent_div_11_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(12, "div", 6)(13, "button", 7);
      \u0275\u0275listener("click", function ReturnDialogComponent_Template_button_click_13_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 8);
      \u0275\u0275listener("click", function ReturnDialogComponent_Template_button_click_16_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("open", ctx.open)("title", \u0275\u0275pipeBind1(1, 13, ctx.mode() === "return" ? "returns.title" : "returns.exchangeTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.mode() === "return" ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow" : "text-slate-500 dark:text-slate-400");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "returns.tabReturn"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.mode() === "exchange" ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow" : "text-slate-500 dark:text-slate-400");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 17, "returns.tabExchange"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sale());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 19, "common.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.canSubmit());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() ? \u0275\u0275pipeBind1(18, 21, "common.saving") : \u0275\u0275pipeBind1(19, 23, ctx.mode() === "return" ? "returns.submitReturn" : "returns.submitExchange"), " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, MaxValidator, NgModel, ModalComponent, DatePipe, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnDialogComponent, [{
    type: Component,
    args: [{ selector: "cis-return-dialog", standalone: true, imports: [CommonModule, FormsModule, ModalComponent, MoneyPipe, TranslatePipe], template: `<cis-modal [open]="open" [title]="(mode() === 'return' ? 'returns.title' : 'returns.exchangeTitle') | translate" maxWidthClass="max-w-4xl" (close)="!saving() && close.emit()">
  <!-- Mode tabs -->
  <div class="flex gap-1 rounded-xl bg-slate-100 dark:bg-slate-700 p-1 w-fit">
    <button type="button" class="rounded-lg px-4 py-1.5 text-xs font-semibold"
      [ngClass]="mode() === 'return' ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow' : 'text-slate-500 dark:text-slate-400'"
      (click)="setMode('return')">{{ 'returns.tabReturn' | translate }}</button>
    <button type="button" class="rounded-lg px-4 py-1.5 text-xs font-semibold"
      [ngClass]="mode() === 'exchange' ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow' : 'text-slate-500 dark:text-slate-400'"
      (click)="setMode('exchange')">{{ 'returns.tabExchange' | translate }}</button>
  </div>

  <div *ngIf="loading()" class="mt-4 text-sm text-slate-500 dark:text-slate-400">{{ 'common.loading' | translate }}</div>

  <ng-container *ngIf="sale() as s">
    <!-- Sale header -->
    <div class="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-600 dark:text-slate-400 sm:grid-cols-4">
      <div><span class="font-semibold">{{ 'common.reference' | translate }}:</span> {{ s.referenceNumber || '#' + s.salesOrderId }}</div>
      <div><span class="font-semibold">{{ 'common.customer' | translate }}:</span> {{ s.customer || '-' }}</div>
      <div><span class="font-semibold">{{ 'customers.date' | translate }}:</span> {{ s.soldAt | date:'medium' }}</div>
      <div *ngIf="hasDebt()"><span class="font-semibold">{{ 'customers.debt' | translate }}:</span> <span class="text-red-600 dark:text-red-400">{{ s.customerDebt | money }}</span></div>
    </div>

    <!-- Window warning -->
    <div *ngIf="!s.withinWindow" class="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200">
      {{ 'returns.windowPassed' | translate }} ({{ s.windowDays }} {{ 'returns.days' | translate }})
      <label *ngIf="isAdmin" class="ml-3 inline-flex items-center gap-1.5 font-semibold">
        <input type="checkbox" [ngModel]="overrideWindow()" (ngModelChange)="overrideWindow.set($event)" /> {{ 'returns.overrideWindow' | translate }}
      </label>
    </div>

    <!-- Return lines -->
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-xs">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="w-8 px-3 py-2"></th>
            <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.sold' | translate }}</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.returnable' | translate }}</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.price' | translate }}</th>
            <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.qtyToReturn' | translate }}</th>
            <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'returns.condition' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of rows(); let i = index" class="border-t border-slate-100 dark:border-slate-700" [class.opacity-50]="r.line.returnableQuantity <= 0">
            <td class="px-3 py-2 text-center"><input type="checkbox" [checked]="r.selected" (change)="toggleRow(i)" [disabled]="r.line.returnableQuantity <= 0" /></td>
            <td class="px-3 py-2">
              <div class="font-semibold text-slate-900 dark:text-slate-100">{{ r.line.productName }}</div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400">{{ r.line.sku }}<span *ngIf="r.line.returnedQuantity > 0"> \xB7 {{ 'returns.alreadyReturned' | translate }}: {{ r.line.returnedQuantity }}</span></div>
            </td>
            <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ r.line.soldQuantity }}</td>
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ r.line.returnableQuantity }}</td>
            <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ r.line.effectiveUnitPrice | money }}</td>
            <td class="px-3 py-2 text-right">
              <input type="number" min="0" [max]="r.line.returnableQuantity" class="w-20 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-right text-slate-900 dark:text-slate-100"
                [ngModel]="r.qty" (ngModelChange)="setQty(i, $event)" [disabled]="!r.selected" />
            </td>
            <td class="px-3 py-2">
              <select class="rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-slate-900 dark:text-slate-100" [ngModel]="r.condition" (ngModelChange)="setCondition(i, $event)" [disabled]="!r.selected">
                <option value="RESALABLE">{{ 'returns.cond.RESALABLE' | translate }}</option>
                <option value="DAMAGED">{{ 'returns.cond.DAMAGED' | translate }}</option>
                <option value="EXPIRED">{{ 'returns.cond.EXPIRED' | translate }}</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{{ 'returns.conditionHint' | translate }}</p>

    <!-- Exchange: new products -->
    <ng-container *ngIf="mode() === 'exchange'">
      <div class="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{{ 'returns.newProducts' | translate }}</div>
      <div class="relative mt-2">
        <input type="text" class="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
          [ngModel]="productQuery()" (ngModelChange)="productQuery.set($event)" placeholder="{{ 'returns.searchProduct' | translate }}" />
        <div *ngIf="productQuery().trim()" class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-xl bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
          <button *ngFor="let p of filteredProducts()" type="button" class="flex w-full items-center justify-between px-3 py-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-slate-700" (click)="addProduct(p)">
            <span><span class="font-semibold text-slate-900 dark:text-slate-100">{{ p.name }}</span> <span class="text-slate-500">\xB7 {{ p.sku }}</span></span>
            <span class="font-semibold text-slate-700 dark:text-slate-300">{{ p.sellingPrice | money }}</span>
          </button>
          <div *ngIf="!filteredProducts().length" class="px-3 py-2 text-xs text-slate-500">{{ 'common.noData' | translate }}</div>
        </div>
      </div>
      <div *ngIf="newLines().length" class="mt-2 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
        <table class="w-full border-collapse text-xs">
          <thead class="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>
              <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.quantity' | translate }}</th>
              <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.price' | translate }}</th>
              <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.total' | translate }}</th>
              <th class="w-8"></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let l of newLines(); let i = index" class="border-t border-slate-100 dark:border-slate-700">
              <td class="px-3 py-2"><div class="font-semibold text-slate-900 dark:text-slate-100">{{ l.name }}</div><div class="text-[11px] text-slate-500">{{ l.sku }}</div></td>
              <td class="px-3 py-2 text-right"><input type="number" min="1" class="w-16 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-right text-slate-900 dark:text-slate-100" [ngModel]="l.quantity" (ngModelChange)="setNewQty(i, $event)" /></td>
              <td class="px-3 py-2 text-right"><input type="number" min="0" class="w-24 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-right text-slate-900 dark:text-slate-100" [ngModel]="l.unitPrice" (ngModelChange)="setNewPrice(i, $event)" /></td>
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ l.quantity * l.unitPrice | money }}</td>
              <td class="px-3 py-2 text-right"><button type="button" class="text-slate-400 hover:text-red-600" (click)="removeNewLine(i)" aria-label="Remove">\xD7</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </ng-container>

    <!-- Summary -->
    <div class="mt-4 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-600 dark:bg-slate-700/50 sm:grid-cols-2">
      <div class="grid gap-1">
        <div class="flex justify-between"><span class="text-slate-600 dark:text-slate-400">{{ 'returns.returnValue' | translate }}</span><span class="font-semibold text-slate-900 dark:text-slate-100">{{ returnValue() | money }}</span></div>
        <ng-container *ngIf="mode() === 'exchange'">
          <div class="flex justify-between"><span class="text-slate-600 dark:text-slate-400">{{ 'returns.newTotal' | translate }}</span><span class="font-semibold text-slate-900 dark:text-slate-100">{{ newTotal() | money }}</span></div>
          <div class="mt-1 flex justify-between rounded-lg px-2 py-1.5 font-bold"
            [ngClass]="difference() > 0 ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300' : difference() < 0 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'">
            <span>{{ (difference() > 0 ? 'returns.customerPays' : difference() < 0 ? 'returns.shopRefunds' : 'returns.evenExchange') | translate }}</span>
            <span>{{ (difference() < 0 ? -difference() : difference()) | money }}</span>
          </div>
        </ng-container>
      </div>
      <div class="grid gap-2">
        <!-- Exchange: customer pays extra -->
        <ng-container *ngIf="mode() === 'exchange' && difference() > 0">
          <label class="grid gap-1 text-xs text-slate-700 dark:text-slate-300">{{ 'customers.paymentMethod' | translate }}
            <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" [ngModel]="paymentMethod()" (ngModelChange)="paymentMethod.set($event)">
              <option value="CASH">Cash</option><option value="M-PESA">M-Pesa</option><option value="AIRTEL_MONEY">Airtel Money</option><option value="TIGO_PESA">Tigo-Pesa</option><option value="CARD">Card</option><option value="BANK">Bank</option><option value="OTHER">Other</option>
            </select>
          </label>
          <label class="grid gap-1 text-xs text-slate-700 dark:text-slate-300">{{ 'customers.receivedAmount' | translate }}
            <input type="number" min="0" class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" [ngModel]="amountReceived() ?? difference()" (ngModelChange)="amountReceived.set($event === '' ? null : +$event)" />
          </label>
          <div *ngIf="(amountReceived() ?? difference()) < difference()" class="text-xs font-semibold text-amber-600 dark:text-amber-400">{{ (difference() - (amountReceived() ?? difference())) | money }} {{ 'returns.debtNote' | translate }}</div>
        </ng-container>

        <!-- Refund (return, or exchange where shop owes customer) -->
        <ng-container *ngIf="refundTotal() > 0">
          <div *ngIf="hasDebt()" class="rounded-lg border border-amber-200 bg-amber-50 p-2 text-xs dark:border-amber-700 dark:bg-amber-900/20">
            <div class="font-semibold text-amber-800 dark:text-amber-200">{{ 'returns.debtChoice' | translate }}</div>
            <div class="mt-1 flex items-center gap-2">
              <input type="number" min="0" class="w-32 rounded-lg border border-amber-300 bg-white px-2 py-1 text-slate-900 dark:border-amber-600 dark:bg-slate-800 dark:text-slate-100" [ngModel]="debtCredit()" (ngModelChange)="debtCredit.set($event === '' || $event === null ? null : +$event)" placeholder="0" />
              <button type="button" class="text-xs font-semibold text-amber-800 underline dark:text-amber-200" (click)="useFullDebtCredit()">{{ 'returns.applyToDebt' | translate }}</button>
            </div>
          </div>
          <label *ngIf="cashRefund() > 0" class="grid gap-1 text-xs text-slate-700 dark:text-slate-300">{{ 'returns.refundMethod' | translate }} \u2014 <strong>{{ cashRefund() | money }}</strong>
            <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" [ngModel]="refundMethod()" (ngModelChange)="refundMethod.set($event)">
              <option value="CASH">Cash</option><option value="M-PESA">M-Pesa</option><option value="AIRTEL_MONEY">Airtel Money</option><option value="TIGO_PESA">Tigo-Pesa</option><option value="BANK">Bank</option><option value="OTHER">Other</option>
            </select>
          </label>
        </ng-container>

        <label class="grid gap-1 text-xs text-slate-700 dark:text-slate-300">{{ 'returns.reason' | translate }}
          <input type="text" maxlength="1000" class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" [ngModel]="reason()" (ngModelChange)="reason.set($event)" />
        </label>
      </div>
    </div>
  </ng-container>

  <div *ngIf="error()" class="mt-3 text-sm text-[#B81104] dark:text-red-400">{{ error() }}</div>

  <div class="mt-4 flex justify-end gap-2">
    <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="close.emit()" [disabled]="saving()">{{ 'common.cancel' | translate }}</button>
    <button type="button" class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-60" (click)="submit()" [disabled]="!canSubmit()">
      {{ saving() ? ('common.saving' | translate) : ((mode() === 'return' ? 'returns.submitReturn' : 'returns.submitExchange') | translate) }}
    </button>
  </div>
</cis-modal>
` }]
  }], null, { open: [{
    type: Input,
    args: [{ required: true }]
  }], salesOrderId: [{
    type: Input
  }], isAdmin: [{
    type: Input
  }], location: [{
    type: Input
  }], close: [{
    type: Output
  }], completed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReturnDialogComponent, { className: "ReturnDialogComponent", filePath: "app/shared/ui/return-dialog/return-dialog.component.ts", lineNumber: 66 });
})();

// src/app/shared/services/receipt-print.service.ts
var ReceiptPrintService = class _ReceiptPrintService {
  esc(s) {
    return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  money(v) {
    return "TSH " + Math.round(v).toLocaleString("en-US");
  }
  /**
   * Opens a small 80mm-style receipt window and triggers the browser print dialog.
   * Works for a fresh counter sale or any stored sales order.
   */
  print(order) {
    const lines = order.lines ?? [];
    const gross = lines.reduce((s, l) => s + l.quantity * l.unitPrice, 0);
    const discount = Number(order.discount ?? 0);
    const net = Math.max(0, gross - discount);
    const returned = Number(order.returnedValue ?? 0);
    const netAfterReturns = Math.max(0, net - returned);
    const received = order.amountReceived == null ? netAfterReturns : Number(order.amountReceived);
    const debt = Math.max(0, netAfterReturns - received);
    const change = Math.max(0, received - netAfterReturns);
    const date = new Date(order.soldAt);
    const dateStr = isNaN(date.getTime()) ? order.soldAt : date.toLocaleString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
    const lineRows = lines.map((l) => {
      const total = l.quantity * l.unitPrice;
      const ret = (l.returnedQuantity ?? 0) > 0 ? `<div class="ret">\u21A9 RUDISHWA \xD7${l.returnedQuantity}</div>` : "";
      return `<tr>
        <td class="name"><div>${this.esc(l.productName)}</div><div class="muted">${l.quantity} \xD7 ${this.money(l.unitPrice)}</div>${ret}</td>
        <td class="amt">${this.money(total)}</td>
      </tr>`;
    }).join("");
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Receipt ${this.esc(order.referenceNumber ?? "")}</title>
<style>
  @page { size: 80mm auto; margin: 4mm; }
  * { box-sizing: border-box; margin: 0; }
  body { font-family: 'Courier New', monospace; font-size: 12px; color: #000; width: 72mm; margin: 0 auto; }
  .center { text-align: center; }
  .brand { font-size: 16px; font-weight: bold; letter-spacing: .5px; }
  .tag { font-size: 10px; font-style: italic; }
  .title { font-size: 12px; font-weight: bold; margin-top: 6px; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; }
  table { width: 100%; border-collapse: collapse; }
  .meta td { font-size: 11px; padding: 1px 0; }
  .meta td:last-child { text-align: right; }
  .items td { padding: 3px 0; border-bottom: 1px dotted #ccc; vertical-align: top; }
  .name .muted { font-size: 10px; color: #444; }
  .name .ret { font-size: 10px; color: #000; font-weight: bold; }
  .amt { text-align: right; white-space: nowrap; }
  .totals td { padding: 1px 0; font-size: 11px; }
  .totals td:last-child { text-align: right; white-space: nowrap; }
  .grand td { font-size: 14px; font-weight: bold; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; }
  .foot { margin-top: 8px; font-size: 10px; text-align: center; }
  .hr { border-top: 1px dashed #000; margin: 6px 0; }
</style></head><body>
  <div class="center brand">GYLA COSMETICS</div>
  <div class="center tag">Your Beauty, Our Duty</div>
  <div class="center title">SALES RECEIPT / RISITI</div>
  <table class="meta">
    <tr><td>Date / Tarehe</td><td>${this.esc(dateStr)}</td></tr>
    ${order.referenceNumber ? `<tr><td>Ref / Kumbukumbu</td><td>${this.esc(order.referenceNumber)}</td></tr>` : ""}
    ${order.customer ? `<tr><td>Customer / Mteja</td><td>${this.esc(order.customer)}</td></tr>` : ""}
    ${order.soldBy ? `<tr><td>Cashier / Muuzaji</td><td>${this.esc(order.soldBy)}</td></tr>` : ""}
    ${order.paymentMethod ? `<tr><td>Payment / Malipo</td><td>${this.esc(order.paymentMethod)}</td></tr>` : ""}
  </table>
  <div class="hr"></div>
  <table class="items">${lineRows}</table>
  <div class="hr"></div>
  <table class="totals">
    <tr><td>Subtotal / Jumla ndogo</td><td>${this.money(gross)}</td></tr>
    ${discount > 0 ? `<tr><td>Discount / Punguzo</td><td>-${this.money(discount)}</td></tr>` : ""}
    <tr class="grand"><td>TOTAL / JUMLA</td><td>${this.money(net)}</td></tr>
    ${returned > 0 ? `<tr><td>Returns / Marejesho</td><td>-${this.money(returned)}</td></tr><tr><td>Net / Iliyobaki</td><td>${this.money(netAfterReturns)}</td></tr>` : ""}
    <tr><td>Paid / Amelipa</td><td>${this.money(received)}</td></tr>
    ${change > 0 ? `<tr><td>Change / Chenji</td><td>${this.money(change)}</td></tr>` : ""}
    ${debt > 0 ? `<tr><td><b>DEBT / DENI</b></td><td><b>${this.money(debt)}</b></td></tr>` : ""}
  </table>
  <div class="foot">Asante kwa kununua!<br/>Karibu tena \u2014 Thank you</div>
  <script>window.onload = function(){ window.print(); }<\/script>
</body></html>`;
    const win = window.open("", "_blank", "width=380,height=600");
    if (!win)
      return;
    win.document.write(html);
    win.document.close();
  }
  static \u0275fac = function ReceiptPrintService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceiptPrintService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReceiptPrintService, factory: _ReceiptPrintService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceiptPrintService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/ui/receipt-dialog/receipt-dialog.component.ts
function ReceiptDialogComponent_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2, "Ref / Kumbukumbu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r2.referenceNumber);
  }
}
function ReceiptDialogComponent_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2, "Customer / Mteja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r2.customer);
  }
}
function ReceiptDialogComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2, "Cashier / Muuzaji");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r2.soldBy);
  }
}
function ReceiptDialogComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2, "Payment / Malipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(o_r2.paymentMethod);
  }
}
function ReceiptDialogComponent_ng_container_2_div_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u21A9 RUDISHWA \xD7", l_r3.returnedQuantity);
  }
}
function ReceiptDialogComponent_ng_container_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ReceiptDialogComponent_ng_container_2_div_19_div_10_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, ctx_r3.lineTotal(l_r3)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", l_r3.quantity, " \xD7 ", \u0275\u0275pipeBind1(9, 7, l_r3.unitPrice));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (l_r3.returnedQuantity ?? 0) > 0);
  }
}
function ReceiptDialogComponent_ng_container_2_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2, "Discount / Punguzo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind1(5, 1, ctx_r3.discount(o_r2)));
  }
}
function ReceiptDialogComponent_ng_container_2_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "span");
    \u0275\u0275text(3, "Returns / Marejesho");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "span");
    \u0275\u0275text(9, "Net / Iliyobaki");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const o_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("-", \u0275\u0275pipeBind1(6, 2, ctx_r3.returned(o_r2)));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 4, ctx_r3.netAfter(o_r2)));
  }
}
function ReceiptDialogComponent_ng_container_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2, "Change / Chenji");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r3.change(o_r2)));
  }
}
function ReceiptDialogComponent_ng_container_2_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span");
    \u0275\u0275text(2, "DEBT / DENI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r3.debt(o_r2)));
  }
}
function ReceiptDialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "GYLA COSMETICS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5, "Your Beauty, Our Duty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7, "SALES RECEIPT / RISITI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "span");
    \u0275\u0275text(11, "Date / Tarehe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ReceiptDialogComponent_ng_container_2_div_14_Template, 5, 1, "div", 8)(15, ReceiptDialogComponent_ng_container_2_div_15_Template, 5, 1, "div", 8)(16, ReceiptDialogComponent_ng_container_2_div_16_Template, 5, 1, "div", 8)(17, ReceiptDialogComponent_ng_container_2_div_17_Template, 5, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 9);
    \u0275\u0275template(19, ReceiptDialogComponent_ng_container_2_div_19_Template, 11, 9, "div", 10);
    \u0275\u0275element(20, "div", 9);
    \u0275\u0275elementStart(21, "div", 11)(22, "div", 7)(23, "span");
    \u0275\u0275text(24, "Subtotal / Jumla ndogo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, ReceiptDialogComponent_ng_container_2_div_28_Template, 6, 3, "div", 8);
    \u0275\u0275elementStart(29, "div", 12)(30, "span");
    \u0275\u0275text(31, "TOTAL / JUMLA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, ReceiptDialogComponent_ng_container_2_ng_container_35_Template, 13, 6, "ng-container", 1);
    \u0275\u0275elementStart(36, "div", 7)(37, "span");
    \u0275\u0275text(38, "Paid / Amelipa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, ReceiptDialogComponent_ng_container_2_div_42_Template, 6, 3, "div", 8)(43, ReceiptDialogComponent_ng_container_2_div_43_Template, 6, 3, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 14);
    \u0275\u0275text(45, "Asante kwa kununua!");
    \u0275\u0275element(46, "br");
    \u0275\u0275text(47, "Karibu tena \u2014 Thank you");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 15)(49, "button", 16);
    \u0275\u0275listener("click", function ReceiptDialogComponent_ng_container_2_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.close.emit());
    });
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 17);
    \u0275\u0275listener("click", function ReceiptDialogComponent_ng_container_2_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.doPrint());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 18);
    \u0275\u0275element(54, "path", 19)(55, "path", 20)(56, "rect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const o_r2 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(o_r2.soldAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r2.referenceNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r2.customer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r2.soldBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r2.paymentMethod);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", o_r2.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 15, ctx_r3.gross(o_r2)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.discount(o_r2) > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 17, ctx_r3.net(o_r2)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.returned(o_r2) > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 19, ctx_r3.received(o_r2)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.change(o_r2) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.debt(o_r2) > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 21, "common.cancel"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 23, "sales.printReceipt"), " ");
  }
}
var ReceiptDialogComponent = class _ReceiptDialogComponent {
  printer = inject(ReceiptPrintService);
  open = false;
  order = null;
  close = new EventEmitter();
  lineTotal(l) {
    return Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0);
  }
  gross(o) {
    return (o.lines ?? []).reduce((s, l) => s + this.lineTotal(l), 0);
  }
  discount(o) {
    return Number(o.discount ?? 0);
  }
  net(o) {
    return Math.max(0, this.gross(o) - this.discount(o));
  }
  returned(o) {
    return Number(o.returnedValue ?? 0);
  }
  netAfter(o) {
    return Math.max(0, this.net(o) - this.returned(o));
  }
  received(o) {
    return o.amountReceived == null ? this.netAfter(o) : Number(o.amountReceived);
  }
  change(o) {
    return Math.max(0, this.received(o) - this.netAfter(o));
  }
  debt(o) {
    return Math.max(0, this.netAfter(o) - this.received(o));
  }
  doPrint() {
    if (this.order)
      this.printer.print(this.order);
  }
  static \u0275fac = function ReceiptDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceiptDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceiptDialogComponent, selectors: [["cis-receipt-dialog"]], inputs: { open: "open", order: "order" }, outputs: { close: "close" }, decls: 3, vars: 5, consts: [["maxWidthClass", "max-w-sm", 3, "close", "open", "title"], [4, "ngIf"], [1, "mx-auto", "w-full", "max-w-[300px]", "rounded-lg", "bg-white", "p-4", "font-mono", "text-[12px]", "leading-5", "text-black", "shadow", "ring-1", "ring-slate-200"], [1, "text-center", "text-[15px]", "font-bold", "tracking-wide"], [1, "text-center", "text-[10px]", "italic"], [1, "my-2", "border-y", "border-dashed", "border-black", "py-1", "text-center", "font-bold"], [1, "text-[11px]"], [1, "flex", "justify-between"], ["class", "flex justify-between", 4, "ngIf"], [1, "my-2", "border-t", "border-dashed", "border-black"], ["class", "border-b border-dotted border-slate-300 py-1.5", 4, "ngFor", "ngForOf"], [1, "space-y-0.5", "text-[11px]"], [1, "my-1", "flex", "justify-between", "border-y", "border-dashed", "border-black", "py-1", "text-[14px]", "font-bold"], ["class", "flex justify-between font-bold", 4, "ngIf"], [1, "mt-3", "text-center", "text-[10px]"], [1, "mt-4", "flex", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "border", "border-slate-200", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-600", "hover:bg-slate-50", "dark:border-slate-600", "dark:text-slate-300", "dark:hover:bg-slate-700", 3, "click"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 9V4a1 1 0 011-1h10a1 1 0 011 1v5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"], ["x", "6", "y", "14", "width", "12", "height", "7", "rx", "1"], [1, "border-b", "border-dotted", "border-slate-300", "py-1.5"], [1, "flex", "justify-between", "gap-2"], [1, "min-w-0", "flex-1"], [1, "whitespace-nowrap"], [1, "text-[10px]", "text-slate-600"], ["class", "text-[10px] font-bold", 4, "ngIf"], [1, "text-[10px]", "font-bold"], [1, "flex", "justify-between", "font-bold"]], template: function ReceiptDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "cis-modal", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("close", function ReceiptDialogComponent_Template_cis_modal_close_0_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275template(2, ReceiptDialogComponent_ng_container_2_Template, 59, 25, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("open", ctx.open)("title", \u0275\u0275pipeBind1(1, 3, "receipt.title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.order);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ModalComponent, TranslatePipe, MoneyPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceiptDialogComponent, [{
    type: Component,
    args: [{
      selector: "cis-receipt-dialog",
      standalone: true,
      imports: [CommonModule, ModalComponent, TranslatePipe, MoneyPipe],
      template: `
  <cis-modal [open]="open" [title]="'receipt.title' | translate" maxWidthClass="max-w-sm" (close)="close.emit()">
    <ng-container *ngIf="order as o">
      <!-- Paper-style receipt preview -->
      <div class="mx-auto w-full max-w-[300px] rounded-lg bg-white p-4 font-mono text-[12px] leading-5 text-black shadow ring-1 ring-slate-200">
        <div class="text-center text-[15px] font-bold tracking-wide">GYLA COSMETICS</div>
        <div class="text-center text-[10px] italic">Your Beauty, Our Duty</div>
        <div class="my-2 border-y border-dashed border-black py-1 text-center font-bold">SALES RECEIPT / RISITI</div>

        <div class="text-[11px]">
          <div class="flex justify-between"><span>Date / Tarehe</span><span>{{ o.soldAt }}</span></div>
          <div class="flex justify-between" *ngIf="o.referenceNumber"><span>Ref / Kumbukumbu</span><span>{{ o.referenceNumber }}</span></div>
          <div class="flex justify-between" *ngIf="o.customer"><span>Customer / Mteja</span><span>{{ o.customer }}</span></div>
          <div class="flex justify-between" *ngIf="o.soldBy"><span>Cashier / Muuzaji</span><span>{{ o.soldBy }}</span></div>
          <div class="flex justify-between" *ngIf="o.paymentMethod"><span>Payment / Malipo</span><span>{{ o.paymentMethod }}</span></div>
        </div>

        <div class="my-2 border-t border-dashed border-black"></div>

        <div class="border-b border-dotted border-slate-300 py-1.5" *ngFor="let l of o.lines">
          <div class="flex justify-between gap-2">
            <span class="min-w-0 flex-1">{{ l.productName }}</span>
            <span class="whitespace-nowrap">{{ lineTotal(l) | money }}</span>
          </div>
          <div class="text-[10px] text-slate-600">{{ l.quantity }} \xD7 {{ l.unitPrice | money }}</div>
          <div class="text-[10px] font-bold" *ngIf="(l.returnedQuantity ?? 0) > 0">\u21A9 RUDISHWA \xD7{{ l.returnedQuantity }}</div>
        </div>

        <div class="my-2 border-t border-dashed border-black"></div>

        <div class="space-y-0.5 text-[11px]">
          <div class="flex justify-between"><span>Subtotal / Jumla ndogo</span><span>{{ gross(o) | money }}</span></div>
          <div class="flex justify-between" *ngIf="discount(o) > 0"><span>Discount / Punguzo</span><span>-{{ discount(o) | money }}</span></div>
          <div class="my-1 flex justify-between border-y border-dashed border-black py-1 text-[14px] font-bold"><span>TOTAL / JUMLA</span><span>{{ net(o) | money }}</span></div>
          <ng-container *ngIf="returned(o) > 0">
            <div class="flex justify-between"><span>Returns / Marejesho</span><span>-{{ returned(o) | money }}</span></div>
            <div class="flex justify-between"><span>Net / Iliyobaki</span><span>{{ netAfter(o) | money }}</span></div>
          </ng-container>
          <div class="flex justify-between"><span>Paid / Amelipa</span><span>{{ received(o) | money }}</span></div>
          <div class="flex justify-between" *ngIf="change(o) > 0"><span>Change / Chenji</span><span>{{ change(o) | money }}</span></div>
          <div class="flex justify-between font-bold" *ngIf="debt(o) > 0"><span>DEBT / DENI</span><span>{{ debt(o) | money }}</span></div>
        </div>

        <div class="mt-3 text-center text-[10px]">Asante kwa kununua!<br/>Karibu tena \u2014 Thank you</div>
      </div>

      <div class="mt-4 flex justify-end gap-2">
        <button type="button" class="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" (click)="close.emit()">
          {{ 'common.cancel' | translate }}
        </button>
        <button type="button" class="inline-flex items-center gap-1.5 rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600" (click)="doPrint()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9V4a1 1 0 011-1h10a1 1 0 011 1v5" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="7" rx="1" /></svg>
          {{ 'sales.printReceipt' | translate }}
        </button>
      </div>
    </ng-container>
  </cis-modal>
  `
    }]
  }], null, { open: [{
    type: Input
  }], order: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceiptDialogComponent, { className: "ReceiptDialogComponent", filePath: "app/shared/ui/receipt-dialog/receipt-dialog.component.ts", lineNumber: 76 });
})();

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  /**
   * Emits the payloads of the received push notification messages.
   */
  messages;
  /**
   * Emits the payloads of the received push notification messages as well as the action the user
   * interacted with. If no action was used the `action` property contains an empty string `''`.
   *
   * Note that the `notification` property does **not** contain a
   * [Notification][Mozilla Notification] object but rather a
   * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
   * object that also includes the `title` of the [Notification][Mozilla Notification] object.
   *
   * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
   *
   * @see [Notification click handling](ecosystem/service-workers/push-notifications#notification-click-handling)
   *
   */
  notificationClicks;
  /**
   * Emits the payloads of notifications that were closed, along with the action (if any)
   * associated with the close event. If no action was used, the `action` property contains
   * an empty string `''`.
   *
   * Note that the `notification` property does **not** contain a
   * [Notification][Mozilla Notification] object but rather a
   * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
   * object that also includes the `title` of the [Notification][Mozilla Notification] object.
   *
   * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
   */
  notificationCloses;
  /**
   * Emits updates to the push subscription, including both the previous (`oldSubscription`)
   * and current (`newSubscription`) values. Either subscription may be `null`, depending on
   * the context:
   *
   * - `oldSubscription` is `null` if no previous subscription existed.
   * - `newSubscription` is `null` if the subscription was invalidated and not replaced.
   *
   * This stream allows clients to react to automatic changes in push subscriptions,
   * such as those triggered by browser expiration or key rotation.
   *
   * [Push API]: https://w3c.github.io/push-api
   */
  pushSubscriptionChanges;
  /**
   * Emits the currently active
   * [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
   * associated to the Service Worker registration or `null` if there is no subscription.
   */
  subscription;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  /**
   * Subscribes to Web Push Notifications,
   * after requesting and receiving user permission.
   *
   * @param options An object containing the `serverPublicKey` string.
   * @returns A Promise that resolves to the new subscription object.
   */
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  /**
   * Unsubscribes from Service Worker push notifications.
   *
   * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
   *          active subscription or the unsubscribe operation fails.
   */
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  /**
   * Emits a `VersionDetectedEvent` event whenever a new version is detected on the server.
   *
   * Emits a `VersionInstallationFailedEvent` event whenever checking for or downloading a new
   * version fails.
   *
   * Emits a `VersionReadyEvent` event whenever a new version has been downloaded and is ready for
   * activation.
   *
   * @see [Version updates](ecosystem/service-workers/communications#version-updates)
   *
   */
  versionUpdates;
  /**
   * Emits an `UnrecoverableStateEvent` event whenever the version of the app used by the service
   * worker to serve this client is in a broken state that cannot be recovered from without a full
   * page reload.
   */
  unrecoverable;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  /**
   * Checks for an update and waits until the new version is downloaded from the server and ready
   * for activation.
   *
   * @returns a promise that
   * - resolves to `true` if a new version was found and is ready to be activated.
   * - resolves to `false` if no new version was found
   * - rejects if any error occurs
   */
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  /**
   * Updates the current client (i.e. browser tab) to the latest version that is ready for
   * activation.
   *
   * In most cases, you should not use this method and instead should update a client by reloading
   * the page.
   *
   * <div class="docs-alert docs-alert-important">
   *
   * Updating a client without reloading can easily result in a broken application due to a version
   * mismatch between the application shell and other page resources,
   * such as lazy-loaded chunks, whose filenames may change between
   * versions.
   *
   * Only use this method, if you are certain it is safe for your specific use case.
   *
   * </div>
   *
   * @returns a promise that
   *  - resolves to `true` if an update was activated successfully
   *  - resolves to `false` if no update was available (for example, the client was already on the
   *    latest version).
   *  - rejects if any error occurs
   */
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory(opts, injector) {
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  /**
   * Whether the ServiceWorker will be registered and the related services (such as `SwPush` and
   * `SwUpdate`) will attempt to communicate and interact with it.
   *
   * Default: true
   */
  enabled;
  /**
   * The value of the setting used to determine the circumstances in which the browser
   * will consult the HTTP cache when it tries to update the service worker or any scripts that are imported via importScripts().
   * [ServiceWorkerRegistration.updateViaCache](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/updateViaCache)
   */
  updateViaCache;
  /**
   * The type of the ServiceWorker script to register.
   * [ServiceWorkerRegistration#type](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#type)
   * - `classic`: Registers the script as a classic worker. ES module features such as `import` and `export` are NOT allowed in the script.
   * - `module`: Registers the script as an ES module. Allows use of `import`/`export` syntax and module features.
   *
   * @default 'classic'
   */
  type;
  /**
   * A URL that defines the ServiceWorker's registration scope; that is, what range of URLs it can
   * control. It will be used when calling
   * [ServiceWorkerContainer#register()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register).
   */
  scope;
  /**
   * Defines the ServiceWorker registration strategy, which determines when it will be registered
   * with the browser.
   *
   * The default behavior of registering once the application stabilizes (i.e. as soon as there are
   * no pending micro- and macro-tasks) is designed to register the ServiceWorker as soon as
   * possible but without affecting the application's first time load.
   *
   * Still, there might be cases where you want more control over when the ServiceWorker is
   * registered (for example, there might be a long-running timeout or polling interval, preventing
   * the app from stabilizing). The available option are:
   *
   * - `registerWhenStable:<timeout>`: Register as soon as the application stabilizes (no pending
   *     micro-/macro-tasks) but no later than `<timeout>` milliseconds. If the app hasn't
   *     stabilized after `<timeout>` milliseconds (for example, due to a recurrent asynchronous
   *     task), the ServiceWorker will be registered anyway.
   *     If `<timeout>` is omitted, the ServiceWorker will only be registered once the app
   *     stabilizes.
   * - `registerImmediately`: Register immediately.
   * - `registerWithDelay:<timeout>`: Register with a delay of `<timeout>` milliseconds. For
   *     example, use `registerWithDelay:5000` to register the ServiceWorker after 5 seconds. If
   *     `<timeout>` is omitted, is defaults to `0`, which will register the ServiceWorker as soon
   *     as possible but still asynchronously, once all pending micro-tasks are completed.
   * - An Observable factory function: A function that returns an `Observable`.
   *     The function will be used at runtime to obtain and subscribe to the `Observable` and the
   *     ServiceWorker will be registered as soon as the first value is emitted.
   *
   * Default: 'registerWhenStable:30000'
   */
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory,
    deps: [SwRegistrationOptions, Injector]
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  /**
   * Register the given Angular Service Worker script.
   *
   * If `enabled` is set to `false` in the given options, the module will behave as if service
   * workers are not supported by the browser, and the service worker will not be registered.
   */
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// src/app/core/pwa.service.ts
var PwaService = class _PwaService {
  updates = inject(SwUpdate);
  destroyRef = inject(DestroyRef);
  promptEvent = signal(null, ...ngDevMode ? [{ debugName: "promptEvent" }] : []);
  online = signal(typeof navigator === "undefined" || navigator.onLine, ...ngDevMode ? [{ debugName: "online" }] : []);
  updateAvailable = signal(false, ...ngDevMode ? [{ debugName: "updateAvailable" }] : []);
  installing = signal(false, ...ngDevMode ? [{ debugName: "installing" }] : []);
  installError = signal(null, ...ngDevMode ? [{ debugName: "installError" }] : []);
  canInstall = computed(() => this.promptEvent() !== null && !this.installing(), ...ngDevMode ? [{ debugName: "canInstall" }] : []);
  constructor() {
    if (typeof window !== "undefined") {
      const online = () => this.online.set(true);
      const offline = () => this.online.set(false);
      const beforeInstall = (event) => {
        event.preventDefault();
        this.promptEvent.set(event);
        this.installError.set(null);
      };
      const installed = () => this.promptEvent.set(null);
      window.addEventListener("online", online);
      window.addEventListener("offline", offline);
      window.addEventListener("beforeinstallprompt", beforeInstall);
      window.addEventListener("appinstalled", installed);
      this.destroyRef.onDestroy(() => {
        window.removeEventListener("online", online);
        window.removeEventListener("offline", offline);
        window.removeEventListener("beforeinstallprompt", beforeInstall);
        window.removeEventListener("appinstalled", installed);
      });
    }
    if (this.updates.isEnabled) {
      this.updates.versionUpdates.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
        if (event.type === "VERSION_READY")
          this.updateAvailable.set(true);
      });
    }
  }
  install() {
    return __async(this, null, function* () {
      const event = this.promptEvent();
      if (!event || this.installing())
        return;
      this.installing.set(true);
      this.installError.set(null);
      try {
        yield event.prompt();
        yield event.userChoice;
      } catch {
        this.installError.set("Use your browser menu to install or add this app to your home screen.");
      } finally {
        this.promptEvent.set(null);
        this.installing.set(false);
      }
    });
  }
  reload() {
    window.location.reload();
  }
  static \u0275fac = function PwaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PwaService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PwaService, factory: _PwaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PwaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  provideServiceWorker,
  takeUntilDestroyed,
  BarcodeScannerComponent,
  ReturnDialogComponent,
  ReceiptDialogComponent,
  PwaService
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=chunk-NLVFH436.js.map
