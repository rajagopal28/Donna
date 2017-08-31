import { Component, OnInit } from '@angular/core';

import { User } from '../../models/app.models';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
  providers: [UserDataService],
})
export class ViewUsersComponent implements OnInit {
  users: [User];

  constructor(private userService: UserDataService) { }

  ngOnInit() {
    this.userService.getAllUsers()
    .subscribe(response=> this.users = response.items,
     error => console.log(error),
     () => console.log('Completed!!')
    );
  }

}
