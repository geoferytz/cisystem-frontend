import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CIS_TABLE_IMPORTS, CisDataTableComponent, TableColumn } from './data-table.component';

type Row = { id: number; name: string; qty: number; status: string };

const columns: TableColumn<Row>[] = [
  { key: 'name', label: 'common.name' },
  { key: 'qty', label: 'Qty', align: 'right' },
  { key: 'status', label: 'Status', type: 'template' }
];

@Component({
  standalone: true,
  imports: [CIS_TABLE_IMPORTS],
  template: `
    <cis-data-table
      [columns]="cols"
      [rows]="rows"
      [loading]="loading"
      [emptyMessage]="'common.noData'"
    >
      <ng-template cisCell="status" let-row>badge:{{ row.status }}</ng-template>
    </cis-data-table>
  `
})
class TestHost {
  cols = columns;
  rows: Row[] = [
    { id: 1, name: 'Item A', qty: 3, status: 'OK' },
    { id: 2, name: 'Item B', qty: 0, status: 'LOW' }
  ];
  loading = false;
}

describe('CisDataTableComponent', () => {
  const setup = () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    return fixture;
  };

  beforeEach(() => TestBed.configureTestingModule({ imports: [TestHost] }));

  it('renders column headers and rows', () => {
    const fixture = setup();
    const el = fixture.nativeElement as HTMLElement;
    const headers = [...el.querySelectorAll('th')].map((th) => th.textContent?.trim());
    expect(headers).toContain('Qty');
    const cells = el.querySelectorAll('tbody td');
    expect(cells[0].textContent).toContain('Item A');
    expect(el.querySelectorAll('tbody tr').length).toBe(2);
  });

  it('renders custom cell templates via cisCell', () => {
    const fixture = setup();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('badge:OK');
    expect(el.textContent).toContain('badge:LOW');
  });

  it('applies responsive/accessibility metadata from the shared directive', () => {
    const fixture = setup();
    const table = fixture.nativeElement.querySelector('table') as HTMLTableElement;
    expect(table.classList.contains('cis-responsive-table')).toBeTrue();
    expect(table.tBodies[0].rows[0].cells[0].getAttribute('data-label')).toBeTruthy();
  });

  it('shows the empty message when there are no rows', () => {
    const fixture = setup();
    fixture.componentInstance.rows = [];
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('No data');
  });

  it('shows a loading row while loading', () => {
    const fixture = setup();
    fixture.componentInstance.loading = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Loading...');
  });

  it('paginates rows using the built-in pager', async () => {
    const fixture = setup();
    fixture.componentInstance.rows = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      qty: i,
      status: 'OK'
    }));
    fixture.detectChanges();
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const bodyRows = el.querySelectorAll('tbody tr');
    expect(bodyRows.length).toBe(10);
    expect(el.querySelector('cis-pager')).toBeTruthy();
  });
});
