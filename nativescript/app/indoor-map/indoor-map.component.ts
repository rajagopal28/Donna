import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";

@Component({
    selector: 'IndoorMap',
    templateUrl: './indoor-map/indoor-map.component.html'
})
export class IndoorMapComponent implements OnInit {
    public webViewSrc: string = "https://rajagopal28.github.io/Donna/#/indoor-map";

    @ViewChild("myWebView") webViewRef: ElementRef;

    ngAfterViewInit() {
        let webview: WebView = this.webViewRef.nativeElement;

        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            let message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            } else {
                message = "Error loading " + args.url + ": " + args.error;
            }
            console.log("WebView message - " + message);
        });
    }
    ngOnInit() {

    }
}
