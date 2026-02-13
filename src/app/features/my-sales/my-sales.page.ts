import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PermissionService } from '../../shared/services/permission.service';

type MySaleLine = {
  id: string;
  productName: string;
  quantity: number;
  unitPrice: number;
};

type MySale = {
  id: string;
  createdAt: string;
  createdBy?: string | null;
  customer?: string | null;
  referenceNumber?: string | null;
  lines: MySaleLine[];
};

type MySalesQueryResult = { mySales: MySale[] };
type CreateMySaleMutationResult = { createMySale: MySale };
type UpdateMySaleMutationResult = { updateMySale: MySale };
type DeleteMySaleMutationResult = { deleteMySale: boolean };

@Component({
  selector: 'cis-my-sales-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MoneyPipe],
  templateUrl: './my-sales.page.html',
  styleUrl: './my-sales.page.scss'
})
export class MySalesPage {
  readonly perm = inject(PermissionService);

  loading = signal(false);
  error = signal<string | null>(null);

  createOpen = signal(false);
  editingSaleId = signal<string | null>(null);

  detailsSaleId = signal<string | null>(null);

  confirmDeleteOpen = signal(false);
  pendingDeleteSaleId = signal<string | null>(null);

  sales = signal<MySale[]>([]);

  private readonly fb = inject(FormBuilder);
  private readonly gql = inject(GraphqlService);

  headerForm = this.fb.group({
    customer: [''],
    referenceNumber: ['']
  });

  lineForm = this.fb.group({
    productName: ['', [Validators.required]],
    quantity: [1 as number, [Validators.required, Validators.min(1)]],
    unitPrice: [0 as number, [Validators.required, Validators.min(0)]]
  });

  lines = signal<Array<{ productName: string; quantity: number; unitPrice: number }>>([]);

  constructor() {
    this.perm.load();
    this.refresh();
  }

  openDeleteConfirm(id: string): void {
    this.pendingDeleteSaleId.set(String(id));
    this.confirmDeleteOpen.set(true);
  }

  cancelDeleteConfirm(): void {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteSaleId.set(null);
  }

  confirmDelete(): void {
    const id = this.pendingDeleteSaleId();
    if (!id) return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteSaleId.set(null);
    this.deleteSale(id);
  }

  toggleDetails(s: MySale): void {
    const id = String(s.id);
    this.detailsSaleId.set(this.detailsSaleId() === id ? null : id);
  }

  openCreate(): void {
    this.error.set(null);
    this.editingSaleId.set(null);
    this.headerForm.reset({ customer: '', referenceNumber: '' });
    this.lineForm.reset({ productName: '', quantity: 1, unitPrice: 0 });
    this.lines.set([]);
    this.createOpen.set(true);
  }

  openEdit(s: MySale): void {
    this.error.set(null);
    this.editingSaleId.set(String(s.id));
    this.headerForm.reset({
      customer: s.customer ?? '',
      referenceNumber: s.referenceNumber ?? ''
    });
    this.lineForm.reset({ productName: '', quantity: 1, unitPrice: 0 });
    this.lines.set(
      (s.lines ?? []).map((l) => ({
        productName: String(l.productName ?? ''),
        quantity: Number(l.quantity ?? 0),
        unitPrice: Number(l.unitPrice ?? 0)
      }))
    );
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
    this.editingSaleId.set(null);
  }

  refresh(): void {
    this.loading.set(true);
    this.error.set(null);

    const q = `query { mySales { id createdAt createdBy customer referenceNumber lines { id productName quantity unitPrice } } }`;
    this.gql.request<MySalesQueryResult>(q).subscribe({
      next: (res) => {
        this.sales.set(res.mySales);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.sales.set([]);
        this.error.set(e instanceof Error ? e.message : 'Failed to load my sales');
        this.loading.set(false);
      }
    });
  }

  lineTotal(quantity: number | null | undefined, unitPrice: number | null | undefined): number {
    const q = Number(quantity ?? 0);
    const p = Number(unitPrice ?? 0);
    if (!Number.isFinite(q) || !Number.isFinite(p)) return 0;
    return q * p;
  }

  currentLineTotal = computed(() => {
    const raw = this.lineForm.getRawValue();
    return this.lineTotal(raw.quantity, raw.unitPrice);
  });

  grandTotal = computed(() => {
    return this.lines().reduce((sum, l) => sum + this.lineTotal(l.quantity, l.unitPrice), 0);
  });

  saleTotalValue(s: MySale): number {
    return (s.lines ?? []).reduce((sum, l) => sum + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
  }

  addLine(): void {
    this.lineForm.markAllAsTouched();
    if (this.lineForm.invalid) return;

    const raw = this.lineForm.getRawValue();
    const productName = String(raw.productName || '').trim();
    const quantity = Number(raw.quantity ?? 0);
    const unitPrice = Number(raw.unitPrice ?? 0);

    if (!productName) {
      this.error.set('Product name is required');
      return;
    }
    if (!Number.isFinite(quantity) || quantity <= 0) {
      this.error.set('Quantity must be greater than 0');
      return;
    }
    if (!Number.isFinite(unitPrice) || unitPrice < 0) {
      this.error.set('Unit price must be 0 or more');
      return;
    }

    this.error.set(null);
    this.lines.set([
      ...this.lines(),
      {
        productName,
        quantity,
        unitPrice
      }
    ]);

    this.lineForm.reset({ productName: '', quantity: 1, unitPrice: 0 });
  }

  removeLine(idx: number): void {
    this.lines.set(this.lines().filter((_, i) => i !== idx));
  }

  saveSale(): void {
    if (!this.lines().length) {
      this.error.set('Add at least one line');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const header = this.headerForm.getRawValue();

    const editingId = this.editingSaleId();
    if (editingId) {
      const mutation = `mutation UpdateMySale($input: UpdateMySaleInput!) {
        updateMySale(input: $input) {
          id createdAt createdBy customer referenceNumber
          lines { id productName quantity unitPrice }
        }
      }`;

      this.gql
        .request<UpdateMySaleMutationResult>(mutation, {
          input: {
            id: editingId,
            customer: header.customer?.trim() ? String(header.customer).trim() : null,
            referenceNumber: header.referenceNumber?.trim() ? String(header.referenceNumber).trim() : null,
            lines: this.lines()
          }
        })
        .subscribe({
          next: () => {
            this.refresh();
            this.createOpen.set(false);
            this.editingSaleId.set(null);
          },
          error: (e: unknown) => {
            this.error.set(e instanceof Error ? e.message : 'Failed to update my sale');
            this.loading.set(false);
          }
        });
      return;
    }

    const mutation = `mutation CreateMySale($input: CreateMySaleInput!) {
      createMySale(input: $input) {
        id createdAt createdBy customer referenceNumber
        lines { id productName quantity unitPrice }
      }
    }`;

    this.gql
      .request<CreateMySaleMutationResult>(mutation, {
        input: {
          customer: header.customer?.trim() ? String(header.customer).trim() : null,
          referenceNumber: header.referenceNumber?.trim() ? String(header.referenceNumber).trim() : null,
          lines: this.lines()
        }
      })
      .subscribe({
        next: () => {
          this.refresh();
          this.createOpen.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to save my sale');
          this.loading.set(false);
        }
      });
  }

  deleteSale(id: string): void {
    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation DeleteMySale($input: DeleteMySaleInput!) { deleteMySale(input: $input) }`;
    this.gql.request<DeleteMySaleMutationResult>(mutation, { input: { id } }).subscribe({
      next: () => {
        this.refresh();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to delete my sale');
        this.loading.set(false);
      }
    });
  }
}
