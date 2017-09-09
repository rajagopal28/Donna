"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var login_modal_component_1 = require("../login-modal/login-modal.component");
var TabbedDroneComponent = (function () {
    function TabbedDroneComponent(modal, vcRef, routerExtensions) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.routerExtensions = routerExtensions;
        this.title = 'What\'s New?';
        this.tabSelectedIndex = 0;
        console.log('Varuthaa...With Second route..');
    }
    TabbedDroneComponent.prototype.showLoginModal = function () {
        var options = {
            context: { someString: 'someString value' },
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(login_modal_component_1.LoginModalComponent, options).then(function (res) {
            if (res && res.success) {
                // call login and set session
                console.log('Ok Clicked...');
            }
        });
    };
    TabbedDroneComponent.prototype.goBackPage = function () {
        this.routerExtensions.backToPreviousPage();
    };
    TabbedDroneComponent.prototype.logout = function () {
        console.log('Logging out...');
    };
    return TabbedDroneComponent;
}());
TabbedDroneComponent = __decorate([
    core_1.Component({
        selector: 'TabbedDroneComponent',
        templateUrl: './tabbed-drone/tabbed-drone.component.html'
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef,
        router_1.RouterExtensions])
], TabbedDroneComponent);
exports.TabbedDroneComponent = TabbedDroneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiYmVkLWRyb25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYmJlZC1kcm9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0Qsc0RBQStEO0FBQy9ELGtFQUF1RTtBQUd2RSw4RUFBMkU7QUFNM0UsSUFBYSxvQkFBb0I7SUFJN0IsOEJBQW9CLEtBQXlCLEVBQ2xDLEtBQXVCLEVBQ3ZCLGdCQUFrQztRQUZ6QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSHRDLFVBQUssR0FBVyxjQUFjLENBQUM7UUFJbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLDZDQUFjLEdBQXJCO1FBQ0ksSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsRUFBQyxVQUFVLEVBQUUsa0JBQWtCLEVBQUM7WUFDekMsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLDJDQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdkQsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0Qiw2QkFBNkI7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLHlDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUNNLHFDQUFNLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSxvQkFBb0I7SUFKaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsV0FBVyxFQUFFLDRDQUE0QztLQUMxRCxDQUFDO3FDQUs2QixpQ0FBa0I7UUFDM0IsdUJBQWdCO1FBQ0wseUJBQWdCO0dBTnBDLG9CQUFvQixDQThCaEM7QUE5Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdUYWJiZWREcm9uZUNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmJlZC1kcm9uZS90YWJiZWQtZHJvbmUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJiZWREcm9uZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ1doYXRcXCdzIE5ldz8nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ZhcnV0aGFhLi4uV2l0aCBTZWNvbmQgcm91dGUuLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93TG9naW5Nb2RhbCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29udGV4dDoge3NvbWVTdHJpbmc6ICdzb21lU3RyaW5nIHZhbHVlJ30sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChMb2dpbk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgIC8vIGNhbGwgbG9naW4gYW5kIHNldCBzZXNzaW9uXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09rIENsaWNrZWQuLi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdvQmFja1BhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGxvZ291dCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0xvZ2dpbmcgb3V0Li4uJyk7XHJcbiAgICB9XHJcbn1cclxuIl19