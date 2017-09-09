"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var base_api_data_service_1 = require("./base-api-data.service");
var ChoresDataService = (function (_super) {
    __extends(ChoresDataService, _super);
    function ChoresDataService(http) {
        return _super.call(this, http) || this;
    }
    ChoresDataService.prototype.getAllAnnouncements = function () {
        return _super.prototype.getData.call(this, 'announcements', {});
    };
    ChoresDataService.prototype.addAnnouncement = function (announcement) {
        return _super.prototype.postData.call(this, 'announcements', announcement);
    };
    ChoresDataService.prototype.getEvents = function (params) {
        return _super.prototype.getData.call(this, 'events', params);
    };
    ChoresDataService.prototype.addEvent = function (event) {
        return _super.prototype.postData.call(this, 'events', event);
    };
    return ChoresDataService;
}(base_api_data_service_1.BaseAPIDataService));
ChoresDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ChoresDataService);
exports.ChoresDataService = ChoresDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvcmVzLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNob3Jlcy1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW1DO0FBR25DLGlFQUEyRDtBQUczRCxJQUFhLGlCQUFpQjtJQUFTLHFDQUFrQjtJQUN2RCwyQkFBWSxJQUFTO2VBQ25CLGtCQUFNLElBQUksQ0FBQztJQUNkLENBQUM7SUFDQSwrQ0FBbUIsR0FBbkI7UUFDRSxNQUFNLENBQUMsaUJBQU0sT0FBTyxZQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsMkNBQWUsR0FBZixVQUFnQixZQUEyQjtRQUN6QyxNQUFNLENBQUMsaUJBQU0sUUFBUSxZQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0EscUNBQVMsR0FBVCxVQUFVLE1BQU07UUFDZCxNQUFNLENBQUMsaUJBQU0sT0FBTyxZQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0NBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIsTUFBTSxDQUFDLGlCQUFNLFFBQVEsWUFBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNKLHdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF1QywwQ0FBa0IsR0FnQnhEO0FBaEJZLGlCQUFpQjtJQUQ3QixpQkFBVSxFQUFFO3FDQUVNLFdBQUk7R0FEVixpQkFBaUIsQ0FnQjdCO0FBaEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7IEFubm91bmNlbWVudCwgRXZlbnQgfSBmcm9tICcuLi9tb2RlbHMvYXBwLm1vZGVscyc7XHJcbmltcG9ydCB7QmFzZUFQSURhdGFTZXJ2aWNlfSBmcm9tICAnLi9iYXNlLWFwaS1kYXRhLnNlcnZpY2UnXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaG9yZXNEYXRhU2VydmljZSBleHRlbmRzIEJhc2VBUElEYXRhU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoaHR0cDpIdHRwKSB7XHJcbiAgICBzdXBlcihodHRwKTtcclxuIH1cclxuICBnZXRBbGxBbm5vdW5jZW1lbnRzKCl7XHJcbiAgICByZXR1cm4gc3VwZXIuZ2V0RGF0YSgnYW5ub3VuY2VtZW50cycsIHt9KTtcclxuICB9XHJcbiAgYWRkQW5ub3VuY2VtZW50KGFubm91bmNlbWVudCA6IEFubm91bmNlbWVudCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnBvc3REYXRhKCdhbm5vdW5jZW1lbnRzJywgYW5ub3VuY2VtZW50KTtcclxuICB9XHJcbiAgIGdldEV2ZW50cyhwYXJhbXMpe1xyXG4gICAgIHJldHVybiBzdXBlci5nZXREYXRhKCdldmVudHMnLCBwYXJhbXMpO1xyXG4gICB9XHJcbiAgIGFkZEV2ZW50KGV2ZW50IDogRXZlbnQpIHtcclxuICAgICByZXR1cm4gc3VwZXIucG9zdERhdGEoJ2V2ZW50cycsIGV2ZW50KTtcclxuICAgfVxyXG59XHJcbiJdfQ==