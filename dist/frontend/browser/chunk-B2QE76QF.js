import {
  GraphqlService,
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ZFAUJJU2.js";

// src/app/shared/services/permission.service.ts
var PermissionService = class _PermissionService {
  gql;
  me = signal(null, ...ngDevMode ? [{ debugName: "me" }] : []);
  myPermissions = signal([], ...ngDevMode ? [{ debugName: "myPermissions" }] : []);
  loaded = false;
  isAdmin = computed(() => (this.me()?.roles ?? []).includes("ADMIN"), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  constructor(gql) {
    this.gql = gql;
  }
  load() {
    if (this.loaded)
      return;
    this.loaded = true;
    const meQ = `query Me { me { id name email roles } }`;
    this.gql.request(meQ).subscribe({
      next: (res) => this.me.set(res.me),
      error: () => this.me.set(null)
    });
    const permQ = `query MyPermissions { myPermissions { module canView canCreate canEdit canDelete } }`;
    this.gql.request(permQ).subscribe({
      next: (res) => this.myPermissions.set(res.myPermissions ?? []),
      error: () => this.myPermissions.set([])
    });
  }
  reload() {
    this.loaded = false;
    this.load();
  }
  perm(module) {
    return this.myPermissions().find((x) => x.module === module.toUpperCase());
  }
  canView(module) {
    if (this.isAdmin())
      return true;
    return Boolean(this.perm(module)?.canView);
  }
  canCreate(module) {
    if (this.isAdmin())
      return true;
    return Boolean(this.perm(module)?.canCreate);
  }
  canEdit(module) {
    if (this.isAdmin())
      return true;
    return Boolean(this.perm(module)?.canEdit);
  }
  canDelete(module) {
    if (this.isAdmin())
      return true;
    return Boolean(this.perm(module)?.canDelete);
  }
  static \u0275fac = function PermissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionService)(\u0275\u0275inject(GraphqlService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionService, factory: _PermissionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: GraphqlService }], null);
})();

export {
  PermissionService
};
//# sourceMappingURL=chunk-B2QE76QF.js.map
