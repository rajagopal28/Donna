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
  constructor(protected sessionService: SessionService) {}
}
