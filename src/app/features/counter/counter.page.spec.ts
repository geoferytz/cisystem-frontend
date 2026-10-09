import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of, Subject, throwError } from 'rxjs';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { PwaService } from '../../core/pwa.service';
import { PermissionService } from '../../shared/services/permission.service';
import { CounterPage, CounterProduct, HeldCart } from './counter.page';

const product: CounterProduct = { id: '1', sku: 'SKU-1', barcode: 'ABC123', name: 'Moisturizer', brand: 'Gyla', category: 'Skincare', unitOfMeasure: 'Each', sellingPrice: 12.75, availableQuantity: 5, batchNumber: 'BN-1', expiryDate: '2027-01-01', daysToExpiry: 90, suggestedSellingPrice: null };
const held: HeldCart = { id: '3d28fa6b-4264-4adf-9f17-b8d2ef95af70', version: 2, customer: 'Customer', referenceNumber: 'REF-1', createdAt: '2026-01-01T12:00:00Z', updatedAt: '2026-01-01T12:00:00Z', createdBy: '1', total: 25.5,
  lines: [{ productId: '1', sku: 'SKU-1', productName: 'Moisturizer', quantity: 2, unitPrice: 12.75, location: 'MAIN' }] };

describe('CounterPage', () => {
  let request: jasmine.Spy;
  const online = signal(true);

  beforeEach(async () => {
    online.set(true);
    request = jasmine.createSpy('request').and.callFake((query: string) => {
      if (query.includes('query CounterProducts')) return of({ counterProducts: [product] });
      if (query.includes('query PendingCounterCarts')) return of({ pendingCounterCarts: [held] });
      if (query.includes('query CounterExpenseCategories')) return of({ counterExpenseCategories: [{ id: '1', name: 'Transport' }] });
      if (query.includes('mutation SaveCounterCart')) return of({ saveCounterCart: held });
      if (query.includes('mutation CheckoutCounterCart')) return of({ checkoutCounterCart: { id: '99' } });
      if (query.includes('mutation CounterCreateExpense')) return of({ createExpense: { id: '4' } });
      return of({ cancelCounterCart: true });
    });
    await TestBed.configureTestingModule({
      imports: [CounterPage],
      providers: [provideRouter([]), { provide: GraphqlService, useValue: { request } },
        { provide: PwaService, useValue: { online } },
        { provide: PermissionService, useValue: { load() {}, canCreate: () => true, canView: () => true, canDelete: () => true } }]
    }).compileComponents();
  });

  const setup = () => {
    const fixture = TestBed.createComponent(CounterPage);
    fixture.detectChanges();
    return fixture;
  };

  it('renders the two counter actions and server-backed pending sales', () => {
    const fixture = setup();
    expect(fixture.nativeElement.textContent).toContain('New Sale');
    expect(fixture.nativeElement.textContent).toContain('New Expenses');
    expect(fixture.componentInstance.pending()).toEqual([held]);
  });

  it('combines product selections at their configured selling price', () => {
    const page = setup().componentInstance;
    page.addProduct(product);
    page.addProduct(product);
    expect(page.lines().length).toBe(1);
    expect(page.itemCount()).toBe(2);
    expect(page.total()).toBe(25.5);
  });

  it('rejects invalid quantities, insufficient stock, and missing prices', () => {
    const page = setup().componentInstance;
    page.addProduct({ ...product, sellingPrice: null });
    expect(page.lines()).toEqual([]);
    page.addProduct(product);
    page.setQuantity('1', 1.5);
    page.setQuantity('1', 6);
    expect(page.itemCount()).toBe(1);
    expect(page.actionError()).toBeTruthy();
  });

  it('searches barcodes and filters product categories', () => {
    const page = setup().componentInstance;
    page.setSearch('abc123');
    expect(page.filteredProducts()).toEqual([product]);
    page.category.set('Haircare');
    expect(page.filteredProducts()).toEqual([]);
  });

  it('adds a product to the cart when its barcode is scanned', () => {
    const page = setup().componentInstance;
    page.onScanned('ABC123');
    expect(page.lines()).toEqual([{ productId: '1', sku: 'SKU-1', productName: 'Moisturizer', quantity: 1, unitPrice: 12.75, expiryDate: '2027-01-01', location: 'MAIN' }]);
    expect(page.actionError()).toBeNull();
  });

  it('reports an error when a scanned barcode matches no product', () => {
    const page = setup().componentInstance;
    page.onScanned('UNKNOWN');
    expect(page.lines()).toEqual([]);
    expect(page.actionError()).toContain('UNKNOWN');
  });

  it('adds the single matching product on hardware-scanner Enter', () => {
    const page = setup().componentInstance;
    page.setSearch('abc123');
    page.onSearchEnter();
    expect(page.itemCount()).toBe(1);
    expect(page.search()).toBe('');
  });

  it('keeps the search when Enter has no exact or single match', () => {
    const page = setup().componentInstance;
    page.setSearch('no-such-product');
    page.onSearchEnter();
    expect(page.itemCount()).toBe(0);
    expect(page.search()).toBe('no-such-product');
  });

  it('holds a cart without submitting client-controlled prices or charging it', () => {
    const page = setup().componentInstance;
    page.addProduct(product);
    const id = page.cartId();
    page.saveCart();
    const call = request.calls.allArgs().find(args => args[0].includes('mutation SaveCounterCart'))!;
    expect(call[1].input.id).toBe(id);
    expect(call[1].input.lines).toEqual([{ productId: '1', quantity: 1, location: 'MAIN' }]);
    expect(request.calls.allArgs().some(args => args[0].includes('mutation CheckoutCounterCart'))).toBeFalse();
    expect(page.lines()).toEqual([]);
    expect(page.dirty()).toBeFalse();
  });

  it('requires payment confirmation and prevents double submission', () => {
    const page = setup().componentInstance;
    page.addProduct(product);
    page.saveCart(true);
    expect(page.checkoutOpen()).toBeTrue();
    expect(page.total()).toBe(held.total);
    const pending = new Subject<{ checkoutCounterCart: { id: string } }>();
    request.and.returnValue(pending);
    request.calls.reset();
    page.completeSale();
    page.completeSale();
    expect(request).toHaveBeenCalledTimes(1);
    expect(request.calls.mostRecent().args[1].input).toEqual({ id: held.id, version: held.version, expectedTotal: held.total });
    pending.next({ checkoutCounterCart: { id: '99' } });
    pending.complete();
    expect(page.lines()).toEqual([]);
    expect(page.success()).toContain('Sale #99');
  });

  it('retains the held cart and checkout identity after a failed charge', () => {
    const page = setup().componentInstance;
    page.openSale(held);
    page.checkoutOpen.set(true);
    request.and.returnValue(throwError(() => new Error('Insufficient stock')));
    page.completeSale();
    expect(page.lines()).toEqual(held.lines);
    expect(page.cartId()).toBe(held.id);
    expect(page.checkoutOpen()).toBeTrue();
    expect(page.busy()).toBeFalse();
  });

  it('does not send mutations offline', () => {
    const page = setup().componentInstance;
    page.addProduct(product);
    online.set(false);
    request.calls.reset();
    page.saveCart();
    expect(request).not.toHaveBeenCalled();
  });

  it('creates an expense using the existing expense API', () => {
    const page = setup().componentInstance;
    page.openExpense();
    page.expenseForm.setValue({ date: '2026-09-15', categoryId: '1', description: 'Delivery', amount: 500, paymentMethod: 'CASH' });
    page.saveExpense();
    const call = request.calls.allArgs().find(args => args[0].includes('mutation CounterCreateExpense'))!;
    expect(call[1].input.amount).toBe(500);
    expect(call[1].input.categoryId).toBe('1');
    expect(page.expenseOpen()).toBeFalse();
  });

  it('warns before navigating away from unsaved cart changes', async () => {
    const page = setup().componentInstance;
    page.addProduct(product);
    const result = page.canDeactivate();
    if (!(result instanceof Promise)) throw new Error('Expected a promise');
    page.cancelDiscard();
    await expectAsync(result).toBeResolvedTo(false);
    page.openSale();
    expect(page.discardTarget()).toBe('new');
    expect(page.lines().length).toBe(1);
  });
});
