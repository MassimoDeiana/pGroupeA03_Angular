import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ientityservice} from "./ientityservice";

@Injectable({
  providedIn: 'root'
})

/**
 * Service permettant d'effectuer des requêtes http sur des entité
 * Ces requêtes sont celles d'un crud
 */
export abstract class EntityService<T> implements Ientityservice<T>{

  //L'url de l'api concernant l'entité, les sous classes devront lui donnée une valeur
  abstract API_URL: string;

  protected constructor(protected httpClient:HttpClient) { }

  /**
   * Permet d'effectuer une requête GetAll()
   * @return Observable<T[]> un tableau d'Observable
   */
  getAll():Observable<T[]>{
    console.log(this.API_URL)
    return this.httpClient.get<T[]>(this.API_URL);
  }

  /**
   * Permet d'effectuer une requête getById et attend une liste d'élément en réponse
   * @param id
   *    L'id des éléments que l'on veut récupérer
   *
   * @return Observable<T[]> un tableau d'Observable
   */
  getList(id:number):Observable<T[]>{
    return this.httpClient.get<T[]>(this.API_URL+"/"+id);
  }

  /**
   * Permet d'effectuer une requête getById et attend un élément en réponse
   * @param id
   *    L'id de l'élément que l'on veut récupérer
   *
   * @return Observable<T> un observable
   */
  get(id:number):Observable<T>{
    return this.httpClient.get<T>(this.API_URL+"/"+id);
  }

  /**
   * Permet d'effectuer une requête Create
   * @param t
   *    L'élément à créer
   *
   * @return Observable<T[]> Un Observable<T>
   */
  create(t:T):Observable<T>{
    return this.httpClient.post<T>(this.API_URL,t);
  }

  /**
   * Permet d'effectuer une requête Delete
   * @param id
   *    L'id de l'élément que l'on veut supprimer
   *
   * @return Observable<any> Un Observable<any>
   */
  delete(id:number):Observable<any>{
    return this.httpClient.delete(this.API_URL + "/" + id);
  }

  /**
   * Permet d'effectuer une requête Update
   * @param id
   *    L'id de l'élément à modifier
   * @param t
   *    Le nouvel objet
   *
   * @return Observable<any> Un Observable<any>
   */
  update(id:number,t:T):Observable<any>{
    return this.httpClient.put(this.API_URL + "/" + id, t);
  }

}
