import { Component, inject, signal } from '@angular/core';
import { PwaService } from './core/pwa.service';
import { SessionService } from './core/auth/session.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    @if (!pwa.online() || pwa.updateAvailable() || pwa.installError()) {
      <aside class="cis-pwa-status" aria-label="App status">
        @if (!pwa.online()) {
          <p role="status">You are offline. Live data and saving require a connection.</p>
        }
        @if (pwa.updateAvailable()) {
          <p role="status">An update is ready. Save your work before reloading.</p>
          <button type="button" (click)="pwa.reload()">Reload app</button>
        }
        @if (pwa.installError()) {
          <p role="status">{{ pwa.installError() }}</p>
        }
      </aside>
    }
    <router-outlet />
    @if (pwa.canInstall()) {
      <footer class="cis-install-footer" aria-label="App installation">
        <button type="button" (click)="pwa.install()">Install NABOO</button>
      </footer>
    }
  `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly pwa = inject(PwaService);
  protected readonly title = signal('frontend');

  constructor() {
    inject(SessionService).start();
  }
}
