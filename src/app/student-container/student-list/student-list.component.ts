import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../_model/teacher";
import {EntityToDelete} from "../../_model/entity-to-delete";
import {Student} from "../../_model/student";
import {Schoolclass} from "../../_model/schoolclass";

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

  /**
   * Emet un EntityToDelete<Student>, Grace à l'event binding, le Student sera supprimé par StudentContainer
   * @param student le student à delete
   * @param i l'index du student
   */
  emitDeleteStudent(student:Student, i: number) {
    this.studentToDelete.next({
      data:student,
      index:i
    });
  }


}
