import { Component, OnInit } from '@angular/core';

import { User, Location } from '../../models/app.models';
import { UserDataService } from '../../services/user-data.service';
import { LocationDataService } from '../../services/location-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserDataService, LocationDataService]
})
export class SignupComponent implements OnInit {

  user : User;
  confirmPassword: string;
  locations: [Location];

  constructor(private userService: UserDataService, private locationService: LocationDataService) { }

  ngOnInit() {
    this.user = new User();
    this.locationService.getAllLocations().subscribe(
      response => this.locations = response.items,
      error => console.log('Error:', error),
      () => console.log('Completed..')
    );
  }

  signUp(): void {
    console.log('user', this.user);
    this.userService.addUser(this.user).subscribe(
      response => console.log(response),
      error => console.log(error),
      () => console.log('COmpleted!')
    );
  }

}
