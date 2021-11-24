import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Teacher} from "./teacher";
import { Observable } from 'rxjs';
import {EntityService} from "./entity.service";

@Injectable({
  providedIn:'root'
})

export class TeacherService extends EntityService<Teacher> {

  API_URL = environment.apiUrl + "/Teacher";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }

}
