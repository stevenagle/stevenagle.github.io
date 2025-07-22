import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RouteAnimations } from './animations/route-animations';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NavbarComponent,
        AboutMeComponent,
        ExperienceComponent,
        ContactComponent
    ],
    animations: [RouteAnimations],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
    currentSectionId: string = 'about-me';

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const sectionId = event.urlAfterRedirects === '/' ? 'about-me' : event.urlAfterRedirects.replace('/', '');
                const el = document.getElementById(sectionId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    }

    ngOnInit() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.replace('#', '');
                const targetEl = document.getElementById(targetId || '');
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    ngAfterViewInit() {
        const sections = ['about-me', 'experience', 'contact'];
        const navLinks = document.querySelectorAll('.nav-link');

        const setActive = (id: string) => {
            navLinks.forEach(link => {
                const href = link.getAttribute('href')?.replace('#', '');
                link.classList.toggle('active', href === id);
            });
        };

        // ScrollSpy Logic
        const observer = new IntersectionObserver(entries => {
            let bestMatch: string | null = null;
            let maxVisible = 0;

            entries.forEach(entry => {
                const ratio = entry.intersectionRatio;
                const id = entry.target.getAttribute('id');
                if (entry.isIntersecting && ratio > maxVisible) {
                    bestMatch = id;
                    maxVisible = ratio;
                }
            });

            if (bestMatch) {
                setActive(bestMatch);
            }
        }, {
            threshold: [0.25, 0.5, 0.75, 1]
        });

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Initial Activation
        const firstSection = document.getElementById('about-me');
        if (firstSection) {
            const bounding = firstSection.getBoundingClientRect();
            if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
                setActive('about-me');
            }
        }
    }

}
