import {
  CurrencyInputDirective
} from "./chunk-O3WQKP2X.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlDirective,
  NgControlStatus,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CXEU7F5R.js";
import {
  TranslatePipe
} from "./chunk-DPFPPFWE.js";
import {
  CommonModule,
  Component,
  ContentChildren,
  Directive,
  Input,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  TemplateRef,
  computed,
  contentChildren,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-F3YP4G7X.js";

// src/app/shared/ui/form/form-field.component.ts
function CisFormFieldComponent_label_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function CisFormFieldComponent_label_0_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(2, 1, ctx_r0.labelHintText()), ")");
  }
}
function CisFormFieldComponent_label_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CisFormFieldComponent_label_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.hintText()));
  }
}
function CisFormFieldComponent_label_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey() ?? ""));
  }
}
function CisFormFieldComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275template(4, CisFormFieldComponent_label_0_span_4_Template, 2, 0, "span", 3)(5, CisFormFieldComponent_label_0_small_5_Template, 3, 3, "small", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CisFormFieldComponent_label_0_ng_container_6_Template, 1, 0, "ng-container", 5)(7, CisFormFieldComponent_label_0_span_7_Template, 3, 3, "span", 6)(8, CisFormFieldComponent_label_0_span_8_Template, 3, 3, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const controlTpl_r2 = \u0275\u0275reference(4);
    \u0275\u0275classMap(ctx_r0.labelClass());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, ctx_r0.labelText()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.field().required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.labelHintText());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", controlTpl_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hintText());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorKey());
  }
}
function CisFormFieldComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CisFormFieldComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CisFormFieldComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const controlTpl_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", controlTpl_r2);
  }
}
function CisFormFieldComponent_ng_template_3_select_1_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngValue", o_r3.value)("disabled", ctx_r0.optionDisabled(o_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, o_r3.label));
  }
}
function CisFormFieldComponent_ng_template_3_select_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 18);
    \u0275\u0275template(1, CisFormFieldComponent_ng_template_3_select_1_option_1_Template, 3, 5, "option", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.controlClass());
    \u0275\u0275property("formControl", ctx_r0.control());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.options());
  }
}
function CisFormFieldComponent_ng_template_3_textarea_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "textarea", 21);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.controlClass());
    \u0275\u0275property("rows", ctx_r0.field().rows ?? 3)("placeholder", \u0275\u0275pipeBind1(1, 5, ctx_r0.placeholder()))("formControl", ctx_r0.control());
  }
}
function CisFormFieldComponent_ng_template_3_input_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formControl", ctx_r0.control());
  }
}
function CisFormFieldComponent_ng_template_3_input_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 23);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.controlClass());
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(1, 8, ctx_r0.placeholder()))("readonly", ctx_r0.field().readonly ?? false)("formControl", ctx_r0.control());
    \u0275\u0275attribute("maxlength", ctx_r0.field().maxlength ?? null)("autocomplete", ctx_r0.field().autocomplete ?? "off")("autofocus", ctx_r0.field().autofocus ? "" : null);
  }
}
function CisFormFieldComponent_ng_template_3_input_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 24);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.controlClass());
    \u0275\u0275property("type", ctx_r0.field().type ?? "text")("placeholder", \u0275\u0275pipeBind1(1, 13, ctx_r0.placeholder()))("readonly", ctx_r0.field().readonly ?? false)("formControl", ctx_r0.control());
    \u0275\u0275attribute("min", ctx_r0.attr("min"))("max", ctx_r0.attr("max"))("step", ctx_r0.attr("step"))("maxlength", ctx_r0.field().maxlength ?? null)("autocomplete", ctx_r0.field().autocomplete ?? null)("inputmode", ctx_r0.field().inputmode ?? null)("autofocus", ctx_r0.field().autofocus ? "" : null);
  }
}
function CisFormFieldComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 12);
    \u0275\u0275template(1, CisFormFieldComponent_ng_template_3_select_1_Template, 2, 4, "select", 13)(2, CisFormFieldComponent_ng_template_3_textarea_2_Template, 2, 7, "textarea", 14)(3, CisFormFieldComponent_ng_template_3_input_3_Template, 1, 1, "input", 15)(4, CisFormFieldComponent_ng_template_3_input_4_Template, 2, 10, "input", 16)(5, CisFormFieldComponent_ng_template_3_input_5_Template, 2, 15, "input", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSwitch", ctx_r0.field().type ?? "text");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "checkbox");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "currency");
  }
}
var _c0 = (a0) => ({ $implicit: a0 });
function CisFormFieldsComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CisFormFieldsComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CisFormFieldsComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const f_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.templateFor(f_r1.key))("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx_r1.control(f_r1)));
  }
}
function CisFormFieldsComponent_ng_container_0_ng_container_1_ng_template_2_cis_form_field_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cis-form-field", 6);
  }
  if (rf & 2) {
    const c_r3 = ctx.ngIf;
    const f_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("field", f_r1)("control", ctx_r1.asFormControl(c_r3));
  }
}
function CisFormFieldsComponent_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CisFormFieldsComponent_ng_container_0_ng_container_1_ng_template_2_cis_form_field_0_Template, 1, 2, "cis-form-field", 5);
  }
  if (rf & 2) {
    const f_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.control(f_r1));
  }
}
function CisFormFieldsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CisFormFieldsComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 3)(2, CisFormFieldsComponent_ng_container_0_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stdField_r4 = \u0275\u0275reference(3);
    const f_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r1.type === "template")("ngIfElse", stdField_r4);
  }
}
function CisFormFieldsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CisFormFieldsComponent_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(f_r1.hide == null ? null : f_r1.hide()));
  }
}
var CisFieldTplDirective = class _CisFieldTplDirective {
  cisField = input.required(...ngDevMode ? [{ debugName: "cisField" }] : []);
  template = inject(TemplateRef);
  static \u0275fac = function CisFieldTplDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CisFieldTplDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _CisFieldTplDirective, selectors: [["ng-template", "cisField", ""]], inputs: { cisField: [1, "cisField"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CisFieldTplDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[cisField]",
      standalone: true
    }]
  }], null, { cisField: [{ type: Input, args: [{ isSignal: true, alias: "cisField", required: true }] }] });
})();
var CONTROL = "rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8] disabled:opacity-60";
var COMPACT_CONTROL = "w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8] disabled:opacity-60";
var LABEL = "grid gap-2 text-xs text-slate-700 dark:text-slate-300";
var INVALID = "border-[#B81104] dark:border-red-500";
var CisFormFieldComponent = class _CisFormFieldComponent {
  field = input.required(...ngDevMode ? [{ debugName: "field" }] : []);
  control = input.required(...ngDevMode ? [{ debugName: "control" }] : []);
  base = CONTROL;
  placeholder() {
    return this.field().placeholder ?? "";
  }
  labelText() {
    const l = this.field().label;
    return typeof l === "function" ? l() : l;
  }
  hintText() {
    const h = this.field().hint;
    return typeof h === "function" ? h() : h ?? "";
  }
  labelHintText() {
    const h = this.field().labelHint;
    return typeof h === "function" ? h() : h ?? "";
  }
  options() {
    const o = this.field().options;
    return typeof o === "function" ? o() : o ?? [];
  }
  optionDisabled(o) {
    const d = o.disabled;
    return typeof d === "function" ? d() : d ?? false;
  }
  attr(name) {
    const v = this.field()[name];
    return typeof v === "function" ? v() : v ?? null;
  }
  labelClass() {
    if (this.field().type === "checkbox") {
      return "flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 " + (this.field().wrapClass ?? "");
    }
    return LABEL + " " + (this.field().wrapClass ?? "");
  }
  controlClass() {
    const invalid = this.control().touched && this.control().invalid ? " " + INVALID : "";
    return (this.field().compact ? COMPACT_CONTROL : CONTROL) + " " + (this.field().inputClass ?? "") + invalid;
  }
  /** First validation error as a translation key, only when the field was touched. */
  errorKey() {
    const c = this.control();
    if (!c.touched || !c.errors)
      return null;
    if (this.field().errorMessage)
      return this.field().errorMessage;
    if (c.errors["required"])
      return "common.fieldRequired";
    if (c.errors["email"])
      return "common.invalidEmail";
    if (c.errors["minlength"])
      return "common.tooShort";
    if (c.errors["min"])
      return "common.tooSmall";
    if (c.errors["max"])
      return "common.tooLarge";
    return "common.invalidValue";
  }
  static \u0275fac = function CisFormFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CisFormFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CisFormFieldComponent, selectors: [["cis-form-field"]], hostAttrs: [2, "display", "contents"], inputs: { field: [1, "field"], control: [1, "control"] }, decls: 5, vars: 2, consts: [["bareControl", ""], ["controlTpl", ""], [3, "class", 4, "ngIf", "ngIfElse"], ["class", "text-[#B81104]", 4, "ngIf"], ["class", "font-normal text-slate-400 dark:text-slate-500", 4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "text-[11px] font-normal text-slate-500 dark:text-slate-400", 4, "ngIf"], ["class", "text-[11px] font-semibold text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "text-[#B81104]"], [1, "font-normal", "text-slate-400", "dark:text-slate-500"], [1, "text-[11px]", "font-normal", "text-slate-500", "dark:text-slate-400"], [1, "text-[11px]", "font-semibold", "text-[#B81104]", "dark:text-red-400"], [3, "ngSwitch"], [3, "class", "formControl", 4, "ngSwitchCase"], [3, "class", "rows", "placeholder", "formControl", 4, "ngSwitchCase"], ["type", "checkbox", "class", "h-4 w-4 accent-pink-500", 3, "formControl", 4, "ngSwitchCase"], ["cisCurrencyInput", "", "type", "text", "inputmode", "decimal", 3, "class", "placeholder", "readonly", "formControl", 4, "ngSwitchCase"], [3, "type", "class", "placeholder", "readonly", "formControl", 4, "ngSwitchDefault"], [3, "formControl"], [3, "ngValue", "disabled", 4, "ngFor", "ngForOf"], [3, "ngValue", "disabled"], [3, "rows", "placeholder", "formControl"], ["type", "checkbox", 1, "h-4", "w-4", "accent-pink-500", 3, "formControl"], ["cisCurrencyInput", "", "type", "text", "inputmode", "decimal", 3, "placeholder", "readonly", "formControl"], [3, "type", "placeholder", "readonly", "formControl"]], template: function CisFormFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CisFormFieldComponent_label_0_Template, 9, 10, "label", 2)(1, CisFormFieldComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CisFormFieldComponent_ng_template_3_Template, 6, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const bareControl_r4 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", !ctx.field().bare)("ngIfElse", bareControl_r4);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, FormControlDirective, CurrencyInputDirective, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CisFormFieldComponent, [{
    type: Component,
    args: [{
      selector: "cis-form-field",
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, TranslatePipe, CurrencyInputDirective],
      // Transparent wrapper — the label/control itself becomes the grid item.
      host: { "style": "display: contents" },
      template: `
    <label *ngIf="!field().bare; else bareControl" [class]="labelClass()">
      <span>
        {{ labelText() | translate }}
        <span *ngIf="field().required" class="text-[#B81104]">*</span>
        <small *ngIf="labelHintText()" class="font-normal text-slate-400 dark:text-slate-500"> ({{ labelHintText() | translate }})</small>
      </span>
      <ng-container *ngTemplateOutlet="controlTpl" />
      <span *ngIf="hintText()" class="text-[11px] font-normal text-slate-500 dark:text-slate-400">{{ hintText() | translate }}</span>
      <span *ngIf="errorKey()" class="text-[11px] font-semibold text-[#B81104] dark:text-red-400">{{ (errorKey() ?? '') | translate }}</span>
    </label>

    <ng-template #bareControl>
      <ng-container *ngTemplateOutlet="controlTpl" />
    </ng-template>

    <ng-template #controlTpl>
      <ng-container [ngSwitch]="field().type ?? 'text'">
        <select
          *ngSwitchCase="'select'"
          [class]="controlClass()"
          [formControl]="control()"
        >
          <option *ngFor="let o of options()" [ngValue]="o.value" [disabled]="optionDisabled(o)">{{ o.label | translate }}</option>
        </select>

        <textarea
          *ngSwitchCase="'textarea'"
          [class]="controlClass()"
          [rows]="field().rows ?? 3"
          [placeholder]="placeholder() | translate"
          [formControl]="control()"
        ></textarea>

        <input
          *ngSwitchCase="'checkbox'"
          type="checkbox"
          class="h-4 w-4 accent-pink-500"
          [formControl]="control()"
        />

        <input
          *ngSwitchCase="'currency'"
          cisCurrencyInput
          type="text"
          inputmode="decimal"
          [class]="controlClass()"
          [placeholder]="placeholder() | translate"
          [attr.maxlength]="field().maxlength ?? null"
          [attr.autocomplete]="field().autocomplete ?? 'off'"
          [attr.autofocus]="field().autofocus ? '' : null"
          [readonly]="field().readonly ?? false"
          [formControl]="control()"
        />

        <input
          *ngSwitchDefault
          [type]="field().type ?? 'text'"
          [class]="controlClass()"
          [placeholder]="placeholder() | translate"
          [attr.min]="attr('min')"
          [attr.max]="attr('max')"
          [attr.step]="attr('step')"
          [attr.maxlength]="field().maxlength ?? null"
          [attr.autocomplete]="field().autocomplete ?? null"
          [attr.inputmode]="field().inputmode ?? null"
          [attr.autofocus]="field().autofocus ? '' : null"
          [readonly]="field().readonly ?? false"
          [formControl]="control()"
        />
      </ng-container>
    </ng-template>
  `
    }]
  }], null, { field: [{ type: Input, args: [{ isSignal: true, alias: "field", required: true }] }], control: [{ type: Input, args: [{ isSignal: true, alias: "control", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CisFormFieldComponent, { className: "CisFormFieldComponent", filePath: "app/shared/ui/form/form-field.component.ts", lineNumber: 170 });
})();
var CisFormFieldsComponent = class _CisFormFieldsComponent {
  fields = input.required(...ngDevMode ? [{ debugName: "fields" }] : []);
  form = input.required(...ngDevMode ? [{ debugName: "form" }] : []);
  fieldTemplates = contentChildren(CisFieldTplDirective, ...ngDevMode ? [{ debugName: "fieldTemplates" }] : []);
  templateMap = computed(() => {
    const map = /* @__PURE__ */ new Map();
    for (const d of this.fieldTemplates())
      map.set(d.cisField(), d.template);
    return map;
  }, ...ngDevMode ? [{ debugName: "templateMap" }] : []);
  control(f) {
    return this.form().controls[f.key] ?? null;
  }
  asFormControl(c) {
    return c;
  }
  templateFor(key) {
    return this.templateMap().get(key) ?? null;
  }
  static \u0275fac = function CisFormFieldsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CisFormFieldsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CisFormFieldsComponent, selectors: [["cis-form-fields"]], contentQueries: function CisFormFieldsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.fieldTemplates, CisFieldTplDirective, 4);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostAttrs: [2, "display", "contents"], inputs: { fields: [1, "fields"], form: [1, "form"] }, decls: 1, vars: 1, consts: [["stdField", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "field", "control", 4, "ngIf"], [3, "field", "control"]], template: function CisFormFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CisFormFieldsComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngForOf", ctx.fields());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, CisFormFieldComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CisFormFieldsComponent, [{
    type: Component,
    args: [{
      selector: "cis-form-fields",
      standalone: true,
      imports: [CommonModule, CisFormFieldComponent],
      // Transparent wrapper — fields must participate in the parent grid/flex
      // layout as if cis-form-fields were not there.
      host: { "style": "display: contents" },
      template: `
    <ng-container *ngFor="let f of fields()">
      <ng-container *ngIf="!f.hide?.()">
        <ng-container *ngIf="f.type === 'template'; else stdField">
          <ng-container *ngTemplateOutlet="templateFor(f.key); context: { $implicit: control(f) }" />
        </ng-container>
        <ng-template #stdField>
          <cis-form-field *ngIf="control(f) as c" [field]="f" [control]="asFormControl(c)" />
        </ng-template>
      </ng-container>
    </ng-container>
  `
    }]
  }], null, { fields: [{ type: Input, args: [{ isSignal: true, alias: "fields", required: true }] }], form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: true }] }], fieldTemplates: [{ type: ContentChildren, args: [forwardRef(() => CisFieldTplDirective), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CisFormFieldsComponent, { className: "CisFormFieldsComponent", filePath: "app/shared/ui/form/form-field.component.ts", lineNumber: 272 });
})();
var CIS_FORM_IMPORTS = [CisFormFieldsComponent, CisFormFieldComponent, CisFieldTplDirective, CurrencyInputDirective];

export {
  CisFieldTplDirective,
  CisFormFieldComponent,
  CisFormFieldsComponent,
  CIS_FORM_IMPORTS
};
//# sourceMappingURL=chunk-ELX72Y6T.js.map
