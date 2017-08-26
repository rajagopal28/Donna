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
        this.lat = 12.9051301;
        this.lng = 80.2260227;
        this.routeText = '';
        this.zoom = 17;
        this.bearing = 0;
        this.tilt = 0;
        this.p = {
            "origin": "12.9033372,80.2252904",
            "destination": "12.9094935,80.2250325"
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
        var marker = this.getMarkerFrom(this.lat, this.lng, 'Accenture', 'Shollinganallur');
        mapView.addMarker(marker);
        this.hotSpotService.getRouteText(this.p, function (response) {
            console.log('route text');
            _this.routeText = response;
        });
        this.getDirections(this.p, function (result) {
            try {
                if (result) {
                    console.log('got android and setting.. Polyline');
                    mapView.addPolyline(result);
                    var src = _this.getMarkerFrom(12.9094935, 80.2250325, 'Some place 1', 'Some snipp1');
                    var dst = _this.getMarkerFrom(12.9033372, 80.2252904, 'some place 2', 'Some snipp2');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kb29yLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRvb3ItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSwwRUFBc0U7QUFFdEUsNkVBQTBFO0FBRTFFLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpELGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxVQUFVLENBQUMsT0FBTyxFQUFsQixDQUFrQixDQUFDLENBQUM7QUFDdEQseUZBQXFGO0FBTXJGLElBQWEsa0JBQWtCO0lBYTNCLDRCQUNTLGNBQXlDO1FBQXpDLG1CQUFjLEdBQWQsY0FBYyxDQUEyQjtRQVhsRCxRQUFHLEdBQVcsVUFBVSxDQUFDO1FBQ3pCLFFBQUcsR0FBVyxVQUFVLENBQUM7UUFDekIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsU0FBSSxHQUFVLENBQUMsQ0FBQztRQUNoQixNQUFDLEdBQVE7WUFDUCxRQUFRLEVBQUcsdUJBQXVCO1lBQ2xDLGFBQWEsRUFBRyx1QkFBdUI7U0FDeEMsQ0FBQztJQUVtRCxDQUFDO0lBRXRELDRDQUFlLEdBQWY7SUFDQSxDQUFDO0lBQ0QscUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCwwQ0FBYSxHQUFiLFVBQWMsR0FBRyxFQUFFLEVBQUU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLDJDQUEyQyxDQUFDLEdBQUcsRUFBRSxVQUFDLE1BQU07WUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0ws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LEVBQUUsS0FBSyxFQUFHLENBQUMsRUFBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDakIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQTVFRCxJQTRFQztBQTNFd0I7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQVUsaUJBQVU7bURBQUM7QUFEaEMsa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsd0NBQXdDO1FBQ3JELFNBQVMsRUFBRSxDQUFDLHdEQUF5QixDQUFDO0tBQ3pDLENBQUM7cUNBZTJCLHdEQUF5QjtHQWR6QyxrQkFBa0IsQ0E0RTlCO0FBNUVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XHJcblxyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcblxyXG5pbXBvcnQgeyBQb2x5bGluZSwgTWFya2VyLCBQb3NpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCI7XHJcblxyXG52YXIgbWFwc01vZHVsZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiTWFwVmlldzJcIiwgKCkgPT4gbWFwc01vZHVsZS5NYXBWaWV3KTtcclxuaW1wb3J0IHsgSW5kb29yTG9jYXRpb25EYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZG9vci1sb2NhdGlvbi1kYXRhLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnSW5kb29yTWFwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbmRvb3ItbWFwL2luZG9vci1tYXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbSW5kb29yTG9jYXRpb25EYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEluZG9vck1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChcIk1hcFZpZXcyXCIpIG1hcFZpZXc6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgbGF0OiBudW1iZXIgPSAxMi45MDUxMzAxO1xyXG4gICAgbG5nOiBudW1iZXIgPSA4MC4yMjYwMjI3O1xyXG4gICAgcm91dGVUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIHpvb206IG51bWJlciA9IDE3O1xyXG4gICAgYmVhcmluZzpudW1iZXIgPSAwO1xyXG4gICAgdGlsdDpudW1iZXIgPSAwO1xyXG4gICAgcDogYW55ID0ge1xyXG4gICAgICBcIm9yaWdpblwiIDogXCIxMi45MDMzMzcyLDgwLjIyNTI5MDRcIixcclxuICAgICAgXCJkZXN0aW5hdGlvblwiIDogXCIxMi45MDk0OTM1LDgwLjIyNTAzMjVcIlxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgIHByaXZhdGUgaG90U3BvdFNlcnZpY2U6IEluZG9vckxvY2F0aW9uRGF0YVNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0RGlyZWN0aW9ucyhhcmcsIGNiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIGRpcmVjdGlvbnMnLCBhcmcpO1xyXG4gICAgICB0aGlzLmhvdFNwb3RTZXJ2aWNlLmdldERpcmVjdGlvbldheVBvaW50c0FuZExvYWRQb2x5TGluZU9wdGlvbnMoYXJnLCAocmVzdWx0KT0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIHByb21pc2UnKTtcclxuICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBPbk1hcFJlYWR5KGFyZ3MpIHtcclxuICAgICAgY29uc29sZS5sb2coJ01hcHMgcmVhZHkgZGEuLi4nKTtcclxuICAgICAgdmFyIG1hcFZpZXcgPSBhcmdzLm9iamVjdDtcclxuXHJcbiAgICAgIGlmKG1hcFZpZXcubmF0aXZlVmlldykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBhbmRyb2lkLi4gc2V0dGluZyBpbmRvb3InKTtcclxuICAgICAgICAvLyBzZXR0aW5nIGluZG9vciBtb2RlXHJcbiAgICAgICAgbWFwVmlldy5nTWFwLnNldEluZG9vckVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRJbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgLy8gc2V0dGluZyB6b29tIGNvbnRyb2xzXHJcbiAgICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRab29tQ29udHJvbHNFbmFibGVkKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXR1cCBtYXJrZXJcclxuICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgbWFya2VyIG9uIGxvY2F0aW9uJyk7XHJcbiAgICAgIHZhciBtYXJrZXIgPSB0aGlzLmdldE1hcmtlckZyb20odGhpcy5sYXQsIHRoaXMubG5nLCAnQWNjZW50dXJlJywgJ1Nob2xsaW5nYW5hbGx1cicpO1xyXG4gICAgICBtYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICB0aGlzLmhvdFNwb3RTZXJ2aWNlLmdldFJvdXRlVGV4dCh0aGlzLnAsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZSB0ZXh0Jyk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZVRleHQgPSByZXNwb25zZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZ2V0RGlyZWN0aW9ucyh0aGlzLnAsIChyZXN1bHQ6IFBvbHlsaW5lKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ290IGFuZHJvaWQgYW5kIHNldHRpbmcuLiBQb2x5bGluZScpO1xyXG4gICAgICAgICAgICAgICAgbWFwVmlldy5hZGRQb2x5bGluZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNyYyA9IHRoaXMuZ2V0TWFya2VyRnJvbSgxMi45MDk0OTM1LDgwLjIyNTAzMjUsICdTb21lIHBsYWNlIDEnLCAnU29tZSBzbmlwcDEnKTtcclxuICAgICAgICAgICAgICAgIGxldCBkc3QgPSB0aGlzLmdldE1hcmtlckZyb20oMTIuOTAzMzM3Miw4MC4yMjUyOTA0LCAnc29tZSBwbGFjZSAyJywnU29tZSBzbmlwcDInKTtcclxuICAgICAgICAgICAgICAgIG1hcFZpZXcuYWRkTWFya2VyKHNyYyk7XHJcbiAgICAgICAgICAgICAgICBtYXBWaWV3LmFkZE1hcmtlcihkc3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBzcmMgZHN0IG1hcmtlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbk1hcmtlclNlbGVjdChhcmdzKSB7IH1cclxuICAgIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7IH1cclxuICAgIGdldE1hcmtlckZyb20obGF0OiBudW1iZXIsIGxuZzogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBzbmlwcGV0OiBzdHJpbmcpIDogTWFya2VyIHtcclxuICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXJrZXIoKTtcclxuICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyhsYXQsIGxuZyk7XHJcbiAgICAgICBtYXJrZXIudGl0bGUgPSB0aXRsZTtcclxuICAgICAgIG1hcmtlci5zbmlwcGV0ID0gc25pcHBldDtcclxuICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHsgaW5kZXggOiAxfTtcclxuICAgICAgIHJldHVybiBtYXJrZXI7XHJcbiAgICB9XHJcbn1cclxuIl19