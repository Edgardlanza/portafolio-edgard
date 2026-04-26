import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

export type PortfolioTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly KEY = 'portfolio-theme';
  private readonly isBrowser: boolean;

  currentTheme: PortfolioTheme = 'light';

  constructor(
    @Inject(DOCUMENT) private documentRef: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.currentTheme = this.getInitialTheme();
      this.applyTheme(this.currentTheme);
    }
  }

  private getInitialTheme(): PortfolioTheme {
    const saved = localStorage.getItem(this.KEY);

    if (saved === 'dark' || saved === 'light') {
      return saved;
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  }

  toggle(): void {
    const nextTheme: PortfolioTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme: PortfolioTheme): void {
    this.currentTheme = theme;

    if (!this.isBrowser) {
      return;
    }

    localStorage.setItem(this.KEY, theme);
    this.applyTheme(theme);
  }

  isDark(): boolean {
    return this.currentTheme === 'dark';
  }

  private applyTheme(theme: PortfolioTheme): void {
    if (!this.isBrowser) {
      return;
    }

    this.documentRef.documentElement.setAttribute('data-theme', theme);
  }
}