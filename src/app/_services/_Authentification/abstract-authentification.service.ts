import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Teacher} from "../../_model/teacher";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {IAuthentification} from "./iauthentification";


@Injectable({ providedIn: 'root' })
export abstract class AbstractAuthentificationService<T> implements IAuthentification<T>{

  abstract urlLogin: string;
  private currentUserSubject: BehaviorSubject<T>;
  public currentUser: Observable<T>;


  protected constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<T>(JSON.parse(<string>sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }



  public get currentUserValue(): T {
    return this.currentUserSubject.value;
  }

  //IL FAUT ABSOLUMENT ECRIRE MAIL POUR LE JSON
  login(mail: string, password: string) {
    console.log(mail);
    console.log(password);
    console.log(JSON.stringify({mail,password}));
    return this.http.post<any>(`${environment.apiUrl+this.urlLogin}`, {mail, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
  }
}
