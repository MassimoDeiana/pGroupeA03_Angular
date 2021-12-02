import { Injectable } from '@angular/core';
import {Schoolclass} from "./schoolclass";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {EntityService} from "./_services/entity.service";

@Injectable({
  providedIn: 'root'
})
export class SchoolclassService extends EntityService<Schoolclass>{

  API_URL = environment.apiUrl + "/SchoolClass";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }
}
