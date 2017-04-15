import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public auth: Auth, public user: User, public navCtrl: NavController) {
        console.log('auth deps injected');
    }

    doLogin(){
        let details = {'email': 'hi@ionic.io', 'password': 'puppies123'};

        this.auth.login('basic', details).then(() => {
            console.log('logged in');
            this.navCtrl.setRoot(TabsPage);

        }, (err) => {
            console.log(err);
        }
        )

        
    }
}