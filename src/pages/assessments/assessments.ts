import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExerciseAssPage } from '../exercise-ass/exercise-ass';


@Component({
  selector: 'page-assessments',
  templateUrl: 'assessments.html'
})
export class AssessmentsPage {
  public assessments:object[] = [
    {
      name: "ass1",
      score: 9,
      progress: 100,
      completed_on: "05/12/2017"
    },
    {
      name: "ass2",
      score: 7,
      progress: 80,
      completed_on: ""
    },
    {
      name: "ass3",
      score: 5,
      progress: 100,
      completed_on: "05/12/2017"
    },
  ];

  constructor(public navCtrl: NavController) {
  }

  goExerciseAss() {
    this.navCtrl.push(ExerciseAssPage);
  }

}
