import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info';

export type ToastMessage = {
  id: string;
  type: ToastType;
  message: string;
};

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly _toasts = signal<ToastMessage[]>([]);
  readonly toasts = this._toasts.asReadonly();

  show(type: ToastType, message: string): void {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const toast: ToastMessage = { id, type, message };
    this._toasts.update((list) => [...list, toast]);

    window.setTimeout(() => {
      this._toasts.update((list) => list.filter((t) => t.id !== id));
    }, 3500);
  }

  success(message: string): void {
    this.show('success', message);
  }

  error(message: string): void {
    this.show('error', message);
  }

  info(message: string): void {
    this.show('info', message);
  }

  clear(): void {
    this._toasts.set([]);
  }
}
