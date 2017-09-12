import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { GoogleIndoorComponent } from './google-indoor/google-indoor.component';
import { ViewLocationsComponent } from './admin/view-locations/view-locations.component';
import { AddLocationComponent } from './admin/add-location/add-location.component';
import { AddCampusComponent } from './admin/add-campus/add-campus.component';
import { ViewCampusComponent } from './admin/view-campus/view-campus.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { TabViewComponent } from './admin/tab-view/tab-view.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { AddAnnouncementComponent } from './admin/add-announcement/add-announcement.component';
import { ViewAnnouncementsComponent } from './view-announcements/view-announcements.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { DateFormatterPipe} from './models/app.models';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndoorMapComponent,
    ChatBotComponent,
    GoogleIndoorComponent,
    ViewLocationsComponent,
    AddLocationComponent,
    AddCampusComponent,
    ViewCampusComponent,
    ViewUsersComponent,
    LoginComponent,
    SignupComponent,
    TabViewComponent,
    AddEventComponent,
    AddAnnouncementComponent,
    ViewAnnouncementsComponent,
    ViewEventsComponent,
    DateFormatterPipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    TagInputModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXNSYiB8v_Vb_a3Z9gH2idT6Z3adg5mAk'
    }),
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'indoor-map',
        component: IndoorMapComponent
      },{
        path: 'chat-bot',
        component: ChatBotComponent
      },{
        path: 'google-indoor',
        component: GoogleIndoorComponent
      },{
        path: 'signup',
        component: SignupComponent
      },{
        path: 'login',
        component: LoginComponent
      },{
        path: 'list',
        component: ViewLocationsComponent
      }, {
        path: 'events',
        component: ViewEventsComponent
      }, {
        path: 'announcements',
        component: ViewAnnouncementsComponent
      },{
        path: 'admin',
        component: TabViewComponent
      },{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
