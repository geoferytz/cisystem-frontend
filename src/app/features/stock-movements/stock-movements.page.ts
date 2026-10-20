import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { BranchContext } from '../../shared/services/branch-context.service';

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

type OosProduct = {
  productId: string;
  sku: string;
  productName: string;
  category: string;
  qtyOnHand: number;
};

type ProductsQueryResult = {
  products: { id: string; sku: string; name: string; category?: string | null; active: boolean }[];
};

type InventoryQueryResult = {
  inventory: { productId: string; qtyOnHand: number }[];
};

type CategoriesQueryResult = {
  categories: { id: string; name: string; active: boolean }[];
};

@Component({
  selector: 'cis-stock-movements-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, PagerComponent],
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

  // --- Out of stock products ---
  oosItems = signal<OosProduct[]>([]);
  oosCategories = signal<string[]>([]);
  oosLoading = signal(false);
  oosError = signal<string | null>(null);

  oosPageSize = signal(10);
  oosPageIndex = signal(0);

  private readonly oosCategory = signal('');
  private readonly oosQuery = signal('');

  oosFiltered = computed(() => {
    const cat = this.oosCategory();
    const q = this.oosQuery().trim().toLowerCase();
    return this.oosItems().filter(
      (p) =>
        (!cat || p.category === cat) &&
        (!q || p.productName.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q))
    );
  });

  oosDisplayed = computed(() => {
    const size = this.oosPageSize();
    const start = this.oosPageIndex() * size;
    return this.oosFiltered().slice(start, start + size);
  });

  private readonly fb = inject(FormBuilder);
  private readonly branchCtx = inject(BranchContext);

  filterForm = this.fb.group({
    type: ['']
  });

  oosFilterForm = this.fb.group({
    query: [''],
    category: ['']
  });

  constructor(private readonly gql: GraphqlService) {
    this.oosFilterForm.valueChanges.subscribe((v) => {
      this.oosCategory.set(v.category ?? '');
      this.oosQuery.set(v.query ?? '');
      this.oosPageIndex.set(0);
    });
    this.load();
    this.loadOutOfStock();
  }

  private loadOutOfStock(): void {
    this.oosLoading.set(true);
    this.oosError.set(null);

    const qProducts = `query { products { id sku name category active } }`;
    const qInv = `query Inv($branch: String) { inventory(filter: { includeZero: true, branch: $branch }) { productId qtyOnHand } }`;
    const qCats = `query { categories { id name active } }`;

    forkJoin({
      products: this.gql.request<ProductsQueryResult>(qProducts),
      inventory: this.gql.request<InventoryQueryResult>(qInv, { branch: this.branchCtx.effective() }),
      categories: this.gql.request<CategoriesQueryResult>(qCats)
    }).subscribe({
      next: ({ products, inventory, categories }) => {
        const qtyMap = new Map<string, number>();
        for (const item of inventory.inventory) {
          qtyMap.set(item.productId, (qtyMap.get(item.productId) ?? 0) + Number(item.qtyOnHand ?? 0));
        }

        const names = new Set(categories.categories.filter((c) => c.active).map((c) => c.name));
        let hasUncategorized = false;

        const out: OosProduct[] = [];
        for (const p of products.products.filter((x) => x.active)) {
          const qty = qtyMap.get(p.id) ?? 0;
          if (qty <= 0) {
            const category = (p.category ?? '').trim() || 'Uncategorized';
            if (category === 'Uncategorized') hasUncategorized = true;
            out.push({ productId: p.id, sku: p.sku, productName: p.name, category, qtyOnHand: qty });
          }
        }

        this.oosItems.set(out);
        this.oosCategories.set([...names, ...(hasUncategorized ? ['Uncategorized'] : [])].sort());
        this.oosPageIndex.set(0);
        this.oosLoading.set(false);
      },
      error: (e: unknown) => {
        this.oosError.set(e instanceof Error ? e.message : 'Failed to load out-of-stock products');
        this.oosLoading.set(false);
      }
    });
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

