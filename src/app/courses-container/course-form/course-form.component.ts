import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Interrogation} from "../../_model/interrogation";
import {Course} from "../../_model/course";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {CourseService} from "../../_services/_course/course.service";
import {Schoolclass} from "../../_model/schoolclass";
import {SchoolclassService} from "../../_services/schoolclass.service";
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
  @Input() message:string='';

  @Output() courseCreated:EventEmitter<Course> = new EventEmitter<Course>()

  schoolClasses:Schoolclass[]=[];
  lessons:Lesson[]=[];

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

  getAllClasses() {
    this.schoolClassService.getAll().subscribe(c=>this.schoolClasses=c);
  }

  getAllLessons(){
    this.lessonService.getAll().subscribe(l=>this.lessons=l);
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
      idLesson:['',Validators.required],
      startTime:['',Validators.required],
      endTime:['',Validators.required]
    })
    this.info.push(lessonForm);
  }

  deleteInfo(lessonIndex:number){
    this.info.removeAt(lessonIndex);
  }


  createAndEmitInterro()
  {
    for(let i=0; i<this.info.length; i++)
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
