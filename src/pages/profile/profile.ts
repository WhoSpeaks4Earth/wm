import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }

  signOut() {
    this.navCtrl.setRoot(WelcomePage);
  }

}
