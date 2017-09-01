import { Component, OnInit } from '@angular/core';

import { Campus, Location } from '../../models/app.models';
import {LocationDataService} from '../../services/location-data.service';
@Component({
  selector: 'AddLocation',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
  providers: [LocationDataService]
})
export class AddLocationComponent implements OnInit {

  campus : [Campus];
  location: Location = new Location();
  constructor(private locationService: LocationDataService) { }

  ngOnInit() {
      this.locationService.getAllCampus().subscribe(
          response => this.campus = response.items,
          error => console.log(error),
          () => console.log('C0mpleted!')
        );
  }
  addLocation() {
    console.log(this.location);
    this.locationService.addLocation(this.location).subscribe(
        response => console.log(response),
        error => console.log(error),
        () => console.log('C0mpleted!')
      );
  }

}
