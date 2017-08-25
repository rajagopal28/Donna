"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var mapsModule = require("nativescript-google-maps-sdk");
element_registry_1.registerElement("MapView2", function () { return mapsModule.MapView; });
var indoor_location_data_service_1 = require("../services/indoor-location-data.service");
var IndoorMapComponent = (function () {
    function IndoorMapComponent(hotSpotService) {
        this.hotSpotService = hotSpotService;
        this.lat = -34.5332878;
        this.lng = 138.9511826;
        this.zoom = 17;
        this.bearing = 0;
        this.tilt = 0;
    }
    IndoorMapComponent.prototype.ngAfterViewInit = function () {
    };
    IndoorMapComponent.prototype.ngOnInit = function () {
    };
    IndoorMapComponent.prototype.getDirections = function (arg, cb) {
        console.log('getting directions', arg);
        this.hotSpotService.getDirectionWayPointsAndLoadPolyLineOptions({}, function (result) {
            console.log('inside promise');
            cb(result);
        });
    };
    IndoorMapComponent.prototype.OnMapReady = function (args) {
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
        var marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(this.lat, this.lng);
        marker.title = "Barossa Valley, Tanunda SA 5352";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        mapView.addMarker(marker);
        this.getDirections({}, function (result) {
            try {
                if (result.android) {
                    console.log('got android and setting..');
                    mapView.gMap.addPolyline(result.android);
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    };
    IndoorMapComponent.prototype.onMarkerSelect = function (args) { };
    IndoorMapComponent.prototype.onCameraChanged = function (args) { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kb29yLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRvb3ItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSwwRUFBc0U7QUFFdEUsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQWxCLENBQWtCLENBQUMsQ0FBQztBQUN0RCx5RkFBcUY7QUFNckYsSUFBYSxrQkFBa0I7SUFRM0IsNEJBQ1MsY0FBeUM7UUFBekMsbUJBQWMsR0FBZCxjQUFjLENBQTJCO1FBTmxELFFBQUcsR0FBVyxDQUFDLFVBQVUsQ0FBQztRQUMxQixRQUFHLEdBQVcsV0FBVyxDQUFDO1FBQzFCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQVUsQ0FBQyxDQUFDO0lBRXFDLENBQUM7SUFFdEQsNENBQWUsR0FBZjtJQUNBLENBQUM7SUFDRCxxQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUNELDBDQUFhLEdBQWIsVUFBYyxHQUFHLEVBQUUsRUFBRTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsMkNBQTJDLENBQUMsRUFBRSxFQUFFLFVBQUMsTUFBTTtZQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLElBQUk7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUxQixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDM0Msc0JBQXNCO1lBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCx3QkFBd0I7WUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsZUFBZTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0UsTUFBTSxDQUFDLEtBQUssR0FBRyxpQ0FBaUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM3QixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFHLENBQUMsRUFBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsVUFBQyxNQUFNO1lBQzVCLElBQUksQ0FBQztnQkFDRCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO29CQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7WUFDTCxDQUFDO1lBQUMsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRiwyQ0FBYyxHQUFkLFVBQWUsSUFBSSxJQUFJLENBQUM7SUFDeEIsNENBQWUsR0FBZixVQUFnQixJQUFJLElBQUksQ0FBQztJQUM3Qix5QkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUF6RHdCO0lBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDOzhCQUFVLGlCQUFVO21EQUFDO0FBRGhDLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxTQUFTLEVBQUUsQ0FBQyx3REFBeUIsQ0FBQztLQUN6QyxDQUFDO3FDQVUyQix3REFBeUI7R0FUekMsa0JBQWtCLENBMEQ5QjtBQTFEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5cclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5cclxudmFyIG1hcHNNb2R1bGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKTtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXcyXCIsICgpID0+IG1hcHNNb2R1bGUuTWFwVmlldyk7XHJcbmltcG9ydCB7IEluZG9vckxvY2F0aW9uRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRvb3ItbG9jYXRpb24tZGF0YS5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ0luZG9vck1hcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5kb29yLW1hcC9pbmRvb3ItbWFwLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0luZG9vckxvY2F0aW9uRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmRvb3JNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoXCJNYXBWaWV3MlwiKSBtYXBWaWV3OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGxhdDogbnVtYmVyID0gLTM0LjUzMzI4Nzg7XHJcbiAgICBsbmc6IG51bWJlciA9IDEzOC45NTExODI2O1xyXG4gICAgem9vbTogbnVtYmVyID0gMTc7XHJcbiAgICBiZWFyaW5nOm51bWJlciA9IDA7XHJcbiAgICB0aWx0Om51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICBwcml2YXRlIGhvdFNwb3RTZXJ2aWNlOiBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuICAgIGdldERpcmVjdGlvbnMoYXJnLCBjYikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBkaXJlY3Rpb25zJywgYXJnKTtcclxuICAgICAgdGhpcy5ob3RTcG90U2VydmljZS5nZXREaXJlY3Rpb25XYXlQb2ludHNBbmRMb2FkUG9seUxpbmVPcHRpb25zKHt9LCAocmVzdWx0KT0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIHByb21pc2UnKTtcclxuICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBPbk1hcFJlYWR5KGFyZ3MpIHtcclxuICAgICAgY29uc29sZS5sb2coJ01hcHMgcmVhZHkgZGEuLi4nKTtcclxuICAgICAgdmFyIG1hcFZpZXcgPSBhcmdzLm9iamVjdDtcclxuXHJcbiAgICAgIGlmKG1hcFZpZXcubmF0aXZlVmlldykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBhbmRyb2lkLi4gc2V0dGluZyBpbmRvb3InKTtcclxuICAgICAgICAvLyBzZXR0aW5nIGluZG9vciBtb2RlXHJcbiAgICAgICAgbWFwVmlldy5nTWFwLnNldEluZG9vckVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRJbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgLy8gc2V0dGluZyB6b29tIGNvbnRyb2xzXHJcbiAgICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRab29tQ29udHJvbHNFbmFibGVkKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXR1cCBtYXJrZXJcclxuICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgbWFya2VyIG9uIGxvY2F0aW9uJyk7XHJcbiAgICAgIHZhciBtYXJrZXIgPSBuZXcgbWFwc01vZHVsZS5NYXJrZXIoKTtcclxuICAgICAgbWFya2VyLnBvc2l0aW9uID0gbWFwc01vZHVsZS5Qb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcodGhpcy5sYXQsIHRoaXMubG5nKTtcclxuICAgICAgbWFya2VyLnRpdGxlID0gXCJCYXJvc3NhIFZhbGxleSwgVGFudW5kYSBTQSA1MzUyXCI7XHJcbiAgICAgIG1hcmtlci5zbmlwcGV0ID0gXCJBdXN0cmFsaWFcIjtcclxuICAgICAgbWFya2VyLnVzZXJEYXRhID0geyBpbmRleCA6IDF9O1xyXG4gICAgICBtYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICB0aGlzLmdldERpcmVjdGlvbnMoe30sIChyZXN1bHQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuYW5kcm9pZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvdCBhbmRyb2lkIGFuZCBzZXR0aW5nLi4nKTtcclxuICAgICAgICAgICAgICAgIG1hcFZpZXcuZ01hcC5hZGRQb2x5bGluZShyZXN1bHQuYW5kcm9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICB9XHJcbiAgICBvbk1hcmtlclNlbGVjdChhcmdzKSB7IH1cclxuICAgIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7IH1cclxufVxyXG4iXX0=