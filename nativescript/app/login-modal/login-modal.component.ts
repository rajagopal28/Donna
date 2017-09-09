import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: "LoginModal",
  templateUrl: "./login-modal/login-modal.component.html",
})
export class LoginModalComponent {

  public input: {
    username: string;
    password: string;
    success: boolean;
  };

  public constructor(private params: ModalDialogParams) {
    this.input = {
      username: "",
      password: "",
      success: false
    }
  }
  public cancel() {
    this.params.closeCallback({success: false});
  }

  public ok() {
    this.input.success = true;
    console.log(JSON.stringify(this.input));
    this.params.closeCallback(this.input);
  }

}
