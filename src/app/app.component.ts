import { Component } from '@angular/core';

import { SessionService } from './services/session-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SessionService]
})
export class AppComponent {
  title = 'Donna';
  isLoggedIn : boolean = false;
  constructor(protected sessionService: SessionService) {
    this.sessionService.authObervable.subscribe(authUser => {
      console.log('observing...');
      this.isLoggedIn = (authUser && authUser.id !== null);
    });
  }
  logout() {
    this.sessionService.clearUser();
  }


}
