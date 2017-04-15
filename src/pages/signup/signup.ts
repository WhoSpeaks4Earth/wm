import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public auth: Auth) {

  }

  doSignup() {

    let details: UserDetails = {'email': 'hi@ionic.io', 'password': 'puppies123'};

    this.auth.signup(details).then(() => {
      console.log('registered');
      this.navCtrl.setRoot(TutorialPage);
    }, (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        if (e === 'conflict_email') {
          alert('Email already exists.');
        } else {
          // handle other errors
        }
      }
    });
    
  }
}
