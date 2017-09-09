"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var chores_data_service_1 = require("../services/chores-data.service");
var session_service_1 = require("../services/session-service");
var ViewEventsComponent = (function () {
    function ViewEventsComponent(choresService, sessionService) {
        var _this = this;
        this.choresService = choresService;
        this.sessionService = sessionService;
        this.eventParam = {};
        this.sessionService.authObervable.subscribe(function (authUser) {
            var userName = 'All Users';
            if (authUser && authUser.id) {
                // call with userId
                _this.eventParam['userId'] = authUser.id;
                userName = authUser.firstName + ' ' + authUser.lastName;
            }
            _this.userInfo = userName;
            _this.loadEvents();
        });
    }
    ViewEventsComponent.prototype.loadEvents = function () {
        var _this = this;
        console.log('is logged in..', this.sessionService.isLoggedIn());
        this.choresService.getEvents(this.eventParam).subscribe(function (response) { return _this.events = response.items; }, function (error) { return console.log(error); }, function () { return console.log('C0mpleted!'); });
    };
    ViewEventsComponent.prototype.ngOnInit = function () {
    };
    return ViewEventsComponent;
}());
ViewEventsComponent = __decorate([
    core_1.Component({
        selector: 'ViewEvents',
        templateUrl: './view-events/view-events.component.html',
        providers: [chores_data_service_1.ChoresDataService]
    }),
    __metadata("design:paramtypes", [chores_data_service_1.ChoresDataService, session_service_1.SessionService])
], ViewEventsComponent);
exports.ViewEventsComponent = ViewEventsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1ldmVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlldy1ldmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHVFQUFvRTtBQUNwRSwrREFBNkQ7QUFTN0QsSUFBYSxtQkFBbUI7SUFLOUIsNkJBQW9CLGFBQWdDLEVBQVksY0FBOEI7UUFBOUYsaUJBV0M7UUFYbUIsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQVksbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRjlGLGVBQVUsR0FBUyxFQUFFLENBQUM7UUFHcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNsRCxJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixtQkFBbUI7Z0JBQ25CLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDMUQsQ0FBQztZQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx3Q0FBVSxHQUFWO1FBQUEsaUJBT0M7UUFOQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUNyRCxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBNUIsQ0FBNEIsRUFDeEMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixFQUMzQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMsdUNBQWlCLENBQUM7S0FDL0IsQ0FBQztxQ0FNbUMsdUNBQWlCLEVBQTRCLGdDQUFjO0dBTG5GLG1CQUFtQixDQThCL0I7QUE5Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENob3Jlc0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hvcmVzLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2Vzc2lvbi1zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdWaWV3RXZlbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy1ldmVudHMvdmlldy1ldmVudHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW0Nob3Jlc0RhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlld0V2ZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGV2ZW50czogW0V2ZW50XTtcclxuICBldmVudFBhcmFtIDogYW55ID0ge307XHJcbiAgdXNlckluZm86IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob3Jlc1NlcnZpY2U6IENob3Jlc0RhdGFTZXJ2aWNlLCBwcm90ZWN0ZWQgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNlc3Npb25TZXJ2aWNlLmF1dGhPYmVydmFibGUuc3Vic2NyaWJlKGF1dGhVc2VyID0+IHtcclxuICAgICAgdmFyIHVzZXJOYW1lID0gJ0FsbCBVc2Vycyc7XHJcbiAgICAgIGlmIChhdXRoVXNlciAmJiBhdXRoVXNlci5pZCkge1xyXG4gICAgICAgIC8vIGNhbGwgd2l0aCB1c2VySWRcclxuICAgICAgICB0aGlzLmV2ZW50UGFyYW1bJ3VzZXJJZCddID0gYXV0aFVzZXIuaWQ7XHJcbiAgICAgICAgdXNlck5hbWUgPSBhdXRoVXNlci5maXJzdE5hbWUgKyAnICcgKyBhdXRoVXNlci5sYXN0TmFtZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVzZXJJbmZvID0gdXNlck5hbWU7XHJcbiAgICAgIHRoaXMubG9hZEV2ZW50cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxvYWRFdmVudHMoKXtcclxuICAgIGNvbnNvbGUubG9nKCdpcyBsb2dnZWQgaW4uLicsIHRoaXMuc2Vzc2lvblNlcnZpY2UuaXNMb2dnZWRJbigpKTtcclxuICAgIHRoaXMuY2hvcmVzU2VydmljZS5nZXRFdmVudHModGhpcy5ldmVudFBhcmFtKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlc3BvbnNlID0+IHRoaXMuZXZlbnRzID0gcmVzcG9uc2UuaXRlbXMsXHJcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ0MwbXBsZXRlZCEnKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==