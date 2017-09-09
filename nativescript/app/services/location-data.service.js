"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var base_api_data_service_1 = require("./base-api-data.service");
var LocationDataService = (function (_super) {
    __extends(LocationDataService, _super);
    function LocationDataService(http) {
        return _super.call(this, http) || this;
    }
    LocationDataService.prototype.getAllLocations = function (params) {
        return _super.prototype.getData.call(this, 'locations', params);
    };
    LocationDataService.prototype.addLocation = function (location) {
        return _super.prototype.postData.call(this, 'locations', location);
    };
    LocationDataService.prototype.deleteLocation = function (location) {
        return _super.prototype.deleteData.call(this, 'locations/' + location.id, {});
    };
    LocationDataService.prototype.getAllCampus = function () {
        return _super.prototype.getData.call(this, 'campus', {});
    };
    LocationDataService.prototype.addCampus = function (campus) {
        return _super.prototype.postData.call(this, 'campus', campus);
    };
    LocationDataService.prototype.deleteCampus = function (campus) {
        return _super.prototype.deleteData.call(this, 'campus/' + campus.id, {});
    };
    return LocationDataService;
}(base_api_data_service_1.BaseAPIDataService));
LocationDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LocationDataService);
exports.LocationDataService = LocationDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24tZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUlyQyxpRUFBNkQ7QUFHN0QsSUFBYSxtQkFBbUI7SUFBUyx1Q0FBa0I7SUFFekQsNkJBQVksSUFBVTtlQUNwQixrQkFBTSxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0QsNkNBQWUsR0FBZixVQUFnQixNQUFNO1FBQ3BCLE1BQU0sQ0FBQyxpQkFBTSxPQUFPLFlBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCx5Q0FBVyxHQUFYLFVBQVksUUFBa0I7UUFDNUIsTUFBTSxDQUFDLGlCQUFNLFFBQVEsWUFBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELDRDQUFjLEdBQWQsVUFBZSxRQUFrQjtRQUMvQixNQUFNLENBQUMsaUJBQU0sVUFBVSxZQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCwwQ0FBWSxHQUFaO1FBQ0UsTUFBTSxDQUFDLGlCQUFNLE9BQU8sWUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELHVDQUFTLEdBQVQsVUFBVSxNQUFjO1FBQ3RCLE1BQU0sQ0FBQyxpQkFBTSxRQUFRLFlBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsTUFBYztRQUN6QixNQUFNLENBQUMsaUJBQU0sVUFBVSxZQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUF2QkQsQ0FBeUMsMENBQWtCLEdBdUIxRDtBQXZCWSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FHTyxXQUFJO0dBRlgsbUJBQW1CLENBdUIvQjtBQXZCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7IExvY2F0aW9uLCBDYW1wdXMgfSBmcm9tICcuLi9tb2RlbHMvYXBwLm1vZGVscyc7XHJcblxyXG5pbXBvcnQgeyBCYXNlQVBJRGF0YVNlcnZpY2UgfSBmcm9tICcuL2Jhc2UtYXBpLWRhdGEuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkRhdGFTZXJ2aWNlIGV4dGVuZHMgQmFzZUFQSURhdGFTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgc3VwZXIoaHR0cCk7XHJcbiAgfVxyXG4gIGdldEFsbExvY2F0aW9ucyhwYXJhbXMpIHtcclxuICAgIHJldHVybiBzdXBlci5nZXREYXRhKCdsb2NhdGlvbnMnLCBwYXJhbXMpO1xyXG4gIH1cclxuICBhZGRMb2NhdGlvbihsb2NhdGlvbjogTG9jYXRpb24pIHtcclxuICAgIHJldHVybiBzdXBlci5wb3N0RGF0YSgnbG9jYXRpb25zJywgbG9jYXRpb24pO1xyXG4gIH1cclxuICBkZWxldGVMb2NhdGlvbihsb2NhdGlvbjogTG9jYXRpb24pIHtcclxuICAgIHJldHVybiBzdXBlci5kZWxldGVEYXRhKCdsb2NhdGlvbnMvJyArIGxvY2F0aW9uLmlkLCB7fSk7XHJcbiAgfVxyXG4gIGdldEFsbENhbXB1cygpIHtcclxuICAgIHJldHVybiBzdXBlci5nZXREYXRhKCdjYW1wdXMnLCB7fSk7XHJcbiAgfVxyXG4gIGFkZENhbXB1cyhjYW1wdXM6IENhbXB1cykge1xyXG4gICAgcmV0dXJuIHN1cGVyLnBvc3REYXRhKCdjYW1wdXMnLCBjYW1wdXMpO1xyXG4gIH1cclxuICBkZWxldGVDYW1wdXMoY2FtcHVzOiBDYW1wdXMpIHtcclxuICAgIHJldHVybiBzdXBlci5kZWxldGVEYXRhKCdjYW1wdXMvJyArIGNhbXB1cy5pZCwge30pO1xyXG4gIH1cclxufVxyXG4iXX0=