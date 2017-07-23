"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_ai_javascript_1 = require("api-ai-javascript");
var app_models_1 = require("../models/app.models");
var indoor_location_data_service_1 = require("../services/indoor-location-data.service");
var client = new api_ai_javascript_1.ApiAiClient({ accessToken: 'b71bf0851f6f41f8b1728e20c7946c25' });
var ChatBotComponent = (function () {
    function ChatBotComponent(hotSpotService) {
        this.hotSpotService = hotSpotService;
        this.newMessage = new app_models_1.ChatItem();
    }
    ChatBotComponent.prototype.ngOnInit = function () {
        console.log('chat bot loading..');
        var _self = this;
        this.newMessage.content = 'Hi Donna';
        this.sendMessage(this.newMessage, function (response) {
            _self.addMessage(response, 'Donna');
        });
        var locationCount = this.hotSpotService.getPoiLocations().length;
        this.fromLocationPosition = Math.round((Math.random() * 99999) % locationCount) + 1;
        this.toLocationPosition = Math.round((Math.random() * 99999) % locationCount) + 1;
    };
    ChatBotComponent.prototype.addMessage = function (response, user) {
        console.log(response);
        var result = { isNavigation: false, content: '', isSelf: false, user: user, timestamp: new Date() };
        result.isNavigation = response.result.action === 'navigation';
        result.content = response.result.fulfillment.speech;
        if (this.messages) {
            this.messages.push(result);
        }
        else {
            this.messages = [result];
        }
    };
    ChatBotComponent.prototype.align = function (item) {
        return item.isSelf ? "right" : "left";
    };
    ChatBotComponent.prototype.showImage = function (item) {
        return item.isSelf ? "collapse" : "visible";
    };
    ChatBotComponent.prototype.showNav = function (item) {
        return item.isNavigation ? "visible" : "collapse";
    };
    ChatBotComponent.prototype.sendMessage = function (message, cb) {
        var cMsg = { isNavigation: false, content: message.content, isSelf: true, user: 'You', timestamp: new Date() };
        if (this.messages) {
            this.messages.push(cMsg);
        }
        else {
            this.messages = [cMsg];
        }
        client.textRequest(message.content)
            .then(function (response) {
            cb(response);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ChatBotComponent.prototype.send = function (message) {
        var _self = this;
        this.sendMessage(this.newMessage, function (response) {
            _self.addMessage(response, 'Donna');
        });
    };
    return ChatBotComponent;
}());
ChatBotComponent = __decorate([
    core_1.Component({
        selector: 'ChatBot',
        templateUrl: './chat-bot/chat-bot.component.html',
        styleUrls: ['./chat-bot/chat-bot.component.css'],
        providers: [indoor_location_data_service_1.IndoorLocationDataService]
    }),
    __metadata("design:paramtypes", [indoor_location_data_service_1.IndoorLocationDataService])
], ChatBotComponent);
exports.ChatBotComponent = ChatBotComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1ib3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC1ib3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHVEQUE4QztBQUU5QyxtREFBZ0Q7QUFDaEQseUZBQXFGO0FBRXJGLElBQU0sTUFBTSxHQUFHLElBQUksK0JBQVcsQ0FBQyxFQUFDLFdBQVcsRUFBRSxrQ0FBa0MsRUFBQyxDQUFDLENBQUE7QUFRakYsSUFBYSxnQkFBZ0I7SUFLM0IsMEJBQ1MsY0FBeUM7UUFBekMsbUJBQWMsR0FBZCxjQUFjLENBQTJCO1FBSmxELGVBQVUsR0FBYSxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQUllLENBQUM7SUFFdEQsbUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUUsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLFFBQVE7WUFDekMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsYUFB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Q0FBQyx3REFBeUIsQ0FBQztLQUN2QyxDQUFDO3FDQU95Qix3REFBeUI7R0FOdkMsZ0JBQWdCLENBNEQ1QjtBQTVEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQge0FwaUFpQ2xpZW50fSBmcm9tIFwiYXBpLWFpLWphdmFzY3JpcHRcIjtcclxuXHJcbmltcG9ydCB7IENoYXRJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnO1xyXG5pbXBvcnQgeyBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kb29yLWxvY2F0aW9uLWRhdGEuc2VydmljZSc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBpQWlDbGllbnQoe2FjY2Vzc1Rva2VuOiAnYjcxYmYwODUxZjZmNDFmOGIxNzI4ZTIwYzc5NDZjMjUnfSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnQ2hhdEJvdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQtYm90L2NoYXQtYm90LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6WyAnLi9jaGF0LWJvdC9jaGF0LWJvdC5jb21wb25lbnQuY3NzJyBdLFxyXG4gIHByb3ZpZGVyczogW0luZG9vckxvY2F0aW9uRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Qm90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtZXNzYWdlcyA6IFtDaGF0SXRlbV07XHJcbiAgbmV3TWVzc2FnZTogQ2hhdEl0ZW0gPSBuZXcgQ2hhdEl0ZW0oKTtcclxuICBmcm9tTG9jYXRpb25Qb3NpdGlvbjogbnVtYmVyO1xyXG4gIHRvTG9jYXRpb25Qb3NpdGlvbjogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICBwcml2YXRlIGhvdFNwb3RTZXJ2aWNlOiBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjaGF0IGJvdCBsb2FkaW5nLi4nKTtcclxuICAgIGxldCBfc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLm5ld01lc3NhZ2UuY29udGVudD0gJ0hpIERvbm5hJztcclxuICAgIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5uZXdNZXNzYWdlLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgX3NlbGYuYWRkTWVzc2FnZShyZXNwb25zZSwgJ0Rvbm5hJyk7XHJcbiAgICB9KTtcclxuICAgIGxldCBsb2NhdGlvbkNvdW50ID0gdGhpcy5ob3RTcG90U2VydmljZS5nZXRQb2lMb2NhdGlvbnMoKS5sZW5ndGg7XHJcbiAgICB0aGlzLmZyb21Mb2NhdGlvblBvc2l0aW9uID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDk5OTk5KSAlIGxvY2F0aW9uQ291bnQpICsgMTtcclxuICAgIHRoaXMudG9Mb2NhdGlvblBvc2l0aW9uID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDk5OTk5KSAlIGxvY2F0aW9uQ291bnQpICsgMTtcclxuICAgfVxyXG4gICBhZGRNZXNzYWdlKHJlc3BvbnNlLCB1c2VyKSB7XHJcbiAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB2YXIgcmVzdWx0IDogQ2hhdEl0ZW0gPSB7aXNOYXZpZ2F0aW9uOiBmYWxzZSwgY29udGVudDogJycsIGlzU2VsZjogZmFsc2UsIHVzZXIgOiB1c2VyLCB0aW1lc3RhbXAgOiBuZXcgRGF0ZSgpfTtcclxuICAgICAgcmVzdWx0LmlzTmF2aWdhdGlvbiA9IHJlc3BvbnNlLnJlc3VsdC5hY3Rpb24gPT09ICduYXZpZ2F0aW9uJztcclxuICAgICAgcmVzdWx0LmNvbnRlbnQ9IHJlc3BvbnNlLnJlc3VsdC5mdWxmaWxsbWVudC5zcGVlY2g7XHJcbiAgICAgIGlmKHRoaXMubWVzc2FnZXMpIHtcclxuICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChyZXN1bHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgdGhpcy5tZXNzYWdlcyA9IFtyZXN1bHRdO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgYWxpZ24oaXRlbSA6IENoYXRJdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNTZWxmPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcclxuICAgIH1cclxuICAgIHNob3dJbWFnZShpdGVtOiBDaGF0SXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlzU2VsZiA/IFwiY29sbGFwc2VcIiA6IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gICAgc2hvd05hdihpdGVtOiBDaGF0SXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlzTmF2aWdhdGlvbiA/IFwidmlzaWJsZVwiIDogIFwiY29sbGFwc2VcIjtcclxuICAgIH1cclxuICAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgY2IpIHtcclxuICAgIGxldCBjTXNnIDogQ2hhdEl0ZW0gPSB7aXNOYXZpZ2F0aW9uOiBmYWxzZSwgY29udGVudDogbWVzc2FnZS5jb250ZW50LCBpc1NlbGY6IHRydWUsIHVzZXIgOiAnWW91JywgdGltZXN0YW1wIDogbmV3IERhdGUoKX07XHJcbiAgICAgaWYodGhpcy5tZXNzYWdlcykge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goY01zZyk7XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcyA9IFtjTXNnXTtcclxuICAgICB9XHJcbiAgICBjbGllbnQudGV4dFJlcXVlc3QobWVzc2FnZS5jb250ZW50KVxyXG4gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY2IocmVzcG9uc2UpO1xyXG4gICAgICAgfSlcclxuICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICB9KTtcclxuICB9XHJcbiAgIHNlbmQobWVzc2FnZTogQ2hhdEl0ZW0pOiB2b2lkIHtcclxuICAgICBsZXQgX3NlbGYgPSB0aGlzO1xyXG4gICAgIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5uZXdNZXNzYWdlLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgIF9zZWxmLmFkZE1lc3NhZ2UocmVzcG9uc2UsICdEb25uYScpO1xyXG4gICAgIH0pO1xyXG4gICB9XHJcbn1cclxuIl19