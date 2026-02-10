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
    | 'reports'
    | 'users';
  description: string;
  route?: string;
  onClick?: () => void;
  hidden?: boolean;
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

  isAdmin = computed(() => (this.me()?.roles ?? []).includes('ADMIN'));

  cards = computed<HomeCard[]>(() => [
    { title: 'Products', icon: 'products', description: 'Manage products, categories and batches.', route: '/products' },
    { title: 'Inventory', icon: 'inventory', description: 'View stock by product, batch and location.', route: '/inventory' },
    { title: 'Stock Movements', icon: 'stockMovements', description: 'Track transfers and adjustments.', route: '/stock-movements' },
    { title: 'Purchasing', icon: 'purchasing', description: 'Record purchases and receive stock.', route: '/purchasing' },
    { title: 'Sales', icon: 'sales', description: 'Create sales and auto-pick FEFO stock.', route: '/sales' },
    { title: 'My Sales', icon: 'mySales', description: 'Manual sales entry and daily/monthly totals.', route: '/my-sales' },
    { title: 'Expiry & Alerts', icon: 'expiryAlerts', description: 'Expiry and low-stock notifications.', route: '/expiry-alerts' },
    { title: 'Reports', icon: 'reports', description: 'Sales, profit and movement reports.', route: '/reports' },
    { title: 'Users & Roles', icon: 'users', description: 'Manage users, roles and access.', route: '/users', hidden: !this.isAdmin() }
  ]);

  constructor(
    private readonly gql: GraphqlService,
    private readonly auth: AuthService,
    private readonly router: Router
  ) {
    this.loadMe();
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

  logout(): void {
    this.auth.clear();
    this.router.navigateByUrl('/login');
  }
}
