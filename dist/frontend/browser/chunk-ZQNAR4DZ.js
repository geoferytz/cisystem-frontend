import {
  GraphqlService,
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ZFAUJJU2.js";

// src/app/core/auth/auth.service.ts
var STORAGE_KEY = "cisystem.accessToken";
var LAST_EMAIL_KEY = "cisystem.lastEmail";
var EXPIRY_LEEWAY_MS = 15e3;
function getStoredAccessToken() {
  return localStorage.getItem(STORAGE_KEY) ?? sessionStorage.getItem(STORAGE_KEY);
}
function tokenExpiresAt(token) {
  try {
    const part = token.split(".")[1];
    if (!part)
      return null;
    const payload = JSON.parse(atob(part.replace(/-/g, "+").replace(/_/g, "/")));
    return typeof payload.exp === "number" ? payload.exp * 1e3 : null;
  } catch {
    return null;
  }
}
var AuthService = class _AuthService {
  _accessToken = signal(getStoredAccessToken(), ...ngDevMode ? [{ debugName: "_accessToken" }] : []);
  accessToken = this._accessToken.asReadonly();
  isAuthenticated() {
    const token = this._accessToken();
    if (!token)
      return false;
    const expiresAt = tokenExpiresAt(token);
    return expiresAt !== null && expiresAt - EXPIRY_LEEWAY_MS > Date.now();
  }
  expiresAt() {
    const token = this._accessToken();
    return token ? tokenExpiresAt(token) : null;
  }
  isPersistent() {
    return localStorage.getItem(STORAGE_KEY) !== null;
  }
  setAccessToken(token, remember = true) {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    if (remember) {
      localStorage.setItem(STORAGE_KEY, token);
    } else {
      sessionStorage.setItem(STORAGE_KEY, token);
    }
    this._accessToken.set(token);
  }
  clear() {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    this._accessToken.set(null);
  }
  lastEmail() {
    return localStorage.getItem(LAST_EMAIL_KEY);
  }
  setLastEmail(email) {
    const trimmed = email.trim();
    if (trimmed)
      localStorage.setItem(LAST_EMAIL_KEY, trimmed);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/services/branch-context.service.ts
var STORAGE_KEY2 = "cisystem.branch";
var BranchContext = class _BranchContext {
  gql = inject(GraphqlService);
  auth = inject(AuthService);
  options = signal([], ...ngDevMode ? [{ debugName: "options" }] : []);
  me = signal(null, ...ngDevMode ? [{ debugName: "me" }] : []);
  loaded = signal(false, ...ngDevMode ? [{ debugName: "loaded" }] : []);
  /** Admin/unrestricted selection. null = all branches. */
  selected = signal(this.restore(), ...ngDevMode ? [{ debugName: "selected" }] : []);
  /** Branch code this user is locked to (non-admin with assigned branch). */
  lockedCode = computed(() => {
    const m = this.me();
    if (!m)
      return null;
    if (m.roles?.includes("ADMIN"))
      return null;
    return m.branchCode ?? null;
  }, ...ngDevMode ? [{ debugName: "lockedCode" }] : []);
  locked = computed(() => this.lockedCode() != null, ...ngDevMode ? [{ debugName: "locked" }] : []);
  /** Effective branch for views: locked branch, selected branch, or null (all). */
  effective = computed(() => this.lockedCode() ?? this.selected(), ...ngDevMode ? [{ debugName: "effective" }] : []);
  /** Branch to tag new writes with: effective branch or MAIN for unrestricted "all". */
  writeBranch = computed(() => this.effective() ?? "MAIN", ...ngDevMode ? [{ debugName: "writeBranch" }] : []);
  load() {
    if (!this.auth.isAuthenticated())
      return;
    const q = `query BranchCtx { me { roles branchId branchCode branchName } branchOptions { id code name active main } }`;
    this.gql.request(q).subscribe({
      next: (res) => {
        this.me.set(res.me ?? null);
        const opts = res.branchOptions ?? [];
        const sel = this.selected();
        this.options.set(opts.filter((b) => b.active || b.code === sel));
        if (sel != null && !opts.some((b) => b.code === sel)) {
          this.select(null);
        }
        this.loaded.set(true);
      },
      error: () => this.loaded.set(true)
    });
  }
  select(code) {
    this.selected.set(code);
    try {
      if (code == null)
        localStorage.removeItem(STORAGE_KEY2);
      else
        localStorage.setItem(STORAGE_KEY2, code);
    } catch {
    }
  }
  /** Variables fragment for branch-filtered queries. */
  branchVar() {
    return { branch: this.effective() };
  }
  restore() {
    try {
      const v = localStorage.getItem(STORAGE_KEY2);
      return v && v.trim() ? v.trim() : null;
    } catch {
      return null;
    }
  }
  static \u0275fac = function BranchContext_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BranchContext)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BranchContext, factory: _BranchContext.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BranchContext, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService,
  BranchContext
};
//# sourceMappingURL=chunk-ZQNAR4DZ.js.map
