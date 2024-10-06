import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true, // Standalone component
  imports: [CommonModule],
  templateUrl: 'about.component.html',
})
export class AboutComponent {}
