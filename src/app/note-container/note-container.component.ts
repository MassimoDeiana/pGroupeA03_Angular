import { Component, OnInit } from '@angular/core';
import {Note} from "../_model/note";
import {NoteService} from "../_services/_note/note.service";
import {EntityToDelete} from "../_model/entity-to-delete";
import {Student} from "../_model/student";

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.css']
})
export class NoteContainerComponent implements OnInit {

  notes:Note[]=[];

  pageTitle:string='Notes'

  constructor(private noteService:NoteService) {
  }

  ngOnInit(): void {
    this.getAllNote();
  }

  /**
   * Permet de créer une note
   * On appelle la méthode create du service permettant de faire une requête http (voir entity service)
   * On ajoute la note au flux de donnée via le subscribe
   * @param note la note à créer
   */
  send(note:Note){
    this.noteService.create(note)
      .subscribe(note=>this.notes.push(note));
  }

  /**
   * Permet de supprimer une note
   * @param entityToDelete la note à supprimer
   */
  delete(entityToDelete:EntityToDelete<Note>){
    const note:Note = this.notes[entityToDelete.index];

    this.noteService.delete( note.idNote||-1)
      .subscribe(()=>{
        this.notes.splice(entityToDelete.index,1)
      });
  }

  /**
   * Permet de récupérer toutes les notes
   */
  getAllNote(){
    this.noteService
      .getAll()
      .subscribe(t=>this.notes=t);
  }

}
