import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { TranslationService } from '../../core/i18n/translation.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

type MeQueryResult = {
  me: {
    id: string;
    name: string;
    email: string;
    roles: string[];
  } | null;
};

type HomeCard = {
  title: string;
  icon:
    | 'products'
    | 'inventory'
    | 'stockMovements'
    | 'purchasing'
    | 'sales'
    | 'mySales'
    | 'expiryAlerts'
    | 'expenses'
    | 'reports'
    | 'profitManagement'
    | 'users';
  description: string;
  route?: string;
  onClick?: () => void;
  hidden?: boolean;
};

type MyPermission = {
  module: string;
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
};

type MyPermissionsQueryResult = {
  myPermissions: MyPermission[];
};

@Component({
  selector: 'cis-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  loading = signal(false);
  error = signal<string | null>(null);
  me = signal<MeQueryResult['me']>(null);
  myPermissions = signal<MyPermission[]>([]);

  isAdmin = computed(() => (this.me()?.roles ?? []).includes('ADMIN'));

  canView = (module: string): boolean => {
    if (this.isAdmin()) return true;
    const mod = String(module).toUpperCase();
    const p = this.myPermissions().find((x) => String(x.module).toUpperCase() === mod);
    return Boolean(p?.canView);
  };

  cards = computed<HomeCard[]>(() => {
    this.translation.currentLang();
    return [
      {
        title: this.translation.translate('nav.counter'),
        icon: 'sales',
        description: this.translation.translate('home.counter.description'),
        route: '/counter',
        hidden: !this.canView('SALES') && !this.canView('EXPENSES')
      },
      {
        title: this.translation.translate('nav.products'),
        icon: 'products',
        description: this.translation.translate('home.products.description'),
        route: '/product-dashboard',
        hidden: !this.canView('PRODUCTS')
      },
      {
        title: this.translation.translate('nav.inventory'),
        icon: 'inventory',
        description: this.translation.translate('home.inventory.description'),
        route: '/inventory',
        hidden: !this.canView('INVENTORY')
      },
      {
        title: this.translation.translate('nav.stockMovements'),
        icon: 'stockMovements',
        description: this.translation.translate('home.stockMovements.description'),
        route: '/stock-movements',
        hidden: !this.canView('STOCK_MOVEMENTS')
      },
      {
        title: this.translation.translate('nav.purchasing'),
        icon: 'purchasing',
        description: this.translation.translate('home.purchasing.description'),
        route: '/purchasing',
        hidden: !this.canView('PURCHASING')
      },
      {
        title: this.translation.translate('nav.sales'),
        icon: 'sales',
        description: this.translation.translate('home.sales.description'),
        route: '/sales',
        hidden: !this.canView('SALES')
      },
      {
        title: this.translation.translate('nav.mySales'),
        icon: 'mySales',
        description: this.translation.translate('home.mySales.description'),
        route: '/my-sales',
        hidden: !this.canView('MY_SALES')
      },
      {
        title: this.translation.translate('nav.expiryAlerts'),
        icon: 'expiryAlerts',
        description: this.translation.translate('home.expiryAlerts.description'),
        route: '/expiry-alerts',
        hidden: !this.canView('INVENTORY')
      },
      {
        title: this.translation.translate('nav.expenses'),
        icon: 'expenses',
        description: this.translation.translate('home.expenses.description'),
        route: '/expenses',
        hidden: !this.canView('EXPENSES')
      },
      {
        title: this.translation.translate('nav.reports'),
        icon: 'reports',
        description: this.translation.translate('home.reports.description'),
        route: '/reports',
        hidden: !this.canView('REPORTS')
      },
      {
        title: this.translation.translate('nav.profitManagement'),
        icon: 'profitManagement',
        description: this.translation.translate('home.profitManagement.description'),
        route: '/profit-management',
        hidden: !this.canView('PROFIT_MANAGEMENT')
      },
      {
        title: this.translation.translate('nav.usersRoles'),
        icon: 'users',
        description: this.translation.translate('home.usersRoles.description'),
        route: '/users',
        hidden: !this.canView('USERS_ROLES')
      }
    ];
  });

  constructor(
    private readonly gql: GraphqlService,
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly translation: TranslationService
  ) {
    this.loadMe();
    this.loadMyPermissions();
  }

  loadMe(): void {
    this.loading.set(true);
    this.error.set(null);

    const query = `query Me { me { id name email roles } }`;
    this.gql.request<MeQueryResult>(query).subscribe({
      next: (res) => {
        this.me.set(res.me);
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to load user');
        this.loading.set(false);
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

  logout(): void {
    this.auth.clear();
    this.router.navigateByUrl('/login');
  }
}

