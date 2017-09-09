import { Component, ViewContainerRef  } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { HomeComponent } from './home/home.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';
import { GoogleIndoorComponent } from './google-indoor/google-indoor.component';
import { LoginModalComponent } from "./login-modal/login-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.mobile.html',
  styleUrls: ['./app.component.mobile.css']
})
export class AppComponent {
    title = 'Donna';
    public tabSelectedIndex: number;

    constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef) {
        this.tabSelectedIndex = 1;
        console.log('Varuthaa...With Maps');
    }

    public showLoginModal() {
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(LoginModalComponent, options).then(res => {
            if(res && res.success) {
              // call login and set session
              console.log('Ok Clicked...');
            }
        });
    }
}
