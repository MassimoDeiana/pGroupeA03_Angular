import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {first} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {AuthenticationAdminService} from "../_services/_Authentification/authentificationAdmin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }


}
