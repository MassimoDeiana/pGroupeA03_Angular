import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherContainerComponent } from './teacher-container/teacher-container.component';
import { TeacherFormComponent } from './teacher-container/teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-container/teacher-list/teacher-list.component';
import { StudentContainerComponent } from './student-container/student-container.component';
import { StudentListComponent } from './student-container/student-list/student-list.component';
import { StudentFormComponent } from './student-container/student-form/student-form.component';
import { EntityContainerComponent } from './entity-container/entity-container.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {AuthGuard, ErrorInterceptor, JwtInterceptor} from "./_helpers";

@NgModule({
  declarations: [
    AppComponent,
    TeacherContainerComponent,
    TeacherFormComponent,
    TeacherListComponent,
    StudentContainerComponent,
    StudentListComponent,
    StudentFormComponent,
    LoginComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'teacher', component: TeacherContainerComponent, canActivate:[AuthGuard]},

      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
