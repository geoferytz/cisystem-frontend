import {
  Router,
  init_router
} from "./chunk-JMVI6IKZ.js";
import {
  AuthService,
  GraphqlService,
  init_auth_service,
  init_graphql_service
} from "./chunk-W65P7JEF.js";
import {
  Injectable,
  NgZone,
  __decorate,
  init_core,
  init_tslib_es6,
  inject
} from "./chunk-NONR5GBI.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/core/auth/session.service.ts
var IDLE_LIMIT_MS, CHECK_INTERVAL_MS, REFRESH_WINDOW_MS, FORBIDDEN_PROBE_COOLDOWN_MS, ACTIVITY_EVENTS, SessionService;
var init_session_service = __esm({
  "src/app/core/auth/session.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_router();
    init_auth_service();
    init_graphql_service();
    IDLE_LIMIT_MS = 30 * 60 * 1e3;
    CHECK_INTERVAL_MS = 15 * 1e3;
    REFRESH_WINDOW_MS = 5 * 60 * 1e3;
    FORBIDDEN_PROBE_COOLDOWN_MS = 10 * 1e3;
    ACTIVITY_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"];
    SessionService = class SessionService2 {
      auth = inject(AuthService);
      gql = inject(GraphqlService);
      router = inject(Router);
      zone = inject(NgZone);
      lastActivity = Date.now();
      timer;
      refreshing = false;
      lastForbiddenProbe = 0;
      started = false;
      start() {
        if (this.started || typeof window === "undefined")
          return;
        this.started = true;
        this.zone.runOutsideAngular(() => {
          for (const event of ACTIVITY_EVENTS) {
            window.addEventListener(event, this.onActivity, { passive: true });
          }
          this.timer = setInterval(() => this.check(), CHECK_INTERVAL_MS);
        });
      }
      onActivity = () => {
        this.lastActivity = Date.now();
        if (!this.auth.accessToken())
          return;
        if (!this.auth.isAuthenticated()) {
          this.expire();
          return;
        }
        this.maybeRefresh();
      };
      check() {
        if (!this.auth.accessToken())
          return;
        if (!this.auth.isAuthenticated() || Date.now() - this.lastActivity > IDLE_LIMIT_MS) {
          this.expire();
        }
      }
      maybeRefresh() {
        const expiresAt = this.auth.expiresAt();
        if (this.refreshing || expiresAt === null || expiresAt - Date.now() > REFRESH_WINDOW_MS)
          return;
        this.refreshing = true;
        this.gql.request("mutation RefreshToken { refreshToken { accessToken } }").subscribe({
          next: (data) => {
            this.auth.setAccessToken(data.refreshToken.accessToken, this.auth.isPersistent());
            this.refreshing = false;
          },
          error: () => {
            this.refreshing = false;
          }
        });
      }
      handleForbidden() {
        if (!this.auth.accessToken())
          return;
        if (!this.auth.isAuthenticated()) {
          this.expire();
          return;
        }
        const now = Date.now();
        if (now - this.lastForbiddenProbe < FORBIDDEN_PROBE_COOLDOWN_MS)
          return;
        this.lastForbiddenProbe = now;
        this.gql.request("query SessionProbe { me { id } }").subscribe({
          next: () => {
          },
          error: (error) => {
            if (error instanceof Error && error.message.includes("Forbidden"))
              this.expire();
          }
        });
      }
      expire() {
        if (!this.auth.accessToken())
          return;
        this.auth.clear();
        if (this.router.url.startsWith("/login"))
          return;
        this.zone.run(() => this.router.navigate(["/login"], { queryParams: { session: "expired" } }));
      }
    };
    SessionService = __decorate([
      Injectable({ providedIn: "root" })
    ], SessionService);
  }
});

export {
  IDLE_LIMIT_MS,
  SessionService,
  init_session_service
};
//# sourceMappingURL=chunk-2BJUO2HJ.js.map
