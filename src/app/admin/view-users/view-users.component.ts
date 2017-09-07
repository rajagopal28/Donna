import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/app.models';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'ViewUsers',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
  providers: [UserDataService]
})
export class ViewUsersComponent implements OnInit {
  users: [User];
  campusId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserDataService) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided
        this.loadUsers(params);
        this.campusId = params['campusId'] ? params['campusId'] :  'All Campus';
      });
  }
  loadUsers(params) {
    this.userService.getAllUsers(params)
    .subscribe(response=> this.users = response.items,
     error => console.log(error),
     () => console.log('Completed!!')
    );
  }
  delete(user:User) {
    console.log('deleting', user);
    if (confirm('Are you sure you want to remove this user?')) {
        console.log('Deleting confirmation');
        this.userService.deleteUser(user).subscribe(
          response => {
            console.log(response);
            let index = this.users.indexOf(user);
            if(index !== -1){
              this.users.splice(index, 1);
            }
          },
          error => console.log(error),
          () => console.log('Completed samo')
        );
    }
  }

}
