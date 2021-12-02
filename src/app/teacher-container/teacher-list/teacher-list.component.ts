import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Teacher} from "../../_model/teacher";
import {EntityToDelete} from "../../_model/entity-to-delete";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  @Input() teachers:Teacher[]=[];
  @Output() teacherToDelete:EventEmitter<EntityToDelete<Teacher>> = new EventEmitter<EntityToDelete<Teacher>>();
  @Output() teacherChanged:EventEmitter<Teacher> = new EventEmitter<Teacher>();

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteTeacher(teacher:Teacher, i: number) {
    this.teacherToDelete.next({
      data:teacher,
      index:i
    });
  }

}
