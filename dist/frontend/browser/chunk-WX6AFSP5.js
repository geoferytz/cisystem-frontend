import {
  LOCALE_ID,
  Pipe,
  formatNumber,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-F3YP4G7X.js";

// src/app/shared/pipes/money.pipe.ts
var MoneyPipe = class _MoneyPipe {
  locale = inject(LOCALE_ID);
  transform(value, currency) {
    if (value === null || value === void 0 || value === "") {
      return "-";
    }
    const n = typeof value === "string" ? Number(value) : value;
    if (!Number.isFinite(n)) {
      return "-";
    }
    const formatted = formatNumber(n, this.locale, "1.2-2");
    const c = String(currency ?? "TSH").trim();
    return c ? `${formatted} ${c}` : formatted;
  }
  static \u0275fac = function MoneyPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoneyPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "money", type: _MoneyPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoneyPipe, [{
    type: Pipe,
    args: [{
      name: "money",
      standalone: true
    }]
  }], null, null);
})();

export {
  MoneyPipe
};
//# sourceMappingURL=chunk-WX6AFSP5.js.map
