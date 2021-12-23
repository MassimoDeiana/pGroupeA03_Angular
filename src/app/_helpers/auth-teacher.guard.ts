import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationAdminService} from "../_services/_Authentification/authentificationAdmin.service";
import {AuthGuard} from "./auth.guard";
import {Admin} from "../_model/admin";
import {Teacher} from "../_model/teacher";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";

/**
 * AuthTeacherGuard : sous classe de AuthGaurd
 * Permet de savoir si les utilisateurs de type Teacher peuvent accéder aux routes ou non
 * Injecte le service concret AuthentifcationTeacher afin de savoir si le teacher est connecté ou non
 */
@Injectable({ providedIn: 'root' })
export class AuthTeacherGuard extends AuthGuard<Teacher>{
  constructor(router:Router,authenticationService: AuthenticationTeacherService) {
    super(router,authenticationService);
  }
}
