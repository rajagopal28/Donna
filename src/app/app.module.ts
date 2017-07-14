import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndoorMapComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'indoor-map',
        component: IndoorMapComponent
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
