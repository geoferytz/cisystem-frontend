import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { ToastService } from '../../shared/services/toast.service';

export type GraphqlResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

@Injectable({ providedIn: 'root' })
export class GraphqlService {
  private readonly endpoint = environment.graphqlUrl;

  private readonly http = inject(HttpClient);
  private readonly toast = inject(ToastService);

  request<T>(query: string, variables?: Record<string, unknown>) {
    const mutation = this.mutationName(query);
    return this.http
      .post<GraphqlResponse<T>>(this.endpoint, {
        query,
        variables: variables ?? {}
      })
      .pipe(
        map((res) => {
          if (res.errors?.length) {
            throw new Error(res.errors.map((e) => e.message).join('\n'));
          }
          if (!res.data) {
            throw new Error('No data returned from GraphQL');
          }
          return res.data;
        }),
        tap(() => {
          if (mutation) {
            this.toast.success(this.mutationMessage(mutation));
          }
        })
      );
  }

  private mutationName(query: string): string | null {
    if (!/\bmutation\b/.test(query)) {
      return null;
    }
    const m = /\bmutation\b[\s\S]*?\{\s*([A-Za-z_]\w*)/.exec(query);
    const name = m ? m[1].toLowerCase() : '';
    return name && !name.includes('login') && !name.includes('authenticate') && !name.includes('token') ? m![1] : null;
  }

  private mutationMessage(name: string): string {
    const n = name.toLowerCase();
    if (n.includes('payment')) {
      return 'Payment recorded successfully';
    }
    if (n.includes('checkout')) {
      return 'Sale completed successfully';
    }
    if (n.startsWith('delete') || n.startsWith('cancel') || n.startsWith('remove') || n.startsWith('deactivate')) {
      return 'Deleted successfully';
    }
    if (n.startsWith('update') || n.startsWith('set') || n.startsWith('edit')) {
      return 'Updated successfully';
    }
    return 'Saved successfully';
  }
}
