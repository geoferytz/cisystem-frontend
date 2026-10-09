import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { PermissionService } from '../../shared/services/permission.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog/confirm-dialog.component';

type TransferLine = {
  productId: string;
  batchId: string;
  sku: string | null;
  productName: string | null;
  batchNumber: string | null;
  quantity: number;
};

type StockTransfer = {
  id: string;
  reference: string | null;
  fromBranch: string;
  toBranch: string;
  status: string;
  note: string | null;
  createdAt: string;
  createdBy: string | null;
  dispatchedAt: string | null;
  dispatchedBy: string | null;
  receivedAt: string | null;
  receivedBy: string | null;
  lines: TransferLine[];
};

type InventoryItem = {
  batchId: string;
  batchNumber: string;
  sku: string;
  productName: string;
  expiryDate: string;
  qtyOnHand: number;
};

const TRANSFER_FIELDS = 'id reference fromBranch toBranch status note createdAt createdBy dispatchedAt dispatchedBy receivedAt receivedBy lines { productId batchId sku productName batchNumber quantity }';

@Component({
  selector: 'cis-transfers-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PagerComponent, ConfirmDialogComponent],
  templateUrl: './transfers.page.html',
  styleUrl: './transfers.page.scss'
})
export class TransfersPage {
  readonly perm = inject(PermissionService);
  readonly branchCtx = inject(BranchContext);

  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);

  transfers = signal<StockTransfer[]>([]);
  statusFilter = signal('');
  query = signal('');

  pageSize = signal(10);
  pageIndex = signal(0);
  displayedTransfers = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.transfers().slice(start, start + size);
  });

  createOpen = signal(false);
  detailsOpen = signal(false);
  viewing = signal<StockTransfer | null>(null);

  // create form state
  sourceStock = signal<InventoryItem[]>([]);
  sourceLoading = signal(false);
  lines = signal<Array<{ batchId: number; quantity: number; label: string; available: number }>>([]);
  selectedBatchMax = signal<number | null>(null);
  linesTotalQty = computed(() => this.lines().reduce((s, l) => s + l.quantity, 0));

  confirmOpen = signal(false);
  confirmAction = signal<'dispatch' | 'receive' | 'cancel' | null>(null);
  pendingTransfer = signal<StockTransfer | null>(null);

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    fromBranch: ['', [Validators.required]],
    toBranch: ['', [Validators.required]],
    note: [''],
    batchId: [null as number | null],
    quantity: [1 as number, [Validators.required, Validators.min(1)]]
  });

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    this.branchCtx.load();
    this.load();
  }

  totalQty(t: StockTransfer): number {
    return t.lines.reduce((s, l) => s + l.quantity, 0);
  }

  canDispatch(t: StockTransfer): boolean {
    return t.status === 'PENDING' && this.perm.canEdit('TRANSFERS') && this.canActOn(t.fromBranch);
  }

  canReceive(t: StockTransfer): boolean {
    return t.status === 'DISPATCHED' && this.perm.canEdit('TRANSFERS') && this.canActOn(t.toBranch);
  }

  canCancel(t: StockTransfer): boolean {
    return t.status === 'PENDING' && this.perm.canDelete('TRANSFERS') && this.canActOn(t.fromBranch);
  }

  /** Locked users may only act on their own branch's side; unrestricted users may act anywhere. */
  canActOn(branch: string): boolean {
    const locked = this.branchCtx.lockedCode();
    return locked == null || locked.toUpperCase() === branch.toUpperCase();
  }

  branchName(code: string): string {
    return this.branchCtx.options().find(b => b.code === code)?.name || code;
  }

  setStatus(value: string): void {
    this.statusFilter.set(value);
    this.load();
  }

  setQuery(value: string): void {
    this.query.set(value);
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    const q = `query StockTransfers($filter: StockTransferFilter) {
      stockTransfers(filter: $filter) { ${TRANSFER_FIELDS} }
    }`;
    this.gql.request<{ stockTransfers: StockTransfer[] }>(q, {
      filter: {
        branch: this.branchCtx.effective(),
        status: this.statusFilter() || null,
        query: this.query() || null
      }
    }).subscribe({
      next: (res) => {
        this.transfers.set(res.stockTransfers ?? []);
        this.pageIndex.set(0);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load transfers');
        this.loading.set(false);
      }
    });
  }

  openCreate(): void {
    this.error.set(null);
    this.success.set(null);
    this.lines.set([]);
    this.selectedBatchMax.set(null);
    const from = this.branchCtx.writeBranch();
    this.form.reset({ fromBranch: from, toBranch: '', note: '', batchId: null, quantity: 1 });
    this.createOpen.set(true);
    this.loadSourceStock(from);
  }

  closeCreate(): void {
    this.createOpen.set(false);
    this.lines.set([]);
    this.selectedBatchMax.set(null);
  }

  onFromChange(): void {
    this.lines.set([]);
    this.selectedBatchMax.set(null);
    const from = this.form.getRawValue().fromBranch;
    if (from) this.loadSourceStock(from);
  }

  onBatchSelect(): void {
    const id = Number(this.form.getRawValue().batchId ?? 0);
    const item = this.sourceStock().find((i) => Number(i.batchId) === id);
    this.selectedBatchMax.set(item ? item.qtyOnHand : null);
  }

  loadSourceStock(branch: string): void {
    this.sourceLoading.set(true);
    const q = `query Inv($filter: InventoryFilter) {
      inventory(filter: $filter) { batchId batchNumber sku productName expiryDate qtyOnHand }
    }`;
    this.gql.request<{ inventory: InventoryItem[] }>(q, {
      filter: { branch, includeZero: false }
    }).subscribe({
      next: (res) => {
        this.sourceStock.set(res.inventory ?? []);
        this.sourceLoading.set(false);
      },
      error: () => this.sourceLoading.set(false)
    });
  }

  addLine(): void {
    const raw = this.form.getRawValue();
    const batchId = Number(raw.batchId ?? 0);
    const qty = Number(raw.quantity ?? 0);
    if (!batchId || qty < 1) return;
    const item = this.sourceStock().find(i => Number(i.batchId) === batchId);
    if (!item) return;
    if (qty > item.qtyOnHand) {
      this.error.set(`Only ${item.qtyOnHand} available for batch ${item.batchNumber}`);
      return;
    }
    if (this.lines().some(l => l.batchId === batchId)) {
      this.error.set('Batch already added');
      return;
    }
    this.error.set(null);
    this.lines.set([...this.lines(), {
      batchId,
      quantity: qty,
      available: item.qtyOnHand,
      label: `${item.productName} (${item.sku}) · ${item.batchNumber} · ${item.expiryDate}`
    }]);
    this.form.patchValue({ batchId: null, quantity: 1 });
    this.selectedBatchMax.set(null);
  }

  removeLine(batchId: number): void {
    this.lines.set(this.lines().filter(l => l.batchId !== batchId));
  }

  submitCreate(): void {
    const raw = this.form.getRawValue();
    if (!raw.fromBranch || !raw.toBranch || !this.lines().length) return;
    this.loading.set(true);
    this.error.set(null);
    const m = `mutation CreateTransfer($input: CreateStockTransferInput!) {
      createStockTransfer(input: $input) { ${TRANSFER_FIELDS} }
    }`;
    this.gql.request<{ createStockTransfer: StockTransfer }>(m, {
      input: {
        fromBranch: raw.fromBranch,
        toBranch: raw.toBranch,
        note: raw.note || null,
        lines: this.lines().map(l => ({ batchId: l.batchId, quantity: l.quantity }))
      }
    }).subscribe({
      next: () => {
        this.closeCreate();
        this.success.set('Transfer created — dispatch it to move the stock');
        this.loading.set(false);
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to create transfer');
        this.loading.set(false);
      }
    });
  }

  openDetails(t: StockTransfer): void {
    this.viewing.set(t);
    this.detailsOpen.set(true);
  }

  closeDetails(): void {
    this.detailsOpen.set(false);
    this.viewing.set(null);
  }

  askAction(t: StockTransfer, action: 'dispatch' | 'receive' | 'cancel'): void {
    this.pendingTransfer.set(t);
    this.confirmAction.set(action);
    this.confirmOpen.set(true);
  }

  cancelConfirm(): void {
    this.confirmOpen.set(false);
    this.confirmAction.set(null);
    this.pendingTransfer.set(null);
  }

  confirmMessage(): string {
    const t = this.pendingTransfer();
    const a = this.confirmAction();
    if (!t || !a) return '';
    const ref = t.reference || `#${t.id}`;
    if (a === 'dispatch') return `Dispatch ${ref}? ${this.totalQty(t)} pcs will be deducted from ${t.fromBranch}.`;
    if (a === 'receive') return `Receive ${ref} at ${t.toBranch}? Stock will be added to the destination.`;
    return `Cancel ${ref}? No stock has moved yet.`;
  }

  runAction(): void {
    const t = this.pendingTransfer();
    const a = this.confirmAction();
    if (!t || !a) return;
    const field = a === 'dispatch' ? 'dispatchStockTransfer' : a === 'receive' ? 'receiveStockTransfer' : 'cancelStockTransfer';
    const m = `mutation TransferAction($input: StockTransferActionInput!) {
      ${field}(input: $input) { ${TRANSFER_FIELDS} }
    }`;
    this.loading.set(true);
    this.error.set(null);
    this.gql.request<Record<string, StockTransfer>>(m, { input: { id: t.id } }).subscribe({
      next: (res) => {
        const updated = res[field];
        this.transfers.set(this.transfers().map(x => x.id === updated.id ? updated : x));
        this.success.set(a === 'dispatch' ? 'Transfer dispatched — stock deducted from source'
          : a === 'receive' ? 'Transfer received — stock added to destination'
          : 'Transfer cancelled');
        this.cancelConfirm();
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Action failed');
        this.cancelConfirm();
        this.loading.set(false);
      }
    });
  }

  statusClass(status: string): string {
    switch (status) {
      case 'PENDING': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300';
      case 'DISPATCHED': return 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300';
      case 'RECEIVED': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300';
      case 'CANCELLED': return 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300';
    }
  }
}
