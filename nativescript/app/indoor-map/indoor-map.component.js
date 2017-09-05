"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var mapsModule = require("nativescript-google-maps-sdk");
element_registry_1.registerElement("MapView2", function () { return mapsModule.MapView; });
var indoor_location_data_service_1 = require("../services/indoor-location-data.service");
var IndoorMapComponent = (function () {
    function IndoorMapComponent(hotSpotService) {
        this.hotSpotService = hotSpotService;
        this.lat = 51.556021;
        this.lng = -0.279519;
        this.routeText = '';
        this.zoom = 17;
        this.bearing = 0;
        this.tilt = 0;
        this.p = {
            "origin": "51.555361,-0.280656",
            "destination": "51.556049,-0.278078",
            "mode": "walking"
        };
    }
    IndoorMapComponent.prototype.ngAfterViewInit = function () {
    };
    IndoorMapComponent.prototype.ngOnInit = function () {
    };
    IndoorMapComponent.prototype.getDirections = function (arg, cb) {
        console.log('getting directions', arg);
        this.hotSpotService.getDirectionWayPointsAndLoadPolyLineOptions(arg, function (result) {
            console.log('inside promise');
            cb(result);
        });
    };
    IndoorMapComponent.prototype.OnMapReady = function (args) {
        var _this = this;
        console.log('Maps ready da...');
        var mapView = args.object;
        if (mapView.nativeView) {
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
        this.getDirections(this.p, function (result) {
            try {
                if (result) {
                    console.log('got android and setting.. Polyline');
                    mapView.addPolyline(result);
                    var src = _this.getMarkerFrom(51.555361, -0.280656, 'Some place 1', 'Some snipp1');
                    var dst = _this.getMarkerFrom(51.556049, -0.278078, 'some place 2', 'Some snipp2');
                    mapView.addMarker(src);
                    mapView.addMarker(dst);
                    console.log('Adding src dst marker');
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
    return IndoorMapComponent;
}());
__decorate([
    core_1.ViewChild("MapView2"),
    __metadata("design:type", core_1.ElementRef)
], IndoorMapComponent.prototype, "mapView", void 0);
IndoorMapComponent = __decorate([
    core_1.Component({
        selector: 'IndoorMap',
        templateUrl: './indoor-map/indoor-map.component.html',
        providers: [indoor_location_data_service_1.IndoorLocationDataService]
    }),
    __metadata("design:paramtypes", [indoor_location_data_service_1.IndoorLocationDataService])
], IndoorMapComponent);
exports.IndoorMapComponent = IndoorMapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kb29yLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRvb3ItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSwwRUFBc0U7QUFFdEUsNkVBQTBFO0FBRTFFLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpELGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxVQUFVLENBQUMsT0FBTyxFQUFsQixDQUFrQixDQUFDLENBQUM7QUFDdEQseUZBQXFGO0FBTXJGLElBQWEsa0JBQWtCO0lBZ0IzQiw0QkFDUyxjQUF5QztRQUF6QyxtQkFBYyxHQUFkLGNBQWMsQ0FBMkI7UUFkbEQsUUFBRyxHQUFXLFNBQVMsQ0FBQztRQUN4QixRQUFHLEdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDeEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsU0FBSSxHQUFVLENBQUMsQ0FBQztRQUNoQixNQUFDLEdBQVE7WUFDUCxRQUFRLEVBQUcscUJBQXFCO1lBQ2hDLGFBQWEsRUFBRyxxQkFBcUI7WUFDckMsTUFBTSxFQUFHLFNBQVM7U0FDbkIsQ0FBQztJQUltRCxDQUFDO0lBRXRELDRDQUFlLEdBQWY7SUFDQSxDQUFDO0lBQ0QscUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCwwQ0FBYSxHQUFiLFVBQWMsR0FBRyxFQUFFLEVBQUU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLDJDQUEyQyxDQUFDLEdBQUcsRUFBRSxVQUFDLE1BQU07WUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQWYsaUJBb0NDO1FBbkNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMzQyxzQkFBc0I7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9ELHdCQUF3QjtZQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxlQUFlO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDOUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQiwyREFBMkQ7UUFDM0QsK0JBQStCO1FBQy9CLCtCQUErQjtRQUMvQixNQUFNO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFVBQUMsTUFBZ0I7WUFDMUMsSUFBSSxDQUFDO2dCQUNELEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO29CQUNsRCxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM1QixJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ2pGLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBQyxhQUFhLENBQUMsQ0FBQztvQkFDaEYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0wsQ0FBQztZQUFDLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsMkNBQWMsR0FBZCxVQUFlLElBQUksSUFBSSxDQUFDO0lBQ3hCLDRDQUFlLEdBQWYsVUFBZ0IsSUFBSSxJQUFJLENBQUM7SUFDekIsMENBQWEsR0FBYixVQUFjLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLE9BQWU7UUFDcEUsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFHLENBQUMsRUFBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDakIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQS9FRCxJQStFQztBQTlFd0I7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQVUsaUJBQVU7bURBQUM7QUFEaEMsa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsd0NBQXdDO1FBQ3JELFNBQVMsRUFBRSxDQUFDLHdEQUF5QixDQUFDO0tBQ3pDLENBQUM7cUNBa0IyQix3REFBeUI7R0FqQnpDLGtCQUFrQixDQStFOUI7QUEvRVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcclxuXHJcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxuXHJcbmltcG9ydCB7IFBvbHlsaW5lLCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIjtcclxuXHJcbnZhciBtYXBzTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIik7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3MlwiLCAoKSA9PiBtYXBzTW9kdWxlLk1hcFZpZXcpO1xyXG5pbXBvcnQgeyBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kb29yLWxvY2F0aW9uLWRhdGEuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdJbmRvb3JNYXAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2luZG9vci1tYXAvaW5kb29yLW1hcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5kb29yTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFwiTWFwVmlldzJcIikgbWFwVmlldzogRWxlbWVudFJlZjtcclxuXHJcbiAgICBsYXQ6IG51bWJlciA9IDUxLjU1NjAyMTtcclxuICAgIGxuZzogbnVtYmVyID0gLTAuMjc5NTE5O1xyXG4gICAgcm91dGVUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIHpvb206IG51bWJlciA9IDE3O1xyXG4gICAgYmVhcmluZzpudW1iZXIgPSAwO1xyXG4gICAgdGlsdDpudW1iZXIgPSAwO1xyXG4gICAgcDogYW55ID0ge1xyXG4gICAgICBcIm9yaWdpblwiIDogXCI1MS41NTUzNjEsLTAuMjgwNjU2XCIsXHJcbiAgICAgIFwiZGVzdGluYXRpb25cIiA6IFwiNTEuNTU2MDQ5LC0wLjI3ODA3OFwiLFxyXG4gICAgICBcIm1vZGVcIiA6IFwid2Fsa2luZ1wiXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICBwcml2YXRlIGhvdFNwb3RTZXJ2aWNlOiBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuICAgIGdldERpcmVjdGlvbnMoYXJnLCBjYikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBkaXJlY3Rpb25zJywgYXJnKTtcclxuICAgICAgdGhpcy5ob3RTcG90U2VydmljZS5nZXREaXJlY3Rpb25XYXlQb2ludHNBbmRMb2FkUG9seUxpbmVPcHRpb25zKGFyZywgKHJlc3VsdCk9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBwcm9taXNlJyk7XHJcbiAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25NYXBSZWFkeShhcmdzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdNYXBzIHJlYWR5IGRhLi4uJyk7XHJcbiAgICAgIHZhciBtYXBWaWV3ID0gYXJncy5vYmplY3Q7XHJcblxyXG4gICAgICBpZihtYXBWaWV3Lm5hdGl2ZVZpZXcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW4gYW5kcm9pZC4uIHNldHRpbmcgaW5kb29yJyk7XHJcbiAgICAgICAgLy8gc2V0dGluZyBpbmRvb3IgbW9kZVxyXG4gICAgICAgIG1hcFZpZXcuZ01hcC5zZXRJbmRvb3JFbmFibGVkKHRydWUpO1xyXG4gICAgICAgIG1hcFZpZXcuZ01hcC5nZXRVaVNldHRpbmdzKCkuc2V0SW5kb29yTGV2ZWxQaWNrZXJFbmFibGVkKHRydWUpO1xyXG4gICAgICAgIC8vIHNldHRpbmcgem9vbSBjb250cm9sc1xyXG4gICAgICAgIG1hcFZpZXcuZ01hcC5nZXRVaVNldHRpbmdzKCkuc2V0Wm9vbUNvbnRyb2xzRW5hYmxlZCh0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2V0dXAgbWFya2VyXHJcbiAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIG1hcmtlciBvbiBsb2NhdGlvbicpO1xyXG4gICAgICB2YXIgbWFya2VyID0gdGhpcy5nZXRNYXJrZXJGcm9tKHRoaXMubGF0LCB0aGlzLmxuZywgJ1dlbWJsZXkgU3RhZGl1bScsICcgTG9uZG9uIEhBOSAwV1MsIFVLJyk7XHJcbiAgICAgIG1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICAgIC8vIHRoaXMuaG90U3BvdFNlcnZpY2UuZ2V0Um91dGVUZXh0KHRoaXMucCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ3JvdXRlIHRleHQnKTtcclxuICAgICAgLy8gICB0aGlzLnJvdXRlVGV4dCA9IHJlc3BvbnNlO1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgdGhpcy5nZXREaXJlY3Rpb25zKHRoaXMucCwgKHJlc3VsdDogUG9seWxpbmUpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnb3QgYW5kcm9pZCBhbmQgc2V0dGluZy4uIFBvbHlsaW5lJyk7XHJcbiAgICAgICAgICAgICAgICBtYXBWaWV3LmFkZFBvbHlsaW5lKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3JjID0gdGhpcy5nZXRNYXJrZXJGcm9tKDUxLjU1NTM2MSwtMC4yODA2NTYsICdTb21lIHBsYWNlIDEnLCAnU29tZSBzbmlwcDEnKTtcclxuICAgICAgICAgICAgICAgIGxldCBkc3QgPSB0aGlzLmdldE1hcmtlckZyb20oNTEuNTU2MDQ5LC0wLjI3ODA3OCwgJ3NvbWUgcGxhY2UgMicsJ1NvbWUgc25pcHAyJyk7XHJcbiAgICAgICAgICAgICAgICBtYXBWaWV3LmFkZE1hcmtlcihzcmMpO1xyXG4gICAgICAgICAgICAgICAgbWFwVmlldy5hZGRNYXJrZXIoZHN0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgc3JjIGRzdCBtYXJrZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25NYXJrZXJTZWxlY3QoYXJncykgeyB9XHJcbiAgICBvbkNhbWVyYUNoYW5nZWQoYXJncykgeyB9XHJcbiAgICBnZXRNYXJrZXJGcm9tKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlciwgdGl0bGU6IHN0cmluZywgc25pcHBldDogc3RyaW5nKSA6IE1hcmtlciB7XHJcbiAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICAgICBtYXJrZXIucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcobGF0LCBsbmcpO1xyXG4gICAgICAgbWFya2VyLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICBtYXJrZXIuc25pcHBldCA9IHNuaXBwZXQ7XHJcbiAgICAgICBtYXJrZXIudXNlckRhdGEgPSB7IGluZGV4IDogMX07XHJcbiAgICAgICByZXR1cm4gbWFya2VyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==