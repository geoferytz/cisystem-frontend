import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { GraphqlService } from '../../core/graphql/graphql.service';

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
  imports: [CommonModule, RouterLink],
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

  cards = computed<HomeCard[]>(() => [
    {
      title: 'Products',
      icon: 'products',
      description: 'Manage products, categories and batches.',
      route: '/products',
      hidden: !this.canView('PRODUCTS')
    },
    {
      title: 'Inventory',
      icon: 'inventory',
      description: 'View stock by product, batch and location.',
      route: '/inventory',
      hidden: !this.canView('INVENTORY')
    },
    {
      title: 'Stock Movements',
      icon: 'stockMovements',
      description: 'Track transfers and adjustments.',
      route: '/stock-movements',
      hidden: !this.canView('STOCK_MOVEMENTS')
    },
    {
      title: 'Purchasing',
      icon: 'purchasing',
      description: 'Record purchases and receive stock.',
      route: '/purchasing',
      hidden: !this.canView('PURCHASING')
    },
    {
      title: 'Sales',
      icon: 'sales',
      description: 'Create sales and auto-pick FEFO stock.',
      route: '/sales',
      hidden: !this.canView('SALES')
    },
    {
      title: 'My Sales',
      icon: 'mySales',
      description: 'Manual sales entry and daily/monthly totals.',
      route: '/my-sales',
      hidden: !this.canView('MY_SALES')
    },
    {
      title: 'Expiry & Alerts',
      icon: 'expiryAlerts',
      description: 'Expiry and low-stock notifications.',
      route: '/expiry-alerts',
      hidden: !this.canView('INVENTORY')
    },
    {
      title: 'Expenses',
      icon: 'expenses',
      description: 'Record and track daily expenses.',
      route: '/expenses',
      hidden: !this.canView('EXPENSES')
    },
    {
      title: 'Reports',
      icon: 'reports',
      description: 'Sales, profit and movement reports.',
      route: '/reports',
      hidden: !this.canView('REPORTS')
    },
    {
      title: 'Profit Management',
      icon: 'profitManagement',
      description: 'Track profits, margins and analysis.',
      route: '/profit-management',
      hidden: !this.canView('PROFIT_MANAGEMENT')
    },
    {
      title: 'Users & Roles',
      icon: 'users',
      description: 'Manage users, roles and access.',
      route: '/users',
      hidden: !this.canView('USERS_ROLES')
    }
  ]);

  constructor(
    private readonly gql: GraphqlService,
    private readonly auth: AuthService,
    private readonly router: Router
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
