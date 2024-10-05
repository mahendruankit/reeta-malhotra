import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true, // Standalone component
  imports: [CommonModule],
  template: `
    <h2>About Page</h2>
    <p>This is the About page!</p>
  `,
})
export class AboutComponent {}
