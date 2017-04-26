import { TabsPage } from './tabs/tabs';
import { WelcomePage } from './welcome/welcome';
import { CirclesPage } from './circles/circles';
import { ProfilePage } from './profile/profile';
import { HomePage } from './home/home';
import { AssessmentsPage } from './assessments/assessments';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = WelcomePage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = HomePage;
export const Tab2Root = AssessmentsPage;
export const Tab3Root = CirclesPage;
export const Tab4Root = ProfilePage;
