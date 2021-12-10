import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Note} from "../../_model/note";
import {Student} from "../../_model/student";
import {StudentService} from "../../_services/_student/student.service";
import {firstDateOfMonth} from "@syncfusion/ej2-angular-schedule";
import {AuthenticationService} from "../../_services/authentification.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  @Output() noteCreated:EventEmitter<Note> = new EventEmitter<Note>()
  students : Student[] = [];
  form:FormGroup = this.fb.group({
    idStudent:['',Validators.required],
    dateNote:['',Validators.required],
    result:['',Validators.required],
    message:['',Validators.required]
  })

  constructor(private fb:FormBuilder, private studentService : StudentService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.getAllStudent()
  }

  createAndEmitNote()
  {
    console.log(this.authService.currentUserValue);
    console.log(this.form.value.idStudent);
    console.log(this.form.value.dateNote);
    console.log(this.form.value.result);
    console.log(this.form.value.message);

    this.noteCreated.next({
      idTeacher:this.authService.currentUserValue.idTeacher,
      idStudent:this.form.value.idStudent,
      dateNote:this.form.value.dateNote,
      result:this.form.value.result,
      message:this.form.value.message
    })
  }

  getAllStudent()
  {
    this.studentService
      .getAll()
      .subscribe(s=>this.students=s);
  }


  autoComplete() {
    if (environment.production)
      return;

    this.form.setValue({
      idStudent: 1,
      dateNote: "2021-12-10",
      result:0,
      message:"nul"
    });
  }
}
