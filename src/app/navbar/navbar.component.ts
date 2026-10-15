import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';

const SECTION_IDS = ['about-me', 'experience', 'contact'] as const;
type SectionId = typeof SECTION_IDS[number];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navbar.css'],
  host: {
    '(document:click)': 'closeOutside($event)',
    '(document:keydown.escape)': 'closeOnEscape()',
    '(document:scroll)': 'updateActiveSection()',
    '(window:resize)': 'updateActiveSection()'
  }
})
export class NavbarComponent {
  readonly menuOpen = signal(false);
  readonly activeSection = signal<SectionId>('about-me');
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private readonly menuToggle = viewChild.required<ElementRef<HTMLButtonElement>>('menuToggle');

  constructor() {
    afterNextRender(() => this.updateActiveSection());
  }

  protected updateActiveSection() {
    const scrollRoot = this.document.scrollingElement;
    if (!scrollRoot) return;

    // A short final section may never reach the reading line before scrolling ends.
    if (scrollRoot.scrollHeight > scrollRoot.clientHeight &&
        scrollRoot.scrollTop + scrollRoot.clientHeight >= scrollRoot.scrollHeight - 2) {
      this.activeSection.set('contact');
      return;
    }

    const readingLine = scrollRoot.clientHeight * 0.2;
    let activeSection: SectionId = 'about-me';
    for (const id of SECTION_IDS) {
      const section = this.document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= readingLine) {
        activeSection = id;
      }
    }
    this.activeSection.set(activeSection);
  }

  protected toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  protected navigate(section: SectionId) {
    this.activeSection.set(section);
    this.menuOpen.set(false);
  }

  protected closeOutside(event: MouseEvent) {
    if (this.menuOpen() && !this.element.nativeElement.contains(event.target as Node)) {
      this.menuOpen.set(false);
    }
  }

  protected closeOnEscape() {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.menuToggle().nativeElement.focus();
    }
  }
}
