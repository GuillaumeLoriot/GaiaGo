import { Component } from '@angular/core';
import {MapComponent,GlobeControlDirective,ControlComponent} from '@maplibre/ngx-maplibre-gl';
import { StyleSpecification } from 'maplibre-gl';

@Component({
  selector: 'app-earth-globe',
  standalone: true,
  imports: [MapComponent, ControlComponent, GlobeControlDirective],
  templateUrl: './earth-globe.component.html',
  styleUrl: './earth-globe.component.scss'
})
export class EarthGlobeComponent {

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
    // top-level sky et light sont autorisés par la spec
    sky: {
      'atmosphere-blend': [
        'interpolate',
        ['linear'],
        ['zoom'],
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
}
