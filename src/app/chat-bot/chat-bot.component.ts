import { Component, OnInit } from '@angular/core';
import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: 'b71bf0851f6f41f8b1728e20c7946c25'})

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  messages : [any];
  newMessage: any;

  constructor() {
    let _self = this;
    this.newMessage = {content: 'Hi Donna'};
    this.sendMessage(this.newMessage, (response) => {
      _self.addMessage(response, 'Donna');
    });
   }
   addMessage(response, user) {
     console.log(response);
      var result = {isNavigation: false, content: '', isSelf: false, user : user, timestamp : new Date()};
      result.isNavigation = response.result.action === 'navigation';
      result.content= response.result.fulfillment.speech;
      if(this.messages) {
       this.messages.push(result);
      } else {
       this.messages = [result];
      }
   }
   sendMessage(message, cb) {
    let cMsg = {isNavigation: false, content: message.content, isSelf: true, user : 'You', timestamp : new Date()};
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
   send(message: any): void {
     let _self = this;
     this.sendMessage(this.newMessage, (response) => {
       _self.addMessage(response, 'Donna');
     });
   }
  ngOnInit() {
  }
}
