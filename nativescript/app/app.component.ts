import { Component } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";


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
    public htmlString: string;

    public items: Array<DataItem>;
    public tabSelectedIndex: number;

    constructor() {
        this.tabSelectedIndex = 1;
        this.items = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i*10));
        }
        console.log('Varuthaa...');
        this.htmlString = '<p> We are presenting <b>Donna !! Your personalised office assistant!</b>The primary responsibility of Donna is to help you internally navigate in you huge corporate office and get you things done. Apart from internal navigation, she can also help you more productive, healthy and smart in a lot of ways. The proposed system can be integrated with public announcement systems, office update systems, food provider systems, business emails and meeting management systems etc, to help you at your work.</p>';
    }
}
