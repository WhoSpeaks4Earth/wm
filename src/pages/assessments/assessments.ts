import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExerciseAssPage } from '../exercise-ass/exercise-ass';


@Component({
  selector: 'page-assessments',
  templateUrl: 'assessments.html'
})
export class AssessmentsPage {


  constructor(public navCtrl: NavController) {
  }

  goExerciseAss() {
    this.navCtrl.push(ExerciseAssPage);
  }

}
