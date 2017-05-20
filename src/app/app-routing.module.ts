//Angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultHomeComponent} from "./defaultHome.component"
import {AppComponent} from "./app.component";




const routes: Routes = [
  { path: 'home', component: DefaultHomeComponent, pathMatch:'full'},
  { path: 'dashboard', component: DefaultHomeComponent, pathMatch:'full'},
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes', component: HeroesComponent }

];


/**
 * Set up the router module
 */
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }

