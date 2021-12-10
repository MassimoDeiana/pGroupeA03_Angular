import { Injectable } from '@angular/core';
import {EntityService} from "../entity.service";
import {Interrogation} from "../../_model/interrogation";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InterrogationService extends EntityService<Interrogation>{

  API_URL = environment.apiUrl + "/Interrogation";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }
}
