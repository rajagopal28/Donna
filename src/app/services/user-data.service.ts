import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { User } from '../models/app.models';
import {BaseAPIDataService} from  './base-api-data.service'

@Injectable()
export class UserDataService extends BaseAPIDataService {
  constructor(http:Http) {
    super(http);
 }
  getAllUsers(params){
    return super.getData('users', params);
  }
  addUser(user:User) {
    return super.postData('users', user);
  }
  deleteUser(user:User) {
    return super.deleteData('users/'+user.id, {});
  }
  authenticate(username: string, password: string) {
    return super.postData('users/login', {username: username, password: password});
  }
}
