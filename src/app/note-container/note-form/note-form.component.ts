import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Note} from "../../_model/note";
import {Student} from "../../_model/student";
import {StudentService} from "../../_services/_student/student.service";
import {AuthenticationTeacherService} from "../../_services/_Authentification/authentificationTeacher.service";
import {environment} from "../../../environments/environment";
import {Interrogation} from "../../_model/interrogation";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {SchoolclassService} from "../../_services/_schoolclass/schoolclass.service";
import {Schoolclass} from "../../_model/schoolclass";
import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  @Input() notes:Note[]=[];
  @Output() noteCreated:EventEmitter<Note> = new EventEmitter<Note>()
  students : Student[] = [];
  interros : Interrogation[] = [];
  schoolClasses : Schoolclass[]=[];
  studentToDisplay: Student[]=[];

  currentDate = new Date();



  alertMessage:String='';

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

  get ClassDetails() {
    return (this.form.get('ClassDetails') as FormArray);
  }

  /**
   * Permet de récupérer les controls du formArray
   */
  get controls() {
    return (this.form.get('ClassDetails') as FormArray).controls;
  }

  /**
   * Permet de récupérer toutes les schoolClass
   */
  getAllSchoolClass(){
    this.schoolClassService.getAll().subscribe(sc=>this.schoolClasses=sc);
  }

  /**
   * Crée le formulaire de manière dynamique selon le nombre d'étudiants dans la classe choisie
   */
  createform()
  {
    let arr=[];
    this.studentToDisplay = [];
    for(let i=0;i< this.students.length;i++)
    {
      if(this.students[i].idClass == this.filter.value.idClass){
        arr.push(this.BuildFormDynamic(this.students[i]))
        this.studentToDisplay.push(this.students[i]);
      }
    }
    this.form =  this.fb.group({
      idInterro : ['',Validators.required],
      ClassDetails:this.fb.array(arr)
    })
  }

  /**
   * Crée un formulaire dynamiquement
   * @param student l'étudiant à ajouter au formulaire
   */
  BuildFormDynamic(student:Student):FormGroup{
    return this.fb.group({
      idStudent:[student.idStudent],
      result:['',[Validators.required,Validators.max(100),Validators.pattern("^[0-9]*$")]],
      message:['',[Validators.required, Validators.maxLength(80),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]]
    })
  }


  /**
   * Emet une note pour chaque étudiant, la note sera créer par noteContainer (event binding)
   */
  createAndEmitNote()
  {

    let flag = false;
    for(let i=0;i< this.studentToDisplay.length;i++)
    {
      flag=false;
      for(let note of this.notes) {
        if (note.idInterro === this.form.value.idInterro && note.idStudent === this.form.value.ClassDetails[i].idStudent) {
          flag = true;
          break;
        }
      }
      if(flag===false)
      this.noteCreated.next({
        idTeacher:this.authService.currentUserValue.idTeacher,
        idStudent:this.form.value.ClassDetails[i].idStudent,
        idInterro:this.form.value.idInterro,
        dateNote:this.currentDate,
        result:this.form.value.ClassDetails[i].result,
        message:this.form.value.ClassDetails[i].message
      })
  }}

  /**
   * Permet de récupérer tout les étudiants
   */
  getAllStudent()
  {
    this.studentService
      .getAll()
      .subscribe(s=>this.students=s);
  }

  /**
   * Permet de récupérer toutes les interros
   */
  getAllInterros()
  {
    this.interroService
      .getAll()
      .subscribe(i=>this.interros=i);
  }

  autoCompleteFilter() {
    if (environment.production)
      return;

    this.filter.setValue({
      idClass:1
    });

  }

  autoComplete() {
    const cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');

    if (environment.production)
      return;
    this.form.patchValue({
      idInterro:1,
      dateNote:cValue
    })
  }


  /**
   * Permet de limité les entrée clavier aux chiffres uniquement
   * @param event l'entrée clavier
   */
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }




}
