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
        providers: [indoor_location_data_service_1.IndoorLocationDataService]
    }),
    __metadata("design:paramtypes", [indoor_location_data_service_1.IndoorLocationDataService])
], ChatBotComponent);
exports.ChatBotComponent = ChatBotComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1ib3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC1ib3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHVEQUE4QztBQUU5QyxtREFBZ0Q7QUFDaEQseUZBQXFGO0FBRXJGLElBQU0sTUFBTSxHQUFHLElBQUksK0JBQVcsQ0FBQyxFQUFDLFdBQVcsRUFBRSxrQ0FBa0MsRUFBQyxDQUFDLENBQUE7QUFPakYsSUFBYSxnQkFBZ0I7SUFLM0IsMEJBQ1MsY0FBeUM7UUFBekMsbUJBQWMsR0FBZCxjQUFjLENBQTJCO1FBSmxELGVBQVUsR0FBYSxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQUllLENBQUM7SUFFdEQsbUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUUsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLFFBQVE7WUFDekMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDRCxxQ0FBVSxHQUFWLFVBQVcsUUFBUSxFQUFFLElBQUk7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixJQUFJLE1BQU0sR0FBYyxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsU0FBUyxFQUFHLElBQUksSUFBSSxFQUFFLEVBQUMsQ0FBQztRQUMvRyxNQUFNLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQztRQUM5RCxNQUFNLENBQUMsT0FBTyxHQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUNuRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNKLENBQUM7SUFDRCxzQ0FBVyxHQUFYLFVBQVksT0FBTyxFQUFFLEVBQUU7UUFDdEIsSUFBSSxJQUFJLEdBQWMsRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxTQUFTLEVBQUcsSUFBSSxJQUFJLEVBQUUsRUFBQyxDQUFDO1FBQ3pILEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQy9CLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDZCxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFDQSwrQkFBSSxHQUFKLFVBQUssT0FBWTtRQUNmLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxRQUFRO1lBQ3pDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNKLHVCQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQW5EWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsU0FBUyxFQUFFLENBQUMsd0RBQXlCLENBQUM7S0FDdkMsQ0FBQztxQ0FPeUIsd0RBQXlCO0dBTnZDLGdCQUFnQixDQW1ENUI7QUFuRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHtBcGlBaUNsaWVudH0gZnJvbSBcImFwaS1haS1qYXZhc2NyaXB0XCI7XHJcblxyXG5pbXBvcnQgeyBDaGF0SXRlbSB9IGZyb20gJy4uL21vZGVscy9hcHAubW9kZWxzJztcclxuaW1wb3J0IHsgSW5kb29yTG9jYXRpb25EYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZG9vci1sb2NhdGlvbi1kYXRhLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwaUFpQ2xpZW50KHthY2Nlc3NUb2tlbjogJ2I3MWJmMDg1MWY2ZjQxZjhiMTcyOGUyMGM3OTQ2YzI1J30pXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ0NoYXRCb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LWJvdC9jaGF0LWJvdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbSW5kb29yTG9jYXRpb25EYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRCb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1lc3NhZ2VzIDogW0NoYXRJdGVtXTtcclxuICBuZXdNZXNzYWdlOiBDaGF0SXRlbSA9IG5ldyBDaGF0SXRlbSgpO1xyXG4gIGZyb21Mb2NhdGlvblBvc2l0aW9uOiBudW1iZXI7XHJcbiAgdG9Mb2NhdGlvblBvc2l0aW9uOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgIHByaXZhdGUgaG90U3BvdFNlcnZpY2U6IEluZG9vckxvY2F0aW9uRGF0YVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NoYXQgYm90IGxvYWRpbmcuLicpO1xyXG4gICAgbGV0IF9zZWxmID0gdGhpcztcclxuICAgIHRoaXMubmV3TWVzc2FnZS5jb250ZW50PSAnSGkgRG9ubmEnO1xyXG4gICAgdGhpcy5zZW5kTWVzc2FnZSh0aGlzLm5ld01lc3NhZ2UsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBfc2VsZi5hZGRNZXNzYWdlKHJlc3BvbnNlLCAnRG9ubmEnKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGxvY2F0aW9uQ291bnQgPSB0aGlzLmhvdFNwb3RTZXJ2aWNlLmdldFBvaUxvY2F0aW9ucygpLmxlbmd0aDtcclxuICAgIHRoaXMuZnJvbUxvY2F0aW9uUG9zaXRpb24gPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogOTk5OTkpICUgbG9jYXRpb25Db3VudCkgKyAxO1xyXG4gICAgdGhpcy50b0xvY2F0aW9uUG9zaXRpb24gPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogOTk5OTkpICUgbG9jYXRpb25Db3VudCkgKyAxO1xyXG4gICB9XHJcbiAgIGFkZE1lc3NhZ2UocmVzcG9uc2UsIHVzZXIpIHtcclxuICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIHZhciByZXN1bHQgOiBDaGF0SXRlbSA9IHtpc05hdmlnYXRpb246IGZhbHNlLCBjb250ZW50OiAnJywgaXNTZWxmOiBmYWxzZSwgdXNlciA6IHVzZXIsIHRpbWVzdGFtcCA6IG5ldyBEYXRlKCl9O1xyXG4gICAgICByZXN1bHQuaXNOYXZpZ2F0aW9uID0gcmVzcG9uc2UucmVzdWx0LmFjdGlvbiA9PT0gJ25hdmlnYXRpb24nO1xyXG4gICAgICByZXN1bHQuY29udGVudD0gcmVzcG9uc2UucmVzdWx0LmZ1bGZpbGxtZW50LnNwZWVjaDtcclxuICAgICAgaWYodGhpcy5tZXNzYWdlcykge1xyXG4gICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICB0aGlzLm1lc3NhZ2VzID0gW3Jlc3VsdF07XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBzZW5kTWVzc2FnZShtZXNzYWdlLCBjYikge1xyXG4gICAgbGV0IGNNc2cgOiBDaGF0SXRlbSA9IHtpc05hdmlnYXRpb246IGZhbHNlLCBjb250ZW50OiBtZXNzYWdlLmNvbnRlbnQsIGlzU2VsZjogdHJ1ZSwgdXNlciA6ICdZb3UnLCB0aW1lc3RhbXAgOiBuZXcgRGF0ZSgpfTtcclxuICAgICBpZih0aGlzLm1lc3NhZ2VzKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChjTXNnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzID0gW2NNc2ddO1xyXG4gICAgIH1cclxuICAgIGNsaWVudC50ZXh0UmVxdWVzdChtZXNzYWdlLmNvbnRlbnQpXHJcbiAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjYihyZXNwb25zZSk7XHJcbiAgICAgICB9KVxyXG4gICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgIH0pO1xyXG4gIH1cclxuICAgc2VuZChtZXNzYWdlOiBhbnkpOiB2b2lkIHtcclxuICAgICBsZXQgX3NlbGYgPSB0aGlzO1xyXG4gICAgIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5uZXdNZXNzYWdlLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgIF9zZWxmLmFkZE1lc3NhZ2UocmVzcG9uc2UsICdEb25uYScpO1xyXG4gICAgIH0pO1xyXG4gICB9XHJcbn1cclxuIl19