// app.routes.ts
import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent }
];
