import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
//import {T} from "./teacher";

export interface Ientityservice<T> {
  API_URL:string;

  getAll():Observable<T[]>;

  create(t:T):Observable<T>;

  delete(id:number):Observable<any>;

  update(id:number,t:T):Observable<any>;
}
