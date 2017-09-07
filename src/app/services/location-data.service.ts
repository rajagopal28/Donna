import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { Location, Campus } from '../models/app.models';

import { BaseAPIDataService } from './base-api-data.service';

@Injectable()
export class LocationDataService extends BaseAPIDataService {

  constructor( http: Http) {
    super(http);
   }

  getAllLocations(params) {
    return super.getData('locations', params);
  }
  addLocation(location : Location) {
    return super.postData('locations', location);
  }
  getAllCampus() {
    return super.getData('campus', {});
  }
  addCampus(campus : Campus) {
    return super.postData('campus', campus);
  }
}
