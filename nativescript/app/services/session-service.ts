import { Injectable } from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { User } from '../models/app.models';

@Injectable()
export class SessionService {
  private _authSetting = new BehaviorSubject<User>(null);

  private authenticatedUser : User;
  public authObervable = this._authSetting.asObservable();
  constructor() {
    this.clearUser();
  }
  getUser() : User {
    return this.authenticatedUser;
  }
  setUser(user: User) {
    this.authenticatedUser = user;
    this._authSetting.next(user);
  }
  isLoggedIn() : boolean {
    return this.authenticatedUser !== null;
  }
  clearUser() {
    this.setUser(null);
  }

}
