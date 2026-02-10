import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

export type GraphqlResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

@Injectable({ providedIn: 'root' })
export class GraphqlService {
  private readonly endpoint = environment.graphqlUrl;

  constructor(private readonly http: HttpClient) {}

  request<T>(query: string, variables?: Record<string, unknown>) {
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
        })
      );
  }
}
