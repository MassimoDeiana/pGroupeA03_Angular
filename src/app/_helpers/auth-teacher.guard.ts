import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationAdminService} from "../_services/_Authentification/authentificationAdmin.service";
import {AuthGuard} from "./auth.guard";
import {Admin} from "../_model/admin";
import {Teacher} from "../_model/teacher";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";


@Injectable({ providedIn: 'root' })
export class AuthTeacherGuard extends AuthGuard<Teacher>{
  constructor(router:Router,authenticationService: AuthenticationTeacherService) {
    super(router,authenticationService);
  }
}
