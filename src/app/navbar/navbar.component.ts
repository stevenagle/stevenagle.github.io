import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { After } from 'v8';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [RouterModule],
  standalone: true,
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.classList.toggle('active', this.menuOpen);
    }
  }

  ngOnInit() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && this.menuOpen) {
          this.menuOpen = false;

          const hamburger = document.querySelector('.hamburger');
          if (hamburger) {
            hamburger.classList.remove('active');
          }
        }
      });
    });
  }

  ngAfterViewInit() {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const nav = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');

    if (
      this.menuOpen &&
      !nav?.contains(target) &&
      !hamburger?.contains(target)
    ) {
      this.menuOpen = false;
      hamburger?.classList.remove('active');
    }
  });
}
}