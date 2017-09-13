import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


import { Announcement } from '../../models/app.models';
import { ChoresDataService } from '../../services/chores-data.service';

const ALERT_TYPE_ERROR = 'danger';
const ALERT_TYPE_SUCCESS = 'success';
const DEFAULT_SUCCESS_MESSAGE = 'Insertion Successful!';

@Component({
  selector: 'AddAnnouncement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css'],
  providers : [ChoresDataService]
})
export class AddAnnouncementComponent implements OnInit {

  message : any = {
    content : '',
    isHidden: true,
    type: ALERT_TYPE_ERROR
  };

  model: NgbDateStruct;

  startDate: NgbDateStruct;
  sDate: {year: number, month: number, day:number};

  endDate: NgbDateStruct;
  eDate: {year: number, month: number, day: number};

  startTime : {hour: 08, minute: 10};
  endTime : {hour: 08, minute: 10};

  announcement : Announcement = new Announcement();

  constructor(private choresService: ChoresDataService) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
      this.announcement= new Announcement();
      let now = new Date();
      this.sDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
      this.eDate= {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};;
  }
  addAnnouncement() {
    var teDate = new Date(this.startDate.year,this.startDate.month,this.startDate.day,this.startTime.hour,this.startTime.minute,0);
    this.announcement.validFrom = teDate.getTime();

    teDate = new Date(this.endDate.year,this.endDate.month,this.endDate.day,this.endTime.hour,this.endTime.minute,0);
    this.announcement.validTill = teDate.getTime();

    this.choresService.addAnnouncement(this.announcement).subscribe(
      response => this.handleResponse(response),
      error =>   this.handleResponse(error),
      () => console.log("C0pLeted!")
    );
  }
  handleResponse(response){
     console.log(response);
     this.message.isHidden = false;
     if(response.success) {
       this.initData();
       this.message.content = DEFAULT_SUCCESS_MESSAGE;
       this.message.type = ALERT_TYPE_SUCCESS;
     } else  {
       this.message.content = response.message? response.message : 'ERROR:' + JSON.stringify(response);
       this.message.type = ALERT_TYPE_ERROR;
     }
  }

}
