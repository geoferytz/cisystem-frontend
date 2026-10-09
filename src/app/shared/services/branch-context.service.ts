import { Injectable, computed, inject, signal } from '@angular/core';
import { GraphqlService } from '../../core/graphql/graphql.service';
import { AuthService } from '../../core/auth/auth.service';

export type BranchOption = {
  id: string;
  code: string;
  name: string;
  active: boolean;
  main: boolean;
};

type MeBranch = {
  roles?: string[] | null;
  branchId?: string | null;
  branchCode?: string | null;
  branchName?: string | null;
} | null;

const STORAGE_KEY = 'cisystem.branch';

@Injectable({ providedIn: 'root' })
export class BranchContext {
  private readonly gql = inject(GraphqlService);
  private readonly auth = inject(AuthService);

  readonly options = signal<BranchOption[]>([]);
  readonly me = signal<MeBranch>(null);
  readonly loaded = signal(false);

  /** Admin/unrestricted selection. null = all branches. */
  readonly selected = signal<string | null>(this.restore());

  /** Branch code this user is locked to (non-admin with assigned branch). */
  readonly lockedCode = computed(() => {
    const m = this.me();
    if (!m) return null;
    if (m.roles?.includes('ADMIN')) return null;
    return m.branchCode ?? null;
  });

  readonly locked = computed(() => this.lockedCode() != null);

  /** Effective branch for views: locked branch, selected branch, or null (all). */
  readonly effective = computed(() => this.lockedCode() ?? this.selected());

  /** Branch to tag new writes with: effective branch or MAIN for unrestricted "all". */
  readonly writeBranch = computed(() => this.effective() ?? 'MAIN');

  load(): void {
    if (!this.auth.isAuthenticated()) return;
    const q = `query BranchCtx { me { roles branchId branchCode branchName } branchOptions { id code name active main } }`;
    this.gql.request<{ me: MeBranch; branchOptions: BranchOption[] }>(q).subscribe({
      next: (res) => {
        this.me.set(res.me ?? null);
        const opts = res.branchOptions ?? [];
        const sel = this.selected();
        this.options.set(opts.filter((b) => b.active || b.code === sel));
        if (sel != null && !opts.some((b) => b.code === sel)) {
          this.select(null);
        }
        this.loaded.set(true);
      },
      error: () => this.loaded.set(true)
    });
  }

  select(code: string | null): void {
    this.selected.set(code);
    try {
      if (code == null) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
  }

  /** Variables fragment for branch-filtered queries. */
  branchVar(): { branch: string | null } {
    return { branch: this.effective() };
  }

  private restore(): string | null {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v && v.trim() ? v.trim() : null;
    } catch {
      return null;
    }
  }
}
