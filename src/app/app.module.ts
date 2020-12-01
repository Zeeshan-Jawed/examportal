import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SigninComponent } from './core/components/signin/signin.component';


import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HeaderComponent } from './admin/shared/header/header.component';
import { FooterComponent } from './admin/shared/footer/footer.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { ExamComponent } from './admin/components/exam/exam.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { CoursesComponent } from './admin/components/courses/courses.component';
import { StudentFormComponent } from './admin/components/students/student-form/student-form.component';
import { TeacherFormComponent } from './admin/components/teachers/teacher-form/teacher-form.component';
import { TeachersComponent } from './admin/components/teachers/teachers.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ExamComponent,
    StudentsComponent,
    CoursesComponent,
    StudentFormComponent,
    TeacherFormComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    ChartsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
