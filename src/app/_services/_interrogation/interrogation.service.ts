import { Injectable } from '@angular/core';
import {EntityService} from "../entity.service";
import {Interrogation} from "../../_model/interrogation";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

/**
 * Sous classe de EntityService
 * Permet d'effectuer des requêtes sur les interrogations
 */
@Injectable({
  providedIn: 'root'
})
export class InterrogationService extends EntityService<Interrogation>{

  API_URL = environment.apiUrl + "/Interrogation";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }

  /**
   * Permet de récuperer les interrogations lié à un Teacher
   * @param id
   *    L'id du teacher
   */
  getByIdTeacher(id:number) :Observable<Interrogation[]> {
    return this.httpClient.get<Interrogation[]>(this.API_URL+"/Teacher/"+id);
  }
}
