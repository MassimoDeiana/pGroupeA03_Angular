import {Injectable} from "@angular/core";
import {JwtInterceptor} from "./jwt.interceptor";
import {Teacher} from "../_model/teacher";
import {Admin} from "../_model/admin";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationAdminService} from "../_services/_Authentification/authentificationAdmin.service";

/**
 * Sous classe de JwtInterceptor
 * Injecte le service d'authentification de l'admin afin de savoir si il est connecté
 */
@Injectable()
export class JwtAdminInterceptor extends JwtInterceptor<Admin> {
  constructor(authenticationService: AuthenticationAdminService) {
    super(authenticationService);
  }
}
