"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var geolocation = require("nativescript-geolocation");
var mapsModule = require("nativescript-google-maps-sdk");
element_registry_1.registerElement("MapView", function () { return mapsModule.MapView; });
var GoogleIndoorComponent = (function () {
    function GoogleIndoorComponent() {
        this.lat = 51.5561892;
        this.lng = -0.2799979;
        this.zoom = 17;
        this.bearing = 0;
        this.tilt = 0;
    }
    GoogleIndoorComponent.prototype.ngOnInit = function () {
        console.log('inside maps...');
    };
    GoogleIndoorComponent.prototype.OnMapReady = function (args) {
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
        marker.title = "Wembely Stadium";
        marker.snippet = "Longon";
        marker.userData = { index: 1 };
        mapView.addMarker(marker);
    };
    GoogleIndoorComponent.prototype.onMarkerSelect = function (args) { };
    GoogleIndoorComponent.prototype.onCameraChanged = function (args) { };
    return GoogleIndoorComponent;
}());
__decorate([
    core_1.ViewChild("MapView"),
    __metadata("design:type", core_1.ElementRef)
], GoogleIndoorComponent.prototype, "mapView", void 0);
GoogleIndoorComponent = __decorate([
    core_1.Component({
        selector: 'GoogleIndoor',
        templateUrl: './google-indoor/google-indoor.component.html'
    }),
    __metadata("design:paramtypes", [])
], GoogleIndoorComponent);
exports.GoogleIndoorComponent = GoogleIndoorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWluZG9vci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtaW5kb29yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwRUFBc0U7QUFFdEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdEQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQWxCLENBQWtCLENBQUMsQ0FBQztBQUtyRCxJQUFhLHFCQUFxQjtJQVNoQztRQU5BLFFBQUcsR0FBVyxVQUFVLENBQUM7UUFDekIsUUFBRyxHQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3pCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQVUsQ0FBQyxDQUFDO0lBRUEsQ0FBQztJQUVqQix3Q0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMzQyxzQkFBc0I7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9ELHdCQUF3QjtZQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxlQUFlO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFDLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUcsQ0FBQyxFQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0YsOENBQWMsR0FBZCxVQUFlLElBQUksSUFBSSxDQUFDO0lBQ3hCLCtDQUFlLEdBQWYsVUFBZ0IsSUFBSSxJQUFJLENBQUM7SUFFM0IsNEJBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBdkN1QjtJQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQzs4QkFBVSxpQkFBVTtzREFBQztBQUQvQixxQkFBcUI7SUFKakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDNUQsQ0FBQzs7R0FDVyxxQkFBcUIsQ0F3Q2pDO0FBeENZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknOyBcclxuXHJcbnZhciBnZW9sb2NhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIik7XHJcbnZhciBtYXBzTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIik7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3XCIsICgpID0+IG1hcHNNb2R1bGUuTWFwVmlldyk7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnR29vZ2xlSW5kb29yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ29vZ2xlLWluZG9vci9nb29nbGUtaW5kb29yLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlSW5kb29yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFwiTWFwVmlld1wiKSBtYXBWaWV3OiBFbGVtZW50UmVmO1xyXG5cclxuICBsYXQ6IG51bWJlciA9IDUxLjU1NjE4OTI7XHJcbiAgbG5nOiBudW1iZXIgPSAtMC4yNzk5OTc5O1xyXG4gIHpvb206IG51bWJlciA9IDE3O1xyXG4gIGJlYXJpbmc6bnVtYmVyID0gMDtcclxuICB0aWx0Om51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBtYXBzLi4uJyk7XHJcbiAgfVxyXG4gIFxyXG4gIE9uTWFwUmVhZHkoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coJ01hcHMgcmVhZHkgZGEuLi4nKTtcclxuICAgIHZhciBtYXBWaWV3ID0gYXJncy5vYmplY3Q7XHJcblxyXG4gICAgaWYobWFwVmlldy5uYXRpdmVWaWV3KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbiBhbmRyb2lkLi4gc2V0dGluZyBpbmRvb3InKTtcclxuICAgICAgLy8gc2V0dGluZyBpbmRvb3IgbW9kZVxyXG4gICAgICBtYXBWaWV3LmdNYXAuc2V0SW5kb29yRW5hYmxlZCh0cnVlKTtcclxuICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRJbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgIC8vIHNldHRpbmcgem9vbSBjb250cm9sc1xyXG4gICAgICBtYXBWaWV3LmdNYXAuZ2V0VWlTZXR0aW5ncygpLnNldFpvb21Db250cm9sc0VuYWJsZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0dXAgbWFya2VyXHJcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZyBtYXJrZXIgb24gbG9jYXRpb24nKTtcclxuICAgIHZhciBtYXJrZXIgPSBuZXcgbWFwc01vZHVsZS5NYXJrZXIoKTtcclxuICAgIG1hcmtlci5wb3NpdGlvbiA9IG1hcHNNb2R1bGUuUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHRoaXMubGF0LCB0aGlzLmxuZyk7XHJcbiAgICBtYXJrZXIudGl0bGUgPSBcIldlbWJlbHkgU3RhZGl1bVwiO1xyXG4gICAgbWFya2VyLnNuaXBwZXQgPSBcIkxvbmdvblwiO1xyXG4gICAgbWFya2VyLnVzZXJEYXRhID0geyBpbmRleCA6IDF9O1xyXG4gICAgbWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgfVxyXG4gIG9uTWFya2VyU2VsZWN0KGFyZ3MpIHsgfVxyXG4gIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7IH1cclxuXHJcbn1cclxuIl19