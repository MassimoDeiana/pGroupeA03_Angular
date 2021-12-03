import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {EntityService} from "../entity.service";
import {Meeting} from "../../_model/meeting";

@Injectable({
  providedIn: 'root'
})
export class MeetingService extends EntityService<Meeting>{

  API_URL = environment.apiUrl + "/Meeting";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }
}
