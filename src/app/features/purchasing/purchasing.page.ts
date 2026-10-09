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

type ProductUnit = {
  name: string;
  price: number | null;
  buyingPrice: number | null;
  quantity: number;
};

type ProductOption = {
  id: string;
  sku: string;
  name: string;
  active: boolean;
  brand?: string | null;
  category?: string | null;
  unitOfMeasure?: string | null;
  buyingPrice?: number | null;
  sellingPrice?: number | null;
  units: ProductUnit[];
  batches: Array<{ batchNumber: string }>;
};

type MeasureOption = {
  name: string;
  price: number | null;
  buyingPrice: number | null;
  quantity: number | null;
};

type ProductsQueryResult = { products: ProductOption[] };

type PurchaseLineInput = {
  productId: number;
  batchNumber: string;
  expiryDate: string;
  costPrice: number;
  quantityReceived: number;
  measureName: string | null;
  measureQuantity: number | null;
};

@Component({
  selector: 'cis-purchasing-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ConfirmDialogComponent, ModalComponent, MoneyPipe, TranslatePipe, RepurchaseComponent, RowActionsMenuComponent, PagerComponent],
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
  productOptions = signal<ProductOption[]>([]);
  selectedProduct = signal<ProductOption | null>(null);
  selectedUnit = signal<MeasureOption | null>(null);

  measureOptions = computed<MeasureOption[]>(() => {
    const p = this.selectedProduct();
    if (!p) return [];
    const units = p.units ?? [];
    const byName = new Map(units.map((u) => [u.name.toLowerCase(), u]));
    const standard: Array<{ name: string; qty: number | null }> = [
      { name: 'Piece', qty: 1 },
      { name: 'Half Dozen', qty: 6 },
      { name: 'Dozen', qty: 12 },
      { name: 'Carton', qty: null }
    ];
    const options: MeasureOption[] = standard.map((s) => {
      const u = byName.get(s.name.toLowerCase());
      if (u) return { name: u.name, price: u.price, buyingPrice: u.buyingPrice, quantity: u.quantity };
      const qty = s.qty;
      return {
        name: s.name,
        quantity: qty,
        price: p.sellingPrice != null && qty != null ? p.sellingPrice * qty : null,
        buyingPrice: p.buyingPrice != null && qty != null ? p.buyingPrice * qty : null
      };
    });
    for (const u of units) {
      if (!standard.some((s) => s.name.toLowerCase() === u.name.toLowerCase())) {
        options.push({ name: u.name, price: u.price, buyingPrice: u.buyingPrice, quantity: u.quantity });
      }
    }
    return options;
  });

  private readonly fb = inject(FormBuilder);
  private readonly branchCtx = inject(BranchContext);

  headerForm = this.fb.group({
    supplier: [''],
    invoiceNumber: ['']
  });

  lineForm = this.fb.group({
    productId: [null as number | null, [Validators.required]],
    measure: ['', [Validators.required]],
    unitSize: [1 as number | null, [Validators.required, Validators.min(1)]],
    batchNumber: ['', [Validators.required]],
    expiryDate: ['', [Validators.required]],
    measurePrice: [0 as number, [Validators.required, Validators.min(0)]],
    measureQuantity: [1 as number, [Validators.required, Validators.min(1)]]
  });

  constructor(private readonly gql: GraphqlService) {
    this.lineForm.controls.measure.disable();
    this.perm.load();
    this.load();
    this.loadProductOptions();
  }

  loadProductOptions(): void {
    const q = `query Products { products { id sku name active brand category unitOfMeasure buyingPrice sellingPrice units { name price buyingPrice quantity } batches { batchNumber } } }`;
    this.gql.request<ProductsQueryResult>(q).subscribe({
      next: (res) => this.productOptions.set(res.products ?? []),
      error: () => this.productOptions.set([])
    });
  }

  onProductChange(): void {
    const id = Number(this.lineForm.getRawValue().productId);
    const product = this.productOptions().find((p) => Number(p.id) === id) ?? null;
    this.selectedProduct.set(product);
    this.selectedUnit.set(null);
    if (!product) {
      this.lineForm.patchValue({ measure: '', unitSize: null, measurePrice: 0, batchNumber: '' });
      this.lineForm.controls.measure.disable();
      return;
    }
    this.lineForm.controls.measure.enable();
    const batches = product.batches ?? [];
    this.lineForm.patchValue({
      batchNumber: batches.length ? batches[batches.length - 1].batchNumber : `${product.sku}-AUTO`
    });
    const first = this.measureOptions()[0];
    if (first) this.applyMeasure(first);
  }

  onMeasureChange(): void {
    const name = String(this.lineForm.getRawValue().measure ?? '');
    const unit = this.measureOptions().find((u) => u.name === name) ?? null;
    this.applyMeasure(unit);
  }

  private applyMeasure(unit: MeasureOption | null): void {
    this.selectedUnit.set(unit);
    if (!unit) {
      this.lineForm.patchValue({ measure: '', unitSize: null });
      return;
    }
    const p = this.selectedProduct();
    this.lineForm.patchValue({
      measure: unit.name,
      unitSize: unit.quantity ?? null,
      measurePrice: unit.buyingPrice ?? (unit.quantity != null && p?.buyingPrice != null ? p.buyingPrice * unit.quantity : 0)
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

  productLabel(id: number): string {
    const p = this.productOptions().find((x) => Number(x.id) === Number(id));
    return p ? `${p.name} — ${p.sku}` : `#${id}`;
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
    const unit = this.selectedUnit();
    const unitSize = Number(raw.unitSize ?? 0);
    if (!raw.productId || !unit || unitSize <= 0) return;

    const product = this.selectedProduct();
    const batches = product?.batches ?? [];
    const batchNumber =
      raw.batchNumber?.trim() ||
      (batches.length ? batches[batches.length - 1].batchNumber : `${product?.sku ?? 'BATCH'}-AUTO`);

    const measureQty = Number(raw.measureQuantity ?? 0);
    const measurePrice = Number(raw.measurePrice ?? 0);
    const pcs = Math.round(measureQty * unitSize);
    if (pcs <= 0) return;

    this.lines.set([
      ...this.lines(),
      {
        productId: Number(raw.productId),
        batchNumber,
        expiryDate: raw.expiryDate ?? '',
        costPrice: Math.round((measurePrice / unitSize) * 10000) / 10000,
        quantityReceived: pcs,
        measureName: unit.name,
        measureQuantity: measureQty
      }
    ]);

    this.resetLineForm();
  }

  private resetLineForm(): void {
    this.selectedProduct.set(null);
    this.selectedUnit.set(null);
    this.lineForm.controls.measure.disable();
    this.lineForm.reset({
      productId: null,
      measure: '',
      unitSize: null,
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
    const lineInputs = this.lines().map(({ productId, batchNumber, expiryDate, costPrice, quantityReceived }) =>
      ({ productId, batchNumber, expiryDate, costPrice, quantityReceived }));

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

