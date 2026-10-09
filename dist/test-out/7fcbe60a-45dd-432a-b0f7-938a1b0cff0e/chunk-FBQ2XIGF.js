import {
  ModalComponent,
  init_modal_component
} from "./chunk-UCASF6XM.js";
import {
  CommonModule,
  init_common
} from "./chunk-MI63EHBC.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-NONR5GBI.js";
import {
  __async,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\shared\ui\barcode-scanner\barcode-scanner.component.html
var barcode_scanner_component_default;
var init_barcode_scanner_component = __esm({
  "angular:jit:template:src\\app\\shared\\ui\\barcode-scanner\\barcode-scanner.component.html"() {
    barcode_scanner_component_default = `<cis-modal [open]="open" [title]="title" maxWidthClass="max-w-md" (close)="requestClose()">
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
`;
  }
});

// angular:jit:style:src\app\shared\ui\barcode-scanner\barcode-scanner.component.scss
var barcode_scanner_component_default2;
var init_barcode_scanner_component2 = __esm({
  "angular:jit:style:src\\app\\shared\\ui\\barcode-scanner\\barcode-scanner.component.scss"() {
    barcode_scanner_component_default2 = "/* src/app/shared/ui/barcode-scanner/barcode-scanner.component.scss */\n.scanner-body {\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  background: #0f172a;\n}\n.scanner-video {\n  display: block;\n  width: 100%;\n  aspect-ratio: 4/3;\n  object-fit: cover;\n}\n.scanner-overlay {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n.scanner-frame {\n  width: 72%;\n  height: 55%;\n  border: 3px solid rgba(167, 139, 250, 0.95);\n  border-radius: 14px;\n  box-shadow: 0 0 0 9999px rgba(15, 23, 42, 0.4);\n}\n.scanner-status {\n  margin-top: 10px;\n  font-size: 13px;\n  color: #64748b;\n  text-align: center;\n}\n.scanner-error {\n  margin-top: 10px;\n  font-size: 13px;\n  color: #b81104;\n  text-align: center;\n}\n.scanner-actions {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=barcode-scanner.component.css.map */\n";
  }
});

// src/app/shared/ui/barcode-scanner/barcode-scanner.component.ts
var BarcodeScannerComponent;
var init_barcode_scanner_component3 = __esm({
  "src/app/shared/ui/barcode-scanner/barcode-scanner.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_barcode_scanner_component();
    init_barcode_scanner_component2();
    init_common();
    init_core();
    init_modal_component();
    BarcodeScannerComponent = class BarcodeScannerComponent2 {
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
              import("./chunk-PLLLCBVH.js"),
              import("./chunk-VME4KXUU.js")
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
      static propDecorators = {
        open: [{ type: Input, args: [{ required: true }] }],
        title: [{ type: Input }],
        scanned: [{ type: Output }],
        close: [{ type: Output }],
        preview: [{ type: ViewChild, args: ["preview"] }]
      };
    };
    BarcodeScannerComponent = __decorate([
      Component({
        selector: "cis-barcode-scanner",
        standalone: true,
        imports: [CommonModule, ModalComponent],
        template: barcode_scanner_component_default,
        styles: [barcode_scanner_component_default2]
      })
    ], BarcodeScannerComponent);
  }
});

export {
  BarcodeScannerComponent,
  init_barcode_scanner_component3 as init_barcode_scanner_component
};
//# sourceMappingURL=chunk-FBQ2XIGF.js.map
