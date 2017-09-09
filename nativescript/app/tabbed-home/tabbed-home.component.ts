import { Component } from "@angular/core";

@Component({
    selector: "TabbedHomeComponent",
    templateUrl: "./tabbed-home/tabbed-home.component.html"
})
export class TabbedHomeComponent {

  public tabSelectedIndex: number;
  public title: string = 'Donna';

      constructor() {
          this.tabSelectedIndex = 0;
          console.log('Varuthaa...With Maps');
      }

}
