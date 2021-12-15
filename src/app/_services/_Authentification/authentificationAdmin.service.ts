import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Teacher} from "../../_model/teacher";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {AbstractAuthentificationService} from "./abstract-authentification.service";
import {Student} from "../../_model/student";
import {Admin} from "../../_model/admin";


@Injectable({ providedIn: 'root' })
export class AuthenticationAdminService extends AbstractAuthentificationService<Admin>{

  urlLogin = "/Admin/Authenticate";



  constructor(httpClient:HttpClient) {
    super(httpClient);
  }

}
