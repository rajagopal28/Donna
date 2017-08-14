import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-indoor',
  templateUrl: './google-indoor.component.html',
  styleUrls: ['./google-indoor.component.css']
})
export class GoogleIndoorComponent implements OnInit {
  lat: number = 51.5561892;
  lng: number = -0.2799979;
  zoom: number = 18;

  constructor() { }

  ngOnInit() {
  }

}
