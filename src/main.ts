import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { WelcomeComponent } from './app/components/welcome/welcome.component';
import { TestComponent } from './app/components/test/test.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule), provideRouter(routes)],
}).catch((err) => console.error(err));
