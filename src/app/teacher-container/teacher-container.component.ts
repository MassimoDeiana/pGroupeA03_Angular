import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../_services/_teacher/teacher.service";
import {Teacher} from "../_model/teacher";
import {EntityToDelete} from "../_model/entity-to-delete";
import {Ientityservice} from "../_services/ientityservice";
import {EntityService} from "../_services/entity.service";
import {TeacherListComponent} from "./teacher-list/teacher-list.component";

@Component({
  selector: 'app-teacher-container',
  templateUrl: './teacher-container.component.html',
  styleUrls: ['./teacher-container.component.css']
})


export class TeacherContainerComponent implements OnInit {

  teachers:Teacher[]=[];
  pageTitle:string="Teacher management";

  constructor(private teacherService:TeacherService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  /**
   * Permet de créer une teacher
   * On appelle la méthode create du service permettant de faire une requête http (voir entity service)
   * On ajoute la teacher au flux de donnée via le subscribe
   *
   * @param teacher le teacher à créer
   */
  send(teacher:Teacher){
    this.teacherService.create(teacher)
      .subscribe(teacher=>this.teachers.push(teacher));
  }

  /**
   * permet de supprimer un teacher
   * @param entityToDelete le teacher à supprimer
   */
  delete(entityToDelete:EntityToDelete<Teacher>){
    const teacher:Teacher = this.teachers[entityToDelete.index];

    this.teacherService.delete( teacher.idTeacher||-1)
      .subscribe(()=>{
        this.teachers.splice(entityToDelete.index,1)
      },
        error => window.alert("At least one student remains in the class.")
      );
  }

  /**
   * Permet de récuperer tout les teachers
   */
  getAll(){
    this.teacherService
      .getAll()
      .subscribe(t=>this.teachers=t);
  }




}
