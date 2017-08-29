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
        var locationCount = 10;
        this.fromLocationPosition = Math.round((Math.random() * 99999) % locationCount) + 1;
        this.toLocationPosition = Math.round((Math.random() * 99999) % locationCount) + 1;
    };
    ChatBotComponent.prototype.ngAfterViewInit = function () {
        this.textfield = this.tf.nativeElement;
    };
    ChatBotComponent.prototype.addMessage = function (response, user) {
        var result = { isNavigation: false, content: '', isSelf: false, user: user, timestamp: new Date() };
        var isNavigation = (response.result.action === 'navigation');
        result.content = response.result.fulfillment.speech;
        if (this.messages) {
            this.messages.push(result);
        }
        else {
            this.messages = [result];
        }
        if (isNavigation) {
            var navResult = { isNavigation: true, content: '', isSelf: false, user: user, timestamp: new Date() };
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
    ChatBotComponent.prototype.openNav = function (item) {
        console.log('opening nav for', JSON.stringify(item));
    };
    ChatBotComponent.prototype.send = function () {
        var _self = this;
        var message = this.textfield.text;
        this.newMessage.content = message ? message : this.newMessage.content;
        console.log(JSON.stringify(this.newMessage));
        console.log(message);
        this.sendMessage(this.newMessage, function (response) {
            _self.addMessage(response, 'Donna');
        });
        this.textfield.text = '';
    };
    return ChatBotComponent;
}());
__decorate([
    core_1.ViewChild("textfield"),
    __metadata("design:type", core_1.ElementRef)
], ChatBotComponent.prototype, "tf", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1ib3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC1ib3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBR3hGLHVEQUE4QztBQUU5QyxtREFBZ0Q7QUFDaEQseUZBQXFGO0FBRXJGLElBQU0sTUFBTSxHQUFHLElBQUksK0JBQVcsQ0FBQyxFQUFDLFdBQVcsRUFBRSxrQ0FBa0MsRUFBQyxDQUFDLENBQUE7QUFRakYsSUFBYSxnQkFBZ0I7SUFZM0IsMEJBQ1MsY0FBeUM7UUFBekMsbUJBQWMsR0FBZCxjQUFjLENBQTJCO1FBVGxELGVBQVUsR0FBYSxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQVNlLENBQUM7SUFFdEQsbUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUUsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLFFBQVE7WUFDekMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRixDQUFDO0lB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b3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHtBcGlBaUNsaWVudH0gZnJvbSBcImFwaS1haS1qYXZhc2NyaXB0XCI7XHJcblxyXG5pbXBvcnQgeyBDaGF0SXRlbSB9IGZyb20gJy4uL21vZGVscy9hcHAubW9kZWxzJztcclxuaW1wb3J0IHsgSW5kb29yTG9jYXRpb25EYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZG9vci1sb2NhdGlvbi1kYXRhLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwaUFpQ2xpZW50KHthY2Nlc3NUb2tlbjogJ2I3MWJmMDg1MWY2ZjQxZjhiMTcyOGUyMGM3OTQ2YzI1J30pXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ0NoYXRCb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LWJvdC9jaGF0LWJvdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOlsgJy4vY2hhdC1ib3QvY2hhdC1ib3QuY29tcG9uZW50LmNzcycgXSxcclxuICBwcm92aWRlcnM6IFtJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdEJvdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbWVzc2FnZXMgOiBbQ2hhdEl0ZW1dO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgbmV3TWVzc2FnZTogQ2hhdEl0ZW0gPSBuZXcgQ2hhdEl0ZW0oKTtcclxuICBmcm9tTG9jYXRpb25Qb3NpdGlvbjogbnVtYmVyO1xyXG4gIHRvTG9jYXRpb25Qb3NpdGlvbjogbnVtYmVyO1xyXG5cclxuICBAVmlld0NoaWxkKFwidGV4dGZpZWxkXCIpIHRmOiBFbGVtZW50UmVmO1xyXG5cclxuICB0ZXh0ZmllbGQ6IFRleHRGaWVsZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgIHByaXZhdGUgaG90U3BvdFNlcnZpY2U6IEluZG9vckxvY2F0aW9uRGF0YVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NoYXQgYm90IGxvYWRpbmcuLicpO1xyXG4gICAgbGV0IF9zZWxmID0gdGhpcztcclxuICAgIHRoaXMubmV3TWVzc2FnZS5jb250ZW50PSAnSGkgRG9ubmEnO1xyXG4gICAgdGhpcy5zZW5kTWVzc2FnZSh0aGlzLm5ld01lc3NhZ2UsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBfc2VsZi5hZGRNZXNzYWdlKHJlc3BvbnNlLCAnRG9ubmEnKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGxvY2F0aW9uQ291bnQgPSAxMDtcclxuICAgIHRoaXMuZnJvbUxvY2F0aW9uUG9zaXRpb24gPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogOTk5OTkpICUgbG9jYXRpb25Db3VudCkgKyAxO1xyXG4gICAgdGhpcy50b0xvY2F0aW9uUG9zaXRpb24gPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogOTk5OTkpICUgbG9jYXRpb25Db3VudCkgKyAxO1xyXG4gICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMudGV4dGZpZWxkID0gdGhpcy50Zi5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgYWRkTWVzc2FnZShyZXNwb25zZSwgdXNlcikge1xyXG4gICAgICB2YXIgcmVzdWx0IDogQ2hhdEl0ZW0gPSB7aXNOYXZpZ2F0aW9uOiBmYWxzZSwgY29udGVudDogJycsIGlzU2VsZjogZmFsc2UsIHVzZXIgOiB1c2VyLCB0aW1lc3RhbXAgOiBuZXcgRGF0ZSgpfTtcclxuICAgICAgbGV0IGlzTmF2aWdhdGlvbiA9IChyZXNwb25zZS5yZXN1bHQuYWN0aW9uID09PSAnbmF2aWdhdGlvbicpO1xyXG4gICAgICByZXN1bHQuY29udGVudD0gcmVzcG9uc2UucmVzdWx0LmZ1bGZpbGxtZW50LnNwZWVjaDtcclxuICAgICAgaWYodGhpcy5tZXNzYWdlcykge1xyXG4gICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICB0aGlzLm1lc3NhZ2VzID0gW3Jlc3VsdF07XHJcbiAgICAgIH1cclxuICAgICAgaWYoaXNOYXZpZ2F0aW9uKSB7XHJcbiAgICAgICAgdmFyIG5hdlJlc3VsdCA6IENoYXRJdGVtID0ge2lzTmF2aWdhdGlvbjogdHJ1ZSwgY29udGVudDogJycsIGlzU2VsZjogZmFsc2UsIHVzZXIgOiB1c2VyLCB0aW1lc3RhbXAgOiBuZXcgRGF0ZSgpfTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmF2UmVzdWx0KTtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIGFsaWduKGl0ZW0gOiBDaGF0SXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlzU2VsZj8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XHJcbiAgICB9XHJcbiAgICBzaG93SW1hZ2UoaXRlbTogQ2hhdEl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pc1NlbGYgPyBcImNvbGxhcHNlXCIgOiBcInZpc2libGVcIjtcclxuICAgIH1cclxuICAgIHNob3dUZXh0KGl0ZW06IENoYXRJdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLmlzTmF2aWdhdGlvbiA/IFwiY29sbGFwc2VcIiA6IFwidmlzaWJsZVwiIDtcclxuICAgIH1cclxuICAgIHNob3dOYXYoaXRlbTogQ2hhdEl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pc05hdmlnYXRpb24gPyBcInZpc2libGVcIiA6ICBcImNvbGxhcHNlXCI7XHJcbiAgICB9XHJcbiAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UsIGNiKSB7XHJcbiAgICBsZXQgY01zZyA6IENoYXRJdGVtID0ge2lzTmF2aWdhdGlvbjogZmFsc2UsIGNvbnRlbnQ6IG1lc3NhZ2UuY29udGVudCwgaXNTZWxmOiB0cnVlLCB1c2VyIDogJ1lvdScsIHRpbWVzdGFtcCA6IG5ldyBEYXRlKCl9O1xyXG4gICAgIGlmKHRoaXMubWVzc2FnZXMpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGNNc2cpO1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMgPSBbY01zZ107XHJcbiAgICAgfVxyXG4gICAgY2xpZW50LnRleHRSZXF1ZXN0KG1lc3NhZ2UuY29udGVudClcclxuICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNiKHJlc3BvbnNlKTtcclxuICAgICAgIH0pXHJcbiAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgfSk7XHJcbiAgfVxyXG4gIG9wZW5OYXYoaXRlbTogQ2hhdEl0ZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdvcGVuaW5nIG5hdiBmb3InLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgfVxyXG4gICBzZW5kKCk6IHZvaWQge1xyXG4gICAgIGxldCBfc2VsZiA9IHRoaXM7XHJcbiAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnRleHRmaWVsZC50ZXh0O1xyXG4gICAgIHRoaXMubmV3TWVzc2FnZS5jb250ZW50ID0gbWVzc2FnZT8gbWVzc2FnZSA6IHRoaXMubmV3TWVzc2FnZS5jb250ZW50O1xyXG4gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubmV3TWVzc2FnZSkpO1xyXG4gICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5uZXdNZXNzYWdlLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgIF9zZWxmLmFkZE1lc3NhZ2UocmVzcG9uc2UsICdEb25uYScpO1xyXG4gICAgIH0pO1xyXG4gICAgIHRoaXMudGV4dGZpZWxkLnRleHQgPSAnJztcclxuICAgfVxyXG59XHJcbiJdfQ==