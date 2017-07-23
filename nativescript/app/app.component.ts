import { Component } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";

import { HomeComponent } from './home/home.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { IndoorMapComponent } from './indoor-map/indoor-map.component';

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.mobile.html',
  styleUrls: ['./app.component.mobile.css']
})
export class AppComponent {
    title = 'Donna';
    public items: Array<DataItem>;
    public tabSelectedIndex: number;

    constructor() {
        this.tabSelectedIndex = 1;
        this.items = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i*10));
        }
        console.log('Varuthaa...');
    }
}
