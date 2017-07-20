import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';

import {IndoorLocationDataService} from '../services/indoor-location-data.service';
import { HotSpot } from '../models/app.models';

declare var Maze:any;
@Component({
  selector: 'app-indoor-map',
  templateUrl: './indoor-map.component.html',
  styleUrls: ['./indoor-map.component.css'],
  providers: [IndoorLocationDataService],
})
export class IndoorMapComponent implements OnInit {

fromLocation : HotSpot;
toLocation: HotSpot;
fromLevel : number;
toLevel: number;
levels : [number];
allLocations: [HotSpot];
imap: any;
  constructor(
   private route: ActivatedRoute,
   private router: Router,
   private hotSpotService: IndoorLocationDataService) {}

  ngOnInit() {
    this.allLocations = this.hotSpotService.getPoiLocations();
    this.fromLevel = this.toLevel = 1;
    this.levels = this.hotSpotService.getLevels();
    this.route.params.subscribe(params => {
      if( params['fromLocationPosition'] && params['toLocationPosition']) {
        let fromPos = params['fromLocationPosition'] - 1 ;
        let toPos = params['toLocationPosition'] - 1 ;
        this.fromLocation =  this.allLocations[fromPos];
        this.toLocation =  this.allLocations[toPos];
      }      
    });
  }
  ngAfterViewInit() {
    this.imap = Maze.map('mazemap-container', { campusloader: false });
    var imap = this.imap;
    Maze.Instancer.getCampus(119).then((campus) => {
      imap.fitBounds(campus.getBounds());
      this.showPathIfThereAreFromAndTo();
      campus.addTo(imap).setActive().then( function() {
          imap.setZLevel(1);
          imap.getZLevelControl().show();
          campus.addPoiCategory(27);    // 27 = bus stops
          });
      }).catch((error) => {
        console.log(error);
      });
  }
  showPathIfThereAreFromAndTo() : void {
    if(this.fromLocation && this.toLocation) {
      var level = 1;
      this.navigateBetweenLocations([this.fromLocation.location.lat, this.fromLocation.location.lng],
        [this.toLocation.location.lat, this.toLocation.location.lng], level, level);
    }
  }
  navigateBetweenLocations(startLatLng: [number], endLatLng: [number], startLevel: number, endLevel: number) : void {
    var imap = this.imap;
    Maze.marker(startLatLng, {
      zLevel: startLevel,
      offZOpacity: 0.4,
      icon: Maze.icon.chub({ color: 'green', glyph: 'human' })
    }).addTo(imap);
    Maze.marker(endLatLng,   {
      zLevel: startLevel,
      offZOpacity: 0.4,
      icon: Maze.icon.chub({ color: 'red', glyph: 'walk' })
    }).addTo(imap);


    Maze.Route.getFeatureGroupRoute(   // Can be replaced with Maze.Route.getGeoJsonRoute(
      startLatLng, startLevel,
      endLatLng, endLevel,
      {
          connectToStart: true,
          connectToEnd: true,
    //         avoidStairs: true
      }
    ).then((featGroup) => {
      featGroup.addTo(imap);
      imap.fitBounds(featGroup.getBounds());
      imap.setZLevel(1);
    }).catch((error) => {
      console.log(error);
    });
  }
  formatter = (result: HotSpot) => result.name + ' at ' + result.building;
  applyNavigation() : void {
    console.log('applying navigation');
    console.log(this.toLocation);
    console.log(this.fromLocation);
    if(this.toLocation.id !== this.fromLocation.id) {
      var startLatLng : [number] = [this.fromLocation.location.lat, this.fromLocation.location.lng];
      var endLatLng : [number] = [this.toLocation.location.lat, this.toLocation.location.lng];
      this.navigateBetweenLocations(startLatLng, endLatLng, this.fromLevel, this.toLevel);
    }
  }
  searchTo = (text$: Observable<string>) =>
    map.call(distinctUntilChanged.call(debounceTime.call(text$, 200)),
      term => term.length < 2 ? [] : this.allLocations.filter(v =>  v.building.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
  searchFrom = (text$: Observable<string>) =>
        map.call(distinctUntilChanged.call(debounceTime.call(text$, 200)),
          term => term.length < 2 ? [] : this.allLocations.filter(v =>  v.building.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
 }
