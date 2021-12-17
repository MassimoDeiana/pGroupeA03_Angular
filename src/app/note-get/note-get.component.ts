import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NoteService} from "../_services/_note/note.service";
import {Note} from "../_model/note";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../_services/_interrogation/interrogation.service";
import {Interrogation} from "../_model/interrogation";
import {ResultService} from "../_services/_result/result.service";
import {Result} from "../_model/result";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";
import {LessonService} from "../_services/_lesson/lesson.service";
import {Lesson} from "../_model/lesson";

@Component({
  selector: 'app-note-get',
  templateUrl: './note-get.component.html',
  styleUrls: ['./note-get.component.css']
})
export class NoteGetComponent implements OnInit {

  sum:number=0;

  results:Result[]=[];
  lessons:Lesson[]=[];


  form:FormGroup = this.fb.group({
    idLesson:['',Validators.required]
  })

  constructor(private fb:FormBuilder,
              private resultService:ResultService,
              private lessonService:LessonService,
              private authService:AuthenticationStudentService) { }

  ngOnInit(): void {
    this.getLessons()
  }

  getResult(){
    this.results=[];
      this.resultService.getList(this.authService.currentUserValue.idStudent!).subscribe(r=>{
        r.forEach(result=>{
          if(result.idLesson==this.form.value.idLesson)
            this.results.push(result);
        })
      });
  console.log("dans result " + this.results)
    this.moy()
  }


  getLessons(){
    this.lessonService.getAll().subscribe(l=>this.lessons=l);
  }



  public moy(){
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

