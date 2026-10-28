import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { GraphqlService } from '../../core/graphql/graphql.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog/confirm-dialog.component';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { RowActionsMenuComponent } from '../../shared/ui/row-actions-menu/row-actions-menu.component';
import { PagerComponent } from '../../shared/ui/pager/pager.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { PermissionService } from '../../shared/services/permission.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { RepurchaseComponent } from './repurchase.component';
import { CIS_FORM_IMPORTS, FormField } from '../../shared/ui/form/form-field.component';

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

type ExistingProductRef = {
  id: string;
  sku: string;
  name: string;
};

type ProductsQueryResult = { products: ExistingProductRef[] };

type NewProductUnitInput = {
  name: string;
  price: number | null;
  buyingPrice: number | null;
  quantity: number;
};

type NewProductInput = {
  sku: string | null;
  barcode: string | null;
  name: string;
  brand: string | null;
  category: string | null;
  variant: string | null;
  unitOfMeasure: string | null;
  buyingPrice: number | null;
  sellingPrice: number | null;
  units: NewProductUnitInput[] | null;
};

type PurchaseLineInput = {
  productId: number | null;
  newProduct: NewProductInput | null;
  displayName: string;
  batchNumber: string | null;
  expiryDate: string;
  costPrice: number;
  quantityReceived: number;
  measureName: string | null;
  measureQuantity: number | null;
};

@Component({
  selector: 'cis-purchasing-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ConfirmDialogComponent, ModalComponent, MoneyPipe, TranslatePipe, RepurchaseComponent, RowActionsMenuComponent, PagerComponent, CIS_FORM_IMPORTS],
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
  pageSize = signal(10);
  pageIndex = signal(0);
  displayedOrders = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.orders().slice(start, start + size);
  });
  lines = signal<PurchaseLineInput[]>([]);
  productOptions = signal<ExistingProductRef[]>([]);
  categories = signal<Array<{ id: string; name: string }>>([]);

  private readonly fb = inject(FormBuilder);
  private readonly branchCtx = inject(BranchContext);

  headerForm = this.fb.group({
    supplier: [''],
    invoiceNumber: ['']
  });

  readonly headerFields: FormField[] = [
    { key: 'supplier', label: 'common.supplier' },
    { key: 'invoiceNumber', label: 'common.invoiceNumber' }
  ];

  lineForm = this.fb.group({
    sku: [''],
    name: ['', [Validators.required]],
    barcode: [''],
    brand: [''],
    category: [''],
    variant: [''],
    sellingPrice: [null as number | null, [Validators.min(0)]],
    measure: ['Piece', [Validators.required]],
    unitSize: [1 as number | null, [Validators.required, Validators.min(1)]],
    batchNumber: [''],
    expiryDate: ['', [Validators.required]],
    measurePrice: [0 as number, [Validators.required, Validators.min(0)]],
    measureQuantity: [1 as number, [Validators.required, Validators.min(1)]]
  });

  private measureName(): string {
    return (this.lineForm.controls.measure.value ?? '').trim() || 'measure';
  }

  readonly lineFieldsA: FormField[] = [
    { key: 'sku', label: 'SKU', labelHint: 'auto if empty', placeholder: 'PRD-00001' },
    { key: 'name', label: 'Product Name', required: true }
  ];

  readonly lineFieldsB: FormField[] = [
    { key: 'barcode', label: 'Barcode' },
    { key: 'brand', label: 'Brand' }
  ];

  readonly lineFieldsC: FormField[] = [
    {
      key: 'category', label: 'Category', type: 'select',
      options: () => [
        { value: '', label: 'expenses.selectCategory' },
        ...this.categories().map(c => ({ value: c.name, label: c.name }))
      ]
    },
    { key: 'variant', label: 'Variant' }
  ];

  readonly lineFieldsD: FormField[] = [
    { key: 'measure', label: 'Purchase type / measure', required: true, placeholder: 'e.g. Piece, Dozen, Carton' },
    {
      key: 'unitSize', type: 'number', required: true, min: 1, step: 1,
      label: () => `pcs per ${this.measureName()}`
    }
  ];

  readonly lineFieldsE: FormField[] = [
    { key: 'expiryDate', label: 'common.expiryDate', type: 'date', required: true },
    { key: 'batchNumber', label: 'common.batchNumber', labelHint: 'auto if empty', placeholder: 'B1-0001' }
  ];

  readonly lineFieldsF: FormField[] = [
    {
      key: 'measureQuantity', type: 'number', required: true, min: 1, step: 1,
      label: () => `Quantity (${this.measureName()})`
    },
    {
      key: 'measurePrice', type: 'currency', required: true, min: 0,
      label: () => `Buying price per ${this.measureName()} (TZS)`
    }
  ];

  readonly lineFieldsG: FormField[] = [
    { key: 'sellingPrice', label: 'Selling price per piece (TZS)', type: 'currency', min: 0 }
  ];

  constructor(private readonly gql: GraphqlService) {
    this.perm.load();
    this.load();
    this.loadProductOptions();
    this.loadCategories();
  }

  loadProductOptions(): void {
    const q = `query Products { products { id sku name } }`;
    this.gql.request<ProductsQueryResult>(q).subscribe({
      next: (res) => this.productOptions.set(res.products ?? []),
      error: () => this.productOptions.set([])
    });
  }

  loadCategories(): void {
    const q = `query Categories { categories { id name } }`;
    this.gql.request<{ categories: Array<{ id: string; name: string }> }>(q).subscribe({
      next: (res) => this.categories.set(res.categories ?? []),
      error: () => this.categories.set([])
    });
  }

  linePcs(): number {
    const raw = this.lineForm.getRawValue();
    const size = Number(raw.unitSize ?? 0);
    const qty = Number(raw.measureQuantity ?? 0);
    return size > 0 ? Math.max(0, qty) * size : 0;
  }

  costPerPiece(): number {
    const raw = this.lineForm.getRawValue();
    const size = Number(raw.unitSize ?? 0);
    const price = Number(raw.measurePrice ?? 0);
    return size > 0 ? price / size : 0;
  }

  lineTotal(): number {
    const raw = this.lineForm.getRawValue();
    return Number(raw.measurePrice ?? 0) * Number(raw.measureQuantity ?? 0);
  }

  lineQtyLabel(l: PurchaseLineInput): string {
    if (l.measureName) return `${l.measureQuantity} × ${l.measureName} (${l.quantityReceived} pcs)`;
    return `${l.quantityReceived} pcs`;
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
    this.resetLineForm();
    this.lines.set([]);
    this.createOpen.set(true);
  }

  openEdit(o: PurchaseOrder): void {
    this.error.set(null);
    this.editingOrderId.set(String(o.id));
    this.headerForm.reset({ supplier: o.supplier ?? '', invoiceNumber: o.invoiceNumber ?? '' });
    this.resetLineForm();
    this.lines.set(
      (o.lines ?? []).map((l) => ({
        productId: Number(l.productId),
        newProduct: null,
        displayName: `${l.productName ?? ''}${l.sku ? ` — ${l.sku}` : ''}`,
        batchNumber: String(l.batchNumber ?? ''),
        expiryDate: String(l.expiryDate ?? ''),
        costPrice: Number(l.costPrice ?? 0),
        quantityReceived: Number(l.quantityReceived ?? 0),
        measureName: null,
        measureQuantity: null
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

    const q = `query PurchaseOrders($branch: String) { purchaseOrders(branch: $branch) { id supplier invoiceNumber receivedAt receivedBy branch lines { id productId sku productName batchId batchNumber expiryDate costPrice quantityReceived } } }`;

    this.gql.request<PurchaseOrdersQueryResult>(q, { branch: this.branchCtx.effective() }).subscribe({
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
    const unitSize = Number(raw.unitSize ?? 0);
    if (unitSize <= 0) return;

    const name = (raw.name ?? '').trim();
    if (!name) return;

    const sku = raw.sku?.trim() || null;
    const existing = this.productOptions().find((p) =>
      p.name.trim().toLowerCase() === name.toLowerCase() ||
      (sku != null && p.sku.trim().toLowerCase() === sku.toLowerCase()));
    if (existing) {
      this.error.set(`"${existing.name}" already exists in the system (SKU ${existing.sku}). Add Purchase is for new products only.`);
      return;
    }
    const dup = this.lines().find((l) =>
      l.newProduct != null &&
      (l.newProduct.name.toLowerCase() === name.toLowerCase() ||
        (sku != null && l.newProduct.sku?.toLowerCase() === sku.toLowerCase())));
    if (dup) {
      this.error.set(`"${name}" is already added as a line below.`);
      return;
    }
    this.error.set(null);

    const measure = (raw.measure ?? '').trim() || 'Piece';
    const measureQty = Number(raw.measureQuantity ?? 0);
    const measurePrice = Number(raw.measurePrice ?? 0);
    const pcs = Math.round(measureQty * unitSize);
    if (pcs <= 0) return;

    const costPrice = Math.round((measurePrice / unitSize) * 10000) / 10000;
    const sellingPrice = raw.sellingPrice != null ? Number(raw.sellingPrice) : null;

    const newProduct: NewProductInput = {
      sku,
      barcode: raw.barcode?.trim() || null,
      name,
      brand: raw.brand?.trim() || null,
      category: raw.category?.trim() || null,
      variant: raw.variant?.trim() || null,
      unitOfMeasure: 'pcs',
      buyingPrice: costPrice,
      sellingPrice,
      units: [{
        name: measure,
        price: sellingPrice != null ? Math.round(sellingPrice * unitSize * 100) / 100 : null,
        buyingPrice: measurePrice,
        quantity: unitSize
      }]
    };

    this.lines.set([
      ...this.lines(),
      {
        productId: null,
        newProduct,
        displayName: name,
        batchNumber: raw.batchNumber?.trim() || null,
        expiryDate: raw.expiryDate ?? '',
        costPrice,
        quantityReceived: pcs,
        measureName: measure,
        measureQuantity: measureQty
      }
    ]);

    this.resetLineForm();
  }

  private resetLineForm(): void {
    this.lineForm.reset({
      sku: '',
      name: '',
      barcode: '',
      brand: '',
      category: '',
      variant: '',
      sellingPrice: null,
      measure: 'Piece',
      unitSize: 1,
      batchNumber: '',
      expiryDate: '',
      measurePrice: 0,
      measureQuantity: 1
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
    const lineInputs = this.lines().map(({ productId, newProduct, batchNumber, expiryDate, costPrice, quantityReceived }) =>
      ({ productId, newProduct, batchNumber, expiryDate, costPrice, quantityReceived }));

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
            branch: this.branchCtx.writeBranch(),
            lines: lineInputs
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
          branch: this.branchCtx.writeBranch(),
          lines: lineInputs
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

