"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var SessionService = (function () {
    function SessionService() {
        this._authSetting = new BehaviorSubject_1.BehaviorSubject(null);
        this.authObervable = this._authSetting.asObservable();
        this.clearUser();
    }
    SessionService.prototype.getUser = function () {
        return this.authenticatedUser;
    };
    SessionService.prototype.setUser = function (user) {
        this.authenticatedUser = user;
        this._authSetting.next(user);
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.authenticatedUser !== null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHdEQUFxRDtBQUtyRCxJQUFhLGNBQWM7SUFLekI7UUFKUSxpQkFBWSxHQUFHLElBQUksaUNBQWUsQ0FBTyxJQUFJLENBQUMsQ0FBQztRQUdoRCxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsZ0NBQU8sR0FBUCxVQUFRLElBQVU7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFDRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUgscUJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTs7R0FDQSxjQUFjLENBc0IxQjtBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy9hcHAubW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIF9hdXRoU2V0dGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlcj4obnVsbCk7XHJcblxyXG4gIHByaXZhdGUgYXV0aGVudGljYXRlZFVzZXIgOiBVc2VyO1xyXG4gIHB1YmxpYyBhdXRoT2JlcnZhYmxlID0gdGhpcy5fYXV0aFNldHRpbmcuYXNPYnNlcnZhYmxlKCk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNsZWFyVXNlcigpO1xyXG4gIH1cclxuICBnZXRVc2VyKCkgOiBVc2VyIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWRVc2VyO1xyXG4gIH1cclxuICBzZXRVc2VyKHVzZXI6IFVzZXIpIHtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZFVzZXIgPSB1c2VyO1xyXG4gICAgdGhpcy5fYXV0aFNldHRpbmcubmV4dCh1c2VyKTtcclxuICB9XHJcbiAgaXNMb2dnZWRJbigpIDogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkVXNlciAhPT0gbnVsbDtcclxuICB9XHJcbiAgY2xlYXJVc2VyKCkge1xyXG4gICAgdGhpcy5zZXRVc2VyKG51bGwpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19