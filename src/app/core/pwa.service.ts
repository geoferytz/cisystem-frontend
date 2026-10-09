import { DestroyRef, Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SwUpdate } from '@angular/service-worker';

interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

@Injectable({ providedIn: 'root' })
export class PwaService {
  private readonly updates = inject(SwUpdate);
  private readonly destroyRef = inject(DestroyRef);
  private readonly promptEvent = signal<InstallPromptEvent | null>(null);
  readonly online = signal(typeof navigator === 'undefined' || navigator.onLine);
  readonly updateAvailable = signal(false);
  readonly installing = signal(false);
  readonly installError = signal<string | null>(null);
  readonly canInstall = computed(() => this.promptEvent() !== null && !this.installing());

  constructor() {
    if (typeof window !== 'undefined') {
      const online = () => this.online.set(true);
      const offline = () => this.online.set(false);
      const beforeInstall = (event: Event) => {
        event.preventDefault();
        this.promptEvent.set(event as InstallPromptEvent);
        this.installError.set(null);
      };
      const installed = () => this.promptEvent.set(null);
      window.addEventListener('online', online);
      window.addEventListener('offline', offline);
      window.addEventListener('beforeinstallprompt', beforeInstall);
      window.addEventListener('appinstalled', installed);
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('online', online);
        window.removeEventListener('offline', offline);
        window.removeEventListener('beforeinstallprompt', beforeInstall);
        window.removeEventListener('appinstalled', installed);
      });
    }

    if (this.updates.isEnabled) {
      this.updates.versionUpdates.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(event => {
        if (event.type === 'VERSION_READY') this.updateAvailable.set(true);
      });
    }
  }

  async install(): Promise<void> {
    const event = this.promptEvent();
    if (!event || this.installing()) return;
    this.installing.set(true);
    this.installError.set(null);
    try {
      await event.prompt();
      await event.userChoice;
    } catch {
      this.installError.set('Use your browser menu to install or add this app to your home screen.');
    } finally {
      this.promptEvent.set(null);
      this.installing.set(false);
    }
  }

  reload(): void {
    window.location.reload();
  }
}
