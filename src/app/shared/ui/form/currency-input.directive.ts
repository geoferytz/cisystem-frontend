import { Directive, ElementRef, HostListener, Renderer2, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Currency input — displays thousand separators while the user types
 * ("30000" renders "30,000") while the FormControl keeps a plain number.
 *
 * ```html
 * <input cisCurrencyInput formControlName="amount" />
 * ```
 *
 * Because it provides NG_VALUE_ACCESSOR it replaces the default accessor
 * for its element — no string/number fighting with formControlName.
 */
@Directive({
  selector: 'input[cisCurrencyInput]',
  standalone: true,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CurrencyInputDirective), multi: true }
  ]
})
export class CurrencyInputDirective implements ControlValueAccessor {
  private readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);

  private onChange: (value: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  /** Keep digits + a single '.', max 2 fraction digits; strip leading zeros. */
  private sanitize(raw: string): string {
    let out = '';
    let dot = false;
    let frac = 0;
    for (const ch of raw.replace(/,/g, '')) {
      if (ch >= '0' && ch <= '9') {
        if (dot) {
          if (frac >= 2) continue;
          frac++;
        }
        out += ch;
      } else if (ch === '.' && !dot) {
        dot = true;
        out += ch;
      }
    }
    const [int, ...rest] = out.split('.');
    const cleanInt = int.replace(/^0+(?=\d)/, '') || (int ? '0' : '');
    return rest.length ? cleanInt + '.' + rest.join('') : (out ? cleanInt : '');
  }

  private format(san: string): string {
    if (!san) return '';
    const [int, ...rest] = san.split('.');
    const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return rest.length ? grouped + '.' + rest.join('') : grouped;
  }

  @HostListener('input')
  handleInput(): void {
    const raw = this.el.value;
    const san = this.sanitize(raw);
    const formatted = this.format(san);

    if (raw !== formatted) {
      const caret = this.el.selectionStart ?? raw.length;
      const digitsBefore = raw.slice(0, caret).replace(/\D/g, '').length;
      this.el.value = formatted;
      // Restore caret after the same number of digits in the formatted text.
      let pos = 0;
      let seen = 0;
      while (pos < formatted.length && seen < digitsBefore) {
        if (formatted[pos] >= '0' && formatted[pos] <= '9') seen++;
        pos++;
      }
      this.el.setSelectionRange(pos, pos);
    }

    this.onChange(san === '' ? null : Number(san.replace(/\.$/, '') || '0'));
  }

  @HostListener('blur')
  handleBlur(): void {
    this.onTouched();
    const san = this.sanitize(this.el.value).replace(/\.$/, '');
    this.el.value = this.format(san);
  }

  writeValue(value: unknown): void {
    const s = value == null || value === '' ? '' : String(value);
    this.el.value = this.format(this.sanitize(s));
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.renderer.setProperty(this.el, 'disabled', disabled);
  }
}
