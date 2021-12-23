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

  @Input() interrogations:Interrogation[]=[]; //Liste des interros (Data binding dans InterroContainer)
  @Output() interroToDelete:EventEmitter<EntityToDelete<Interrogation>> = new EventEmitter<EntityToDelete<Interrogation>>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emet un EntityToDelete<Interro>, Grace à l'event binding, l'interro sera supprimé par InterroContainer
   * @param interro L'interro a supprimer
   * @param i L'index de l'interro
   */
  emitDeleteInterro(interro:Interrogation, i: number) {
    this.interroToDelete.next({
      data:interro,
      index:i
    });
  }

}
