import { Component } from '@angular/core';

@Component({
  selector: 'app-attraction-card',
  standalone: true,
  imports: [],
  templateUrl: './attraction-card.component.html',
  styleUrls: ['./attraction-card.component.scss']
})
export class AttractionCardComponent {
isOpen = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }
}
