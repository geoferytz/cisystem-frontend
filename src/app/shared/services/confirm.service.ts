import { Injectable, signal } from '@angular/core';

export type ConfirmState = {
  open: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  confirmButtonClass: string;
};

const initialState: ConfirmState = {
  open: false,
  title: 'Confirm',
  message: 'Are you sure?',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  confirmButtonClass: 'bg-red-700 hover:bg-red-800'
};

@Injectable({ providedIn: 'root' })
export class ConfirmService {
  private readonly _state = signal<ConfirmState>(initialState);
  readonly state = this._state.asReadonly();

  open(state?: Partial<ConfirmState>): void {
    this._state.set({ ...initialState, ...(state ?? {}), open: true });
  }

  close(): void {
    this._state.set({ ...this._state(), open: false });
  }
}
