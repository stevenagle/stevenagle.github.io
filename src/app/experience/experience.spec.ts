import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent; 
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders every role and its technologies without waiting for animation', () => {
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelectorAll('.experience-row').length).toBe(component.experiences.length);
    expect(page.querySelector('.experience-row')?.textContent).toContain('JPMorganChase & Co.');
    expect(page.querySelector('.tech-list')?.textContent).toContain('Spring Boot');
  });
});
