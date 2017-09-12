import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { User, Location, Event } from '../../models/app.models';
import { UserDataService } from '../../services/user-data.service';
import { LocationDataService } from '../../services/location-data.service';
import { ChoresDataService } from '../../services/chores-data.service';
@Component({
  selector: 'AddEvent',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  providers: [UserDataService, LocationDataService, ChoresDataService]
})
export class AddEventComponent implements OnInit {
  event: Event;
  locations: Array<Location>;
  users: Array<User>;
  selectedUsers: Array<User>;
  model: NgbDateStruct;

  startDate: NgbDateStruct;
  sDate: { year: number, month: number, day: number };

  endDate: NgbDateStruct;
  eDate: { year: number, month: number, day: number};

  startTime : {hour: 08, minute: 10};
  endTime : {hour: 08, minute: 10};

  constructor(private userService: UserDataService,
    private locationService: LocationDataService,
    private choresService: ChoresDataService) { }

  ngOnInit() {
    this.initData();
    this.userService.getAllUsers({})
      .subscribe(response=> this.users = response.items,
       error => console.log(error),
       () => console.log('Completed!!')
      );
    this.locationService.getAllLocations({}).subscribe(
      response => this.locations = response.items,
      error => console.log('Error:', error),
      () => console.log('Completed..')
    );
  }
  initData() {
      this.event= new Event();
      let now = new Date();
      this.selectedUsers = [];
      this.sDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
      this.eDate= {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};;
  }
  addEvent() {
    console.log(this.selectedUsers);
    let participantIds = '';
    for(var i=0;i<this.selectedUsers.length; i++) {
      if (participantIds !== '') {
        participantIds += ',';
      }
      participantIds += this.selectedUsers[i].id;
    }
    console.log('csv', participantIds);
    this.event.participantIds = participantIds;
    var teDate = new Date(this.startDate.year,this.startDate.month,this.startDate.day,this.startTime.hour,this.startTime.minute,0);
    this.event.eventStart = teDate.getTime();

    teDate = new Date(this.endDate.year,this.endDate.month,this.endDate.day,this.endTime.hour,this.endTime.minute,0);
    this.event.eventEnd = teDate.getTime();
    console.log(this.event);
    this.choresService.addEvent(this.event).subscribe(
      response => console.log(response),
      error => console.log(error),
      () => console.log("C0pLeted!")
    );
  }

  public onRemove = ($event: User) : void => {
    console.log('Removing items...', $event);
    if (!this.selectedUsers) {
      return;
    }

    let index = this.selectedUsers.indexOf($event);
    if(index !== -1) {
      this.selectedUsers.splice(index, 1);
    }
    // console.log(index);
    // console.log(this.);
  };

  public onAdd = ($event: User) : void => {
    console.log('Adding items...', $event);
    if (this.selectedUsers) {
      this.selectedUsers.push($event);
    } else {
      this.selectedUsers =[$event];
    }
    // console.log(this.items);
  }
}
