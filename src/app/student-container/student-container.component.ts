import { Component, OnInit } from '@angular/core';
import {Student} from "../_model/student";
import {StudentService} from "../_services/_student/student.service";
import {Teacher} from "../_model/teacher";
import {EntityToDelete} from "../_model/entity-to-delete";
import {SchoolclassService} from "../_services/_schoolclass/schoolclass.service";
import {Schoolclass} from "../_model/schoolclass";

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css']
})
export class StudentContainerComponent implements OnInit {

  students:Student[]=[];
  schoolClasses:Schoolclass[]=[];
  pageTitle: string="Student management";

  constructor(private studentService:StudentService,private schoolClassService:SchoolclassService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllSchoolClass()
  }


  /**
   * Permet de créer un student
   * On appelle la méthode create du service permettant de faire une requête http (voir entity service)
   * On ajoute le student au flux de donnée via le subscribe
   * @param student
   */
  send(student:Student){
    this.studentService.create(student)
      .subscribe(student=>this.students.push(student));
  }

  /**
   * Permet de supprimer un student
   * @param entityToDelete le student à delete
   */
  delete(entityToDelete:EntityToDelete<Student>){
    const student:Student = this.students[entityToDelete.index];

    this.studentService.delete( student.idStudent ||-1)
      .subscribe(()=>{
        this.students.splice(entityToDelete.index,1)
      },
        error => window.alert("Teacher gave at least one course")
      );
  }

  /**
   * Permet de récuperer tout les students
   */
  getAll(){
    this.studentService
      .getAll()
      .subscribe(t=>this.students=t);
  }

  /**
   * Permet d'update un student
   * @param e le nouveau student
   */
  update(e:Student){
    this.studentService.update(e.idStudent || -1,e)
      .subscribe();
  }

  /**
   * permet de récuperer toutes les schoolclass
   */
  getAllSchoolClass(){
    this.schoolClassService
      .getAll()
      .subscribe(s=>this.schoolClasses=s);
  }


}
