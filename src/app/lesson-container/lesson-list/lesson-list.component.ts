import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../_model/teacher";
import {EntityToDelete} from "../../_model/entity-to-delete";
import {Lesson} from "../../_model/lesson";

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  @Input() lessons:Lesson[]=[];
  @Output() lessonToDelete:EventEmitter<EntityToDelete<Lesson>> = new EventEmitter<EntityToDelete<Lesson>>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emet un EntityToDelete<Lesson>, Grace à l'event binding, la lesson sera supprimé par LessonContainer
   * @param lesson la lesson à supprimer
   * @param i l'index de la lesson
   */
  emitDeleteTeacher(lesson:Lesson, i: number) {
    this.lessonToDelete.next({
      data:lesson,
      index:i
    });
  }
}
