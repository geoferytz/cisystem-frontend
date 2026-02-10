import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { inject } from '@angular/core';

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
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inventory.page.html',
  styleUrl: './inventory.page.scss'
})
export class InventoryPage {
  loading = signal(false);
  error = signal<string | null>(null);
  items = signal<InventoryItem[]>([]);

  adjustDialogOpen = signal(false);
  pendingAdjust = signal<InventoryItem | null>(null);

  toastMessage = signal<string | null>(null);
  toastVariant = signal<'success' | 'error'>('success');

  lowStockKeys = signal<Set<string>>(new Set());

  private readonly fb = inject(FormBuilder);

  filterForm = this.fb.group({
    query: [''],
    // includeZero: [false],
    includeZero: [true],
    lowStockThreshold: [10 as number]
  });

  adjustForm = this.fb.group({
    delta: [0 as number, [Validators.required]],
    note: ['']
  });

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  openAdjust(i: InventoryItem): void {
    this.pendingAdjust.set(i);
    this.adjustForm.reset({ delta: 0, note: '' });
    this.adjustDialogOpen.set(true);
  }

  cancelAdjust(): void {
    this.adjustDialogOpen.set(false);
    this.pendingAdjust.set(null);
  }

  confirmAdjust(): void {
    const row = this.pendingAdjust();
    if (!row) return;
    if (this.adjustForm.invalid) return;

    const raw = this.adjustForm.getRawValue();
    const delta = Number(raw.delta ?? 0);
    if (!delta) return;

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
          location: row.location,
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
          this.error.set(e instanceof Error ? e.message : 'Failed to adjust inventory');
          this.showToast('Failed to adjust inventory', 'error');
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
          includeZero: !!includeZero
        }
      })
      .subscribe({
        next: (res) => {
          this.items.set(res.inventory);

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

  isLowStock(i: InventoryItem): boolean {
    return this.lowStockKeys().has(this.lowStockKey(i.batchId, i.location));
  }

  private loadLowStockAlerts(threshold: number): void {
    const q = `query LowStockBatchAlerts($threshold: Int!) {
      lowStockBatchAlerts(threshold: $threshold) { batchId location qtyOnHand threshold }
    }`;

    this.gql.request<LowStockBatchAlertsQueryResult>(q, { threshold }).subscribe({
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
    if (s === 'Expired') return 'bg-red-50 text-red-800 ring-red-200';
    if (s === 'Near expiry') return 'bg-amber-50 text-amber-900 ring-amber-200';
    if (s === 'Out of stock') return 'bg-slate-100 text-slate-700 ring-slate-200';
    return 'bg-emerald-50 text-emerald-900 ring-emerald-200';
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
