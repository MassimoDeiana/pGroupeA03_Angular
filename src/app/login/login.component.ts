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

  showAdmin:boolean=false;
  showStudent:boolean=false;
  showTeacher:boolean=false;


  constructor() {

  }

  ngOnInit() {

  }


  loginAdmin() {
    this.showAdmin=true;
    this.showStudent=false;
    this.showTeacher=false;
  }

  loginTeacher() {
    this.showAdmin=false;
    this.showStudent=false;
    this.showTeacher=true;
  }

  loginStudent() {
    this.showAdmin=false;
    this.showStudent=true;
    this.showTeacher=false;
  }
}
