import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GraphqlService } from '../../../core/graphql/graphql.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { MoneyPipe } from '../../pipes/money.pipe';
import { ModalComponent } from '../modal/modal.component';

export type ReturnCondition = 'RESALABLE' | 'DAMAGED' | 'EXPIRED';

type ReturnableLine = {
  lineId: string;
  productId: string;
  sku: string;
  productName: string;
  soldQuantity: number;
  returnedQuantity: number;
  returnableQuantity: number;
  unitPrice: number;
  effectiveUnitPrice: number;
  location: string | null;
};

type ReturnableSale = {
  salesOrderId: string;
  referenceNumber: string | null;
  customer: string | null;
  customerId: string | null;
  soldAt: string;
  withinWindow: boolean;
  windowDays: number;
  customerDebt: number;
  lines: ReturnableLine[];
};

type ProductOption = { id: string; sku: string; name: string; sellingPrice: number | null; active: boolean };

type ReturnRow = { line: ReturnableLine; selected: boolean; qty: number; condition: ReturnCondition };
type NewLine = { productId: string; sku: string; name: string; quantity: number; unitPrice: number };

export type SalesReturnResult = {
  id: string;
  reference: string;
  isExchange: boolean;
  returnValue: number;
  lossAmount: number;
  refundAmount: number;
  debtCreditAmount: number;
  settlementAmount: number;
  exchangeReference: string | null;
};

const RESULT_FIELDS = 'id reference isExchange returnValue lossAmount refundAmount debtCreditAmount settlementAmount exchangeReference';

/**
 * Shared "Return / Exchange" dialog. Give it a salesOrderId and it loads what can still be returned,
 * lets the user pick quantities + condition, and (optionally) products to exchange for.
 */
@Component({
  selector: 'cis-return-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, MoneyPipe, TranslatePipe],
  templateUrl: './return-dialog.component.html'
})
export class ReturnDialogComponent implements OnChanges {
  private readonly gql = inject(GraphqlService);

  @Input({ required: true }) open = false;
  @Input() salesOrderId: string | number | null = null;
  @Input() isAdmin = false;
  @Input() location: string | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() completed = new EventEmitter<SalesReturnResult>();

  readonly mode = signal<'return' | 'exchange'>('return');
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly error = signal<string | null>(null);
  readonly sale = signal<ReturnableSale | null>(null);
  readonly rows = signal<ReturnRow[]>([]);
  readonly reason = signal('');
  readonly refundMethod = signal('CASH');
  readonly debtCredit = signal<number | null>(null);
  readonly overrideWindow = signal(false);

  readonly products = signal<ProductOption[]>([]);
  readonly productQuery = signal('');
  readonly newLines = signal<NewLine[]>([]);
  readonly paymentMethod = signal('CASH');
  readonly amountReceived = signal<number | null>(null);

  readonly selectedRows = computed(() => this.rows().filter(r => r.selected && r.qty > 0));
  readonly returnValue = computed(() => this.selectedRows().reduce((s, r) => s + r.qty * r.line.effectiveUnitPrice, 0));
  readonly newTotal = computed(() => this.newLines().reduce((s, l) => s + l.quantity * l.unitPrice, 0));
  /** + customer pays extra, − shop refunds the difference. */
  readonly difference = computed(() => this.newTotal() - this.returnValue());
  readonly refundTotal = computed(() => this.mode() === 'return' ? this.returnValue() : Math.max(0, -this.difference()));
  readonly cashRefund = computed(() => Math.max(0, this.refundTotal() - (this.debtCredit() ?? 0)));
  readonly hasDebt = computed(() => (this.sale()?.customerDebt ?? 0) > 0 && !!this.sale()?.customerId);
  readonly windowBlocked = computed(() => !!this.sale() && !this.sale()!.withinWindow && !(this.isAdmin && this.overrideWindow()));

  readonly filteredProducts = computed(() => {
    const q = this.productQuery().trim().toLowerCase();
    const list = this.products().filter(p => p.active);
    if (!q) return list.slice(0, 30);
    return list.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)).slice(0, 30);
  });

  readonly canSubmit = computed(() => {
    if (this.saving() || this.loading() || this.windowBlocked() || !this.selectedRows().length) return false;
    if (this.mode() === 'exchange' && !this.newLines().length) return false;
    const credit = this.debtCredit() ?? 0;
    if (credit < 0 || credit > this.refundTotal() + 0.001) return false;
    if (credit > (this.sale()?.customerDebt ?? 0) + 0.001) return false;
    return true;
  });

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['open'] || changes['salesOrderId']) && this.open && this.salesOrderId != null) this.load();
    if (changes['open'] && !this.open) this.reset();
  }

  setMode(mode: 'return' | 'exchange'): void {
    this.mode.set(mode);
    this.error.set(null);
    if (mode === 'exchange' && !this.products().length) this.loadProducts();
  }

  toggleRow(i: number): void {
    this.rows.update(rows => rows.map((r, idx) => idx === i ? { ...r, selected: !r.selected, qty: !r.selected && r.qty === 0 ? r.line.returnableQuantity : r.qty } : r));
  }

  setQty(i: number, value: string | number): void {
    const n = Math.floor(Number(value) || 0);
    this.rows.update(rows => rows.map((r, idx) => idx === i ? { ...r, qty: Math.max(0, Math.min(r.line.returnableQuantity, n)) } : r));
  }

  setCondition(i: number, value: string): void {
    this.rows.update(rows => rows.map((r, idx) => idx === i ? { ...r, condition: value as ReturnCondition } : r));
  }

  addProduct(p: ProductOption): void {
    this.newLines.update(lines => {
      const existing = lines.find(l => l.productId === p.id);
      if (existing) return lines.map(l => l.productId === p.id ? { ...l, quantity: l.quantity + 1 } : l);
      return [...lines, { productId: p.id, sku: p.sku, name: p.name, quantity: 1, unitPrice: Number(p.sellingPrice ?? 0) }];
    });
    this.productQuery.set('');
  }

  setNewQty(i: number, value: string | number): void {
    const n = Math.max(1, Math.floor(Number(value) || 1));
    this.newLines.update(lines => lines.map((l, idx) => idx === i ? { ...l, quantity: n } : l));
  }

  setNewPrice(i: number, value: string | number): void {
    const n = Math.max(0, Number(value) || 0);
    this.newLines.update(lines => lines.map((l, idx) => idx === i ? { ...l, unitPrice: n } : l));
  }

  removeNewLine(i: number): void {
    this.newLines.update(lines => lines.filter((_, idx) => idx !== i));
  }

  useFullDebtCredit(): void {
    this.debtCredit.set(Math.min(this.refundTotal(), this.sale()?.customerDebt ?? 0));
  }

  submit(): void {
    if (!this.canSubmit() || !this.sale()) return;
    this.saving.set(true);
    this.error.set(null);
    const lines = this.selectedRows().map(r => ({ salesOrderLineId: r.line.lineId, quantity: r.qty, condition: r.condition }));
    const common = {
      salesOrderId: this.sale()!.salesOrderId,
      reason: this.reason().trim() || null,
      refundMethod: this.refundMethod(),
      debtCreditAmount: this.debtCredit() || null,
      overrideWindow: this.isAdmin && this.overrideWindow()
    };
    type Res = { createSalesReturn?: SalesReturnResult; createExchange?: SalesReturnResult };
    const req = this.mode() === 'return'
      ? this.gql.request<Res>(
          `mutation CreateSalesReturn($input: CreateSalesReturnInput!) { createSalesReturn(input: $input) { ${RESULT_FIELDS} } }`,
          { input: { ...common, lines } })
      : this.gql.request<Res>(
          `mutation CreateExchange($input: CreateExchangeInput!) { createExchange(input: $input) { ${RESULT_FIELDS} } }`,
          { input: {
            ...common,
            returnLines: lines,
            newLines: this.newLines().map(l => ({ productId: l.productId, quantity: l.quantity, unitPrice: l.unitPrice, location: this.location })),
            paymentMethod: this.paymentMethod(),
            amountReceived: this.difference() > 0 ? (this.amountReceived() ?? this.difference()) : 0
          } });
    req.subscribe({
      next: (res: Res) => {
        this.saving.set(false);
        const result = res.createSalesReturn ?? res.createExchange;
        if (result) this.completed.emit(result);
        this.close.emit();
      },
      error: (e: unknown) => {
        this.saving.set(false);
        this.error.set(e instanceof Error ? e.message : 'Failed to record return');
      }
    });
  }

  private load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.gql.request<{ returnableLines: ReturnableSale }>(
      `query ReturnableLines($id: ID!) { returnableLines(salesOrderId: $id) {
        salesOrderId referenceNumber customer customerId soldAt withinWindow windowDays customerDebt
        lines { lineId productId sku productName soldQuantity returnedQuantity returnableQuantity unitPrice effectiveUnitPrice location }
      } }`,
      { id: String(this.salesOrderId) }
    ).subscribe({
      next: res => {
        this.sale.set(res.returnableLines);
        this.rows.set(res.returnableLines.lines.map(line => ({ line, selected: false, qty: 0, condition: 'RESALABLE' as ReturnCondition })));
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load sale');
        this.loading.set(false);
      }
    });
  }

  private loadProducts(): void {
    this.gql.request<{ products: ProductOption[] }>('query ReturnProducts { products { id sku name sellingPrice active } }').subscribe({
      next: res => this.products.set(res.products ?? []),
      error: () => this.products.set([])
    });
  }

  private reset(): void {
    this.mode.set('return');
    this.sale.set(null);
    this.rows.set([]);
    this.reason.set('');
    this.refundMethod.set('CASH');
    this.debtCredit.set(null);
    this.overrideWindow.set(false);
    this.newLines.set([]);
    this.productQuery.set('');
    this.paymentMethod.set('CASH');
    this.amountReceived.set(null);
    this.error.set(null);
  }
}
