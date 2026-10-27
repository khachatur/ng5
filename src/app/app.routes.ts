import {Routes} from '@angular/router';

import {MainComponent} from './main.component';
import {NotFoundComponent} from './notFound.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: MainComponent},
  {path: 'module1', loadChildren: () => import('./module1/module1.routes').then(m => m.module1Routes)},
  {path: 'module2', loadChildren: () => import('./module2/module2.routes').then(m => m.module2Routes)},
  {path: '**', component: NotFoundComponent}
];
