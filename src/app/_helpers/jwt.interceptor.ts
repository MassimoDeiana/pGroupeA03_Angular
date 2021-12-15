import {Inject, Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {environment} from "../../environments/environment";
import {AbstractAuthentificationService} from "../_services/_Authentification/abstract-authentification.service";


@Injectable()
export abstract class JwtInterceptor<T extends {token?:string}> implements HttpInterceptor {
  protected constructor(@Inject(AbstractAuthentificationService) private authenticationService: AbstractAuthentificationService<T>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const currentUser = this.authenticationService.currentUserValue;

    const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
