import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Teacher} from "../../_model/teacher";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  @Output() teacherCreated:EventEmitter<Teacher> = new EventEmitter<Teacher>()
  form : FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.maxLength(50),Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]],
    firstname:['',[Validators.required, Validators.maxLength(50),Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]],
    birthdate:['',Validators.required],
    mail:['',[Validators.required,Validators.maxLength(50)]],
    password:['',[Validators.required,Validators.maxLength(50)]]
  })
  currentDate = new Date().toISOString().split("T")[0];

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

  autoComplete() {
    if (environment.production)
      return;

    this.form.setValue({
      name:"Doe",
      firstname:"John",
      birthdate:"2000-01-01",
      mail:"JohnDoe@gmail.com",
      password:"JohnPassword"
    });
  }

}
