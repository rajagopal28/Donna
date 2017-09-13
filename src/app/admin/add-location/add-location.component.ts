import { Component, OnInit } from '@angular/core';

import { Campus, Location } from '../../models/app.models';
import {LocationDataService} from '../../services/location-data.service';

const ALERT_TYPE_ERROR = 'danger';
const ALERT_TYPE_SUCCESS = 'success';
const DEFAULT_SUCCESS_MESSAGE = 'Insertion Successful!';

@Component({
  selector: 'AddLocation',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
  providers: [LocationDataService]
})
export class AddLocationComponent implements OnInit {
  message : any = {
    content : '',
    isHidden: true,
    type: ALERT_TYPE_ERROR
  };
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
        response =>  this.handleResponse(response),
        error => this.handleResponse(error),
        () => console.log('C0mpleted!')
      );
  }

  handleResponse(response){
     console.log(response);
     this.message.isHidden = false;
     if(response.success) {
       this.location= new Location();
       this.message.content = DEFAULT_SUCCESS_MESSAGE;
       this.message.type = ALERT_TYPE_SUCCESS;
     } else  {
       this.message.content = response.message? response.message : 'ERROR:' + JSON.stringify(response);
       this.message.type = ALERT_TYPE_ERROR;
     }
  }

}
