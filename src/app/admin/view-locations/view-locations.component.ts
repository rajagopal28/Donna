import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  campusId : string = 'All Campus';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationDataService) {
   }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided
        this.loadLocations(params);
        this.campusId = params['campusId'];
      });
  }
  loadLocations(params) {
    this.locationService.getAllLocations(params).subscribe(
      response => this.locations = response.items,
      error => console.log(error),
      () => console.log('COmpleted!')
    );
  }
}
