import { Component } from '@angular/core';
import { NavigationsComponent } from '../navigations/navigations.component';


@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [NavigationsComponent],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.css'
})
export class LandingHeaderComponent {
  imageUrl: string = "assets/images/im-logo2.png"
}
