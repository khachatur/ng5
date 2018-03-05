import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {Dashboard1Component} from './dashboard1.component';

const module2Routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/1', component: Dashboard1Component}
];

@NgModule({
  declarations: [
    DashboardComponent,
    Dashboard1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(module2Routes)
  ],
  providers: [],
  bootstrap: []
})
export class Module2dModule {
}
