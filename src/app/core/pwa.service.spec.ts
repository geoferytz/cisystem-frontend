import { TestBed } from '@angular/core/testing';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { Subject } from 'rxjs';
import { PwaService } from './pwa.service';

describe('PwaService', () => {
  let versions: Subject<VersionEvent>;

  beforeEach(() => {
    versions = new Subject<VersionEvent>();
    TestBed.configureTestingModule({
      providers: [{ provide: SwUpdate, useValue: { isEnabled: true, versionUpdates: versions } }]
    });
  });

  it('tracks connectivity without caching or queuing business requests', () => {
    const service = TestBed.inject(PwaService);
    window.dispatchEvent(new Event('offline'));
    expect(service.online()).toBeFalse();
    window.dispatchEvent(new Event('online'));
    expect(service.online()).toBeTrue();
  });

  it('defers installation until requested and consumes the prompt once', async () => {
    const service = TestBed.inject(PwaService);
    const event = Object.assign(new Event('beforeinstallprompt', { cancelable: true }), {
      prompt: jasmine.createSpy('prompt').and.resolveTo(),
      userChoice: Promise.resolve({ outcome: 'accepted', platform: 'web' })
    });
    window.dispatchEvent(event);
    expect(event.defaultPrevented).toBeTrue();
    expect(service.canInstall()).toBeTrue();
    expect(event.prompt).not.toHaveBeenCalled();
    await service.install();
    expect(event.prompt).toHaveBeenCalledTimes(1);
    expect(service.canInstall()).toBeFalse();
    await service.install();
    expect(event.prompt).toHaveBeenCalledTimes(1);
  });

  it('clears the install offer after installation', () => {
    const service = TestBed.inject(PwaService);
    window.dispatchEvent(new Event('beforeinstallprompt'));
    window.dispatchEvent(new Event('appinstalled'));
    expect(service.canInstall()).toBeFalse();
  });

  it('offers a ready update without reloading automatically', () => {
    const service = TestBed.inject(PwaService);
    versions.next({ type: 'VERSION_READY', currentVersion: { hash: 'old' }, latestVersion: { hash: 'new' } });
    expect(service.updateAvailable()).toBeTrue();
  });
});
