import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { MoneyPipe } from '../../pipes/money.pipe';
import { ReceiptData, ReceiptPrintService } from '../../services/receipt-print.service';
import { ModalComponent } from '../modal/modal.component';

/**
 * Receipt preview dialog: shows the sale receipt exactly as it will be printed,
 * then the user clicks "Print" to send it to the printer.
 */
@Component({
  selector: 'cis-receipt-dialog',
  standalone: true,
  imports: [CommonModule, ModalComponent, TranslatePipe, MoneyPipe],
  template: `
  <cis-modal [open]="open" [title]="'receipt.title' | translate" maxWidthClass="max-w-sm" (close)="close.emit()">
    <ng-container *ngIf="order as o">
      <!-- Paper-style receipt preview -->
      <div class="mx-auto w-full max-w-[300px] rounded-lg bg-white p-4 font-mono text-[12px] leading-5 text-black shadow ring-1 ring-slate-200">
        <div class="text-center text-[15px] font-bold tracking-wide">GYLA COSMETICS</div>
        <div class="text-center text-[10px] italic">Your Beauty, Our Duty</div>
        <div class="my-2 border-y border-dashed border-black py-1 text-center font-bold">SALES RECEIPT / RISITI</div>

        <div class="text-[11px]">
          <div class="flex justify-between"><span>Date / Tarehe</span><span>{{ o.soldAt }}</span></div>
          <div class="flex justify-between" *ngIf="o.referenceNumber"><span>Ref / Kumbukumbu</span><span>{{ o.referenceNumber }}</span></div>
          <div class="flex justify-between" *ngIf="o.customer"><span>Customer / Mteja</span><span>{{ o.customer }}</span></div>
          <div class="flex justify-between" *ngIf="o.soldBy"><span>Cashier / Muuzaji</span><span>{{ o.soldBy }}</span></div>
          <div class="flex justify-between" *ngIf="o.paymentMethod"><span>Payment / Malipo</span><span>{{ o.paymentMethod }}</span></div>
        </div>

        <div class="my-2 border-t border-dashed border-black"></div>

        <div class="border-b border-dotted border-slate-300 py-1.5" *ngFor="let l of o.lines">
          <div class="flex justify-between gap-2">
            <span class="min-w-0 flex-1">{{ l.productName }}</span>
            <span class="whitespace-nowrap">{{ lineTotal(l) | money }}</span>
          </div>
          <div class="text-[10px] text-slate-600">{{ l.quantity }} × {{ l.unitPrice | money }}</div>
          <div class="text-[10px] font-bold" *ngIf="(l.returnedQuantity ?? 0) > 0">↩ RUDISHWA ×{{ l.returnedQuantity }}</div>
        </div>

        <div class="my-2 border-t border-dashed border-black"></div>

        <div class="space-y-0.5 text-[11px]">
          <div class="flex justify-between"><span>Subtotal / Jumla ndogo</span><span>{{ gross(o) | money }}</span></div>
          <div class="flex justify-between" *ngIf="discount(o) > 0"><span>Discount / Punguzo</span><span>-{{ discount(o) | money }}</span></div>
          <div class="my-1 flex justify-between border-y border-dashed border-black py-1 text-[14px] font-bold"><span>TOTAL / JUMLA</span><span>{{ net(o) | money }}</span></div>
          <ng-container *ngIf="returned(o) > 0">
            <div class="flex justify-between"><span>Returns / Marejesho</span><span>-{{ returned(o) | money }}</span></div>
            <div class="flex justify-between"><span>Net / Iliyobaki</span><span>{{ netAfter(o) | money }}</span></div>
          </ng-container>
          <div class="flex justify-between"><span>Paid / Amelipa</span><span>{{ received(o) | money }}</span></div>
          <div class="flex justify-between" *ngIf="change(o) > 0"><span>Change / Chenji</span><span>{{ change(o) | money }}</span></div>
          <div class="flex justify-between font-bold" *ngIf="debt(o) > 0"><span>DEBT / DENI</span><span>{{ debt(o) | money }}</span></div>
        </div>

        <div class="mt-3 text-center text-[10px]">Asante kwa kununua!<br/>Karibu tena — Thank you</div>
      </div>

      <div class="mt-4 flex justify-end gap-2">
        <button type="button" class="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" (click)="close.emit()">
          {{ 'common.cancel' | translate }}
        </button>
        <button type="button" class="inline-flex items-center gap-1.5 rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600" (click)="doPrint()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9V4a1 1 0 011-1h10a1 1 0 011 1v5" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="7" rx="1" /></svg>
          {{ 'sales.printReceipt' | translate }}
        </button>
      </div>
    </ng-container>
  </cis-modal>
  `
})
export class ReceiptDialogComponent {
  private readonly printer = inject(ReceiptPrintService);

  @Input() open = false;
  @Input() order: ReceiptData | null = null;
  @Output() close = new EventEmitter<void>();

  lineTotal(l: { quantity: number; unitPrice: number }): number {
    return Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0);
  }
  gross(o: ReceiptData): number {
    return (o.lines ?? []).reduce((s, l) => s + this.lineTotal(l), 0);
  }
  discount(o: ReceiptData): number {
    return Number(o.discount ?? 0);
  }
  net(o: ReceiptData): number {
    return Math.max(0, this.gross(o) - this.discount(o));
  }
  returned(o: ReceiptData): number {
    return Number(o.returnedValue ?? 0);
  }
  netAfter(o: ReceiptData): number {
    return Math.max(0, this.net(o) - this.returned(o));
  }
  received(o: ReceiptData): number {
    return o.amountReceived == null ? this.netAfter(o) : Number(o.amountReceived);
  }
  change(o: ReceiptData): number {
    return Math.max(0, this.received(o) - this.netAfter(o));
  }
  debt(o: ReceiptData): number {
    return Math.max(0, this.netAfter(o) - this.received(o));
  }
  doPrint(): void {
    if (this.order) this.printer.print(this.order);
  }
}
