import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

type ShellHeaderUser = {
  id: string;
  name: string;
  email: string;
  roles: string[];
} | null;

@Component({
  selector: 'app-shell-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shell-header.component.html'
})
export class ShellHeaderComponent {
  @Input({ required: true }) user: ShellHeaderUser = null;
  @Input({ required: true }) isAuthed = false;

  @Input({ required: true }) showSidebarToggle = false;
  @Input({ required: true }) sidebarOpen = true;

  @Input({ required: true }) notificationsCount = 0;
  @Input({ required: true }) notificationsOpen = false;
  @Input({ required: true }) userMenuOpen = false;

  @Output() toggleNotifications = new EventEmitter<void>();
  @Output() toggleUserMenu = new EventEmitter<void>();
  @Output() closeMenus = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  @Output() toggleSidebar = new EventEmitter<void>();

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

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
