import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Interrogation} from "../../_model/interrogation";
import {Course} from "../../_model/course";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {CourseService} from "../../_services/_course/course.service";
import {Schoolclass} from "../../_model/schoolclass";
import {SchoolclassService} from "../../_services/_schoolclass/schoolclass.service";
import {AuthenticationTeacherService} from "../../_services/_Authentification/authentificationTeacher.service";
import {LessonService} from "../../_services/_lesson/lesson.service";
import {Lesson} from "../../_model/lesson";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent implements OnInit {

  succeedMessage:boolean=false;
  @Input() message:string=''; //Message à afficher provenant de CourseContainer

  @Output() courseCreated:EventEmitter<Course> = new EventEmitter<Course>()

  schoolClasses:Schoolclass[]=[]; //Liste des classes
  lessons:Lesson[]=[]; //Liste des lesson

  //Formulaire contenant un ArrayForm permettant d'ajouter dynamiquement plusieurs forumlaire
  form : FormGroup = this.fb.group({
    idClass:['',Validators.required],
    info:this.fb.array([])
  })

  constructor(private fb:FormBuilder,
              private schoolClassService:SchoolclassService,
              private lessonService:LessonService,
              private courseService:CourseService,
              private authService:AuthenticationTeacherService) { }

  ngOnInit(): void {
    this.getAllClasses();
    this.getAllLessons();
  }

  /**
   * Permet de récupérer toutes les classes
   */
  getAllClasses() {
    this.schoolClassService.getAll().subscribe(c=>this.schoolClasses=c);
  }

  /**
   * Permet de récupérer toutes les lessons
   */
  getAllLessons(){
    this.lessonService.getAll().subscribe(l=>this.lessons=l);
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
      idLesson:['',Validators.required],
      startTime:['',Validators.required],
      endTime:['',Validators.required]
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
   * Emet un Course, le Course sera créer par CourseContainer via (event binding)
   */
  createAndEmitCourse()
  {
    for(let i=0; i<this.info.length; i++) //Boucle sur le nombre de formulaire
    {
      this.courseCreated.next({
        idLesson:this.form.value.info[i].idLesson,
        startTime:this.form.value.info[i].startTime,
        endTime:this.form.value.info[i].endTime,
        idTeacher:this.authService.currentUserValue.idTeacher,
        idClass:this.form.value.idClass
      })
    }
  }

}
