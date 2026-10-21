import { Injectable, NgZone, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { GraphqlService } from '../graphql/graphql.service';

export const IDLE_LIMIT_MS = 30 * 60 * 1000;
const CHECK_INTERVAL_MS = 15 * 1000;
const REFRESH_WINDOW_MS = 5 * 60 * 1000;
const FORBIDDEN_PROBE_COOLDOWN_MS = 10 * 1000;
const ACTIVITY_EVENTS = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const;

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly auth = inject(AuthService);
  private readonly gql = inject(GraphqlService);
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);

  /** True while the "session expired" popup is shown after the idle limit. */
  readonly idleExpired = signal(false);

  private lastActivity = Date.now();
  private timer?: ReturnType<typeof setInterval>;
  private refreshing = false;
  private lastForbiddenProbe = 0;
  private started = false;

  start(): void {
    if (this.started || typeof window === 'undefined') return;
    this.started = true;
    this.zone.runOutsideAngular(() => {
      for (const event of ACTIVITY_EVENTS) {
        window.addEventListener(event, this.onActivity, { passive: true });
      }
      this.timer = setInterval(() => this.check(), CHECK_INTERVAL_MS);
    });
  }

  private readonly onActivity = (): void => {
    this.lastActivity = Date.now();
    if (!this.auth.accessToken()) return;
    if (!this.auth.isAuthenticated()) {
      this.expire();
      return;
    }
    this.maybeRefresh();
  };

  private check(): void {
    if (!this.auth.accessToken()) return;
    if (!this.auth.isAuthenticated()) {
      this.expire();
      return;
    }
    if (Date.now() - this.lastActivity > IDLE_LIMIT_MS) {
      // Show the session-expired popup; it stays until the user chooses to sign in again.
      this.idleExpired.set(true);
    }
  }

  /** Called from the popup: ends the session and routes to the login page. */
  confirmExpire(): void {
    if (!this.idleExpired()) return;
    this.idleExpired.set(false);
    this.expire();
  }

  private maybeRefresh(): void {
    const expiresAt = this.auth.expiresAt();
    if (this.refreshing || expiresAt === null || expiresAt - Date.now() > REFRESH_WINDOW_MS) return;
    this.refreshing = true;
    this.gql
      .request<{ refreshToken: { accessToken: string } }>('mutation RefreshToken { refreshToken { accessToken } }')
      .subscribe({
        next: data => {
          this.auth.setAccessToken(data.refreshToken.accessToken, this.auth.isPersistent());
          this.refreshing = false;
        },
        error: () => {
          this.refreshing = false;
        }
      });
  }

  handleForbidden(): void {
    if (!this.auth.accessToken()) return;
    if (!this.auth.isAuthenticated()) {
      this.expire();
      return;
    }
    const now = Date.now();
    if (now - this.lastForbiddenProbe < FORBIDDEN_PROBE_COOLDOWN_MS) return;
    this.lastForbiddenProbe = now;
    this.gql.request<{ me: { id: string } }>('query SessionProbe { me { id } }').subscribe({
      next: () => {},
      error: error => {
        if (error instanceof Error && error.message.includes('Forbidden')) this.expire();
      }
    });
  }

  expire(): void {
    if (!this.auth.accessToken()) return;
    this.auth.clear();
    if (this.router.url.startsWith('/login')) return;
    this.zone.run(() => this.router.navigate(['/login'], { queryParams: { session: 'expired' } }));
  }
}
