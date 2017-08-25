"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var mapsModule = require("nativescript-google-maps-sdk");
var URL = 'https://maps.googleapis.com/maps/api/directions/json';
var DIRECTIONS_API_KEY = 'AIzaSyBAom4QZrTR7XbA6TdxLRpzDZMv5fhaaMg';
var IndoorLocationDataService = (function () {
    function IndoorLocationDataService(http) {
        this.http = http;
    }
    IndoorLocationDataService.prototype.getLevels = function () {
        return [-1, 0, 1, 2, 3, 7];
    };
    IndoorLocationDataService.prototype.getPolyLineFromWayPoints = function (waypoints) {
        var _this = this;
        var points = new Array();
        waypoints.forEach(function (point) {
            points.push(_this.getPolyLineForWayPoint(point));
        });
        return points;
    };
    IndoorLocationDataService.prototype.getPolyLineForWayPoint = function (waypoint) {
        return new mapsModule.Position.positionFromLatLng(waypoint.lat, waypoint.lng);
    };
    IndoorLocationDataService.prototype.getDirectionWayPointsAndLoadPolyLineOptions = function (params, cb) {
        var _this = this;
        var p = {
            "origin": "Adelaide,SA",
            "destination": "Adelaide,SA",
            "waypoints": "optimize:true|Barossa+Valley,SA|Clare,SA|Connawarra,SA|McLaren+Vale,SA",
            "key": DIRECTIONS_API_KEY
        };
        console.log('sending params to api...');
        this.getDirectionWayPoints(p, function (response) {
            var routes = response.routes;
            if (routes && routes.length > 0) {
                console.log('got routes', routes.length);
                var decodedPathList = _this.decodePathLineString(routes[0].overview_polyline.points);
                console.log('decoded path list =', decodedPathList.length);
                var polyLineLocations = _this.getPolyLineFromWayPoints(decodedPathList);
                console.log('got locations from string=', polyLineLocations.length);
                // convert polyLineLocations to polyLine
                var polyLineOptions = _this.getPolylineOptionsFromPostions(polyLineLocations);
                console.log('received polyline options');
                cb(polyLineOptions);
            }
        });
    };
    IndoorLocationDataService.prototype.getPolylineOptionsFromPostions = function (polylinePositions) {
        var polyLineOptions = new mapsModule.Polyline();
        console.log('android enna??', polyLineOptions);
        console.log('creating polyling options, length=', polylinePositions.length);
        polyLineOptions.width = 25;
        polyLineOptions.visible = true;
        polyLineOptions.geodesic = true;
        polyLineOptions._points = polylinePositions;
        console.log('before setting polyling options, adding points');
        try {
            polyLineOptions.loadPoints();
        }
        catch (e) {
            console.error(e);
        }
        console.log('after setting polyling options, adding points');
        return polyLineOptions;
    };
    IndoorLocationDataService.prototype.getDirectionWayPoints = function (params, cb) {
        this.getDirectionwayPointsAPI(params)
            .subscribe(function (result) {
            cb(result);
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    IndoorLocationDataService.prototype.decodePathLineString = function (encodedPath) {
        var len = encodedPath.length;
        var index = 0;
        var lat = 0;
        var lng = 0;
        // For speed we preallocate to an upper bound on the final length, then
        // truncate the array before returning.
        var path = [];
        while (index < len) {
            var result = 1;
            var shift = 0;
            var b;
            do {
                b = encodedPath.charAt(index++) - 63 - 1;
                result += b << shift;
                shift += 5;
            } while (b >= 0x1f);
            lat += (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            result = 1;
            shift = 0;
            do {
                b = encodedPath.charAt(index++) - 63 - 1;
                result += b << shift;
                shift += 5;
            } while (b >= 0x1f);
            lng += (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            path.push({ lat: lat * 1e-5, lng: lng * 1e-5 });
        }
        return path;
    };
    IndoorLocationDataService.prototype.getDirectionwayPointsAPI = function (params) {
        var paramString = this.getStringFromParams(params);
        return this.http.get(URL + paramString)
            .map(function (result) { return result.json(); });
    };
    IndoorLocationDataService.prototype.getStringFromParams = function (params) {
        var paramString = '?';
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if (paramString !== '?') {
                    paramString += '&';
                }
                paramString += key + '=' + params[key];
            }
        }
        return paramString;
    };
    return IndoorLocationDataService;
}());
IndoorLocationDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], IndoorLocationDataService);
exports.IndoorLocationDataService = IndoorLocationDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kb29yLWxvY2F0aW9uLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZG9vci1sb2NhdGlvbi1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLG1CQUFpQjtBQUlqQixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUd6RCxJQUFNLEdBQUcsR0FBWSxzREFBc0QsQ0FBQztBQUM1RSxJQUFNLGtCQUFrQixHQUFZLHlDQUF5QyxDQUFDO0FBRzlFLElBQWEseUJBQXlCO0lBRXBDLG1DQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsNkNBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsNERBQXdCLEdBQXhCLFVBQXlCLFNBQVM7UUFBbEMsaUJBTUM7UUFMQyxJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQ25DLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRCwwREFBc0IsR0FBdEIsVUFBdUIsUUFBUTtRQUM3QixNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDRCwrRUFBMkMsR0FBM0MsVUFBNEMsTUFBTSxFQUFFLEVB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QXlCLENBbUhyQztBQW5IWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBIb3RTcG90IH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnO1xyXG5cclxudmFyIG1hcHNNb2R1bGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKTtcclxuXHJcblxyXG5jb25zdCBVUkwgOiBzdHJpbmcgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2RpcmVjdGlvbnMvanNvbic7XHJcbmNvbnN0IERJUkVDVElPTlNfQVBJX0tFWSA6IHN0cmluZyA9ICdBSXphU3lCQW9tNFFaclRSN1hiQTZUZHhMUnB6RFpNdjVmaGFhTWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW5kb29yTG9jYXRpb25EYXRhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gIGdldExldmVscygpIDogW251bWJlcl0ge1xyXG4gICAgcmV0dXJuIFstMSwgMCwgMSwgMiwgMywgN11cclxuICB9XHJcbiAgZ2V0UG9seUxpbmVGcm9tV2F5UG9pbnRzKHdheXBvaW50cykgOiBBcnJheTxQb3NpdGlvbj57XHJcbiAgICBsZXQgcG9pbnRzID0gbmV3IEFycmF5PFBvc2l0aW9uPigpO1xyXG4gICAgd2F5cG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XHJcbiAgICAgIHBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seUxpbmVGb3JXYXlQb2ludChwb2ludCkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcG9pbnRzO1xyXG4gIH1cclxuICBnZXRQb2x5TGluZUZvcldheVBvaW50KHdheXBvaW50KSB7XHJcbiAgICByZXR1cm4gbmV3IG1hcHNNb2R1bGUuUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHdheXBvaW50LmxhdCwgd2F5cG9pbnQubG5nKTtcclxuICB9XHJcbiAgZ2V0RGlyZWN0aW9uV2F5UG9pbnRzQW5kTG9hZFBvbHlMaW5lT3B0aW9ucyhwYXJhbXMsIGNiKSB7XHJcbiAgICB2YXIgcCA9IHtcclxuICAgIFx0XCJvcmlnaW5cIiA6IFwiQWRlbGFpZGUsU0FcIixcclxuICAgIFx0XCJkZXN0aW5hdGlvblwiIDogXCJBZGVsYWlkZSxTQVwiLFxyXG4gICAgXHRcIndheXBvaW50c1wiIDogXCJvcHRpbWl6ZTp0cnVlfEJhcm9zc2ErVmFsbGV5LFNBfENsYXJlLFNBfENvbm5hd2FycmEsU0F8TWNMYXJlbitWYWxlLFNBXCIsXHJcbiAgICBcdFwia2V5XCIgOiBESVJFQ1RJT05TX0FQSV9LRVlcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZygnc2VuZGluZyBwYXJhbXMgdG8gYXBpLi4uJyk7XHJcbiAgICB0aGlzLmdldERpcmVjdGlvbldheVBvaW50cyhwLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgbGV0IHJvdXRlcyA9IHJlc3BvbnNlLnJvdXRlcztcclxuICAgICAgaWYocm91dGVzICYmIHJvdXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dvdCByb3V0ZXMnLCByb3V0ZXMubGVuZ3RoKTtcclxuICAgICAgICBsZXQgZGVjb2RlZFBhdGhMaXN0ID0gdGhpcy5kZWNvZGVQYXRoTGluZVN0cmluZyhyb3V0ZXNbMF0ub3ZlcnZpZXdfcG9seWxpbmUucG9pbnRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVjb2RlZCBwYXRoIGxpc3QgPScsIGRlY29kZWRQYXRoTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBwb2x5TGluZUxvY2F0aW9ucyA9IHRoaXMuZ2V0UG9seUxpbmVGcm9tV2F5UG9pbnRzKGRlY29kZWRQYXRoTGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dvdCBsb2NhdGlvbnMgZnJvbSBzdHJpbmc9JywgcG9seUxpbmVMb2NhdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICAvLyBjb252ZXJ0IHBvbHlMaW5lTG9jYXRpb25zIHRvIHBvbHlMaW5lXHJcbiAgICAgICAgbGV0IHBvbHlMaW5lT3B0aW9ucyA9IHRoaXMuZ2V0UG9seWxpbmVPcHRpb25zRnJvbVBvc3Rpb25zKHBvbHlMaW5lTG9jYXRpb25zKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2ZWQgcG9seWxpbmUgb3B0aW9ucycpO1xyXG4gICAgICAgIGNiKHBvbHlMaW5lT3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRQb2x5bGluZU9wdGlvbnNGcm9tUG9zdGlvbnMocG9seWxpbmVQb3NpdGlvbnM6IEFycmF5PFBvc2l0aW9uPikge1xyXG4gICAgICBsZXQgcG9seUxpbmVPcHRpb25zID0gbmV3IG1hcHNNb2R1bGUuUG9seWxpbmUoKTtcclxuICAgICAgY29uc29sZS5sb2coJ2FuZHJvaWQgZW5uYT8/JywgcG9seUxpbmVPcHRpb25zKTtcclxuICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIHBvbHlsaW5nIG9wdGlvbnMsIGxlbmd0aD0nLCBwb2x5bGluZVBvc2l0aW9ucy5sZW5ndGgpO1xyXG4gICAgICBwb2x5TGluZU9wdGlvbnMud2lkdGggPSAyNTtcclxuICAgICAgcG9seUxpbmVPcHRpb25zLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICBwb2x5TGluZU9wdGlvbnMuZ2VvZGVzaWMgPSB0cnVlO1xyXG4gICAgICBwb2x5TGluZU9wdGlvbnMuX3BvaW50cyA9IHBvbHlsaW5lUG9zaXRpb25zO1xyXG4gICAgICBjb25zb2xlLmxvZygnYmVmb3JlIHNldHRpbmcgcG9seWxpbmcgb3B0aW9ucywgYWRkaW5nIHBvaW50cycpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHBvbHlMaW5lT3B0aW9ucy5sb2FkUG9pbnRzKCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ2FmdGVyIHNldHRpbmcgcG9seWxpbmcgb3B0aW9ucywgYWRkaW5nIHBvaW50cycpO1xyXG4gICAgICByZXR1cm4gcG9seUxpbmVPcHRpb25zO1xyXG4gIH1cclxuICBnZXREaXJlY3Rpb25XYXlQb2ludHMocGFyYW1zLCBjYikge1xyXG4gICAgdGhpcy5nZXREaXJlY3Rpb253YXlQb2ludHNBUEkocGFyYW1zKVxyXG4gICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWNvZGVQYXRoTGluZVN0cmluZyhlbmNvZGVkUGF0aCkge1xyXG4gICAgbGV0IGxlbiA9IGVuY29kZWRQYXRoLmxlbmd0aDtcclxuICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICB2YXIgbGF0ID0gMDtcclxuICAgIHZhciBsbmcgPSAwO1xyXG5cclxuICAgICAvLyBGb3Igc3BlZWQgd2UgcHJlYWxsb2NhdGUgdG8gYW4gdXBwZXIgYm91bmQgb24gdGhlIGZpbmFsIGxlbmd0aCwgdGhlblxyXG4gICAgIC8vIHRydW5jYXRlIHRoZSBhcnJheSBiZWZvcmUgcmV0dXJuaW5nLlxyXG4gICAgbGV0IHBhdGggPSBbXTtcclxuICAgICB3aGlsZSAoaW5kZXggPCBsZW4pIHtcclxuICAgICAgIHZhciByZXN1bHQgPSAxO1xyXG4gICAgICAgdmFyIHNoaWZ0ID0gMDtcclxuICAgICAgIHZhciBiO1xyXG4gICAgICAgZG8ge1xyXG4gICAgICAgICAgIGIgPSBlbmNvZGVkUGF0aC5jaGFyQXQoaW5kZXgrKykgLSA2MyAtIDE7XHJcbiAgICAgICAgICAgcmVzdWx0ICs9IGIgPDwgc2hpZnQ7XHJcbiAgICAgICAgICAgc2hpZnQgKz0gNTtcclxuICAgICAgIH0gd2hpbGUgKGIgPj0gMHgxZik7XHJcbiAgICAgICBsYXQgKz0gKHJlc3VsdCAmIDEpICE9IDAgPyB+KHJlc3VsdCA+PiAxKSA6IChyZXN1bHQgPj4gMSk7XHJcbiAgICAgICByZXN1bHQgPSAxO1xyXG4gICAgICAgc2hpZnQgPSAwO1xyXG4gICAgICAgZG8ge1xyXG4gICAgICAgICAgIGIgPSBlbmNvZGVkUGF0aC5jaGFyQXQoaW5kZXgrKykgLSA2MyAtIDE7XHJcbiAgICAgICAgICAgcmVzdWx0ICs9IGIgPDwgc2hpZnQ7XHJcbiAgICAgICAgICAgc2hpZnQgKz0gNTtcclxuICAgICAgIH0gd2hpbGUgKGIgPj0gMHgxZik7XHJcbiAgICAgICBsbmcgKz0gKHJlc3VsdCAmIDEpICE9IDAgPyB+KHJlc3VsdCA+PiAxKSA6IChyZXN1bHQgPj4gMSk7XHJcblxyXG4gICAgICAgcGF0aC5wdXNoKHsgbGF0OiBsYXQgKiAxZS01LCBsbmc6IGxuZyAqIDFlLTV9KTtcclxuICAgICB9XHJcbiAgICAgcmV0dXJuIHBhdGg7XHJcbiAgfVxyXG5cclxuICBnZXREaXJlY3Rpb253YXlQb2ludHNBUEkocGFyYW1zKSB7XHJcbiAgICBsZXQgcGFyYW1TdHJpbmcgPSB0aGlzLmdldFN0cmluZ0Zyb21QYXJhbXMocGFyYW1zKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFVSTCtwYXJhbVN0cmluZylcclxuICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSk7XHJcbiAgfVxyXG4gIGdldFN0cmluZ0Zyb21QYXJhbXMocGFyYW1zKSB7XHJcbiAgICB2YXIgcGFyYW1TdHJpbmc6IHN0cmluZyA9ICc/JztcclxuICAgIGZvciggdmFyIGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgaWYocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBpZihwYXJhbVN0cmluZyAhPT0gJz8nKSB7XHJcbiAgICAgICAgICBwYXJhbVN0cmluZyArPSAnJic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtU3RyaW5nICs9IGtleSArICc9JyArIHBhcmFtc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1TdHJpbmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==