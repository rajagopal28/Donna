"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.showSignin = new core_1.EventEmitter();
        this.logoPath = 'assets/donna.gif';
        console.log('in home...');
        this.htmlString = '<p> We are presenting <b>Donna !! Your personalised office assistant!</b>The primary responsibility of Donna is to help you internally navigate in you huge corporate office and get you things done. Apart from internal navigation, she can also help you more productive, healthy and smart in a lot of ways. The proposed system can be integrated with public announcement systems, office update systems, food provider systems, business emails and meeting management systems etc, to help you at your work.</p>';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showLogin = function () {
        this.showSignin.emit('success');
    };
    return HomeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HomeComponent.prototype, "showSignin", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'Home',
        templateUrl: './home/home.component.html'
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUt4RSxJQUFhLGFBQWE7SUFNeEI7UUFKQSxlQUFVLEdBQXdCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3JELGFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUkxQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsMGZBQTBmLENBQUM7SUFDamhCLENBQUM7SUFDRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNELGlDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBZEM7SUFEQyxhQUFNLEVBQUU7OEJBQ0UsbUJBQVk7aURBQThCO0FBRjFDLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSw0QkFBNEI7S0FDMUMsQ0FBQzs7R0FDVyxhQUFhLENBZ0J6QjtBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ0hvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAT3V0cHV0KClcclxuICBzaG93U2lnbmluOkV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGxvZ29QYXRoID0gJ2Fzc2V0cy9kb25uYS5naWYnO1xyXG4gIHB1YmxpYyBodG1sU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnaW4gaG9tZS4uLicpO1xyXG4gICAgICB0aGlzLmh0bWxTdHJpbmcgPSAnPHA+IFdlIGFyZSBwcmVzZW50aW5nIDxiPkRvbm5hICEhIFlvdXIgcGVyc29uYWxpc2VkIG9mZmljZSBhc3Npc3RhbnQhPC9iPlRoZSBwcmltYXJ5IHJlc3BvbnNpYmlsaXR5IG9mIERvbm5hIGlzIHRvIGhlbHAgeW91IGludGVybmFsbHkgbmF2aWdhdGUgaW4geW91IGh1Z2UgY29ycG9yYXRlIG9mZmljZSBhbmQgZ2V0IHlvdSB0aGluZ3MgZG9uZS4gQXBhcnQgZnJvbSBpbnRlcm5hbCBuYXZpZ2F0aW9uLCBzaGUgY2FuIGFsc28gaGVscCB5b3UgbW9yZSBwcm9kdWN0aXZlLCBoZWFsdGh5IGFuZCBzbWFydCBpbiBhIGxvdCBvZiB3YXlzLiBUaGUgcHJvcG9zZWQgc3lzdGVtIGNhbiBiZSBpbnRlZ3JhdGVkIHdpdGggcHVibGljIGFubm91bmNlbWVudCBzeXN0ZW1zLCBvZmZpY2UgdXBkYXRlIHN5c3RlbXMsIGZvb2QgcHJvdmlkZXIgc3lzdGVtcywgYnVzaW5lc3MgZW1haWxzIGFuZCBtZWV0aW5nIG1hbmFnZW1lbnQgc3lzdGVtcyBldGMsIHRvIGhlbHAgeW91IGF0IHlvdXIgd29yay48L3A+JztcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG4gIHNob3dMb2dpbigpIHtcclxuICAgIHRoaXMuc2hvd1NpZ25pbi5lbWl0KCdzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=