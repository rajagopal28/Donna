import { Component, OnInit } from '@angular/core';

import { Campus } from '../../models/app.models';
import {LocationDataService} from '../../services/location-data.service';
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

  delete(camp: Campus) {
    console.log('deleting', camp);
    if (confirm('Are you sure you want to remove this campus?')) {
        console.log('Deleting confirmation');
        this.locationService.deleteCampus(camp).subscribe(
          response => {
            console.log(response);
            let index = this.campus.indexOf(camp);
            if(index !== -1){
              this.campus.splice(index, 1);
            }
          },
          error => console.log(error),
          () => console.log('Completed yahah')
        );
    }
  }

  download() {
    this.locationService.downloadAllCampus();
  }

}
