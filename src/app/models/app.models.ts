import { Component } from '@angular/core';
export class Location {
   lat: number;
   lng: number;
}
export class HotSpot {
  name: String;
  building: String;
  location: Location;
}

export class ChatItem {
  isNavigation: boolean;
  content: string;
  isSelf: boolean;
  user : string;
  timestamp : Date
}
