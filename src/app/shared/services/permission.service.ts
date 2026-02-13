import { computed, Injectable, signal } from '@angular/core';
import { GraphqlService } from '../../core/graphql/graphql.service';

type UserPermission = {
  module: string;
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
};

type MeResult = {
  me: { id: string; name: string; email: string; roles: string[] } | null;
};

type MyPermissionsResult = {
  myPermissions: UserPermission[];
};

@Injectable({ providedIn: 'root' })
export class PermissionService {
  private readonly me = signal<MeResult['me']>(null);
  private readonly myPermissions = signal<UserPermission[]>([]);
  private loaded = false;

  readonly isAdmin = computed(() => (this.me()?.roles ?? []).includes('ADMIN'));

  constructor(private readonly gql: GraphqlService) {}

  load(): void {
    if (this.loaded) return;
    this.loaded = true;

    const meQ = `query Me { me { id name email roles } }`;
    this.gql.request<MeResult>(meQ).subscribe({
      next: (res) => this.me.set(res.me),
      error: () => this.me.set(null)
    });

    const permQ = `query MyPermissions { myPermissions { module canView canCreate canEdit canDelete } }`;
    this.gql.request<MyPermissionsResult>(permQ).subscribe({
      next: (res) => this.myPermissions.set(res.myPermissions ?? []),
      error: () => this.myPermissions.set([])
    });
  }

  reload(): void {
    this.loaded = false;
    this.load();
  }

  private perm(module: string): UserPermission | undefined {
    return this.myPermissions().find((x) => x.module === module.toUpperCase());
  }

  canView(module: string): boolean {
    if (this.isAdmin()) return true;
    return Boolean(this.perm(module)?.canView);
  }

  canCreate(module: string): boolean {
    if (this.isAdmin()) return true;
    return Boolean(this.perm(module)?.canCreate);
  }

  canEdit(module: string): boolean {
    if (this.isAdmin()) return true;
    return Boolean(this.perm(module)?.canEdit);
  }

  canDelete(module: string): boolean {
    if (this.isAdmin()) return true;
    return Boolean(this.perm(module)?.canDelete);
  }
}
