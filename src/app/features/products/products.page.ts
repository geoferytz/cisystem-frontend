import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { ProductFormComponent, ProductFormValue } from './product-form/product-form.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PermissionService } from '../../shared/services/permission.service';
import { PendingReceivingService } from '../../shared/services/pending-receiving.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslationService } from '../../core/i18n/translation.service';
import { CIS_FORM_IMPORTS, FormField } from '../../shared/ui/form/form-field.component';

type Product = {
  id: string;
  sku: string;
  barcode?: string | null;
  name: string;
  brand?: string | null;
  category?: string | null;
  variant?: string | null;
  unitOfMeasure?: string | null;
  buyingPrice?: number | null;
  sellingPrice?: number | null;
  active: boolean;
  batches?: Array<{
    id: string;
    batchNumber: string;
    createdAt: string;
  }>;
};

type Category = {
  id: string;
  name: string;
  active: boolean;
};

type ProductsQueryResult = {
  products: Product[];
};

type CategoriesQueryResult = {
  categories: Category[];
};

type CreateProductMutationResult = {
  createProduct: Product;
};

type CreateBatchMutationResult = {
  createBatch: {
    id: string;
  };
};

type UpdateProductMutationResult = {
  updateProduct: Product;
};

type SetProductStatusMutationResult = {
  setProductStatus: Product;
};

type UpdateBatchNumberMutationResult = {
  updateBatchNumber: {
    id: string;
  };
};

@Component({
  selector: 'cis-products-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProductFormComponent, MoneyPipe, TranslatePipe, RowActionsMenuComponent, CIS_FORM_IMPORTS],
  templateUrl: './products.page.html',
  styleUrl: './products.page.scss'
})
export class ProductsPage {
  readonly perm = inject(PermissionService);
  private readonly i18n = inject(TranslationService);

  loading = signal(false);
  error = signal<string | null>(null);
  products = signal<Product[]>([]);

  pageSize = signal(10);
  pageIndex = signal(0);

  displayedProducts = computed(() => {
    const all = this.products();
    const size = this.pageSize();
    const idx = this.pageIndex();
    const start = idx * size;
    return all.slice(start, start + size);
  });

  totalPages = computed(() => {
    const size = this.pageSize();
    const total = this.products().length;
    return Math.max(1, Math.ceil(total / size));
  });

  categories = signal<Category[]>([]);
  searchQuery = signal('');
  statusFilter = signal<'active' | 'inactive' | 'all'>('active');

  editingId = signal<string | null>(null);
  editingBatchId = signal<string | null>(null);
  editingBatchOriginalNumber = signal<string>('');

  deleteDialogOpen = signal(false);
  pendingDelete = signal<Product | null>(null);

  toastMessage = signal<string | null>(null);
  toastVariant = signal<'success' | 'error'>('success');

  createDialogOpen = signal(false);

  // Register existing products into the selected branch
  registerOpen = signal(false);
  registerCandidates = signal<Product[]>([]);
  registerSelected = signal<Set<string>>(new Set());
  registerQty = signal<Record<string, number>>({});
  registerSearch = signal('');
  registerSaving = signal(false);
  filteredRegisterCandidates = computed(() => {
    const q = this.registerSearch().trim().toLowerCase();
    return this.registerCandidates().filter(p =>
      !q || [p.name, p.sku, p.barcode, p.brand, p.category].some(v => v?.toLowerCase().includes(q)));
  });

  private readonly fb = inject(FormBuilder);
  readonly branchCtx = inject(BranchContext);
  private readonly pendingReceiving = inject(PendingReceivingService);

  editForm = this.fb.group({
    sku: ['', [Validators.required]],
    barcode: [''],
    batchNumber: [''],
    name: ['', [Validators.required]],
    brand: [''],
    category: [''],
    variant: [''],
    unitOfMeasure: [''],
    buyingPrice: [null as number | null],
    sellingPrice: [null as number | null]
  });

  /** Inline table-edit fields — bare+compact controls inside the editForm group. */
  editField(key: keyof typeof this.editForm.controls, opts: Partial<FormField> = {}): FormField {
    return { key, label: key, bare: true, compact: true, ...opts };
  }
  batchEditField(p: Product): FormField {
    return this.editField('batchNumber', {
      readonly: this.latestBatchNumber(p) === '-',
      placeholder: this.latestBatchNumber(p) === '-' ? 'No batch' : ''
    });
  }
  categoryEditField(): FormField {
    return this.editField('category', {
      type: 'select',
      options: () => [
        { value: '', label: 'common.selectCategory' },
        ...this.categories().map(c => ({ value: c.name, label: c.name }))
      ]
    });
  }

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    this.loadCategories();
    this.load();
  }

  latestBatch(p: Product): { id: string; batchNumber: string } | null {
    const batches = p.batches ?? [];
    if (!batches.length) return null;
    const latest = [...batches].sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
    if (!latest?.id) return null;
    return { id: latest.id, batchNumber: latest.batchNumber };
  }

  loadCategories(): void {
    const query = `query Categories { categories { id name active } }`;
    this.gql.request<CategoriesQueryResult>(query).subscribe({
      next: (res) => {
        this.categories.set(res.categories.filter((c) => c.active));
      },
      error: () => {
        this.categories.set([]);
      }
    });
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    const query = `query Products($filter: ProductFilter) {
      products(filter: $filter) {
        id
        sku
        barcode
        name
        brand
        category
        variant
        unitOfMeasure
        buyingPrice
        sellingPrice
        active
        batches { id batchNumber createdAt }
      }
    }`;
    const q = this.searchQuery().trim();
    const status = this.statusFilter();
    const variables = {
      filter: {
        query: q || null,
        active: status === 'all' ? null : status === 'active',
        branch: this.branchCtx.effective()
      }
    };

    this.gql.request<ProductsQueryResult>(query, variables).subscribe({
      next: (res) => {
        this.products.set(res.products);
        this.pageIndex.set(0);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load');
        this.loading.set(false);
      }
    });
  }

  onSearch(value: string): void {
    this.searchQuery.set(value);
    this.load();
  }

  setStatusFilter(value: string): void {
    this.statusFilter.set(value === 'inactive' || value === 'all' ? value : 'active');
    this.load();
  }

  setPageSize(size: number | string): void {
    const next = typeof size === 'string' ? Number(size) : Number(size);
    if (!Number.isFinite(next) || next <= 0) return;
    this.pageSize.set(next);
    this.pageIndex.set(0);
  }

  prevPage(): void {
    const idx = this.pageIndex();
    if (idx <= 0) return;
    this.pageIndex.set(idx - 1);
  }

  nextPage(): void {
    const idx = this.pageIndex();
    const total = this.totalPages();
    if (idx >= total - 1) return;
    this.pageIndex.set(idx + 1);
  }

  latestBatchNumber(p: Product): string {
    const batches = p.batches ?? [];
    if (!batches.length) return '-';
    const latest = [...batches].sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
    return latest?.batchNumber ?? '-';
  }

  startEdit(p: Product): void {
    this.editingId.set(p.id);

    const latest = this.latestBatch(p);
    this.editingBatchId.set(latest?.id ?? null);
    this.editingBatchOriginalNumber.set(latest?.batchNumber ?? '');

    this.editForm.reset({
      sku: p.sku,
      barcode: p.barcode ?? '',
      batchNumber: latest?.batchNumber ?? '',
      name: p.name,
      brand: p.brand ?? '',
      category: p.category ?? '',
      variant: p.variant ?? '',
      unitOfMeasure: p.unitOfMeasure,
      buyingPrice: p.buyingPrice ?? null,
      sellingPrice: p.sellingPrice ?? null
    });
  }

  cancelEdit(): void {
    this.editingId.set(null);
    this.editingBatchId.set(null);
    this.editingBatchOriginalNumber.set('');
  }

  saveEdit(): void {
    const id = this.editingId();
    if (!id) return;
    if (this.editForm.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    const raw = this.editForm.getRawValue();
    const input = {
      id,
      sku: raw.sku,
      barcode: raw.barcode,
      name: raw.name,
      brand: raw.brand,
      category: raw.category,
      variant: raw.variant,
      unitOfMeasure: raw.unitOfMeasure,
      buyingPrice: raw.buyingPrice,
      sellingPrice: raw.sellingPrice
    };

    const mutation = `mutation UpdateProduct($input: UpdateProductInput!) {
      updateProduct(input: $input) {
        id sku barcode name brand category variant unitOfMeasure buyingPrice sellingPrice active
      }
    }`;

    this.gql.request<UpdateProductMutationResult>(mutation, { input }).subscribe({
      next: () => {
        const batchId = this.editingBatchId();
        const original = this.editingBatchOriginalNumber();
        const newBatchNumber = String(raw.batchNumber ?? '').trim();

        const shouldUpdateBatch = !!batchId && newBatchNumber.length > 0 && newBatchNumber !== original;
        if (!shouldUpdateBatch) {
          this.editingId.set(null);
          this.editingBatchId.set(null);
          this.editingBatchOriginalNumber.set('');
          this.load();
          return;
        }

        const batchMutation = `mutation UpdateBatchNumber($input: UpdateBatchNumberInput!) {
          updateBatchNumber(input: $input) { id }
        }`;

        this.gql
          .request<UpdateBatchNumberMutationResult>(batchMutation, {
            input: {
              batchId,
              batchNumber: newBatchNumber
            }
          })
          .subscribe({
            next: () => {
              this.editingId.set(null);
              this.editingBatchId.set(null);
              this.editingBatchOriginalNumber.set('');
              this.load();
            },
            error: (e: unknown) => {
              this.error.set(e instanceof Error ? e.message : 'Failed to update batch');
              this.loading.set(false);
            }
          });
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to update');
        this.loading.set(false);
      }
    });
  }

  delete(p: Product): void {
    this.pendingDelete.set(p);
    this.deleteDialogOpen.set(true);
  }

  cancelDelete(): void {
    this.deleteDialogOpen.set(false);
    this.pendingDelete.set(null);
  }

  confirmDelete(): void {
    const p = this.pendingDelete();
    if (!p) return;

    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation SetStatus($input: SetProductStatusInput!) {
      setProductStatus(input: $input) { id active }
    }`;

    this.gql
      .request<SetProductStatusMutationResult>(mutation, {
        input: {
          id: p.id,
          active: false
        }
      })
      .subscribe({
        next: () => {
          if (this.editingId() === p.id) {
            this.editingId.set(null);
          }
          this.deleteDialogOpen.set(false);
          this.pendingDelete.set(null);
          this.showToast('Product deactivated — hidden until reactivated', 'success');
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to delete');
          this.showToast('Failed to delete product', 'error');
          this.loading.set(false);
        }
      });
  }

  activate(p: Product): void {
    if (!this.perm.canEdit('PRODUCTS') || this.loading()) return;

    this.loading.set(true);
    this.error.set(null);

    const mutation = `mutation SetStatus($input: SetProductStatusInput!) {
      setProductStatus(input: $input) { id active }
    }`;

    this.gql
      .request<SetProductStatusMutationResult>(mutation, {
        input: {
          id: p.id,
          active: true
        }
      })
      .subscribe({
        next: () => {
          this.showToast('Product activated', 'success');
          this.load();
        },
        error: (e: unknown) => {
          this.error.set(e instanceof Error ? e.message : 'Failed to activate');
          this.showToast('Failed to activate product', 'error');
          this.loading.set(false);
        }
      });
  }

  dismissToast(): void {
    this.toastMessage.set(null);
  }

  private showToast(message: string, variant: 'success' | 'error'): void {
    this.toastVariant.set(variant);
    this.toastMessage.set(message);
    window.setTimeout(() => {
      if (this.toastMessage() === message) {
        this.toastMessage.set(null);
      }
    }, 2500);
  }

  openCreate(): void {
    this.createDialogOpen.set(true);
    this.error.set(null);
  }

  cancelCreate(): void {
    this.createDialogOpen.set(false);
    this.error.set(null);
  }

  // ---- Register existing products into the selected branch ----

  openRegister(): void {
    const branch = this.branchCtx.effective();
    if (!branch) return;
    this.registerOpen.set(true);
    this.registerSelected.set(new Set());
    this.registerSearch.set('');
    // All products (unfiltered) minus the ones already in this branch = suggestions.
    this.gql.request<ProductsQueryResult>(`query ProductsAll($filter: ProductFilter) {
      products(filter: $filter) { id sku barcode name brand category active buyingPrice sellingPrice }
    }`, { filter: { query: null, active: true, branch: null } }).subscribe({
      next: (res) => {
        const inBranch = new Set(this.products().map(p => String(p.id)));
        this.registerCandidates.set((res.products ?? []).filter(p => !inBranch.has(String(p.id))));
      },
      error: () => this.registerCandidates.set([])
    });
  }

  toggleRegister(id: string): void {
    const next = new Set(this.registerSelected());
    if (next.has(id)) next.delete(id); else next.add(id);
    this.registerSelected.set(next);
    if (next.has(id) && this.registerQty()[id] == null) {
      this.registerQty.set({ ...this.registerQty(), [id]: 1 });
    }
  }

  setRegisterQty(id: string, raw: string): void {
    this.registerQty.set({ ...this.registerQty(), [id]: Number(raw) || 0 });
  }

  /** Registration lines valid for a receiving order: selected with qty > 0. */
  private registerLines(branch: string) {
    return [...this.registerSelected()]
      .map(id => {
        const p = this.registerCandidates().find(c => String(c.id) === String(id));
        const quantity = Number(this.registerQty()[id] ?? 0);
        return p && Number.isFinite(quantity) && quantity > 0
          ? { productId: Number(id), quantity, buyingPrice: Number(p.buyingPrice ?? 0), sellingPrice: Number(p.sellingPrice ?? 0), location: branch }
          : null;
      })
      .filter((l): l is NonNullable<typeof l> => l != null);
  }

  submitRegister(): void {
    const branch = this.branchCtx.effective();
    const ids = [...this.registerSelected()].map(Number).filter(Number.isFinite);
    const lines = this.registerLines(branch ?? '');
    if (!branch || !ids.length || this.registerSaving()) return;
    this.registerSaving.set(true);
    this.gql.request<{ registerProductsToBranch: number }>(`mutation RegisterToBranch($input: RegisterProductsToBranchInput!) {
      registerProductsToBranch(input: $input)
    }`, { input: { branch, productIds: ids } }).subscribe({
      next: (res) => {
        if (!lines.length) {
          this.registerSaving.set(false);
          this.registerOpen.set(false);
          this.toastMessage.set(this.i18n.currentLang() === 'sw'
            ? `Bidhaa ${res.registerProductsToBranch} zimesajiliwa kwenye branch ${branch}`
            : `${res.registerProductsToBranch} product(s) registered to branch ${branch}`);
          this.toastVariant.set('success');
          this.load();
          return;
        }
        // Queue a pending receiving so Inventory page can stock them into this branch.
        this.gql.request<{ submitRepurchase: { id: string } }>(`mutation QueueReceiving($input: SubmitRepurchaseInput!) {
          submitRepurchase(input: $input) { id }
        }`, {
          input: { id: crypto.randomUUID(), activation: false, branch, lines }
        }).subscribe({
          next: () => {
            this.registerSaving.set(false);
            this.registerOpen.set(false);
            this.toastMessage.set(this.i18n.currentLang() === 'sw'
              ? `Bidhaa ${res.registerProductsToBranch} zimesajiliwa — angalia receiving kwenye Inventory`
              : `${res.registerProductsToBranch} product(s) registered — see pending receiving in Inventory`);
            this.toastVariant.set('success');
            this.pendingReceiving.refresh();
            this.load();
          },
          error: () => {
            this.registerSaving.set(false);
            this.registerOpen.set(false);
            this.toastMessage.set(this.i18n.currentLang() === 'sw'
              ? 'Zimesajiliwa ila receiving haijafanikiwa — jaribu tena kwenye Purchasing'
              : 'Registered, but the receiving order could not be queued — retry via Purchasing');
            this.toastVariant.set('error');
            this.load();
          }
        });
      },
      error: () => {
        this.registerSaving.set(false);
        this.toastMessage.set(this.i18n.currentLang() === 'sw' ? 'Imeshindwa kusajili bidhaa' : 'Could not register products to branch');
        this.toastVariant.set('error');
      }
    });
  }

  create(value: ProductFormValue): void {
    this.loading.set(true);
    this.error.set(null);

    const productInput = {
      sku: value.sku?.trim() || null,
      barcode: value.barcode,
      name: value.name,
      brand: value.brand,
      category: value.category,
      variant: value.variant,
      unitOfMeasure: value.unitOfMeasure,
      buyingPrice: value.buyingPrice,
      sellingPrice: value.sellingPrice,
      active: false,
      units: value.units
    };

    const mutation = `mutation Create($input: CreateProductInput!) { createProduct(input: $input) { id sku } }`;

    this.gql.request<CreateProductMutationResult>(mutation, { input: productInput }).subscribe({
      next: (res) => this.registerThenReceive(res.createProduct.id, value),
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to create');
        this.loading.set(false);
      }
    });
  }

  /** Register the new product to its chosen branch(es) first so it shows there immediately. */
  private registerThenReceive(productId: string, value: ProductFormValue): void {
    const branch = (value.location ?? '').trim() || this.branchCtx.writeBranch();
    const branches = [...new Set([branch, ...(value.alsoRegisterMain && branch !== 'MAIN' ? ['MAIN'] : [])])];
    this.registerAllBranches(productId, branches, 0, () => this.queueForReceiving(productId, value));
  }

  private registerAllBranches(productId: string, branches: string[], i: number, done: () => void): void {
    if (i >= branches.length) { done(); return; }
    this.gql.request<{ registerProductsToBranch: number }>(`mutation RegisterToBranch($input: RegisterProductsToBranchInput!) {
      registerProductsToBranch(input: $input)
    }`, { input: { branch: branches[i], productIds: [Number(productId)] } }).subscribe({
      next: () => this.registerAllBranches(productId, branches, i + 1, done),
      error: () => this.registerAllBranches(productId, branches, i + 1, done)
    });
  }

  private queueForReceiving(productId: string, value: ProductFormValue): void {
    const mutation = `mutation QueueReceiving($input: SubmitRepurchaseInput!) {
      submitRepurchase(input: $input) { id }
    }`;

    this.gql.request<{ submitRepurchase: { id: string } }>(mutation, {
      input: {
        id: crypto.randomUUID(),
        activation: true,
        branch: this.branchCtx.writeBranch(),
        lines: [{
          productId,
          quantity: value.initialQuantity ?? 0,
          buyingPrice: value.buyingPrice ?? 0,
          sellingPrice: value.sellingPrice ?? 0,
          batchNumber: (value.batchNumber ?? '').trim() || null,
          expiryDate: (value.expiryDate ?? '').trim() || null,
          location: (value.location ?? '').trim() || null
        }]
      }
    }).subscribe({
      next: () => {
        this.createDialogOpen.set(false);
        this.showToast('Product saved — pending receiving', 'success');
        this.pendingReceiving.refresh();
        this.load();
      },
      error: (e: unknown) => {
        this.createDialogOpen.set(false);
        this.showToast(e instanceof Error ? e.message : 'Product saved but could not be queued for receiving', 'error');
        this.load();
      }
    });
  }
}

