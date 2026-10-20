import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'cis-toasts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pointer-events-none fixed right-4 top-4 z-[100] flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-2" aria-live="polite">
      <div
        *ngFor="let t of toast.toasts()"
        class="pointer-events-auto flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold shadow-lg ring-1"
        [ngClass]="{
          'bg-emerald-600 text-white ring-emerald-700/40': t.type === 'success',
          'bg-[#B81104] text-white ring-red-700/40': t.type === 'error',
          'bg-slate-800 text-white ring-slate-900/40': t.type === 'info'
        }"
        role="status"
      >
        <svg *ngIf="t.type === 'success'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" /></svg>
        <svg *ngIf="t.type === 'error'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01M12 3l9 18H3L12 3z" /></svg>
        <svg *ngIf="t.type === 'info'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-4 w-4 shrink-0"><circle cx="12" cy="12" r="9" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 8h.01M12 11v5" /></svg>
        <span class="flex-1">{{ t.message }}</span>
      </div>
    </div>
  `
})
export class ToastsComponent {
  readonly toast = inject(ToastService);
}
