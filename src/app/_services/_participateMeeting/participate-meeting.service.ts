import { Injectable } from '@angular/core';
import {EntityService} from "../entity.service";
import {ParticipateMeeting} from "../../_model/participateMeeting";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Meeting} from "../../_model/meeting";

@Injectable({
  providedIn: 'root'
})
export class ParticipateMeetingService extends EntityService<ParticipateMeeting>{

  API_URL = environment.apiUrl + "/ParticipateMeeting";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }
}
