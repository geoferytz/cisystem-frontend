import { CommonModule } from '@angular/common';
import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { GraphqlService } from '../../core/graphql/graphql.service';

type MySaleLine = {
  id: string;
  productName: string;
  quantity: number;
  unitPrice: number;
};

type MySale = {
  id: string;
  createdAt: string;
  createdBy?: string | null;
  customer?: string | null;
  referenceNumber?: string | null;
  lines: MySaleLine[];
};

type MySalesQueryResult = { mySales: MySale[] };

@Component({
  selector: 'cis-my-sales-report-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './my-sales-report.page.html',
  styleUrl: './my-sales-report.page.scss'
})
export class MySalesReportPage {
  sales = signal<MySale[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  selectedDate = signal<string>(new Date().toISOString().slice(0, 10));
  selectedMonth = signal<string>(new Date().toISOString().slice(0, 7));

  private readonly fb = inject(FormBuilder);
  private readonly gql = inject(GraphqlService);
  private readonly destroyRef = inject(DestroyRef);

  form = this.fb.group({
    date: [new Date().toISOString().slice(0, 10), [Validators.required]],
    month: [new Date().toISOString().slice(0, 7), [Validators.required]]
  });

  constructor() {
    this.form.controls.date.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((v) => {
      const next = String(v || '').trim();
      if (next) this.selectedDate.set(next);
    });

    this.form.controls.month.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((v) => {
      const next = String(v || '').trim();
      if (next) this.selectedMonth.set(next);
    });

    this.refresh();
  }

  refresh(): void {
    this.loading.set(true);
    this.error.set(null);
    const q = `query { mySales { id createdAt createdBy customer referenceNumber lines { id productName quantity unitPrice } } }`;
    this.gql.request<MySalesQueryResult>(q).subscribe({
      next: (res) => {
        this.sales.set(res.mySales);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.sales.set([]);
        this.error.set(e instanceof Error ? e.message : 'Failed to load my sales');
        this.loading.set(false);
      }
    });
  }

  private isSameDay(iso: string, ymd: string): boolean {
    return String(iso || '').slice(0, 10) === ymd;
  }

  private isSameMonth(iso: string, ym: string): boolean {
    return String(iso || '').slice(0, 7) === ym;
  }

  dailySales = computed(() => {
    const date = this.selectedDate();
    if (!date) return [];
    return this.sales().filter((s) => this.isSameDay(s.createdAt, date));
  });

  monthlySales = computed(() => {
    const month = this.selectedMonth();
    if (!month) return [];
    return this.sales().filter((s) => this.isSameMonth(s.createdAt, month));
  });

  private saleTotal(s: MySale): number {
    return (s.lines ?? []).reduce((sum, l) => sum + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
  }

  dailyTotal = computed(() => this.dailySales().reduce((sum, s) => sum + this.saleTotal(s), 0));
  monthlyTotal = computed(() => this.monthlySales().reduce((sum, s) => sum + this.saleTotal(s), 0));

  saleTotalValue(s: MySale): number {
    return this.saleTotal(s);
  }
}
