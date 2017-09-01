import { Component, OnInit } from '@angular/core';

import { Campus } from '../../models/app.models';
import {LocationDataService} from '../../services/location-data.service'
@Component({
  selector: 'ViewCampus',
  templateUrl: './view-campus.component.html',
  styleUrls: ['./view-campus.component.css'],
  providers: [LocationDataService]
})
export class ViewCampusComponent implements OnInit {
  campus : [Campus];
  constructor(private locationService: LocationDataService) { }

  ngOnInit() {
    this.locationService.getAllCampus().subscribe(
        response => this.campus = response.items,
        error => console.log(error),
        () => console.log('C0mpleted!')
      );
  }

}
