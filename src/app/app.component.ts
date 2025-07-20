import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutMeComponent, ExperienceComponent, ContactComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}