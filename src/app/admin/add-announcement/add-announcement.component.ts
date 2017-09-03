import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


import { Announcement } from '../../models/app.models';
import { ChoresDataService } from '../../services/chores-data.service';
const now = new Date();
@Component({
  selector: 'AddAnnouncement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css'],
  providers : [ChoresDataService]
})
export class AddAnnouncementComponent implements OnInit {

  model: NgbDateStruct;

  startDate: NgbDateStruct;
  sDate: {year: number, month: number, day:number};

  endDate: NgbDateStruct;
  eDate: {year: number, month: number, day: number};

  startTime : {hour: 08, minute: 0};
  endTime : {hour: 08, minute: 0};

  announcement : Announcement = new Announcement();

  constructor(private choresService: ChoresDataService) { }

  ngOnInit() {
    this.sDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    this.eDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  addAnnouncement() {
    var teDate = new Date(this.startDate.year,this.startDate.month,this.startDate.day,this.startTime.hour,this.startTime.minute,0);
    this.announcement.validFrom = teDate.getTime();

    teDate = new Date(this.endDate.year,this.endDate.month,this.endDate.day,this.endTime.hour,this.endTime.minute,0);
    this.announcement.validTill = teDate.getTime();

    this.choresService.addAnnouncement(this.announcement).subscribe(
      response => console.log(response),
      error => console.log(error),
      () => console.log("C0pLeted!")
    );
  }

}
