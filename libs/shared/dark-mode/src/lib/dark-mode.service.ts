import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private darkModeClass = 'dark';

  enableDarkMode(): void {
    document.documentElement.classList.add(this.darkModeClass);
    localStorage.setItem('darkMode', 'enabled');
  }

  disableDarkMode(): void {
    document.documentElement.classList.remove(this.darkModeClass);
    localStorage.setItem('darkMode', 'disabled');
  }

  loadDarkModePreference(): void {
    const preference = localStorage.getItem('darkMode');
    if (preference === 'enabled') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  toggleDarkMode(): void {
    const isDarkModeEnabled = document.documentElement.classList.contains(this.darkModeClass);
    if (isDarkModeEnabled) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }
}
