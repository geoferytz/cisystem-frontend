import { Injectable, signal } from '@angular/core';

export type AuthState = {
  accessToken: string | null;
};

const STORAGE_KEY = 'cisystem.accessToken';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _accessToken = signal<string | null>(localStorage.getItem(STORAGE_KEY));

  accessToken = this._accessToken.asReadonly();

  isAuthenticated(): boolean {
    return !!this._accessToken();
  }

  setAccessToken(token: string): void {
    localStorage.setItem(STORAGE_KEY, token);
    this._accessToken.set(token);
  }

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
    this._accessToken.set(null);
  }
}
