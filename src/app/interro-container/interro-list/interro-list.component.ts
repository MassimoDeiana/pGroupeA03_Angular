import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../_model/teacher";
import {EntityToDelete} from "../../_model/entity-to-delete";
import {Interrogation} from "../../_model/interrogation";

@Component({
  selector: 'app-interro-list',
  templateUrl: './interro-list.component.html',
  styleUrls: ['./interro-list.component.css']
})
export class InterroListComponent implements OnInit {

  @Input() interrogations:Interrogation[]=[];
  @Output() interroToDelete:EventEmitter<EntityToDelete<Interrogation>> = new EventEmitter<EntityToDelete<Interrogation>>();

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteInterro(interro:Interrogation, i: number) {
    this.interroToDelete.next({
      data:interro,
      index:i
    });
  }

}
