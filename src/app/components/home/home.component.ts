import { Component } from '@angular/core';
import { EarthGlobeComponent } from "../earth-globe/earth-globe.component";
import { AttractionCardComponent } from "../attraction-card/attraction-card.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EarthGlobeComponent, AttractionCardComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
