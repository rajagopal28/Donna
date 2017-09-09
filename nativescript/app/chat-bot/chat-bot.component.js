"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var api_ai_javascript_1 = require("api-ai-javascript");
var app_models_1 = require("../models/app.models");
var session_service_1 = require("../services/session-service");
var client = new api_ai_javascript_1.ApiAiClient({ accessToken: 'b71bf0851f6f41f8b1728e20c7946c25' });
var ChatBotComponent = (function () {
    function ChatBotComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.showSignin = new core_1.EventEmitter();
        this.isLoggedIn = false;
        this.newMessage = new app_models_1.ChatItem();
    }
    ChatBotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.authObervable.subscribe(function (authUser) {
            _this.isLoggedIn = _this.sessionService.isLoggedIn();
            console.log('observing... chat bot' + _this.isLoggedIn);
        });
        console.log('chat bot loading..');
        var _self = this;
        this.messages = [];
        this.newMessage.content = 'Hi Donna';
        this.sendMessage(this.newMessage, function (response) {
            _self.addMessage(response, 'Donna');
        });
    };
    ChatBotComponent.prototype.showLogin = function () {
        this.showSignin.emit('success');
    };
    ChatBotComponent.prototype.ngAfterViewInit = function () {
    };
    ChatBotComponent.prototype.addMessage = function (response, user) {
        var result = { isNavigation: false, content: '', isSelf: false, user: user, timestamp: new Date(), meta: {} };
        var isNavigation = (response.result.action === 'route-to-location-request');
        var parameters = response.result.parameters;
        result.content = response.result.fulfillment.speech;
        this.messages.push(result);
        if (isNavigation) {
            var meta = {};
            console.log('Parmeters from chat...' + JSON.stringify(parameters));
            meta.fromLocationId = parameters['fromLocation'] ? parameters['fromLocation'].id : -1;
            meta.toLocationId = parameters['toLocation'] ? parameters['toLocation'].id : -1;
            var navResult = { isNavigation: true, content: '', isSelf: false, user: user, timestamp: new Date(), meta: meta };
            this.messages.push(navResult);
        }
    };
    ChatBotComponent.prototype.align = function (item) {
        return item.isSelf ? "right" : "left";
    };
    ChatBotComponent.prototype.showImage = function (item) {
        return item.isSelf ? "collapse" : "visible";
    };
    ChatBotComponent.prototype.showText = function (item) {
        return item.isNavigation ? "collapse" : "visible";
    };
    ChatBotComponent.prototype.showNav = function (item) {
        return item.isNavigation ? "visible" : "collapse";
    };
    ChatBotComponent.prototype.sendMessage = function (message, cb) {
        var cMsg = { isNavigation: false, content: message.content, isSelf: true, user: 'You', timestamp: new Date(), meta: {} };
        if (this.messages) {
            this.messages.push(cMsg);
        }
        else {
            this.messages = [cMsg];
        }
        var contexts;
        if (this.sessionService.isLoggedIn()) {
            contexts = [{
                    name: 'auth',
                    parameters: {
                        token: this.sessionService.getUser().username
                    }
                }];
        }
        client.textRequest(message.content, { contexts: contexts })
            .then(function (response) {
            cb(response);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ChatBotComponent.prototype.openNav = function (item) {
        console.log('opening nav for', JSON.stringify(item));
        var navigationExtras = {
            queryParams: {
                "fromLocationId": item.meta.fromLocationId,
                "toLocationId": item.meta.toLocationId
            }
        };
        this.router.navigate(['navigation'], navigationExtras);
    };
    ChatBotComponent.prototype.send = function () {
        var _self = this;
        console.log(JSON.stringify(this.newMessage));
        this.sendMessage(this.newMessage, function (response) {
            _self.addMessage(response, 'Donna');
        });
        this.newMessage.content = '';
    };
    return ChatBotComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ChatBotComponent.prototype, "showSignin", void 0);
ChatBotComponent = __decorate([
    core_1.Component({
        selector: 'ChatBot',
        templateUrl: './chat-bot/chat-bot.component.html',
        styleUrls: ['./chat-bot/chat-bot.component.css']
    }),
    __metadata("design:paramtypes", [session_service_1.SessionService,
        router_1.Router])
], ChatBotComponent);
exports.ChatBotComponent = ChatBotComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1ib3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC1ib3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVGO0FBQ3ZGLDBDQUF5RDtBQUd6RCx1REFBZ0Q7QUFFaEQsbURBQWdEO0FBQ2hELCtEQUE2RDtBQUU3RCxJQUFNLE1BQU0sR0FBRyxJQUFJLCtCQUFXLENBQUMsRUFBRSxXQUFXLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQyxDQUFBO0FBT25GLElBQWEsZ0JBQWdCO0lBTzNCLDBCQUFzQixjQUE4QixFQUM1QyxNQUFjO1FBREEsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzVDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOdEIsZUFBVSxHQUF3QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNyRCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGVBQVUsR0FBYSxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQUdaLENBQUM7SUFFM0IsbUNBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNsRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxRQUFRO1lBQ3pDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9DQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsMENBQWUsR0FBZjtJQUNBLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsUUFBUSxFQUFFLElBQUk7UUFDdkIsSUFBSSxNQUFNLEdBQWEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4SCxJQUFJLFlBQVksR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLDJCQUEyQixDQUFDLENBQUM7UUFDNUUsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDNUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLElBQUksR0FBUSxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLElBQUksU0FBUyxHQUFhLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDNUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFDRCxnQ0FBSyxHQUFMLFVBQU0sSUFBYztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvQ0FBUyxHQUFULFVBQVUsSUFBYztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFDRCxtQ0FBUSxHQUFSLFVBQVMsSUFBYztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3BELENBQUM7SUFDRCxrQ0FBTyxHQUFQLFVBQVEsSUFBYztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQ3BELENBQUM7SUFDRCxzQ0FBVyxHQUFYLFVBQVksT0FBTyxFQUFFLEVBQUU7UUFDckIsSUFBSSxJQUFJLEdBQWEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDbkksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLFFBQWdCLENBQUM7UUFDckIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsUUFBUSxHQUFFLENBQUM7b0JBQ1QsSUFBSSxFQUFFLE1BQU07b0JBQ1osVUFBVSxFQUFFO3dCQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVE7cUJBQzlDO2lCQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7YUFDdEQsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELGtDQUFPLEdBQVAsVUFBUSxJQUFjO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksZ0JBQWdCLEdBQXFCO1lBQ3ZDLFdBQVcsRUFBRztnQkFDVixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7Z0JBQzFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7YUFDM0M7U0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxRQUFRO1lBQ3pDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFqR0QsSUFpR0M7QUEvRkM7SUFEQyxhQUFNLEVBQUU7OEJBQ0UsbUJBQVk7b0RBQThCO0FBRjFDLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNqRCxDQUFDO3FDQVFzQyxnQ0FBYztRQUNwQyxlQUFNO0dBUlgsZ0JBQWdCLENBaUc1QjtBQWpHWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XHJcbmltcG9ydCB7IEFwaUFpQ2xpZW50IH0gZnJvbSBcImFwaS1haS1qYXZhc2NyaXB0XCI7XHJcblxyXG5pbXBvcnQgeyBDaGF0SXRlbSB9IGZyb20gJy4uL21vZGVscy9hcHAubW9kZWxzJztcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXNzaW9uLXNlcnZpY2UnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwaUFpQ2xpZW50KHsgYWNjZXNzVG9rZW46ICdiNzFiZjA4NTFmNmY0MWY4YjE3MjhlMjBjNzk0NmMyNScgfSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnQ2hhdEJvdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQtYm90L2NoYXQtYm90LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGF0LWJvdC9jaGF0LWJvdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRCb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBPdXRwdXQoKVxyXG4gIHNob3dTaWduaW46RXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgaXNMb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIG1lc3NhZ2VzOiBBcnJheTxDaGF0SXRlbT47XHJcbiAgbmV3TWVzc2FnZTogQ2hhdEl0ZW0gPSBuZXcgQ2hhdEl0ZW0oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlc3Npb25TZXJ2aWNlOiBTZXNzaW9uU2VydmljZSxcclxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlc3Npb25TZXJ2aWNlLmF1dGhPYmVydmFibGUuc3Vic2NyaWJlKGF1dGhVc2VyID0+IHtcclxuICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdGhpcy5zZXNzaW9uU2VydmljZS5pc0xvZ2dlZEluKClcclxuICAgICAgY29uc29sZS5sb2coJ29ic2VydmluZy4uLiBjaGF0IGJvdCcgKyB0aGlzLmlzTG9nZ2VkSW4pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnY2hhdCBib3QgbG9hZGluZy4uJyk7XHJcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgdGhpcy5uZXdNZXNzYWdlLmNvbnRlbnQgPSAnSGkgRG9ubmEnO1xyXG4gICAgdGhpcy5zZW5kTWVzc2FnZSh0aGlzLm5ld01lc3NhZ2UsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBfc2VsZi5hZGRNZXNzYWdlKHJlc3BvbnNlLCAnRG9ubmEnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzaG93TG9naW4oKSB7XHJcbiAgICB0aGlzLnNob3dTaWduaW4uZW1pdCgnc3VjY2VzcycpO1xyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgfVxyXG5cclxuICBhZGRNZXNzYWdlKHJlc3BvbnNlLCB1c2VyKSB7XHJcbiAgICB2YXIgcmVzdWx0OiBDaGF0SXRlbSA9IHsgaXNOYXZpZ2F0aW9uOiBmYWxzZSwgY29udGVudDogJycsIGlzU2VsZjogZmFsc2UsIHVzZXI6IHVzZXIsIHRpbWVzdGFtcDogbmV3IERhdGUoKSwgbWV0YToge30gfTtcclxuICAgIGxldCBpc05hdmlnYXRpb24gPSAocmVzcG9uc2UucmVzdWx0LmFjdGlvbiA9PT0gJ3JvdXRlLXRvLWxvY2F0aW9uLXJlcXVlc3QnKTtcclxuICAgIGxldCBwYXJhbWV0ZXJzID0gcmVzcG9uc2UucmVzdWx0LnBhcmFtZXRlcnM7XHJcbiAgICByZXN1bHQuY29udGVudCA9IHJlc3BvbnNlLnJlc3VsdC5mdWxmaWxsbWVudC5zcGVlY2g7XHJcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gocmVzdWx0KTtcclxuICAgIGlmIChpc05hdmlnYXRpb24pIHtcclxuICAgICAgdmFyIG1ldGE6IGFueSA9IHt9O1xyXG4gICAgICBjb25zb2xlLmxvZygnUGFybWV0ZXJzIGZyb20gY2hhdC4uLicgKyBKU09OLnN0cmluZ2lmeShwYXJhbWV0ZXJzKSk7XHJcbiAgICAgIG1ldGEuZnJvbUxvY2F0aW9uSWQgPSBwYXJhbWV0ZXJzWydmcm9tTG9jYXRpb24nXSA/IHBhcmFtZXRlcnNbJ2Zyb21Mb2NhdGlvbiddLmlkIDogLTE7XHJcbiAgICAgIG1ldGEudG9Mb2NhdGlvbklkID0gcGFyYW1ldGVyc1sndG9Mb2NhdGlvbiddID8gcGFyYW1ldGVyc1sndG9Mb2NhdGlvbiddLmlkIDogLTE7XHJcbiAgICAgIHZhciBuYXZSZXN1bHQ6IENoYXRJdGVtID0geyBpc05hdmlnYXRpb246IHRydWUsIGNvbnRlbnQ6ICcnLCBpc1NlbGY6IGZhbHNlLCB1c2VyOiB1c2VyLCB0aW1lc3RhbXA6IG5ldyBEYXRlKCksIG1ldGE6IG1ldGEgfTtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5hdlJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFsaWduKGl0ZW06IENoYXRJdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5pc1NlbGYgPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcclxuICB9XHJcbiAgc2hvd0ltYWdlKGl0ZW06IENoYXRJdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5pc1NlbGYgPyBcImNvbGxhcHNlXCIgOiBcInZpc2libGVcIjtcclxuICB9XHJcbiAgc2hvd1RleHQoaXRlbTogQ2hhdEl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmlzTmF2aWdhdGlvbiA/IFwiY29sbGFwc2VcIiA6IFwidmlzaWJsZVwiO1xyXG4gIH1cclxuICBzaG93TmF2KGl0ZW06IENoYXRJdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5pc05hdmlnYXRpb24gPyBcInZpc2libGVcIiA6IFwiY29sbGFwc2VcIjtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgY2IpIHtcclxuICAgIGxldCBjTXNnOiBDaGF0SXRlbSA9IHsgaXNOYXZpZ2F0aW9uOiBmYWxzZSwgY29udGVudDogbWVzc2FnZS5jb250ZW50LCBpc1NlbGY6IHRydWUsIHVzZXI6ICdZb3UnLCB0aW1lc3RhbXA6IG5ldyBEYXRlKCksIG1ldGE6IHt9IH07XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlcykge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goY01zZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzID0gW2NNc2ddO1xyXG4gICAgfVxyXG4gICAgbGV0IGNvbnRleHRzIDogW2FueV07XHJcbiAgICBpZih0aGlzLnNlc3Npb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xyXG4gICAgICBjb250ZXh0cz0gW3tcclxuICAgICAgICBuYW1lOiAnYXV0aCcsXHJcbiAgICAgICAgcGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgdG9rZW46IHRoaXMuc2Vzc2lvblNlcnZpY2UuZ2V0VXNlcigpLnVzZXJuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XTtcclxuICAgIH1cclxuICAgIGNsaWVudC50ZXh0UmVxdWVzdChtZXNzYWdlLmNvbnRlbnQsIHtjb250ZXh0czogY29udGV4dHN9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjYihyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIG9wZW5OYXYoaXRlbTogQ2hhdEl0ZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdvcGVuaW5nIG5hdiBmb3InLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgcXVlcnlQYXJhbXMgOiB7XHJcbiAgICAgICAgICBcImZyb21Mb2NhdGlvbklkXCI6IGl0ZW0ubWV0YS5mcm9tTG9jYXRpb25JZCxcclxuICAgICAgICAgIFwidG9Mb2NhdGlvbklkXCI6IGl0ZW0ubWV0YS50b0xvY2F0aW9uSWRcclxuICAgIH19O1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyduYXZpZ2F0aW9uJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gIH1cclxuICBzZW5kKCk6IHZvaWQge1xyXG4gICAgbGV0IF9zZWxmID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubmV3TWVzc2FnZSkpO1xyXG4gICAgdGhpcy5zZW5kTWVzc2FnZSh0aGlzLm5ld01lc3NhZ2UsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBfc2VsZi5hZGRNZXNzYWdlKHJlc3BvbnNlLCAnRG9ubmEnKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uZXdNZXNzYWdlLmNvbnRlbnQgPSAnJztcclxuICB9XHJcbn1cclxuIl19