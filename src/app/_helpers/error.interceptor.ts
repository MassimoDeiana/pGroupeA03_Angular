import {Inject, Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AbstractAuthentificationService} from "../_services/_Authentification/abstract-authentification.service";


@Injectable()
export abstract class ErrorInterceptor<T> implements HttpInterceptor {
  protected constructor(@Inject(AbstractAuthentificationService) private authenticationService: AbstractAuthentificationService<T>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        //this.authenticationService.logout();
        //location.reload(true);
        alert("erreur");
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
