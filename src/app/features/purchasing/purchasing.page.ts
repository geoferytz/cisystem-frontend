import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';

type PurchaseOrderLine = {
  id: string;
  productId: string;
  sku: string;
  productName: string;
  batchId: string;
  batchNumber: string;
  expiryDate: string;
  costPrice: number;
  quantityReceived: number;
};

type PurchaseOrder = {
  id: string;
  supplier?: string | null;
  invoiceNumber?: string | null;
  receivedAt: string;
  receivedBy?: string | null;
  lines: PurchaseOrderLine[];
};

type PurchaseOrdersQueryResult = { purchaseOrders: PurchaseOrder[] };
type ReceivePurchaseMutationResult = { receivePurchase: PurchaseOrder };

@Component({
  selector: 'cis-purchasing-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './purchasing.page.html',
  styleUrl: './purchasing.page.scss'
})
export class PurchasingPage {
  loading = signal(false);
  error = signal<string | null>(null);

  orders = signal<PurchaseOrder[]>([]);
  lines = signal<
    Array<{ productId: number; batchNumber: string; expiryDate: string; costPrice: number; quantityReceived: number }>
  >([]);

  private readonly fb = inject(FormBuilder);

  headerForm = this.fb.group({
    supplier: [''],
    invoiceNumber: ['']
  });

  lineForm = this.fb.group({
    productId: [null as number | null, [Validators.required]],
    batchNumber: ['', [Validators.required]],
    expiryDate: ['', [Validators.required]],
    costPrice: [0 as number, [Validators.required]],
    quantityReceived: [1 as number, [Validators.required]]
  });

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const q = `query { purchaseOrders { id supplier invoiceNumber receivedAt receivedBy lines { id productId sku productName batchId batchNumber expiryDate costPrice quantityReceived } } }`;

    this.gql.request<PurchaseOrdersQueryResult>(q).subscribe({
      next: (res) => {
        this.orders.set(res.purchaseOrders);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load purchase orders');
        this.loading.set(false);
      }
    });
  }

  addLine(): void {
    if (this.lineForm.invalid) return;
    const raw = this.lineForm.getRawValue();
    if (!raw.productId) return;

    this.lines.set([
      ...this.lines(),
      {
        productId: raw.productId,
        batchNumber: raw.batchNumber ?? '',
        expiryDate: raw.expiryDate ?? '',
        costPrice: Number(raw.costPrice ?? 0),
        quantityReceived: Number(raw.quantityReceived ?? 0)
      }
    ]);

    this.lineForm.reset({
      productId: null,
      batchNumber: '',
      expiryDate: '',
      costPrice: 0,
      quantityReceived: 1
    });
  }

  removeLine(index: number): void {
    this.lines.set(this.lines().filter((_, i) => i !== index));
  }

  receive(): void {
    if (!this.lines().length) {
      this.error.set('Add at least one line');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const header = this.headerForm.getRawValue();

    const mutation = `mutation Receive($input: ReceivePurchaseInput!) {
      receivePurchase(input: $input) {
        id supplier invoiceNumber receivedAt receivedBy
        lines { id productId sku productName batchId batchNumber expiryDate costPrice quantityReceived }
      }
    }`;

    this.gql
      .request<ReceivePurchaseMutationResult>(mutation, {
        input: {
          supplier: header.supplier || null,
          invoiceNumber: header.invoiceNumber || null,
          lines: this.lines()
        }
      })
      .subscribe({
        next: () => {
          this.headerForm.reset({ supplier: '', invoiceNumber: '' });
          this.lines.set([]);
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to receive purchase');
          this.loading.set(false);
        }
      });
  }
}
