import {Injectable} from "@angular/core";
import {ErrorInterceptor} from "./error.interceptor";
import {Teacher} from "../_model/teacher";
import {Student} from "../_model/student";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";

@Injectable()
export  class ErrorStudentInterceptor extends ErrorInterceptor<Student>{

  constructor(authenticationService: AuthenticationStudentService) {
    super(authenticationService);
  }
}
