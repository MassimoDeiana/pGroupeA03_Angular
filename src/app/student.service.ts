import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private static readonly API_URL:string = environment.apiUrl + "/Student";

  constructor(private httpClient:HttpClient) { }

}
