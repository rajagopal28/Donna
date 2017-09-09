"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var base_api_data_service_1 = require("./base-api-data.service");
var UserDataService = (function (_super) {
    __extends(UserDataService, _super);
    function UserDataService(http) {
        return _super.call(this, http) || this;
    }
    UserDataService.prototype.getAllUsers = function (params) {
        return _super.prototype.getData.call(this, 'users', params);
    };
    UserDataService.prototype.addUser = function (user) {
        return _super.prototype.postData.call(this, 'users', user);
    };
    UserDataService.prototype.deleteUser = function (user) {
        return _super.prototype.deleteData.call(this, 'users\\' + user.id, {});
    };
    UserDataService.prototype.authenticate = function (username, password) {
        return _super.prototype.postData.call(this, 'users/login', { username: username, password: password });
    };
    return UserDataService;
}(base_api_data_service_1.BaseAPIDataService));
UserDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserDataService);
exports.UserDataService = UserDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBbUM7QUFHbkMsaUVBQTJEO0FBRzNELElBQWEsZUFBZTtJQUFTLG1DQUFrQjtJQUNyRCx5QkFBWSxJQUFTO2VBQ25CLGtCQUFNLElBQUksQ0FBQztJQUNkLENBQUM7SUFDQSxxQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNoQixNQUFNLENBQUMsaUJBQU0sT0FBTyxZQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsaUNBQU8sR0FBUCxVQUFRLElBQVM7UUFDZixNQUFNLENBQUMsaUJBQU0sUUFBUSxZQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsb0NBQVUsR0FBVixVQUFXLElBQVM7UUFDbEIsTUFBTSxDQUFDLGlCQUFNLFVBQVUsWUFBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsc0NBQVksR0FBWixVQUFhLFFBQWdCLEVBQUUsUUFBZ0I7UUFDN0MsTUFBTSxDQUFDLGlCQUFNLFFBQVEsWUFBQyxhQUFhLEVBQUUsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFoQkQsQ0FBcUMsMENBQWtCLEdBZ0J0RDtBQWhCWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBRU0sV0FBSTtHQURWLGVBQWUsQ0FnQjNCO0FBaEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy9hcHAubW9kZWxzJztcclxuaW1wb3J0IHtCYXNlQVBJRGF0YVNlcnZpY2V9IGZyb20gICcuL2Jhc2UtYXBpLWRhdGEuc2VydmljZSdcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJEYXRhU2VydmljZSBleHRlbmRzIEJhc2VBUElEYXRhU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoaHR0cDpIdHRwKSB7XHJcbiAgICBzdXBlcihodHRwKTtcclxuIH1cclxuICBnZXRBbGxVc2VycyhwYXJhbXMpe1xyXG4gICAgcmV0dXJuIHN1cGVyLmdldERhdGEoJ3VzZXJzJywgcGFyYW1zKTtcclxuICB9XHJcbiAgYWRkVXNlcih1c2VyOlVzZXIpIHtcclxuICAgIHJldHVybiBzdXBlci5wb3N0RGF0YSgndXNlcnMnLCB1c2VyKTtcclxuICB9XHJcbiAgZGVsZXRlVXNlcih1c2VyOlVzZXIpIHtcclxuICAgIHJldHVybiBzdXBlci5kZWxldGVEYXRhKCd1c2Vyc1xcXFwnK3VzZXIuaWQsIHt9KTtcclxuICB9XHJcbiAgYXV0aGVudGljYXRlKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdXBlci5wb3N0RGF0YSgndXNlcnMvbG9naW4nLCB7dXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmR9KTtcclxuICB9XHJcbn1cclxuIl19