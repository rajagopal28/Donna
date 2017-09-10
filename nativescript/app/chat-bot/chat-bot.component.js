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
        var parameters = {};
        if (response.result.fulfillment.data && response.result.fulfillment.data.web && response.result.fulfillment.data.web.parameters) {
            parameters = response.result.fulfillment.data.web.parameters;
        }
        result.content = response.result.fulfillment.speech;
        this.messages.push(result);
        if (isNavigation) {
            var meta = {};
            console.log('Parmeters from chat...' + JSON.stringify(parameters));
            meta.fromLocationId = parameters['fromLocation'] ? parameters['fromLocation'].id : -1;
            meta.toLocationId = parameters['toLocation'] ? parameters['toLocation'].id : -1;
            meta.campusId = parameters['toLocation'] ? parameters['toLocation'].campusId : -1;
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
                "toLocationId": item.meta.toLocationId,
                "campusId": item.meta.campusId
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1ib3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC1ib3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVGO0FBQ3ZGLDBDQUF5RDtBQUd6RCx1REFBZ0Q7QUFFaEQsbURBQWdEO0FBQ2hELCtEQUE2RDtBQUU3RCxJQUFNLE1BQU0sR0FBRyxJQUFJLCtCQUFXLENBQUMsRUFBRSxXQUFXLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQyxDQUFBO0FBT25GLElBQWEsZ0JBQWdCO0lBTzNCLDBCQUFzQixjQUE4QixFQUM1QyxNQUFjO1FBREEsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzVDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOdEIsZUFBVSxHQUF3QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNyRCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGVBQVUsR0FBYSxJQUFJLHFCQUFRLEVBQUUsQ0FBQztJQUdaLENBQUM7SUFFM0IsbUNBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNsRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUs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QUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNqRCxDQUFDO3FDQVFzQyxnQ0FBYztRQUNwQyxlQUFNO0dBUlgsZ0JBQWdCLENBc0c1QjtBQXRHWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XHJcbmltcG9ydCB7IEFwaUFpQ2xpZW50IH0gZnJvbSBcImFwaS1haS1qYXZhc2NyaXB0XCI7XHJcblxyXG5pbXBvcnQgeyBDaGF0SXRlbSB9IGZyb20gJy4uL21vZGVscy9hcHAubW9kZWxzJztcclxuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXNzaW9uLXNlcnZpY2UnO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwaUFpQ2xpZW50KHsgYWNjZXNzVG9rZW46ICdiNzFiZjA4NTFmNmY0MWY4YjE3MjhlMjBjNzk0NmMyNScgfSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnQ2hhdEJvdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQtYm90L2NoYXQtYm90LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGF0LWJvdC9jaGF0LWJvdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRCb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBPdXRwdXQoKVxyXG4gIHNob3dTaWduaW46RXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgaXNMb2dnZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIG1lc3NhZ2VzOiBBcnJheTxDaGF0SXRlbT47XHJcbiAgbmV3TWVzc2FnZTogQ2hhdEl0ZW0gPSBuZXcgQ2hhdEl0ZW0oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlc3Npb25TZXJ2aWNlOiBTZXNzaW9uU2VydmljZSxcclxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlc3Npb25TZXJ2aWNlLmF1dGhPYmVydmFibGUuc3Vic2NyaWJlKGF1dGhVc2VyID0+IHtcclxuICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdGhpcy5zZXNzaW9uU2VydmljZS5pc0xvZ2dlZEluKClcclxuICAgICAgY29uc29sZS5sb2coJ29ic2VydmluZy4uLiBjaGF0IGJvdCcgKyB0aGlzLmlzTG9nZ2VkSW4pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnY2hhdCBib3QgbG9hZGluZy4uJyk7XHJcbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgdGhpcy5uZXdNZXNzYWdlLmNvbnRlbnQgPSAnSGkgRG9ubmEnO1xyXG4gICAgdGhpcy5zZW5kTWVzc2FnZSh0aGlzLm5ld01lc3NhZ2UsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBfc2VsZi5hZGRNZXNzYWdlKHJlc3BvbnNlLCAnRG9ubmEnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzaG93TG9naW4oKSB7XHJcbiAgICB0aGlzLnNob3dTaWduaW4uZW1pdCgnc3VjY2VzcycpO1xyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgfVxyXG5cclxuICBhZGRNZXNzYWdlKHJlc3BvbnNlLCB1c2VyKSB7XHJcbiAgICB2YXIgcmVzdWx0OiBDaGF0SXRlbSA9IHsgaXNOYXZpZ2F0aW9uOiBmYWxzZSwgY29udGVudDogJycsIGlzU2VsZjogZmFsc2UsIHVzZXI6IHVzZXIsIHRpbWVzdGFtcDogbmV3IERhdGUoKSwgbWV0YToge30gfTtcclxuICAgIGxldCBpc05hdmlnYXRpb24gPSAocmVzcG9uc2UucmVzdWx0LmFjdGlvbiA9PT0gJ3JvdXRlLXRvLWxvY2F0aW9uLXJlcXVlc3QnKTtcclxuICAgIGxldCBwYXJhbWV0ZXJzID0ge307XHJcbiAgICBpZihyZXNwb25zZS5yZXN1bHQuZnVsZmlsbG1lbnQuZGF0YSAmJiByZXNwb25zZS5yZXN1bHQuZnVsZmlsbG1lbnQuZGF0YS53ZWIgJiYgcmVzcG9uc2UucmVzdWx0LmZ1bGZpbGxtZW50LmRhdGEud2ViLnBhcmFtZXRlcnMpIHtcclxuICAgICAgcGFyYW1ldGVycyA9IHJlc3BvbnNlLnJlc3VsdC5mdWxmaWxsbWVudC5kYXRhLndlYi5wYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0LmNvbnRlbnQgPSByZXNwb25zZS5yZXN1bHQuZnVsZmlsbG1lbnQuc3BlZWNoO1xyXG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKHJlc3VsdCk7XHJcbiAgICBpZiAoaXNOYXZpZ2F0aW9uKSB7XHJcbiAgICAgIHZhciBtZXRhOiBhbnkgPSB7fTtcclxuICAgICAgY29uc29sZS5sb2coJ1Bhcm1ldGVycyBmcm9tIGNoYXQuLi4nICsgSlNPTi5zdHJpbmdpZnkocGFyYW1ldGVycykpO1xyXG4gICAgICBtZXRhLmZyb21Mb2NhdGlvbklkID0gcGFyYW1ldGVyc1snZnJvbUxvY2F0aW9uJ10gPyBwYXJhbWV0ZXJzWydmcm9tTG9jYXRpb24nXS5pZCA6IC0xO1xyXG4gICAgICBtZXRhLnRvTG9jYXRpb25JZCA9IHBhcmFtZXRlcnNbJ3RvTG9jYXRpb24nXSA/IHBhcmFtZXRlcnNbJ3RvTG9jYXRpb24nXS5pZCA6IC0xO1xyXG4gICAgICBtZXRhLmNhbXB1c0lkID1wYXJhbWV0ZXJzWyd0b0xvY2F0aW9uJ10gPyBwYXJhbWV0ZXJzWyd0b0xvY2F0aW9uJ10uY2FtcHVzSWQgOiAtMTtcclxuICAgICAgdmFyIG5hdlJlc3VsdDogQ2hhdEl0ZW0gPSB7IGlzTmF2aWdhdGlvbjogdHJ1ZSwgY29udGVudDogJycsIGlzU2VsZjogZmFsc2UsIHVzZXI6IHVzZXIsIHRpbWVzdGFtcDogbmV3IERhdGUoKSwgbWV0YTogbWV0YSB9O1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmF2UmVzdWx0KTtcclxuICAgIH1cclxuICB9XHJcbiAgYWxpZ24oaXRlbTogQ2hhdEl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmlzU2VsZiA/IFwicmlnaHRcIiA6IFwibGVmdFwiO1xyXG4gIH1cclxuICBzaG93SW1hZ2UoaXRlbTogQ2hhdEl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmlzU2VsZiA/IFwiY29sbGFwc2VcIiA6IFwidmlzaWJsZVwiO1xyXG4gIH1cclxuICBzaG93VGV4dChpdGVtOiBDaGF0SXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0uaXNOYXZpZ2F0aW9uID8gXCJjb2xsYXBzZVwiIDogXCJ2aXNpYmxlXCI7XHJcbiAgfVxyXG4gIHNob3dOYXYoaXRlbTogQ2hhdEl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmlzTmF2aWdhdGlvbiA/IFwidmlzaWJsZVwiIDogXCJjb2xsYXBzZVwiO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShtZXNzYWdlLCBjYikge1xyXG4gICAgbGV0IGNNc2c6IENoYXRJdGVtID0geyBpc05hdmlnYXRpb246IGZhbHNlLCBjb250ZW50OiBtZXNzYWdlLmNvbnRlbnQsIGlzU2VsZjogdHJ1ZSwgdXNlcjogJ1lvdScsIHRpbWVzdGFtcDogbmV3IERhdGUoKSwgbWV0YToge30gfTtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2VzKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChjTXNnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZXMgPSBbY01zZ107XHJcbiAgICB9XHJcbiAgICBsZXQgY29udGV4dHMgOiBbYW55XTtcclxuICAgIGlmKHRoaXMuc2Vzc2lvblNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcbiAgICAgIGNvbnRleHRzPSBbe1xyXG4gICAgICAgIG5hbWU6ICdhdXRoJyxcclxuICAgICAgICBwYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICB0b2tlbjogdGhpcy5zZXNzaW9uU2VydmljZS5nZXRVc2VyKCkudXNlcm5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG4gICAgY2xpZW50LnRleHRSZXF1ZXN0KG1lc3NhZ2UuY29udGVudCwge2NvbnRleHRzOiBjb250ZXh0c30pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNiKHJlc3BvbnNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgb3Blbk5hdihpdGVtOiBDaGF0SXRlbSkge1xyXG4gICAgY29uc29sZS5sb2coJ29wZW5pbmcgbmF2IGZvcicsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICBxdWVyeVBhcmFtcyA6IHtcclxuICAgICAgICAgIFwiZnJvbUxvY2F0aW9uSWRcIjogaXRlbS5tZXRhLmZyb21Mb2NhdGlvbklkLFxyXG4gICAgICAgICAgXCJ0b0xvY2F0aW9uSWRcIjogaXRlbS5tZXRhLnRvTG9jYXRpb25JZCxcclxuICAgICAgICAgIFwiY2FtcHVzSWRcIjogaXRlbS5tZXRhLmNhbXB1c0lkXHJcbiAgICB9fTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbmF2aWdhdGlvbiddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICB9XHJcbiAgc2VuZCgpOiB2b2lkIHtcclxuICAgIGxldCBfc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLm5ld01lc3NhZ2UpKTtcclxuICAgIHRoaXMuc2VuZE1lc3NhZ2UodGhpcy5uZXdNZXNzYWdlLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgX3NlbGYuYWRkTWVzc2FnZShyZXNwb25zZSwgJ0Rvbm5hJyk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubmV3TWVzc2FnZS5jb250ZW50ID0gJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==