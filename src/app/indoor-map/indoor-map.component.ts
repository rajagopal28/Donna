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
allLocations: [HotSpot];

  constructor(
   private route: ActivatedRoute,
   private router: Router,
   private hotSpotService: IndoorLocationDataService) {}

  ngOnInit() {
    this.allLocations = this.hotSpotService.getPoiLocations();
  }
  ngAfterViewInit() {
    var map = Maze.map('mazemap-container', { campusloader: false });
    Maze.Instancer.getCampus(119).then( function (campus) {
      map.fitBounds(campus.getBounds());
      campus.addTo(map).setActive().then( function() {
          map.setZLevel(1);
          map.getZLevelControl().show();
      campus.addPoiCategory(27);    // 27 = bus stops
      });
  });
  // var fromLocation = {}

  var startLatLng = [39.96216351996103, -75.17163276672365];
  var endLatLng = [39.961970271724084,-75.16677260398866];
  Maze.marker(startLatLng, {
    zLevel: 1,
    offZOpacity: 0.4,
    icon: Maze.icon.chub({ color: 'green', glyph: 'human' })
  }).addTo(map);
  Maze.marker(endLatLng,   {
    zLevel: 1,
    offZOpacity: 0.4,
    icon: Maze.icon.chub({ color: 'red', glyph: 'walk' })
  }).addTo(map);


  Maze.Route.getFeatureGroupRoute(   // Can be replaced with Maze.Route.getGeoJsonRoute(
    startLatLng, 1,
    endLatLng, 1,
    {
        connectToStart: true,
        connectToEnd: true,
  //         avoidStairs: true
    }
  ).then(function(featGroup){
    featGroup.addTo(map);
    map.fitBounds(featGroup.getBounds());
    map.setZLevel(1);
  });

  map.on('click', function(ev) {
    Maze.Instancer.getPoiAt(ev.latlng, map.getZLevel()).then(function(marker) {
        if (marker) {
            marker.bindPopup(marker.properties.name).addTo(map).openPopup();
        } else {
            map.openPopup('No POI here', ev.latlng);
        }
    });
  });
  }
  formatter = (result: HotSpot) => result.name + ' at ' + result.building;
  applyNavigation() : void {
    console.log('applying navigation');
    console.log(this.toLocation);
  }
  searchTo = (text$: Observable<string>) =>
    map.call(distinctUntilChanged.call(debounceTime.call(text$, 200)),
      term => term.length < 2 ? [] : this.allLocations.filter(v => v.building.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
}
