import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Note} from "../../_model/note";
import {Student} from "../../_model/student";
import {StudentService} from "../../_services/_student/student.service";
import {AuthenticationTeacherService} from "../../_services/_Authentification/authentificationTeacher.service";
import {environment} from "../../../environments/environment";
import {Interrogation} from "../../_model/interrogation";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {SchoolclassService} from "../../_services/schoolclass.service";
import {Schoolclass} from "../../_model/schoolclass";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  @Output() noteCreated:EventEmitter<Note> = new EventEmitter<Note>()
  students : Student[] = [];
  interros : Interrogation[] = [];
  schoolClasses : Schoolclass[]=[];
  studentToDisplay: Student[]=[];

  form : FormGroup;

  filter : FormGroup = this.fb.group({
    idClass : ['',Validators.required]
  })


  constructor(private fb:FormBuilder,
              private studentService : StudentService,
              private interroService : InterrogationService,
              private schoolClassService : SchoolclassService,
              private authService:AuthenticationTeacherService) { }

  ngOnInit(): void {
    this.getAllStudent();
    this.getAllInterros();
    this.createform();
    this.getAllSchoolClass()
  }

  get controlsMachin() {
    return (this.form.get('ClassDetails') as FormArray).controls;
  }

  getAllSchoolClass(){
    this.schoolClassService.getAll().subscribe(sc=>this.schoolClasses=sc);
  }

  createform()
  {
    let arr=[];
    this.studentToDisplay = [];
    for(let i=0;i< this.students.length;i++)
    {

      if(this.students[i].idClass == this.filter.value.idClass){
        console.log("ici");
        console.log(this.students[i].name)
        arr.push(this.BuildFormDynamic(this.students[i]))
        this.studentToDisplay.push(this.students[i]);
      }
    }
    this.form =  this.fb.group({
      idInterro : ['',Validators.required],
      dateNote : ['',Validators.required],
      ClassDetails:this.fb.array(arr)
    })
  }

  BuildFormDynamic(student:Student):FormGroup{
    console.log(student.idStudent);
    return this.fb.group({
      idStudent:[student.idStudent],
      result:['',[Validators.required,Validators.max(100),Validators.pattern("^[0-9]*$")]],
      message:['',[Validators.required, Validators.maxLength(80),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]]
    })
  }

  SaveData()
  {
    console.log(this.form.value);
    //pass this data to service and api node/webapi

  }

  createAndEmitNote()
  {
    for(let i=0;i< this.studentToDisplay.length;i++)
    {
      console.log(this.form.value)
      console.log("id teacher : " + this.authService.currentUserValue.idTeacher);
      console.log("id idInterro : " +this.form.value.idInterro);
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

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }




}
