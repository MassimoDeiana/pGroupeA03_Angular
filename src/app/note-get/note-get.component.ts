import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NoteService} from "../_services/_note/note.service";
import {Note} from "../_model/note";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../_services/_interrogation/interrogation.service";
import {Interrogation} from "../_model/interrogation";
import {ResultService} from "../_services/_result/result.service";
import {Result} from "../_model/result";

@Component({
  selector: 'app-note-get',
  templateUrl: './note-get.component.html',
  styleUrls: ['./note-get.component.css']
})
export class NoteGetComponent implements OnInit {

  idStudent: number;
  sum:number=0;
  notes:Note[]=[];
  results:Result[]=[];


  form:FormGroup = this.fb.group({
    idStudent:['',Validators.required]
  })

  constructor(private fb:FormBuilder,private resultService:ResultService,private noteService:NoteService) { }

  ngOnInit(): void {
  }

  getResult(idStudent:number){
    this.resultService.getList(idStudent).subscribe(r=>this.results=r);
  }

  get(idStudent:number){
    this.noteService.getList(idStudent).subscribe(n=>this.notes=n);
  }

  public moy(){
    console.log(this.results);
    this.sum=0;
    this.results.forEach(result=>{
      console.log(result.result);
      console.log(result.total);
      this.sum+=((result.result)/(result.total))*100;
      console.log(this.sum);
    })
    this.sum/=this.results.length;

  }

}
