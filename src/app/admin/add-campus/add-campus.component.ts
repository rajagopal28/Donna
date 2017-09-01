import { Component, OnInit } from '@angular/core';

import { Campus } from '../../models/app.models';
import {LocationDataService} from '../../services/location-data.service';
@Component({
  selector: 'AddCampus',
  templateUrl: './add-campus.component.html',
  styleUrls: ['./add-campus.component.css'],
  providers: [LocationDataService]
})
export class AddCampusComponent implements OnInit {
  campus : Campus = new Campus();
  constructor(private locationService: LocationDataService) { }

  ngOnInit() {
  }

  addCampus() {
    console.log(this.campus);
    this.locationService.addCampus(this.campus).subscribe(
        response => console.log(response),
        error => console.log(error),
        () => console.log('C0mpleted!')
      );
  }
}
