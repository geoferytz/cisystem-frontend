import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { SessionService } from '../auth/session.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const session = inject(SessionService);
  const token = auth.accessToken();

  const request = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(request).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        const errors = (event.body as { errors?: Array<{ extensions?: { classification?: string } }> } | null)?.errors;
        if (errors?.some(e => e?.extensions?.classification === 'FORBIDDEN')) {
          session.handleForbidden();
        }
      }
    }),
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        session.expire();
      }
      return throwError(() => error);
    })
  );
};
