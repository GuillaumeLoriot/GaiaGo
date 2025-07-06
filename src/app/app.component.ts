import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EarthGlobeComponent } from "./components/earth-globe/earth-globe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EarthGlobeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GaiaGo';
}
