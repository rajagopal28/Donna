import { Component, OnInit } from '@angular/core';

import { ChoresDataService } from '../services/chores-data.service';
import { SessionService } from '../services/session-service';

import { Event } from '../models/app.models';

@Component({
  selector: 'ViewEvents',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css'],
  providers: [ChoresDataService]
})
export class ViewEventsComponent implements OnInit {

  events: [Event];
  eventParam : any = {};
  userInfo: string;
  constructor(private choresService: ChoresDataService, protected sessionService: SessionService) {
    this.sessionService.authObervable.subscribe(authUser => {
      var userName = 'All Users';
      if (authUser && authUser.id) {
        // call with userId
        this.eventParam['userId'] = authUser.id;
        userName = authUser.firstName + ' ' + authUser.lastName;
      }
      this.userInfo = userName;
    });
  }

  ngOnInit() {
    console.log('is logged in..', this.sessionService.isLoggedIn());
    this.choresService.getEvents(this.eventParam).subscribe(
      response => this.events = response.items,
      error => console.log(error),
      () => console.log('C0mpleted!')
    );
  }
   delete(event: Event) {
    console.log('deleting', event);
    if (confirm('Are you sure you want to remove this event?')) {
        console.log('Deleting confirmation');
        this.choresService.deleteEvent(event).subscribe(
          response => {
            console.log(response);
            let index = this.events.indexOf(event);
            if(index !== -1){
              this.events.splice(index, 1);
            }
          },
          error => console.log(error),
          () => console.log('Completed yahah')
        );
    }
  }
}
