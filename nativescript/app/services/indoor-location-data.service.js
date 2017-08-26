"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var color_1 = require("tns-core-modules/color");
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
        params["key"] = DIRECTIONS_API_KEY;
        this.getDirectionWayPoints(params, function (response) {
            var routes = response.routes;
            if (routes && routes.length > 0) {
                console.log('got routes', routes.length);
                var decodedPathList = _this.decodePathLineString2(routes[0].overview_polyline.points);
                console.log('the polyline endoded str', routes[0].overview_polyline.points);
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
        params["key"] = DIRECTIONS_API_KEY;
        this.getDirectionWayPoints(params, function (response) {
            var restext = '';
            if (response.routes && response.routes.length > 0) {
                var legsO = response.routes[0].legs;
                for (var leg = 0; leg < legsO.length; leg++) {
                    var legO = legsO[leg];
                    var steps = legO.steps;
                    for (var step = 0; step < steps.length; step++) {
                        restext += steps[step].html_instructions;
                    }
                }
            }
            cb(restext);
        });
    };
    IndoorLocationDataService.prototype.getDirectionWayPoints = function (params, cb) {
        this.getDirectionwayPointsAPI(params)
            .subscribe(function (result) {
            cb(result);
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    IndoorLocationDataService.prototype.decodePathLineString2 = function (encoded) {
        if (!encoded) {
            return [];
        }
        var poly = [];
        var index = 0, len = encoded.length;
        var lat = 0, lng = 0;
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
            console.log(JSON.stringify(p));
            poly.push(p);
        }
        return poly;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kb29yLWxvY2F0aW9uLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZG9vci1sb2NhdGlvbi1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLGdEQUErQztBQUUvQyxtQkFBaUI7QUFJakIsNkVBQWtFO0FBR2xFLElBQU0sR0FBRyxHQUFZLHNEQUFzRCxDQUFDO0FBQzVFLElBQU0sa0JBQWtCLEdBQVkseUNBQXlDLENBQUM7QUFHOUUsSUFBYSx5QkFBeUI7SUFFcEMsbUNBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQyw2Q0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFDRCw0REFBd0IsR0FBeEIsVUFBeUIsU0FBUztRQUFsQyxpQkFNQztRQUxDLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7UUFDbkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNELDBEQUFzQixHQUF0QixVQUF1QixRQUFRO1FBQzdCLE1BQU0sQ0FBQyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDRCwrRUFBMkMsR0FBM0MsVUFBNEMsTUFBTSxFQUFFLEVBQUU7UUFBdEQsaUJBa0JDO1FBakJDLE9BQU8sQ0FBQyxHQUFH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LENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBbktELElBbUtDO0FBbktZLHlCQUF5QjtJQURyQyxpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIseUJBQXlCLENBbUtyQztBQW5LWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBIb3RTcG90IH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnO1xyXG5cclxuaW1wb3J0IHsgUG9seWxpbmUsIFBvc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIjtcclxuXHJcblxyXG5jb25zdCBVUkwgOiBzdHJpbmcgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2RpcmVjdGlvbnMvanNvbic7XHJcbmNvbnN0IERJUkVDVElPTlNfQVBJX0tFWSA6IHN0cmluZyA9ICdBSXphU3lCQW9tNFFaclRSN1hiQTZUZHhMUnB6RFpNdjVmaGFhTWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW5kb29yTG9jYXRpb25EYXRhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gIGdldExldmVscygpIDogW251bWJlcl0ge1xyXG4gICAgcmV0dXJuIFstMSwgMCwgMSwgMiwgMywgN11cclxuICB9XHJcbiAgZ2V0UG9seUxpbmVGcm9tV2F5UG9pbnRzKHdheXBvaW50cykgOiBBcnJheTxQb3NpdGlvbj57XHJcbiAgICBsZXQgcG9pbnRzID0gbmV3IEFycmF5PFBvc2l0aW9uPigpO1xyXG4gICAgd2F5cG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XHJcbiAgICAgIHBvaW50cy5wdXNoKHRoaXMuZ2V0UG9seUxpbmVGb3JXYXlQb2ludChwb2ludCkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcG9pbnRzO1xyXG4gIH1cclxuICBnZXRQb2x5TGluZUZvcldheVBvaW50KHdheXBvaW50KSB7XHJcbiAgICByZXR1cm4gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKHdheXBvaW50LmxhdCwgd2F5cG9pbnQubG5nKTtcclxuICB9XHJcbiAgZ2V0RGlyZWN0aW9uV2F5UG9pbnRzQW5kTG9hZFBvbHlMaW5lT3B0aW9ucyhwYXJhbXMsIGNiKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2VuZGluZyBwYXJhbXMgdG8gYXBpLi4uJyk7XHJcbiAgICBwYXJhbXNbXCJrZXlcIl0gPSBESVJFQ1RJT05TX0FQSV9LRVk7XHJcbiAgICB0aGlzLmdldERpcmVjdGlvbldheVBvaW50cyhwYXJhbXMsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsZXQgcm91dGVzID0gcmVzcG9uc2Uucm91dGVzO1xyXG4gICAgICBpZihyb3V0ZXMgJiYgcm91dGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ290IHJvdXRlcycsIHJvdXRlcy5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBkZWNvZGVkUGF0aExpc3QgPSB0aGlzLmRlY29kZVBhdGhMaW5lU3RyaW5nMihyb3V0ZXNbMF0ub3ZlcnZpZXdfcG9seWxpbmUucG9pbnRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhlIHBvbHlsaW5lIGVuZG9kZWQgc3RyJywgcm91dGVzWzBdLm92ZXJ2aWV3X3BvbHlsaW5lLnBvaW50cyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlY29kZWQgcGF0aCBsaXN0ID0nLCBkZWNvZGVkUGF0aExpc3QubGVuZ3RoKTtcclxuICAgICAgICBsZXQgcG9seUxpbmVMb2NhdGlvbnMgPSB0aGlzLmdldFBvbHlMaW5lRnJvbVdheVBvaW50cyhkZWNvZGVkUGF0aExpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnb3QgbG9jYXRpb25zIGZyb20gc3RyaW5nPScsIHBvbHlMaW5lTG9jYXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gY29udmVydCBwb2x5TGluZUxvY2F0aW9ucyB0byBwb2x5TGluZVxyXG4gICAgICAgIGxldCBwb2x5TGluZU9wdGlvbnMgPSB0aGlzLmdldFBvbHlsaW5lT3B0aW9uc0Zyb21Qb3N0aW9ucyhwb2x5TGluZUxvY2F0aW9ucyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmVkIHBvbHlsaW5lIG9wdGlvbnMnKTtcclxuICAgICAgICBjYihwb2x5TGluZU9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0UG9seWxpbmVPcHRpb25zRnJvbVBvc3Rpb25zKHBvbHlsaW5lUG9zaXRpb25zOiBBcnJheTxQb3NpdGlvbj4pIDogUG9seWxpbmUge1xyXG4gICAgICBsZXQgcG9seUxpbmVPcHRpb25zIDogUG9seWxpbmUgPSBuZXcgUG9seWxpbmUoKTtcclxuICAgICAgY29uc29sZS5sb2coJ2FuZHJvaWQgZW5uYT8/JywgcG9seUxpbmVPcHRpb25zKTtcclxuICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIHBvbHlsaW5nIG9wdGlvbnMsIGxlbmd0aD0nLCBwb2x5bGluZVBvc2l0aW9ucy5sZW5ndGgpO1xyXG4gICAgICBwb2x5TGluZU9wdGlvbnMud2lkdGggPSAyNTtcclxuICAgICAgcG9seUxpbmVPcHRpb25zLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICBwb2x5TGluZU9wdGlvbnMuZ2VvZGVzaWMgPSB0cnVlO1xyXG4gICAgICBwb2x5TGluZU9wdGlvbnMuY29sb3IgPSBuZXcgQ29sb3IoXCIjRkYwMDAwXCIpO1xyXG4gICAgICBwb2x5TGluZU9wdGlvbnMuYWRkUG9pbnRzKHBvbHlsaW5lUG9zaXRpb25zKTtcclxuICAgICAgcmV0dXJuIHBvbHlMaW5lT3B0aW9ucztcclxuICB9XHJcbiAgZ2V0Um91dGVUZXh0KHBhcmFtcywgY2IpIHtcclxuICAgIHBhcmFtc1tcImtleVwiXSA9IERJUkVDVElPTlNfQVBJX0tFWTtcclxuICAgIHRoaXMuZ2V0RGlyZWN0aW9uV2F5UG9pbnRzKHBhcmFtcywgKHJlc3BvbnNlKSA9PntcclxuICAgICAgICB2YXIgcmVzdGV4dCA9ICcnO1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLnJvdXRlcyAmJiByZXNwb25zZS5yb3V0ZXMubGVuZ3RoID4wKSB7XHJcbiAgICAgICAgICB2YXIgbGVnc08gPSByZXNwb25zZS5yb3V0ZXNbMF0ubGVncztcclxuICAgICAgICAgIGZvcih2YXIgbGVnID0wOyBsZWcgPCBsZWdzTy5sZW5ndGg7IGxlZysrICkge1xyXG4gICAgICAgICAgICB2YXIgbGVnTyA9IGxlZ3NPW2xlZ107XHJcbiAgICAgICAgICAgIHZhciBzdGVwcyA9IGxlZ08uc3RlcHM7XHJcbiAgICAgICAgICAgIGZvcih2YXIgc3RlcCA9IDA7IHN0ZXAgPCBzdGVwcy5sZW5ndGg7IHN0ZXArKykge1xyXG4gICAgICAgICAgICAgIHJlc3RleHQgKz0gc3RlcHNbc3RlcF0uaHRtbF9pbnN0cnVjdGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2IocmVzdGV4dCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0RGlyZWN0aW9uV2F5UG9pbnRzKHBhcmFtcywgY2IpIHtcclxuICAgIHRoaXMuZ2V0RGlyZWN0aW9ud2F5UG9pbnRzQVBJKHBhcmFtcylcclxuICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IFwiLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZGVjb2RlUGF0aExpbmVTdHJpbmcyKGVuY29kZWQpIHtcclxuICAgIGlmICghZW5jb2RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwb2x5ID0gW107XHJcbiAgICAgICAgdmFyIGluZGV4ID0gMCwgbGVuID0gZW5jb2RlZC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGxhdCA9IDAsIGxuZyA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbikge1xyXG4gICAgICAgICAgICB2YXIgYiwgc2hpZnQgPSAwLCByZXN1bHQgPSAwO1xyXG5cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgYiA9IGVuY29kZWQuY2hhckNvZGVBdChpbmRleCsrKSAtIDYzO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHwgKChiICYgMHgxZikgPDwgc2hpZnQpO1xyXG4gICAgICAgICAgICAgICAgc2hpZnQgKz0gNTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoYiA+PSAweDIwKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkbGF0ID0gKHJlc3VsdCAmIDEpICE9IDAgPyB+KHJlc3VsdCA+PiAxKSA6IChyZXN1bHQgPj4gMSk7XHJcbiAgICAgICAgICAgIGxhdCArPSBkbGF0O1xyXG5cclxuICAgICAgICAgICAgc2hpZnQgPSAwO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAwO1xyXG5cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgYiA9IGVuY29kZWQuY2hhckNvZGVBdChpbmRleCsrKSAtIDYzO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IHwgKChiICYgMHgxZikgPDwgc2hpZnQpO1xyXG4gICAgICAgICAgICAgICAgc2hpZnQgKz0gNTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoYiA+PSAweDIwKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkbG5nID0gKHJlc3VsdCAmIDEpICE9IDAgPyB+KHJlc3VsdCA+PiAxKSA6IChyZXN1bHQgPj4gMSk7XHJcbiAgICAgICAgICAgIGxuZyArPSBkbG5nO1xyXG5cclxuICAgICAgICAgICAgdmFyIHAgPSB7XHJcbiAgICAgICAgICAgICAgICBsYXQ6IGxhdCAvIDFlNSxcclxuICAgICAgICAgICAgICAgIGxuZzogbG5nIC8gMWU1LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwKSk7XHJcbiAgICAgICAgICAgIHBvbHkucHVzaChwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvbHk7XHJcbiAgfVxyXG4gIGRlY29kZVBhdGhMaW5lU3RyaW5nKGVuY29kZWRQYXRoKSB7XHJcbiAgICBsZXQgbGVuID0gZW5jb2RlZFBhdGgubGVuZ3RoO1xyXG4gICAgdmFyIGluZGV4ID0gMDtcclxuICAgIHZhciBsYXQgPSAwO1xyXG4gICAgdmFyIGxuZyA9IDA7XHJcblxyXG4gICAgIC8vIEZvciBzcGVlZCB3ZSBwcmVhbGxvY2F0ZSB0byBhbiB1cHBlciBib3VuZCBvbiB0aGUgZmluYWwgbGVuZ3RoLCB0aGVuXHJcbiAgICAgLy8gdHJ1bmNhdGUgdGhlIGFycmF5IGJlZm9yZSByZXR1cm5pbmcuXHJcbiAgICBsZXQgcGF0aCA9IFtdO1xyXG4gICAgIHdoaWxlIChpbmRleCA8IGxlbikge1xyXG4gICAgICAgdmFyIHJlc3VsdCA9IDE7XHJcbiAgICAgICB2YXIgc2hpZnQgPSAwO1xyXG4gICAgICAgdmFyIGI7XHJcbiAgICAgICBkbyB7XHJcbiAgICAgICAgICAgYiA9IGVuY29kZWRQYXRoLmNoYXJBdChpbmRleCsrKSAtIDYzIC0gMTtcclxuICAgICAgICAgICByZXN1bHQgKz0gYiA8PCBzaGlmdDtcclxuICAgICAgICAgICBzaGlmdCArPSA1O1xyXG4gICAgICAgfSB3aGlsZSAoYiA+PSAweDFmKTtcclxuICAgICAgIGxhdCArPSAocmVzdWx0ICYgMSkgIT0gMCA/IH4ocmVzdWx0ID4+IDEpIDogKHJlc3VsdCA+PiAxKTtcclxuICAgICAgIHJlc3VsdCA9IDE7XHJcbiAgICAgICBzaGlmdCA9IDA7XHJcbiAgICAgICBkbyB7XHJcbiAgICAgICAgICAgYiA9IGVuY29kZWRQYXRoLmNoYXJBdChpbmRleCsrKSAtIDYzIC0gMTtcclxuICAgICAgICAgICByZXN1bHQgKz0gYiA8PCBzaGlmdDtcclxuICAgICAgICAgICBzaGlmdCArPSA1O1xyXG4gICAgICAgfSB3aGlsZSAoYiA+PSAweDFmKTtcclxuICAgICAgIGxuZyArPSAocmVzdWx0ICYgMSkgIT0gMCA/IH4ocmVzdWx0ID4+IDEpIDogKHJlc3VsdCA+PiAxKTtcclxuXHJcbiAgICAgICBwYXRoLnB1c2goeyBsYXQ6IGxhdCAqIDFlLTUsIGxuZzogbG5nICogMWUtNX0pO1xyXG4gICAgIH1cclxuICAgICByZXR1cm4gcGF0aDtcclxuICB9XHJcblxyXG4gIGdldERpcmVjdGlvbndheVBvaW50c0FQSShwYXJhbXMpIHtcclxuICAgIGxldCBwYXJhbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nRnJvbVBhcmFtcyhwYXJhbXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoVVJMK3BhcmFtU3RyaW5nKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICB9XHJcbiAgZ2V0U3RyaW5nRnJvbVBhcmFtcyhwYXJhbXMpIHtcclxuICAgIHZhciBwYXJhbVN0cmluZzogc3RyaW5nID0gJz8nO1xyXG4gICAgZm9yKCB2YXIga2V5IGluIHBhcmFtcykge1xyXG4gICAgICBpZihwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGlmKHBhcmFtU3RyaW5nICE9PSAnPycpIHtcclxuICAgICAgICAgIHBhcmFtU3RyaW5nICs9ICcmJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyYW1TdHJpbmcgKz0ga2V5ICsgJz0nICsgcGFyYW1zW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbVN0cmluZztcclxuICB9XHJcbn1cclxuIl19