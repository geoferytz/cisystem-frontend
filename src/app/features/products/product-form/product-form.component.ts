import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type Category = {
  id: string;
  name: string;
  active: boolean;
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
};

@Component({
  selector: 'cis-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    sku: ['', [Validators.required]],
    barcode: [''],
    name: ['', [Validators.required]],
    brand: [''],
    category: [''],
    variant: [''],
    unitOfMeasure: [''],
    buyingPrice: [null as number | null],
    sellingPrice: [null as number | null],

    batchNumber: [''],
    expiryDate: [''],
    location: ['']
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']?.currentValue === true) {
      this.form.reset({
        sku: '',
        barcode: '',
        name: '',
        brand: '',
        category: '',
        variant: '',
        unitOfMeasure: '',
        buyingPrice: null,
        sellingPrice: null,
        batchNumber: '',
        expiryDate: '',
        location: ''
      });
    }
  }

  submit(): void {
    if (this.form.invalid) return;
    this.submitted.emit(this.form.getRawValue() as ProductFormValue);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
