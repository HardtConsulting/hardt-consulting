import { Component, HostListener, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  darkMode: boolean = false;
  themeSubscription!: Subscription;

  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'About', url: '/about', icon: 'paper-plane' },
    { title: 'Contact Us', url: '/contact', icon: 'heart' },
  ];
  public labels = ['Information System Architecture & Design', 'Static Websites', 'Shell Scripts & Server Configuration', 'Task Driven Requirements'];

  languages = ['C#', 'Golang', 'Angular', 'PHP', 'NodeJS', 'Javascript'];
  
  constructor(
    public themeService: ThemeService,
    private renderer: Renderer2,
  ) {
    this.themeSubscription = this.themeService.darkMode.subscribe((darkModeEnabled: boolean) => {
      this.renderer.setAttribute(document.body, 'color-theme', darkModeEnabled ? 'dark' : 'light');
      this.darkMode = darkModeEnabled;
    });

    window.onbeforeunload = () => this.ngOnDestroy();
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

}
