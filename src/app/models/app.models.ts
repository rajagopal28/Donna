import { Pipe, PipeTransform } from '@angular/core';

 export class Location {
   id: number;
   latitude: number;
   longitude: number;
   name: string;
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

export class ChatItem {
  isNavigation: boolean;
  content: string;
  isSelf: boolean;
  user : string;
  meta: any;
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


@Pipe({
  name: 'dateformatter'
})
export class DateFormatterPipe implements PipeTransform {
  private monthNames :[string] = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  transform(timestamp: number): string {
    let DATE_SEPERATOR : string = '-';
    let TIME_SEPERATOR : string = ':';
    let BLANK : string  = ' ';


    let d = new Date(timestamp);

    let day = d.getDate();
    let monthIndex = d.getMonth();
    let year = d.getFullYear();
    let h = d.getHours();
    let hours = h>12 ? (h-12) : h;
    let mins = d.getMinutes();
    let ordinal = h>=12 ? 'PM' : 'AM';

    return day
    + DATE_SEPERATOR
    + this.monthNames[monthIndex]
    + DATE_SEPERATOR
    + year
    + BLANK
    + hours
    + TIME_SEPERATOR
    + mins
    + BLANK
    + ordinal;
  }
}
