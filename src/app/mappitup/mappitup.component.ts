import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './shared/geolocation.service';
import { Coords } from './shared/coords';

@Component({
  moduleId: module.id,
  selector: 'app-mappitup',
  templateUrl: 'mappitup.component.html',
  styleUrls: ['mappitup.component.css'],
  providers: [GeolocationService]
})
export class MappitupComponent implements OnInit {

  title : string;
  myLocation : Coords;
  aValue = '';
  values = '';

  constructor(private geolocationService: GeolocationService) {}

  updateLocation() {
    this.geolocationService
      .getLocation()
      .subscribe(
        geoDataResponse => this.myLocation = geoDataResponse,
        error => console.error(error)
      );
  }

  ngOnInit() {
    this.updateLocation();
    this.title = 'Le map';
  }

  onKey(value: string) {
    this.aValue = value;
  }

}
