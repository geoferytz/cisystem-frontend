import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog/confirm-dialog.component';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PermissionService } from '../../shared/services/permission.service';

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
type UpdatePurchaseMutationResult = { updatePurchase: PurchaseOrder };
type DeletePurchaseMutationResult = { deletePurchase: boolean };

@Component({
  selector: 'cis-purchasing-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent, ConfirmDialogComponent, MoneyPipe],
  templateUrl: './purchasing.page.html',
  styleUrl: './purchasing.page.scss'
})
export class PurchasingPage {
  readonly perm = inject(PermissionService);

  loading = signal(false);
  error = signal<string | null>(null);

  createOpen = signal(false);

  editingOrderId = signal<string | null>(null);
  detailsOrderId = signal<string | null>(null);

  confirmDeleteOpen = signal(false);
  pendingDeleteOrderId = signal<string | null>(null);

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
    this.perm.load();
    this.load();
  }

  openDeleteConfirm(id: string): void {
    this.pendingDeleteOrderId.set(String(id));
    this.confirmDeleteOpen.set(true);
  }

  cancelDeleteConfirm(): void {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteOrderId.set(null);
  }

  confirmDelete(): void {
    const id = this.pendingDeleteOrderId();
    if (!id) return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteOrderId.set(null);
    this.deletePurchase(id);
  }

  toggleDetails(o: PurchaseOrder): void {
    const id = String(o.id);
    this.detailsOrderId.set(this.detailsOrderId() === id ? null : id);
  }

  openCreate(): void {
    this.error.set(null);
    this.editingOrderId.set(null);
    this.headerForm.reset({ supplier: '', invoiceNumber: '' });
    this.lineForm.reset({ productId: null, batchNumber: '', expiryDate: '', costPrice: 0, quantityReceived: 1 });
    this.lines.set([]);
    this.createOpen.set(true);
  }

  openEdit(o: PurchaseOrder): void {
    this.error.set(null);
    this.editingOrderId.set(String(o.id));
    this.headerForm.reset({ supplier: o.supplier ?? '', invoiceNumber: o.invoiceNumber ?? '' });
    this.lineForm.reset({ productId: null, batchNumber: '', expiryDate: '', costPrice: 0, quantityReceived: 1 });
    this.lines.set(
      (o.lines ?? []).map((l) => ({
        productId: Number(l.productId),
        batchNumber: String(l.batchNumber ?? ''),
        expiryDate: String(l.expiryDate ?? ''),
        costPrice: Number(l.costPrice ?? 0),
        quantityReceived: Number(l.quantityReceived ?? 0)
      }))
    );
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
    this.editingOrderId.set(null);
  }

  purchaseTotalValue(o: PurchaseOrder): number {
    return (o.lines ?? []).reduce((sum, l) => sum + Number(l.quantityReceived ?? 0) * Number(l.costPrice ?? 0), 0);
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
    this.savePurchase();
  }

  savePurchase(): void {
    if (!this.lines().length) {
      this.error.set('Add at least one line');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const header = this.headerForm.getRawValue();

    const editingId = this.editingOrderId();
    if (editingId) {
      const mutation = `mutation UpdatePurchase($input: UpdatePurchaseInput!) {
        updatePurchase(input: $input) {
          id supplier invoiceNumber receivedAt receivedBy
          lines { id productId sku productName batchId batchNumber expiryDate costPrice quantityReceived }
        }
      }`;

      this.gql
        .request<UpdatePurchaseMutationResult>(mutation, {
          input: {
            id: editingId,
            supplier: header.supplier || null,
            invoiceNumber: header.invoiceNumber || null,
            lines: this.lines()
          }
        })
        .subscribe({
          next: () => {
            this.headerForm.reset({ supplier: '', invoiceNumber: '' });
            this.lines.set([]);
            this.createOpen.set(false);
            this.editingOrderId.set(null);
            this.load();
          },
          error: (e: unknown) => {
            this.error.set(e instanceof Error ? e.message : 'Failed to update purchase');
            this.loading.set(false);
          }
        });
      return;
    }

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
          this.createOpen.set(false);
          this.editingOrderId.set(null);
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to receive purchase');
          this.loading.set(false);
        }
      });
  }

  deletePurchase(id: string): void {
    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation DeletePurchase($input: DeletePurchaseInput!) { deletePurchase(input: $input) }`;
    this.gql.request<DeletePurchaseMutationResult>(mutation, { input: { id } }).subscribe({
      next: () => {
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to delete purchase');
        this.loading.set(false);
      }
    });
  }
}
