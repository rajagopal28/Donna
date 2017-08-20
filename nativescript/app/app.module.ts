import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';
import { GoogleIndoorComponent } from './google-indoor/google-indoor.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ChatBotComponent, IndoorMapComponent, GoogleIndoorComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
