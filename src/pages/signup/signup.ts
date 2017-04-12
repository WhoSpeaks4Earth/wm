import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

    account: {name: string, email: string, password: string} = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };


  constructor(public navCtrl: NavController) {

  }

  doSignup() {
    this.navCtrl.push(TutorialPage);
  }
}
