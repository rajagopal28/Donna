import { Component, OnInit } from '@angular/core';
import {LocationDataService} from '../../services/location-data.service'
import {Location} from '../../models/app.models'
@Component({
  selector: 'ViewLocations',
  templateUrl: './view-locations.component.html',
  styleUrls: ['./view-locations.component.css'],
  providers: [LocationDataService]
})
export class ViewLocationsComponent implements OnInit {

  locations: [Location];
  constructor(private locationService: LocationDataService) {
   }

  ngOnInit() {
    this.locationService.getAllLocations().subscribe(
      response => this.locations = response.items,
      error => console.log(error),
      () => console.log('COmpleted!')
    );
  }

}
