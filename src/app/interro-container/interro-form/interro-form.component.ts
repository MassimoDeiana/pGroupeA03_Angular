import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {Teacher} from "../../_model/teacher";
import {Interrogation} from "../../_model/interrogation";
import {CourseService} from "../../_services/_course/course.service";
import {Course} from "../../_model/course";

@Component({
  selector: 'app-interro-form',
  templateUrl: './interro-form.component.html',
  styleUrls: ['./interro-form.component.css']
})
export class InterroFormComponent implements OnInit {

  @Output() interroCreated:EventEmitter<Interrogation> = new EventEmitter<Interrogation>()

  courses:Course[]=[];

  form : FormGroup = this.fb.group({
    idCourse:['',Validators.required],
    lessons:this.fb.array([])
  })

  constructor(private fb:FormBuilder, private interroService:InterrogationService,private courseService:CourseService) { }

  ngOnInit(): void {
    this.getAllCourse();
  }

  getAllCourse() {
    this.courseService.getAll().subscribe(c=>this.courses=c);
  }

  get lessons()
  {
    return (this.form.get('lessons') as FormArray);
  }

  get lessonsControls()
  {
    return this.lessons.controls;
  }



  addLesson() {
    const lessonForm = this.fb.group({
      subject:['',Validators.required],
      total:['',Validators.required]
    })
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex:number){
    this.lessons.removeAt(lessonIndex);
  }


  createAndEmitInterro()
  {
    console.log(this.form.value);
    console.log(this.lessons.length);

    for(let i=0; i<this.lessons.length;i++)
    {
      console.log(this.form.value.idCourse);
      console.log(this.form.value.lessons[i].subject);
      console.log(this.form.value.lessons[i].total);
      this.interroCreated.next({
        idCourse:this.form.value.idCourse,
        subject:this.form.value.lessons[i].subject,
        total:this.form.value.lessons[i].total
      })
    }}

}
