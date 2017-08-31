import { Component } from '@angular/core';
export class ILocation {
   lat: number;
   lng: number;
 }
 export class Location {
   latitude: number;
   longitude: number;
   name: string;
   id: number;
}
export class HotSpot {
  id: number;
  name: String;
  building: String;
  location: ILocation;
}

export class ChatItem {
  isNavigation: boolean;
  content: string;
  isSelf: boolean;
  user : string;
  timestamp : Date
}


export class User {
  firstName: string;
  lastName: string;
  createdTS: number;
  lastUpdatedTS : number;
  username : string;
  password: string;
}
