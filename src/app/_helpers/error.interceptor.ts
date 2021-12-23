import {Inject, Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AbstractAuthentificationService} from "../_services/_Authentification/abstract-authentification.service";

/**
 * ErrorInterceptor classe abstraite qui implémente HttpInterceptor
 * Cette classe intercepte les réponse HTTP de l'API
 * Les sous classes conrètes devront injecter le service d'authentification concret selon leur type
 */
@Injectable()
export abstract class ErrorInterceptor<T> implements HttpInterceptor {
  protected constructor(@Inject(AbstractAuthentificationService) private authenticationService: AbstractAuthentificationService<T>) { }

  /**
   * Intercepte la réponse de l'API, si le code d'erreur est "401 Unauthorized" l'utilisateur est automatiquement déconnecté
   * @param request
   *    Réponse HTTP reçu
   * @param next
   *    Transforme la requête en stream d'HttpEvent
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        location.reload(true);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
