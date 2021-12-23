import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";
import {AuthGuard} from "./auth.guard";
import {Student} from "../_model/student";

/**
 * AuthStudentGuard : sous classe de AuthGaurd
 * Permet de savoir si les utilisateurs de type Student peuvent accéder aux routes ou non
 * Injecte le service concret AuthentifcationStudent afin de savoir si le student est connecté ou non
 */
@Injectable({ providedIn: 'root' })
export class AuthStudentGuard extends AuthGuard<Student>{
  constructor(router:Router,authenticationService: AuthenticationStudentService) {
    super(router,authenticationService);
  }
}
