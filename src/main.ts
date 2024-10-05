import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to Home on empty path
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }, // Wildcard route to handle invalid paths
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Provide routes here
}).catch((err) => console.error(err));
