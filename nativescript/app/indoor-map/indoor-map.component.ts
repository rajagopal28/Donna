import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";

import {registerElement} from 'nativescript-angular/element-registry';

var mapsModule = require("nativescript-google-maps-sdk");

registerElement("MapView2", () => mapsModule.MapView);
import { IndoorLocationDataService } from '../services/indoor-location-data.service';
@Component({
    selector: 'IndoorMap',
    templateUrl: './indoor-map/indoor-map.component.html',
    providers: [IndoorLocationDataService]
})
export class IndoorMapComponent implements OnInit {
  @ViewChild("MapView2") mapView: ElementRef;

    lat: number = -34.5332878;
    lng: number = 138.9511826;
    zoom: number = 17;
    bearing:number = 0;
    tilt:number = 0;
    constructor(
     private hotSpotService: IndoorLocationDataService) {}

    ngAfterViewInit() {
    }
    ngOnInit() {

    }
    getDirections(arg, cb) {
      console.log('getting directions', arg);
      this.hotSpotService.getDirectionWayPointsAndLoadPolyLineOptions({}, (result)=> {
        console.log('inside promise');
        cb(result);
      });
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
      marker.title = "Barossa Valley, Tanunda SA 5352";
      marker.snippet = "Australia";
      marker.userData = { index : 1};
      mapView.addMarker(marker);
      this.getDirections({}, (result) => {
        try {
            if(result.android) {
                console.log('got android and setting..');
                mapView.gMap.addPolyline(result.android);
            }
        } catch(e) {
          console.error(e);
        }
      });
     }
    onMarkerSelect(args) { }
    onCameraChanged(args) { }
}
