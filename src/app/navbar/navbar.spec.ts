import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    page = fixture.nativeElement;
  });

  it('exposes menu state and closes after choosing a section', () => {
    const toggle = page.querySelector<HTMLButtonElement>('button')!;
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(page.querySelector('.nav-list')?.classList.contains('open')).toBeTrue();

    const link = page.querySelector<HTMLAnchorElement>('a[href="#experience"]')!;
    link.addEventListener('click', event => event.preventDefault());
    link.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(link.getAttribute('aria-current')).toBe('location');
    expect(page.querySelectorAll('[aria-current]').length).toBe(1);
  });

  it('closes the menu on Escape and restores focus to the toggle', () => {
    const toggle = page.querySelector<HTMLButtonElement>('button')!;
    toggle.click();
    const focus = spyOn(toggle, 'focus');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(focus).toHaveBeenCalled();
  });

  it('closes the menu when clicking outside the navigation', () => {
    page.querySelector<HTMLButtonElement>('button')!.click();
    document.body.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.menuOpen()).toBeFalse();
  });
});
