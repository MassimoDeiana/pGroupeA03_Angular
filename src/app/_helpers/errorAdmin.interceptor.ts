import {Injectable} from "@angular/core";
import {ErrorInterceptor} from "./error.interceptor";
import {Teacher} from "../_model/teacher";
import {Admin} from "../_model/admin";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationAdminService} from "../_services/_Authentification/authentificationAdmin.service";

@Injectable()
export  class ErrorAdminInterceptor extends ErrorInterceptor<Admin>{

  constructor(authenticationService: AuthenticationAdminService) {
    super(authenticationService);
  }
}
