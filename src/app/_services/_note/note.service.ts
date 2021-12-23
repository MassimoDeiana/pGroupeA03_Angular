import { Injectable } from '@angular/core';
import {EntityService} from "../entity.service";
import {Note} from "../../_model/note";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

/**
 * Sous classe de EntityService
 * Permet d'effectuer des requêtes sur les notes
 */
@Injectable({
  providedIn: 'root'
})
export class NoteService extends EntityService<Note>{

  API_URL = environment.apiUrl + "/Note";

  constructor(httpClient:HttpClient) {
    super(httpClient);
  }
}
