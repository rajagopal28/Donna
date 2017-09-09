import { Component, OnInit, AfterViewInit,  Output, EventEmitter} from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { StackLayout } from "ui/layouts/stack-layout";
import { TextField } from 'ui/text-field';
import { ApiAiClient } from "api-ai-javascript";

import { ChatItem } from '../models/app.models';
import { SessionService } from '../services/session-service';

const client = new ApiAiClient({ accessToken: 'YOUR KEY' })

@Component({
  selector: 'ChatBot',
  templateUrl: './chat-bot/chat-bot.component.html',
  styleUrls: ['./chat-bot/chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  @Output()
  showSignin:EventEmitter<string> = new EventEmitter();
  isLoggedIn: boolean = false;
  messages: Array<ChatItem>;
  newMessage: ChatItem = new ChatItem();

  constructor(protected sessionService: SessionService,
  private router: Router) { }

  ngOnInit() {
    this.sessionService.authObervable.subscribe(authUser => {
      this.isLoggedIn = this.sessionService.isLoggedIn()
      console.log('observing... chat bot' + this.isLoggedIn);
    });
    console.log('chat bot loading..');
    let _self = this;
    this.messages = [];
    this.newMessage.content = 'Hi Donna';
    this.sendMessage(this.newMessage, (response) => {
      _self.addMessage(response, 'Donna');
    });
  }
  showLogin() {
    this.showSignin.emit('success');
  }
  ngAfterViewInit() {
  }

  addMessage(response, user) {
    var result: ChatItem = { isNavigation: false, content: '', isSelf: false, user: user, timestamp: new Date(), meta: {} };
    let isNavigation = (response.result.action === 'route-to-location-request');
    let parameters = response.result.parameters;
    result.content = response.result.fulfillment.speech;
    this.messages.push(result);
    if (isNavigation) {
      var meta: any = {};
      console.log('Parmeters from chat...' + JSON.stringify(parameters));
      meta.fromLocationId = parameters['fromLocation'] ? parameters['fromLocation'].id : -1;
      meta.toLocationId = parameters['toLocation'] ? parameters['toLocation'].id : -1;
      var navResult: ChatItem = { isNavigation: true, content: '', isSelf: false, user: user, timestamp: new Date(), meta: meta };
      this.messages.push(navResult);
    }
  }
  align(item: ChatItem) {
    return item.isSelf ? "right" : "left";
  }
  showImage(item: ChatItem) {
    return item.isSelf ? "collapse" : "visible";
  }
  showText(item: ChatItem) {
    return item.isNavigation ? "collapse" : "visible";
  }
  showNav(item: ChatItem) {
    return item.isNavigation ? "visible" : "collapse";
  }
  sendMessage(message, cb) {
    let cMsg: ChatItem = { isNavigation: false, content: message.content, isSelf: true, user: 'You', timestamp: new Date(), meta: {} };
    if (this.messages) {
      this.messages.push(cMsg);
    } else {
      this.messages = [cMsg];
    }
    let contexts : [any];
    if(this.sessionService.isLoggedIn()) {
      contexts= [{
        name: 'auth',
        parameters: {
          token: this.sessionService.getUser().username
        }
      }];
    }
    client.textRequest(message.content, {contexts: contexts})
      .then((response) => {
        cb(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  openNav(item: ChatItem) {
    console.log('opening nav for', JSON.stringify(item));
    let navigationExtras: NavigationExtras = {
      queryParams : {
          "fromLocationId": item.meta.fromLocationId,
          "toLocationId": item.meta.toLocationId
    }};
    this.router.navigate(['navigation'], navigationExtras);
  }
  send(): void {
    let _self = this;
    console.log(JSON.stringify(this.newMessage));
    this.sendMessage(this.newMessage, (response) => {
      _self.addMessage(response, 'Donna');
    });
    this.newMessage.content = '';
  }
}
