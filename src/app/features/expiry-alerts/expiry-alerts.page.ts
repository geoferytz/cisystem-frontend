import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { PermissionService } from '../../shared/services/permission.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PagerComponent } from '../../shared/ui/pager/pager.component';

type ExpiryAlert = {
  productId: string;
  sku: string;
  productName: string;
  batchId: string;
  batchNumber: string;
  expiryDate: string;
  qtyOnHand: number;
  daysToExpiry: number;
};

type LowStockAlert = {
  productId: string;
  sku: string;
  productName: string;
  qtyOnHand: number;
  threshold: number;
};

type ExpiryAlertsQueryResult = { expiryAlerts: ExpiryAlert[] };
type LowStockAlertsQueryResult = { lowStockAlerts: LowStockAlert[] };

@Component({
  selector: 'cis-expiry-alerts-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, PagerComponent],
  templateUrl: './expiry-alerts.page.html',
  styleUrl: './expiry-alerts.page.scss'
})
export class ExpiryAlertsPage {
  loading = signal(false);
  error = signal<string | null>(null);
  writeOffBusy = signal(false);
  writeOffMessage = signal<string | null>(null);

  expiry = signal<ExpiryAlert[]>([]);
  lowStock = signal<LowStockAlert[]>([]);

  expiredCount = computed(() => this.expiry().filter(a => a.daysToExpiry < 0 && a.qtyOnHand > 0).length);

  expiryPageSize = signal(10);
  expiryPageIndex = signal(0);
  displayedExpiry = computed(() => {
    const size = this.expiryPageSize();
    const start = this.expiryPageIndex() * size;
    return this.expiry().slice(start, start + size);
  });

  lowStockPageSize = signal(10);
  lowStockPageIndex = signal(0);
  displayedLowStock = computed(() => {
    const size = this.lowStockPageSize();
    const start = this.lowStockPageIndex() * size;
    return this.lowStock().slice(start, start + size);
  });

  private readonly fb = inject(FormBuilder);
  private readonly branchCtx = inject(BranchContext);
  readonly perm = inject(PermissionService);

  form = this.fb.group({
    days: [30 as number, [Validators.required]],
    threshold: [10 as number, [Validators.required]]
  });

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const { days, threshold } = this.form.getRawValue();

    const qExpiry = `query Expiry($days: Int!, $branch: String) { expiryAlerts(days: $days, branch: $branch) { productId sku productName batchId batchNumber expiryDate qtyOnHand daysToExpiry } }`;
    const qLow = `query Low($t: Int!, $branch: String) { lowStockAlerts(threshold: $t, branch: $branch) { productId sku productName qtyOnHand threshold } }`;

    this.gql.request<ExpiryAlertsQueryResult>(qExpiry, { days: Number(days ?? 30), branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.expiry.set(res.expiryAlerts);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load expiry alerts');
        this.loading.set(false);
      }
    });

    this.gql.request<LowStockAlertsQueryResult>(qLow, { t: Number(threshold ?? 10), branch: this.branchCtx.effective() }).subscribe({
      next: (res) => this.lowStock.set(res.lowStockAlerts),
      error: () => {}
    });
  }

  writeOff(): void {
    if (this.writeOffBusy() || !this.expiredCount()) return;
    this.writeOffBusy.set(true);
    this.writeOffMessage.set(null);
    this.error.set(null);
    this.gql.request<{ writeOffExpired: { id: string; expiryDate: string; qtyOnHand: number }[] }>('mutation WriteOff($branch: String) { writeOffExpired(branch: $branch) { id expiryDate qtyOnHand } }',
      { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.writeOffBusy.set(false);
        this.writeOffMessage.set(`${(res.writeOffExpired ?? []).length} expired batch(es) written off.`);
        this.load();
      },
      error: (e: unknown) => {
        this.writeOffBusy.set(false);
        this.error.set(e instanceof Error ? e.message : 'Failed to write off expired stock.');
      }
    });
  }
}

