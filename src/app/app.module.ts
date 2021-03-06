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
import {AuthGuard, ErrorInterceptor, JwtInterceptor} from "./_helpers";
import {ScheduleModule,RecurrenceEditorModule,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService} from "@syncfusion/ej2-angular-schedule";
import { SchedulerTeacherComponent } from './scheduler-container-teacher/scheduler-teacher/scheduler-teacher.component';
import { SchoolclassContainerComponent } from './schoolclass-container/schoolclass-container.component';
import { SchoolclassFormComponent } from './schoolclass-container/schoolclass-form/schoolclass-form.component';
import { SchoolclassListComponent } from './schoolclass-container/schoolclass-list/schoolclass-list.component';
import { MeetingContainerComponent } from './meeting-container/meeting-container.component';
import {HttpErrorInterceptor} from "./exception/http-error.interceptor";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { NoteContainerComponent } from './note-container/note-container.component';
import { NoteFormComponent } from './note-container/note-form/note-form.component';
import { NoteListComponent } from './note-container/note-list/note-list.component';
import { NoteGetComponent } from './note-get/note-get.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { InterroContainerComponent } from './interro-container/interro-container.component';
import { InterroFormComponent } from './interro-container/interro-form/interro-form.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { MeetingFormComponent } from './meeting-container/meeting-form/meeting-form.component';
import {MatTableModule} from "@angular/material/table";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { MeetingListComponent } from './meeting-container/meeting-list/meeting-list.component';
import { LoginTeacherComponent } from './login/login-teacher/login-teacher.component';
import { LoginStudentComponent } from './login/login-student/login-student.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import {JwtTeacherInterceptor} from "./_helpers/jwtTeacher.interceptor";
import {ErrorTeacherInterceptor} from "./_helpers/errorTeacher.interceptor";
import {JwtStudentInterceptor} from "./_helpers/jwtStudent.interceptor";
import {ErrorStudentInterceptor} from "./_helpers/errorStudent.interceptor";
import {JwtAdminInterceptor} from "./_helpers/jwtAdmin.interceptor";
import {ErrorAdminInterceptor} from "./_helpers/errorAdmin.interceptor";
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { CourseFormComponent } from './courses-container/course-form/course-form.component';
import { LessonContainerComponent } from './lesson-container/lesson-container.component';
import { LessonFormComponent } from './lesson-container/lesson-form/lesson-form.component';
import { LessonListComponent } from './lesson-container/lesson-list/lesson-list.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { InterroListComponent } from './interro-container/interro-list/interro-list.component';
import { CourseListComponent } from './courses-container/course-list/course-list.component';
import { SchedulerStudentComponent } from './scheduler-container-student/scheduler-student/scheduler-student.component';
import { SchedulerContainerTeacherComponent } from './scheduler-container-teacher/scheduler-container-teacher.component';
import { SchedulerContainerStudentComponent } from './scheduler-container-student/scheduler-container-student.component';


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
    SchedulerTeacherComponent,
    SchoolclassContainerComponent,
    SchoolclassFormComponent,
    SchoolclassListComponent,
    MeetingContainerComponent,
    NoteContainerComponent,
    NoteFormComponent,
    NoteListComponent,
    NoteGetComponent,
    InterroContainerComponent,
    InterroFormComponent,
    NavbarTeacherComponent,
    NavbarStudentComponent,
    NavbarAdminComponent,
    MeetingFormComponent,
    MeetingListComponent,
    LoginTeacherComponent,
    LoginStudentComponent,
    LoginAdminComponent,
    CoursesContainerComponent,
    CourseFormComponent,
    LessonContainerComponent,
    LessonFormComponent,
    LessonListComponent,
    TeacherHomeComponent,
    StudentHomeComponent,
    AdminHomeComponent,
    InterroListComponent,
    CourseListComponent,
    SchedulerStudentComponent,
    SchedulerContainerTeacherComponent,
    SchedulerContainerStudentComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ScheduleModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    NgMultiSelectDropDownModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtTeacherInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorTeacherInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtStudentInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorStudentInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtAdminInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorAdminInterceptor, multi: true },

   // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
