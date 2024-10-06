import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark this as standalone
  imports: [RouterModule, FooterComponent], // Import RouterModule to use routing features
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
      <a routerLink="/testimonials" routerLinkActive="active">Testimonials</a>
    </nav>

    <hr />

    <!-- Routed views will be displayed here -->
    <router-outlet></router-outlet>

    <!-- Footer component -->
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
