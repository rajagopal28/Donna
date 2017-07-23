import { Component, OnInit } from '@angular/core';
import { StackLayout } from "ui/layouts/stack-layout";
import {ApiAiClient} from "api-ai-javascript";

import { ChatItem } from '../models/app.models';
import { IndoorLocationDataService } from '../services/indoor-location-data.service';

const client = new ApiAiClient({accessToken: 'b71bf0851f6f41f8b1728e20c7946c25'})

@Component({
  selector: 'ChatBot',
  templateUrl: './chat-bot/chat-bot.component.html',
  styleUrls:[ './chat-bot/chat-bot.component.css' ],
  providers: [IndoorLocationDataService]
})
export class ChatBotComponent implements OnInit {
  messages : [ChatItem];
  newMessage: ChatItem = new ChatItem();
  fromLocationPosition: number;
  toLocationPosition: number;
  constructor(
   private hotSpotService: IndoorLocationDataService) {}

  ngOnInit() {
    console.log('chat bot loading..');
    let _self = this;
    this.newMessage.content= 'Hi Donna';
    this.sendMessage(this.newMessage, (response) => {
      _self.addMessage(response, 'Donna');
    });
    let locationCount = this.hotSpotService.getPoiLocations().length;
    this.fromLocationPosition = Math.round((Math.random() * 99999) % locationCount) + 1;
    this.toLocationPosition = Math.round((Math.random() * 99999) % locationCount) + 1;
   }
   addMessage(response, user) {
     console.log(response);
      var result : ChatItem = {isNavigation: false, content: '', isSelf: false, user : user, timestamp : new Date()};
      result.isNavigation = response.result.action === 'navigation';
      result.content= response.result.fulfillment.speech;
      if(this.messages) {
       this.messages.push(result);
      } else {
       this.messages = [result];
      }
   }
   align(item : ChatItem) {
        return item.isSelf? "right" : "left";
    }
    showImage(item: ChatItem) {
        return item.isSelf ? "collapse" : "visible";
    }
    showNav(item: ChatItem) {
        return item.isNavigation ? "visible" :  "collapse";
    }
   sendMessage(message, cb) {
    let cMsg : ChatItem = {isNavigation: false, content: message.content, isSelf: true, user : 'You', timestamp : new Date()};
     if(this.messages) {
      this.messages.push(cMsg);
     } else {
      this.messages = [cMsg];
     }
    client.textRequest(message.content)
       .then((response) => {
        cb(response);
       })
       .catch((error) => {
         console.error(error);
       });
  }
   send(message: ChatItem): void {
     let _self = this;
     this.sendMessage(this.newMessage, (response) => {
       _self.addMessage(response, 'Donna');
     });
   }
}
