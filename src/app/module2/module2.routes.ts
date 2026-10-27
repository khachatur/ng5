import {Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {Dashboard1Component} from './dashboard1.component';

export const module2Routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/1', component: Dashboard1Component}
];
