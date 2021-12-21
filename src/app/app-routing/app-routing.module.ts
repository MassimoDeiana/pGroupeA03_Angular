import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {LoginComponent} from "../login/login.component";
import {AuthGuard} from "../_helpers/auth.guard";
import {NgModule} from "@angular/core";
import {TeacherContainerComponent} from "../teacher-container";
import {SchedulerTeacherComponent} from "../scheduler-container-teacher/scheduler-teacher/scheduler-teacher.component";
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
import {LoginTeacherComponent} from "../login/login-teacher/login-teacher.component";
import {LoginStudentComponent} from "../login/login-student/login-student.component";
import {LoginAdminComponent} from "../login/login-admin/login-admin.component";
import {TeacherHomeComponent} from "../teacher-home/teacher-home.component";
import {StudentHomeComponent} from "../student-home/student-home.component";
import {AdminHomeComponent} from "../admin-home/admin-home.component";
import {SchedulerStudentComponent} from "../scheduler-container-student/scheduler-student/scheduler-student.component";
import {SchedulerContainerTeacherComponent} from "../scheduler-container-teacher/scheduler-container-teacher.component";
import {SchedulerContainerStudentComponent} from "../scheduler-container-student/scheduler-container-student.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teacherhome', component: TeacherHomeComponent, canActivate:[AuthTeacherGuard]},
  { path: 'studenthome', component: StudentHomeComponent, canActivate:[AuthStudentGuard]},
  { path: 'adminhome', component: AdminHomeComponent, canActivate:[AuthAdminGuard]},
  { path: 'teacher', component: TeacherContainerComponent, canActivate:[AuthAdminGuard]},
  { path: 'student', component: StudentContainerComponent, canActivate:[AuthAdminGuard]},
  { path: 'schoolclass', component: SchoolclassContainerComponent, canActivate:[AuthAdminGuard] },
  { path: 'lesson', component:LessonContainerComponent, canActivate:[AuthTeacherGuard]},
  { path: 'meeting', component: MeetingContainerComponent, canActivate:[AuthTeacherGuard]},
  { path: 'teacherscheduler', component:SchedulerContainerTeacherComponent, canActivate:[AuthTeacherGuard]},
  { path: 'note',component : NoteGetComponent, canActivate:[AuthStudentGuard]},
  { path: 'addnote', component: NoteContainerComponent, canActivate:[AuthTeacherGuard]},
  { path: 'addinterro', component: InterroContainerComponent, canActivate:[AuthTeacherGuard]},
  { path: 'addcourse', component: CoursesContainerComponent, canActivate:[AuthTeacherGuard]},
  { path: 'studentscheduler', component:SchedulerContainerStudentComponent, canActivate:[AuthStudentGuard]},
  { path: 'loginTeacher', component: LoginTeacherComponent},
  { path: 'loginStudent', component: LoginStudentComponent},
  { path: 'loginAdmin', component: LoginAdminComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
