import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';

import { Location } from '../models/app.models';
import { LocationDataService } from '../services/location-data.service';
import { SessionService } from '../services/session-service';

const DEFAULT_FLOOR_LEVEL: number = 1;
const DEFAULT_CAMPUS_NUMBER: number = 119;

declare var Maze: any;
@Component({
  selector: 'app-indoor-map',
  templateUrl: './indoor-map.component.html',
  styleUrls: ['./indoor-map.component.css'],
  providers: [LocationDataService],
})
export class IndoorMapComponent implements OnInit {

  fromLocation: Location;
  toLocation: Location;
  locations: [Location];
  isLoggedIn: boolean = false;
  campusNumber: number = DEFAULT_CAMPUS_NUMBER;
  imap: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationDataService,
    protected sessionService: SessionService) { }

  ngOnInit() {
    // params['fromLocationPosition'] && params['toLocationPosition']
    this.sessionService.authObervable.subscribe(authUser => {
      this.isLoggedIn = this.sessionService.isLoggedIn();
      if (authUser.location && authUser.location.campus && authUser.location.campus.id) {
        this.campusNumber = authUser.location.campus.campusNumber;
        this.loadLocationsFromCampus(authUser.location.campus.id);
        this.loadMapForCampus(this.campusNumber);
      }
    });
  }
  loadLocationsFromCampus(campusId) {
    this.locationService.getAllLocations({ campusId: campusId }).subscribe(
      response => {
        this.locations = response.items;
        this.loadFromAndToLocationIfInRotueParams();
      },
      error => console.log(error),
      () => console.log('Locations Loaded')
    );
  }
  ngAfterViewInit() {
  }
  loadFromAndToLocationIfInRotueParams() {
    this.route.params.subscribe(params => {
      if (params['fromLocationId'] && params['toLocationId']) {
        let fromLocationId = +params['fromLocationId'];
        let toLocationId = +params['toLocationId'];
        this.loadLocationFromRouteParams(fromLocationId, toLocationId);
      }
    });
  }
  loadLocationFromRouteParams(fromLocationId: number, toLocationId: number) {
    if(fromLocationId !== -1 && toLocationId !==-1 && fromLocationId !== toLocationId) {
      for(var index =0; index<this.locations.length ; index++) {
        if (this.locations[index].id === fromLocationId) {
          this.fromLocation = this.locations[index];
        }
        if (this.locations[index].id === toLocationId) {
          this.toLocation = this.locations[index];
        }
      }
      this.applyNavigation();
    }
  }
  loadMapForCampus(campusNumber) {
    this.imap = Maze.map('mazemap-container', { campusloader: false });
    var imap = this.imap;
    Maze.Instancer.getCampus(campusNumber).then((campus) => {
      imap.fitBounds(campus.getBounds());
      campus.addTo(imap).setActive().then(function() {
        imap.setZLevel(DEFAULT_FLOOR_LEVEL);
        imap.getZLevelControl().show();
        campus.addPoiCategory(27);    // 27 = bus stops
      });
    }).catch((error) => {
      console.log(error);
    });
  }
  navigateBetweenLocations(startLatLng: [number], endLatLng: [number], startLevel: number, endLevel: number): void {
    var imap = this.imap;
    Maze.marker(startLatLng, {
      zLevel: startLevel,
      offZOpacity: 0.4,
      icon: Maze.icon.chub({ color: 'green', glyph: 'human' })
    }).addTo(imap);
    Maze.marker(endLatLng, {
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

  formatter = (result: Location) => result.name + ', level:' + result.floor + ' at Campus:' + result.campus.name;

  applyNavigation(): void {
    console.log('applying navigation');
    console.log(this.toLocation);
    console.log(this.fromLocation);
    if (this.fromLocation &&
        this.toLocation &&
        this.toLocation.id !== this.fromLocation.id) {
      var startLatLng: [number] = [this.fromLocation.latitude, this.fromLocation.longitude];
      var endLatLng: [number] = [this.toLocation.latitude, this.toLocation.longitude];
      this.navigateBetweenLocations(startLatLng, endLatLng, this.fromLocation.floor, this.toLocation.floor);
    }
  }
  
  isLocationWithString(location: Location, str: string) {
    return (location.name.toLowerCase().indexOf(str.toLowerCase()) !== -1)
              || ( location.campus && location.campus.name.toLowerCase().indexOf(str.toLowerCase()) !== -1)
  }
  searchLocation= (text$: Observable<string>) =>
    map.call(distinctUntilChanged.call(debounceTime.call(text$, 200)),
      term => term.length < 2 ? [] : this.locations.filter(v => this.isLocationWithString(v, term)).slice(0, 10));
}
