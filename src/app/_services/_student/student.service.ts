import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EntityService} from "../entity.service";
import {Student} from "../../_model/student";

/**
 * Sous classe de EntityService
 * Permet d'effectuer des requêtes sur les Student
 */
@Injectable({
  providedIn: 'root'
})
export class StudentService extends EntityService<Student>{

  API_URL = environment.apiUrl + "/Student";

  constructor(httpClient:HttpClient) {
    super(httpClient)
  }

  /**
   * Permet de récupérer les student lié à une classe
   * @param id
   *    L'id de la classe
   */
  getByClass(id:number):Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.API_URL+"/class"+id);
  }

}
