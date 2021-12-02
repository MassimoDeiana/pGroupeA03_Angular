import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schoolclass} from "../../schoolclass";
import {EntityToDelete} from "../../_model/entity-to-delete";

@Component({
  selector: 'app-schoolclass-list',
  templateUrl: './schoolclass-list.component.html',
  styleUrls: ['./schoolclass-list.component.css']
})
export class SchoolclassListComponent implements OnInit {

  @Input() schoolclasses: Schoolclass[] = [];
  @Output() schoolclassToDelete:EventEmitter<EntityToDelete<Schoolclass>> = new EventEmitter<EntityToDelete<Schoolclass>>();
  @Output() schoolclassChanged:EventEmitter<Schoolclass> = new EventEmitter<Schoolclass>();

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteSchoolclass(schoolclass: Schoolclass, i: number) {
    this.schoolclassToDelete.next({
      data: schoolclass,
      index: i
    });
  }
}
