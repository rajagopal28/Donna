"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var session_service_1 = require("../services/session-service");
var user_data_service_1 = require("../services/user-data.service");
var login_modal_component_1 = require("../login-modal/login-modal.component");
var TabbedDroneComponent = (function () {
    function TabbedDroneComponent(modal, vcRef, routerExtensions, sessionService, userService) {
        var _this = this;
        this.modal = modal;
        this.vcRef = vcRef;
        this.routerExtensions = routerExtensions;
        this.sessionService = sessionService;
        this.userService = userService;
        this.isLoggedIn = false;
        this.title = 'What\'s New?';
        this.sessionService.authObervable.subscribe(function (authUser) {
            console.log('observing...');
            _this.isLoggedIn = (authUser && authUser.id !== null);
        });
        this.tabSelectedIndex = 0;
        console.log('Varuthaa...With Second route..');
    }
    TabbedDroneComponent.prototype.showLoginModal = function () {
        var _this = this;
        var options = {
            context: { someString: 'someString value' },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(login_modal_component_1.LoginModalComponent, options).then(function (res) {
            if (res && res.success) {
                // call login and set session
                console.log('Ok Clicked...');
                _this.loginUser(res);
            }
        });
    };
    TabbedDroneComponent.prototype.loginUser = function (params) {
        var _this = this;
        console.log('logging in...');
        console.log(JSON.stringify(params));
        this.userService.authenticate(params.username, params.password).subscribe(function (response) {
            console.log(JSON.stringify(response));
            if (response.success) {
                _this.sessionService.setUser(response.item);
            }
        }, function (error) { return console.log('ERROR LOGING IN:', JSON.stringify(error)); }, function () { return console.log('Authenticated...'); });
    };
    TabbedDroneComponent.prototype.goBackPage = function () {
        this.routerExtensions.backToPreviousPage();
    };
    TabbedDroneComponent.prototype.logout = function () {
        console.log('Logging out...');
        this.sessionService.clearUser();
    };
    return TabbedDroneComponent;
}());
TabbedDroneComponent = __decorate([
    core_1.Component({
        selector: 'TabbedDroneComponent',
        templateUrl: './tabbed-drone/tabbed-drone.component.html',
        providers: [session_service_1.SessionService, user_data_service_1.UserDataService]
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef,
        router_1.RouterExtensions,
        session_service_1.SessionService,
        user_data_service_1.UserDataService])
], TabbedDroneComponent);
exports.TabbedDroneComponent = TabbedDroneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmVkLWRyb25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYmJlZC1kcm9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsc0RBQStEO0FBQy9ELGtFQUF1RTtBQUd2RSwrREFBNkQ7QUFDN0QsbUVBQWdFO0FBQ2hFLDhFQUEyRTtBQU8zRSxJQUFhLG9CQUFvQjtJQUs3Qiw4QkFBb0IsS0FBeUIsRUFDbEMsS0FBdUIsRUFDdkIsZ0JBQWtDLEVBQ2hDLGNBQThCLEVBQ2hDLFdBQTRCO1FBSnZDLGlCQVdDO1FBWG1CLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQVBoQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLFVBQUssR0FBVyxjQUFjLENBQUM7UUFNakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSw2Q0FBYyxHQUFyQjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsRUFBQyxVQUFVLEVBQUUsa0JBQWtCLEVBQUM7WUFDekMsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDJDQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdkQsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0Qiw2QkFBNkI7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNPLHdDQUFTLEdBQWpCLFVBQWtCLE1BQU07UUFBeEIsaUJBYUM7UUFaQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDdkUsVUFBQSxRQUFRO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXRELENBQXNELEVBQy9ELGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQS9CLENBQStCLENBQ3RDLENBQUM7SUFDTixDQUFDO0lBQ00seUNBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ00scUNBQU0sR0FBYjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFyREQsSUFxREM7QUFyRFksb0JBQW9CO0lBTGhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFdBQVcsRUFBRSw0Q0FBNEM7UUFDekQsU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxtQ0FBZSxDQUFDO0tBQzdDLENBQUM7cUNBTTZCLGlDQUFrQjtRQUMzQix1QkFBZ0I7UUFDTCx5QkFBZ0I7UUFDaEIsZ0NBQWM7UUFDbkIsbUNBQWU7R0FUOUIsb0JBQW9CLENBcURoQztBQXJEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuXHJcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2Vzc2lvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlckRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdUYWJiZWREcm9uZUNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmJlZC1kcm9uZS90YWJiZWQtZHJvbmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1Nlc3Npb25TZXJ2aWNlLCBVc2VyRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJiZWREcm9uZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGlzTG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdXaGF0XFwncyBOZXc/JztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICBwcm90ZWN0ZWQgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlLFxyXG4gICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlckRhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgIHRoaXMuc2Vzc2lvblNlcnZpY2UuYXV0aE9iZXJ2YWJsZS5zdWJzY3JpYmUoYXV0aFVzZXIgPT4ge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdvYnNlcnZpbmcuLi4nKTtcclxuICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSAoYXV0aFVzZXIgJiYgYXV0aFVzZXIuaWQgIT09IG51bGwpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWYXJ1dGhhYS4uLldpdGggU2Vjb25kIHJvdXRlLi4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0xvZ2luTW9kYWwoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHtzb21lU3RyaW5nOiAnc29tZVN0cmluZyB2YWx1ZSd9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9naW5Nb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMgJiYgcmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAvLyBjYWxsIGxvZ2luIGFuZCBzZXQgc2Vzc2lvblxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPayBDbGlja2VkLi4uJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dpblVzZXIocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBsb2dpblVzZXIocGFyYW1zKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIGluLi4uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5hdXRoZW50aWNhdGUocGFyYW1zLnVzZXJuYW1lLCBwYXJhbXMucGFzc3dvcmQpLnN1YnNjcmliZShcclxuICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2Vzc2lvblNlcnZpY2Uuc2V0VXNlcihyZXNwb25zZS5pdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdFUlJPUiBMT0dJTkcgSU46JywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKSxcclxuICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGVkLi4uJylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdvQmFja1BhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGxvZ291dCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0xvZ2dpbmcgb3V0Li4uJyk7XHJcbiAgICAgIHRoaXMuc2Vzc2lvblNlcnZpY2UuY2xlYXJVc2VyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19