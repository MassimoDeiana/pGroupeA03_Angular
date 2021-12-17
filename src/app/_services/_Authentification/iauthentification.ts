import {BehaviorSubject, Observable} from "rxjs";

export interface IAuthentification<T> {


  get currentUserValue(): T;

  login(mail: string, password: string):void;

  logout():void;

}
