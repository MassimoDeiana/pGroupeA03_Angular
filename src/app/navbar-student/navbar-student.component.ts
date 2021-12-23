import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.css']
})
export class NavbarStudentComponent implements OnInit {

  @Input() pageTitle:string="";
  constructor(private router: Router,
              private authentificationService:AuthenticationStudentService) { }

  ngOnInit(): void {
  }

  /**
   * Déconnecte le student et le renvoie à la page d'accueil
   */
  logout() {
    this.authentificationService.logout();
    this.router.navigate(['/home']);
  }

}
