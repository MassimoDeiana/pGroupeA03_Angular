import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationAdminService} from "../_services/_Authentification/authentificationAdmin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  @Input() pageTitle:string="";

  constructor(private authentificationService:AuthenticationAdminService,
              private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authentificationService.logout();
    this.router.navigate(['/home']);
  }
}
