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

type UserPermission = {
  module: string;
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
};

type MyPermissionsQueryResult = {
  myPermissions: UserPermission[];
};

type ExpiryAlertsQueryResult = {
  expiryAlerts: Array<{ productId: string }>;
};

type LowStockAlertsQueryResult = {
  lowStockAlerts: Array<{ productId: string }>;
};

type AdminUser = {
  id: string;
  name: string;
  email: string;
};

type UsersQueryResult = {
  users: AdminUser[];
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

  myPermissions = signal<UserPermission[]>([]);

  changePasswordOpen = signal(false);
  changePasswordCurrent = signal('');
  changePasswordNew = signal('');
  changePasswordLoading = signal(false);
  changePasswordError = signal<string | null>(null);
  changePasswordSuccess = signal<string | null>(null);

  resetUserPasswordOpen = signal(false);
  resetUserPasswordLoading = signal(false);
  resetUserPasswordError = signal<string | null>(null);
  resetUserPasswordSuccess = signal<string | null>(null);
  resetUserId = signal('');
  resetNewPassword = signal('');
  adminUsers = signal<AdminUser[]>([]);

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
      this.loadMyPermissions();
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

  loadMyPermissions(): void {
    const query = `query MyPermissions { myPermissions { module canView canCreate canEdit canDelete } }`;
    this.gql.request<MyPermissionsQueryResult>(query).subscribe({
      next: (res) => this.myPermissions.set(res.myPermissions ?? []),
      error: () => this.myPermissions.set([])
    });
  }

  canView(module: string): boolean {
    const u = this.user();
    if (u?.roles?.includes('ADMIN')) return true;
    const m = String(module).toUpperCase();
    const p = this.myPermissions().find((x) => String(x.module).toUpperCase() === m);
    return Boolean(p?.canView);
  }

  openChangePassword(): void {
    this.changePasswordError.set(null);
    this.changePasswordSuccess.set(null);
    this.changePasswordCurrent.set('');
    this.changePasswordNew.set('');
    this.changePasswordOpen.set(true);
  }

  closeChangePassword(): void {
    this.changePasswordOpen.set(false);
  }

  submitChangePassword(): void {
    if (!this.changePasswordCurrent().trim() || !this.changePasswordNew().trim()) return;
    this.changePasswordLoading.set(true);
    this.changePasswordError.set(null);
    this.changePasswordSuccess.set(null);

    const mutation = `mutation ChangeMyPassword($input: ChangeMyPasswordInput!) { changeMyPassword(input: $input) }`;
    this.gql
      .request<{ changeMyPassword: boolean }>(mutation, {
        input: {
          currentPassword: this.changePasswordCurrent(),
          newPassword: this.changePasswordNew()
        }
      })
      .subscribe({
        next: () => {
          this.changePasswordSuccess.set('Password updated');
          this.changePasswordLoading.set(false);
          this.changePasswordCurrent.set('');
          this.changePasswordNew.set('');
          this.changePasswordOpen.set(false);
        },
        error: (e: unknown) => {
          this.changePasswordError.set(e instanceof Error ? e.message : 'Failed to update password');
          this.changePasswordLoading.set(false);
        }
      });
  }

  openResetUserPassword(): void {
    const u = this.user();
    if (!u?.roles?.includes('ADMIN')) return;

    this.resetUserPasswordError.set(null);
    this.resetUserPasswordSuccess.set(null);
    this.resetUserId.set('');
    this.resetNewPassword.set('');
    this.resetUserPasswordOpen.set(true);

    const qUsers = `query { users { id name email } }`;
    this.gql.request<UsersQueryResult>(qUsers).subscribe({
      next: (res) => this.adminUsers.set(res.users ?? []),
      error: () => this.adminUsers.set([])
    });
  }

  closeResetUserPassword(): void {
    this.resetUserPasswordOpen.set(false);
  }

  submitResetUserPassword(): void {
    if (!this.resetUserId().trim() || !this.resetNewPassword().trim()) return;
    this.resetUserPasswordLoading.set(true);
    this.resetUserPasswordError.set(null);
    this.resetUserPasswordSuccess.set(null);

    const mutation = `mutation ResetUserPassword($input: ResetUserPasswordInput!) {
      resetUserPassword(input: $input) { id }
    }`;

    this.gql
      .request<{ resetUserPassword: { id: string } }>(mutation, {
        input: {
          userId: this.resetUserId(),
          newPassword: this.resetNewPassword()
        }
      })
      .subscribe({
        next: () => {
          this.resetUserPasswordSuccess.set('Password reset');
          this.resetUserPasswordLoading.set(false);
          this.resetUserPasswordOpen.set(false);
        },
        error: (e: unknown) => {
          this.resetUserPasswordError.set(e instanceof Error ? e.message : 'Failed to reset password');
          this.resetUserPasswordLoading.set(false);
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
