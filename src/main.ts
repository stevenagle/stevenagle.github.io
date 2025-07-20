import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // or wherever your routes are defined

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
