import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

type StockMovement = {
  id: string;
  type: string;
  quantity: number;
  createdAt: string;
  createdBy?: string | null;
  note?: string | null;
  productId: string;
  sku: string;
  productName: string;
  batchId: string;
  batchNumber: string;
  expiryDate: string;
};

type StockMovementsQueryResult = {
  stockMovements: StockMovement[];
};

@Component({
  selector: 'cis-stock-movements-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './stock-movements.page.html',
  styleUrl: './stock-movements.page.scss'
})
export class StockMovementsPage {
  loading = signal(false);
  error = signal<string | null>(null);
  items = signal<StockMovement[]>([]);

  pageSize = signal(10);
  pageIndex = signal(0);

  displayedItems = computed(() => {
    const all = this.items();
    const size = this.pageSize();
    const idx = this.pageIndex();
    const start = idx * size;
    return all.slice(start, start + size);
  });

  totalPages = computed(() => Math.ceil(this.items().length / this.pageSize()));

  private readonly fb = inject(FormBuilder);

  filterForm = this.fb.group({
    type: ['']
  });

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const { type } = this.filterForm.getRawValue();

    const q = `query Movements($filter: StockMovementFilter) {
      stockMovements(filter: $filter) {
        id type quantity createdAt createdBy note
        productId sku productName
        batchId batchNumber expiryDate
      }
    }`;

    this.gql
      .request<StockMovementsQueryResult>(q, {
        filter: {
          type: type || null
        }
      })
      .subscribe({
        next: (res) => {
          this.items.set(res.stockMovements);
          this.pageIndex.set(0);
          this.loading.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to load movements');
          this.loading.set(false);
        }
      });
  }

  prevPage(): void {
    this.pageIndex.update(v => Math.max(0, v - 1));
  }

  nextPage(): void {
    this.pageIndex.update(v => Math.min(this.totalPages() - 1, v + 1));
  }

  setPageSize(size: number | string): void {
    const next = typeof size === 'string' ? parseInt(size, 10) : size;
    this.pageSize.set(next);
    this.pageIndex.set(0);
  }
}

