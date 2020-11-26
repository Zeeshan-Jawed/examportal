import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ExamComponent } from './admin/components/exam/exam.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { FooterComponent } from './admin/shared/footer/footer.component';
import { HeaderComponent } from './admin/shared/header/header.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SigninComponent } from './core/components/signin/signin.component';

const routes: Routes = [
  { path: "", component: FooterComponent},
  { path: "signin", component: SigninComponent },
  { path:"admin",component:DashboardComponent},
  { path:"admin/exam",component:ExamComponent},
  { path:"admin/students",component:StudentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
