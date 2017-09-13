import { Component, OnInit } from '@angular/core';

import { Campus } from '../../models/app.models';
import {LocationDataService} from '../../services/location-data.service';

const ALERT_TYPE_ERROR = 'danger';
const ALERT_TYPE_SUCCESS = 'success';
const DEFAULT_SUCCESS_MESSAGE = 'Insertion Successful!';

@Component({
  selector: 'AddCampus',
  templateUrl: './add-campus.component.html',
  styleUrls: ['./add-campus.component.css'],
  providers: [LocationDataService]
})
export class AddCampusComponent implements OnInit {

    message : any = {
      content : '',
      isHidden: true,
      type: ALERT_TYPE_ERROR
    };

  campus : Campus = new Campus();
  constructor(private locationService: LocationDataService) { }

  ngOnInit() {
  }

  addCampus() {
    console.log(this.campus);
    this.locationService.addCampus(this.campus).subscribe(
        response => this.handleResponse(response),
        error =>  this.handleResponse(error),
        () => console.log('C0mpleted!')
      );
  }
  handleResponse(response){
     console.log(response);
     this.message.isHidden = false;
     if(response.success) {
       this.campus= new Campus();
       this.message.content = DEFAULT_SUCCESS_MESSAGE;
       this.message.type = ALERT_TYPE_SUCCESS;
     } else  {
       this.message.content = response.message? response.message : 'ERROR:' + JSON.stringify(response);
       this.message.type = ALERT_TYPE_ERROR;
     }
  }

}
