import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  storageKey: string = "darkModeEnabled";
  darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.FetchThemeMode();
  }

  FetchThemeMode() {
    let setting = localStorage.getItem(this.storageKey);
    try {
      this.darkMode.next(JSON.parse(setting) === true);
    } catch {
      this.darkMode.next(false);
    }
  }

  SaveThemeMode() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.darkMode.getValue()));
  }

}
