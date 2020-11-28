import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './admin/components/courses/courses.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ExamComponent } from './admin/components/exam/exam.component';
import { StudentFormComponent } from './admin/components/students/student-form/student-form.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { TeacherFormComponent } from './admin/components/teachers/teacher-form/teacher-form.component';
import { TeachersComponent } from './admin/components/teachers/teachers.component';
import { FooterComponent } from './admin/shared/footer/footer.component';
import { HeaderComponent } from './admin/shared/header/header.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SigninComponent } from './core/components/signin/signin.component';

const routes: Routes = [
  { path: "", component: FooterComponent},
  { path: "signin", component: SigninComponent },
  { path:"admin",component:DashboardComponent},
  { path:"admin/exam",component:ExamComponent},

  { path: "admin/students/new", component: StudentFormComponent},
  { path: "admin/students/:id", component: StudentFormComponent},
  { path:"admin/students",component:StudentsComponent},

  { path: "admin/teachers/new", component: TeacherFormComponent},
  { path: "admin/teachers/:id", component: TeacherFormComponent},
  { path:"admin/teachers",component:TeachersComponent},

  { path:"admin/courses",component:CoursesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
