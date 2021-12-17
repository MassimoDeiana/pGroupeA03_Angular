import {Inject, Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AbstractAuthentificationService} from "../_services/_Authentification/abstract-authentification.service";
import {ErrorInterceptor} from "./error.interceptor";
import {Teacher} from "../_model/teacher";


@Injectable()
export class ErrorTeacherInterceptor extends ErrorInterceptor<Teacher>{

  constructor(authenticationService: AuthenticationTeacherService) {
    super(authenticationService);
  }
}
