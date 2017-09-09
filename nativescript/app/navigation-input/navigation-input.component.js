"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var session_service_1 = require("../services/session-service");
var location_data_service_1 = require("../services/location-data.service");
var app_models_1 = require("../models/app.models");
var choose_location_modal_component_1 = require("../choose-location-modal/choose-location-modal.component");
var NavigationInputComponent = (function () {
    function NavigationInputComponent(modal, vcRef, sessionService, locationService) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.sessionService = sessionService;
        this.locationService = locationService;
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
        location_data_service_1.LocationDataService])
], NavigationInputComponent);
exports.NavigationInputComponent = NavigationInputComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUNuRSxrRUFBdUU7QUFFdkUsK0RBQTZEO0FBQzdELDJFQUF3RTtBQUN4RSxtREFBZ0Q7QUFDaEQsNEdBQXdHO0FBT3hHLElBQWEsd0JBQXdCO0lBT25DLGtDQUFvQixLQUF5QixFQUNsQyxLQUF1QixFQUNyQixjQUE4QixFQUNqQyxlQUFxQztRQUgzQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQXNCO1FBUi9DLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFTekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQVEsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFDRCwyQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2xELEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4RCxFQUFFLENBQUEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzdELEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENB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dCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2Vzc2lvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYXRpb25EYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2F0aW9uLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnO1xyXG5pbXBvcnQgeyBDaG9vc2VMb2NhdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY2hvb3NlLWxvY2F0aW9uLW1vZGFsL2Nob29zZS1sb2NhdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdOYXZpZ2F0aW9uSW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLWlucHV0L25hdmlnYXRpb24taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW0xvY2F0aW9uRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBpc0xvZ2dlZEluIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGxvY2F0aW9ucyA6IEFycmF5PExvY2F0aW9uPjtcclxuICBmcm9tTG9jYXRpb246IExvY2F0aW9uO1xyXG4gIHRvTG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICBwcm90ZWN0ZWQgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvblNlcnZpY2UgOiBMb2NhdGlvbkRhdGFTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuZnJvbUxvY2F0aW9uID0gdGhpcy50b0xvY2F0aW9uID0gbmV3IExvY2F0aW9uKCk7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXNzaW9uU2VydmljZS5hdXRoT2JlcnZhYmxlLnN1YnNjcmliZShhdXRoVXNlciA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRoaXMuc2Vzc2lvblNlcnZpY2UuaXNMb2dnZWRJbigpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdvYnNlcnZpbmcuLi4gbmF2IGlucHV0JyArIHRoaXMuaXNMb2dnZWRJbik7XHJcbiAgICAgIGlmKGF1dGhVc2VyICYmIGF1dGhVc2VyLmxvY2F0aW9uICYmIGF1dGhVc2VyLmxvY2F0aW9uLmNhbXB1cykge1xyXG4gICAgICAgIHRoaXMubG9hZExvY2F0aW9uc0Zyb21DYW1wdXMoYXV0aFVzZXIubG9jYXRpb24uY2FtcHVzLmlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNob29zZUZyb21Mb2NhdGlvbigpIHtcclxuICAgIHRoaXMub3BlbkNob29zZUxvY2F0aW9uTW9kYWxGb3Ioe21vZGFsQ29udGV4dCA6ICdmcm9tTG9jYXRpb24nLCBsb2NhdGlvbnM6IHRoaXMubG9jYXRpb25zfSk7XHJcbiAgfVxyXG4gIG9wZW5DaG9vc2VMb2NhdGlvbk1vZGFsRm9yKGNvbnRleHQ6IGFueSkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcclxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgIH07XHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChDaG9vc2VMb2NhdGlvbk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYocmVzICYmIHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAvLyBjYWxsIGxvZ2luIGFuZCBzZXQgc2Vzc2lvblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ09rIENsaWNrZWQuLi4nKTtcclxuICAgICAgICAgIHRoaXMuY2hvb3NlTG9jYXRpb25Gcm9tUmVzcG9uc2UocmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY2hvb3NlTG9jYXRpb25Gcm9tUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIGxldCBsb2NhdGlvbiA9IHJlc3BvbnNlLmxvY2F0aW9uO1xyXG4gICAgaWYocmVzcG9uc2UubW9kYWxDb250ZXh0ID09PSAnZnJvbUxvY2F0aW9uJykge1xyXG4gICAgICB0aGlzLmZyb21Mb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b0xvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaG9vc2VUb0xvY2F0aW9uKCkge1xyXG4gICAgICB0aGlzLm9wZW5DaG9vc2VMb2NhdGlvbk1vZGFsRm9yKHttb2RhbENvbnRleHQgOiAndG9Mb2NhdGlvbicsIGxvY2F0aW9uczogdGhpcy5sb2NhdGlvbnN9KTtcclxuICB9XHJcbiAgc3VibWl0TmF2aWdhdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdTdWJtaXR0aW5nIE5hdmlnYXRpb24uLi4nKTtcclxuICAgIGNvbnNvbGUubG9nKCdGcm9tTG9jYXRpb246JyArIEpTT04uc3RyaW5naWZ5KHRoaXMuZnJvbUxvY2F0aW9uKSk7XHJcbiAgICBjb25zb2xlLmxvZygnVG9Mb2NhdGlvbjonICsgSlNPTi5zdHJpbmdpZnkodGhpcy50b0xvY2F0aW9uKSk7XHJcbiAgfVxyXG5cclxuICBsb2FkTG9jYXRpb25zRnJvbUNhbXB1cyhjYW1wdXNJZCkge1xyXG4gICAgdGhpcy5sb2NhdGlvblNlcnZpY2UuZ2V0QWxsTG9jYXRpb25zKHsgY2FtcHVzSWQ6IGNhbXB1c0lkIH0pLnN1YnNjcmliZShcclxuICAgICAgcmVzcG9uc2UgPT4gdGhpcy5sb2NhdGlvbnMgPSByZXNwb25zZS5pdGVtcyxcclxuICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnTG9jYXRpb25zIExvYWRlZCcpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19