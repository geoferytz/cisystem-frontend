import { Injectable, signal } from '@angular/core';

export type AuthState = {
  accessToken: string | null;
};

const STORAGE_KEY = 'cisystem.accessToken';
const LAST_EMAIL_KEY = 'cisystem.lastEmail';
const EXPIRY_LEEWAY_MS = 15_000;

function getStoredAccessToken(): string | null {
  return localStorage.getItem(STORAGE_KEY) ?? sessionStorage.getItem(STORAGE_KEY);
}

function tokenExpiresAt(token: string): number | null {
  try {
    const part = token.split('.')[1];
    if (!part) return null;
    const payload = JSON.parse(atob(part.replace(/-/g, '+').replace(/_/g, '/')));
    return typeof payload.exp === 'number' ? payload.exp * 1000 : null;
  } catch {
    return null;
  }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _accessToken = signal<string | null>(getStoredAccessToken());

  accessToken = this._accessToken.asReadonly();

  isAuthenticated(): boolean {
    const token = this._accessToken();
    if (!token) return false;
    const expiresAt = tokenExpiresAt(token);
    return expiresAt !== null && expiresAt - EXPIRY_LEEWAY_MS > Date.now();
  }

  expiresAt(): number | null {
    const token = this._accessToken();
    return token ? tokenExpiresAt(token) : null;
  }

  isPersistent(): boolean {
    return localStorage.getItem(STORAGE_KEY) !== null;
  }

  setAccessToken(token: string, remember = true): void {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);

    if (remember) {
      localStorage.setItem(STORAGE_KEY, token);
    } else {
      sessionStorage.setItem(STORAGE_KEY, token);
    }

    this._accessToken.set(token);
  }

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    this._accessToken.set(null);
  }

  lastEmail(): string | null {
    return localStorage.getItem(LAST_EMAIL_KEY);
  }

  setLastEmail(email: string): void {
    const trimmed = email.trim();
    if (trimmed) localStorage.setItem(LAST_EMAIL_KEY, trimmed);
  }
}
