"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AUTH_USER_KEY = 'autUserString';
var SessionService = (function () {
    function SessionService() {
        this._authSetting = new BehaviorSubject_1.BehaviorSubject(null);
        this.authObervable = this._authSetting.asObservable();
        this.clearUser();
        this.getAuthFromPreferences();
    }
    SessionService.prototype.getUser = function () {
        return this.authenticatedUser;
    };
    SessionService.prototype.setUser = function (user) {
        this.authenticatedUser = user;
        this._authSetting.next(user);
        if (user) {
            application_settings_1.setString(AUTH_USER_KEY, JSON.stringify(user));
        }
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.authenticatedUser !== null;
    };
    SessionService.prototype.getAuthFromPreferences = function () {
        if (application_settings_1.hasKey(AUTH_USER_KEY)) {
            this.setUser(JSON.parse(application_settings_1.getString(AUTH_USER_KEY)));
        }
    };
    SessionService.prototype.clearUser = function () {
        this.setUser(null);
    };
    return SessionService;
}());
SessionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUs4QjtBQUM5Qix3REFBcUQ7QUFJckQsSUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBRXRDLElBQWEsY0FBYztJQUt6QjtRQUpRLGlCQUFZLEdBQUcsSUFBSSxpQ0FBZSxDQUFPLElBQUksQ0FBQyxDQUFDO1FBR2hELGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNELGdDQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxnQ0FBTyxHQUFQLFVBQVEsSUFBVTtRQUNoQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixnQ0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUNELCtDQUFzQixHQUF0QjtRQUNFLEVBQUUsQ0FBQSxDQUFDLDZCQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0gsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFSCxxQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksY0FBYztJQUQxQixpQkFBVSxFQUFFOztHQUNBLGNBQWMsQ0ErQjFCO0FBL0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0U3RyaW5nLFxyXG4gICAgc2V0U3RyaW5nLFxyXG4gICAgaGFzS2V5LFxyXG4gICAgcmVtb3ZlXHJcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnO1xyXG5cclxuY29uc3QgQVVUSF9VU0VSX0tFWSA9ICdhdXRVc2VyU3RyaW5nJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2F1dGhTZXR0aW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPihudWxsKTtcclxuXHJcbiAgcHJpdmF0ZSBhdXRoZW50aWNhdGVkVXNlciA6IFVzZXI7XHJcbiAgcHVibGljIGF1dGhPYmVydmFibGUgPSB0aGlzLl9hdXRoU2V0dGluZy5hc09ic2VydmFibGUoKTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2xlYXJVc2VyKCk7XHJcbiAgICB0aGlzLmdldEF1dGhGcm9tUHJlZmVyZW5jZXMoKTtcclxuICB9XHJcbiAgZ2V0VXNlcigpIDogVXNlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkVXNlcjtcclxuICB9XHJcbiAgc2V0VXNlcih1c2VyOiBVc2VyKSB7XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWRVc2VyID0gdXNlcjtcclxuICAgIHRoaXMuX2F1dGhTZXR0aW5nLm5leHQodXNlcik7XHJcbiAgICBpZih1c2VyKSB7XHJcbiAgICAgIHNldFN0cmluZyhBVVRIX1VTRVJfS0VZLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICAgIH1cclxuICB9XHJcbiAgaXNMb2dnZWRJbigpIDogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkVXNlciAhPT0gbnVsbDtcclxuICB9XHJcbiAgZ2V0QXV0aEZyb21QcmVmZXJlbmNlcygpIHtcclxuICAgIGlmKGhhc0tleShBVVRIX1VTRVJfS0VZKSkge1xyXG4gICAgICB0aGlzLnNldFVzZXIoSlNPTi5wYXJzZShnZXRTdHJpbmcoQVVUSF9VU0VSX0tFWSkpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY2xlYXJVc2VyKCkge1xyXG4gICAgdGhpcy5zZXRVc2VyKG51bGwpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19