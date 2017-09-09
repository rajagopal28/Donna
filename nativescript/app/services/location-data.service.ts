import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Location, Campus } from '../models/app.models';

import { BaseAPIDataService } from './base-api-data.service';

@Injectable()
export class LocationDataService extends BaseAPIDataService {

  constructor(http: Http) {
    super(http);
  }
  getAllLocations(params) {
    return super.getData('locations', params);
  }
  addLocation(location: Location) {
    return super.postData('locations', location);
  }
  deleteLocation(location: Location) {
    return super.deleteData('locations/' + location.id, {});
  }
  getAllCampus() {
    return super.getData('campus', {});
  }
  addCampus(campus: Campus) {
    return super.postData('campus', campus);
  }
  deleteCampus(campus: Campus) {
    return super.deleteData('campus/' + campus.id, {});
  }
}
