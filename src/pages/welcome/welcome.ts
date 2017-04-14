import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { SignupPage } from '../signup/signup';
import { MainPage } from '../pages';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
    //this.navCtrl.setRoot(MainPage);
  }

  // signup() {
  //   this.navCtrl.push(SignupPage);
  // }

  // jumpTo() {
  //   this.navCtrl.push(ProfilePage);
  // }

}
