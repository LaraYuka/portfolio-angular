import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadTheme();
  }

  toggleTheme() {
    if (!isPlatformBrowser(this.platformId)) return;

    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark');

    const theme = document.body.classList.contains('light-theme')
      ? 'light'
      : 'dark';

    localStorage.setItem('theme', theme);
  }

  loadTheme() {
    if (!isPlatformBrowser(this.platformId)) return;

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    }
  }

  isDarkMode(): boolean {
    if (!isPlatformBrowser(this.platformId)) return true;
    return !document.body.classList.contains('light-theme');
  }
}
