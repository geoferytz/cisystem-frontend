import { formatNumber } from '@angular/common';
import { inject, LOCALE_ID, Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
  standalone: true
})
export class MoneyPipe implements PipeTransform {
  private readonly locale = inject(LOCALE_ID);

  transform(value: number | string | null | undefined, currency?: string): string {
    if (value === null || value === undefined || value === '') {
      return '-';
    }

    const n = typeof value === 'string' ? Number(value) : value;
    if (!Number.isFinite(n)) {
      return '-';
    }

    const formatted = formatNumber(n, this.locale, '1.2-2');
    const c = String(currency ?? 'TSH').trim();
    return c ? `${formatted} ${c}` : formatted;
  }
}
