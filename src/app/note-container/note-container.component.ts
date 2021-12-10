import { Component, OnInit } from '@angular/core';
import {Note} from "../_model/note";
import {NoteService} from "../_services/_note/note.service";
import {EntityToDelete} from "../_model/entity-to-delete";

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.css']
})
export class NoteContainerComponent implements OnInit {


  notes:Note[]=[];

  constructor(private noteService:NoteService) {
  }

  ngOnInit(): void {
    this.getAll();
  }


  send(note:Note){
    this.noteService.create(note)
      .subscribe(note=>this.notes.push(note));
  }

  delete(entityToDelete:EntityToDelete<Note>){
    const note:Note = this.notes[entityToDelete.index];

    this.noteService.delete( note.idNote||-1)
      .subscribe(()=>{
        this.notes.splice(entityToDelete.index,1)
      });
  }

  getAll(){
    this.noteService
      .getAll()
      .subscribe(t=>this.notes=t);
  }

/*
  update(e:Note){
    this.noteService.update(e.idNote || -1,e)
      .subscribe();
  }
*/
}
