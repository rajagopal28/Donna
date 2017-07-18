import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {IndoorLocationDataService} from '../services/indoor-location-data.service';

declare var Maze:any;
@Component({
  selector: 'app-indoor-map',
  templateUrl: './indoor-map.component.html',
  styleUrls: ['./indoor-map.component.css']
})
export class IndoorMapComponent implements OnInit {

  constructor(
   private route: ActivatedRoute,
   private router: Router) {}

  ngOnInit() {
  }
  ngAfterViewInit() {
  var map = Maze.map('mazemap-container', { campusloader: false });
  Maze.Instancer.getCampus(119).then( function (campus) {
    map.fitBounds(campus.getBounds());
    campus.addTo(map).setActive().then( function() {
        map.setZLevel(1);
        map.getZLevelControl().show();
    campus.addPoiCategory(27);    // 27 = bus stops
    });;
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
  applyNavigation() : void {
    console.log('applying navigation');
  }
}
