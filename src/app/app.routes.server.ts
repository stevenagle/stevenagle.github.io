import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

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
