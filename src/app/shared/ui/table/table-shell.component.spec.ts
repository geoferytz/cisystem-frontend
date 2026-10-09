import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ResponsiveTablesDirective } from './table-shell.component';

@Component({
  standalone: true,
  imports: [ResponsiveTablesDirective],
  template: `<div cisResponsiveTables>
    <table>
      <thead><tr><th>{{ heading }}</th><th>Actions</th></tr></thead>
      <tbody>
        <tr><td>Product A</td><td><button (click)="clicks = clicks + 1">Edit</button></td></tr>
        @if (extraRow) { <tr><td>Product B</td><td>Available</td></tr> }
        <tr><td colspan="2"><table><thead><tr><th>Quantity</th></tr></thead><tbody><tr><td>3</td></tr></tbody></table></td></tr>
      </tbody>
    </table>
  </div>`
})
class TestHost {
  heading = 'Product';
  clicks = 0;
  extraRow = false;
}

describe('ResponsiveTablesDirective', () => {
  const setup = () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    return fixture;
  };

  beforeEach(() => TestBed.configureTestingModule({ imports: [TestHost] }));

  it('labels mobile cells while preserving table semantics and actions', () => {
    const fixture = setup();
    const table = fixture.nativeElement.querySelector('table') as HTMLTableElement;
    expect(table.classList.contains('cis-responsive-table')).toBeTrue();
    expect(table.getAttribute('role')).toBe('table');
    expect(table.tBodies[0].rows[0].cells[0].getAttribute('data-label')).toBe('Product');
    expect(table.tBodies[0].rows[0].cells[1].getAttribute('data-label')).toBe('Actions');
    table.querySelector('button')!.click();
    expect(fixture.componentInstance.clicks).toBe(1);
  });

  it('keeps expanded rows full-width and labels nested tables separately', () => {
    const fixture = setup();
    const tables = fixture.nativeElement.querySelectorAll('table') as NodeListOf<HTMLTableElement>;
    const expanded = tables[0].tBodies[0].rows[1].cells[0];
    expect(expanded.hasAttribute('data-full-width')).toBeTrue();
    expect(expanded.hasAttribute('data-label')).toBeFalse();
    expect(tables[1].tBodies[0].rows[0].cells[0].getAttribute('data-label')).toBe('Quantity');
  });

  it('updates labels after translations and asynchronous rows change', async () => {
    const fixture = setup();
    fixture.componentInstance.heading = 'Bidhaa';
    fixture.componentInstance.extraRow = true;
    fixture.detectChanges();
    await new Promise<void>(resolve => setTimeout(resolve, 0));
    const table = fixture.nativeElement.querySelector('table') as HTMLTableElement;
    expect(table.tBodies[0].rows[0].cells[0].getAttribute('data-label')).toBe('Bidhaa');
    expect(table.tBodies[0].rows[1].cells[0].getAttribute('data-label')).toBe('Bidhaa');
    fixture.destroy();
  });
});
