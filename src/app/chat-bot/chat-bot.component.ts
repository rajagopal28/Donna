import { Component, OnInit } from '@angular/core';
import {ApiAiClient} from "api-ai-javascript";


import { SessionService } from '../services/session-service';
import { ChatItem } from '../models/app.models';
import { IndoorLocationDataService } from '../services/indoor-location-data.service';
const client = new ApiAiClient({accessToken: 'b71bf0851f6f41f8b1728e20c7946c25'})

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css'],
  providers: [IndoorLocationDataService]
})
export class ChatBotComponent implements OnInit {
  messages : [ChatItem];
  newMessage: ChatItem = new ChatItem();
  fromLocationPosition: number;
  toLocationPosition: number;
  constructor(
   private hotSpotService: IndoorLocationDataService, protected sessionService: SessionService) {}

  ngOnInit() {
    let _self = this;
    this.newMessage.content= 'Hi Donna';
    this.sendMessage(this.newMessage, (response) => {
      _self.addMessage(response, 'Donna');
    });
   }
   addMessage(response, user) {
     console.log(response);
      let meta : any = {};
      var result : ChatItem = {isNavigation: false, content: '', isSelf: false, user : user, timestamp : new Date(), meta : meta};
      result.isNavigation = response.result.action === 'route-to-location-request';
      result.content= response.result.fulfillment.speech;
      if(result.isNavigation && response.result.data
          && response.result.data.web
          && response.result.data.web.parameters ) {
        let parameters = response.result.data.web.parameters;
        meta.fromLocationId = parameters.fromLocation? parameters.fromLocation.id : -1;
        meta.toLocationId = parameters.toLocation? parameters.toLocation.id : -1;
        if (meta.toLocationId !== -1) {
          meta.campusId = parameters.toLocation.campus? parameters.toLocation.campus.id : -1;
        }
      }
      if(this.messages) {
       this.messages.push(result);
      } else {
       this.messages = [result];
      }
   }
   sendMessage(message, cb) {
    let cMsg : ChatItem = {isNavigation: false, content: message.content, isSelf: true, user : 'You', timestamp : new Date(), meta : {}};
     if(this.messages) {
      this.messages.push(cMsg);
     } else {
      this.messages = [cMsg];
     }
    let contexts :[any];
    if (this.sessionService.isLoggedIn()) {
      contexts = [{
          name: 'auth',
          parameters: {
            'token' : this.sessionService.getUser().username
          }
        }
      ];
    }
    client.textRequest(message.content, {contexts: contexts})
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
