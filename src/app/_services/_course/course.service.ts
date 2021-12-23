import { Injectable } from '@angular/core';
import {EntityService} from "../entity.service";
import {Course} from "../../_model/course";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

/**
 * Sous classe de EntityService
 * Permet d'effectuer des requêtes sur les Course
 */
@Injectable({
  providedIn: 'root'
})
export class CourseService extends EntityService<Course>{
  API_URL = environment.apiUrl + '/Course';

  constructor(httpClient:HttpClient) {
    super(httpClient)
  }

  /**
   * Permet de récupérer les Course lié à un Teacher
   * @param id
   *    L'id du teacher
   */
  getByIdTeacher(id:number) :Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API_URL+"/Teacher/"+id);
  }
}
