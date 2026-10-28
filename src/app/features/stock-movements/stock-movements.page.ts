import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { BranchContext } from '../../shared/services/branch-context.service';
import { CIS_TABLE_IMPORTS, TableColumn } from '../../shared/ui/table/data-table.component';
import { CIS_FORM_IMPORTS, FormField } from '../../shared/ui/form/form-field.component';

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
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, CIS_TABLE_IMPORTS, CIS_FORM_IMPORTS],
  templateUrl: './stock-movements.page.html',
  styleUrl: './stock-movements.page.scss'
})
export class StockMovementsPage {
  loading = signal(false);
  error = signal<string | null>(null);
  items = signal<StockMovement[]>([]);

  readonly movementCols: TableColumn<StockMovement>[] = [
    { key: 'createdAt', label: 'common.date' },
    { key: 'type', label: 'common.type', class: 'font-semibold' },
    { key: 'sku', label: 'common.sku' },
    { key: 'productName', label: 'common.product' },
    { key: 'batchNumber', label: 'common.batch' },
    { key: 'quantity', label: 'common.qty', align: 'right', class: 'font-semibold' },
    { key: 'createdBy', label: 'common.by', value: m => m.createdBy || '-' }
  ];

  // --- Out of stock products ---
  oosItems = signal<OosProduct[]>([]);
  oosCategories = signal<string[]>([]);
  oosLoading = signal(false);
  oosError = signal<string | null>(null);

  readonly oosCols: TableColumn<OosProduct>[] = [
    { key: 'sku', label: 'common.sku' },
    { key: 'productName', label: 'common.product' },
    { key: 'category', label: 'common.category' },
    { key: 'qtyOnHand', label: 'common.qty', align: 'right', type: 'template' },
    { key: 'status', label: 'common.status', type: 'template' }
  ];

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

  private readonly fb = inject(FormBuilder);
  private readonly branchCtx = inject(BranchContext);

  filterForm = this.fb.group({
    type: ['']
  });

  readonly movementFilterFields: FormField[] = [
    { key: 'type', label: 'common.type', hint: 'IN / OUT / LOSS / ADJUSTMENT / RETURN' }
  ];

  oosFilterForm = this.fb.group({
    query: [''],
    category: ['']
  });

  readonly oosFilterFields: FormField[] = [
    {
      key: 'category',
      label: 'common.category',
      type: 'select',
      options: () => [
        { value: '', label: 'common.all' },
        ...this.oosCategories().map(c => ({ value: c, label: c }))
      ]
    },
    { key: 'query', label: 'common.search', type: 'search', placeholder: 'common.searchProductSku' }
  ];

  constructor(private readonly gql: GraphqlService) {
    this.oosFilterForm.valueChanges.subscribe((v) => {
      this.oosCategory.set(v.category ?? '');
      this.oosQuery.set(v.query ?? '');
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
          this.loading.set(false);
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to load movements');
          this.loading.set(false);
        }
      });
  }
}
