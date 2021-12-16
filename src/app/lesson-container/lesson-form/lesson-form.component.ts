import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Teacher} from "../../_model/teacher";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Lesson} from "../../_model/lesson";

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {

  @Output() lessonCreated:EventEmitter<Lesson> = new EventEmitter<Lesson>()
  form : FormGroup = this.fb.group({
    subject:['',Validators.required]
  })

  constructor(private fb:FormBuilder){ }

  ngOnInit(): void {

  }
  createAndEmitTeacher(){
    this.lessonCreated.next({
      subject:this.form.value.subject,
    });
  }
}
