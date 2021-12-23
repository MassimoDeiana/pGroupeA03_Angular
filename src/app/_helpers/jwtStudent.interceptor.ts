import {Injectable} from "@angular/core";
import {JwtInterceptor} from "./jwt.interceptor";
import {Teacher} from "../_model/teacher";
import {Student} from "../_model/student";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";


/**
 * Sous classe de JwtInterceptor
 * Injecte le service d'authentification du student afin de savoir si il est connecté
 */
@Injectable()
export class JwtStudentInterceptor extends JwtInterceptor<Student> {
  constructor(authenticationService: AuthenticationStudentService) {
    super(authenticationService);
  }
}
