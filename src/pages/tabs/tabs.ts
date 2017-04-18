import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AssessmentsPage } from '../assessments/assessments';
import { CirclesPage } from '../circles/circles';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AssessmentsPage;
  tab3Root = CirclesPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
