import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {Teacher} from "../../_model/teacher";
import {Interrogation} from "../../_model/interrogation";
import {CourseService} from "../../_services/_course/course.service";
import {Course} from "../../_model/course";
import {Lesson} from "../../_model/lesson";
import {LessonService} from "../../_services/_lesson/lesson.service";
import {AuthenticationTeacherService} from "../../_services/_Authentification/authentificationTeacher.service";

@Component({
  selector: 'app-interro-form',
  templateUrl: './interro-form.component.html',
  styleUrls: ['./interro-form.component.css']
})
export class InterroFormComponent implements OnInit {

  succeedMessage:boolean=false;

  @Input() message:string='';

  @Output() interroCreated:EventEmitter<Interrogation> = new EventEmitter<Interrogation>()

  lessons:Lesson[]=[];

  form : FormGroup = this.fb.group({
    idLesson:['',Validators.required],
    info:this.fb.array([])
  })

  constructor(private fb:FormBuilder,
              private interroService:InterrogationService,
              private lessonService:LessonService,
              private authService:AuthenticationTeacherService) { }

  ngOnInit(): void {
    this.getAllLesson();
  }



  getAllLesson() {
    this.lessonService.getAll().subscribe(c=>this.lessons=c);
  }

  get info()
  {
    return (this.form.get('info') as FormArray);
  }

  get infoControls()
  {
    return this.info.controls;
  }



  addInfo() {
    const lessonForm = this.fb.group({
      subject:['',[Validators.required, Validators.maxLength(50),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
      total:['',[Validators.required, Validators.max(100), Validators.pattern("^[0-9]*$")]]
    })
    this.info.push(lessonForm);
  }


  deleteInfo(lessonIndex:number){
    this.info.removeAt(lessonIndex);
  }


  /**
   * Emet une interro, l'interro sera créer par InterroContainer via l'event binding
   */
  createAndEmitInterro()
  {
    console.log(this.form.value);
    console.log(this.info.length);

    for(let i=0; i<this.info.length; i++)
    {
      console.log(this.form.value.idLesson);
      console.log(this.form.value.info[i].subject);
      console.log(this.form.value.info[i].total);
      this.interroCreated.next({
        idLesson:this.form.value.idLesson,
        idTeacher:this.authService.currentUserValue.idTeacher!,
        subject:this.form.value.info[i].subject,
        total:this.form.value.info[i].total
      })
    }}

  /**
   * Permet de limité les entrée clavier aux chiffres uniquement
   * @param event l'entrée clavier
   */
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
