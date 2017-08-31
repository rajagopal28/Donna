import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { User } from '../models/app.models';
import {BaseAPIDataService} from  './base-api-data.service'

@Injectable()
export class UserDataService extends BaseAPIDataService {
  constructor(http:Http) {
    super(http);
 }
  getAllUsers(){
    return super.getData('users', {});
  }
  addUser(user:User) {
    return super.postData('users', user);
  }

}
