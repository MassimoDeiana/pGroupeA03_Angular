import { Injectable } from '@angular/core';
import {EntityService} from "../entity.service";
import {Note} from "../../_model/note";
import {Result} from "../../_model/result";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultService extends EntityService<Result>{

  API_URL = environment.apiUrl + "/Result";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }

}
