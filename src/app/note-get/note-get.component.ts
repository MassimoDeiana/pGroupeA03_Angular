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
  interros:Interrogation[]=[];

  alertNotes:boolean=false;

  form:FormGroup = this.fb.group({
    idLesson:['',Validators.required]
  })
  pageTitle: string="Notes";

  constructor(private fb:FormBuilder,
              private interroService:InterrogationService,
              private resultService:ResultService,
              private lessonService:LessonService,
              private authService:AuthenticationStudentService) { }

  ngOnInit(): void {
    this.getLessons()
  }

  /**
   * Permet de récuperer tout les resultats lié à une lesson
   */
  getResult(){
    this.results=[];
    this.interros=[];
    this.resultService.getList(this.authService.currentUserValue.idStudent!).subscribe(r=>{
      r.forEach(result=>{
        if(result.idLesson==this.form.value.idLesson) {
          this.results.push(result);
          this.getInterroById(result.idInterro!);

        }
      })
    });
    this.average()
  }

  /**
   * Permet de récupérer une interro avec son id
   * @param id l'id de l'interro
   */
  getInterroById(id:number){
    this.interroService.get(id).subscribe(i=>this.interros.push(i));
  }

  /**
   * Permet de récupérer toutes les lessons
   */
  getLessons(){
    this.lessonService.getAll().subscribe(l=>this.lessons=l);
  }

  /**
   * Calcul la moyenne des notes lié à la lesson choisis
   */
  public average(){
    this.sum=0;
    this.results.forEach(result=>{
      this.sum+=((result.result)/(result.total))*100;
    })
    this.sum/=this.results.length;

  }

}

