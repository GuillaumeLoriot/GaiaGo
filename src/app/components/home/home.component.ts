import { Component, inject, Input, input, OnInit } from '@angular/core';
import { EarthGlobeComponent } from "../earth-globe/earth-globe.component";
import { AttractionCardComponent } from "../attraction-card/attraction-card.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import Attraction from '../../models/attraction.interface';
import { AttractionService } from '../../services/attraction.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EarthGlobeComponent, AttractionCardComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {



  private attractionService = inject(AttractionService);
  allAttractions: Attraction[] = [];
  attractions: Attraction[] = [];
  randomAttraction: Attraction | null = null;
  selectedAttraction: Attraction | null = null;
  monuments: Attraction[] = [];

  ngOnInit() {
    this.loadAttractions();
  }

  loadAttractions() {
    this.attractionService.getAll().subscribe({
      next: (data) => {

        this.attractions = data;
        this.allAttractions = data;

      },

      error: () => {

        console.log("Une erreur est survenue")

      },
    });
  }

  searchCity(city: string) {
    this.attractions = this.allAttractions.filter((attraction) => {
      return attraction.city
        .toLowerCase()
        .trim()
        .includes(city.toLowerCase()
          .trim());
    });
    console.log(this.attractions)
  }

  transmitRandomPlace(randomPlace: Attraction) {
    this.randomAttraction = randomPlace;
  }

  transmitSelectedPlace(selectedPlace: Attraction) {
    this.selectedAttraction = selectedPlace;
  }

  filterMonnuments(onlyMonuments: boolean) {
    if (onlyMonuments) {
      this.attractions = this.allAttractions.filter((attraction) => {
        return attraction.isMonument === true;
      });
    } else {
      this.attractions = this.allAttractions;
    }
  }

}






