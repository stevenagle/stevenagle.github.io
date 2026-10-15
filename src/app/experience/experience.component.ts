import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  description: string;
  technologies: readonly string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  readonly experiences: readonly Experience[] = [
    {
      company: 'JPMorganChase & Co.',
      role: 'Software Engineer',
      description: 'Building out payment technology products',
      technologies: ['Spring Boot', '.NET', 'AWS']
    },
    {
      company: 'Valtech',
      role: 'Senior Cloud Engineer',
      description: 'Built APIs and CI/CD infrastructure for Discover Financial Services.',
      technologies: ['Spring Boot', 'AWS', 'Kubernetes / Helm']
    },
    {
      company: 'JPMorganChase & Co.',
      role: 'Java Developer',
      description: 'Built and maintained a microservice architecture for high-volume financial interactions.',
      technologies: ['Spring Boot / MVC / Batch', 'PCF / Tanzu', 'Kafka']
    },
    {
      company: 'Health Care Service Corporation',
      role: 'Full Stack Developer · Mobile',
      description: 'Improved the flagship mobile app serving over 15 million users, bringing engineering and UI/UX design together.',
      technologies: ['Swift', 'Spring Boot', 'Mobile testing & design']
    },
    {
      company: 'Health Care Service Corporation',
      role: 'Full Stack Developer · Back End',
      description: 'Modernized legacy services and built APIs to move data across enterprise systems.',
      technologies: ['Spring Boot / MVC', 'Kafka / RabbitMQ', 'Pivotal']
    },
    {
      company: 'Dunn Solutions Group',
      role: 'Application Development Consultant',
      description: 'Full stack software solutions for consumer goods companies and other clients.',
      technologies: ['JavaScript / .NET', 'Liferay', 'User portal design']
    }
  ];
}
