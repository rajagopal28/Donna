import { Component, OnInit } from '@angular/core';
import {ChoresDataService} from '../services/chores-data.service';

import {Announcement} from '../models/app.models'

@Component({
  selector: 'ViewAnnouncements',
  templateUrl: './view-announcements.component.html',
  styleUrls: ['./view-announcements.component.css'],
  providers: [ChoresDataService]
})
export class ViewAnnouncementsComponent implements OnInit {

  announcements : [Announcement];
  constructor(private choresService: ChoresDataService) { }

  ngOnInit() {
    this.choresService.getAllAnnouncements().subscribe(
      response => this.announcements = response.items,
      error => console.log(error),
      () => console.log('C0mpleted!')
    );
  }

}
