import { Component } from '@angular/core';

import { CirclesPage } from '../circles/circles';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CirclesPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
