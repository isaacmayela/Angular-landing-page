import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingContainerComponent } from './landing-container/landing-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingHeaderComponent, LandingContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page';
}
