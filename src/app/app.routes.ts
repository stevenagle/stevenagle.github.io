import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./about-me/about-me.component').then(m => m.AboutMeComponent)
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./experience/experience.component').then(m => m.ExperienceComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then(m => m.ContactComponent)
  }
];
