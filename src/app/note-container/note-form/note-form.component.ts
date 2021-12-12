import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Note} from "../../_model/note";
import {Student} from "../../_model/student";
import {StudentService} from "../../_services/_student/student.service";
import {firstDateOfMonth} from "@syncfusion/ej2-angular-schedule";
import {AuthenticationService} from "../../_services/authentification.service";
import {environment} from "../../../environments/environment";
import {Interrogation} from "../../_model/interrogation";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  @Output() noteCreated:EventEmitter<Note> = new EventEmitter<Note>()
  students : Student[] = [];
  interros : Interrogation[] = [];

  form : FormGroup;


  constructor(private fb:FormBuilder, private studentService : StudentService, private interroService : InterrogationService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.getAllStudent();
    this.getAllInterros();
    this.createform();
  }

  get controlsMachin() {
    return (this.form.get('ClassDetails') as FormArray).controls;
  }

  createform()
  {
    let arr=[];
    for(let i=0;i< this.students.length;i++)
    {
      console.log(i)
      arr.push(this.BuildFormDynamic(this.students[i]))

    }
    this.form =  this.fb.group({
      idInterro : [''],
      dateNote : [''],
      ClassDetails:this.fb.array(arr)
    })
  }

  BuildFormDynamic(student:Student):FormGroup{
    return this.fb.group({
      idStudent:[student.idStudent],
      result:[''],
      message:['']
    })
  }

  SaveData()
  {
    console.log(this.form.value);
    //pass this data to service and api node/webapi

  }

  createAndEmitNote()
  {
    for(let i=0;i< this.students.length;i++)
    {
      console.log(this.form.value)
      console.log("ce qu'on cherche : " + this.form.value.ClassDetails[i].idStudent)
      console.log("id teacher : " + this.authService.currentUserValue.idTeacher);
      console.log("id idInterro : " +this.form.value.idInterro);
      console.log("id idStudent : " +this.form.value.ClassDetails[i].idStudent);
      console.log("date note : " +this.form.value.dateNote);
      console.log("resultat : " +this.form.value.ClassDetails[i].result);
      console.log("message : " +this.form.value.ClassDetails[i].message);



    this.noteCreated.next({
      idTeacher:this.authService.currentUserValue.idTeacher,
      idStudent:this.form.value.ClassDetails[i].idStudent,
      idInterro:this.form.value.idInterro,
      dateNote:this.form.value.dateNote,
      result:this.form.value.ClassDetails[i].result,
      message:this.form.value.ClassDetails[i].message
    })
  }}

  getAllStudent()
  {
    this.studentService
      .getAll()
      .subscribe(s=>this.students=s);
  }

  getAllInterros()
  {
    this.interroService
      .getAll()
      .subscribe(i=>this.interros=i);
  }

  autoComplete() {
    if (environment.production)
      return;

    this.form.setValue({
      idStudent: 1,
      idInterro:1,
      dateNote: "2021-12-10",
      result:0,
      message:"nul"
    });
  }





}
