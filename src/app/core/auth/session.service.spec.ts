import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { IDLE_LIMIT_MS, SessionService } from './session.service';
import { GraphqlService } from '../graphql/graphql.service';

function makeJwt(expiresInSeconds: number): string {
  const payload = btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + expiresInSeconds }));
  return `h.${payload}.s`;
}

describe('SessionService', () => {
  let auth: AuthService;
  let session: SessionService;
  let request: jasmine.Spy;
  let router: { url: string; navigate: jasmine.Spy };

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    request = jasmine.createSpy('request').and.returnValue(
      of({ refreshToken: { accessToken: makeJwt(3600) }, me: { id: '1' } })
    );
    router = { url: '/home', navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      providers: [
        SessionService,
        { provide: GraphqlService, useValue: { request } },
        { provide: Router, useValue: router }
      ]
    });
    auth = TestBed.inject(AuthService);
    session = TestBed.inject(SessionService);
  });

  it('redirects to login when an expired token is used', () => {
    auth.setAccessToken(makeJwt(-60));
    session.start();
    window.dispatchEvent(new Event('keydown'));
    expect(auth.accessToken()).toBeNull();
    expect(router.navigate).toHaveBeenCalledWith(['/login'], { queryParams: { session: 'expired' } });
  });

  it('refreshes the token when the user is active near expiry', () => {
    auth.setAccessToken(makeJwt(120));
    session.start();
    window.dispatchEvent(new Event('keydown'));
    expect(request.calls.allArgs().some(args => String(args[0]).includes('refreshToken'))).toBeTrue();
    expect(auth.isAuthenticated()).toBeTrue();
  });

  it('expires after the idle limit', () => {
    auth.setAccessToken(makeJwt(3600));
    session.start();
    const internals = session as unknown as { lastActivity: number; check(): void };
    internals.lastActivity = Date.now() - IDLE_LIMIT_MS - 1;
    internals.check();
    expect(router.navigate).toHaveBeenCalledWith(['/login'], { queryParams: { session: 'expired' } });
  });

  it('does not expire while the user keeps interacting', () => {
    auth.setAccessToken(makeJwt(3600));
    session.start();
    const internals = session as unknown as { lastActivity: number; check(): void };
    internals.lastActivity = Date.now() - IDLE_LIMIT_MS - 1;
    window.dispatchEvent(new Event('keydown'));
    internals.check();
    expect(auth.accessToken()).not.toBeNull();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('expires when the server rejects a still-valid token', () => {
    auth.setAccessToken(makeJwt(3600));
    request.and.callFake((query: string) =>
      String(query).includes('SessionProbe') ? throwError(() => new Error('Forbidden')) : of({})
    );
    session.handleForbidden();
    expect(router.navigate).toHaveBeenCalledWith(['/login'], { queryParams: { session: 'expired' } });
  });

  it('ignores permission denials while the session is valid', () => {
    auth.setAccessToken(makeJwt(3600));
    session.handleForbidden();
    expect(auth.accessToken()).not.toBeNull();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
