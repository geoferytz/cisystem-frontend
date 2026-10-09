import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'cis-row-actions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
      [attr.aria-expanded]="open()"
      aria-haspopup="menu"
      aria-label="Actions"
      (click)="toggle($event)"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="5" r="1.7" />
        <circle cx="12" cy="12" r="1.7" />
        <circle cx="12" cy="19" r="1.7" />
      </svg>
    </button>
    <ng-container *ngIf="open()">
      <div class="fixed inset-0 z-[70]" (click)="close()" aria-hidden="true"></div>
      <div
        class="fixed z-[71] w-44 overflow-hidden rounded-xl bg-white py-1 shadow-lg ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700"
        [style.left.px]="left()"
        [style.top.px]="openUp() ? null : top()"
        [style.bottom.px]="openUp() ? bottom() : null"
        role="menu"
        (click)="close()"
      >
        <ng-content />
      </div>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `
  ]
})
export class RowActionsMenuComponent {
  open = signal(false);
  top = signal(0);
  left = signal(0);
  bottom = signal(0);
  openUp = signal(false);

  toggle(event: MouseEvent): void {
    event.stopPropagation();
    if (this.open()) {
      this.close();
      return;
    }
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const menuWidth = 176;
    const spaceBelow = window.innerHeight - rect.bottom;
    this.openUp.set(spaceBelow < 200 && rect.top > spaceBelow);
    this.top.set(rect.bottom + 6);
    this.bottom.set(window.innerHeight - rect.top + 6);
    this.left.set(Math.max(8, Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 8)));
    this.open.set(true);
  }

  close(): void {
    this.open.set(false);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.close();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.close();
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
