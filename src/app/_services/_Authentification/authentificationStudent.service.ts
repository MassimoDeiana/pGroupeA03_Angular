import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Teacher} from "../../_model/teacher";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {AbstractAuthentificationService} from "./abstract-authentification.service";
import {Student} from "../../_model/student";


/**
 * Service d'authentification de student
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationStudentService extends AbstractAuthentificationService<Student>{

  urlLogin = "/Student/Authenticate";



  constructor(httpClient:HttpClient) {
    super(httpClient);
  }

}
