import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {WelcomeComponent} from './welcome.component';
import {ListComponent} from './list.component';

const module1Routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  declarations: [
    WelcomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(module1Routes)
  ],
  providers: [],
  bootstrap: []
})
export class Module1Module {
}
