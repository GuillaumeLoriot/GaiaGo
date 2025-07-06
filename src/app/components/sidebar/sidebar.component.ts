import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isOpen = false;
  onlyMonuments = false;

  @Output() search = new EventEmitter<string>();
  @Output() filterMonuments = new EventEmitter<boolean>();
  @Output() randomPlaces = new EventEmitter<void>();

  switchOpen(){
    this.isOpen = !this.isOpen;
  }

  onSearch(query: string) {
    this.search.emit(query);
  }

  onToggleMonuments(checked: boolean) {
    this.onlyMonuments = checked;
    this.filterMonuments.emit(checked);
  }

  onRandom() {
    this.randomPlaces.emit();
  }
}
