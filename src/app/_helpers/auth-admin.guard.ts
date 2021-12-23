import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationAdminService} from "../_services/_Authentification/authentificationAdmin.service";
import {AuthGuard} from "./auth.guard";
import {Admin} from "../_model/admin";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";

/**
 * AuthAdminGuard : sous classe de AuthGaurd
 * Permet de savoir si les utilisateurs de type Admin peuvent accéder aux routes ou non
 * Injecte le service concret AuthentifcationAdmin afin de savoir si l'admin est connecté ou non
 */
@Injectable({ providedIn: 'root' })
export class AuthAdminGuard extends AuthGuard<Admin>{
  constructor(router:Router,authenticationService: AuthenticationAdminService) {
    super(router,authenticationService);
  }


}
