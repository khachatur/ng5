import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// import {Module1Module} from './module1/module1.module';
// import {Module2dModule} from './module2/module2.module';

import {AppComponent} from './app.component';
import {MainComponent} from './main.component';
import {NotFoundComponent} from './notFound.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: MainComponent},
  {path: 'module1', loadChildren: './module1/module1.module#Module1Module'},
  {path: 'module2', loadChildren: './module2/module2.module#Module2dModule'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // Module1Module,
    // Module2dModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
