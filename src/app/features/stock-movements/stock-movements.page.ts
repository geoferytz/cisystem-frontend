import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';

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
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stock-movements.page.html',
  styleUrl: './stock-movements.page.scss'
})
export class StockMovementsPage {
  loading = signal(false);
  error = signal<string | null>(null);
  items = signal<StockMovement[]>([]);

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
          this.loading.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to load movements');
          this.loading.set(false);
        }
      });
  }
}
