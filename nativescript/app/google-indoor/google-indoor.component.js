"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var geolocation = require("nativescript-geolocation");
var mapsModule = require("nativescript-google-maps-sdk");
element_registry_1.registerElement("MapView3", function () { return mapsModule.MapView; });
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
    core_1.ViewChild("MapView3"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWluZG9vci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtaW5kb29yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwRUFBc0U7QUFFdEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdEQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQWxCLENBQWtCLENBQUMsQ0FBQztBQUt0RCxJQUFhLHFCQUFxQjtJQVNoQztRQU5BLFFBQUcsR0FBVyxVQUFVLENBQUM7UUFDekIsUUFBRyxHQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3pCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQVUsQ0FBQyxDQUFDO0lBRUEsQ0FBQztJQUVqQix3Q0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMzQyxzQkFBc0I7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9ELHdCQUF3QjtZQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxlQUFlO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFDLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUcsQ0FBQyxFQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0YsOENBQWMsR0FBZCxVQUFlLElBQUksSUFBSSxDQUFDO0lBQ3hCLCtDQUFlLEdBQWYsVUFBZ0IsSUFBSSxJQUFJLENBQUM7SUFFM0IsNEJBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBdkN3QjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBVSxpQkFBVTtzREFBQztBQURoQyxxQkFBcUI7SUFKakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDNUQsQ0FBQzs7R0FDVyxxQkFBcUIsQ0F3Q2pDO0FBeENZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcblxudmFyIGdlb2xvY2F0aW9uID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiKTtcbnZhciBtYXBzTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIik7XG5cbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXczXCIsICgpID0+IG1hcHNNb2R1bGUuTWFwVmlldyk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdHb29nbGVJbmRvb3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZ29vZ2xlLWluZG9vci9nb29nbGUtaW5kb29yLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVJbmRvb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwiTWFwVmlldzNcIikgbWFwVmlldzogRWxlbWVudFJlZjtcblxuICBsYXQ6IG51bWJlciA9IDUxLjU1NjE4OTI7XG4gIGxuZzogbnVtYmVyID0gLTAuMjc5OTk3OTtcbiAgem9vbTogbnVtYmVyID0gMTc7XG4gIGJlYXJpbmc6bnVtYmVyID0gMDtcbiAgdGlsdDpudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBtYXBzLi4uJyk7XG4gIH1cblxuICBPbk1hcFJlYWR5KGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZygnTWFwcyByZWFkeSBkYS4uLicpO1xuICAgIHZhciBtYXBWaWV3ID0gYXJncy5vYmplY3Q7XG5cbiAgICBpZihtYXBWaWV3Lm5hdGl2ZVZpZXcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbiBhbmRyb2lkLi4gc2V0dGluZyBpbmRvb3InKTtcbiAgICAgIC8vIHNldHRpbmcgaW5kb29yIG1vZGVcbiAgICAgIG1hcFZpZXcuZ01hcC5zZXRJbmRvb3JFbmFibGVkKHRydWUpO1xuICAgICAgbWFwVmlldy5nTWFwLmdldFVpU2V0dGluZ3MoKS5zZXRJbmRvb3JMZXZlbFBpY2tlckVuYWJsZWQodHJ1ZSk7XG4gICAgICAvLyBzZXR0aW5nIHpvb20gY29udHJvbHNcbiAgICAgIG1hcFZpZXcuZ01hcC5nZXRVaVNldHRpbmdzKCkuc2V0Wm9vbUNvbnRyb2xzRW5hYmxlZCh0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBzZXR1cCBtYXJrZXJcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZyBtYXJrZXIgb24gbG9jYXRpb24nKTtcbiAgICB2YXIgbWFya2VyID0gbmV3IG1hcHNNb2R1bGUuTWFya2VyKCk7XG4gICAgbWFya2VyLnBvc2l0aW9uID0gbWFwc01vZHVsZS5Qb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcodGhpcy5sYXQsIHRoaXMubG5nKTtcbiAgICBtYXJrZXIudGl0bGUgPSBcIldlbWJlbHkgU3RhZGl1bVwiO1xuICAgIG1hcmtlci5zbmlwcGV0ID0gXCJMb25nb25cIjtcbiAgICBtYXJrZXIudXNlckRhdGEgPSB7IGluZGV4IDogMX07XG4gICAgbWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcbiAgIH1cbiAgb25NYXJrZXJTZWxlY3QoYXJncykgeyB9XG4gIG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7IH1cblxufVxuIl19