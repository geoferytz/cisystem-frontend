import { CommonModule } from '@angular/common';
import { Component, computed, input, model } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'cis-pager',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.total' | translate }}: {{ total() }}</div>
      <div class="flex items-center gap-2">
        <label class="text-xs font-semibold text-slate-600 dark:text-slate-400">
          {{ 'common.show' | translate }}
          <select
            class="ml-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-xs text-slate-900 dark:text-slate-100"
            [value]="pageSize()"
            (change)="setPageSize(($any($event.target)).value)"
          >
            <option [value]="10">10</option>
            <option [value]="20">20</option>
            <option [value]="50">50</option>
            <option [value]="100">100</option>
          </select>
        </label>

        <button
          type="button"
          class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="prev()"
          [disabled]="pageIndex() === 0"
        >
          {{ 'common.prev' | translate }}
        </button>
        <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.page' | translate }} {{ pageIndex() + 1 }} / {{ totalPages() }}</div>
        <button
          type="button"
          class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="next()"
          [disabled]="pageIndex() >= totalPages() - 1"
        >
          {{ 'common.next' | translate }}
        </button>
      </div>
    </div>
  `
})
export class PagerComponent {
  total = input.required<number>();
  pageSize = model(10);
  pageIndex = model(0);

  totalPages = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())));

  setPageSize(value: unknown): void {
    this.pageSize.set(Number(value) || 10);
    this.pageIndex.set(0);
  }

  prev(): void {
    this.pageIndex.update((i) => Math.max(0, i - 1));
  }

  next(): void {
    this.pageIndex.update((i) => Math.min(this.totalPages() - 1, i + 1));
  }
}
