import { Component, ViewContainerRef  } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";


import { SessionService } from '../services/session-service';
import { UserDataService } from '../services/user-data.service';
import { LoginModalComponent } from "../login-modal/login-modal.component";

@Component({
  selector: 'TabbedDroneComponent',
  templateUrl: './tabbed-drone/tabbed-drone.component.html',
  providers: [SessionService, UserDataService]
})
export class TabbedDroneComponent {

    public isLoggedIn: boolean = false;
    public tabSelectedIndex: number;
    public title: string = 'What\'s New?';
    constructor(private modal: ModalDialogService,
       private vcRef: ViewContainerRef,
       private routerExtensions: RouterExtensions,
       protected sessionService: SessionService,
       private userService: UserDataService) {
         this.sessionService.authObervable.subscribe(authUser => {
           console.log('observing...');
           this.isLoggedIn = (authUser && authUser.id !== null);
         });
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
              this.loginUser(res);
            }
        });
    }
    private loginUser(params) {
      console.log('logging in...');
        console.log(JSON.stringify(params));
        this.userService.authenticate(params.username, params.password).subscribe(
          response => {
            console.log(JSON.stringify(response));
            if(response.success) {
              this.sessionService.setUser(response.item);
            }
          },
          error => console.log('ERROR LOGING IN:', JSON.stringify(error)),
          () => console.log('Authenticated...')
        );
    }
    public goBackPage() {
        this.routerExtensions.backToPreviousPage();
    }
    public logout() {
      console.log('Logging out...');
      this.sessionService.clearUser();
    }
}
