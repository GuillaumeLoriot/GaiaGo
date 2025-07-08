import { Component, Input, SimpleChanges } from '@angular/core';
import Attraction from '../../models/attraction.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attraction-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attraction-card.component.html',
  styleUrls: ['./attraction-card.component.scss']
})
export class AttractionCardComponent {
isOpen = false;
dontExist = true;
@Input() attraction: Attraction | null = null;

ngOnChanges(changes: SimpleChanges) {
    if (changes['attraction'] && this.attraction) {
      this.dontExist = false;
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
  
  this.isOpen = false;
  this.dontExist = true;
  setTimeout(() => { this.attraction = null;}, 500);
  }
}
