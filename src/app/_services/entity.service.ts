import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ientityservice} from "./ientityservice";

@Injectable({
  providedIn: 'root'
})

//Faire une variable d'instance et passer par le constructeur
export abstract class EntityService<T> implements Ientityservice<T>{
  abstract API_URL: string;

  protected constructor(protected httpClient:HttpClient) { }

  getAll():Observable<T[]>{
    return this.httpClient.get<T[]>(this.API_URL);
  }

  getList(id:number):Observable<T[]>{
    return this.httpClient.get<T[]>(this.API_URL+"/"+id);
  }

  get(id:number):Observable<T>{
    return this.httpClient.get<T>(this.API_URL+"/"+id);
  }

  create(t:T):Observable<T>{
    return this.httpClient.post<T>(this.API_URL,t);
  }

  delete(id:number):Observable<any>{
    return this.httpClient.delete(this.API_URL + "/" + id);
  }

  update(id:number,t:T):Observable<any>{
    return this.httpClient.put(this.API_URL + "/" + id, t);
  }

}
