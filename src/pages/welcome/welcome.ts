import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User, IDetailedError } from '@ionic/cloud-angular';

import { TabsPage } from '../tabs/tabs';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  account: {email: string, password: string} = {
        email: 'hi@ionic.io',
        password: 'puppies123'
    };

    constructor(public auth: Auth, public user: User, public navCtrl: NavController) {
    }

    doSignup() {

    this.auth.signup(this.account).then(() => {
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

    doLogin(){
        //let details = {'email': 'hi@ionic.io', 'password': 'puppies123'};

        this.auth.login('basic', this.account).then(() => {
            console.log('logged in');
            this.navCtrl.setRoot(TabsPage);

        }, (err) => {
            console.log(err);
        }
        )
    }
}
