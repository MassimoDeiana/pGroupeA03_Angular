import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Teacher} from "../teacher";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Teacher>;
  public currentUser: Observable<Teacher>;
  

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Teacher>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Teacher {
    return this.currentUserSubject.value;
  }

  //IL FAUT ABSOLUMENT ECRIRE MAIL POUR LE JSON
  login(mail: string, password: string) {
    console.log(mail);
    console.log(password);
    console.log(JSON.stringify({mail,password}));
    return this.http.post<any>(`${environment.apiUrl}/Teacher/authenticate`, {mail, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
  }
}
