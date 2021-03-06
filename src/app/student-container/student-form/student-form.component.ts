import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../_model/teacher";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../_model/student";
import {Schoolclass} from "../../_model/schoolclass";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @Input() schoolClasses:Schoolclass[]=[];
  @Output() studentCreated:EventEmitter<Student> = new EventEmitter<Student>()
  form : FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.maxLength(50),Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]],
    firstname:['',[Validators.required, Validators.maxLength(50),Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]],
    birthdate:['',Validators.required],
    mail:['',[Validators.required,Validators.maxLength(50)]],
    password:['',[Validators.required,Validators.maxLength(50)]],
    idClass:['',Validators.required]
  })
  currentDate = new Date().toISOString().split("T")[0];


  constructor(private fb:FormBuilder){ }

  ngOnInit(): void {

  }

  /**
   * Emet un student, le student sera crée par StudentContainer (event binding)
   */
  createAndEmitStudent(){
    this.studentCreated.next({

      name:this.form.value.name,
      firstName:this.form.value.firstname,
      birthdate:this.form.value.birthdate,
      mail:this.form.value.mail,
      password:this.form.value.password,
      idClass:this.form.value.idClass
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
      password:"JohnPassword",
      idClass:1
    });
  }


}
