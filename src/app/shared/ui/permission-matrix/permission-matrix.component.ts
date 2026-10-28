import { CommonModule } from '@angular/common';
import { Component, computed, effect, input, output, signal } from '@angular/core';
import { GraphqlService } from '../../../core/graphql/graphql.service';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

type PermissionRow = {
  module: string;
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
  extras: string[];
};

type CatalogAction = { code: string; label: string; description?: string | null };
type CatalogModule = { module: string; actions: CatalogAction[] };

const MODULES: Array<{ key: string; label: string }> = [
  { key: 'COUNTER', label: 'Counter' },
  { key: 'PRODUCTS', label: 'Products' },
  { key: 'CATEGORIES', label: 'Categories' },
  { key: 'INVENTORY', label: 'Inventory' },
  { key: 'STOCK_MOVEMENTS', label: 'Stock Movements' },
  { key: 'EXPIRY_ALERTS', label: 'Expiry & Alerts' },
  { key: 'SALES', label: 'Sales' },
  { key: 'MY_SALES', label: 'My Sales' },
  { key: 'CUSTOMERS', label: 'Customers' },
  { key: 'RETURNS', label: 'Returns' },
  { key: 'PURCHASING', label: 'Purchasing' },
  { key: 'EXPENSES', label: 'Expenses' },
  { key: 'EXPENSE_CATEGORIES', label: 'Expense Categories' },
  { key: 'REPORTS', label: 'Reports' },
  { key: 'PROFIT_MANAGEMENT', label: 'Profit Management' },
  { key: 'USERS_ROLES', label: 'Users & Roles' },
  { key: 'BRANCHES', label: 'Branches' },
  { key: 'TRANSFERS', label: 'Transfers' }
];

/**
 * Module-tab permission editor shared by Users (user_permissions) and
 * Roles (role_permissions). Loads + saves itself given ownerKind/ownerId.
 */
@Component({
  selector: 'cis-permission-matrix',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="flex items-center gap-2">
      <div class="text-xs text-slate-500 dark:text-slate-400">
        {{ ownerKind() === 'role' ? ('users.perm.roleHint' | translate) : ('common.assignPermissions' | translate) }}
      </div>
      <div class="ml-auto flex items-center gap-2">
        <button
          type="button"
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="reload()"
          [disabled]="loading()"
        >
          {{ 'common.refresh' | translate }}
        </button>
        <button
          type="button"
          class="rounded-xl bg-pink-500 px-4 py-1.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          (click)="save()"
          [disabled]="loading()"
        >
          {{ 'common.save' | translate }}
        </button>
      </div>
    </div>

    <div class="mt-3 grid min-h-0 gap-4 md:grid-cols-[220px_1fr]">
      <nav class="flex gap-1.5 overflow-x-auto md:max-h-[52vh] md:flex-col md:overflow-y-auto md:overflow-x-visible md:pr-1">
        <button
          *ngFor="let m of modules"
          type="button"
          class="flex shrink-0 items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold transition"
          [ngClass]="activeModule() === m.key
            ? 'bg-pink-500 text-white shadow-sm'
            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-700/50 dark:text-slate-200 dark:hover:bg-slate-700'"
          (click)="activeModule.set(m.key)"
        >
          <span class="truncate">{{ m.label }}</span>
          <span
            class="rounded-full px-1.5 py-0.5 text-[10px] font-bold"
            [ngClass]="activeModule() === m.key
              ? 'bg-white/25 text-white'
              : grantedCount(m.key) ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-slate-200 text-slate-500 dark:bg-slate-600 dark:text-slate-300'"
          >{{ grantedCount(m.key) }}/{{ totalCount(m.key) }}</span>
        </button>
      </nav>

      <section *ngIf="activePerm() as p" class="min-h-0 overflow-y-auto rounded-2xl p-4 ring-1 ring-slate-100 dark:ring-slate-700 md:max-h-[52vh]">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="text-base font-bold text-slate-900 dark:text-slate-100">{{ activeModuleLabel() }}</div>
          <div class="flex gap-2">
            <button type="button" class="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300" (click)="setAllForModule(true)">{{ 'users.perm.grantAll' | translate }}</button>
            <button type="button" class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300" (click)="setAllForModule(false)">{{ 'users.perm.clearAll' | translate }}</button>
          </div>
        </div>

        <div class="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'users.perm.basic' | translate }}</div>
        <div class="mt-2 grid gap-2 sm:grid-cols-2">
          <label
            *ngFor="let a of basicActions"
            class="flex cursor-pointer items-start gap-3 rounded-xl p-3 ring-1 transition"
            [ngClass]="p[a.key] ? 'bg-pink-50 ring-pink-200 dark:bg-pink-900/20 dark:ring-pink-800' : 'ring-slate-200 hover:bg-slate-50 dark:ring-slate-700 dark:hover:bg-slate-700/40'"
          >
            <input type="checkbox" class="mt-0.5 h-4 w-4 accent-pink-500" [checked]="p[a.key]" (change)="togglePermission(p.module, a.key)" />
            <span>
              <span class="block text-sm font-semibold text-slate-900 dark:text-slate-100">{{ a.label | translate }}</span>
              <span class="block text-[11px] text-slate-500 dark:text-slate-400">{{ a.desc | translate }}</span>
            </span>
          </label>
        </div>

        <ng-container *ngIf="activeExtras().length">
          <div class="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ 'users.perm.extra' | translate }}</div>
          <div class="mt-2 grid gap-2 sm:grid-cols-2">
            <label
              *ngFor="let a of activeExtras()"
              class="flex cursor-pointer items-start gap-3 rounded-xl p-3 ring-1 transition"
              [ngClass]="p.extras.includes(a.code) ? 'bg-violet-50 ring-violet-200 dark:bg-violet-900/20 dark:ring-violet-800' : 'ring-slate-200 hover:bg-slate-50 dark:ring-slate-700 dark:hover:bg-slate-700/40'"
            >
              <input type="checkbox" class="mt-0.5 h-4 w-4 accent-violet-500" [checked]="p.extras.includes(a.code)" (change)="toggleExtra(a.code)" />
              <span>
                <span class="block text-sm font-semibold text-slate-900 dark:text-slate-100">{{ a.label }}</span>
                <span class="block text-[11px] text-slate-500 dark:text-slate-400">{{ a.description }}</span>
              </span>
            </label>
          </div>
          <p *ngIf="!p.canView" class="mt-2 text-[11px] text-amber-600 dark:text-amber-400">{{ 'users.perm.needsView' | translate }}</p>
        </ng-container>
      </section>
    </div>

    <div *ngIf="loading()" class="mt-3 text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.loadingPermissions' | translate }}</div>
    <div class="mt-2 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>
    <div class="mt-2 text-sm text-pink-500 dark:text-pink-400" *ngIf="success()">{{ success() }}</div>
  `
})
export class PermissionMatrixComponent {
  /** 'user' edits user_permissions; 'role' edits role_permissions. */
  ownerKind = input.required<'user' | 'role'>();
  ownerId = input.required<string | number>();
  saved = output<void>();

  readonly modules = MODULES;
  readonly basicActions: Array<{ key: 'canView' | 'canCreate' | 'canEdit' | 'canDelete'; label: string; desc: string }> = [
    { key: 'canView', label: 'common.view', desc: 'users.perm.viewDesc' },
    { key: 'canCreate', label: 'common.create', desc: 'users.perm.createDesc' },
    { key: 'canEdit', label: 'common.edit', desc: 'users.perm.editDesc' },
    { key: 'canDelete', label: 'common.delete', desc: 'users.perm.deleteDesc' }
  ];

  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);
  permissions = signal<PermissionRow[]>([]);
  catalog = signal<CatalogModule[]>([]);
  activeModule = signal<string>(MODULES[0].key);
  activePerm = computed(() => this.permissions().find(p => p.module === this.activeModule()) ?? null);
  activeExtras = computed(() => this.catalog().find(c => c.module === this.activeModule())?.actions ?? []);
  activeModuleLabel = computed(() => MODULES.find(m => m.key === this.activeModule())?.label ?? this.activeModule());

  private readonly loadTrigger = effect(() => {
    const id = this.ownerId();
    const kind = this.ownerKind();
    if (id !== null && id !== undefined && String(id) !== '') {
      this.loadCatalog();
      this.load(kind, String(id));
    }
  });

  constructor(private readonly gql: GraphqlService) {}

  grantedCount(module: string): number {
    const p = this.permissions().find(x => x.module === module);
    if (!p) return 0;
    return [p.canView, p.canCreate, p.canEdit, p.canDelete].filter(Boolean).length + (p.canView ? p.extras.length : 0);
  }

  totalCount(module: string): number {
    return 4 + (this.catalog().find(c => c.module === module)?.actions.length ?? 0);
  }

  toggleExtra(code: string): void {
    const mod = this.activeModule();
    this.permissions.set(this.permissions().map(p => {
      if (p.module !== mod) return p;
      const has = p.extras.includes(code);
      return { ...p, canView: has ? p.canView : true, extras: has ? p.extras.filter(c => c !== code) : [...p.extras, code] };
    }));
  }

  togglePermission(module: string, key: 'canView' | 'canCreate' | 'canEdit' | 'canDelete'): void {
    const mod = String(module).toUpperCase();
    this.permissions.set(this.permissions().map(p =>
      String(p.module).toUpperCase() === mod ? ({ ...p, [key]: !p[key] } as PermissionRow) : p));
  }

  setAllForModule(on: boolean): void {
    const mod = this.activeModule();
    const codes = this.activeExtras().map(a => a.code);
    this.permissions.set(this.permissions().map(p => p.module !== mod ? p
      : { ...p, canView: on, canCreate: on, canEdit: on, canDelete: on, extras: on ? codes : [] }));
  }

  reload(): void {
    this.load(this.ownerKind(), String(this.ownerId()));
  }

  private defaultPermissions(): PermissionRow[] {
    return MODULES.map(m => ({ module: m.key, canView: false, canCreate: false, canEdit: false, canDelete: false, extras: [] }));
  }

  private loadCatalog(): void {
    if (this.catalog().length) return;
    this.gql.request<{ permissionCatalog: CatalogModule[] }>(
      `query PermissionCatalog { permissionCatalog { module actions { code label description } } }`
    ).subscribe({ next: res => this.catalog.set(res.permissionCatalog ?? []), error: () => {} });
  }

  private load(kind: 'user' | 'role', id: string): void {
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    this.permissions.set(this.defaultPermissions());

    const field = kind === 'role' ? 'rolePermissions' : 'userPermissions';
    const arg = kind === 'role' ? 'roleId' : 'userId';
    const q = `query Perms($id: ID!) { ${field}(${arg}: $id) { module canView canCreate canEdit canDelete extras } }`;
    this.gql.request<Record<string, PermissionRow[]>>(q, { id }).subscribe({
      next: res => {
        const incoming = res[field] ?? [];
        const map = new Map(incoming.map(p => [String(p.module).toUpperCase(), p] as const));
        this.permissions.set(MODULES.map(m => {
          const p = map.get(m.key);
          return {
            module: m.key,
            canView: Boolean(p?.canView),
            canCreate: Boolean(p?.canCreate),
            canEdit: Boolean(p?.canEdit),
            canDelete: Boolean(p?.canDelete),
            extras: p?.extras ?? []
          };
        }));
        this.loading.set(false);
      },
      error: (e: unknown) => {
        this.permissions.set(this.defaultPermissions());
        this.error.set(e instanceof Error ? e.message : 'Failed to load permissions');
        this.loading.set(false);
      }
    });
  }

  save(): void {
    const id = String(this.ownerId());
    if (!id) return;
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    const kind = this.ownerKind();
    const field = kind === 'role' ? 'setRolePermissions' : 'setUserPermissions';
    const inputType = kind === 'role' ? 'SetRolePermissionsInput' : 'SetUserPermissionsInput';
    const idKey = kind === 'role' ? 'roleId' : 'userId';

    const mutation = `mutation Save($input: ${inputType}!) {
      ${field}(input: $input) { module canView canCreate canEdit canDelete extras }
    }`;

    this.gql.request(mutation, {
      input: {
        [idKey]: id,
        permissions: this.permissions().map(p => ({
          module: p.module,
          canView: p.canView,
          canCreate: p.canCreate,
          canEdit: p.canEdit,
          canDelete: p.canDelete,
          extras: p.canView ? p.extras : []
        }))
      }
    }).subscribe({
      next: () => {
        this.success.set('Permissions updated');
        this.loading.set(false);
        this.saved.emit();
      },
      error: (e: unknown) => {
        this.error.set(e instanceof Error ? e.message : 'Failed to update permissions');
        this.loading.set(false);
      }
    });
  }
}
