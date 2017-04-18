import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    account: {email: string, password: string} = {
        email: 'hi@ionic.io',
        password: 'puppies123'
    };

    constructor(public auth: Auth, public user: User, public navCtrl: NavController) {
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