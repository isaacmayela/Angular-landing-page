import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingHeaderComponent } from './landing-header/landing-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page';
}
