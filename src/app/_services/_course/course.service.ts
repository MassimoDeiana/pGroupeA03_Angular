import { Injectable } from '@angular/core';
import {EntityService} from "../entity.service";
import {Course} from "../../_model/course";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService extends EntityService<Course>{
  API_URL = environment.apiUrl + '/Course';

  constructor(httpClient:HttpClient) {
    super(httpClient)
  }
}
