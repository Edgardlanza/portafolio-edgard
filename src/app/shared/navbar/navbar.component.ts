import { Component } from '@angular/core';
import { AccentColor, ThemeService } from '../theme.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showPalette = false;

  constructor(public themeService: ThemeService) {}

  togglePalette(): void {
    this.showPalette = !this.showPalette;
  }

  setAccent(accent: AccentColor): void {
    this.themeService.setAccent(accent);
    this.showPalette = false;
  }
}