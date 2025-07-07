import { Component, inject, OnInit } from '@angular/core';
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
  attractions: Attraction[] = [];

  ngOnInit() {
    this.loadAttractions();
  }

  loadAttractions() {
    this.attractionService.getAll().subscribe({
      next: (data) => {

        this.attractions = data;
        console.log(this.attractions);
      },

      error: () => {

        console.log("Une erreur est survenue")

      },
    });
  }

}
