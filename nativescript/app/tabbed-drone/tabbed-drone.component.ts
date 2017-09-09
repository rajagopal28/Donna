import { Component, ViewContainerRef  } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";


import { LoginModalComponent } from "../login-modal/login-modal.component";

@Component({
  selector: 'TabbedDroneComponent',
  templateUrl: './tabbed-drone/tabbed-drone.component.html'
})
export class TabbedDroneComponent {

    public tabSelectedIndex: number;
    public title: string = 'What\'s New?';
    constructor(private modal: ModalDialogService,
       private vcRef: ViewContainerRef,
       private routerExtensions: RouterExtensions) {
        this.tabSelectedIndex = 0;
        console.log('Varuthaa...With Second route..');
    }

    public showLoginModal() {
        let options = {
            context: {someString: 'someString value'},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(LoginModalComponent, options).then(res => {
            if(res && res.success) {
              // call login and set session
              console.log('Ok Clicked...');
            }
        });
    }
    public goBackPage() {
        this.routerExtensions.backToPreviousPage();
    }
}
