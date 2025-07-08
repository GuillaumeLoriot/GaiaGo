import { Component, EventEmitter, Input, input, Output, SimpleChanges } from '@angular/core';
import { ControlComponent, MapComponent, MarkerComponent } from '@maplibre/ngx-maplibre-gl';
import type { StyleSpecification, Map } from 'maplibre-gl';
import Attraction from '../../models/attraction.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-earth-globe',
  standalone: true,
  imports: [MapComponent, ControlComponent, MarkerComponent, CommonModule],
  templateUrl: './earth-globe.component.html',
  styleUrls: ['./earth-globe.component.scss']
})
export class EarthGlobeComponent {


 
  @Input() attractions: Attraction[] = [];
  @Output() selectedPlace = new EventEmitter<Attraction>();


  // Configuration du style pour le globe
  customStyle: StyleSpecification = {
    version: 8,
    projection: { type: 'globe' },
    sources: {
      satellite: {
        url: 'https://api.maptiler.com/tiles/satellite-v2/tiles.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
        type: 'raster'
      }
    },
    layers: [
      {
        id: 'Satellite',
        type: 'raster',
        source: 'satellite'
      }
    ],
    sky: {
      'atmosphere-blend': [
        'interpolate', ['linear'], ['zoom'],
        0, 1,
        5, 1,
        7, 0
      ]
    },
    light: {
      anchor: 'map',
      position: [1.5, 90, 80]
    }
  };

  // Variables pour gérer l'effet de parallaxe
  initialZoom = 2;
  bgScale = 1;
  zoomFactor = 0.05;


  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['attractions']) {
  //     console.log('attractions reçues dans l’enfant :', this.attractions);
  //   }
  // }



  onMapLoad(map: Map) {

    this.initialZoom = map.getZoom();

    // À chaque zoom, on ajuste la mise à l'échelle du fond
    map.on('zoom', () => {
      const currentZoom = map.getZoom();
      this.bgScale = 1 + (currentZoom - this.initialZoom) * this.zoomFactor;
    });
  }

selectAttraction(id: number): void{
  console.log('test')
    const selected = this.attractions.find(attraction => attraction.id === id);
  console.log('Attraction sélectionnée pour id', id, ':', selected);
  this.selectedPlace.emit(selected);

}

}