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
   campusId: number;
   campus: Campus;
   floor: number;
}

export class Campus {
  latitude: number;
  longitude: number;
  name: string;
  id: number;
  campusNumber : number;
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
  id: number;
  firstName: string;
  lastName: string;
  createdTS: number;
  lastUpdatedTS : number;
  username : string;
  password: string;
  locationId: number;
  location: Location;
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
  participantIds: string;
}


export class Announcement {
  title: string;
  description: string;
  validFrom: number;
  validTill: number;
  category: string;
  id: number;
}
