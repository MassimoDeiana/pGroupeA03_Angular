import {Injectable} from "@angular/core";
import {ErrorInterceptor} from "./error.interceptor";
import {Teacher} from "../_model/teacher";
import {Student} from "../_model/student";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";

/**
 * Sous classe concrète de ErrorInterceptor pour le type Student
 * Injecte le service concret AuthentifcationStudent afin de déconnecter le student en cas de réponse 401
 */
@Injectable()
export  class ErrorStudentInterceptor extends ErrorInterceptor<Student>{

  constructor(authenticationService: AuthenticationStudentService) {
    super(authenticationService);
  }
}
