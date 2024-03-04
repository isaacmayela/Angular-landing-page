import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-items-description',
  standalone: true,
  imports: [],
  templateUrl: './items-description.component.html',
  styleUrl: './items-description.component.css',
})
export class ItemsDescriptionComponent {
  salyImgUrl: string = "assets/images/Saly-2.png"
}
