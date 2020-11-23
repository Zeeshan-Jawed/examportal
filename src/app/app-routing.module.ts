import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SigninComponent } from './core/components/signin/signin.component';

const routes: Routes = [
  { path: "", component: NavbarComponent },
  { path: "signin", component: SigninComponent },
  { path:"admin",component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
