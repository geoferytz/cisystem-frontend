import { Injectable, inject, signal } from '@angular/core';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from './branch-context.service';

type PendingOrder = { id: string; activation: boolean | null };

@Injectable({ providedIn: 'root' })
export class PendingReceivingService {
  private readonly gql = inject(GraphqlService);
  private readonly branchCtx = inject(BranchContext);

  readonly count = signal(0);

  refresh(): void {
    this.gql.request<{ pendingRepurchases: PendingOrder[] }>(
      'query PendingRepurchasesBadge($branch: String) { pendingRepurchases(branch: $branch) { id activation } }',
      { branch: this.branchCtx.effective() }
    ).subscribe({
      next: res => this.sync(res.pendingRepurchases),
      error: () => this.count.set(0)
    });
  }

  sync(orders: PendingOrder[] | null | undefined): void {
    this.count.set((orders ?? []).filter(o => o.activation).length);
  }
}
