import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CIS_FORM_IMPORTS, FormField } from './form-field.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CIS_FORM_IMPORTS],
  template: `
    <form [formGroup]="form">
      <cis-form-fields [form]="form" [fields]="fields">
        <ng-template cisField="custom"><span class="custom-slot">CUSTOM</span></ng-template>
      </cis-form-fields>
    </form>
  `
})
class TestHost {
  private readonly fb = new FormBuilder();
  form = this.fb.group({
    name: ['', Validators.required],
    email: [''],
    role: ['A'],
    notes: ['']
  });
  fields: FormField[] = [
    { key: 'name', label: 'Name', required: true },
    { key: 'email', label: 'Email', type: 'email', hint: 'We never share it' },
    {
      key: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { value: 'A', label: 'Alpha' },
        { value: 'B', label: 'Beta' }
      ]
    },
    { key: 'notes', label: 'Notes', type: 'textarea', hide: () => this.hideNotes },
    { key: 'custom', label: 'Custom', type: 'template' }
  ];
  hideNotes = false;
}

describe('CisFormFieldsComponent', () => {
  const setup = () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    return fixture;
  };

  beforeEach(() => TestBed.configureTestingModule({ imports: [TestHost] }));

  it('renders inputs, select and textarea from the field config', () => {
    const el = setup().nativeElement as HTMLElement;
    const inputs = el.querySelectorAll('input');
    const selects = el.querySelectorAll('select');
    expect(inputs.length).toBe(2);
    expect(selects.length).toBe(1);
    expect(el.querySelectorAll('select option').length).toBe(2);
    expect(el.querySelector('textarea')).toBeTruthy();
  });

  it('marks required fields with an asterisk and shows hints', () => {
    const el = setup().nativeElement as HTMLElement;
    expect(el.textContent).toContain('*');
    expect(el.textContent).toContain('We never share it');
  });

  it('renders cisField template slots', () => {
    const el = setup().nativeElement as HTMLElement;
    expect(el.querySelector('.custom-slot')?.textContent).toContain('CUSTOM');
  });

  it('honours the hide callback', () => {
    const fixture = setup();
    fixture.componentInstance.hideNotes = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('textarea')).toBeNull();
  });

  it('shows a validation error after the control is touched', () => {
    const fixture = setup();
    const name = fixture.componentInstance.form.controls.name;
    name.markAsTouched();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('This field is required');
  });

  it('binds controls to the form group', () => {
    const fixture = setup();
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'Geofrey';
    input.dispatchEvent(new Event('input'));
    expect(fixture.componentInstance.form.controls.name.value).toBe('Geofrey');
  });
});
