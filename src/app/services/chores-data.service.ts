import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {BaseAPIDataService} from  './base-api-data.service'

@Injectable()
export class ChoresDataService extends BaseAPIDataService {
  constructor(http:Http) {
    super(http);
 }
  getAllAnnouncements(){
    return super.getData('announcements', {});
  }

   getEvents(){
     return super.getData('events', {});
   }
}
