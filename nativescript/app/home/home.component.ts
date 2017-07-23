import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './home/home.component.html'
})
export class HomeComponent implements OnInit {
  logoPath = 'assets/donna.gif';
  public htmlString: string;

  constructor() {
      console.log('in home...');
      this.htmlString = '<p> We are presenting <b>Donna !! Your personalised office assistant!</b>The primary responsibility of Donna is to help you internally navigate in you huge corporate office and get you things done. Apart from internal navigation, she can also help you more productive, healthy and smart in a lot of ways. The proposed system can be integrated with public announcement systems, office update systems, food provider systems, business emails and meeting management systems etc, to help you at your work.</p>';
  }

  ngOnInit() {
  }

}
