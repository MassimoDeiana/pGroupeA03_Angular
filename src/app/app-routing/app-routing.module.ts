import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {LoginComponent} from "../login/login.component";
import {AuthGuard} from "../_helpers/auth.guard";
import {NgModule} from "@angular/core";
import {TeacherContainerComponent} from "../teacher-container";
import {SchedulerComponent} from "../scheduler/scheduler.component";
import {SchoolclassContainerComponent} from "../schoolclass-container/schoolclass-container.component";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'teacher', component: TeacherContainerComponent, canActivate:[AuthGuard]},
  { path: 'scheduler', component:SchedulerComponent},
  { path: 'schoolclass', component: SchoolclassContainerComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
