import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./about-me.css']
})
export class AboutMeComponent {
  readonly skillGroups = [
    { name: 'Applications & APIs', skills: ['Java / Kotlin / Groovy', 'Spring Boot / MVC', 'REST APIs', 'Microservices', 'iOS development'] },
    { name: 'Cloud & delivery', skills: ['AWS', 'Cloud-native design', 'Kubernetes', 'CI/CD', 'Jenkins', 'DevOps & infrastructure'] },
    { name: 'How I work', skills: ['Agile delivery', 'Business collaboration', 'Mentorship'] }
  ];
}
