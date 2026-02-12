import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { GraphqlService } from '../../core/graphql/graphql.service';

type Product = {
  id: string;
  sku: string;
  name: string;
  sellingPrice?: number | null;
  active: boolean;
};

type SalesDeduction = {
  id: string;
  batchId: string;
  batchNumber: string;
  expiryDate: string;
  quantity: number;
};

type SalesOrderLine = {
  id: string;
  productId: string;
  sku: string;
  productName: string;
  quantity: number;
  location: string;
  unitPrice: number;
  deductions: SalesDeduction[];
};

type SalesOrder = {
  id: string;
  customer?: string | null;
  referenceNumber?: string | null;
  soldAt: string;
  soldBy?: string | null;
  lines: SalesOrderLine[];
};

type SalesOrdersQueryResult = { salesOrders: SalesOrder[] };
type CreateSaleMutationResult = { createSale: SalesOrder };
type ProductsQueryResult = { products: Product[] };

@Component({
  selector: 'cis-sales-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sales.page.html',
  styleUrl: './sales.page.scss'
})
export class SalesPage {
  loading = signal(false);
  error = signal<string | null>(null);
  orders = signal<SalesOrder[]>([]);

  createOpen = signal(false);

  editingOrderId = signal<string | null>(null);
  detailsOrderId = signal<string | null>(null);

  confirmDeleteOpen = signal(false);
  pendingDeleteOrderId = signal<string | null>(null);

  products = signal<Product[]>([]);
  productQuery = signal('');

  filteredProducts = computed(() => {
    const q = this.productQuery().trim().toLowerCase();
    const all = this.products().filter((p) => p.active);
    if (!q) return all;
    return all.filter((p) => {
      const sku = (p.sku || '').toLowerCase();
      const name = (p.name || '').toLowerCase();
      return sku.includes(q) || name.includes(q);
    });
  });

  lines = signal<Array<{ productId: number; quantity: number; unitPrice: number; location?: string | null }>>([]);

  displayLines = computed(() => {
    const byId = new Map(this.products().map((p) => [+p.id, p] as const));
    return this.lines().map((l) => ({
      ...l,
      product: byId.get(l.productId) || null
    }));
  });

  private readonly fb = inject(FormBuilder);

  headerForm = this.fb.group({
    customer: [''],
    referenceNumber: ['']
  });

  lineForm = this.fb.group({
    productId: [null as number | null, [Validators.required, Validators.min(1)]],
    quantity: [1 as number, [Validators.required, Validators.min(1)]],
    unitPrice: [0 as number, [Validators.required, Validators.min(0)]],
    location: ['MAIN']
  });

  constructor(private readonly gql: GraphqlService) {
    this.loadProducts();
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
    this.deleteSale(id);
  }

  toggleDetails(o: SalesOrder): void {
    const id = String(o.id);
    this.detailsOrderId.set(this.detailsOrderId() === id ? null : id);
  }

  openCreate(): void {
    this.error.set(null);
    this.editingOrderId.set(null);
    this.headerForm.reset({ customer: '', referenceNumber: '' });
    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: 'MAIN' });
    this.lines.set([]);
    this.productQuery.set('');
    this.createOpen.set(true);
  }

  openEdit(o: SalesOrder): void {
    this.error.set(null);
    this.editingOrderId.set(String(o.id));
    this.headerForm.reset({
      customer: o.customer ?? '',
      referenceNumber: o.referenceNumber ?? ''
    });
    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: 'MAIN' });
    this.lines.set(
      (o.lines ?? []).map((l) => ({
        productId: Number(l.productId),
        quantity: Number(l.quantity ?? 0),
        unitPrice: Number(l.unitPrice ?? 0),
        location: (l.location?.trim() ? String(l.location).trim() : 'MAIN')
      }))
    );
    this.productQuery.set('');
    this.createOpen.set(true);
  }

  closeCreate(): void {
    this.createOpen.set(false);
    this.editingOrderId.set(null);
  }

  loadProducts(): void {
    const q = `query Products($filter: ProductFilter) {
      products(filter: $filter) {
        id
        sku
        name
        sellingPrice
        active
      }
    }`;

    this.gql.request<ProductsQueryResult>(q, { filter: null }).subscribe({
      next: (res) => {
        this.products.set(res.products);
      },
      error: () => {
        this.products.set([]);
      }
    });
  }

  onProductChanged(): void {
    const raw = this.lineForm.getRawValue();
    const productId = Number(raw.productId ?? 0);
    if (!Number.isFinite(productId) || productId <= 0) return;

    const p = this.products().find((x) => Number(x.id) === productId);
    if (!p) return;

    this.lineForm.patchValue({ unitPrice: Number(p.sellingPrice ?? 0) });
  }

  lineTotal(quantity: number | null | undefined, unitPrice: number | null | undefined): number {
    const q = Number(quantity ?? 0);
    const p = Number(unitPrice ?? 0);
    if (!Number.isFinite(q) || !Number.isFinite(p)) return 0;
    return q * p;
  }

  currentLineTotal(): number {
    const raw = this.lineForm.getRawValue();
    return this.lineTotal(raw.quantity, raw.unitPrice);
  }

  grandTotal(): number {
    return this.lines().reduce((sum, l) => sum + this.lineTotal(l.quantity, l.unitPrice), 0);
  }

  saleTotalValue(o: SalesOrder): number {
    return (o.lines ?? []).reduce((sum, l) => sum + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const q = `query { salesOrders { id customer referenceNumber soldAt soldBy lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } } } }`;

    this.gql.request<SalesOrdersQueryResult>(q).subscribe({
      next: (res) => {
        this.orders.set(res.salesOrders);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load sales orders');
        this.loading.set(false);
      }
    });
  }

  addLine(): void {
    this.lineForm.markAllAsTouched();
    const raw = this.lineForm.getRawValue();

    const productId = Number(raw.productId ?? 0);
    if (!Number.isFinite(productId) || productId <= 0) {
      this.error.set('Product is required');
      return;
    }

    const quantity = Number(raw.quantity ?? 0);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      this.error.set('Quantity must be greater than 0');
      return;
    }

    const unitPrice = Number(raw.unitPrice ?? 0);
    if (!Number.isFinite(unitPrice)) {
      this.error.set('Unit price is required');
      return;
    }
    if (unitPrice < 0) {
      this.error.set('Unit price must be 0 or more');
      return;
    }

    this.error.set(null);
    this.lines.set([
      ...this.lines(),
      {
        productId,
        quantity,
        unitPrice,
        location: (raw.location?.trim() ? String(raw.location).trim() : null)
      }
    ]);

    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: 'MAIN' });
  }

  removeLine(index: number): void {
    this.lines.set(this.lines().filter((_, i) => i !== index));
  }

  createSale(): void {
    this.saveSale();
  }

  saveSale(): void {
    if (!this.lines().length) {
      this.error.set('Add at least one line');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const header = this.headerForm.getRawValue();

    const editingId = this.editingOrderId();
    if (editingId) {
      const mutation = `mutation UpdateSale($input: UpdateSaleInput!) {
        updateSale(input: $input) {
          id soldAt
          lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } }
        }
      }`;

      this.gql
        .request<{ updateSale: SalesOrder }>(mutation, {
          input: {
            id: editingId,
            customer: header.customer || null,
            referenceNumber: header.referenceNumber || null,
            lines: this.lines()
          }
        })
        .subscribe({
          next: () => {
            this.headerForm.reset({ customer: '', referenceNumber: '' });
            this.lines.set([]);
            this.createOpen.set(false);
            this.editingOrderId.set(null);
            this.load();
          },
          error: (e: unknown) => {
            this.error.set(e instanceof Error ? e.message : 'Failed to update sale');
            this.loading.set(false);
          }
        });
      return;
    }

    const mutation = `mutation CreateSale($input: CreateSaleInput!) {
      createSale(input: $input) {
        id soldAt
        lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } }
      }
    }`;

    this.gql
      .request<CreateSaleMutationResult>(mutation, {
        input: {
          customer: header.customer || null,
          referenceNumber: header.referenceNumber || null,
          lines: this.lines()
        }
      })
      .subscribe({
        next: () => {
          this.headerForm.reset({ customer: '', referenceNumber: '' });
          this.lines.set([]);
          this.createOpen.set(false);
          this.editingOrderId.set(null);
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to create sale');
          this.loading.set(false);
        }
      });
  }

  deleteSale(id: string): void {
    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation DeleteSale($input: DeleteSaleInput!) { deleteSale(input: $input) }`;
    this.gql.request<{ deleteSale: boolean }>(mutation, { input: { id } }).subscribe({
      next: () => {
        this.load();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to delete sale');
        this.loading.set(false);
      }
    });
  }
}
