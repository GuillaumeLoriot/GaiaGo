import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AttractionService } from '../../services/attraction.service';
import Attraction from '../../models/attraction.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


  private attractionService = inject(AttractionService);
  formBuilder: FormBuilder = inject(FormBuilder);
  searchForm: FormGroup;
  isSubmitted = false;
  isOpen = false;
  onlyMonuments = false;

  @Output() search = new EventEmitter<string>();
  @Output() filterMonuments = new EventEmitter<boolean>();
  @Output() randomPlace = new EventEmitter<Attraction>();

  constructor() {
    this.searchForm = this.formBuilder.group({
      city: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }


  switchOpen() {
    this.isOpen = !this.isOpen;
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.search.emit(this.searchForm.value.city as string);
      this.searchForm.reset();
    }

  }

  onToggleMonuments() {

    this.onlyMonuments = !this.onlyMonuments;
    console.log('test toggle')
    this.filterMonuments.emit(this.onlyMonuments);
  }

  selectRandom() {
    this.attractionService.getRandom().subscribe({
      next: (data) => {

        this.randomPlace.emit(data);

      },

      error: () => {

        console.log("Une erreur est survenue")

      },
    });

  }

 isFieldInvalid(fieldName: string): boolean {
    const field = this.searchForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || this.isSubmitted));
  }

  getFieldError(fieldName: string): string {
    const field = this.searchForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['required']) return `Ce champ ne peut être vide`;
      if (field.errors['maxlength']) { return `Minimum ${field.errors['maxlength'].requiredLength} caractères`; }
    }
    return '';
  }


}
