"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var IndoorMapComponent = (function () {
    function IndoorMapComponent() {
        this.webViewSrc = "https://rajagopal28.github.io/Donna/#/indoor-map";
    }
    IndoorMapComponent.prototype.ngAfterViewInit = function () {
        var webview = this.webViewRef.nativeElement;
        webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            var message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            }
            else {
                message = "Error loading " + args.url + ": " + args.error;
            }
            console.log("WebView message - " + message);
        });
    };
    IndoorMapComponent.prototype.ngOnInit = function () {
    };
    return IndoorMapComponent;
}());
__decorate([
    core_1.ViewChild("myWebView"),
    __metadata("design:type", core_1.ElementRef)
], IndoorMapComponent.prototype, "webViewRef", void 0);
IndoorMapComponent = __decorate([
    core_1.Component({
        selector: 'IndoorMap',
        templateUrl: './indoor-map/indoor-map.component.html'
    })
], IndoorMapComponent);
exports.IndoorMapComponent = IndoorMapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kb29yLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRvb3ItbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSx3Q0FBcUQ7QUFNckQsSUFBYSxrQkFBa0I7SUFKL0I7UUFLVyxlQUFVLEdBQVcsa0RBQWtELENBQUM7SUFvQm5GLENBQUM7SUFoQkcsNENBQWUsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRXJELE9BQU8sQ0FBQyxFQUFFLENBQUMsa0JBQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLElBQW1CO1lBQy9ELElBQUksT0FBTyxDQUFDO1lBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZCxPQUFPLEdBQUcsOEJBQThCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN4RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUQsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QscUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFsQjJCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFhLGlCQUFVO3NEQUFDO0FBSHRDLGtCQUFrQjtJQUo5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHdDQUF3QztLQUN4RCxDQUFDO0dBQ1csa0JBQWtCLENBcUI5QjtBQXJCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ0luZG9vck1hcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW5kb29yLW1hcC9pbmRvb3ItbWFwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5kb29yTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyB3ZWJWaWV3U3JjOiBzdHJpbmcgPSBcImh0dHBzOi8vcmFqYWdvcGFsMjguZ2l0aHViLmlvL0Rvbm5hLyMvaW5kb29yLW1hcFwiO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJteVdlYlZpZXdcIikgd2ViVmlld1JlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgbGV0IHdlYnZpZXc6IFdlYlZpZXcgPSB0aGlzLndlYlZpZXdSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTtcclxuICAgICAgICAgICAgaWYgKCFhcmdzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJXZWJWaWV3IGZpbmlzaGVkIGxvYWRpbmcgb2YgXCIgKyBhcmdzLnVybDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIGxvYWRpbmcgXCIgKyBhcmdzLnVybCArIFwiOiBcIiArIGFyZ3MuZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWJWaWV3IG1lc3NhZ2UgLSBcIiArIG1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==