import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
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
    birthdate: string,
    gender: string,
    weight: number,
    heightFeet: number,
    heightInches: number,
    maritalStatus: string,
    numKids: number,
    zipcode: string } = {
      firstName: this.user.get('firstName', ''),
      lastName: this.user.get('lastName', ''),
      birthdate: this.user.get('birthdate', ''),
      gender: this.user.get('gender', ''),
      weight: this.user.get('weight', ''),
      heightFeet: this.user.get('heightFeet', ''),
      heightInches: this.user.get('heightInches', ''),
      maritalStatus: this.user.get('maritalStatus', ''),
      numKids: this.user.get('numKids', ''),
      zipcode: this.user.get('zipcode', '')
  };

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public auth: Auth,
              public user: User) {
  }

  saveProfile() {
    this.user.set('firstName', this.profile.firstName);
    this.user.set('lastName', this.profile.lastName);
    this.user.set('birthdate', this.profile.birthdate);
    this.user.set('gender', this.profile.gender);
    this.user.set('weight', this.profile.weight);
    this.user.set('heightFeet', this.profile.heightFeet);
    this.user.set('heightInches', this.profile.heightInches);
    this.user.set('maritalStatus', this.profile.maritalStatus);
    this.user.set('numKids', this.profile.numKids);
    this.user.set('zipcode', this.profile.zipcode);
    this.user.save().then(() => {
      let toast = this.toastCtrl.create({
        message: 'Profile saved!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
    console.log('profile saved');
  }

  signOut() {
    this.auth.logout();
    this.navCtrl.parent.parent.setRoot(WelcomePage);
    console.log('signed out');
  }

}
