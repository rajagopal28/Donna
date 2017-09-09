import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';
import { ViewAnnouncementsComponent } from './view-announcements/view-announcements.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  declarations: [AppComponent, HomeComponent,
     ChatBotComponent, IndoorMapComponent,
     ViewAnnouncementsComponent, LoginModalComponent],
  entryComponents: [LoginModalComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptHttpModule, NativeScriptFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ModalDialogService]
})
export class AppModule {}
