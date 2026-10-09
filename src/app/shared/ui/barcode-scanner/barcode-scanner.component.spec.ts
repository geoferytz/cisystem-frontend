import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { BarcodeScannerComponent } from './barcode-scanner.component';

describe('BarcodeScannerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BarcodeScannerComponent] }).compileComponents();
  });

  it('emits close when cancelled', () => {
    const fixture = TestBed.createComponent(BarcodeScannerComponent);
    const component = fixture.componentInstance;
    const closed = jasmine.createSpy('closed');
    component.close.subscribe(closed);
    component.requestClose();
    expect(closed).toHaveBeenCalled();
    expect(component.status).toBe('idle');
  });

  it('shows a secure-context error when the camera API is unavailable', fakeAsync(() => {
    const fixture = TestBed.createComponent(BarcodeScannerComponent);
    const component = fixture.componentInstance;
    spyOnProperty(Navigator.prototype, 'mediaDevices', 'get').and.returnValue(undefined as never);
    component.open = true;
    fixture.detectChanges();
    component.ngOnChanges({ open: new SimpleChange(false, true, false) });
    tick();
    expect(component.status).toBe('error');
    expect(component.errorMessage).toContain('secure');
  }));
});
