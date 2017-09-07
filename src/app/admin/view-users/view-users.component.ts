import { Component, OnInit } from '@angular/core';

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

  constructor(private userService: UserDataService) { }

  ngOnInit() {
    this.userService.getAllUsers()
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
