import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
      { path: '', component: AboutMeComponent }, // Default route
      { path: 'experience', component: ExperienceComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' } // Wildcard route for unmatched paths
];