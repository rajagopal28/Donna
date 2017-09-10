"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color");
require("rxjs/Rx");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
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
        return nativescript_google_maps_sdk_1.Position.positionFromLatLng(waypoint.lat, waypoint.lng);
    };
    IndoorLocationDataService.prototype.getDirectionWayPointsAndLoadPolyLineOptions = function (params, cb) {
        var _this = this;
        console.log('sending params to api...');
        this.getDirectionWayPoints(params, function (response) {
            var routes = response.routes;
            if (routes && routes.length > 0) {
                cb(_this.getPolyLineOptionsFromResponse(routes));
            }
        });
    };
    IndoorLocationDataService.prototype.getDirectionWayPointsAndLoadPolyLineOptionsWithRoute = function (params, cb) {
        var _this = this;
        console.log('sending params to api...');
        this.getDirectionWayPoints(params, function (response) {
            var routes = response.routes;
            if (routes && routes.length > 0) {
                cb(_this.getPolyLineOptionsFromResponse(routes), _this.getRouteTextFromReponse(response));
            }
        });
    };
    IndoorLocationDataService.prototype.getPolylineOptionsFromPostions = function (polylinePositions) {
        var polyLineOptions = new nativescript_google_maps_sdk_1.Polyline();
        console.log('android enna??', polyLineOptions);
        console.log('creating polyling options, length=', polylinePositions.length);
        polyLineOptions.width = 25;
        polyLineOptions.visible = true;
        polyLineOptions.geodesic = true;
        polyLineOptions.color = new color_1.Color("#FF0000");
        polyLineOptions.addPoints(polylinePositions);
        return polyLineOptions;
    };
    IndoorLocationDataService.prototype.getRouteText = function (params, cb) {
        var _this = this;
        this.getDirectionWayPoints(params, function (response) {
            if (response.routes && response.routes.length > 0) {
                cb(_this.getRouteTextFromReponse(response));
            }
        });
    };
    IndoorLocationDataService.prototype.getPolyLineOptionsFromResponse = function (routes) {
        console.log('got routes', routes.length);
        var decodedPathList = this.decodePathLineString(routes[0].overview_polyline.points);
        console.log('the polyline endoded str', routes[0].overview_polyline.points);
        console.log('decoded path list =', decodedPathList.length);
        var polyLineLocations = this.getPolyLineFromWayPoints(decodedPathList);
        console.log('got locations from string=', polyLineLocations.length);
        // convert polyLineLocations to polyLine
        console.log('received polyline options');
        return this.getPolylineOptionsFromPostions(polyLineLocations);
    };
    IndoorLocationDataService.prototype.getRouteTextFromReponse = function (response) {
        var legsO = response.routes[0].legs;
        var restext = '';
        for (var leg = 0; leg < legsO.length; leg++) {
            var legO = legsO[leg];
            var steps = legO.steps;
            for (var step = 0; step < steps.length; step++) {
                restext += steps[step].html_instructions;
            }
        }
        return restext;
    };
    IndoorLocationDataService.prototype.getDirectionWayPoints = function (params, cb) {
        params["key"] = DIRECTIONS_API_KEY;
        this.getDirectionwayPointsAPI(params)
            .subscribe(function (result) {
            cb(result);
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    IndoorLocationDataService.prototype.decodePathLineString = function (encoded) {
        if (!encoded) {
            return [];
        }
        var poly = [];
        var index = 0, len = encoded.length;
        var lat = 0, lng = 0;
        // For speed we preallocate to an upper bound on the final length, then
        // truncate the array before returning.
        while (index < len) {
            var b, shift = 0, result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result = result | ((b & 0x1f) << shift);
                shift += 5;
            } while (b >= 0x20);
            var dlat = (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            lat += dlat;
            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result = result | ((b & 0x1f) << shift);
                shift += 5;
            } while (b >= 0x20);
            var dlng = (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            lng += dlng;
            var p = {
                lat: lat / 1e5,
                lng: lng / 1e5,
            };
            poly.push(p);
        }
        return poly;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kb29yLWxvY2F0aW9uLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZG9vci1sb2NhdGlvbi1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsZ0RBQStDO0FBRS9DLG1CQUFpQjtBQUdqQixzQ0FBcUM7QUFDckMsbUJBQWlCO0FBRWpCLDZFQUFrRTtBQUdsRSxJQUFNLEdBQUcsR0FBWSxzREFBc0QsQ0FBQztBQUM1RSxJQUFNLGtCQUFrQixHQUFZLHlDQUF5QyxDQUFDO0FBRzlFLElBQWEseUJBQXlCO0lBRXBDLG1DQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsNkNBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsNERBQXdCLEdBQXhCLFVBQXlCLFNBQVM7UUFBbEMsaUJBTUM7UUFMQyxJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQ25DLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRCwwREFBc0IsR0FBdEIsVUFBdUIsUUFBUTtRQUM3QixNQUFNLENBQUMsdUNBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsK0VBQTJDLEdBQTNDLFVBQTRDLE1BQU0sRUFBRSxFQUFFO1FBQXRELGlCQVFDO1FBUEMsT0FB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QUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFBLENBQUMsV0FBVyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLFdBQVcsSUFBSSxHQUFHLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsV0FBVyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBaEpELElBZ0pDO0FBaEpZLHlCQUF5QjtJQURyQyxpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIseUJBQXlCLENBZ0pyQztBQWhKWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCB7IEhvdFNwb3QgfSBmcm9tICcuLi9tb2RlbHMvYXBwLm1vZGVscyc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBQb2x5bGluZSwgUG9zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiO1xyXG5cclxuXHJcbmNvbnN0IFVSTCA6IHN0cmluZyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZGlyZWN0aW9ucy9qc29uJztcclxuY29uc3QgRElSRUNUSU9OU19BUElfS0VZIDogc3RyaW5nID0gJ0FJemFTeUJBb200UVpyVFI3WGJBNlRkeExScHpEWk12NWZoYWFNZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgZ2V0TGV2ZWxzKCkgOiBbbnVtYmVyXSB7XHJcbiAgICByZXR1cm4gWy0xLCAwLCAxLCAyLCAzLCA3XVxyXG4gIH1cclxuICBnZXRQb2x5TGluZUZyb21XYXlQb2ludHMod2F5cG9pbnRzKSA6IEFycmF5PFBvc2l0aW9uPntcclxuICAgIGxldCBwb2ludHMgPSBuZXcgQXJyYXk8UG9zaXRpb24+KCk7XHJcbiAgICB3YXlwb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcclxuICAgICAgcG9pbnRzLnB1c2godGhpcy5nZXRQb2x5TGluZUZvcldheVBvaW50KHBvaW50KSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwb2ludHM7XHJcbiAgfVxyXG4gIGdldFBvbHlMaW5lRm9yV2F5UG9pbnQod2F5cG9pbnQpIHtcclxuICAgIHJldHVybiBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcod2F5cG9pbnQubGF0LCB3YXlwb2ludC5sbmcpO1xyXG4gIH1cclxuICBnZXREaXJlY3Rpb25XYXlQb2ludHNBbmRMb2FkUG9seUxpbmVPcHRpb25zKHBhcmFtcywgY2IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzZW5kaW5nIHBhcmFtcyB0byBhcGkuLi4nKTtcclxuICAgIHRoaXMuZ2V0RGlyZWN0aW9uV2F5UG9pbnRzKHBhcmFtcywgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxldCByb3V0ZXMgPSByZXNwb25zZS5yb3V0ZXM7XHJcbiAgICAgIGlmKHJvdXRlcyAmJiByb3V0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNiKHRoaXMuZ2V0UG9seUxpbmVPcHRpb25zRnJvbVJlc3BvbnNlKHJvdXRlcykpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0RGlyZWN0aW9uV2F5UG9pbnRzQW5kTG9hZFBvbHlMaW5lT3B0aW9uc1dpdGhSb3V0ZShwYXJhbXMsIGNiKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2VuZGluZyBwYXJhbXMgdG8gYXBpLi4uJyk7XHJcbiAgICB0aGlzLmdldERpcmVjdGlvbldheVBvaW50cyhwYXJhbXMsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsZXQgcm91dGVzID0gcmVzcG9uc2Uucm91dGVzO1xyXG4gICAgICBpZihyb3V0ZXMgJiYgcm91dGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjYih0aGlzLmdldFBvbHlMaW5lT3B0aW9uc0Zyb21SZXNwb25zZShyb3V0ZXMpLCB0aGlzLmdldFJvdXRlVGV4dEZyb21SZXBvbnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRQb2x5bGluZU9wdGlvbnNGcm9tUG9zdGlvbnMocG9seWxpbmVQb3NpdGlvbnM6IEFycmF5PFBvc2l0aW9uPikgOiBQb2x5bGluZSB7XHJcbiAgICAgIGxldCBwb2x5TGluZU9wdGlvbnMgOiBQb2x5bGluZSA9IG5ldyBQb2x5bGluZSgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnYW5kcm9pZCBlbm5hPz8nLCBwb2x5TGluZU9wdGlvbnMpO1xyXG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgcG9seWxpbmcgb3B0aW9ucywgbGVuZ3RoPScsIHBvbHlsaW5lUG9zaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgIHBvbHlMaW5lT3B0aW9ucy53aWR0aCA9IDI1O1xyXG4gICAgICBwb2x5TGluZU9wdGlvbnMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIHBvbHlMaW5lT3B0aW9ucy5nZW9kZXNpYyA9IHRydWU7XHJcbiAgICAgIHBvbHlMaW5lT3B0aW9ucy5jb2xvciA9IG5ldyBDb2xvcihcIiNGRjAwMDBcIik7XHJcbiAgICAgIHBvbHlMaW5lT3B0aW9ucy5hZGRQb2ludHMocG9seWxpbmVQb3NpdGlvbnMpO1xyXG4gICAgICByZXR1cm4gcG9seUxpbmVPcHRpb25zO1xyXG4gIH1cclxuICBnZXRSb3V0ZVRleHQocGFyYW1zLCBjYikge1xyXG4gICAgdGhpcy5nZXREaXJlY3Rpb25XYXlQb2ludHMocGFyYW1zLCAocmVzcG9uc2UpID0+e1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLnJvdXRlcyAmJiByZXNwb25zZS5yb3V0ZXMubGVuZ3RoID4wKSB7XHJcbiAgICAgICAgICBjYih0aGlzLmdldFJvdXRlVGV4dEZyb21SZXBvbnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldFBvbHlMaW5lT3B0aW9uc0Zyb21SZXNwb25zZShyb3V0ZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnb3Qgcm91dGVzJywgcm91dGVzLmxlbmd0aCk7XHJcbiAgICBsZXQgZGVjb2RlZFBhdGhMaXN0ID0gdGhpcy5kZWNvZGVQYXRoTGluZVN0cmluZyhyb3V0ZXNbMF0ub3ZlcnZpZXdfcG9seWxpbmUucG9pbnRzKTtcclxuICAgIGNvbnNvbGUubG9nKCd0aGUgcG9seWxpbmUgZW5kb2RlZCBzdHInLCByb3V0ZXNbMF0ub3ZlcnZpZXdfcG9seWxpbmUucG9pbnRzKTtcclxuICAgIGNvbnNvbGUubG9nKCdkZWNvZGVkIHBhdGggbGlzdCA9JywgZGVjb2RlZFBhdGhMaXN0Lmxlbmd0aCk7XHJcbiAgICBsZXQgcG9seUxpbmVMb2NhdGlvbnMgPSB0aGlzLmdldFBvbHlMaW5lRnJvbVdheVBvaW50cyhkZWNvZGVkUGF0aExpc3QpO1xyXG4gICAgY29uc29sZS5sb2coJ2dvdCBsb2NhdGlvbnMgZnJvbSBzdHJpbmc9JywgcG9seUxpbmVMb2NhdGlvbnMubGVuZ3RoKTtcclxuICAgIC8vIGNvbnZlcnQgcG9seUxpbmVMb2NhdGlvbnMgdG8gcG9seUxpbmVcclxuICAgIGNvbnNvbGUubG9nKCdyZWNlaXZlZCBwb2x5bGluZSBvcHRpb25zJyk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQb2x5bGluZU9wdGlvbnNGcm9tUG9zdGlvbnMocG9seUxpbmVMb2NhdGlvbnMpO1xyXG4gIH1cclxuICBnZXRSb3V0ZVRleHRGcm9tUmVwb25zZShyZXNwb25zZSkge1xyXG4gICAgdmFyIGxlZ3NPID0gcmVzcG9uc2Uucm91dGVzWzBdLmxlZ3M7XHJcbiAgICB2YXIgcmVzdGV4dCA9ICcnO1xyXG4gICAgZm9yKHZhciBsZWcgPTA7IGxlZyA8IGxlZ3NPLmxlbmd0aDsgbGVnKysgKSB7XHJcbiAgICAgIHZhciBsZWdPID0gbGVnc09bbGVnXTtcclxuICAgICAgdmFyIHN0ZXBzID0gbGVnTy5zdGVwcztcclxuICAgICAgZm9yKHZhciBzdGVwID0gMDsgc3RlcCA8IHN0ZXBzLmxlbmd0aDsgc3RlcCsrKSB7XHJcbiAgICAgICAgcmVzdGV4dCArPSBzdGVwc1tzdGVwXS5odG1sX2luc3RydWN0aW9ucztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3RleHQ7XHJcbiAgfVxyXG4gIGdldERpcmVjdGlvbldheVBvaW50cyhwYXJhbXMsIGNiKSB7XHJcbiAgICBwYXJhbXNbXCJrZXlcIl0gPSBESVJFQ1RJT05TX0FQSV9LRVk7XHJcbiAgICB0aGlzLmdldERpcmVjdGlvbndheVBvaW50c0FQSShwYXJhbXMpXHJcbiAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgY2IocmVzdWx0KTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlY29kZVBhdGhMaW5lU3RyaW5nKGVuY29kZWQpIHtcclxuICAgICAgICBpZiAoIWVuY29kZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcG9seSA9IFtdO1xyXG4gICAgICAgIHZhciBpbmRleCA9IDAsIGxlbiA9IGVuY29kZWQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBsYXQgPSAwLCBsbmcgPSAwO1xyXG4gICAgICAgIC8vIEZvciBzcGVlZCB3ZSBwcmVhbGxvY2F0ZSB0byBhbiB1cHBlciBib3VuZCBvbiB0aGUgZmluYWwgbGVuZ3RoLCB0aGVuXHJcbiAgICAgICAgLy8gdHJ1bmNhdGUgdGhlIGFycmF5IGJlZm9yZSByZXR1cm5pbmcuXHJcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuKSB7XHJcbiAgICAgICAgICAgIHZhciBiLCBzaGlmdCA9IDAsIHJlc3VsdCA9IDA7XHJcblxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBiID0gZW5jb2RlZC5jaGFyQ29kZUF0KGluZGV4KyspIC0gNjM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfCAoKGIgJiAweDFmKSA8PCBzaGlmdCk7XHJcbiAgICAgICAgICAgICAgICBzaGlmdCArPSA1O1xyXG4gICAgICAgICAgICB9IHdoaWxlIChiID49IDB4MjApO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRsYXQgPSAocmVzdWx0ICYgMSkgIT0gMCA/IH4ocmVzdWx0ID4+IDEpIDogKHJlc3VsdCA+PiAxKTtcclxuICAgICAgICAgICAgbGF0ICs9IGRsYXQ7XHJcblxyXG4gICAgICAgICAgICBzaGlmdCA9IDA7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IDA7XHJcblxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBiID0gZW5jb2RlZC5jaGFyQ29kZUF0KGluZGV4KyspIC0gNjM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfCAoKGIgJiAweDFmKSA8PCBzaGlmdCk7XHJcbiAgICAgICAgICAgICAgICBzaGlmdCArPSA1O1xyXG4gICAgICAgICAgICB9IHdoaWxlIChiID49IDB4MjApO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRsbmcgPSAocmVzdWx0ICYgMSkgIT0gMCA/IH4ocmVzdWx0ID4+IDEpIDogKHJlc3VsdCA+PiAxKTtcclxuICAgICAgICAgICAgbG5nICs9IGRsbmc7XHJcblxyXG4gICAgICAgICAgICB2YXIgcCA9IHtcclxuICAgICAgICAgICAgICAgIGxhdDogbGF0IC8gMWU1LFxyXG4gICAgICAgICAgICAgICAgbG5nOiBsbmcgLyAxZTUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBvbHkucHVzaChwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvbHk7XHJcbiAgfVxyXG5cclxuICBnZXREaXJlY3Rpb253YXlQb2ludHNBUEkocGFyYW1zKSB7XHJcbiAgICBsZXQgcGFyYW1TdHJpbmcgPSB0aGlzLmdldFN0cmluZ0Zyb21QYXJhbXMocGFyYW1zKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFVSTCtwYXJhbVN0cmluZylcclxuICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSk7XHJcbiAgfVxyXG4gIGdldFN0cmluZ0Zyb21QYXJhbXMocGFyYW1zKSB7XHJcbiAgICB2YXIgcGFyYW1TdHJpbmc6IHN0cmluZyA9ICc/JztcclxuICAgIGZvciggdmFyIGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgaWYocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBpZihwYXJhbVN0cmluZyAhPT0gJz8nKSB7XHJcbiAgICAgICAgICBwYXJhbVN0cmluZyArPSAnJic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtU3RyaW5nICs9IGtleSArICc9JyArIHBhcmFtc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1TdHJpbmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==