import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.css']
})
export class NavbarStudentComponent implements OnInit {

  constructor(private router: Router,
              private authentificationService:AuthenticationStudentService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authentificationService.logout();
    this.router.navigate(['/home']);
  }

}
