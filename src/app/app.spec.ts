import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { App } from './app';
import { GraphqlService } from './core/graphql/graphql.service';
import { PwaService } from './core/pwa.service';

describe('App', () => {
  const pwa = {
    online: signal(true),
    updateAvailable: signal(false),
    canInstall: signal(false),
    installError: signal<string | null>(null),
    install: jasmine.createSpy('install'),
    reload: jasmine.createSpy('reload')
  };

  beforeEach(async () => {
    pwa.online.set(true);
    pwa.updateAvailable.set(false);
    pwa.canInstall.set(false);
    pwa.installError.set(null);
    pwa.install.calls.reset();
    pwa.reload.calls.reset();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),
        { provide: PwaService, useValue: pwa },
        { provide: GraphqlService, useValue: { request: () => of({}) } }
      ]
    }).compileComponents();
  });

  it('renders the application router outlet', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('router-outlet')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.cis-pwa-status')).toBeNull();
  });

  it('explains the offline limitation', () => {
    pwa.online.set(false);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Live data and saving require a connection');
  });

  it('places the install action in the footer instead of the top status banner', () => {
    pwa.canInstall.set(true);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('footer.cis-install-footer button') as HTMLButtonElement | null;
    expect(button).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.cis-pwa-status')).toBeNull();
    expect(pwa.install).not.toHaveBeenCalled();
    button?.click();
    expect(pwa.install).toHaveBeenCalled();
  });

  it('waits for user confirmation before reloading an update', () => {
    pwa.updateAvailable.set(true);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Save your work before reloading');
    expect(pwa.reload).not.toHaveBeenCalled();
    fixture.nativeElement.querySelector('button').click();
    expect(pwa.reload).toHaveBeenCalled();
  });
});
