import {Inject, Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {environment} from "../../environments/environment";
import {AbstractAuthentificationService} from "../_services/_Authentification/abstract-authentification.service";

/**
 * Classe abstraite qui Intercepte les requête http  pour ajouter le token au header si l'utilisateur est connecté
 */
@Injectable()
export abstract class JwtInterceptor<T extends {token?:string}> implements HttpInterceptor {
  protected constructor(@Inject(AbstractAuthentificationService) private authenticationService: AbstractAuthentificationService<T>) { }

  /**
   * Intercepte la requête afin d'y ajouter le token
   * @param request
   *    Le requête http
   * @param next
   *    Transforme la requête en stream d'evenement http
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const currentUser = this.authenticationService.currentUserValue;

    const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) { //Si il est connecté et que le lien est celui de l'api
      request = request.clone({
        setHeaders: { //On set le headers avec le token
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
