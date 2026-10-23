import { Injectable } from '@angular/core';

export type ReportTable = {
  title?: string;
  headers: string[];
  rows: (string | number | null | undefined)[][];
  /** 'l' | 'r' | 'c' per column; defaults left. */
  align?: ('l' | 'r' | 'c')[];
};

/**
 * Prints an A4-style business report in a popup window:
 * brand header, metadata row, summary chips, one or more tables, footer.
 */
@Injectable({ providedIn: 'root' })
export class ReportPrintService {

  private esc(v: string | number | null | undefined): string {
    return String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  private money(v: number): string {
    return 'TSH ' + Math.round(v).toLocaleString('en-US');
  }

  print(opts: {
    title: string;
    subtitle?: string;
    meta?: { label: string; value: string }[];
    summary?: { label: string; value: string }[];
    tables: ReportTable[];
    printedBy?: string;
  }): void {
    const now = new Date().toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    const printedBy = opts.printedBy || 'System';

    const metaHtml = (opts.meta ?? []).length
      ? `<div class="meta">${opts.meta!.map(m => `<div><span class="ml">${this.esc(m.label)}:</span> <b>${this.esc(m.value)}</b></div>`).join('')}</div>` : '';

    const summaryHtml = (opts.summary ?? []).length
      ? `<div class="summary">${opts.summary!.map(s => `<div class="chip"><div class="sl">${this.esc(s.label)}</div><div class="sv">${this.esc(s.value)}</div></div>`).join('')}</div>` : '';

    const tablesHtml = opts.tables.map(t => `
      ${t.title ? `<div class="tt">${this.esc(t.title)}</div>` : ''}
      <table>
        <thead><tr>${t.headers.map((h, i) => `<th class="${t.align?.[i] === 'r' ? 'r' : t.align?.[i] === 'c' ? 'c' : ''}">${this.esc(h)}</th>`).join('')}</tr></thead>
        <tbody>
          ${t.rows.length ? t.rows.map(r => `<tr>${r.map((c, i) => `<td class="${t.align?.[i] === 'r' ? 'r' : t.align?.[i] === 'c' ? 'c' : ''}">${this.esc(c)}</td>`).join('')}</tr>`).join('')
            : `<tr><td colspan="${t.headers.length}" class="empty">No data</td></tr>`}
        </tbody>
      </table>`).join('');

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${this.esc(opts.title)}</title>
<style>
  @page { size: A4; margin: 14mm; }
  * { box-sizing: border-box; margin: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; color: #1e293b; }
  .brand { text-align: center; }
  .brand .n { font-size: 20px; font-weight: 800; letter-spacing: 1px; color: #be185d; }
  .brand .t { font-size: 11px; font-style: italic; color: #64748b; }
  .title { margin-top: 10px; padding: 8px 0; border-top: 2px solid #be185d; border-bottom: 2px solid #be185d; text-align: center; font-size: 15px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
  .sub { text-align: center; font-size: 11px; color: #64748b; margin-top: 4px; }
  .meta { display: flex; flex-wrap: wrap; gap: 8px 24px; margin-top: 12px; font-size: 11.5px; }
  .meta .ml { color: #64748b; }
  .summary { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 12px; }
  .chip { flex: 1; min-width: 110px; border: 1px solid #e2e8f0; border-radius: 10px; padding: 8px 12px; background: #f8fafc; }
  .chip .sl { font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: .5px; }
  .chip .sv { font-size: 16px; font-weight: 800; margin-top: 2px; }
  .tt { font-size: 12px; font-weight: 700; margin: 18px 0 6px; color: #be185d; }
  table { width: 100%; border-collapse: collapse; margin-top: 8px; }
  th { background: #f1f5f9; font-size: 10.5px; text-transform: uppercase; letter-spacing: .5px; color: #475569; padding: 7px 8px; text-align: left; border-bottom: 2px solid #cbd5e1; }
  td { padding: 6px 8px; border-bottom: 1px solid #e2e8f0; font-size: 11.5px; }
  .r { text-align: right; } .c { text-align: center; }
  td.empty { text-align: center; color: #94a3b8; padding: 14px; }
  .foot { margin-top: 24px; padding-top: 8px; border-top: 1px dashed #cbd5e1; display: flex; justify-content: space-between; font-size: 10px; color: #94a3b8; }
</style></head><body>
  <div class="brand"><div class="n">GYLA COSMETICS</div><div class="t">Your Beauty, Our Duty</div></div>
  <div class="title">${this.esc(opts.title)}</div>
  ${opts.subtitle ? `<div class="sub">${this.esc(opts.subtitle)}</div>` : ''}
  ${metaHtml}
  ${summaryHtml}
  ${tablesHtml}
  <div class="foot"><span>Generated: ${now}</span><span>Printed by: ${this.esc(printedBy)}</span><span>CISYSTEM</span></div>
  <script>window.onload = function(){ window.print(); }<\/script>
</body></html>`;

    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) return;
    win.document.write(html);
    win.document.close();
  }

  moneyStr(v: number): string {
    return this.money(v);
  }
}
