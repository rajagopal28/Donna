import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Color } from "tns-core-modules/color";
import {ActivatedRoute} from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import {registerElement} from 'nativescript-angular/element-registry';

import { Polyline, Marker, Position } from "nativescript-google-maps-sdk";

var mapsModule = require("nativescript-google-maps-sdk");

import { Location, Campus } from '../models/app.models';

import { IndoorLocationDataService } from '../services/indoor-location-data.service';
import { LocationDataService } from '../services/location-data.service';
registerElement("MapView", () => mapsModule.MapView);
@Component({
    selector: 'IndoorMap',
    templateUrl: './indoor-map/indoor-map.component.html',
    providers: [IndoorLocationDataService, LocationDataService]
})
export class IndoorMapComponent implements OnInit {
  @ViewChild("MapView") mapView: ElementRef;

    lat: number = 51.556021;
    lng: number = -0.279519;
    campus: Campus;
    routeText: string = '';
    zoom: number = 17;
    bearing:number = 0;
    tilt:number = 0;
    p: any = {
      "origin" : "51.555361,-0.280656",
      "destination" : "51.556049,-0.278078",
      "mode" : "walking",
      "start" : {},
      "end": {}
    };
    private mapViewObject : any;

    constructor(
     private hotSpotService: IndoorLocationDataService,
     private locationService: LocationDataService,
     private route: ActivatedRoute,
     private routerExtensions: RouterExtensions,) {}

    ngAfterViewInit() {
    }
    ngOnInit() {

    }
    readParamsAndLoadLocations() {
      this.route.queryParams.subscribe(params => {
            let fromLocationId = +params.fromLocationId;
            let toLocationId = +params.toLocationId;
            let campusId = +params.campusId;
            this.loadLocationsFromCampus(campusId, fromLocationId, toLocationId);
        });
    }
    getDirections(arg, cb) {
      console.log('getting directions', arg);
      this.hotSpotService.getDirectionWayPointsAndLoadPolyLineOptionsWithRoute(arg, (result, routeText)=> {
        console.log('inside promise');
        cb(result, routeText);
      });
    }

    OnMapReady(args) {
      console.log('Maps ready da...');
      var mapView = args.object;
      this.mapViewObject = mapView;

      if(mapView.nativeView) {
        console.log('in android.. setting indoor');
        // setting indoor mode
        mapView.gMap.setIndoorEnabled(true);
        mapView.gMap.getUiSettings().setIndoorLevelPickerEnabled(true);
        // setting zoom controls
        mapView.gMap.getUiSettings().setZoomControlsEnabled(true);
      }
      this.readParamsAndLoadLocations();
    }
    loadLocationsFromCampus(campusId, fromLocationId, toLocationId) {
      this.locationService.getAllLocations({ campusId: campusId }).subscribe(
        response => {
          let locations = response.items;
          var campus;
          for(var index =0; index<locations.length; index++) {
            let loc = locations[index];
            if(!campus) {
              campus = loc.campus;
              this.campus = campus;
            }
            if(loc.id === fromLocationId) {
              this.p.origin = loc.latitude + ', ' + loc.longitude;
              this.p.start = loc;
            }
            if(loc.id === toLocationId) {
              this.p.destination = loc.latitude + ', ' + loc.longitude;
              this.p.end = loc;
            }
          }
          setTimeout(() => {
            console.log('Applying directions from timeout...');
            this.applyDirections(this.mapViewObject);
          }, 1000);
        },
        error => console.log(error),
        () => console.log('Locations Loaded')
      );
    }
    applyDirections(mapView: any) {
      // setup marker
      console.log('setting marker on location');
      this.lat = this.campus.latitude ? this.campus.latitude : this.lat;
      this.lng = this.campus.longitude ? this.campus.longitude : this.lng;
      let text = this.campus.name? this.campus.name : 'Wembley Stadium';
      var marker = this.getMarkerFrom(this.lat, this.lng, text, ' London HA9 0WS, UK');
      mapView.addMarker(marker);
      mapView.updateCamera();
      this.getDirections(this.p, (result: Polyline, routeText: string) => {
        try {
            if(result) {
                console.log('got android and setting.. Polyline');
                mapView.addPolyline(result);

                let mark1 = this.p.start.name? this.p.start.name : 'Marker 1';
                let mark2 = this.p.end.name? this.p.end.name: 'Marker 2';
                let lat1 = this.p.start.latitude? this.p.start.latitude : 51.555361;
                let lng1 = this.p.start.longitude? this.p.start.longitude : -0.280656;
                let lat2 = this.p.end.latitude? this.p.end.latitude : 51.556049;
                let lng2 = this.p.end.longitude? this.p.end.longitude : -0.278078;

                let src = this.getMarkerFrom(lat1, lng1, mark1, 'Some snipp1');
                let dst = this.getMarkerFrom(lat2, lng2, mark2,'Some snipp2');
                mapView.addMarker(src);
                mapView.addMarker(dst);
                console.log('Adding src dst marker');

                this.routeText = routeText;
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
    public goBackPage() {
        this.routerExtensions.backToPreviousPage();
    }
}
