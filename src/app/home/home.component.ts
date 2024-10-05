import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, // Standalone component
  imports: [CommonModule], // Import CommonModule for Angular directives like ngIf, ngFor, etc.
  template: `
    <h2>Home Page</h2>
    <p>Welcome to the Home page!</p>
  `,
})
export class HomeComponent {}
