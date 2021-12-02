import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./_services/authentification.service";
import {Teacher} from "./_model/teacher";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pGroupeA03';
  currentUser!: Teacher;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
