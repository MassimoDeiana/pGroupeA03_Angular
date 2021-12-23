import { Component, OnInit } from '@angular/core';
import {Interrogation} from "../../_model/interrogation";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  interros: Interrogation[]=[];

  constructor(private interroService:InterrogationService) { }

  ngOnInit(): void {
    this.getAllInterro();
  }

  /**
   * Permet de récupérer toutes les interros
   */
  getAllInterro(){
    this.interroService
      .getAll()
      .subscribe(i=>this.interros=i);
  }

}
