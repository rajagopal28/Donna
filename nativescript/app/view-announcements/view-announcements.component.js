"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var chores_data_service_1 = require("../services/chores-data.service");
var ViewAnnouncementsComponent = (function () {
    function ViewAnnouncementsComponent(choresService) {
        var _this = this;
        this.choresService = choresService;
        this.choresService.getAllAnnouncements().subscribe(function (response) {
            _this.announcements = response.items;
            console.log('Length = ', _this.announcements.length);
        }, function (error) { return console.log(error); }, function () { return console.log('C0mpleted!'); });
    }
    ViewAnnouncementsComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
    };
    return ViewAnnouncementsComponent;
}());
ViewAnnouncementsComponent = __decorate([
    core_1.Component({
        selector: 'ViewAnnouncements',
        templateUrl: './view-announcements/view-announcements.component.html',
        providers: [chores_data_service_1.ChoresDataService]
    }),
    __metadata("design:paramtypes", [chores_data_service_1.ChoresDataService])
], ViewAnnouncementsComponent);
exports.ViewAnnouncementsComponent = ViewAnnouncementsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbm5vdW5jZW1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctYW5ub3VuY2VtZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsdUVBQWtFO0FBU2xFLElBQWEsMEJBQTBCO0lBR3JDLG9DQUFvQixhQUFnQztRQUFwRCxpQkFRSztRQVJlLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUyxDQUNoRCxVQUFBLFFBQVE7WUFDTixLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixFQUMzQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztJQUFBLENBQUM7SUFFRSw4Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFSCxpQ0FBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksMEJBQTBCO0lBTHRDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFdBQVcsRUFBRSx3REFBd0Q7UUFDckUsU0FBUyxFQUFFLENBQUMsdUNBQWlCLENBQUM7S0FDL0IsQ0FBQztxQ0FJbUMsdUNBQWlCO0dBSHpDLDBCQUEwQixDQWlCdEM7QUFqQlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDaG9yZXNEYXRhU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvY2hvcmVzLWRhdGEuc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fubm91bmNlbWVudH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1ZpZXdBbm5vdW5jZW1lbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy1hbm5vdW5jZW1lbnRzL3ZpZXctYW5ub3VuY2VtZW50cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbQ2hvcmVzRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3QW5ub3VuY2VtZW50c0NvbXBvbmVudHtcclxuXHJcbiAgcHVibGljIGFubm91bmNlbWVudHMgOiBbQW5ub3VuY2VtZW50XTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob3Jlc1NlcnZpY2U6IENob3Jlc0RhdGFTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmNob3Jlc1NlcnZpY2UuZ2V0QWxsQW5ub3VuY2VtZW50cygpLnN1YnNjcmliZShcclxuICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuYW5ub3VuY2VtZW50cyA9IHJlc3BvbnNlLml0ZW1zO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMZW5ndGggPSAnLCB0aGlzLmFubm91bmNlbWVudHMubGVuZ3RoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnQzBtcGxldGVkIScpXHJcbiAgICApO31cclxuXHJcbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==