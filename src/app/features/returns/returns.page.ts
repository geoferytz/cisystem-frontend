import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { BranchContext } from '../../shared/services/branch-context.service';
import { PermissionService } from '../../shared/services/permission.service';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';

type ReturnLine = {
  id: string;
  productName: string;
  sku: string;
  batchNumber: string | null;
  quantity: number;
  unitPrice: number;
  condition: 'RESALABLE' | 'DAMAGED' | 'EXPIRED';
  lossAmount: number;
};

type SalesReturn = {
  id: string;
  reference: string;
  originalSalesOrderId: string;
  originalReference: string | null;
  exchangeSalesOrderId: string | null;
  exchangeReference: string | null;
  customer: string | null;
  returnedAt: string;
  returnedBy: string | null;
  reason: string | null;
  branch: string;
  returnValue: number;
  lossAmount: number;
  refundMethod: string | null;
  refundAmount: number;
  debtCreditAmount: number;
  settlementAmount: number;
  isExchange: boolean;
  lines: ReturnLine[];
};

const FIELDS = `id reference originalSalesOrderId originalReference exchangeSalesOrderId exchangeReference customer returnedAt returnedBy reason branch
  returnValue lossAmount refundMethod refundAmount debtCreditAmount settlementAmount isExchange
  lines { id productName sku batchNumber quantity unitPrice condition lossAmount }`;

@Component({
  selector: 'cis-returns-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MoneyPipe, TranslatePipe, ModalComponent, PagerComponent, RowActionsMenuComponent],
  templateUrl: './returns.page.html'
})
export class ReturnsPage {
  private readonly gql = inject(GraphqlService);
  readonly perm = inject(PermissionService);
  private readonly branchCtx = inject(BranchContext);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly returns = signal<SalesReturn[]>([]);
  readonly query = signal('');
  readonly typeFilter = signal<'all' | 'return' | 'exchange'>('all');
  readonly period = signal<'week' | 'month' | 'year' | 'all'>('month');
  readonly pageSize = signal(10);
  readonly pageIndex = signal(0);
  readonly details = signal<SalesReturn | null>(null);

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const type = this.typeFilter();
    const since = this.periodStart();
    return this.returns().filter(r => {
      if (type === 'return' && r.isExchange) return false;
      if (type === 'exchange' && !r.isExchange) return false;
      if (since && new Date(r.returnedAt).getTime() < since) return false;
      if (!q) return true;
      return [r.reference, r.originalReference, r.exchangeReference, r.customer, r.reason, ...r.lines.map(l => l.productName)]
        .some(v => (v ?? '').toLowerCase().includes(q));
    });
  });

  readonly paged = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    return this.filtered().slice(start, start + this.pageSize());
  });

  readonly statTotal = computed(() => this.filtered().length);
  readonly statValue = computed(() => this.filtered().reduce((s, r) => s + r.returnValue, 0));
  readonly statLoss = computed(() => this.filtered().reduce((s, r) => s + r.lossAmount, 0));
  readonly statExchanges = computed(() => this.filtered().filter(r => r.isExchange).length);

  constructor() {
    this.perm.load();
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.gql.request<{ salesReturns: SalesReturn[] }>(
      `query SalesReturns($branch: String) { salesReturns(branch: $branch) { ${FIELDS} } }`,
      { branch: this.branchCtx.effective() }
    ).subscribe({
      next: res => { this.returns.set(res.salesReturns ?? []); this.loading.set(false); },
      error: (e: unknown) => { this.error.set(e instanceof Error ? e.message : 'Failed to load returns'); this.loading.set(false); }
    });
  }

  setQuery(v: string): void { this.query.set(v); this.pageIndex.set(0); }
  setType(v: 'all' | 'return' | 'exchange'): void { this.typeFilter.set(v); this.pageIndex.set(0); }
  setPeriod(v: 'week' | 'month' | 'year' | 'all'): void { this.period.set(v); this.pageIndex.set(0); }

  conditionSummary(r: SalesReturn): string {
    const good = r.lines.filter(l => l.condition === 'RESALABLE').reduce((s, l) => s + l.quantity, 0);
    const bad = r.lines.filter(l => l.condition !== 'RESALABLE').reduce((s, l) => s + l.quantity, 0);
    return [good ? `${good} ok` : '', bad ? `${bad} loss` : ''].filter(Boolean).join(' · ');
  }

  private periodStart(): number | null {
    const now = new Date();
    switch (this.period()) {
      case 'week': { const d = new Date(now); d.setDate(d.getDate() - 7); return d.getTime(); }
      case 'month': { const d = new Date(now); d.setMonth(d.getMonth() - 1); return d.getTime(); }
      case 'year': { const d = new Date(now); d.setFullYear(d.getFullYear() - 1); return d.getTime(); }
      default: return null;
    }
  }
}
