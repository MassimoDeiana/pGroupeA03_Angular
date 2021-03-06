import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {EntityService} from "../entity.service";
import {Schoolclass} from "../../_model/schoolclass";

/**
 * Sous classe de EntityService
 * Permet d'effectuer des requêtes sur les Student
 */
@Injectable({
  providedIn: 'root'
})
export class SchoolclassService extends EntityService<Schoolclass>{

  API_URL = environment.apiUrl + "/SchoolClass";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }
}
