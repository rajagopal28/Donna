import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { Announcement, Event } from '../models/app.models';
import {BaseAPIDataService} from  './base-api-data.service'

@Injectable()
export class ChoresDataService extends BaseAPIDataService {
  constructor(http:Http) {
    super(http);
 }
  getAllAnnouncements(){
    return super.getData('announcements', {});
  }
  addAnnouncement(announcement : Announcement) {
    return super.postData('announcements', announcement);
  }
   getEvents(){
     return super.getData('events', {});
   }
   addEvent(event : Event) {
     return super.postData('events', event);
   }
}
