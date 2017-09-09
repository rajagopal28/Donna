import { Component, ChangeDetectionStrategy  } from '@angular/core';
import {ChoresDataService} from '../services/chores-data.service';

import {Announcement} from '../models/app.models'

@Component({
  selector: 'ViewAnnouncements',
  templateUrl: './view-announcements/view-announcements.component.html',
  providers: [ChoresDataService]
})
export class ViewAnnouncementsComponent{

  public announcements : [Announcement];
  constructor(private choresService: ChoresDataService) {
    this.choresService.getAllAnnouncements().subscribe(
      response => {
        this.announcements = response.items;
        console.log('Length = ', this.announcements.length);
      },
      error => console.log(error),
      () => console.log('C0mpleted!')
    );}

  public onItemTap(args) {
      console.log("Item Tapped at cell index: " + args.index);
  }

}
