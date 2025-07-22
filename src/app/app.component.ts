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
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        // Trigger initial highlight
        const initialSection = document.querySelector('section[id]');
        if (initialSection) {
            const activeId = initialSection.getAttribute('id');
            navLinks.forEach(link => {
                const href = link.getAttribute('href')?.replace('#', '');
                link.classList.toggle('active', href === activeId);
            });
        }

        const observer = new IntersectionObserver(entries => {
            const visibleEntries = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            if (visibleEntries.length > 0) {
                const activeId = visibleEntries[0].target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href')?.replace('#', '');
                    link.classList.toggle('active', href === activeId);
                });
            }
        }, {
            threshold: 0.3
        });

        sections.forEach(section => observer.observe(section));
    }
}
