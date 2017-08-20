import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import {registerElement} from 'nativescript-angular/element-registry'; 

var geolocation = require("nativescript-geolocation");
var mapsModule = require("nativescript-google-maps-sdk");

registerElement("MapView", () => mapsModule.MapView);
@Component({
  selector: 'GoogleIndoor',
  templateUrl: './google-indoor/google-indoor.component.html'
})
export class GoogleIndoorComponent implements OnInit {
  @ViewChild("MapView") mapView: ElementRef;

  lat: number = 51.5561892;
  lng: number = -0.2799979;
  zoom: number = 17;
  bearing:number = 0;
  tilt:number = 0;

  constructor() { }

  ngOnInit() {
    console.log('inside maps...');
  }
  
  OnMapReady(args) {
    console.log('Maps ready da...');
    var mapView = args.object;

    if(mapView.nativeView) {
      console.log('in android.. setting indoor');
      // setting indoor mode
      mapView.gMap.setIndoorEnabled(true);
      mapView.gMap.getUiSettings().setIndoorLevelPickerEnabled(true);
      // setting zoom controls
      mapView.gMap.getUiSettings().setZoomControlsEnabled(true);
    }

    // setup marker
    console.log('setting marker on location');
    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(this.lat, this.lng);
    marker.title = "Wembely Stadium";
    marker.snippet = "Longon";
    marker.userData = { index : 1};
    mapView.addMarker(marker);
   }
  onMarkerSelect(args) { }
  onCameraChanged(args) { }

}
