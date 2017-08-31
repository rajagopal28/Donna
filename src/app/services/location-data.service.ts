import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { Location } from '../models/app.models';

import { BaseAPIDataService } from './base-api-data.service';

@Injectable()
export class LocationDataService extends BaseAPIDataService {

  constructor( http: Http) {
    super(http);
   }

  getAllLocations() {
    return super.getData('locations', {});
  }

}
