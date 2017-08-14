import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { GoogleIndoorComponent } from './google-indoor/google-indoor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndoorMapComponent,
    ChatBotComponent,
    GoogleIndoorComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: '<YourAPIKey>'
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
      }, {
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
