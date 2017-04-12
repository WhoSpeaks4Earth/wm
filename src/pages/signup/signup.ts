import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

    account: {email: string, password: string} = {
    email: 'test@example.com',
    password: 'test'
  };


  constructor(public navCtrl: NavController) {

  }

  doSignup() {
    this.navCtrl.push(TutorialPage);
  }
}
