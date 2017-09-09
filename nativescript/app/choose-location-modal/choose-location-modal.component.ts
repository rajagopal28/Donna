import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { Location } from '../models/app.models';

@Component({
  selector: "ChooseLocationModal",
  templateUrl: "./choose-location-modal/choose-location-modal.component.html",
})
export class ChooseLocationModalComponent{

  locations : Array<Location>;
  public constructor(private params: ModalDialogParams) {
    if(params.context && params.context.locations) {
      this.locations = params.context.locations;
    }
  }

  public ok(selectedLocation : Location) {
    this.params.closeCallback({success: true, modalContext: this.params.context.modalContext, location: selectedLocation});
  }

}
