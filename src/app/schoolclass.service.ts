import { Injectable } from '@angular/core';
import {EntityService} from "./entity.service";
import {Schoolclass} from "./schoolclass";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchoolclassService extends EntityService<Schoolclass>{

  API_URL = environment.apiUrl + "/SchoolClass";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }
}
