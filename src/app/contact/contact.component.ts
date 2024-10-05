import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true, // Standalone component
  imports: [CommonModule],
  template: `
    <h2>Contact Page</h2>
    <p>This is the Contact page!</p>
  `,
})
export class ContactComponent {}
