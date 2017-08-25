import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/Rx";

import { HotSpot } from '../models/app.models';

var mapsModule = require("nativescript-google-maps-sdk");


const URL : string = 'https://maps.googleapis.com/maps/api/directions/json';
const DIRECTIONS_API_KEY : string = '<API-KEY>';

@Injectable()
export class IndoorLocationDataService {

  constructor(private http: Http) { }

  getLevels() : [number] {
    return [-1, 0, 1, 2, 3, 7]
  }
  getPolyLineFromWayPoints(waypoints) : Array<Position>{
    let points = new Array<Position>();
    waypoints.forEach((point) => {
      points.push(this.getPolyLineForWayPoint(point));
    });
    return points;
  }
  getPolyLineForWayPoint(waypoint) {
    return new mapsModule.Position.positionFromLatLng(waypoint.lat, waypoint.lng);
  }
  getDirectionWayPointsAndLoadPolyLineOptions(params, cb) {
    var p = {
    	"origin" : "Adelaide,SA",
    	"destination" : "Adelaide,SA",
    	"waypoints" : "optimize:true|Barossa+Valley,SA|Clare,SA|Connawarra,SA|McLaren+Vale,SA",
    	"key" : DIRECTIONS_API_KEY
    };
    console.log('sending params to api...');
    this.getDirectionWayPoints(p, (response) => {
      let routes = response.routes;
      if(routes && routes.length > 0) {
        console.log('got routes', routes.length);
        let decodedPathList = this.decodePathLineString(routes[0].overview_polyline.points);
        console.log('decoded path list =', decodedPathList.length);
        let polyLineLocations = this.getPolyLineFromWayPoints(decodedPathList);
        console.log('got locations from string=', polyLineLocations.length);
        // convert polyLineLocations to polyLine
        let polyLineOptions = this.getPolylineOptionsFromPostions(polyLineLocations);
        console.log('received polyline options');
        cb(polyLineOptions);
      }
    });
  }
  getPolylineOptionsFromPostions(polylinePositions: Array<Position>) {
      let polyLineOptions = new mapsModule.Polyline();
      console.log('android enna??', polyLineOptions);
      console.log('creating polyling options, length=', polylinePositions.length);
      polyLineOptions.width = 25;
      polyLineOptions.visible = true;
      polyLineOptions.geodesic = true;
      polyLineOptions._points = polylinePositions;
      console.log('before setting polyling options, adding points');
        try {
            polyLineOptions.loadPoints();
        } catch(e) {
          console.error(e);
        }
      console.log('after setting polyling options, adding points');
      return polyLineOptions;
  }
  getDirectionWayPoints(params, cb) {
    this.getDirectionwayPointsAPI(params)
    .subscribe(result => {
        cb(result);
    }, error => {
        console.log("ERROR: ", error);
    });
  }
  decodePathLineString(encodedPath) {
    let len = encodedPath.length;
    var index = 0;
    var lat = 0;
    var lng = 0;

     // For speed we preallocate to an upper bound on the final length, then
     // truncate the array before returning.
    let path = [];
     while (index < len) {
       var result = 1;
       var shift = 0;
       var b;
       do {
           b = encodedPath.charAt(index++) - 63 - 1;
           result += b << shift;
           shift += 5;
       } while (b >= 0x1f);
       lat += (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
       result = 1;
       shift = 0;
       do {
           b = encodedPath.charAt(index++) - 63 - 1;
           result += b << shift;
           shift += 5;
       } while (b >= 0x1f);
       lng += (result & 1) != 0 ? ~(result >> 1) : (result >> 1);

       path.push({ lat: lat * 1e-5, lng: lng * 1e-5});
     }
     return path;
  }

  getDirectionwayPointsAPI(params) {
    let paramString = this.getStringFromParams(params);
    return this.http.get(URL+paramString)
            .map(result => result.json());
  }
  getStringFromParams(params) {
    var paramString: string = '?';
    for( var key in params) {
      if(params.hasOwnProperty(key)) {
        if(paramString !== '?') {
          paramString += '&';
        }
        paramString += key + '=' + params[key];
      }
    }
    return paramString;
  }
}
