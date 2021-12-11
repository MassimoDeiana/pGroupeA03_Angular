import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NoteService} from "../_services/_note/note.service";
import {Note} from "../_model/note";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-note-get',
  templateUrl: './note-get.component.html',
  styleUrls: ['./note-get.component.css']
})
export class NoteGetComponent implements OnInit,OnChanges {


  idStudent: number;
  notes:Note[]=[];

  form:FormGroup = this.fb.group({
    idStudent:['',Validators.required]
  })

  constructor(private noteService:NoteService,private fb:FormBuilder) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.get(this.idStudent);
  }

  get(idStudent:number){
    this.noteService.get(idStudent).subscribe(n=>this.notes=n);
  }

}
