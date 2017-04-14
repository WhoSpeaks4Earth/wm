import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { ExerciseAssPage } from '../exercise-ass/exercise-ass';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goExerciseAss() {
    this.navCtrl.push(ExerciseAssPage);
  }
}
