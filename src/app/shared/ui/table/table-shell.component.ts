import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Directive, ElementRef, Input, NgZone, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[cisResponsiveTables]',
  standalone: true
})
export class ResponsiveTablesDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private observer?: MutationObserver;

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.refresh();
      if (typeof MutationObserver === 'undefined') return;
      this.observer = new MutationObserver(() => this.refresh());
      this.observer.observe(this.element.nativeElement, { childList: true, characterData: true, subtree: true });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private refresh(): void {
    for (const table of Array.from(this.element.nativeElement.querySelectorAll('table'))) {
      const header = table.tHead?.rows.item(0);
      if (!header) continue;
      table.classList.add('cis-responsive-table');
      table.setAttribute('role', 'table');
      table.tHead!.setAttribute('role', 'rowgroup');
      header.setAttribute('role', 'row');
      const labels = Array.from(header.cells).flatMap(cell => {
        cell.setAttribute('role', 'columnheader');
        cell.setAttribute('scope', 'col');
        return Array<string>(cell.colSpan).fill(cell.textContent?.trim() ?? '');
      });
      for (const body of Array.from(table.tBodies)) {
        body.setAttribute('role', 'rowgroup');
        for (const row of Array.from(body.rows)) {
          row.setAttribute('role', 'row');
          let column = 0;
          for (const cell of Array.from(row.cells)) {
            cell.setAttribute('role', cell.tagName === 'TH' ? 'rowheader' : 'cell');
            if (cell.colSpan > 1) {
              cell.setAttribute('data-full-width', '');
              cell.removeAttribute('data-label');
            } else {
              cell.removeAttribute('data-full-width');
              cell.setAttribute('data-label', labels[column] ?? '');
            }
            column += cell.colSpan;
          }
        }
      }
    }
  }
}

@Component({
  selector: 'cis-table-shell',
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [ResponsiveTablesDirective],
  templateUrl: './table-shell.component.html',
  styleUrl: './table-shell.component.scss'
})
export class TableShellComponent {
  @Input() title: string | null = null;
  @Input() subtitle: string | null = null;
  @Input() empty = false;
  @Input() emptyMessage = 'No data';
}
