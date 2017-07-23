import { Injectable } from '@angular/core';
import { HotSpot } from '../models/app.models';

const valiPois : [HotSpot] = [
   {
      id: 1,
      name:"S119",
      building:"Winnett Building",
      location:{
         lat:39.961645448988826,
         lng:-75.16706630587578
      }
   },
   {
      id: 2,
      name:"Office",
      building:"Winnett Building",
      location:{
         lat:39.961589941151836,
         lng:-75.16729563474657
      }
   },
   {
      id: 3,
      name:"S130",
      building:"Winnett Building",
      location:{
         lat:39.96152209817878,
         lng:-75.16709044575693
      }
   },
   {
      id: 4,
      name:"S110",
      building:"Winnett Building",
      location:{
         lat:39.96169684509401,
         lng:-75.16675382852556
      }
   },
   {
      id: 5,
      name:"Center on Male Engagement",
      building:"Winnett Building",
      location:{
         lat:39.96179552550764,
         lng:-75.16671761870384
      }
   },
   {
      id: 6,
      name:"S112",
      building:"Winnett Building",
      location:{
         lat:39.961545740434616,
         lng:-75.16679137945177
      }
   },
   {
      id: 7,
      name:"W1-1",
      building:"West Building",
      location:{
         lat:39.96264047071895,
         lng:-75.1665996015072
      }
   },
   {
      id: 8,
      name:"W1-7",
      building:"West Building",
      location:{
         lat:39.96271653583396,
         lng:-75.16697108745576
      }
   },
   {
      id: 9,
      name:"Dental",
      building:"West Building",
      location:{
         lat:39.96286147048098,
         lng:-75.16728088259698
      }
   },
   {
      id: 10,
      name:"W1-24",
      building:"West Building",
      location:{
         lat:39.96279568457999,
         lng:-75.16736537218095
      }
   },
   {
      id: 11,
      name:"W1-24N",
      building:"West Building",
      location:{
         lat:39.96291800518908,
         lng:-75.16736268997194
      }
   },
   {
      id: 12,
      name:"W1-1V",
      building:"West Building",
      location:{
         lat:39.96283577287092,
         lng:-75.16683161258699
      }
   },
   {
      id: 13,
      name:"W1-25",
      building:"West Building",
      location:{
         lat:39.96284502401165,
         lng:-75.16707435250284
      }
   },
   {
      id: 14,
      name:"W1-16",
      building:"West Building",
      location:{
         lat:39.96277512647294,
         lng:-75.16722187399864
      }
   },
   {
      id: 15,
      name:"Toilets",
      building:"Bonnell Building",
      location:{
         lat:39.96170301262403,
         lng:-75.16597062349321
      }
   },
   {
      id: 16,
      name:"Library",
      building:"Mint Building",
      location:{
         lat:39.96241844233175,
         lng:-75.16566485166551
      }
   },
   {
      id: 17,
      name:"Office",
      building:"Mint Building",
      location:{
         lat:39.96261374511794,
         lng:-75.16511768102647
      }
   },
   {
      id: 18,
      name:"M1-20D",
      building:"Mint Building",
      location:{
         lat:39.962650749793504,
         lng:-75.1659518480301
      }
   },
   {
      id: 18,
      name:"Day Care",
      building:"Day Care",
      location:{
         lat:39.96098757543047,
         lng:-75.165573656559
      }
   },
   {
      id: 19,
      name:"C1-33 ",
      building:"Center For Business & Industry",
      location:{
         lat:39.960611351144365,
         lng:-75.16777575016023
      }
   },
   {
      id: 20,
      name:"Career Services Center",
      building:"Center For Business & Industry",
      location:{
         lat:39.96051472490073,
         lng:-75.16784816980363
      }
   },
   {
      id: 21,
      name:"Conference Room",
      building:"Center For Business & Industry",
      location:{
         lat:39.960542479261285,
         lng:-75.16776904463768
      }
   }
];
@Injectable()
export class IndoorLocationDataService {

  constructor() { }

  getPoiLocations() : [any] {
    return valiPois;
  }
  getLevels() : [number] {
    return [-1, 0, 1, 2, 3, 7]
  }

}
