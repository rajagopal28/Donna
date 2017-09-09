"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var LoginModalComponent = (function () {
    function LoginModalComponent(params) {
        this.params = params;
        this.input = {
            username: "",
            password: "",
            success: false
        };
        console.log(JSON.stringify(params));
    }
    LoginModalComponent.prototype.cancel = function () {
        this.params.closeCallback({ success: false });
    };
    LoginModalComponent.prototype.ok = function () {
        this.input.success = true;
        console.log(JSON.stringify(this.input));
        this.params.closeCallback(this.input);
    };
    return LoginModalComponent;
}());
LoginModalComponent = __decorate([
    core_1.Component({
        selector: "LoginModal",
        templateUrl: "./login-modal/login-modal.component.html",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], LoginModalComponent);
exports.LoginModalComponent = LoginModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQU01RSxJQUFhLG1CQUFtQjtJQVE5Qiw2QkFBMkIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUE7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBQ00sb0NBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLGdDQUFFLEdBQVQ7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLG1CQUFtQjtJQUovQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDBDQUEwQztLQUN4RCxDQUFDO3FDQVNtQywyQkFBaUI7R0FSekMsbUJBQW1CLENBMEIvQjtBQTFCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkxvZ2luTW9kYWxcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZGFsQ29tcG9uZW50IHtcclxuXHJcbiAgcHVibGljIGlucHV0OiB7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xyXG4gICAgdGhpcy5pbnB1dCA9IHtcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBzdWNjZXNzOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGFyYW1zKSlcclxuICB9XHJcbiAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soe3N1Y2Nlc3M6IGZhbHNlfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb2soKSB7XHJcbiAgICB0aGlzLmlucHV0LnN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5pbnB1dCkpO1xyXG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLmlucHV0KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==