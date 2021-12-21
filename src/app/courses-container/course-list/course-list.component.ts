import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../_model/teacher";
import {EntityToDelete} from "../../_model/entity-to-delete";
import {Course} from "../../_model/course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses:Course[]=[];
  @Output() courseToDelete:EventEmitter<EntityToDelete<Course>> = new EventEmitter<EntityToDelete<Course>>();

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteCourse(course:Course, i: number) {
    this.courseToDelete.next({
      data:course,
      index:i
    });
  }

}
