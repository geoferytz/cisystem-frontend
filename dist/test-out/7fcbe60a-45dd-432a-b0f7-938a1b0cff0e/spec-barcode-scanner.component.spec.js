import {
  BarcodeScannerComponent,
  init_barcode_scanner_component
} from "./chunk-FBQ2XIGF.js";
import "./chunk-UCASF6XM.js";
import "./chunk-MI63EHBC.js";
import {
  SimpleChange,
  TestBed,
  fakeAsync,
  init_core,
  init_testing,
  tick
} from "./chunk-NONR5GBI.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/ui/barcode-scanner/barcode-scanner.component.spec.ts
var require_barcode_scanner_component_spec = __commonJS({
  "src/app/shared/ui/barcode-scanner/barcode-scanner.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_barcode_scanner_component();
    describe("BarcodeScannerComponent", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({ imports: [BarcodeScannerComponent] }).compileComponents();
      }));
      it("emits close when cancelled", () => {
        const fixture = TestBed.createComponent(BarcodeScannerComponent);
        const component = fixture.componentInstance;
        const closed = jasmine.createSpy("closed");
        component.close.subscribe(closed);
        component.requestClose();
        expect(closed).toHaveBeenCalled();
        expect(component.status).toBe("idle");
      });
      it("shows a secure-context error when the camera API is unavailable", fakeAsync(() => {
        const fixture = TestBed.createComponent(BarcodeScannerComponent);
        const component = fixture.componentInstance;
        spyOnProperty(Navigator.prototype, "mediaDevices", "get").and.returnValue(void 0);
        component.open = true;
        fixture.detectChanges();
        component.ngOnChanges({ open: new SimpleChange(false, true, false) });
        tick();
        expect(component.status).toBe("error");
        expect(component.errorMessage).toContain("secure");
      }));
    });
  }
});
export default require_barcode_scanner_component_spec();
//# sourceMappingURL=spec-barcode-scanner.component.spec.js.map
