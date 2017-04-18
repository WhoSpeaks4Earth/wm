import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '@ionic/cloud-angular';

import { RootIcon } from '../../components/root-icon/root-icon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public auth: Auth) {
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      console.log('authenticated!')
    }
    else {
      console.log('not authenticated');
    }
  }

}