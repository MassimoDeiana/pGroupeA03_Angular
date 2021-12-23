import {Inject, Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AbstractAuthentificationService} from "../_services/_Authentification/abstract-authentification.service";

/**
 * AuthGuard: Classe abstraite permettant d'empecher les utilisateurs non authentifié d'accéder à certaines routes
 * Cela est possible grace à l'implémentation de l'interface canActivate.
 * Il faut injecter un service d'authentification afin de vérifier si l'utilisateur est connecté.
 */
@Injectable({ providedIn: 'root' })
export abstract class AuthGuard<T> implements CanActivate {
  /**
   * On utilise l'annotation @Inject() pour spécifier que le service doit être injecter
   * @param router
   * @param authenticationService
   */
  protected constructor(
    private router: Router,
    @Inject(AbstractAuthentificationService) private authenticationService: AbstractAuthentificationService<T>
  ) {}

  /**
   * Permet de savoir si l'utilisateur peut accéder à la route ou non.
   * Si il n'est pas connecté, on le redirige vers la page d'accueil
   * @param route
   *      la route à laquelle on souhatie accéder
   * @param state
   *    L'état de la route
   * @Return true si l'utilisateur est connecter, false sinon
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue; //On récupère l'utilisateur
    if (currentUser) { //Si il n'est pas undefined
      return true;
    }

    // Pas connecté donc on le redirige vers la page d'accueil
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
