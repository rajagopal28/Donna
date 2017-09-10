"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var mapsModule = require("nativescript-google-maps-sdk");
var indoor_location_data_service_1 = require("../services/indoor-location-data.service");
var location_data_service_1 = require("../services/location-data.service");
element_registry_1.registerElement("MapView", function () { return mapsModule.MapView; });
var IndoorMapComponent = (function () {
    function IndoorMapComponent(hotSpotService, locationService, route, routerExtensions) {
        this.hotSpotService = hotSpotService;
        this.locationService = locationService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.lat = 51.556021;
        this.lng = -0.279519;
        this.routeText = '';
        this.zoom = 17;
        this.bearing = 0;
        this.tilt = 0;
        this.p = {
            "origin": "51.555361,-0.280656",
            "destination": "51.556049,-0.278078",
            "mode": "walking",
            "start": {},
            "end": {}
        };
    }
    IndoorMapComponent.prototype.ngAfterViewInit = function () {
    };
    IndoorMapComponent.prototype.ngOnInit = function () {
    };
    IndoorMapComponent.prototype.readParamsAndLoadLocations = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var fromLocationId = +params.fromLocationId;
            var toLocationId = +params.toLocationId;
            var campusId = +params.campusId;
            _this.loadLocationsFromCampus(campusId, fromLocationId, toLocationId);
        });
    };
    IndoorMapComponent.prototype.getDirections = function (arg, cb) {
        console.log('getting directions', arg);
        this.hotSpotService.getDirectionWayPointsAndLoadPolyLineOptionsWithRoute(arg, function (result, routeText) {
            console.log('inside promise');
            cb(result, routeText);
        });
    };
    IndoorMapComponent.prototype.OnMapReady = function (args) {
        console.log('Maps ready da...');
        var mapView = args.object;
        this.mapViewObject = mapView;
        if (mapView.nativeView) {
            console.log('in android.. setting indoor');
            // setting indoor mode
            mapView.gMap.setIndoorEnabled(true);
            mapView.gMap.getUiSettings().setIndoorLevelPickerEnabled(true);
            // setting zoom controls
            mapView.gMap.getUiSettings().setZoomControlsEnabled(true);
        }
        this.readParamsAndLoadLocations();
    };
    IndoorMapComponent.prototype.loadLocationsFromCampus = function (campusId, fromLocationId, toLocationId) {
        var _this = this;
        this.locationService.getAllLocations({ campusId: campusId }).subscribe(function (response) {
            var locations = response.items;
            var campus;
            for (var index = 0; index < locations.length; index++) {
                var loc = locations[index];
                if (!campus) {
                    campus = loc.campus;
                    _this.campus = campus;
                }
                if (loc.id === fromLocationId) {
                    _this.p.origin = loc.latitude + ', ' + loc.longitude;
                    _this.p.start = loc;
                }
                if (loc.id === toLocationId) {
                    _this.p.destination = loc.latitude + ', ' + loc.longitude;
                    _this.p.end = loc;
                }
            }
            setTimeout(function () {
                console.log('Applying directions from timeout...');
                _this.applyDirections(_this.mapViewObject);
            }, 1000);
        }, function (error) { return console.log(error); }, function () { return console.log('Locations Loaded'); });
    };
    IndoorMapComponent.prototype.applyDirections = function (mapView) {
        var _this = this;
        // setup marker
        console.log('setting marker on location');
        this.lat = this.campus.latitude ? this.campus.latitude : this.lat;
        this.lng = this.campus.longitude ? this.campus.longitude : this.lng;
        var text = this.campus.name ? this.campus.name : 'Wembley Stadium';
        var marker = this.getMarkerFrom(this.lat, this.lng, text, ' London HA9 0WS, UK');
        mapView.addMarker(marker);
        mapView.updateCamera();
        // this.hotSpotService.getRouteText(this.p, (response) => {
        //   console.log('route text');
        //   this.routeText = response;
        // });
        this.getDirections(this.p, function (result, routeText) {
            try {
                if (result) {
                    console.log('got android and setting.. Polyline');
                    mapView.addPolyline(result);
                    var mark1 = _this.p.start.name ? _this.p.start.name : 'Marker 1';
                    var mark2 = _this.p.end.name ? _this.p.end.name : 'Marker 1';
                    var lat1 = _this.p.start.latitude ? _this.p.start.latitude : 51.555361;
                    var lng1 = _this.p.start.longitude ? _this.p.start.longitude : -0.280656;
                    var lat2 = _this.p.end.latitude ? _this.p.end.latitude : 51.556049;
                    var lng2 = _this.p.end.longitude ? _this.p.end.longitude : -0.278078;
                    var src = _this.getMarkerFrom(lat1, lng1, mark1, 'Some snipp1');
                    var dst = _this.getMarkerFrom(lat2, lng2, mark2, 'Some snipp2');
                    mapView.addMarker(src);
                    mapView.addMarker(dst);
                    console.log('Adding src dst marker');
                    _this.routeText = routeText;
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    };
    IndoorMapComponent.prototype.onMarkerSelect = function (args) { };
    IndoorMapComponent.prototype.onCameraChanged = function (args) { };
    IndoorMapComponent.prototype.getMarkerFrom = function (lat, lng, title, snippet) {
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(lat, lng);
        marker.title = title;
        marker.snippet = snippet;
        marker.userData = { index: 1 };
        return marker;
    };
    IndoorMapComponent.prototype.goBackPage = function () {
        this.routerExtensions.backToPreviousPage();
    };
    return IndoorMapComponent;
}());
__decorate([
    core_1.ViewChild("MapView"),
    __metadata("design:type", core_1.ElementRef)
], IndoorMapComponent.prototype, "mapView", void 0);
IndoorMapComponent = __decorate([
    core_1.Component({
        selector: 'IndoorMap',
        templateUrl: './indoor-map/indoor-map.component.html',
        providers: [indoor_location_data_service_1.IndoorLocationDataService, location_data_service_1.LocationDataService]
    }),
    __metadata("design:paramtypes", [indoor_location_data_service_1.IndoorLocationDataService,
        location_data_service_1.LocationDataService,
        router_1.ActivatedRoute,
        router_2.RouterExtensions])
], IndoorMapComponent);
exports.IndoorMapComponent = IndoorMapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kb29yLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRvb3ItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSwwQ0FBK0M7QUFDL0Msc0RBQStEO0FBQy9ELDBFQUFzRTtBQUV0RSw2RUFBMEU7QUFFMUUsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFJekQseUZBQXFGO0FBQ3JGLDJFQUF3RTtBQUN4RSxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0FBTXJELElBQWEsa0JBQWtCO0lBbUIzQiw0QkFDUyxjQUF5QyxFQUN6QyxlQUFvQyxFQUNwQyxLQUFxQixFQUNyQixnQkFBa0M7UUFIbEMsbUJBQWMsR0FBZCxjQUFjLENBQTJCO1FBQ3pDLG9CQUFlLEdBQWYsZUFBZSxDQUFxQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBcEIzQyxRQUFHLEdBQVcsU0FBUyxDQUFDO1FBQ3hCLFFBQUcsR0FBVyxDQUFDLFFBQVEsQ0FBQztRQUV4QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQVUsQ0FBQyxDQUFDO1FBQ2hCLE1BQUMsR0FBUTtZQUNQLFFBQVEsRUFBRyxxQkFBcUI7WUFDaEMsYUFBYSxFQUFHLHFCQUFxQjtZQUNyQyxNQUFNLEVBQUcsU0FBUztZQUNsQixPQUFPLEVBQUcsRUFBRTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztJQU82QyxDQUFDO0lBRWhELDRDQUFlLEdBQWY7SUFDQSxDQUFDO0lBQ0QscUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCx1REFBMEIsR0FB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Q0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRyxDQUFDLEVBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2pCLENBQUM7SUFDTSx1Q0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUE5SUQsSUE4SUM7QUE3SXVCO0lBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzhCQUFVLGlCQUFVO21EQUFDO0FBRC9CLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxTQUFTLEVBQUUsQ0FBQyx3REFBeUIsRUFBRSwyQ0FBbUIsQ0FBQztLQUM5RCxDQUFDO3FDQXFCMkIsd0RBQXlCO1FBQ3hCLDJDQUFtQjtRQUM3Qix1QkFBYztRQUNILHlCQUFnQjtHQXZCbEMsa0JBQWtCLENBOEk5QjtBQTlJWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxuXHJcbmltcG9ydCB7IFBvbHlsaW5lLCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIjtcclxuXHJcbnZhciBtYXBzTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIik7XHJcblxyXG5pbXBvcnQgeyBMb2NhdGlvbiwgQ2FtcHVzIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnO1xyXG5cclxuaW1wb3J0IHsgSW5kb29yTG9jYXRpb25EYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZG9vci1sb2NhdGlvbi1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYXRpb24tZGF0YS5zZXJ2aWNlJztcclxucmVnaXN0ZXJFbGVtZW50KFwiTWFwVmlld1wiLCAoKSA9PiBtYXBzTW9kdWxlLk1hcFZpZXcpO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnSW5kb29yTWFwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbmRvb3ItbWFwL2luZG9vci1tYXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbSW5kb29yTG9jYXRpb25EYXRhU2VydmljZSwgTG9jYXRpb25EYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEluZG9vck1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChcIk1hcFZpZXdcIikgbWFwVmlldzogRWxlbWVudFJlZjtcclxuXHJcbiAgICBsYXQ6IG51bWJlciA9IDUxLjU1NjAyMTtcclxuICAgIGxuZzogbnVtYmVyID0gLTAuMjc5NTE5O1xyXG4gICAgY2FtcHVzOiBDYW1wdXM7XHJcbiAgICByb3V0ZVRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgem9vbTogbnVtYmVyID0gMTc7XHJcbiAgICBiZWFyaW5nOm51bWJlciA9IDA7XHJcbiAgICB0aWx0Om51bWJlciA9IDA7XHJcbiAgICBwOiBhbnkgPSB7XHJcbiAgICAgIFwib3JpZ2luXCIgOiBcIjUxLjU1NTM2MSwtMC4yODA2NTZcIixcclxuICAgICAgXCJkZXN0aW5hdGlvblwiIDogXCI1MS41NTYwNDksLTAuMjc4MDc4XCIsXHJcbiAgICAgIFwibW9kZVwiIDogXCJ3YWxraW5nXCIsXHJcbiAgICAgIFwic3RhcnRcIiA6IHt9LFxyXG4gICAgICBcImVuZFwiOiB7fVxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgbWFwVmlld09iamVjdCA6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICBwcml2YXRlIGhvdFNwb3RTZXJ2aWNlOiBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlLFxyXG4gICAgIHByaXZhdGUgbG9jYXRpb25TZXJ2aWNlOiBMb2NhdGlvbkRhdGFTZXJ2aWNlLFxyXG4gICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywpIHt9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcmVhZFBhcmFtc0FuZExvYWRMb2NhdGlvbnMoKSB7XHJcbiAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcm9tTG9jYXRpb25JZCA9ICtwYXJhbXMuZnJvbUxvY2F0aW9uSWQ7XHJcbiAgICAgICAgICAgIGxldCB0b0xvY2F0aW9uSWQgPSArcGFyYW1zLnRvTG9jYXRpb25JZDtcclxuICAgICAgICAgICAgbGV0IGNhbXB1c0lkID0gK3BhcmFtcy5jYW1wdXNJZDtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTG9jYXRpb25zRnJvbUNhbXB1cyhjYW1wdXNJZCwgZnJvbUxvY2F0aW9uSWQsIHRvTG9jYXRpb25JZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXREaXJlY3Rpb25zKGFyZywgY2IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2dldHRpbmcgZGlyZWN0aW9ucycsIGFyZyk7XHJcbiAgICAgIHRoaXMuaG90U3BvdFNlcnZpY2UuZ2V0RGlyZWN0aW9uV2F5UG9pbnRzQW5kTG9hZFBvbHlMaW5lT3B0aW9uc1dpdGhSb3V0ZShhcmcsIChyZXN1bHQsIHJvdXRlVGV4dCk9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBwcm9taXNlJyk7XHJcbiAgICAgICAgY2IocmVzdWx0LCByb3V0ZVRleHQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBPbk1hcFJlYWR5KGFyZ3MpIHtcclxuICAgICAgY29uc29sZS5sb2coJ01hcHMgcmVhZHkgZGEuLi4nKTtcclxuICAgICAgdmFyIG1hcFZpZXcgPSBhcmdzLm9iamVjdDtcclxuICAgICAgdGhpcy5tYXBWaWV3T2JqZWN0ID0gbWFwVmlldztcclxuXHJcbiAgICAgIGlmKG1hcFZpZXcubmF0aXZlVmlldykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBhbmRyb2lkLi4gc2V0dGluZyBpbmRvb3InKTtcclxuICAgICAgICAvLyBzZXR0aW5nIGluZG9vciBtb2RlXHJcbiAgICAgICAgbWFwVmlldy5nTWFwLnNldEluZG9vckVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRJbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgLy8gc2V0dGluZyB6b29tIGNvbnRyb2xzXHJcbiAgICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRab29tQ29udHJvbHNFbmFibGVkKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVhZFBhcmFtc0FuZExvYWRMb2NhdGlvbnMoKTtcclxuICAgIH1cclxuICAgIGxvYWRMb2NhdGlvbnNGcm9tQ2FtcHVzKGNhbXB1c0lkLCBmcm9tTG9jYXRpb25JZCwgdG9Mb2NhdGlvbklkKSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLmdldEFsbExvY2F0aW9ucyh7IGNhbXB1c0lkOiBjYW1wdXNJZCB9KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgbGV0IGxvY2F0aW9ucyA9IHJlc3BvbnNlLml0ZW1zO1xyXG4gICAgICAgICAgdmFyIGNhbXB1cztcclxuICAgICAgICAgIGZvcih2YXIgaW5kZXggPTA7IGluZGV4PGxvY2F0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGxvYyA9IGxvY2F0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmKCFjYW1wdXMpIHtcclxuICAgICAgICAgICAgICBjYW1wdXMgPSBsb2MuY2FtcHVzO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2FtcHVzID0gY2FtcHVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGxvYy5pZCA9PT0gZnJvbUxvY2F0aW9uSWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnAub3JpZ2luID0gbG9jLmxhdGl0dWRlICsgJywgJyArIGxvYy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgdGhpcy5wLnN0YXJ0ID0gbG9jO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGxvYy5pZCA9PT0gdG9Mb2NhdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wLmRlc3RpbmF0aW9uID0gbG9jLmxhdGl0dWRlICsgJywgJyArIGxvYy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgdGhpcy5wLmVuZCA9IGxvYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBseWluZyBkaXJlY3Rpb25zIGZyb20gdGltZW91dC4uLicpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5RGlyZWN0aW9ucyh0aGlzLm1hcFZpZXdPYmplY3QpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ0xvY2F0aW9ucyBMb2FkZWQnKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgYXBwbHlEaXJlY3Rpb25zKG1hcFZpZXc6IGFueSkge1xyXG4gICAgICAvLyBzZXR1cCBtYXJrZXJcclxuICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgbWFya2VyIG9uIGxvY2F0aW9uJyk7XHJcbiAgICAgIHRoaXMubGF0ID0gdGhpcy5jYW1wdXMubGF0aXR1ZGUgPyB0aGlzLmNhbXB1cy5sYXRpdHVkZSA6IHRoaXMubGF0O1xyXG4gICAgICB0aGlzLmxuZyA9IHRoaXMuY2FtcHVzLmxvbmdpdHVkZSA/IHRoaXMuY2FtcHVzLmxvbmdpdHVkZSA6IHRoaXMubG5nO1xyXG4gICAgICBsZXQgdGV4dCA9IHRoaXMuY2FtcHVzLm5hbWU/IHRoaXMuY2FtcHVzLm5hbWUgOiAnV2VtYmxleSBTdGFkaXVtJztcclxuICAgICAgdmFyIG1hcmtlciA9IHRoaXMuZ2V0TWFya2VyRnJvbSh0aGlzLmxhdCwgdGhpcy5sbmcsIHRleHQsICcgTG9uZG9uIEhBOSAwV1MsIFVLJyk7XHJcbiAgICAgIG1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICAgIG1hcFZpZXcudXBkYXRlQ2FtZXJhKCk7XHJcbiAgICAgIC8vIHRoaXMuaG90U3BvdFNlcnZpY2UuZ2V0Um91dGVUZXh0KHRoaXMucCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ3JvdXRlIHRleHQnKTtcclxuICAgICAgLy8gICB0aGlzLnJvdXRlVGV4dCA9IHJlc3BvbnNlO1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgdGhpcy5nZXREaXJlY3Rpb25zKHRoaXMucCwgKHJlc3VsdDogUG9seWxpbmUsIHJvdXRlVGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ290IGFuZHJvaWQgYW5kIHNldHRpbmcuLiBQb2x5bGluZScpO1xyXG4gICAgICAgICAgICAgICAgbWFwVmlldy5hZGRQb2x5bGluZShyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtYXJrMSA9IHRoaXMucC5zdGFydC5uYW1lPyB0aGlzLnAuc3RhcnQubmFtZSA6ICdNYXJrZXIgMSc7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFyazIgPSB0aGlzLnAuZW5kLm5hbWU/IHRoaXMucC5lbmQubmFtZTogJ01hcmtlciAxJztcclxuICAgICAgICAgICAgICAgIGxldCBsYXQxID0gdGhpcy5wLnN0YXJ0LmxhdGl0dWRlPyB0aGlzLnAuc3RhcnQubGF0aXR1ZGUgOiA1MS41NTUzNjE7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG5nMSA9IHRoaXMucC5zdGFydC5sb25naXR1ZGU/IHRoaXMucC5zdGFydC5sb25naXR1ZGUgOiAtMC4yODA2NTY7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF0MiA9IHRoaXMucC5lbmQubGF0aXR1ZGU/IHRoaXMucC5lbmQubGF0aXR1ZGUgOiA1MS41NTYwNDk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG5nMiA9IHRoaXMucC5lbmQubG9uZ2l0dWRlPyB0aGlzLnAuZW5kLmxvbmdpdHVkZSA6IC0wLjI3ODA3ODtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3JjID0gdGhpcy5nZXRNYXJrZXJGcm9tKGxhdDEsIGxuZzEsIG1hcmsxLCAnU29tZSBzbmlwcDEnKTtcclxuICAgICAgICAgICAgICAgIGxldCBkc3QgPSB0aGlzLmdldE1hcmtlckZyb20obGF0MiwgbG5nMiwgbWFyazIsJ1NvbWUgc25pcHAyJyk7XHJcbiAgICAgICAgICAgICAgICBtYXBWaWV3LmFkZE1hcmtlcihzcmMpO1xyXG4gICAgICAgICAgICAgICAgbWFwVmlldy5hZGRNYXJrZXIoZHN0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgc3JjIGRzdCBtYXJrZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlVGV4dCA9IHJvdXRlVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25NYXJrZXJTZWxlY3QoYXJncykgeyB9XHJcbiAgICBvbkNhbWVyYUNoYW5nZWQoYXJncykgeyB9XHJcbiAgICBnZXRNYXJrZXJGcm9tKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlciwgdGl0bGU6IHN0cmluZywgc25pcHBldDogc3RyaW5nKSA6IE1hcmtlciB7XHJcbiAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcobGF0LCBsbmcpO1xyXG4gICAgICAgbWFya2VyLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICBtYXJrZXIuc25pcHBldCA9IHNuaXBwZXQ7XHJcbiAgICAgICBtYXJrZXIudXNlckRhdGEgPSB7IGluZGV4IDogMX07XHJcbiAgICAgICByZXR1cm4gbWFya2VyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdvQmFja1BhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==