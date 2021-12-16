import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Interrogation} from "../../_model/interrogation";
import {Course} from "../../_model/course";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {CourseService} from "../../_services/_course/course.service";
import {Schoolclass} from "../../_model/schoolclass";
import {SchoolclassService} from "../../_services/schoolclass.service";
import {AuthenticationTeacherService} from "../../_services/_Authentification/authentificationTeacher.service";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @Output() courseCreated:EventEmitter<Course> = new EventEmitter<Course>()

  schoolClasses:Schoolclass[]=[];

  form : FormGroup = this.fb.group({
    idClass:['',Validators.required],
    info:this.fb.array([])
  })

  constructor(private fb:FormBuilder,
              private schoolClassService:SchoolclassService,
              private courseService:CourseService,
              private authService:AuthenticationTeacherService) { }

  ngOnInit(): void {
    this.getAllClasses();
  }

  getAllClasses() {
    this.schoolClassService.getAll().subscribe(c=>this.schoolClasses=c);
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
      startTime:['',Validators.required],
      endTime:['',Validators.required],
      subject:['',Validators.required]
    })
    this.info.push(lessonForm);
  }

  deleteInfo(lessonIndex:number){
    this.info.removeAt(lessonIndex);
  }


  createAndEmitInterro()
  {
    console.log(this.form.value);
    console.log(this.info.length);

    for(let i=0; i<this.info.length; i++)
    {

      this.courseCreated.next({
        idLesson:this.form.value.idLesson,
        startTime:this.form.value.lessons[i].startTime,
        endTime:this.form.value.lessons[i].endTime,
        idTeacher:this.authService.currentUserValue.idTeacher,
        idClass:this.form.value.idClass
      })
    }}
}
