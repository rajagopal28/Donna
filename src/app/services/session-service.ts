import { Injectable } from '@angular/core'

import { User } from '../models/app.models';

@Injectable()
export class SessionService {
  authenticatedUser : User;
  constructor() {
    this.clearUser();
  }
  setUser(user: User) {
    this.authenticatedUser = user;
  }
  isLoggedIn() : boolean {
    return this.authenticatedUser !== null;
  }
  clearUser() {
    this.authenticatedUser = null;
  }

}
