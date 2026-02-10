import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { GraphqlService } from '../../core/graphql/graphql.service';

type InventoryValuationQueryResult = {
  inventoryValuation: {
    totalStockValue: number;
  };
};

type AlertsQueryResult = {
  expiryAlerts: Array<{ productId: string }>;
  lowStockAlerts: Array<{ productId: string }>;
};

type ProductsCountQueryResult = {
  products: Array<{ id: string }>;
};

type CategoriesCountQueryResult = {
  categories: Array<{ id: string }>;
};

type StockMovement = {
  id: string;
  type: string;
  quantity: number;
  createdAt: string;
  sku: string;
  productName: string;
};

type RecentMovementsQueryResult = {
  stockMovements: StockMovement[];
};

@Component({
  selector: 'cis-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})
export class DashboardPage {
  loading = signal(false);
  error = signal<string | null>(null);

  totalStockValue = signal<number | null>(null);
  productsCount = signal<number>(0);
  categoriesCount = signal<number>(0);
  expiryCount = signal<number>(0);
  lowStockCount = signal<number>(0);

  recentMovements = signal<StockMovement[]>([]);

  constructor(private readonly gql: GraphqlService) {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const qVal = `query { inventoryValuation { totalStockValue } }`;
    this.gql.request<InventoryValuationQueryResult>(qVal).subscribe({
      next: (res) => this.totalStockValue.set(res.inventoryValuation.totalStockValue),
      error: () => {}
    });

    const qCounts = `query DashboardCounts {
      products { id }
      categories { id }
    }`;
    this.gql.request<ProductsCountQueryResult & CategoriesCountQueryResult>(qCounts).subscribe({
      next: (res) => {
        this.productsCount.set(res.products.length);
        this.categoriesCount.set(res.categories.length);
      },
      error: () => {}
    });

    const qAlerts = `query DashboardAlerts($days: Int!, $threshold: Int!) {
      expiryAlerts(days: $days) { productId }
      lowStockAlerts(threshold: $threshold) { productId }
    }`;
    this.gql.request<AlertsQueryResult>(qAlerts, { days: 30, threshold: 10 }).subscribe({
      next: (res) => {
        this.expiryCount.set(res.expiryAlerts.length);
        this.lowStockCount.set(res.lowStockAlerts.length);
      },
      error: () => {}
    });

    const qMovements = `query RecentMovements {
      stockMovements {
        id type quantity createdAt sku productName
      }
    }`;
    this.gql.request<RecentMovementsQueryResult>(qMovements).subscribe({
      next: (res) => {
        this.recentMovements.set(res.stockMovements.slice(0, 8));
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load dashboard');
        this.loading.set(false);
      }
    });
  }

  formatCurrency(value: number | null): string {
    if (value == null) return '-';
    return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  barWidth(value: number, max: number): string {
    if (max <= 0) return '0%';
    const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)));
    return `${pct}%`;
  }
}
