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

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const q = `query { salesOrders { id customer referenceNumber soldAt soldBy lines { id productId sku productName quantity unitPrice deductions { id batchId batchNumber expiryDate quantity } } } }`;

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
    if (!this.lines().length) {
      this.error.set('Add at least one line');
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const header = this.headerForm.getRawValue();
    const mutation = `mutation CreateSale($input: CreateSaleInput!) {
      createSale(input: $input) {
        id soldAt
        lines { id productId sku productName quantity unitPrice deductions { id batchId batchNumber expiryDate quantity } }
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
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to create sale');
          this.loading.set(false);
        }
      });
  }
}
