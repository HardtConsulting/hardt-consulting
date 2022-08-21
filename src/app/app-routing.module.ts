import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    data: { breadcrumb: 'Hardt Consulting'},
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'about',
    data: { breadcrumb: 'About Hardt Consulting'},
    loadChildren: () =>
      import('./pages/about/about.module').then(
        (m) => m.AboutPageModule
      ),
  },
  {
    path: 'contact',
    data: { breadcrumb: 'Contact Us @ Hardt Consulting'},
    loadChildren: () =>
      import('./pages/contact/contact.module').then(
        (m) => m.ContactPageModule
      ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
