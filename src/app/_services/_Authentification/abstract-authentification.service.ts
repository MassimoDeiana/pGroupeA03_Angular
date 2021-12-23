import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Teacher} from "../../_model/teacher";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {IAuthentification} from "./iauthentification";

/**
 * Service d'authentification abstrait
 */
@Injectable({ providedIn: 'root' })
export abstract class AbstractAuthentificationService<T> implements IAuthentification<T>{

  abstract urlLogin: string; //URL du authenticate
  private currentUserSubject: BehaviorSubject<T>;
  public currentUser: Observable<T>;


  protected constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<T>(JSON.parse(<string>sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  /**
   * Permet de récupérer l'utilisateur connecté
   */
  public get currentUserValue(): T {
    return this.currentUserSubject.value;
  }

  /**
   * Permet de connecter l'utilisateur
   * @param mail
   *    le mail de l'utilisateur
   * @param password
   *    le mot de passe de l'utilisateur
   */
  login(mail: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl+this.urlLogin}`, {mail, password})
      .pipe(map(user => {
        // On stock les infos de l'utilisateur (son id et le token) dans le session storage afin qu'il reste connecter entre les différentes pages
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  /**
   * Déconnecte l'utilisateur
   */
  logout() {
    sessionStorage.removeItem('currentUser'); // On efface les infos dans sessionStorage
    this.currentUserSubject.next(null!);
  }
}
