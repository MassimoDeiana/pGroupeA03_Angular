import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {Interrogation} from "../../_model/interrogation";
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
  @Input() interrogations:Interrogation[]=[];
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


  /**
   * Permet de récupérer toutes les lessons
   */
  getAllLesson() {
    this.lessonService.getAll().subscribe(c=>this.lessons=c);
  }

  /**
   * Permet de récupérer le FormArray
   */
  get info()
  {
    return (this.form.get('info') as FormArray);
  }

  /**
   * Permet de récupérer les controls du formArray
   */
  get infoControls()
  {
    return this.info.controls;
  }

  /**
   * Permet d'ajouter dynamiquement un formulaire
   */
  addInfo() {
    const lessonForm = this.fb.group({
      subject:['',[Validators.required, Validators.maxLength(50),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
      total:['',[Validators.required, Validators.max(100), Validators.pattern("^[0-9]*$")]]
    })
    this.info.push(lessonForm);
  }

  /**
   * Permet de supprimer dynamiquement un formulaire
   * @param lessonIndex
   *    L'index du formulaire que l'on souhaite supprimer
   */
  deleteInfo(lessonIndex:number){
    this.info.removeAt(lessonIndex);
  }


  /**
   * Emet une interro, l'interro sera créer par InterroContainer (event binding)
   */
  createAndEmitInterro()
  {
    var flag = false;
    for(let i=0; i<this.info.length; i++)
    {
      flag=false;
      for(let interro of this.interrogations) {
        if (interro.subject === this.form.value.info[i].subject) {
          flag = true;
          break;
        }
      }
      if(flag===false)
        this.interroCreated.next({
          idLesson:this.form.value.idLesson,
          idTeacher:this.authService.currentUserValue.idTeacher!,
          subject:this.form.value.info[i].subject,
          total:this.form.value.info[i].total
        })
      }

    }

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
