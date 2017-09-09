"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var mapsModule = require("nativescript-google-maps-sdk");
element_registry_1.registerElement("MapView", function () { return mapsModule.MapView; });
var indoor_location_data_service_1 = require("../services/indoor-location-data.service");
var IndoorMapComponent = (function () {
    function IndoorMapComponent(hotSpotService, route, routerExtensions) {
        this.hotSpotService = hotSpotService;
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
            "mode": "walking"
        };
    }
    IndoorMapComponent.prototype.ngAfterViewInit = function () {
    };
    IndoorMapComponent.prototype.ngOnInit = function () {
        this.route.queryParams.subscribe(function (params) {
            console.log(JSON.stringify(params));
        });
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
        providers: [indoor_location_data_service_1.IndoorLocationDataService]
    }),
    __metadata("design:paramtypes", [indoor_location_data_service_1.IndoorLocationDataService,
        router_1.ActivatedRoute,
        router_2.RouterExtensions])
], IndoorMapComponent);
exports.IndoorMapComponent = IndoorMapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kb29yLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRvb3ItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSwwQ0FBK0M7QUFDL0Msc0RBQStEO0FBQy9ELDBFQUFzRTtBQUV0RSw2RUFBMEU7QUFFMUUsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQWxCLENBQWtCLENBQUMsQ0FBQztBQUNyRCx5RkFBcUY7QUFNckYsSUFBYSxrQkFBa0I7SUFnQjNCLDRCQUNTLGNBQXlDLEVBQ3pDLEtBQXFCLEVBQ3JCLGdCQUFrQztRQUZsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBMkI7UUFDekMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWhCM0MsUUFBRyxHQUFXLFNBQVMsQ0FBQztRQUN4QixRQUFHLEdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDeEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsU0FBSSxHQUFVLENBQUMsQ0FBQztRQUNoQixNQUFDLEdBQVE7WUFDUCxRQUFRLEVBQUcscUJBQXFCO1lBQ2hDLGFBQWEsRUFBRyxxQkFBcUI7WUFDckMsTUFBTSxFQUFHLFNBQVM7U0FDbkIsQ0FBQztJQU02QyxDQUFDO0lBRWhELDRDQUFlLEdBQWY7SUFDQSxDQUFDO0lBQ0QscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENB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RSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsdUNBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRyxDQUFDLEVBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2pCLENBQUM7SUFDTSx1Q0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUF0RkQsSUFzRkM7QUFyRnVCO0lBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzhCQUFVLGlCQUFVO21EQUFDO0FBRC9CLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxTQUFTLEVBQUUsQ0FBQyx3REFBeUIsQ0FBQztLQUN6QyxDQUFDO3FDQWtCMkIsd0RBQXlCO1FBQ2xDLHVCQUFjO1FBQ0gseUJBQWdCO0dBbkJsQyxrQkFBa0IsQ0FzRjlCO0FBdEZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5cclxuaW1wb3J0IHsgUG9seWxpbmUsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiO1xyXG5cclxudmFyIG1hcHNNb2R1bGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKTtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXdcIiwgKCkgPT4gbWFwc01vZHVsZS5NYXBWaWV3KTtcclxuaW1wb3J0IHsgSW5kb29yTG9jYXRpb25EYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZG9vci1sb2NhdGlvbi1kYXRhLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnSW5kb29yTWFwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbmRvb3ItbWFwL2luZG9vci1tYXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbSW5kb29yTG9jYXRpb25EYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEluZG9vck1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChcIk1hcFZpZXdcIikgbWFwVmlldzogRWxlbWVudFJlZjtcclxuXHJcbiAgICBsYXQ6IG51bWJlciA9IDUxLjU1NjAyMTtcclxuICAgIGxuZzogbnVtYmVyID0gLTAuMjc5NTE5O1xyXG4gICAgcm91dGVUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIHpvb206IG51bWJlciA9IDE3O1xyXG4gICAgYmVhcmluZzpudW1iZXIgPSAwO1xyXG4gICAgdGlsdDpudW1iZXIgPSAwO1xyXG4gICAgcDogYW55ID0ge1xyXG4gICAgICBcIm9yaWdpblwiIDogXCI1MS41NTUzNjEsLTAuMjgwNjU2XCIsXHJcbiAgICAgIFwiZGVzdGluYXRpb25cIiA6IFwiNTEuNTU2MDQ5LC0wLjI3ODA3OFwiLFxyXG4gICAgICBcIm1vZGVcIiA6IFwid2Fsa2luZ1wiXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICBwcml2YXRlIGhvdFNwb3RTZXJ2aWNlOiBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlLFxyXG4gICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywpIHt9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0RGlyZWN0aW9ucyhhcmcsIGNiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIGRpcmVjdGlvbnMnLCBhcmcpO1xyXG4gICAgICB0aGlzLmhvdFNwb3RTZXJ2aWNlLmdldERpcmVjdGlvbldheVBvaW50c0FuZExvYWRQb2x5TGluZU9wdGlvbnMoYXJnLCAocmVzdWx0KT0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIHByb21pc2UnKTtcclxuICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBPbk1hcFJlYWR5KGFyZ3MpIHtcclxuICAgICAgY29uc29sZS5sb2coJ01hcHMgcmVhZHkgZGEuLi4nKTtcclxuICAgICAgdmFyIG1hcFZpZXcgPSBhcmdzLm9iamVjdDtcclxuXHJcbiAgICAgIGlmKG1hcFZpZXcubmF0aXZlVmlldykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBhbmRyb2lkLi4gc2V0dGluZyBpbmRvb3InKTtcclxuICAgICAgICAvLyBzZXR0aW5nIGluZG9vciBtb2RlXHJcbiAgICAgICAgbWFwVmlldy5nTWFwLnNldEluZG9vckVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRJbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgLy8gc2V0dGluZyB6b29tIGNvbnRyb2xzXHJcbiAgICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRab29tQ29udHJvbHNFbmFibGVkKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXR1cCBtYXJrZXJcclxuICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgbWFya2VyIG9uIGxvY2F0aW9uJyk7XHJcbiAgICAgIHZhciBtYXJrZXIgPSB0aGlzLmdldE1hcmtlckZyb20odGhpcy5sYXQsIHRoaXMubG5nLCAnV2VtYmxleSBTdGFkaXVtJywgJyBMb25kb24gSEE5IDBXUywgVUsnKTtcclxuICAgICAgbWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgICAgLy8gdGhpcy5ob3RTcG90U2VydmljZS5nZXRSb3V0ZVRleHQodGhpcy5wLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZygncm91dGUgdGV4dCcpO1xyXG4gICAgICAvLyAgIHRoaXMucm91dGVUZXh0ID0gcmVzcG9uc2U7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgICB0aGlzLmdldERpcmVjdGlvbnModGhpcy5wLCAocmVzdWx0OiBQb2x5bGluZSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvdCBhbmRyb2lkIGFuZCBzZXR0aW5nLi4gUG9seWxpbmUnKTtcclxuICAgICAgICAgICAgICAgIG1hcFZpZXcuYWRkUG9seWxpbmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGxldCBzcmMgPSB0aGlzLmdldE1hcmtlckZyb20oNTEuNTU1MzYxLC0wLjI4MDY1NiwgJ1NvbWUgcGxhY2UgMScsICdTb21lIHNuaXBwMScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRzdCA9IHRoaXMuZ2V0TWFya2VyRnJvbSg1MS41NTYwNDksLTAuMjc4MDc4LCAnc29tZSBwbGFjZSAyJywnU29tZSBzbmlwcDInKTtcclxuICAgICAgICAgICAgICAgIG1hcFZpZXcuYWRkTWFya2VyKHNyYyk7XHJcbiAgICAgICAgICAgICAgICBtYXBWaWV3LmFkZE1hcmtlcihkc3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBzcmMgZHN0IG1hcmtlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbk1hcmtlclNlbGVjdChhcmdzKSB7IH1cclxuICAgIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7IH1cclxuICAgIGdldE1hcmtlckZyb20obGF0OiBudW1iZXIsIGxuZzogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBzbmlwcGV0OiBzdHJpbmcpIDogTWFya2VyIHtcclxuICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXJrZXIoKTtcclxuICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyhsYXQsIGxuZyk7XHJcbiAgICAgICBtYXJrZXIudGl0bGUgPSB0aXRsZTtcclxuICAgICAgIG1hcmtlci5zbmlwcGV0ID0gc25pcHBldDtcclxuICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHsgaW5kZXggOiAxfTtcclxuICAgICAgIHJldHVybiBtYXJrZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ29CYWNrUGFnZSgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19