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
        this.tabSelectedIndex = 1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFHN0Qsa0VBQXVFO0FBTXZFLDZFQUEwRTtBQU8xRSxJQUFhLFlBQVk7SUFJckIsc0JBQW9CLEtBQXlCLEVBQVUsS0FBdUI7UUFBMUQsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUg5RSxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBSVosSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLHFDQUFjLEdBQXJCO1FBQ0ksSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQywyQ0FBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3ZELEVBQUUsQ0FBQSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsNkJBQTZCO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUMxQyxDQUFDO3FDQUs2QixpQ0FBa0IsRUFBaUIsdUJBQWdCO0dBSnJFLFlBQVksQ0FzQnhCO0FBdEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IFRhYlZpZXcsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdEJvdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC1ib3QvY2hhdC1ib3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5kb29yTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRvb3ItbWFwL2luZG9vci1tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR29vZ2xlSW5kb29yQ29tcG9uZW50IH0gZnJvbSAnLi9nb29nbGUtaW5kb29yL2dvb2dsZS1pbmRvb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQubW9iaWxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQubW9iaWxlLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgdGl0bGUgPSAnRG9ubmEnO1xyXG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWYXJ1dGhhYS4uLldpdGggTWFwcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93TG9naW5Nb2RhbCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKExvZ2luTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzICYmIHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgLy8gY2FsbCBsb2dpbiBhbmQgc2V0IHNlc3Npb25cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnT2sgQ2xpY2tlZC4uLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19