import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Color } from "tns-core-modules/color";

import "rxjs/Rx";

import { HotSpot } from '../models/app.models';

import { Polyline, Position } from "nativescript-google-maps-sdk";


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
    return Position.positionFromLatLng(waypoint.lat, waypoint.lng);
  }
  getDirectionWayPointsAndLoadPolyLineOptions(params, cb) {
    console.log('sending params to api...');
    params["key"] = DIRECTIONS_API_KEY;
    this.getDirectionWayPoints(params, (response) => {
      let routes = response.routes;
      if(routes && routes.length > 0) {
        console.log('got routes', routes.length);
        let decodedPathList = this.decodePathLineString(routes[0].overview_polyline.points);
        console.log('the polyline endoded str', routes[0].overview_polyline.points);
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
  getPolylineOptionsFromPostions(polylinePositions: Array<Position>) : Polyline {
      let polyLineOptions : Polyline = new Polyline();
      console.log('android enna??', polyLineOptions);
      console.log('creating polyling options, length=', polylinePositions.length);
      polyLineOptions.width = 25;
      polyLineOptions.visible = true;
      polyLineOptions.geodesic = true;
      polyLineOptions.color = new Color("#FF0000");
      polyLineOptions.addPoints(polylinePositions);
      return polyLineOptions;
  }
  getRouteText(params, cb) {
    params["key"] = DIRECTIONS_API_KEY;
    this.getDirectionWayPoints(params, (response) =>{
        var restext = '';
        if(response.routes && response.routes.length >0) {
          var legsO = response.routes[0].legs;
          for(var leg =0; leg < legsO.length; leg++ ) {
            var legO = legsO[leg];
            var steps = legO.steps;
            for(var step = 0; step < steps.length; step++) {
              restext += steps[step].html_instructions;
            }
          }
        }
        cb(restext);
    });
  }
  getDirectionWayPoints(params, cb) {
    this.getDirectionwayPointsAPI(params)
    .subscribe(result => {
        cb(result);
    }, error => {
        console.log("ERROR: ", error);
    });
  }
  decodePathLineString(encoded) {
        if (!encoded) {
            return [];
        }
        var poly = [];
        var index = 0, len = encoded.length;
        var lat = 0, lng = 0;
        // For speed we preallocate to an upper bound on the final length, then
        // truncate the array before returning.
        while (index < len) {
            var b, shift = 0, result = 0;

            do {
                b = encoded.charCodeAt(index++) - 63;
                result = result | ((b & 0x1f) << shift);
                shift += 5;
            } while (b >= 0x20);

            var dlat = (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            lat += dlat;

            shift = 0;
            result = 0;

            do {
                b = encoded.charCodeAt(index++) - 63;
                result = result | ((b & 0x1f) << shift);
                shift += 5;
            } while (b >= 0x20);

            var dlng = (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            lng += dlng;

            var p = {
                lat: lat / 1e5,
                lng: lng / 1e5,
            };
            poly.push(p);
        }
        return poly;
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
