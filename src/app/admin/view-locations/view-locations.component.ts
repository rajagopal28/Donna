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
        this.campusId = params['campusId'] ? params['campusId'] :  'All Campus';
      });
  }
  loadLocations(params) {
    this.locationService.getAllLocations(params).subscribe(
      response => this.locations = response.items,
      error => console.log(error),
      () => console.log('COmpleted! Locations')
    );
  }
  delete(location:Location) {
    console.log('deleting', location);
    if (confirm('Are you sure you want to remove this location?')) {
        console.log('Deleting confirmation');
        this.locationService.deleteLocation(location).subscribe(
          response => {
            console.log(response);
            let index = this.locations.indexOf(location);
            if(index !== -1){
              this.locations.splice(index, 1);
            }
          },
          error => console.log(error),
          () => console.log('Completed samo')
        );
    }
  }
  download() {
    this.locationService.downloadAllLocations();
  }

}
