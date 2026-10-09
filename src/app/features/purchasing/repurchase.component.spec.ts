import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, Subject, throwError } from 'rxjs';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { PermissionService } from '../../shared/services/permission.service';
import { PendingRepurchasesComponent } from './pending-repurchases.component';
import { RepurchaseComponent, RepurchaseOrder, RepurchaseProduct } from './repurchase.component';

const product: RepurchaseProduct = { id: '1', sku: 'SKU-1', name: 'Cream', barcode: '1234', brand: 'Naboo', category: 'Skincare', unitOfMeasure: 'pcs', active: true, buyingPrice: 5, sellingPrice: 10, availableQuantity: 2 };
const order: RepurchaseOrder = { id: '33b44fba-9e7e-49c0-8df5-ded9a6d214e2', supplier: 'Supplier', invoiceNumber: 'INV-1', createdAt: '2026-01-01T00:00:00Z', createdBy: 'storekeeper', activation: false, receivedPurchaseId: null,
  lines: [{ productId: '1', sku: 'SKU-1', productName: 'Cream', buyingPrice: 5, sellingPrice: 10, quantity: 2 }] };

describe('RepurchaseComponent', () => {
  let request: jasmine.Spy;
  beforeEach(async () => {
    request = jasmine.createSpy('request').and.callFake((query: string) => {
      if (query.includes('query PendingRepurchases')) return of({ pendingRepurchases: [order] });
      if (query.includes('query RepurchaseProducts')) return of({ repurchaseProducts: [product, { ...product, id: '2', name: 'Soap', availableQuantity: 0 }] });
      if (query.includes('mutation SubmitRepurchase')) return of({ submitRepurchase: order });
      return of({ receiveRepurchase: { ...order, receivedPurchaseId: '9' } });
    });
    await TestBed.configureTestingModule({ imports: [RepurchaseComponent], providers: [
      { provide: GraphqlService, useValue: { request } },
      { provide: PermissionService, useValue: { canCreate: () => true, canEdit: () => true } }
    ] }).compileComponents();
  });
  const setup = () => {
    const fixture = TestBed.createComponent(RepurchaseComponent);
    fixture.detectChanges();
    return fixture;
  };

  it('renders pending orders and the repurchase entry point', () => {
    const fixture = setup();
    expect(fixture.nativeElement.textContent).toContain('Repurchase');
    expect(fixture.nativeElement.textContent).toContain('Pending receipt');
  });

  it('searches products and filters inventory versus out-of-stock', () => {
    const page = setup().componentInstance;
    page.openRepurchase();
    expect(page.filteredProducts().length).toBe(2);
    page.filter.set('out');
    expect(page.filteredProducts()[0].name).toBe('Soap');
    page.filter.set('inventory');
    expect(page.filteredProducts()).toEqual([product]);
    page.search.set('1234');
    expect(page.filteredProducts()).toEqual([product]);
    page.search.set('unknown');
    expect(page.filteredProducts()).toEqual([]);
  });

  it('combines cart items and recalculates totals from buying prices', () => {
    const page = setup().componentInstance;
    page.addProduct(product); page.addProduct(product);
    expect(page.cart().length).toBe(1);
    page.setLine('1', 'buyingPrice', 7);
    page.setLine('1', 'sellingPrice', 12);
    expect(page.total()).toBe(14);
    expect(page.itemCount()).toBe(2);
    page.removeProduct('1');
    expect(page.cart()).toEqual([]);
  });

  it('rejects inactive products and invalid quantities or prices', () => {
    const page = setup().componentInstance;
    page.addProduct({ ...product, active: false });
    expect(page.cart()).toEqual([]);
    page.addProduct(product);
    page.setLine('1', 'quantity', 0);
    page.setLine('1', 'quantity', 1.5);
    page.setLine('1', 'buyingPrice', -1);
    expect(page.cart()[0].quantity).toBe(1);
    expect(page.cart()[0].buyingPrice).toBe(5);
    expect(page.error()).toBeTruthy();
  });

  it('submits a pending order without calling inventory receipt', () => {
    const page = setup().componentInstance;
    page.addProduct(product); page.submit();
    expect(request.calls.allArgs().some(args => String(args[0]).includes('mutation SubmitRepurchase'))).toBeTrue();
    expect(request.calls.allArgs().some(args => String(args[0]).includes('mutation ReceiveRepurchase'))).toBeFalse();
    expect(page.cart()).toEqual([]);
  });

  it('blocks duplicate submissions and preserves the request id after failures', () => {
    const page = setup().componentInstance;
    const response = new Subject<unknown>();
    request.and.returnValue(response);
    page.addProduct(product); page.submit();
    const input = request.calls.mostRecent().args[1].input;
    page.submit();
    expect(request.calls.allArgs().filter(args => String(args[0]).includes('mutation SubmitRepurchase')).length).toBe(1);
    response.error(new Error('Network interrupted'));
    expect(page.cart().length).toBe(1);
    request.and.returnValue(throwError(() => new Error('Still offline')));
    page.submit();
    expect(request.calls.mostRecent().args[1].input.id).toBe(input.id);
    expect(page.busy()).toBeFalse();
  });

  it('requires batch expiry details before receiving and emits a refresh afterwards', () => {
    const fixture = setup();
    const pending = fixture.debugElement.query(By.directive(PendingRepurchasesComponent)).componentInstance;
    spyOn(pending.received, 'emit');
    pending.openReceipt(order); pending.receiveOrder();
    expect(pending.error()).toContain('expiry date');
    expect(pending.received.emit).not.toHaveBeenCalled();
    pending.receiptLines[0].expiryDate = '2099-01-01';
    pending.receiveOrder();
    expect(pending.received.emit).toHaveBeenCalled();
    expect(pending.receiptOrder()).toBeNull();
  });

  it('renders the catalog and cart in the repurchase modal', () => {
    const fixture = setup();
    fixture.componentInstance.openRepurchase();
    fixture.componentInstance.addProduct(product);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('All Products');
    expect(fixture.nativeElement.textContent).toContain('Order cart');
    expect(fixture.nativeElement.textContent).toContain('Selling price');
  });
});
