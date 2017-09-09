"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("@angular/router");
var session_service_1 = require("../services/session-service");
var location_data_service_1 = require("../services/location-data.service");
var app_models_1 = require("../models/app.models");
var choose_location_modal_component_1 = require("../choose-location-modal/choose-location-modal.component");
var NavigationInputComponent = (function () {
    function NavigationInputComponent(modal, vcRef, sessionService, locationService, router) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.sessionService = sessionService;
        this.locationService = locationService;
        this.router = router;
        this.isLoggedIn = false;
        this.fromLocation = this.toLocation = new app_models_1.Location();
    }
    NavigationInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.authObervable.subscribe(function (authUser) {
            _this.isLoggedIn = _this.sessionService.isLoggedIn();
            console.log('observing... nav input' + _this.isLoggedIn);
            if (authUser && authUser.location && authUser.location.campus) {
                _this.loadLocationsFromCampus(authUser.location.campus.id);
            }
        });
    };
    NavigationInputComponent.prototype.chooseFromLocation = function () {
        this.openChooseLocationModalFor({ modalContext: 'fromLocation', locations: this.locations });
    };
    NavigationInputComponent.prototype.openChooseLocationModalFor = function (context) {
        var _this = this;
        var options = {
            context: context,
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(choose_location_modal_component_1.ChooseLocationModalComponent, options).then(function (res) {
            if (res && res.success) {
                // call login and set session
                console.log('Ok Clicked...');
                _this.chooseLocationFromResponse(res);
            }
        });
    };
    NavigationInputComponent.prototype.chooseLocationFromResponse = function (response) {
        var location = response.location;
        if (response.modalContext === 'fromLocation') {
            this.fromLocation = location;
        }
        else {
            this.toLocation = location;
        }
    };
    NavigationInputComponent.prototype.chooseToLocation = function () {
        this.openChooseLocationModalFor({ modalContext: 'toLocation', locations: this.locations });
    };
    NavigationInputComponent.prototype.submitNavigation = function () {
        console.log('Submitting Navigation...');
        console.log('FromLocation:' + JSON.stringify(this.fromLocation));
        console.log('ToLocation:' + JSON.stringify(this.toLocation));
        if (this.fromLocation.name && this.toLocation.name) {
            var navigationExtras = {
                queryParams: {
                    "fromLocationId": this.fromLocation.id,
                    "toLocationId": this.toLocation.id
                }
            };
            this.router.navigate(['navigation'], navigationExtras);
        }
    };
    NavigationInputComponent.prototype.loadLocationsFromCampus = function (campusId) {
        var _this = this;
        this.locationService.getAllLocations({ campusId: campusId }).subscribe(function (response) { return _this.locations = response.items; }, function (error) { return console.log(error); }, function () { return console.log('Locations Loaded'); });
    };
    return NavigationInputComponent;
}());
NavigationInputComponent = __decorate([
    core_1.Component({
        selector: 'NavigationInput',
        templateUrl: './navigation-input/navigation-input.component.html',
        providers: [location_data_service_1.LocationDataService]
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef,
        session_service_1.SessionService,
        location_data_service_1.LocationDataService,
        router_1.Router])
], NavigationInputComponent);
exports.NavigationInputComponent = NavigationInputComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUNuRSxrRUFBdUU7QUFDdkUsMENBQXlEO0FBR3pELCtEQUE2RDtBQUM3RCwyRUFBd0U7QUFDeEUsbURBQWdEO0FBQ2hELDRHQUF3RztBQU94RyxJQUFhLHdCQUF3QjtJQU9uQyxrQ0FBb0IsS0FBeUIsRUFDbkMsS0FBdUIsRUFDckIsY0FBOEIsRUFDaEMsZUFBcUMsRUFDckMsTUFBYztRQUpKLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBc0I7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVR4QixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBVXpCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsMkNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNsRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEQsRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxLQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUQsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxFQUFDLFlBQVksRUFBRyxjQUFjLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFDRCw2REFBMEIsR0FBMUIsVUFBMkIsT0FBWTtRQUF2QyxpQkFhQztRQVpDLElBQUksT0FBTyxHQUFHO1lBQ1YsT0FBTyxFQUFFLE9BQU87WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDhEQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDaEUsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0Qiw2QkFBNkI7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsNkRBQTBCLEdBQTFCLFVBQTJCLFFBQVE7UUFDakMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsWUFBWSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFDL0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxtREFBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBQyxZQUFZLEVBQUcsWUFBWSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBQ0QsbURBQWdCLEdBQWhCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM3RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxnQkFBZ0IsR0FBcUI7Z0JBQ3ZDLFdBQVcsRUFBRztvQkFDTixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ3RDLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7aUJBQzNDO2FBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBEQUF1QixHQUF2QixVQUF3QixRQUFRO1FBQWhDLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3BFLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUEvQixDQUErQixFQUMzQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLEVBQzNCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQS9CLENBQStCLENBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUgsK0JBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDO0FBMUVZLHdCQUF3QjtJQUxwQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsb0RBQW9EO1FBQ2pFLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO0tBQ2pDLENBQUM7cUNBUTJCLGlDQUFrQjtRQUM1Qix1QkFBZ0I7UUFDTCxnQ0FBYztRQUNkLDJDQUFtQjtRQUM3QixlQUFNO0dBWGIsd0JBQXdCLENBMEVwQztBQTFFWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Nlc3Npb24tc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhdGlvbi1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJy4uL21vZGVscy9hcHAubW9kZWxzJztcclxuaW1wb3J0IHsgQ2hvb3NlTG9jYXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2Nob29zZS1sb2NhdGlvbi1tb2RhbC9jaG9vc2UtbG9jYXRpb24tbW9kYWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnTmF2aWdhdGlvbklucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi1pbnB1dC9uYXZpZ2F0aW9uLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtMb2NhdGlvbkRhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgaXNMb2dnZWRJbiA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBsb2NhdGlvbnMgOiBBcnJheTxMb2NhdGlvbj47XHJcbiAgZnJvbUxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICB0b0xvY2F0aW9uOiBMb2NhdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByb3RlY3RlZCBzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uU2VydmljZSA6IExvY2F0aW9uRGF0YVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgIHRoaXMuZnJvbUxvY2F0aW9uID0gdGhpcy50b0xvY2F0aW9uID0gbmV3IExvY2F0aW9uKCk7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXNzaW9uU2VydmljZS5hdXRoT2JlcnZhYmxlLnN1YnNjcmliZShhdXRoVXNlciA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuaXNMb2dnZWRJbigpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdvYnNlcnZpbmcuLi4gbmF2IGlucHV0JyArIHRoaXMuaXNMb2dnZWRJbik7XHJcbiAgICAgIGlmKGF1dGhVc2VyICYmIGF1dGhVc2VyLmxvY2F0aW9uICYmIGF1dGhVc2VyLmxvY2F0aW9uLmNhbXB1cykge1xyXG4gICAgICAgIHRoaXMubG9hZExvY2F0aW9uc0Zyb21DYW1wdXMoYXV0aFVzZXIubG9jYXRpb24uY2FtcHVzLmlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNob29zZUZyb21Mb2NhdGlvbigpIHtcclxuICAgIHRoaXMub3BlbkNob29zZUxvY2F0aW9uTW9kYWxGb3Ioe21vZGFsQ29udGV4dCA6ICdmcm9tTG9jYXRpb24nLCBsb2NhdGlvbnM6IHRoaXMubG9jYXRpb25zfSk7XHJcbiAgfVxyXG4gIG9wZW5DaG9vc2VMb2NhdGlvbk1vZGFsRm9yKGNvbnRleHQ6IGFueSkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcclxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgIH07XHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChDaG9vc2VMb2NhdGlvbk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYocmVzICYmIHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAvLyBjYWxsIGxvZ2luIGFuZCBzZXQgc2Vzc2lvblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ09rIENsaWNrZWQuLi4nKTtcclxuICAgICAgICAgIHRoaXMuY2hvb3NlTG9jYXRpb25Gcm9tUmVzcG9uc2UocmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY2hvb3NlTG9jYXRpb25Gcm9tUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIGxldCBsb2NhdGlvbiA9IHJlc3BvbnNlLmxvY2F0aW9uO1xyXG4gICAgaWYocmVzcG9uc2UubW9kYWxDb250ZXh0ID09PSAnZnJvbUxvY2F0aW9uJykge1xyXG4gICAgICB0aGlzLmZyb21Mb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b0xvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaG9vc2VUb0xvY2F0aW9uKCkge1xyXG4gICAgICB0aGlzLm9wZW5DaG9vc2VMb2NhdGlvbk1vZGFsRm9yKHttb2RhbENvbnRleHQgOiAndG9Mb2NhdGlvbicsIGxvY2F0aW9uczogdGhpcy5sb2NhdGlvbnN9KTtcclxuICB9XHJcbiAgc3VibWl0TmF2aWdhdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdTdWJtaXR0aW5nIE5hdmlnYXRpb24uLi4nKTtcclxuICAgIGNvbnNvbGUubG9nKCdGcm9tTG9jYXRpb246JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuZnJvbUxvY2F0aW9uKSk7XHJcbiAgICBjb25zb2xlLmxvZygnVG9Mb2NhdGlvbjonICsgSlNPTi5zdHJpbmdpZnkodGhpcy50b0xvY2F0aW9uKSk7XHJcbiAgICBpZih0aGlzLmZyb21Mb2NhdGlvbi5uYW1lICYmIHRoaXMudG9Mb2NhdGlvbi5uYW1lKSB7XHJcbiAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zIDoge1xyXG4gICAgICAgICAgICAgICAgXCJmcm9tTG9jYXRpb25JZFwiOiB0aGlzLmZyb21Mb2NhdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgIFwidG9Mb2NhdGlvbklkXCI6IHRoaXMudG9Mb2NhdGlvbi5pZFxyXG4gICAgICB9fTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZExvY2F0aW9uc0Zyb21DYW1wdXMoY2FtcHVzSWQpIHtcclxuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLmdldEFsbExvY2F0aW9ucyh7IGNhbXB1c0lkOiBjYW1wdXNJZCB9KS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlc3BvbnNlID0+IHRoaXMubG9jYXRpb25zID0gcmVzcG9uc2UuaXRlbXMsXHJcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ0xvY2F0aW9ucyBMb2FkZWQnKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==