import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Teacher} from "../../_model/teacher";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {AbstractAuthentificationService} from "./abstract-authentification.service";


@Injectable({ providedIn: 'root' })
export class AuthenticationTeacherService extends AbstractAuthentificationService<Teacher>{

  urlLogin = "/Teacher/Authenticate";



  constructor(httpClient:HttpClient) {
    super(httpClient);
  }

}
