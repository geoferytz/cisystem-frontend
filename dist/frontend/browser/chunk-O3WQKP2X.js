import {
  NG_VALUE_ACCESSOR
} from "./chunk-CXEU7F5R.js";
import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-F3YP4G7X.js";

// src/app/shared/ui/form/currency-input.directive.ts
var CurrencyInputDirective = class _CurrencyInputDirective {
  el = inject(ElementRef).nativeElement;
  renderer = inject(Renderer2);
  onChange = () => {
  };
  onTouched = () => {
  };
  /** Keep digits + a single '.', max 2 fraction digits; strip leading zeros. */
  sanitize(raw) {
    let out = "";
    let dot = false;
    let frac = 0;
    for (const ch of raw.replace(/,/g, "")) {
      if (ch >= "0" && ch <= "9") {
        if (dot) {
          if (frac >= 2)
            continue;
          frac++;
        }
        out += ch;
      } else if (ch === "." && !dot) {
        dot = true;
        out += ch;
      }
    }
    const [int, ...rest] = out.split(".");
    const cleanInt = int.replace(/^0+(?=\d)/, "") || (int ? "0" : "");
    return rest.length ? cleanInt + "." + rest.join("") : out ? cleanInt : "";
  }
  format(san) {
    if (!san)
      return "";
    const [int, ...rest] = san.split(".");
    const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return rest.length ? grouped + "." + rest.join("") : grouped;
  }
  handleInput() {
    const raw = this.el.value;
    const san = this.sanitize(raw);
    const formatted = this.format(san);
    if (raw !== formatted) {
      const caret = this.el.selectionStart ?? raw.length;
      const digitsBefore = raw.slice(0, caret).replace(/\D/g, "").length;
      this.el.value = formatted;
      let pos = 0;
      let seen = 0;
      while (pos < formatted.length && seen < digitsBefore) {
        if (formatted[pos] >= "0" && formatted[pos] <= "9")
          seen++;
        pos++;
      }
      this.el.setSelectionRange(pos, pos);
    }
    this.onChange(san === "" ? null : Number(san.replace(/\.$/, "") || "0"));
  }
  handleBlur() {
    this.onTouched();
    const san = this.sanitize(this.el.value).replace(/\.$/, "");
    this.el.value = this.format(san);
  }
  writeValue(value) {
    const s = value == null || value === "" ? "" : String(value);
    this.el.value = this.format(this.sanitize(s));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this.renderer.setProperty(this.el, "disabled", disabled);
  }
  static \u0275fac = function CurrencyInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrencyInputDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _CurrencyInputDirective, selectors: [["input", "cisCurrencyInput", ""]], hostBindings: function CurrencyInputDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function CurrencyInputDirective_input_HostBindingHandler() {
        return ctx.handleInput();
      })("blur", function CurrencyInputDirective_blur_HostBindingHandler() {
        return ctx.handleBlur();
      });
    }
  }, features: [\u0275\u0275ProvidersFeature([
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _CurrencyInputDirective), multi: true }
  ])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[cisCurrencyInput]",
      standalone: true,
      providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CurrencyInputDirective), multi: true }
      ]
    }]
  }], null, { handleInput: [{
    type: HostListener,
    args: ["input"]
  }], handleBlur: [{
    type: HostListener,
    args: ["blur"]
  }] });
})();

export {
  CurrencyInputDirective
};
//# sourceMappingURL=chunk-O3WQKP2X.js.map
