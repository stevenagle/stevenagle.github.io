import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  standalone: true,
  styleUrls: ['./experience.css']
})
export class ExperienceComponent implements AfterViewInit {
  ngAfterViewInit() {
    const cards = document.querySelectorAll('.experience-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const card = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          card.style.transitionDelay = `${index * 150}ms`;
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
          card.style.transitionDelay = '0ms';
        }
      });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
}

}
