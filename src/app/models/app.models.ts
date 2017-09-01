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

export class Campus {
  latitude: number;
  longitude: number;
  name: string;
  id: number;
  locations : [Location];
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
  locationId: number;
}

export class EventParticipant {
  id: number;
  eventId: number;
  participantId: number;
  participant: User;
}

export class Event {
  title: string;
  description: string;
  eventStart: number;
  eventEnd: number;
  locationId: number;
  id: number;
  participants: [EventParticipant];
}


export class Announcement {
  title: string;
  description: string;
  validFrom: number;
  validTill: number;
  category: string;
  id: number;
}
