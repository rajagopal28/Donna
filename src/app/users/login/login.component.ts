import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { UserDataService } from '../../services/user-data.service';
import { SessionService } from '../../services/session-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserDataService]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private userService: UserDataService, protected sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    let _self = this;
    this.userService.authenticate(this.username, this.password).subscribe(
      response => {
        console.log(response);
        if(response.success) {
          _self.sessionService.setUser(response.item);
          this.router.navigate(['home']);
        }
      },
      error => console.log(error),
      () => console.log('Loggied in!!')
    );
  }
}
