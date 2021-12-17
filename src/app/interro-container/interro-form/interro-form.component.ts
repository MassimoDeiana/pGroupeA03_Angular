import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {Teacher} from "../../_model/teacher";
import {Interrogation} from "../../_model/interrogation";
import {CourseService} from "../../_services/_course/course.service";
import {Course} from "../../_model/course";
import {Lesson} from "../../_model/lesson";
import {LessonService} from "../../_services/_lesson/lesson.service";

@Component({
  selector: 'app-interro-form',
  templateUrl: './interro-form.component.html',
  styleUrls: ['./interro-form.component.css']
})
export class InterroFormComponent implements OnInit {

  @Output() interroCreated:EventEmitter<Interrogation> = new EventEmitter<Interrogation>()

  lessons:Lesson[]=[];

  form : FormGroup = this.fb.group({
    idLesson:['',Validators.required],
    info:this.fb.array([])
  })

  constructor(private fb:FormBuilder, private interroService:InterrogationService,private lessonService:LessonService) { }

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
      subject:['',Validators.required],
      total:['',Validators.required]
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
      console.log(this.form.value.idLesson);
      console.log(this.form.value.info[i].subject);
      console.log(this.form.value.info[i].total);
      this.interroCreated.next({
        idLesson:this.form.value.idLesson,
        subject:this.form.value.info[i].subject,
        total:this.form.value.info[i].total
      })
    }}

}
