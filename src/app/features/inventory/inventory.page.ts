import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { inject } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PendingRepurchasesComponent } from '../purchasing/pending-repurchases.component';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';

type InventoryItem = {
  id: string;
  productId: string;
  sku: string;
  productName: string;
  unitOfMeasure?: string | null;
  batchId: string;
  batchNumber: string;
  expiryDate: string;
  location: string;
  qtyOnHand: number;
};

type InventoryQueryResult = {
  inventory: InventoryItem[];
};

type AdjustInventoryMutationResult = {
  adjustInventory: InventoryItem;
};

type LowStockBatchAlert = {
  batchId: string;
  location: string;
  qtyOnHand: number;
  threshold: number;
};

type LowStockBatchAlertsQueryResult = {
  lowStockBatchAlerts: LowStockBatchAlert[];
};

@Component({
  selector: 'cis-inventory-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslatePipe, PendingRepurchasesComponent, RowActionsMenuComponent],
  templateUrl: './inventory.page.html',
  styleUrl: './inventory.page.scss'
})
export class InventoryPage {
  loading = signal(false);
  error = signal<string | null>(null);
  items = signal<InventoryItem[]>([]);

  pageSize = signal(10);
  pageIndex = signal(0);

  displayedItems = computed(() => {
    const all = this.items();
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return all.slice(start, start + size);
  });

  totalPages = computed(() => {
    return Math.max(1, Math.ceil(this.items().length / this.pageSize()));
  });

  adjustDialogOpen = signal(false);
  pendingAdjust = signal<InventoryItem | null>(null);

  toastMessage = signal<string | null>(null);
  toastVariant = signal<'success' | 'error'>('success');

  lowStockKeys = signal<Set<string>>(new Set());

  analyticsTotalUnits = computed(() => this.items().reduce((sum, i) => sum + Number(i.qtyOnHand ?? 0), 0));
  analyticsProducts = computed(() => new Set(this.items().map((i) => i.productId)).size);
  analyticsBatches = computed(() => new Set(this.items().map((i) => i.batchId)).size);
  analyticsLowStock = computed(() => this.lowStockKeys().size);

  private readonly fb = inject(FormBuilder);
  private readonly branchCtx = inject(BranchContext);

  filterForm = this.fb.group({
    query: [''],
    // includeZero: [false],
    includeZero: [true],
    lowStockThreshold: [10 as number]
  });

  adjustForm = this.fb.group({
    delta: [null as number | null, [Validators.required]],
    location: ['', [Validators.required]],
    note: ['']
  });

  adjustError = signal<string | null>(null);

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  openAdjust(i: InventoryItem): void {
    this.pendingAdjust.set(i);
    this.adjustError.set(null);
    this.adjustForm.reset({ delta: null, location: i.location, note: '' });
    this.adjustDialogOpen.set(true);
  }

  cancelAdjust(): void {
    this.adjustDialogOpen.set(false);
    this.pendingAdjust.set(null);
  }

  confirmAdjust(): void {
    const row = this.pendingAdjust();
    if (!row) return;
    if (this.adjustForm.invalid) {
      this.adjustForm.markAllAsTouched();
      this.adjustError.set('Enter a quantity change and a location.');
      return;
    }

    const raw = this.adjustForm.getRawValue();
    const delta = Number(raw.delta ?? 0);
    if (!delta || !Number.isSafeInteger(delta)) {
      this.adjustError.set('Enter a whole-number change (use negative to subtract).');
      return;
    }

    const location = (raw.location ?? '').trim();
    if (location === row.location && row.qtyOnHand + delta < 0) {
      this.adjustError.set(`Only ${row.qtyOnHand} in stock here — the result cannot be negative.`);
      return;
    }
    this.adjustError.set(null);

    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation AdjustInventory($input: AdjustInventoryInput!) {
      adjustInventory(input: $input) {
        id productId sku productName unitOfMeasure batchId batchNumber expiryDate location qtyOnHand
      }
    }`;

    this.gql
      .request<AdjustInventoryMutationResult>(mutation, {
        input: {
          batchId: row.batchId,
          location,
          delta,
          note: raw.note || null
        }
      })
      .subscribe({
        next: () => {
          this.adjustDialogOpen.set(false);
          this.pendingAdjust.set(null);
          this.showToast('Inventory adjusted successfully', 'success');
          this.load();
        },
        error: (e: unknown) => {
          this.adjustError.set(e instanceof Error ? e.message : 'Failed to adjust inventory');
          this.loading.set(false);
        }
      });
  }

  dismissToast(): void {
    this.toastMessage.set(null);
  }

  private showToast(message: string, variant: 'success' | 'error'): void {
    this.toastVariant.set(variant);
    this.toastMessage.set(message);
    window.setTimeout(() => {
      if (this.toastMessage() === message) {
        this.toastMessage.set(null);
      }
    }, 2500);
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const { query, includeZero, lowStockThreshold } = this.filterForm.getRawValue();

    const q = `query Inventory($filter: InventoryFilter) {
      inventory(filter: $filter) {
        id 
        productId 
        sku 
        productName 
        unitOfMeasure
        batchId 
        batchNumber 
        expiryDate 
        location 
        qtyOnHand
      }
    }`;

    this.gql
      .request<InventoryQueryResult>(q, {
        filter: {
          query: query || null,
          includeZero: !!includeZero,
          branch: this.branchCtx.effective()
        }
      })
      .subscribe({
        next: (res) => {
          this.items.set(res.inventory);
          this.pageIndex.set(0);

          const threshold = Number(lowStockThreshold ?? 0);
          if (Number.isFinite(threshold) && threshold > 0) {
            this.loadLowStockAlerts(threshold);
          } else {
            this.lowStockKeys.set(new Set());
          }

          this.loading.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to load inventory');
          this.loading.set(false);
        }
      });
  }

  setPageSize(size: number | string): void {
    const next = Number(size);
    if (!Number.isFinite(next) || next <= 0) return;
    this.pageSize.set(next);
    this.pageIndex.set(0);
  }

  prevPage(): void {
    const idx = this.pageIndex();
    if (idx > 0) this.pageIndex.set(idx - 1);
  }

  nextPage(): void {
    const idx = this.pageIndex();
    if (idx < this.totalPages() - 1) this.pageIndex.set(idx + 1);
  }

  isLowStock(i: InventoryItem): boolean {
    return this.lowStockKeys().has(this.lowStockKey(i.batchId, i.location));
  }

  private loadLowStockAlerts(threshold: number): void {
    const q = `query LowStockBatchAlerts($threshold: Int!, $branch: String) {
      lowStockBatchAlerts(threshold: $threshold, branch: $branch) { batchId location qtyOnHand threshold }
    }`;

    this.gql.request<LowStockBatchAlertsQueryResult>(q, { threshold, branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        const set = new Set<string>();
        for (const a of res.lowStockBatchAlerts ?? []) {
          set.add(this.lowStockKey(a.batchId, a.location));
        }
        this.lowStockKeys.set(set);
      },
      error: () => {
        this.lowStockKeys.set(new Set());
      }
    });
  }

  private lowStockKey(batchId: string, location: string): string {
    return `${batchId}|${(location ?? '').toUpperCase()}`;
  }

  statusLabel(i: InventoryItem): 'Expired' | 'Near expiry' | 'Out of stock' | 'Sell allowed' {
    if (i.qtyOnHand <= 0) return 'Out of stock';

    const expiry = this.parseDateOnly(i.expiryDate);
    const today = this.startOfDay(new Date());
    if (expiry.getTime() < today.getTime()) return 'Expired';

    const nearExpiryLimit = this.addMonths(today, 3);
    if (expiry.getTime() <= nearExpiryLimit.getTime()) return 'Near expiry';
    return 'Sell allowed';
  }

  statusClasses(i: InventoryItem): string {
    const s = this.statusLabel(i);
    if (s === 'Expired') return 'bg-[#B81104]/10 text-red-800 ring-[#B81104]/25';
    if (s === 'Near expiry') return 'bg-amber-50 text-amber-900 ring-amber-200';
    if (s === 'Out of stock') return 'bg-slate-100 text-slate-700 ring-slate-200';
    return 'bg-[#FFFACD] text-emerald-900 ring-pink-500/25';
  }

  private startOfDay(d: Date): Date {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  private addMonths(d: Date, months: number): Date {
    const copy = new Date(d.getTime());
    copy.setMonth(copy.getMonth() + months);
    return this.startOfDay(copy);
  }

  private parseDateOnly(value: string): Date {
    const trimmed = (value ?? '').trim();
    if (!trimmed) return this.startOfDay(new Date(0));
    const d = new Date(`${trimmed}T00:00:00`);
    if (!Number.isFinite(d.getTime())) return this.startOfDay(new Date(0));
    return this.startOfDay(d);
  }
}

