import {Injectable} from "@angular/core";
import {HttpInterceptor} from "@angular/common/http";
import {JwtInterceptor} from "./jwt.interceptor";
import {Teacher} from "../_model/teacher";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";

@Injectable()
export class JwtTeacherInterceptor extends JwtInterceptor<Teacher> {
  constructor(authenticationService: AuthenticationTeacherService) {
    super(authenticationService);
  }
}
