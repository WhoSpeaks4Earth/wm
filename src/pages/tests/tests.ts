import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tests page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html',
})
export class TestsPage {
  tests:object[] = [
    {
      category: "Fitness",
      score: 7,
      progress: 100,
      completed_on: "05/12/2017"
    },
    {
      category: "Nutrition",
      score: 6,
      progress: 80,
      completed_on: ""
    },
    {
      category: "Rest",
      score: 7,
      progress: 100,
      completed_on: "05/12/2017"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tests');
  }

  categoryClicked() {
    //console.log();
  }

}
