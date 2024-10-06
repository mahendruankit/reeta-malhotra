import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, // Standalone component
  imports: [CommonModule], // Import CommonModule for Angular directives like ngIf, ngFor, etc.
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {}
