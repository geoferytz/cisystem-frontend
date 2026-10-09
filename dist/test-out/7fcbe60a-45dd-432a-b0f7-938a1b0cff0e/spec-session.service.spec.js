import {
  IDLE_LIMIT_MS,
  SessionService,
  init_session_service
} from "./chunk-2BJUO2HJ.js";
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
import "./chunk-TLWMLDWP.js";
import "./chunk-MI63EHBC.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of,
  throwError
} from "./chunk-NONR5GBI.js";
import "./chunk-TTULUY32.js";

// src/app/core/auth/session.service.spec.ts
init_testing();
init_router();
init_esm();
init_auth_service();
init_session_service();
init_graphql_service();
function makeJwt(expiresInSeconds) {
  const payload = btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1e3) + expiresInSeconds }));
  return `h.${payload}.s`;
}
describe("SessionService", () => {
  let auth;
  let session;
  let request;
  let router;
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    request = jasmine.createSpy("request").and.returnValue(of({ refreshToken: { accessToken: makeJwt(3600) }, me: { id: "1" } }));
    router = { url: "/home", navigate: jasmine.createSpy("navigate") };
    TestBed.configureTestingModule({
      providers: [
        SessionService,
        { provide: GraphqlService, useValue: { request } },
        { provide: Router, useValue: router }
      ]
    });
    auth = TestBed.inject(AuthService);
    session = TestBed.inject(SessionService);
  });
  it("redirects to login when an expired token is used", () => {
    auth.setAccessToken(makeJwt(-60));
    session.start();
    window.dispatchEvent(new Event("keydown"));
    expect(auth.accessToken()).toBeNull();
    expect(router.navigate).toHaveBeenCalledWith(["/login"], { queryParams: { session: "expired" } });
  });
  it("refreshes the token when the user is active near expiry", () => {
    auth.setAccessToken(makeJwt(120));
    session.start();
    window.dispatchEvent(new Event("keydown"));
    expect(request.calls.allArgs().some((args) => String(args[0]).includes("refreshToken"))).toBeTrue();
    expect(auth.isAuthenticated()).toBeTrue();
  });
  it("expires after the idle limit", () => {
    auth.setAccessToken(makeJwt(3600));
    session.start();
    const internals = session;
    internals.lastActivity = Date.now() - IDLE_LIMIT_MS - 1;
    internals.check();
    expect(router.navigate).toHaveBeenCalledWith(["/login"], { queryParams: { session: "expired" } });
  });
  it("does not expire while the user keeps interacting", () => {
    auth.setAccessToken(makeJwt(3600));
    session.start();
    const internals = session;
    internals.lastActivity = Date.now() - IDLE_LIMIT_MS - 1;
    window.dispatchEvent(new Event("keydown"));
    internals.check();
    expect(auth.accessToken()).not.toBeNull();
    expect(router.navigate).not.toHaveBeenCalled();
  });
  it("expires when the server rejects a still-valid token", () => {
    auth.setAccessToken(makeJwt(3600));
    request.and.callFake((query) => String(query).includes("SessionProbe") ? throwError(() => new Error("Forbidden")) : of({}));
    session.handleForbidden();
    expect(router.navigate).toHaveBeenCalledWith(["/login"], { queryParams: { session: "expired" } });
  });
  it("ignores permission denials while the session is valid", () => {
    auth.setAccessToken(makeJwt(3600));
    session.handleForbidden();
    expect(auth.accessToken()).not.toBeNull();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=spec-session.service.spec.js.map
