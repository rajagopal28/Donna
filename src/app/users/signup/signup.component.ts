import { Component, OnInit } from '@angular/core';

import { User, Location } from '../../models/app.models';
import { UserDataService } from '../../services/user-data.service';
import { LocationDataService } from '../../services/location-data.service';

const ALERT_TYPE_ERROR = 'danger';
const ALERT_TYPE_SUCCESS = 'success';
const DEFAULT_SUCCESS_MESSAGE = 'Insertion Successful!';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserDataService, LocationDataService]
})
export class SignupComponent implements OnInit {
  message : any = {
    content : '',
    isHidden: true,
    type: ALERT_TYPE_ERROR
  };
  user : User;
  confirmPassword: string;
  locations: [Location];

  constructor(private userService: UserDataService, private locationService: LocationDataService) { }
  ngOnInit() {
    this.user = new User();
    this.locationService.getAllLocations({}).subscribe(
      response => this.locations = response.items,
      error => console.log('Error:', error),
      () => console.log('Completed..')
    );
  }

  signUp(): void {
    console.log('user', this.user);
    this.userService.addUser(this.user).subscribe(
      response => this.handleResponse(response),
      error =>  this.handleResponse(error),
      () => console.log('COmpleted!')
    );
  }
  handleResponse(response){
     console.log(response);
     this.message.isHidden = false;
     if(response.success) {
       this.user= new User();
       this.message.content = DEFAULT_SUCCESS_MESSAGE;
       this.message.type = ALERT_TYPE_SUCCESS;
     } else  {
       this.message.content = response.message? response.message : 'ERROR:' + JSON.stringify(response);
       this.message.type = ALERT_TYPE_ERROR;
     }
  }

}
