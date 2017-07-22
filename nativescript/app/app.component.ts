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
    public items: Array<DataItem>;
    public tabSelectedIndex: number;

    constructor() {
        this.tabSelectedIndex = 1;
        this.items = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }
    }
}
