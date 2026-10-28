import { CommonModule } from '@angular/common';
import {
  Component,
  Directive,
  TemplateRef,
  computed,
  contentChildren,
  effect,
  inject,
  input,
  output,
  signal
} from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { MoneyPipe } from '../../pipes/money.pipe';
import { PagerComponent } from '../pager/pager.component';
import { ResponsiveTablesDirective } from './table-shell.component';

export type TableColumn<T = unknown> = {
  /** Row field name — or the cisCell template slot name when type='template'. */
  key: string;
  /** Header text or translation key. */
  label: string;
  type?: 'text' | 'money' | 'number' | 'badge' | 'template';
  align?: 'left' | 'right' | 'center';
  /** Custom accessor; defaults to row[key]. */
  value?: (row: T) => unknown;
  /** Extra classes for the badge pill (type='badge'). */
  badgeClass?: (row: T) => string;
  /** Extra classes applied to th/td. */
  class?: string;
};

/** Custom cell template: <ng-template cisCell="status" let-row>…</ng-template> */
@Directive({
  selector: 'ng-template[cisCell]',
  standalone: true
})
export class CisCellDirective {
  readonly cisCell = input.required<string>();
  readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}

/**
 * Shared data-table model — replaces hand-written table markup.
 *
 * ```html
 * <cis-data-table [columns]="cols" [rows]="items()" [loading]="loading()">
 *   <ng-template cisCell="status" let-row>
 *     <span class="badge">{{ row.status }}</span>
 *   </ng-template>
 *   <ng-template cisCell="actions" let-row>
 *     <cis-row-actions>…</cis-row-actions>
 *   </ng-template>
 * </cis-data-table>
 * ```
 *
 * Pages must import BOTH `CisDataTableComponent` and `CisCellDirective`
 * (or the `CIS_TABLE_IMPORTS` const) for `cisCell` templates to work.
 */
@Component({
  selector: 'cis-data-table',
  standalone: true,
  imports: [CommonModule, TranslatePipe, MoneyPipe, PagerComponent],
  hostDirectives: [ResponsiveTablesDirective],
  template: `
    <cis-pager
      *ngIf="paged() && rows().length > 0"
      class="mb-3 block"
      [total]="rows().length"
      [(pageSize)]="pageSize"
      [(pageIndex)]="pageIndex"
    />

    <div class="overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th
              *ngFor="let c of columns()"
              class="px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300"
              [ngClass]="[alignClass(c.align), c.class ?? '']"
            >{{ c.label | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let row of displayed(); let i = index"
            class="border-t border-slate-100 dark:border-slate-700"
            [class.cursor-pointer]="clickable()"
            (click)="rowClick.emit(row)"
          >
            <td
              *ngFor="let c of columns()"
              class="px-3 py-2 text-slate-900 dark:text-slate-300"
              [ngClass]="[alignClass(c.align), c.class ?? '']"
            >
              <ng-container [ngSwitch]="c.type ?? 'text'">
                <ng-container *ngSwitchCase="'template'">
                  <ng-container *ngTemplateOutlet="templateFor(c.key); context: { $implicit: row, index: i }" />
                </ng-container>
                <ng-container *ngSwitchCase="'money'">{{ cellMoney(c, row) | money }}</ng-container>
                <ng-container *ngSwitchCase="'badge'">
                  <span class="inline-block rounded-full px-2 py-0.5 text-xs font-semibold" [ngClass]="badgeClass(c, row)">{{ cellValue(c, row) }}</span>
                </ng-container>
                <ng-container *ngSwitchDefault>{{ cellValue(c, row) ?? '—' }}</ng-container>
              </ng-container>
            </td>
          </tr>
          <tr *ngIf="!loading() && rows().length === 0" class="border-t border-slate-100 dark:border-slate-700">
            <td [attr.colspan]="columns().length" class="px-3 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
              {{ emptyMessage() | translate }}
            </td>
          </tr>
          <tr *ngIf="loading()" class="border-t border-slate-100 dark:border-slate-700">
            <td [attr.colspan]="columns().length" class="px-3 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
              {{ 'common.loading' | translate }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class CisDataTableComponent<T = unknown> {
  columns = input.required<TableColumn<T>[]>();
  rows = input.required<T[]>();
  loading = input(false);
  /** Translation key (or text) for the empty state. */
  emptyMessage = input('common.noData');
  /** Built-in pager; set false when the page handles pagination itself. */
  paged = input(true);
  pageSize = signal(10);
  pageIndex = signal(0);

  /** Set true when handling rowClick — rows show pointer cursor. */
  clickable = input(false);
  rowClick = output<T>();

  private readonly cellTemplates = contentChildren(CisCellDirective);
  private readonly templateMap = computed(() => {
    const map = new Map<string, TemplateRef<unknown>>();
    for (const d of this.cellTemplates()) map.set(d.cisCell(), d.template);
    return map;
  });

  displayed = computed(() => {
    if (!this.paged()) return this.rows();
    const start = this.pageIndex() * this.pageSize();
    return this.rows().slice(start, start + this.pageSize());
  });

  /** Clamp page when the row set shrinks (filters, deletes). */
  private readonly clamp = effect(() => {
    const total = this.rows().length;
    const size = this.pageSize();
    if (this.pageIndex() > 0 && this.pageIndex() * size >= Math.max(total, 1)) {
      this.pageIndex.set(Math.max(0, Math.ceil(Math.max(total, 1) / size) - 1));
    }
  });

  templateFor(key: string): TemplateRef<unknown> | null {
    return this.templateMap().get(key) ?? null;
  }

  cellValue(col: TableColumn<T>, row: T): unknown {
    if (col.value) return col.value(row);
    return (row as Record<string, unknown>)?.[col.key];
  }

  cellMoney(col: TableColumn<T>, row: T): number | null {
    const v = this.cellValue(col, row);
    const n = Number(v);
    return v == null || Number.isNaN(n) ? null : n;
  }

  badgeClass(col: TableColumn<T>, row: T): string {
    return col.badgeClass?.(row) ?? 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300';
  }

  alignClass(align?: 'left' | 'right' | 'center'): string {
    return align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left';
  }
}

/** Convenience import bundle for standalone pages using cisCell templates. */
export const CIS_TABLE_IMPORTS = [CisDataTableComponent, CisCellDirective] as const;
