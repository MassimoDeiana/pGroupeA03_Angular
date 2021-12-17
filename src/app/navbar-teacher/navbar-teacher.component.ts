import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";

@Component({
  selector: 'app-navbar-teacher',
  templateUrl: './navbar-teacher.component.html',
  styleUrls: ['./navbar-teacher.component.css']
})
export class NavbarTeacherComponent implements OnInit {

  constructor(private router: Router,
              private authentificationService:AuthenticationTeacherService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authentificationService.logout();
    this.router.navigate(['/home']);
  }


}
