import { Injectable, signal, computed } from '@angular/core';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'cisystem-theme';
  
  private _isDark = signal<boolean>(this.loadThemeFromStorage());
  
  readonly isDark = this._isDark.asReadonly();
  readonly themeClass = computed(() => this._isDark() ? 'dark' : 'light');

  constructor() {
    this.applyTheme();
  }

  private loadThemeFromStorage(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored === 'dark';
    } catch {
      return false;
    }
  }

  private saveThemeToStorage(isDark: boolean): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(this.STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {
      // Storage might be disabled
    }
  }

  private applyTheme(): void {
    if (typeof document === 'undefined') return;
    const html = document.documentElement;
    
    if (this._isDark()) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  toggleTheme(): void {
    this._isDark.update(v => !v);
    this.saveThemeToStorage(this._isDark());
    this.applyTheme();
  }

  setTheme(isDark: boolean): void {
    this._isDark.set(isDark);
    this.saveThemeToStorage(isDark);
    this.applyTheme();
  }
}
