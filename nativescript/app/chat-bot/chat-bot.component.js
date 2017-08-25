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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1ib3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC1ib3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBR3hGLHVEQUE4QztBQUU5QyxtREFBZ0Q7QUFDaEQseUZBQXFGO0FBRXJGLElBQU0sTUFBTSxHQUFHLElBQUksK0JBQVcsQ0FBQyxFQUFDLFdBQVcsRUFBRSxrQ0FBa0MsRUFBQyxDQUFDLENBQUE7QUFRakYsSUFBYSxnQkFBZ0I7SUFZM0IsMEJBQ1MsY0FBeUM7UUFBekMsbUJBQWMsR0FBZCxjQUFjLENBQTJCO1FBVGxELGVBQVUsR0FBYSxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQVNlLENBQUM7SUFFdEQsbUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUUsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLFFBQVE7WUFDekMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRixDQUFDO0lB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QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxRQUFRO1lBQ3pDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDSix1QkFBQztBQUFELENBQUMsQUE3RUQsSUE2RUM7QUFyRXlCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFLLGlCQUFVOzRDQUFDO0FBUjVCLGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUMsQ0FBRSxtQ0FBbUMsQ0FBRTtRQUNqRCxTQUFTLEVBQUUsQ0FBQyx3REFBeUIsQ0FBQztLQUN2QyxDQUFDO3FDQWN5Qix3REFBeUI7R0FidkMsZ0JBQWdCLENBNkU1QjtBQTdFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xyXG5pbXBvcnQge0FwaUFpQ2xpZW50fSBmcm9tIFwiYXBpLWFpLWphdmFzY3JpcHRcIjtcclxuXHJcbmltcG9ydCB7IENoYXRJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC5tb2RlbHMnO1xyXG5pbXBvcnQgeyBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kb29yLWxvY2F0aW9uLWRhdGEuc2VydmljZSc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBpQWlDbGllbnQoe2FjY2Vzc1Rva2VuOiAnYjcxYmYwODUxZjZmNDFmOGIxNzI4ZTIwYzc5NDZjMjUnfSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnQ2hhdEJvdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQtYm90L2NoYXQtYm90LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6WyAnLi9jaGF0LWJvdC9jaGF0LWJvdC5jb21wb25lbnQuY3NzJyBdLFxyXG4gIHByb3ZpZGVyczogW0luZG9vckxvY2F0aW9uRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Qm90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtZXNzYWdlcyA6IFtDaGF0SXRlbV07XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICBuZXdNZXNzYWdlOiBDaGF0SXRlbSA9IG5ldyBDaGF0SXRlbSgpO1xyXG4gIGZyb21Mb2NhdGlvblBvc2l0aW9uOiBudW1iZXI7XHJcbiAgdG9Mb2NhdGlvblBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJ0ZXh0ZmllbGRcIikgdGY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHRleHRmaWVsZDogVGV4dEZpZWxkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgcHJpdmF0ZSBob3RTcG90U2VydmljZTogSW5kb29yTG9jYXRpb25EYXRhU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2hhdCBib3QgbG9hZGluZy4uJyk7XHJcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5uZXdNZXNzYWdlLmNvbnRlbnQ9ICdIaSBEb25uYSc7XHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlKHRoaXMubmV3TWVzc2FnZSwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIF9zZWxmLmFkZE1lc3NhZ2UocmVzcG9uc2UsICdEb25uYScpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgbG9jYXRpb25Db3VudCA9IDEwO1xyXG4gICAgdGhpcy5mcm9tTG9jYXRpb25Qb3NpdGlvbiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiA5OTk5OSkgJSBsb2NhdGlvbkNvdW50KSArIDE7XHJcbiAgICB0aGlzLnRvTG9jYXRpb25Qb3NpdGlvbiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiA5OTk5OSkgJSBsb2NhdGlvbkNvdW50KSArIDE7XHJcbiAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ZmllbGQgPSB0aGlzLnRmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICBhZGRNZXNzYWdlKHJlc3BvbnNlLCB1c2VyKSB7XHJcbiAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB2YXIgcmVzdWx0IDogQ2hhdEl0ZW0gPSB7aXNOYXZpZ2F0aW9uOiBmYWxzZSwgY29udGVudDogJycsIGlzU2VsZjogZmFsc2UsIHVzZXIgOiB1c2VyLCB0aW1lc3RhbXAgOiBuZXcgRGF0ZSgpfTtcclxuICAgICAgcmVzdWx0LmlzTmF2aWdhdGlvbiA9IHJlc3BvbnNlLnJlc3VsdC5hY3Rpb24gPT09ICduYXZpZ2F0aW9uJztcclxuICAgICAgcmVzdWx0LmNvbnRlbnQ9IHJlc3BvbnNlLnJlc3VsdC5mdWxmaWxsbWVudC5zcGVlY2g7XHJcbiAgICAgIGlmKHRoaXMubWVzc2FnZXMpIHtcclxuICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChyZXN1bHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgdGhpcy5tZXNzYWdlcyA9IFtyZXN1bHRdO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgYWxpZ24oaXRlbSA6IENoYXRJdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNTZWxmPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcclxuICAgIH1cclxuICAgIHNob3dJbWFnZShpdGVtOiBDaGF0SXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlzU2VsZiA/IFwiY29sbGFwc2VcIiA6IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG4gICAgc2hvd05hdihpdGVtOiBDaGF0SXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlzTmF2aWdhdGlvbiA/IFwidmlzaWJsZVwiIDogIFwiY29sbGFwc2VcIjtcclxuICAgIH1cclxuICAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgY2IpIHtcclxuICAgIGxldCBjTXNnIDogQ2hhdEl0ZW0gPSB7aXNOYXZpZ2F0aW9uOiBmYWxzZSwgY29udGVudDogbWVzc2FnZS5jb250ZW50LCBpc1NlbGY6IHRydWUsIHVzZXIgOiAnWW91JywgdGltZXN0YW1wIDogbmV3IERhdGUoKX07XHJcbiAgICAgaWYodGhpcy5tZXNzYWdlcykge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goY01zZyk7XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcyA9IFtjTXNnXTtcclxuICAgICB9XHJcbiAgICBjbGllbnQudGV4dFJlcXVlc3QobWVzc2FnZS5jb250ZW50KVxyXG4gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY2IocmVzcG9uc2UpO1xyXG4gICAgICAgfSlcclxuICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICB9KTtcclxuICB9XHJcbiAgIHNlbmQoKTogdm9pZCB7XHJcbiAgICAgbGV0IF9zZWxmID0gdGhpcztcclxuICAgICBsZXQgbWVzc2FnZSA9IHRoaXMudGV4dGZpZWxkLnRleHQ7XHJcbiAgICAgdGhpcy5uZXdNZXNzYWdlLmNvbnRlbnQgPSBtZXNzYWdlPyBtZXNzYWdlIDogdGhpcy5uZXdNZXNzYWdlLmNvbnRlbnQ7XHJcbiAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5uZXdNZXNzYWdlKSk7XHJcbiAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgdGhpcy5zZW5kTWVzc2FnZSh0aGlzLm5ld01lc3NhZ2UsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgX3NlbGYuYWRkTWVzc2FnZShyZXNwb25zZSwgJ0Rvbm5hJyk7XHJcbiAgICAgfSk7XHJcbiAgICAgdGhpcy50ZXh0ZmllbGQudGV4dCA9ICcnO1xyXG4gICB9XHJcbn1cclxuIl19