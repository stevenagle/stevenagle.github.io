import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('renders one page title and unique section destinations', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelectorAll('h1').length).toBe(1);
    expect(page.querySelector('h1')?.textContent).toContain('Steven Nagle');
    for (const id of ['about-me', 'experience', 'contact']) {
      expect(page.querySelectorAll(`#${id}`).length).toBe(1);
    }
    expect(page.querySelector('main')?.id).toBe('main-content');
  });

  it('highlights Contact at the bottom even when it cannot reach the reading line', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const scrollRoot = document.scrollingElement!;
    const scrollTop = spyOnProperty(scrollRoot, 'scrollTop', 'get').and.returnValue(2000);
    spyOnProperty(scrollRoot, 'clientHeight', 'get').and.returnValue(1000);
    spyOnProperty(scrollRoot, 'scrollHeight', 'get').and.returnValue(3000);
    spyOn(page.querySelector('#about-me')!, 'getBoundingClientRect').and.returnValue(new DOMRect(0, -2000, 1000, 1500));
    spyOn(page.querySelector('#experience')!, 'getBoundingClientRect').and.returnValue(new DOMRect(0, -500, 1000, 1200));
    spyOn(page.querySelector('#contact')!, 'getBoundingClientRect').and.returnValue(new DOMRect(0, 700, 1000, 250));

    document.dispatchEvent(new Event('scroll'));
    await fixture.whenStable();
    expect(page.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#contact');
    expect(page.querySelectorAll('a[aria-current="location"]').length).toBe(1);

    scrollTop.and.returnValue(1800);
    document.dispatchEvent(new Event('scroll'));
    await fixture.whenStable();
    expect(page.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#experience');

    fixture.destroy();
  });

  it('updates the active section when resizing moves it past the reading line', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const scrollRoot = document.scrollingElement!;
    spyOnProperty(scrollRoot, 'scrollTop', 'get').and.returnValue(1000);
    const height = spyOnProperty(scrollRoot, 'clientHeight', 'get').and.returnValue(1000);
    spyOnProperty(scrollRoot, 'scrollHeight', 'get').and.returnValue(4000);
    spyOn(page.querySelector('#about-me')!, 'getBoundingClientRect').and.returnValue(new DOMRect(0, -1000, 1000, 1250));
    spyOn(page.querySelector('#experience')!, 'getBoundingClientRect').and.returnValue(new DOMRect(0, 250, 1000, 1500));
    spyOn(page.querySelector('#contact')!, 'getBoundingClientRect').and.returnValue(new DOMRect(0, 1750, 1000, 440));

    document.dispatchEvent(new Event('scroll'));
    await fixture.whenStable();
    expect(page.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#about-me');

    height.and.returnValue(1500);
    window.dispatchEvent(new Event('resize'));
    await fixture.whenStable();
    expect(page.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#experience');
  });
});
