import { Injectable } from '@angular/core';

export type ReceiptLine = {
  productName: string;
  quantity: number;
  unitPrice: number;
  returnedQuantity?: number;
};

export type ReceiptData = {
  referenceNumber?: string | null;
  soldAt: string;
  soldBy?: string | null;
  customer?: string | null;
  paymentMethod?: string | null;
  amountReceived?: number | null;
  discount?: number | null;
  lines: ReceiptLine[];
  returnedValue?: number | null;
};

@Injectable({ providedIn: 'root' })
export class ReceiptPrintService {
  private esc(s: string | null | undefined): string {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  private money(v: number): string {
    return 'TSH ' + Math.round(v).toLocaleString('en-US');
  }

  /**
   * Opens a small 80mm-style receipt window and triggers the browser print dialog.
   * Works for a fresh counter sale or any stored sales order.
   */
  print(order: ReceiptData): void {
    const lines = order.lines ?? [];
    const gross = lines.reduce((s, l) => s + l.quantity * l.unitPrice, 0);
    const discount = Number(order.discount ?? 0);
    const net = Math.max(0, gross - discount);
    const returned = Number(order.returnedValue ?? 0);
    const netAfterReturns = Math.max(0, net - returned);
    const received = order.amountReceived == null ? netAfterReturns : Number(order.amountReceived);
    const debt = Math.max(0, netAfterReturns - received);
    const change = Math.max(0, received - netAfterReturns);
    const date = new Date(order.soldAt);
    const dateStr = isNaN(date.getTime()) ? order.soldAt : date.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    const lineRows = lines.map(l => {
      const total = l.quantity * l.unitPrice;
      const ret = (l.returnedQuantity ?? 0) > 0
        ? `<div class="ret">↩ RUDISHWA ×${l.returnedQuantity}</div>` : '';
      return `<tr>
        <td class="name"><div>${this.esc(l.productName)}</div><div class="muted">${l.quantity} × ${this.money(l.unitPrice)}</div>${ret}</td>
        <td class="amt">${this.money(total)}</td>
      </tr>`;
    }).join('');

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Receipt ${this.esc(order.referenceNumber ?? '')}</title>
<style>
  @page { size: 80mm auto; margin: 4mm; }
  * { box-sizing: border-box; margin: 0; }
  body { font-family: 'Courier New', monospace; font-size: 12px; color: #000; width: 72mm; margin: 0 auto; }
  .center { text-align: center; }
  .brand { font-size: 16px; font-weight: bold; letter-spacing: .5px; }
  .tag { font-size: 10px; font-style: italic; }
  .title { font-size: 12px; font-weight: bold; margin-top: 6px; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; }
  table { width: 100%; border-collapse: collapse; }
  .meta td { font-size: 11px; padding: 1px 0; }
  .meta td:last-child { text-align: right; }
  .items td { padding: 3px 0; border-bottom: 1px dotted #ccc; vertical-align: top; }
  .name .muted { font-size: 10px; color: #444; }
  .name .ret { font-size: 10px; color: #000; font-weight: bold; }
  .amt { text-align: right; white-space: nowrap; }
  .totals td { padding: 1px 0; font-size: 11px; }
  .totals td:last-child { text-align: right; white-space: nowrap; }
  .grand td { font-size: 14px; font-weight: bold; border-top: 1px dashed #000; border-bottom: 1px dashed #000; padding: 4px 0; }
  .foot { margin-top: 8px; font-size: 10px; text-align: center; }
  .hr { border-top: 1px dashed #000; margin: 6px 0; }
</style></head><body>
  <div class="center brand">GYLA COSMETICS</div>
  <div class="center tag">Your Beauty, Our Duty</div>
  <div class="center title">SALES RECEIPT / RISITI</div>
  <table class="meta">
    <tr><td>Date / Tarehe</td><td>${this.esc(dateStr)}</td></tr>
    ${order.referenceNumber ? `<tr><td>Ref / Kumbukumbu</td><td>${this.esc(order.referenceNumber)}</td></tr>` : ''}
    ${order.customer ? `<tr><td>Customer / Mteja</td><td>${this.esc(order.customer)}</td></tr>` : ''}
    ${order.soldBy ? `<tr><td>Cashier / Muuzaji</td><td>${this.esc(order.soldBy)}</td></tr>` : ''}
    ${order.paymentMethod ? `<tr><td>Payment / Malipo</td><td>${this.esc(order.paymentMethod)}</td></tr>` : ''}
  </table>
  <div class="hr"></div>
  <table class="items">${lineRows}</table>
  <div class="hr"></div>
  <table class="totals">
    <tr><td>Subtotal / Jumla ndogo</td><td>${this.money(gross)}</td></tr>
    ${discount > 0 ? `<tr><td>Discount / Punguzo</td><td>-${this.money(discount)}</td></tr>` : ''}
    <tr class="grand"><td>TOTAL / JUMLA</td><td>${this.money(net)}</td></tr>
    ${returned > 0 ? `<tr><td>Returns / Marejesho</td><td>-${this.money(returned)}</td></tr><tr><td>Net / Iliyobaki</td><td>${this.money(netAfterReturns)}</td></tr>` : ''}
    <tr><td>Paid / Amelipa</td><td>${this.money(received)}</td></tr>
    ${change > 0 ? `<tr><td>Change / Chenji</td><td>${this.money(change)}</td></tr>` : ''}
    ${debt > 0 ? `<tr><td><b>DEBT / DENI</b></td><td><b>${this.money(debt)}</b></td></tr>` : ''}
  </table>
  <div class="foot">Asante kwa kununua!<br/>Karibu tena — Thank you</div>
  <script>window.onload = function(){ window.print(); }<\/script>
</body></html>`;

    const win = window.open('', '_blank', 'width=380,height=600');
    if (!win) return;
    win.document.write(html);
    win.document.close();
  }
}
