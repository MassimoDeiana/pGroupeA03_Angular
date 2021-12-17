import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../_model/teacher";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../_model/student";
import {Schoolclass} from "../../_model/schoolclass";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @Input() schoolClasses:Schoolclass[]=[];
  @Output() studentCreated:EventEmitter<Student> = new EventEmitter<Student>()
  form : FormGroup = this.fb.group({
    name:['',Validators.required],
    firstname:['',Validators.required],
    birthdate:['',Validators.required],
    mail:['',Validators.required],
    password:['',Validators.required],
    idClass:['',Validators.required]
  })

  constructor(private fb:FormBuilder){ }

  ngOnInit(): void {

  }

  createAndEmitStudent(){
    this.studentCreated.next({

      name:this.form.value.name,
      firstname:this.form.value.firstname,
      birthdate:this.form.value.birthdate,
      mail:this.form.value.mail,
      password:this.form.value.password,
      idClass:this.form.value.idClass
    });
  }



}
