import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

export type PortfolioTheme = 'light' | 'dark';
export type AccentColor = 'blue' | 'purple' | 'green' | 'orange';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private readonly ACCENT_KEY = 'portfolio-accent';
  private readonly isBrowser: boolean;

  currentTheme: PortfolioTheme = 'light';
  currentAccent: AccentColor = 'blue';

  accentOptions: { value: AccentColor; label: string }[] = [
    { value: 'blue', label: 'Azul institucional' },
    { value: 'purple', label: 'Morado IA' },
    { value: 'green', label: 'Verde tecnológico' },
    { value: 'orange', label: 'Naranja creativo' }
  ];

  constructor(
    @Inject(DOCUMENT) private documentRef: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.currentTheme = this.getInitialTheme();
      this.currentAccent = this.getInitialAccent();

      this.applyTheme(this.currentTheme);
      this.applyAccent(this.currentAccent);
    }
  }

  toggle(): void {
    const nextTheme: PortfolioTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme: PortfolioTheme): void {
    this.currentTheme = theme;

    if (!this.isBrowser) return;

    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme(theme);
  }

  setAccent(accent: AccentColor): void {
    this.currentAccent = accent;

    if (!this.isBrowser) return;

    localStorage.setItem(this.ACCENT_KEY, accent);
    this.applyAccent(accent);
  }

  isDark(): boolean {
    return this.currentTheme === 'dark';
  }

  private getInitialTheme(): PortfolioTheme {
    const saved = localStorage.getItem(this.THEME_KEY);

    if (saved === 'dark' || saved === 'light') {
      return saved;
    }

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private getInitialAccent(): AccentColor {
    const saved = localStorage.getItem(this.ACCENT_KEY);

    if (
      saved === 'blue' ||
      saved === 'purple' ||
      saved === 'green' ||
      saved === 'orange'
    ) {
      return saved;
    }

    return 'blue';
  }

  private applyTheme(theme: PortfolioTheme): void {
    this.documentRef.documentElement.setAttribute('data-theme', theme);
  }

  private applyAccent(accent: AccentColor): void {
    this.documentRef.documentElement.setAttribute('data-accent', accent);
  }
}