import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../_model/teacher";
import {EntityToDelete} from "../../_model/entity-to-delete";
import {Student} from "../../_model/student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() students:Student[]=[];
  @Output() studentToDelete:EventEmitter<EntityToDelete<Student>> = new EventEmitter<EntityToDelete<Student>>();
  @Output() studentChanged:EventEmitter<Student> = new EventEmitter<Student>();

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteStudent(student:Student, i: number) {
    this.studentToDelete.next({
      data:student,
      index:i
    });
  }


}
