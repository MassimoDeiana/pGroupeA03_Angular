import {Component, OnInit} from "@angular/core";
import {Teacher} from "../_model/teacher";
import {TeacherService} from "../_services/_teacher/teacher.service";
import {first} from "rxjs/operators";


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
  loading = false;


  constructor() { }

  ngOnInit() {
    this.loading = true;
  }
}
