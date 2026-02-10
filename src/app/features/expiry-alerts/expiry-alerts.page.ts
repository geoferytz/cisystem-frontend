import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';

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
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expiry-alerts.page.html',
  styleUrl: './expiry-alerts.page.scss'
})
export class ExpiryAlertsPage {
  loading = signal(false);
  error = signal<string | null>(null);

  expiry = signal<ExpiryAlert[]>([]);
  lowStock = signal<LowStockAlert[]>([]);

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    days: [30 as number, [Validators.required]],
    threshold: [10 as number, [Validators.required]]
  });

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const { days, threshold } = this.form.getRawValue();

    const qExpiry = `query Expiry($days: Int!) { expiryAlerts(days: $days) { productId sku productName batchId batchNumber expiryDate qtyOnHand daysToExpiry } }`;
    const qLow = `query Low($t: Int!) { lowStockAlerts(threshold: $t) { productId sku productName qtyOnHand threshold } }`;

    this.gql.request<ExpiryAlertsQueryResult>(qExpiry, { days: Number(days ?? 30) }).subscribe({
      next: (res) => {
        this.expiry.set(res.expiryAlerts);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load expiry alerts');
        this.loading.set(false);
      }
    });

    this.gql.request<LowStockAlertsQueryResult>(qLow, { t: Number(threshold ?? 10) }).subscribe({
      next: (res) => this.lowStock.set(res.lowStockAlerts),
      error: () => {}
    });
  }
}
