import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {LoginComponent} from "../login/login.component";
import {AuthGuard} from "../_helpers/auth.guard";
import {NgModule} from "@angular/core";
import {TeacherContainerComponent} from "../teacher-container";
import {SchedulerComponent} from "../scheduler/scheduler.component";
import {SchoolclassContainerComponent} from "../schoolclass-container/schoolclass-container.component";
import {MeetingContainerComponent} from "../meeting-container/meeting-container.component";
import {NoteContainerComponent} from "../note-container/note-container.component";
import {NoteGetComponent} from "../note-get/note-get.component";
import {InterroFormComponent} from "../interro-container/interro-form/interro-form.component";
import {InterroContainerComponent} from "../interro-container/interro-container.component";

import  {StudentContainerComponent} from "../student-container/student-container.component";
import {AuthAdminGuard} from "../_helpers/auth-admin.guard";
import {AuthStudentGuard} from "../_helpers/auth-student.guard";
import {AuthTeacherGuard} from "../_helpers/auth-teacher.guard";
import {CoursesContainerComponent} from "../courses-container/courses-container.component";
import {LessonContainerComponent} from "../lesson-container/lesson-container.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teacher', component: TeacherContainerComponent, canActivate:[AuthGuard]},
  { path: 'student', component: StudentContainerComponent, canActivate:[AuthGuard]},
  { path: 'schoolclass', component: SchoolclassContainerComponent, canActivate:[AuthGuard] },
  { path: 'lesson', component:LessonContainerComponent, canActivate:[AuthGuard]},
  { path: 'meeting', component: MeetingContainerComponent, canActivate:[AuthGuard]},
  { path: 'scheduler', component:SchedulerComponent, canActivate:[AuthGuard]},
  { path: 'note',component : NoteGetComponent, canActivate:[AuthGuard]},
  { path: 'addnote', component: NoteContainerComponent, canActivate:[AuthGuard]},
  { path: 'addinterro', component: InterroContainerComponent, canActivate:[AuthGuard]},
  { path: 'addcourse', component: CoursesContainerComponent, canActivate:[AuthGuard]},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
