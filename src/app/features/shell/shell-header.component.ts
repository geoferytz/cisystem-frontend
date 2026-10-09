import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/theme/theme.service';
import { BranchContext } from '../../shared/services/branch-context.service';
import { TranslationService } from '../../core/i18n/translation.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

type ShellHeaderUser = {
  id: string;
  name: string;
  email: string;
  roles: string[];
} | null;

@Component({
  selector: 'app-shell-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './shell-header.component.html'
})
export class ShellHeaderComponent {
  private themeService = inject(ThemeService);
  private translationService = inject(TranslationService);
  readonly branchCtx = inject(BranchContext);

  @Input({ required: true }) user: ShellHeaderUser = null;
  @Input({ required: true }) isAuthed = false;

  @Input({ required: true }) showSidebarToggle = false;
  @Input({ required: true }) sidebarOpen = true;

  @Input({ required: true }) notificationsCount = 0;
  @Input({ required: true }) notificationsOpen = false;
  @Input({ required: true }) userMenuOpen = false;
  @Input({ required: true }) langMenuOpen = false;
  @Input({ required: true }) branchMenuOpen = false;

  @Output() toggleNotifications = new EventEmitter<void>();
  @Output() toggleUserMenu = new EventEmitter<void>();
  @Output() closeMenus = new EventEmitter<void>();
  @Output() changePassword = new EventEmitter<void>();
  @Output() resetUserPassword = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleLangMenu = new EventEmitter<void>();
  @Output() toggleBranchMenu = new EventEmitter<void>();

  currentLang = this.translationService.currentLang;
  availableLangs = this.translationService.availableLangs;
  isDark = this.themeService.isDark;
  isFullscreen = signal(false);

  onToggleBranchMenu(): void {
    this.toggleBranchMenu.emit();
  }

  selectBranch(code: string | null): void {
    this.branchCtx.select(code);
    location.reload();
  }

  onToggleNotifications(): void {
    this.toggleNotifications.emit();
  }

  onToggleUserMenu(): void {
    this.toggleUserMenu.emit();
  }

  onCloseMenus(): void {
    this.closeMenus.emit();
  }

  onLogout(): void {
    this.logout.emit();
  }

  onChangePassword(): void {
    this.changePassword.emit();
  }

  onResetUserPassword(): void {
    this.resetUserPassword.emit();
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  onToggleLangMenu(): void {
    this.toggleLangMenu.emit();
  }

  setLang(lang: string): void {
    this.translationService.setLanguage(lang);
    this.closeMenus.emit();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.isFullscreen.set(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        this.isFullscreen.set(false);
      }).catch(() => {});
    }
  }
}
