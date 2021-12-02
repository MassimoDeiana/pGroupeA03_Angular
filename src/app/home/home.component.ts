import {Component, OnInit} from "@angular/core";
import {Teacher} from "../_model/teacher";
import {TeacherService} from "../_services/_teacher/teacher.service";
import {first} from "rxjs/operators";


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
  loading = false;
  teachers:Teacher[]=[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.loading = true;
    this.teacherService.getAll().pipe(first()).subscribe(teachers => {
      this.loading = false;
      this.teachers = teachers;
    });
  }
}
