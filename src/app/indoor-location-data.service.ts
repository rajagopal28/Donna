import { Injectable } from '@angular/core';
const valiPois : [any] = [
   {
      name:"S119",
      building:"Winnett Building",
      location:{
         lat:39.961645448988826,
         lng:-75.16706630587578
      }
   },
   {
      name:"Office",
      building:"Winnett Building",
      location:{
         lat:39.961589941151836,
         lng:-75.16729563474657
      }
   },
   {
      name:"S130",
      building:"Winnett Building",
      location:{
         lat:39.96152209817878,
         lng:-75.16709044575693
      }
   },
   {
      name:"S110",
      building:"Winnett Building",
      location:{
         lat:39.96169684509401,
         lng:-75.16675382852556
      }
   },
   {
      name:"Center on Male Engagement",
      building:"Winnett Building",
      location:{
         lat:39.96179552550764,
         lng:-75.16671761870384
      }
   },
   {
      name:"S112",
      building:"Winnett Building",
      location:{
         lat:39.961545740434616,
         lng:-75.16679137945177
      }
   },
   {
      name:"W1-1",
      building:"West Building",
      location:{
         lat:39.96264047071895,
         lng:-75.1665996015072
      }
   },
   {
      name:"W1-7",
      building:"West Building",
      location:{
         lat:39.96271653583396,
         lng:-75.16697108745576
      }
   },
   {
      name:"Dental",
      building:"West Building",
      location:{
         lat:39.96286147048098,
         lng:-75.16728088259698
      }
   },
   {
      name:"W1-24",
      building:"West Building",
      location:{
         lat:39.96279568457999,
         lng:-75.16736537218095
      }
   },
   {
      name:"W1-24N",
      building:"West Building",
      location:{
         lat:39.96291800518908,
         lng:-75.16736268997194
      }
   },
   {
      name:"W1-1V",
      building:"West Building",
      location:{
         lat:39.96283577287092,
         lng:-75.16683161258699
      }
   },
   {
      name:"W1-25",
      building:"West Building",
      location:{
         lat:39.96284502401165,
         lng:-75.16707435250284
      }
   },
   {
      name:"W1-16",
      building:"West Building",
      location:{
         lat:39.96277512647294,
         lng:-75.16722187399864
      }
   },
   {
      name:"Toilets",
      building:"Bonnell Building",
      location:{
         lat:39.96170301262403,
         lng:-75.16597062349321
      }
   },
   {
      name:"Library",
      building:"Mint Building",
      location:{
         lat:39.96241844233175,
         lng:-75.16566485166551
      }
   },
   {
      name:"Office",
      building:"Mint Building",
      location:{
         lat:39.96261374511794,
         lng:-75.16511768102647
      }
   },
   {
      name:"M1-20D",
      building:"Mint Building",
      location:{
         lat:39.962650749793504,
         lng:-75.1659518480301
      }
   },
   {
      name:"Day Care",
      building:"Day Care",
      location:{
         lat:39.96098757543047,
         lng:-75.165573656559
      }
   },
   {
      name:"C1-33 ",
      building:"Center For Business & Industry",
      location:{
         lat:39.960611351144365,
         lng:-75.16777575016023
      }
   },
   {
      name:"Career Services Center",
      building:"Center For Business & Industry",
      location:{
         lat:39.96051472490073,
         lng:-75.16784816980363
      }
   },
   {
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
