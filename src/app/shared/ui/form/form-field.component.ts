import { CommonModule } from '@angular/common';
import {
  Component,
  Directive,
  TemplateRef,
  computed,
  contentChildren,
  inject,
  input
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { CurrencyInputDirective } from './currency-input.directive';

export type FormOption = {
  /** Option value (use ngValue semantics — booleans/numbers allowed). */
  value: unknown;
  /** Label text or translation key. */
  label: string;
  /** Disabled option — static or dynamic callback. */
  disabled?: boolean | (() => boolean);
};

export type FormField = {
  /** formControlName — or the cisField template slot name when type='template'. */
  key: string;
  /** Label text, translation key, or callback for dynamic labels (evaluated every CD). */
  label: string | (() => string);
  type?: 'text' | 'email' | 'password' | 'number' | 'currency' | 'date' | 'datetime-local' | 'time' | 'month' | 'search' | 'tel' | 'url' | 'select' | 'textarea' | 'checkbox' | 'template';
  /** Placeholder text or translation key. */
  placeholder?: string;
  /** Small helper text (or translation key) shown under the control — callback for dynamic hints. */
  hint?: string | (() => string);
  /** Muted text appended inside the label, e.g. SKU <small>(auto if empty)</small>. */
  labelHint?: string | (() => string);
  /** Options for type='select' — static array or a callback for dynamic lists (signals). */
  options?: FormOption[] | (() => FormOption[]);
  /** Show a red * on the label. */
  required?: boolean;
  /** Custom validation message (translation key) — overrides the generic per-error text. */
  errorMessage?: string;
  /** Rows for type='textarea'. */
  rows?: number;
  /** HTML min/max/step for number/date inputs — callbacks allowed for dynamic bounds. */
  min?: number | string | (() => number | string | null);
  max?: number | string | (() => number | string | null);
  step?: number | string | (() => number | string | null);
  maxlength?: number;
  autocomplete?: string;
  inputmode?: string;
  autofocus?: boolean;
  /** Read-only control (prefer disabling the FormControl for reactive forms). */
  readonly?: boolean;
  /** Hide the field (evaluated every CD). */
  hide?: () => boolean;
  /** Extra classes on the control (e.g. 'uppercase'). */
  inputClass?: string;
  /** Extra classes on the wrapper label. */
  wrapClass?: string;
  /** Render only the control — no label caption (inline edits, table cells). */
  bare?: boolean;
  /** Smaller padding/radius — inline table-cell editors. */
  compact?: boolean;
};

/** Custom field template: <ng-template cisField="viewBranches" let-control>…</ng-template> */
@Directive({
  selector: 'ng-template[cisField]',
  standalone: true
})
export class CisFieldTplDirective {
  readonly cisField = input.required<string>();
  readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}

const CONTROL =
  'rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8] disabled:opacity-60';
const COMPACT_CONTROL =
  'w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8] disabled:opacity-60';
const LABEL = 'grid gap-2 text-xs text-slate-700 dark:text-slate-300';
const INVALID = 'border-[#B81104] dark:border-red-500';

/**
 * Single form field — label + control + hint + validation state.
 *
 * ```html
 * <cis-form-field [field]="{ key: 'name', label: 'common.name', required: true }" [control]="form.controls.name" />
 * ```
 */
@Component({
  selector: 'cis-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, CurrencyInputDirective],
  // Transparent wrapper — the label/control itself becomes the grid item.
  host: { 'style': 'display: contents' },
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
})
export class CisFormFieldComponent {
  field = input.required<FormField>();
  control = input.required<FormControl>();

  protected readonly base = CONTROL;

  placeholder(): string {
    return this.field().placeholder ?? '';
  }

  labelText(): string {
    const l = this.field().label;
    return typeof l === 'function' ? l() : l;
  }

  hintText(): string {
    const h = this.field().hint;
    return typeof h === 'function' ? h() : (h ?? '');
  }

  labelHintText(): string {
    const h = this.field().labelHint;
    return typeof h === 'function' ? h() : (h ?? '');
  }

  options(): FormOption[] {
    const o = this.field().options;
    return typeof o === 'function' ? o() : (o ?? []);
  }

  optionDisabled(o: FormOption): boolean {
    const d = o.disabled;
    return typeof d === 'function' ? d() : (d ?? false);
  }

  attr(name: 'min' | 'max' | 'step'): number | string | null {
    const v = this.field()[name];
    return typeof v === 'function' ? v() : (v ?? null);
  }

  labelClass(): string {
    if (this.field().type === 'checkbox') {
      return 'flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 ' + (this.field().wrapClass ?? '');
    }
    return LABEL + ' ' + (this.field().wrapClass ?? '');
  }

  controlClass(): string {
    const invalid = this.control().touched && this.control().invalid ? ' ' + INVALID : '';
    return (this.field().compact ? COMPACT_CONTROL : CONTROL) + ' ' + (this.field().inputClass ?? '') + invalid;
  }

  /** First validation error as a translation key, only when the field was touched. */
  errorKey(): string | null {
    const c = this.control();
    if (!c.touched || !c.errors) return null;
    if (this.field().errorMessage) return this.field().errorMessage!;
    if (c.errors['required']) return 'common.fieldRequired';
    if (c.errors['email']) return 'common.invalidEmail';
    if (c.errors['minlength']) return 'common.tooShort';
    if (c.errors['min']) return 'common.tooSmall';
    if (c.errors['max']) return 'common.tooLarge';
    return 'common.invalidValue';
  }
}

/**
 * Config-driven form field grid — replaces hand-written label/input blocks.
 * The page keeps its own <form [formGroup]> wrapper, submit buttons and custom
 * blocks; this component only renders the standard fields.
 *
 * ```html
 * <form [formGroup]="form" (ngSubmit)="save()">
 *   <cis-form-fields [form]="form" [fields]="fields">
 *     <ng-template cisField="viewBranches">…custom markup…</ng-template>
 *   </cis-form-fields>
 *   <button type="submit">Save</button>
 * </form>
 * ```
 *
 * Pages must import `CIS_FORM_IMPORTS` (component + cisField directive).
 */
@Component({
  selector: 'cis-form-fields',
  standalone: true,
  imports: [CommonModule, CisFormFieldComponent],
  // Transparent wrapper — fields must participate in the parent grid/flex
  // layout as if cis-form-fields were not there.
  host: { 'style': 'display: contents' },
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
})
export class CisFormFieldsComponent {
  fields = input.required<FormField[]>();
  form = input.required<FormGroup>();

  private readonly fieldTemplates = contentChildren(CisFieldTplDirective);
  private readonly templateMap = computed(() => {
    const map = new Map<string, TemplateRef<unknown>>();
    for (const d of this.fieldTemplates()) map.set(d.cisField(), d.template);
    return map;
  });

  control(f: FormField): AbstractControl | null {
    return this.form().controls[f.key] ?? null;
  }

  asFormControl(c: AbstractControl): FormControl {
    return c as FormControl;
  }

  templateFor(key: string): TemplateRef<unknown> | null {
    return this.templateMap().get(key) ?? null;
  }
}

/** Convenience import bundle for standalone pages using cisField templates. */
export const CIS_FORM_IMPORTS = [CisFormFieldsComponent, CisFormFieldComponent, CisFieldTplDirective, CurrencyInputDirective] as const;
