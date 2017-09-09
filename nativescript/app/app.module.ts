import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { TabbedHomeComponent } from "./tabbed-home/tabbed-home.component";
import { TabbedDroneComponent } from "./tabbed-drone/tabbed-drone.component";
import { HomeComponent } from './home/home.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';
import { ViewAnnouncementsComponent } from './view-announcements/view-announcements.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

export const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: TabbedHomeComponent },
    { path: "drone", component: TabbedDroneComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent,
     ChatBotComponent, IndoorMapComponent,
     ViewAnnouncementsComponent, LoginModalComponent, ViewEventsComponent,
    TabbedHomeComponent, TabbedDroneComponent],
  entryComponents: [LoginModalComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ModalDialogService]
})
export class AppModule {}
