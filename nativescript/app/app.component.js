"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var login_modal_component_1 = require("./login-modal/login-modal.component");
var AppComponent = (function () {
    function AppComponent(modal, vcRef) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.title = 'Donna';
        console.log('Varuthaa...With Maps');
    }
    AppComponent.prototype.showLoginModal = function () {
        var options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(login_modal_component_1.LoginModalComponent, options).then(function (res) {
            if (res && res.success) {
                // call login and set session
                console.log('Ok Clicked...');
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.mobile.html',
        styleUrls: ['./app.component.mobile.css']
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService, core_1.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFHN0Qsa0VBQXVFO0FBTXZFLDZFQUEwRTtBQU8xRSxJQUFhLFlBQVk7SUFHckIsc0JBQW9CLEtBQXlCLEVBQVUsS0FBdUI7UUFBMUQsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUY5RSxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBR1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxxQ0FBYyxHQUFyQjtRQUNJLElBQUksT0FBTyxHQUFHO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsMkNBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUN2RCxFQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLDZCQUE2QjtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDMUMsQ0FBQztxQ0FJNkIsaUNBQWtCLEVBQWlCLHVCQUFnQjtHQUhyRSxZQUFZLENBb0J4QjtBQXBCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXRCb3RDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtYm90L2NoYXQtYm90LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluZG9vck1hcENvbXBvbmVudCB9IGZyb20gJy4vaW5kb29yLW1hcC9pbmRvb3ItbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdvb2dsZUluZG9vckNvbXBvbmVudCB9IGZyb20gJy4vZ29vZ2xlLWluZG9vci9nb29nbGUtaW5kb29yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi1tb2RhbC9sb2dpbi1tb2RhbC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lm1vYmlsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50Lm1vYmlsZS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIHRpdGxlID0gJ0Rvbm5hJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVmFydXRoYWEuLi5XaXRoIE1hcHMnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0xvZ2luTW9kYWwoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChMb2dpbk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgIC8vIGNhbGwgbG9naW4gYW5kIHNldCBzZXNzaW9uXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09rIENsaWNrZWQuLi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==