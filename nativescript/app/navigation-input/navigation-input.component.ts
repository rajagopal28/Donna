import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import {Router, NavigationExtras} from "@angular/router";


import { SessionService } from '../services/session-service';
import { LocationDataService } from '../services/location-data.service';
import { Location } from '../models/app.models';
import { ChooseLocationModalComponent } from '../choose-location-modal/choose-location-modal.component';

@Component({
  selector: 'NavigationInput',
  templateUrl: './navigation-input/navigation-input.component.html',
  providers: [LocationDataService]
})
export class NavigationInputComponent implements OnInit {

  isLoggedIn : boolean = false;
  locations : Array<Location>;
  fromLocation: Location;
  toLocation: Location;

  constructor(private modal: ModalDialogService,
    private vcRef: ViewContainerRef,
    protected sessionService: SessionService,
    private locationService : LocationDataService,
    private router: Router) {
      this.fromLocation = this.toLocation = new Location();
  }
  ngOnInit() {
    this.sessionService.authObervable.subscribe(authUser => {
      this.isLoggedIn = this.sessionService.isLoggedIn()
      console.log('observing... nav input' + this.isLoggedIn);
      if(authUser && authUser.location && authUser.location.campus) {
        this.loadLocationsFromCampus(authUser.location.campus.id);
      }
    });
  }
  chooseFromLocation() {
    this.openChooseLocationModalFor({modalContext : 'fromLocation', locations: this.locations});
  }
  openChooseLocationModalFor(context: any) {
    let options = {
        context: context,
        fullscreen: true,
        viewContainerRef: this.vcRef
    };
    this.modal.showModal(ChooseLocationModalComponent, options).then(res => {
        if(res && res.success) {
          // call login and set session
          console.log('Ok Clicked...');
          this.chooseLocationFromResponse(res);
        }
    });
  }
  chooseLocationFromResponse(response) {
    let location = response.location;
    if(response.modalContext === 'fromLocation') {
      this.fromLocation = location;
    } else {
      this.toLocation = location;
    }
  }

  chooseToLocation() {
      this.openChooseLocationModalFor({modalContext : 'toLocation', locations: this.locations});
  }
  submitNavigation() {
    console.log('Submitting Navigation...');
    console.log('FromLocation:' + JSON.stringify(this.fromLocation));
    console.log('ToLocation:' + JSON.stringify(this.toLocation));
    if(this.fromLocation.name && this.toLocation.name) {
      let navigationExtras: NavigationExtras = {
        queryParams : {
                "fromLocationId": this.fromLocation.id,
                "toLocationId": this.toLocation.id
      }};
      this.router.navigate(['navigation'], navigationExtras);
    }
  }

  loadLocationsFromCampus(campusId) {
    this.locationService.getAllLocations({ campusId: campusId }).subscribe(
      response => this.locations = response.items,
      error => console.log(error),
      () => console.log('Locations Loaded')
    );
  }

}
