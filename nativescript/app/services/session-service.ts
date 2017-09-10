import { Injectable } from '@angular/core';
import {
    getString,
    setString,
    hasKey,
    remove
} from "application-settings";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { User } from '../models/app.models';

const AUTH_USER_KEY = 'autUserString';
@Injectable()
export class SessionService {
  private _authSetting = new BehaviorSubject<User>(null);

  private authenticatedUser : User;
  public authObervable = this._authSetting.asObservable();
  constructor() {
    this.clearUser();
    this.getAuthFromPreferences();
  }
  getUser() : User {
    return this.authenticatedUser;
  }
  setUser(user: User) {
    this.authenticatedUser = user;
    this._authSetting.next(user);
    if(user) {
      setString(AUTH_USER_KEY, JSON.stringify(user))
    } else {
      remove(AUTH_USER_KEY);
    }
  }
  isLoggedIn() : boolean {
    return this.authenticatedUser !== null;
  }
  getAuthFromPreferences() {
    if(hasKey(AUTH_USER_KEY)) {
      this.setUser(JSON.parse(getString(AUTH_USER_KEY)));
    }
  }
  clearUser() {
    this.setUser(null);
  }

}
