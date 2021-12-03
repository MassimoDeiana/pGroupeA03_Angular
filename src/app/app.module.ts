import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherContainerComponent } from './teacher-container/teacher-container.component';
import { TeacherFormComponent } from './teacher-container/teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-container/teacher-list/teacher-list.component';
import { StudentContainerComponent } from './student-container/student-container.component';
import { StudentListComponent } from './student-container/student-list/student-list.component';
import { StudentFormComponent } from './student-container/student-form/student-form.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {AuthGuard, ErrorInterceptor, JwtInterceptor} from "./_helpers";
import {ScheduleModule,RecurrenceEditorModule,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService} from "@syncfusion/ej2-angular-schedule";
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchoolclassContainerComponent } from './schoolclass-container/schoolclass-container.component';
import { SchoolclassFormComponent } from './schoolclass-container/schoolclass-form/schoolclass-form.component';
import { SchoolclassListComponent } from './schoolclass-container/schoolclass-list/schoolclass-list.component';
import {HttpErrorInterceptor} from "./exception/http-error.interceptor";
import {AppRoutingModule} from "./app-routing/app-routing.module";

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
    HomeComponent,
    SchedulerComponent,
    SchoolclassContainerComponent,
    SchoolclassFormComponent,
    SchoolclassListComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ScheduleModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
   // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
