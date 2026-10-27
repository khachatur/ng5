import {Routes} from '@angular/router';

import {WelcomeComponent} from './welcome.component';
import {ListComponent} from './list.component';

export const module1Routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'list', component: ListComponent}
];
