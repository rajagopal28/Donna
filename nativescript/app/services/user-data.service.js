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
        return _super.prototype.deleteData.call(this, 'users/' + user.id, {});
    };
    UserDataService.prototype.authenticate = function (username, password) {
        console.log('unam=' + username + ' pass=' + password);
        return _super.prototype.postData.call(this, 'users/login', { username: username, password: password });
    };
    return UserDataService;
}(base_api_data_service_1.BaseAPIDataService));
UserDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserDataService);
exports.UserDataService = UserDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBbUM7QUFHbkMsaUVBQTJEO0FBRzNELElBQWEsZUFBZTtJQUFTLG1DQUFrQjtJQUNyRCx5QkFBWSxJQUFTO2VBQ25CLGtCQUFNLElBQUksQ0FBQztJQUNkLENBQUM7SUFDQSxxQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNoQixNQUFNLENBQUMsaUJBQU0sT0FBTyxZQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsaUNBQU8sR0FBUCxVQUFRLElBQVM7UUFDZixNQUFNLENBQUMsaUJBQU0sUUFBUSxZQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsb0NBQVUsR0FBVixVQUFXLElBQVM7UUFDbEIsTUFBTSxDQUFDLGlCQUFNLFVBQVUsWUFBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsc0NBQVksR0FBWixVQUFhLFFBQWdCLEVBQUUsUUFBZ0I7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsUUFBUSxHQUFDLFFBQVEsR0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsaUJBQU0sUUFBUSxZQUFDLGFBQWEsRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUFxQywwQ0FBa0IsR0FpQnREO0FBakJZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FFTSxXQUFJO0dBRFYsZUFBZSxDQWlCM0I7QUFqQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnO1xyXG5pbXBvcnQge0Jhc2VBUElEYXRhU2VydmljZX0gZnJvbSAgJy4vYmFzZS1hcGktZGF0YS5zZXJ2aWNlJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlckRhdGFTZXJ2aWNlIGV4dGVuZHMgQmFzZUFQSURhdGFTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihodHRwOkh0dHApIHtcclxuICAgIHN1cGVyKGh0dHApO1xyXG4gfVxyXG4gIGdldEFsbFVzZXJzKHBhcmFtcyl7XHJcbiAgICByZXR1cm4gc3VwZXIuZ2V0RGF0YSgndXNlcnMnLCBwYXJhbXMpO1xyXG4gIH1cclxuICBhZGRVc2VyKHVzZXI6VXNlcikge1xyXG4gICAgcmV0dXJuIHN1cGVyLnBvc3REYXRhKCd1c2VycycsIHVzZXIpO1xyXG4gIH1cclxuICBkZWxldGVVc2VyKHVzZXI6VXNlcikge1xyXG4gICAgcmV0dXJuIHN1cGVyLmRlbGV0ZURhdGEoJ3VzZXJzLycrdXNlci5pZCwge30pO1xyXG4gIH1cclxuICBhdXRoZW50aWNhdGUodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coJ3VuYW09Jyt1c2VybmFtZSsnIHBhc3M9JytwYXNzd29yZCk7XHJcbiAgICByZXR1cm4gc3VwZXIucG9zdERhdGEoJ3VzZXJzL2xvZ2luJywge3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==