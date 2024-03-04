import { Component, ViewEncapsulation } from '@angular/core';
import { MainDescriptionComponent } from '../main-description/main-description.component';
import { ItemsDescriptionComponent } from '../items-description/items-description.component';

@Component({
  selector: 'app-landing-container',
  standalone: true,
  imports: [MainDescriptionComponent, ItemsDescriptionComponent],
  templateUrl: './landing-container.component.html',
  styleUrl: './landing-container.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LandingContainerComponent {

}
