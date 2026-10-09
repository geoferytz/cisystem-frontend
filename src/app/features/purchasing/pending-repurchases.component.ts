import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PendingReceivingService } from '../../shared/services/pending-receiving.service';
import { PermissionService } from '../../shared/services/permission.service';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { ReceiptLine, RepurchaseLine, RepurchaseOrder, orderFields } from './repurchase.types';

@Component({
  selector: 'cis-pending-repurchases',
  standalone: true,
  imports: [CommonModule, FormsModule, MoneyPipe, ModalComponent],
  templateUrl: './pending-repurchases.component.html',
  styleUrl: './pending-repurchases.component.scss'
})
export class PendingRepurchasesComponent {
  @Input() title = 'Pending repurchase orders';
  @Input() subtitle = 'Receive deliveries to add stock at MAIN.';
  @Input() flat = false;
  @Input() kind: 'all' | 'activation' | 'repurchase' = 'all';
  @Input() emptyText = 'No pending repurchase orders.';
  @Input() hideWhenEmpty = false;
  @Output() received = new EventEmitter<void>();
  @Output() ordersLoaded = new EventEmitter<RepurchaseOrder[]>();

  readonly perm = inject(PermissionService);
  private readonly gql = inject(GraphqlService);
  private readonly branchCtx = inject(BranchContext);
  private readonly badge = inject(PendingReceivingService);

  private allPending = signal<RepurchaseOrder[]>([]);
  pending = computed(() => this.allPending().filter(o =>
    this.kind === 'all' || (this.kind === 'activation') === !!o.activation));
  busy = signal(false);
  error = signal<string | null>(null);
  loaded = signal(false);
  visible = computed(() => !this.hideWhenEmpty || !this.loaded() || this.pending().length > 0 || !!this.error());
  notice = signal<string | null>(null);
  receiptOrder = signal<RepurchaseOrder | null>(null);
  receiptLines: ReceiptLine[] = [];

  constructor() {
    this.refresh();
  }

  refresh(): void {
    this.gql.request<{ pendingRepurchases: RepurchaseOrder[] }>(`query PendingRepurchases($branch: String) { pendingRepurchases(branch: $branch) { ${orderFields} } }`, { branch: this.branchCtx.effective() }).subscribe({
      next: res => {
        this.allPending.set(res.pendingRepurchases);
        this.loaded.set(true);
        this.badge.sync(res.pendingRepurchases);
        this.ordersLoaded.emit(res.pendingRepurchases);
      },
      error: e => this.error.set(e instanceof Error ? e.message : 'Could not load pending repurchases. Please refresh.')
    });
  }

  showNotice(message: string): void {
    this.notice.set(message);
  }

  orderTotal(lines: RepurchaseLine[]): number {
    return lines.reduce((sum, l) => sum + l.buyingPrice * l.quantity, 0);
  }

  openReceipt(order: RepurchaseOrder): void {
    this.error.set(null);
    this.receiptLines = order.lines.map(l => ({ ...l,
      batchNumber: l.batchNumber?.trim() || `RP-${order.id.slice(0, 8)}-${l.productId}`,
      expiryDate: l.expiryDate ?? '' }));
    this.receiptOrder.set(order);
  }

  receiveOrder(): void {
    const order = this.receiptOrder();
    if (!order || this.busy() || !this.perm.canCreate('PURCHASING')) return;
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    if (this.receiptLines.some(l => !l.batchNumber.trim() || l.batchNumber.trim().length > 80 || !/^\d{4}-\d{2}-\d{2}$/.test(l.expiryDate) || l.expiryDate < today)) {
      this.error.set('Enter a batch code and a non-expired expiry date for every product.');
      return;
    }
    this.busy.set(true); this.error.set(null);
    this.gql.request<{ receiveRepurchase: RepurchaseOrder }>(`mutation ReceiveRepurchase($input: ReceiveRepurchaseOrderInput!) {
      receiveRepurchase(input: $input) { ${orderFields} }
    }`, { input: { id: order.id, lines: this.receiptLines.map(({ productId, batchNumber, expiryDate }) => ({ productId, batchNumber, expiryDate })) } }).subscribe({
      next: () => {
        this.busy.set(false); this.receiptOrder.set(null);
        this.notice.set('Purchase received. Inventory at MAIN and approved price changes have been updated.');
        this.refresh(); this.received.emit();
      },
      error: e => { this.busy.set(false); this.error.set(e instanceof Error ? e.message : 'Could not receive order. You can safely retry.'); }
    });
  }
}
