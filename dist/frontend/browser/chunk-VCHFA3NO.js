import {
  BranchContext
} from "./chunk-ZQNAR4DZ.js";
import {
  GraphqlService,
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ZFAUJJU2.js";

// src/app/shared/services/pending-receiving.service.ts
var PendingReceivingService = class _PendingReceivingService {
  gql = inject(GraphqlService);
  branchCtx = inject(BranchContext);
  count = signal(0, ...ngDevMode ? [{ debugName: "count" }] : []);
  refresh() {
    this.gql.request("query PendingRepurchasesBadge($branch: String) { pendingRepurchases(branch: $branch) { id activation } }", { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => this.sync(res.pendingRepurchases),
      error: () => this.count.set(0)
    });
  }
  sync(orders) {
    this.count.set((orders ?? []).filter((o) => o.activation).length);
  }
  static \u0275fac = function PendingReceivingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingReceivingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PendingReceivingService, factory: _PendingReceivingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingReceivingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PendingReceivingService
};
//# sourceMappingURL=chunk-VCHFA3NO.js.map
