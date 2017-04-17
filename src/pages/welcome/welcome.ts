import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Api } from '../../providers/api';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage implements OnInit {

  constructor(public navCtrl: NavController, public api: Api) {
    
  }

  ngOnInit() {
    console.log('init for welcome page');
    console.log(this.api.url);
  }

}
