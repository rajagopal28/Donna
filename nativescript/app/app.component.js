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
        console.log('Varuthaa...With Maps');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFTMUM7SUFDSSxrQkFBbUIsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUFHLENBQUM7SUFDM0MsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksNEJBQVE7QUFTckIsSUFBYSxZQUFZO0lBS3JCO1FBSkEsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUtaLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQzFDLENBQUM7O0dBQ1csWUFBWSxDQWF4QjtBQWJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgVGFiVmlldywgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInVpL3RhYi12aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhdEJvdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC1ib3QvY2hhdC1ib3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5kb29yTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRvb3ItbWFwL2luZG9vci1tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR29vZ2xlSW5kb29yQ29tcG9uZW50IH0gZnJvbSAnLi9nb29nbGUtaW5kb29yL2dvb2dsZS1pbmRvb3IuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbURlc2M6IHN0cmluZykge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQubW9iaWxlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQubW9iaWxlLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgdGl0bGUgPSAnRG9ubmEnO1xyXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxEYXRhSXRlbT47XHJcbiAgICBwdWJsaWMgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IG5ldyBBcnJheTxEYXRhSXRlbT4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2gobmV3IERhdGFJdGVtKFwiaXRlbSBcIiArIGkqMTApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ZhcnV0aGFhLi4uV2l0aCBNYXBzJyk7XHJcbiAgICB9XHJcbn1cclxuIl19