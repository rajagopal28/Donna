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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1ib3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC1ib3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBR3hGLHVEQUE4QztBQUU5QyxtREFBZ0Q7QUFDaEQseUZBQXFGO0FBRXJGLElBQU0sTUFBTSxHQUFHLElBQUksK0JBQVcsQ0FBQyxFQUFDLFdBQVcsRUFBRSxrQ0FBa0MsRUFBQyxDQUFDLENBQUE7QUFRakYsSUFBYSxnQkFBZ0I7SUFZM0IsMEJBQ1MsY0FBeUM7UUFBekMsbUJBQWMsR0FBZCxjQUFjLENBQTJCO1FBVGxELGVBQVUsR0FBYSxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQVNlLENBQUM7SUFFdEQsbUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUUsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLFFBQVE7WUFDekMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsYUFB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LENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLFFBQVE7WUFDekMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNKLHVCQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQztBQXJFeUI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQUssaUJBQVU7NENBQUM7QUFSNUIsZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsb0NBQW9DO1FBQ2pELFNBQVMsRUFBQyxDQUFFLG1DQUFtQyxDQUFFO1FBQ2pELFNBQVMsRUFBRSxDQUFDLHdEQUF5QixDQUFDO0tBQ3ZDLENBQUM7cUNBY3lCLHdEQUF5QjtHQWJ2QyxnQkFBZ0IsQ0E2RTVCO0FBN0VZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XHJcbmltcG9ydCB7QXBpQWlDbGllbnR9IGZyb20gXCJhcGktYWktamF2YXNjcmlwdFwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhdEl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvYXBwLm1vZGVscyc7XHJcbmltcG9ydCB7IEluZG9vckxvY2F0aW9uRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRvb3ItbG9jYXRpb24tZGF0YS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBBcGlBaUNsaWVudCh7YWNjZXNzVG9rZW46ICdiNzFiZjA4NTFmNmY0MWY4YjE3MjhlMjBjNzk0NmMyNSd9KVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdDaGF0Qm90JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC1ib3QvY2hhdC1ib3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczpbICcuL2NoYXQtYm90L2NoYXQtYm90LmNvbXBvbmVudC5jc3MnIF0sXHJcbiAgcHJvdmlkZXJzOiBbSW5kb29yTG9jYXRpb25EYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRCb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1lc3NhZ2VzIDogW0NoYXRJdGVtXTtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIG5ld01lc3NhZ2U6IENoYXRJdGVtID0gbmV3IENoYXRJdGVtKCk7XHJcbiAgZnJvbUxvY2F0aW9uUG9zaXRpb246IG51bWJlcjtcclxuICB0b0xvY2F0aW9uUG9zaXRpb246IG51bWJlcjtcclxuXHJcbiAgQFZpZXdDaGlsZChcInRleHRmaWVsZFwiKSB0ZjogRWxlbWVudFJlZjtcclxuXHJcbiAgdGV4dGZpZWxkOiBUZXh0RmllbGQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICBwcml2YXRlIGhvdFNwb3RTZXJ2aWNlOiBJbmRvb3JMb2NhdGlvbkRhdGFTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjaGF0IGJvdCBsb2FkaW5nLi4nKTtcclxuICAgIGxldCBfc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLm5ld01lc3NhZ2UuY29udGVudD0gJ0hpIERvbm5hJztcclxuICAgIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5uZXdNZXNzYWdlLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgX3NlbGYuYWRkTWVzc2FnZShyZXNwb25zZSwgJ0Rvbm5hJyk7XHJcbiAgICB9KTtcclxuICAgIGxldCBsb2NhdGlvbkNvdW50ID0gdGhpcy5ob3RTcG90U2VydmljZS5nZXRQb2lMb2NhdGlvbnMoKS5sZW5ndGg7XHJcbiAgICB0aGlzLmZyb21Mb2NhdGlvblBvc2l0aW9uID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDk5OTk5KSAlIGxvY2F0aW9uQ291bnQpICsgMTtcclxuICAgIHRoaXMudG9Mb2NhdGlvblBvc2l0aW9uID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDk5OTk5KSAlIGxvY2F0aW9uQ291bnQpICsgMTtcclxuICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRleHRmaWVsZCA9IHRoaXMudGYubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgIGFkZE1lc3NhZ2UocmVzcG9uc2UsIHVzZXIpIHtcclxuICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIHZhciByZXN1bHQgOiBDaGF0SXRlbSA9IHtpc05hdmlnYXRpb246IGZhbHNlLCBjb250ZW50OiAnJywgaXNTZWxmOiBmYWxzZSwgdXNlciA6IHVzZXIsIHRpbWVzdGFtcCA6IG5ldyBEYXRlKCl9O1xyXG4gICAgICByZXN1bHQuaXNOYXZpZ2F0aW9uID0gcmVzcG9uc2UucmVzdWx0LmFjdGlvbiA9PT0gJ25hdmlnYXRpb24nO1xyXG4gICAgICByZXN1bHQuY29udGVudD0gcmVzcG9uc2UucmVzdWx0LmZ1bGZpbGxtZW50LnNwZWVjaDtcclxuICAgICAgaWYodGhpcy5tZXNzYWdlcykge1xyXG4gICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICB0aGlzLm1lc3NhZ2VzID0gW3Jlc3VsdF07XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBhbGlnbihpdGVtIDogQ2hhdEl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pc1NlbGY/IFwicmlnaHRcIiA6IFwibGVmdFwiO1xyXG4gICAgfVxyXG4gICAgc2hvd0ltYWdlKGl0ZW06IENoYXRJdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNTZWxmID8gXCJjb2xsYXBzZVwiIDogXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbiAgICBzaG93TmF2KGl0ZW06IENoYXRJdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNOYXZpZ2F0aW9uID8gXCJ2aXNpYmxlXCIgOiAgXCJjb2xsYXBzZVwiO1xyXG4gICAgfVxyXG4gICBzZW5kTWVzc2FnZShtZXNzYWdlLCBjYikge1xyXG4gICAgbGV0IGNNc2cgOiBDaGF0SXRlbSA9IHtpc05hdmlnYXRpb246IGZhbHNlLCBjb250ZW50OiBtZXNzYWdlLmNvbnRlbnQsIGlzU2VsZjogdHJ1ZSwgdXNlciA6ICdZb3UnLCB0aW1lc3RhbXAgOiBuZXcgRGF0ZSgpfTtcclxuICAgICBpZih0aGlzLm1lc3NhZ2VzKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChjTXNnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzID0gW2NNc2ddO1xyXG4gICAgIH1cclxuICAgIGNsaWVudC50ZXh0UmVxdWVzdChtZXNzYWdlLmNvbnRlbnQpXHJcbiAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjYihyZXNwb25zZSk7XHJcbiAgICAgICB9KVxyXG4gICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgIH0pO1xyXG4gIH1cclxuICAgc2VuZCgpOiB2b2lkIHtcclxuICAgICBsZXQgX3NlbGYgPSB0aGlzO1xyXG4gICAgIGxldCBtZXNzYWdlID0gdGhpcy50ZXh0ZmllbGQudGV4dDtcclxuICAgICB0aGlzLm5ld01lc3NhZ2UuY29udGVudCA9IG1lc3NhZ2U/IG1lc3NhZ2UgOiB0aGlzLm5ld01lc3NhZ2UuY29udGVudDtcclxuICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLm5ld01lc3NhZ2UpKTtcclxuICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICB0aGlzLnNlbmRNZXNzYWdlKHRoaXMubmV3TWVzc2FnZSwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICBfc2VsZi5hZGRNZXNzYWdlKHJlc3BvbnNlLCAnRG9ubmEnKTtcclxuICAgICB9KTtcclxuICAgICB0aGlzLnRleHRmaWVsZC50ZXh0ID0gJyc7XHJcbiAgIH1cclxufVxyXG4iXX0=