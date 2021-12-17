import {Component, OnInit} from "@angular/core";
import {Teacher} from "../_model/teacher";
import {TeacherService} from "../_services/_teacher/teacher.service";
import {first} from "rxjs/operators";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";
import {AuthenticationAdminService} from "../_services/_Authentification/authentificationAdmin.service";


@Component(
  { templateUrl: 'home.component.html' ,
  styleUrls: ['./home.component.css']}
)
export class HomeComponent implements OnInit{
  loading = false;


  constructor(private authTeacherService:AuthenticationTeacherService,
              private authStudentService:AuthenticationStudentService,
              private authAdminService:AuthenticationAdminService) { }

  ngOnInit() {
    this.loading = true;
    this.authTeacherService.logout();
    this.authStudentService.logout();
    this.authAdminService.logout();
  }
}
