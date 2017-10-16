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

  delete(announcement: Announcement) {
    console.log('deleting', announcement);
    if (confirm('Are you sure you want to remove this announcement?')) {
        console.log('Deleting confirmation');
        this.choresService.deleteAnnouncement(announcement).subscribe(
          response => {
            console.log(response);
            let index = this.announcements.indexOf(announcement);
            if(index !== -1){
              this.announcements.splice(index, 1);
            }
          },
          error => console.log(error),
          () => console.log('Completed yahah')
        );
    }
  }
}
