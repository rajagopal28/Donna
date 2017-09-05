import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Color } from "tns-core-modules/color";

import {registerElement} from 'nativescript-angular/element-registry';

import { Polyline, Marker, Position } from "nativescript-google-maps-sdk";

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

    lat: number = 51.556021;
    lng: number = -0.279519;
    routeText: string = '';
    zoom: number = 17;
    bearing:number = 0;
    tilt:number = 0;
    p: any = {
      "origin" : "51.555361,-0.280656",
      "destination" : "51.556049,-0.278078",
      "mode" : "walking"
    };


    constructor(
     private hotSpotService: IndoorLocationDataService) {}

    ngAfterViewInit() {
    }
    ngOnInit() {

    }
    getDirections(arg, cb) {
      console.log('getting directions', arg);
      this.hotSpotService.getDirectionWayPointsAndLoadPolyLineOptions(arg, (result)=> {
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
      var marker = this.getMarkerFrom(this.lat, this.lng, 'Wembley Stadium', ' London HA9 0WS, UK');
      mapView.addMarker(marker);
      // this.hotSpotService.getRouteText(this.p, (response) => {
      //   console.log('route text');
      //   this.routeText = response;
      // });
      this.getDirections(this.p, (result: Polyline) => {
        try {
            if(result) {
                console.log('got android and setting.. Polyline');
                mapView.addPolyline(result);
                let src = this.getMarkerFrom(51.555361,-0.280656, 'Some place 1', 'Some snipp1');
                let dst = this.getMarkerFrom(51.556049,-0.278078, 'some place 2','Some snipp2');
                mapView.addMarker(src);
                mapView.addMarker(dst);
                console.log('Adding src dst marker');
            }
        } catch(e) {
          console.error(e);
        }
      });
    }
    onMarkerSelect(args) { }
    onCameraChanged(args) { }
    getMarkerFrom(lat: number, lng: number, title: string, snippet: string) : Marker {
      let marker = new Marker();
       marker.position = Position.positionFromLatLng(lat, lng);
       marker.title = title;
       marker.snippet = snippet;
       marker.userData = { index : 1};
       return marker;
    }
}
