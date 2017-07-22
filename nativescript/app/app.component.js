"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataItem = (function () {
    function DataItem(itemDesc) {
        this.itemDesc = itemDesc;
    }
    return DataItem;
}());
exports.DataItem = DataItem;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Donna';
        this.tabSelectedIndex = 1;
        this.items = new Array();
        for (var i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i * 10));
        }
        console.log('Varuthaa...');
        this.htmlString = '<p> We are presenting <b>Donna !! Your personalised office assistant!</b>The primary responsibility of Donna is to help you internally navigate in you huge corporate office and get you things done. Apart from internal navigation, she can also help you more productive, healthy and smart in a lot of ways. The proposed system can be integrated with public announcement systems, office update systems, food provider systems, business emails and meeting management systems etc, to help you at your work.</p>';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.mobile.html',
        styleUrls: ['./app.component.mobile.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFNMUM7SUFDSSxrQkFBbUIsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUFHLENBQUM7SUFDM0MsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksNEJBQVE7QUFTckIsSUFBYSxZQUFZO0lBT3JCO1FBTkEsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQU9aLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsMGZBQTBmLENBQUM7SUFDamhCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUMxQyxDQUFDOztHQUNXLFlBQVksQ0FnQnhCO0FBaEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IFRhYlZpZXcsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbURlc2M6IHN0cmluZykge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQubW9iaWxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQubW9iaWxlLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgdGl0bGUgPSAnRG9ubmEnO1xyXG4gICAgcHVibGljIGh0bWxTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PERhdGFJdGVtPjtcclxuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gbmV3IEFycmF5PERhdGFJdGVtPigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oXCJpdGVtIFwiICsgaSoxMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnVmFydXRoYWEuLi4nKTtcclxuICAgICAgICB0aGlzLmh0bWxTdHJpbmcgPSAnPHA+IFdlIGFyZSBwcmVzZW50aW5nIDxiPkRvbm5hICEhIFlvdXIgcGVyc29uYWxpc2VkIG9mZmljZSBhc3Npc3RhbnQhPC9iPlRoZSBwcmltYXJ5IHJlc3BvbnNpYmlsaXR5IG9mIERvbm5hIGlzIHRvIGhlbHAgeW91IGludGVybmFsbHkgbmF2aWdhdGUgaW4geW91IGh1Z2UgY29ycG9yYXRlIG9mZmljZSBhbmQgZ2V0IHlvdSB0aGluZ3MgZG9uZS4gQXBhcnQgZnJvbSBpbnRlcm5hbCBuYXZpZ2F0aW9uLCBzaGUgY2FuIGFsc28gaGVscCB5b3UgbW9yZSBwcm9kdWN0aXZlLCBoZWFsdGh5IGFuZCBzbWFydCBpbiBhIGxvdCBvZiB3YXlzLiBUaGUgcHJvcG9zZWQgc3lzdGVtIGNhbiBiZSBpbnRlZ3JhdGVkIHdpdGggcHVibGljIGFubm91bmNlbWVudCBzeXN0ZW1zLCBvZmZpY2UgdXBkYXRlIHN5c3RlbXMsIGZvb2QgcHJvdmlkZXIgc3lzdGVtcywgYnVzaW5lc3MgZW1haWxzIGFuZCBtZWV0aW5nIG1hbmFnZW1lbnQgc3lzdGVtcyBldGMsIHRvIGhlbHAgeW91IGF0IHlvdXIgd29yay48L3A+JztcclxuICAgIH1cclxufVxyXG4iXX0=