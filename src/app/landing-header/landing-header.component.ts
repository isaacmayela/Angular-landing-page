import { Component } from '@angular/core';


@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.css'
})
export class LandingHeaderComponent {
  imageUrl: string = "assets/images/im-logo2.png"
}
