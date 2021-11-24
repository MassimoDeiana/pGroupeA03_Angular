import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Teacher} from "../../teacher";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  @Output() teacherCreated:EventEmitter<Teacher> = new EventEmitter<Teacher>()
  form : FormGroup = this.fb.group({
    name:['',Validators.required],
    firstname:['',Validators.required],
    birthdate:['',Validators.required],
    mail:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private fb:FormBuilder){ }

  ngOnInit(): void {

  }
  createAndEmitTeacher(){
    this.teacherCreated.next({

      name:this.form.value.name,
      firstname:this.form.value.firstname,
      birthdate:this.form.value.birthdate,
      mail:this.form.value.mail,
      password:this.form.value.password

    });
  }

}
