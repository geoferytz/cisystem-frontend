import { Routes } from '@angular/router';
import type { CounterPage } from './features/counter/counter.page';

import { authGuard } from './core/auth/auth.guard';
import { LoginPage } from './features/login/login.page';
import { ShellLayout } from './features/shell/shell.layout';
import { DashboardPage } from './features/dashboard/dashboard.page';
import { ProductsPage } from './features/products/products.page';
import { CategoriesPage } from './features/categories/categories.page';
import { StockMovementsPage } from './features/stock-movements/stock-movements.page';

import { SalesPage } from './features/sales/sales.page';
import { MySalesPage } from './features/my-sales/my-sales.page';
import { MySalesReportPage } from './features/my-sales-report/my-sales-report.page';
import { ExpiryAlertsPage } from './features/expiry-alerts/expiry-alerts.page';
import { ReportsPage } from './features/reports/reports.page';
import { ProfitManagementPage } from './features/profit-management/profit-management.page';
import { HomePage } from './features/home/home.page';
import { ExpensesPage } from './features/expenses/expenses.page';
import { ExpenseCategoriesPage } from './features/expense-categories/expense-categories.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginPage },
  {
    path: '',
    component: ShellLayout,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomePage },
      {
        path: 'counter',
        loadComponent: () => import('./features/counter/counter.page').then(m => m.CounterPage),
        canDeactivate: [(component: CounterPage) => component.canDeactivate()]
      },
      { path: 'dashboard', component: DashboardPage },
      {
        path: 'product-dashboard',
        loadComponent: () => import('./features/product-dashboard/product-dashboard.page').then(m => m.ProductDashboardPage)
      },
      { path: 'products', component: ProductsPage },
      { path: 'categories', component: CategoriesPage },
      {
        path: 'inventory',
        loadComponent: () => import('./features/inventory/inventory.page').then(m => m.InventoryPage)
      },
      {
        path: 'inventory/analytics',
        loadComponent: () => import('./features/inventory-analytics/inventory-analytics.page').then(m => m.InventoryAnalyticsPage)
      },
      { path: 'stock-movements', component: StockMovementsPage },
      {
        path: 'purchasing',
        loadComponent: () => import('./features/purchasing/purchasing.page').then(m => m.PurchasingPage)
      },
      { path: 'sales', component: SalesPage },
      { path: 'my-sales', component: MySalesPage },
      { path: 'my-sales-report', component: MySalesReportPage },
      { path: 'expiry-alerts', component: ExpiryAlertsPage },
      { path: 'expenses', component: ExpensesPage },
      { path: 'expense-categories', component: ExpenseCategoriesPage },
      { path: 'reports', component: ReportsPage },
      { path: 'profit-management', component: ProfitManagementPage },
      {
        path: 'users',
        loadComponent: () => import('./features/users/users.page').then(m => m.UsersPage)
      },
      {
        path: 'branches',
        loadComponent: () => import('./features/branches/branches.page').then(m => m.BranchesPage)
      },
      {
        path: 'transfers',
        loadComponent: () => import('./features/transfers/transfers.page').then(m => m.TransfersPage)
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];
