import { Component, DestroyRef, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../core/auth/auth.service';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { ShellHeaderComponent } from './shell-header.component';

type MeQueryResult = {
  me: {
    id: string;
    name: string;
    email: string;
    roles: string[];
  } | null;
};

type ExpiryAlertsQueryResult = {
  expiryAlerts: Array<{ productId: string }>;
};

type LowStockAlertsQueryResult = {
  lowStockAlerts: Array<{ productId: string }>;
};

@Component({
  selector: 'cis-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ShellHeaderComponent],
  templateUrl: './shell.layout.html',
  styleUrl: './shell.layout.scss'
})
export class ShellLayout {
  isAuthed = computed(() => this.auth.isAuthenticated());

  currentUrl = signal<string>('/');
  isHome = computed(() => this.currentUrl() === '/home' || this.currentUrl().startsWith('/home?'));

  sidebarOpen = signal(true);

  user = signal<MeQueryResult['me']>(null);
  userMenuOpen = signal(false);
  notificationsOpen = signal(false);
  notificationsCount = signal(0);

  currentYear = new Date().getFullYear();

  constructor(
    private readonly auth: AuthService,
    private readonly gql: GraphqlService,
    private readonly router: Router,
    private readonly destroyRef: DestroyRef
  ) {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      this.sidebarOpen.set(false);
    }

    this.currentUrl.set(this.router.url);
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentUrl.set(e.urlAfterRedirects);
      }
    });

    if (this.isAuthed()) {
      this.loadMe();
      this.refreshNotifications();
    }
  }

  loadMe(): void {
    const query = `query Me { me { id name email roles } }`;
    this.gql.request<MeQueryResult>(query).subscribe({
      next: (res) => {
        this.user.set(res.me);
      },
      error: () => {
        this.user.set(null);
      }
    });
  }

  toggleUserMenu(): void {
    this.userMenuOpen.set(!this.userMenuOpen());
    if (this.userMenuOpen()) {
      this.notificationsOpen.set(false);
    }
  }

  toggleNotifications(): void {
    this.notificationsOpen.set(!this.notificationsOpen());
    if (this.notificationsOpen()) {
      this.userMenuOpen.set(false);
      this.refreshNotifications();
    }
  }

  closeMenus(): void {
    this.userMenuOpen.set(false);
    this.notificationsOpen.set(false);
  }

  toggleSidebar(): void {
    this.sidebarOpen.set(!this.sidebarOpen());
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  refreshNotifications(): void {
    const expiryQuery = `query Expiry($days: Int!) { expiryAlerts(days: $days) { productId } }`;
    const lowStockQuery = `query LowStock($threshold: Int!) { lowStockAlerts(threshold: $threshold) { productId } }`;

    this.gql.request<ExpiryAlertsQueryResult>(expiryQuery, { days: 30 }).subscribe({
      next: (res) => {
        const expiryCount = res.expiryAlerts.length;
        this.gql.request<LowStockAlertsQueryResult>(lowStockQuery, { threshold: 10 }).subscribe({
          next: (ls) => {
            this.notificationsCount.set(expiryCount + ls.lowStockAlerts.length);
          },
          error: () => {
            this.notificationsCount.set(expiryCount);
          }
        });
      },
      error: () => {
        this.notificationsCount.set(0);
      }
    });
  }

  logout(): void {
    this.auth.clear();
    location.href = '/login';
  }
}
