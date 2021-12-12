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

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'teacher', component: TeacherContainerComponent, canActivate:[AuthGuard]},
  { path: 'meeting', component: MeetingContainerComponent},
  { path: 'scheduler', component:SchedulerComponent},
  { path: 'schoolclass', component: SchoolclassContainerComponent },
  { path: 'note',component : NoteGetComponent},
  { path: 'addnote', component: NoteContainerComponent, canActivate:[AuthGuard]},
  { path: 'addinterro', component: InterroContainerComponent, canActivate:[AuthGuard]},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
