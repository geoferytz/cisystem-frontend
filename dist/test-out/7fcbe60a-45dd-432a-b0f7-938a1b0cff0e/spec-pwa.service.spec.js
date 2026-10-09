import {
  PwaService,
  SwUpdate,
  init_pwa_service,
  init_service_worker
} from "./chunk-DREZCIG3.js";
import {
  Subject,
  TestBed,
  init_esm,
  init_testing
} from "./chunk-NONR5GBI.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/core/pwa.service.spec.ts
var require_pwa_service_spec = __commonJS({
  "src/app/core/pwa.service.spec.ts"(exports) {
    init_testing();
    init_service_worker();
    init_esm();
    init_pwa_service();
    describe("PwaService", () => {
      let versions;
      beforeEach(() => {
        versions = new Subject();
        TestBed.configureTestingModule({
          providers: [{ provide: SwUpdate, useValue: { isEnabled: true, versionUpdates: versions } }]
        });
      });
      it("tracks connectivity without caching or queuing business requests", () => {
        const service = TestBed.inject(PwaService);
        window.dispatchEvent(new Event("offline"));
        expect(service.online()).toBeFalse();
        window.dispatchEvent(new Event("online"));
        expect(service.online()).toBeTrue();
      });
      it("defers installation until requested and consumes the prompt once", () => __async(null, null, function* () {
        const service = TestBed.inject(PwaService);
        const event = Object.assign(new Event("beforeinstallprompt", { cancelable: true }), {
          prompt: jasmine.createSpy("prompt").and.resolveTo(),
          userChoice: Promise.resolve({ outcome: "accepted", platform: "web" })
        });
        window.dispatchEvent(event);
        expect(event.defaultPrevented).toBeTrue();
        expect(service.canInstall()).toBeTrue();
        expect(event.prompt).not.toHaveBeenCalled();
        yield service.install();
        expect(event.prompt).toHaveBeenCalledTimes(1);
        expect(service.canInstall()).toBeFalse();
        yield service.install();
        expect(event.prompt).toHaveBeenCalledTimes(1);
      }));
      it("clears the install offer after installation", () => {
        const service = TestBed.inject(PwaService);
        window.dispatchEvent(new Event("beforeinstallprompt"));
        window.dispatchEvent(new Event("appinstalled"));
        expect(service.canInstall()).toBeFalse();
      });
      it("offers a ready update without reloading automatically", () => {
        const service = TestBed.inject(PwaService);
        versions.next({ type: "VERSION_READY", currentVersion: { hash: "old" }, latestVersion: { hash: "new" } });
        expect(service.updateAvailable()).toBeTrue();
      });
    });
  }
});
export default require_pwa_service_spec();
//# sourceMappingURL=spec-pwa.service.spec.js.map
