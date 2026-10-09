import {
  SessionService,
  init_session_service
} from "./chunk-2BJUO2HJ.js";
import {
  PwaService,
  init_pwa_service
} from "./chunk-DREZCIG3.js";
import {
  RouterOutlet,
  init_router,
  provideRouter
} from "./chunk-JMVI6IKZ.js";
import {
  GraphqlService,
  init_graphql_service
} from "./chunk-W65P7JEF.js";
import "./chunk-TLWMLDWP.js";
import "./chunk-MI63EHBC.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  inject,
  of,
  signal
} from "./chunk-NONR5GBI.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:style:src\app\app.scss
var app_default;
var init_app = __esm({
  "angular:jit:style:src\\app\\app.scss"() {
    app_default = "/* src/app/app.scss */\n.cis-pwa-status {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 8px 16px;\n  padding: 10px max(16px, env(safe-area-inset-right)) 10px max(16px, env(safe-area-inset-left));\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n  font-size: 13px;\n}\n.cis-pwa-status button,\n.cis-install-footer button {\n  min-height: 44px;\n  padding: 8px 16px;\n  border-radius: 12px;\n  background: var(--cis-primary);\n  color: #ffffff;\n  font-weight: 600;\n}\n.cis-install-footer {\n  position: fixed;\n  right: max(16px, env(safe-area-inset-right));\n  bottom: max(16px, env(safe-area-inset-bottom));\n  z-index: 20;\n}\n.cis-install-footer button {\n  box-shadow: 0 4px 16px rgba(var(--cis-primary-rgb), 0.2);\n}\n@media (max-width: 767px) {\n  .cis-install-footer {\n    bottom: calc(84px + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app2 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_core();
    init_pwa_service();
    init_session_service();
    init_router();
    App = class App2 {
      pwa = inject(PwaService);
      title = signal("frontend");
      constructor() {
        inject(SessionService).start();
      }
      static ctorParameters = () => [];
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet],
        template: `
    @if (!pwa.online() || pwa.updateAvailable() || pwa.installError()) {
      <aside class="cis-pwa-status" aria-label="App status">
        @if (!pwa.online()) {
          <p role="status">You are offline. Live data and saving require a connection.</p>
        }
        @if (pwa.updateAvailable()) {
          <p role="status">An update is ready. Save your work before reloading.</p>
          <button type="button" (click)="pwa.reload()">Reload app</button>
        }
        @if (pwa.installError()) {
          <p role="status">{{ pwa.installError() }}</p>
        }
      </aside>
    }
    <router-outlet />
    @if (pwa.canInstall()) {
      <footer class="cis-install-footer" aria-label="App installation">
        <button type="button" (click)="pwa.install()">Install GYLA</button>
      </footer>
    }
  `,
        styles: [app_default]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_core();
    init_testing();
    init_router();
    init_esm();
    init_app2();
    init_graphql_service();
    init_pwa_service();
    describe("App", () => {
      const pwa = {
        online: signal(true),
        updateAvailable: signal(false),
        canInstall: signal(false),
        installError: signal(null),
        install: jasmine.createSpy("install"),
        reload: jasmine.createSpy("reload")
      };
      beforeEach(() => __async(null, null, function* () {
        pwa.online.set(true);
        pwa.updateAvailable.set(false);
        pwa.canInstall.set(false);
        pwa.installError.set(null);
        pwa.install.calls.reset();
        pwa.reload.calls.reset();
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [
            provideRouter([]),
            { provide: PwaService, useValue: pwa },
            { provide: GraphqlService, useValue: { request: () => of({}) } }
          ]
        }).compileComponents();
      }));
      it("renders the application router outlet", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector("router-outlet")).toBeTruthy();
        expect(fixture.nativeElement.querySelector(".cis-pwa-status")).toBeNull();
      });
      it("explains the offline limitation", () => {
        pwa.online.set(false);
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain("Live data and saving require a connection");
      });
      it("places the install action in the footer instead of the top status banner", () => {
        pwa.canInstall.set(true);
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const button = fixture.nativeElement.querySelector("footer.cis-install-footer button");
        expect(button).not.toBeNull();
        expect(fixture.nativeElement.querySelector(".cis-pwa-status")).toBeNull();
        expect(pwa.install).not.toHaveBeenCalled();
        button?.click();
        expect(pwa.install).toHaveBeenCalled();
      });
      it("waits for user confirmation before reloading an update", () => {
        pwa.updateAvailable.set(true);
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain("Save your work before reloading");
        expect(pwa.reload).not.toHaveBeenCalled();
        fixture.nativeElement.querySelector("button").click();
        expect(pwa.reload).toHaveBeenCalled();
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
