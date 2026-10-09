import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BarcodeScannerComponent } from '../../../shared/ui/barcode-scanner/barcode-scanner.component';

type Category = {
  id: string;
  name: string;
  active: boolean;
};

export type ProductUnitValue = {
  name: string;
  price: number | null;
  buyingPrice: number | null;
  quantity: number | null;
};

export type ProductFormValue = {
  sku: string;
  barcode: string;
  name: string;
  brand: string;
  category: string;
  variant: string;
  unitOfMeasure: string;
  buyingPrice: number | null;
  sellingPrice: number | null;
  batchNumber: string;
  expiryDate: string;
  location: string;
  initialQuantity: number | null;
  units: ProductUnitValue[];
};

type PricingTier = {
  key: 'piece' | 'halfDozen' | 'dozen' | 'carton';
  label: string;
  defaultQuantity: number | null;
};

@Component({
  selector: 'cis-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BarcodeScannerComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnChanges {
  @Input({ required: true }) categories: Category[] = [];
  @Input() loading = false;
  @Input() error: string | null = null;
  @Input() open = false;

  @Output() submitted = new EventEmitter<ProductFormValue>();
  @Output() cancel = new EventEmitter<void>();

  scannerOpen = false;
  activeTab = signal(0);

  readonly tabs = ['Basic Info', 'Pricing', 'Measure'];

  readonly tiers: PricingTier[] = [
    { key: 'piece', label: 'Piece Pricing', defaultQuantity: 1 },
    { key: 'halfDozen', label: 'Half Dozen', defaultQuantity: 6 },
    { key: 'dozen', label: 'Dozen', defaultQuantity: 12 },
    { key: 'carton', label: 'Carton', defaultQuantity: null }
  ];

  measureOptions = signal<string[]>([
    'pcs', 'piece', 'half dozen', 'dozen', 'carton',
    'box', 'bottle', 'tube', 'set', 'pack', 'ml', 'g', 'kg', 'L'
  ]);
  addingMeasure = signal(false);
  newMeasure = '';

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    sku: ['', [Validators.required]],
    barcode: [''],
    name: ['', [Validators.required]],
    brand: [''],
    category: [''],
    variant: [''],

    batchNumber: [''],
    expiryDate: [''],
    location: [''],
    initialQuantity: [null as number | null, [Validators.required, Validators.min(1)]],

    pieceBuyingPrice: [null as number | null],
    pieceSellingPrice: [null as number | null],
    pieceQuantity: [1 as number | null],
    halfDozenBuyingPrice: [null as number | null],
    halfDozenSellingPrice: [null as number | null],
    halfDozenQuantity: [6 as number | null],
    dozenBuyingPrice: [null as number | null],
    dozenSellingPrice: [null as number | null],
    dozenQuantity: [12 as number | null],
    cartonBuyingPrice: [null as number | null],
    cartonSellingPrice: [null as number | null],
    cartonQuantity: [null as number | null],

    unitOfMeasure: ['pcs']
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']?.currentValue === true) {
      this.activeTab.set(0);
      this.addingMeasure.set(false);
      this.newMeasure = '';
      this.form.reset({
        sku: '',
        barcode: '',
        name: '',
        brand: '',
        category: '',
        variant: '',
        batchNumber: '',
        expiryDate: '',
        location: '',
        initialQuantity: null,
        pieceBuyingPrice: null,
        pieceSellingPrice: null,
        pieceQuantity: 1,
        halfDozenBuyingPrice: null,
        halfDozenSellingPrice: null,
        halfDozenQuantity: 6,
        dozenBuyingPrice: null,
        dozenSellingPrice: null,
        dozenQuantity: 12,
        cartonBuyingPrice: null,
        cartonSellingPrice: null,
        cartonQuantity: null,
        unitOfMeasure: 'pcs'
      });
    }
  }

  setTab(index: number): void {
    this.activeTab.set(index);
  }

  nextTab(): void {
    if (this.activeTab() < this.tabs.length - 1) this.activeTab.set(this.activeTab() + 1);
  }

  prevTab(): void {
    if (this.activeTab() > 0) this.activeTab.set(this.activeTab() - 1);
  }

  onMeasureSelect(value: string): void {
    if (value === '__add') {
      this.addingMeasure.set(true);
      this.newMeasure = '';
      return;
    }
    this.addingMeasure.set(false);
    this.form.controls.unitOfMeasure.setValue(value);
  }

  addMeasure(): void {
    const value = this.newMeasure.trim();
    if (!value) return;
    if (!this.measureOptions().some(o => o.toLowerCase() === value.toLowerCase())) {
      this.measureOptions.update(list => [...list, value]);
    }
    this.form.controls.unitOfMeasure.setValue(value);
    this.addingMeasure.set(false);
    this.newMeasure = '';
  }

  onBarcodeScanned(code: string): void {
    this.form.controls.barcode.setValue(code);
    this.scannerOpen = false;
  }

  tierControlName(tier: PricingTier, field: 'BuyingPrice' | 'SellingPrice' | 'Quantity'): string {
    return `${tier.key}${field}`;
  }

  private collectUnits(): ProductUnitValue[] {
    const raw = this.form.getRawValue();
    const tierNames: Record<PricingTier['key'], string> = {
      piece: 'Piece',
      halfDozen: 'Half Dozen',
      dozen: 'Dozen',
      carton: 'Carton'
    };
    const units: ProductUnitValue[] = [];
    for (const tier of this.tiers) {
      const price = raw[`${tier.key}SellingPrice` as keyof typeof raw] as number | null;
      const buyingPrice = raw[`${tier.key}BuyingPrice` as keyof typeof raw] as number | null;
      const quantity = raw[`${tier.key}Quantity` as keyof typeof raw] as number | null;
      if (price == null && buyingPrice == null && (quantity == null || quantity <= 0)) continue;
      units.push({
        name: tierNames[tier.key],
        price,
        buyingPrice,
        quantity: quantity != null && quantity > 0 ? quantity : tier.defaultQuantity
      });
    }
    return units;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      if (!this.form.controls.sku.valid || !this.form.controls.name.valid) {
        this.activeTab.set(0);
      }
      return;
    }
    const raw = this.form.getRawValue();
    this.submitted.emit({
      sku: raw.sku ?? '',
      barcode: raw.barcode ?? '',
      name: raw.name ?? '',
      brand: raw.brand ?? '',
      category: raw.category ?? '',
      variant: raw.variant ?? '',
      unitOfMeasure: raw.unitOfMeasure ?? '',
      buyingPrice: raw.pieceBuyingPrice ?? null,
      sellingPrice: raw.pieceSellingPrice ?? null,
      batchNumber: raw.batchNumber ?? '',
      expiryDate: raw.expiryDate ?? '',
      location: raw.location ?? '',
      initialQuantity: raw.initialQuantity ?? null,
      units: this.collectUnits()
    });
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
