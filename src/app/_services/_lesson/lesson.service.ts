import { Injectable } from '@angular/core';
import {EntityService} from "../entity.service";
import {Teacher} from "../../_model/teacher";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../../_model/lesson";

/**
 * Sous classe de EntityService
 * Permet d'effectuer des requêtes sur les Lesson
 */
@Injectable({
  providedIn: 'root'
})
export class LessonService extends EntityService<Lesson> {

  API_URL = environment.apiUrl + "/Lesson";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }

}
