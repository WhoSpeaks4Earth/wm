import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profile: { 
    firstName: string,
    lastName: string,
    birthdate: Date } = {
      firstName: this.user.get('firstName', ''),
      lastName: this.user.get('lastName', ''),
      birthdate: this.user.get('birthdate', '')
  };

  constructor(public navCtrl: NavController, public auth: Auth, public user: User) {
  }

  saveProfile() {
    this.user.set('firstName', this.profile.firstName);
    this.user.set('lastName', this.profile.lastName);
    this.user.set('birthdate', this.profile.birthdate.getDate);
    this.user.save();
    console.log('profile saved');
  }

  signOut() {
    this.auth.logout();
    this.navCtrl.parent.parent.setRoot(WelcomePage);
    console.log('signed out');
  }

}
