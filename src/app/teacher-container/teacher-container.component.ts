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

  constructor(private teacherService:TeacherService) {
  }

  ngOnInit(): void {
    this.getAll();
  }


  send(teacher:Teacher){
    this.teacherService.create(teacher)
      .subscribe(teacher=>this.teachers.push(teacher));
  }

  delete(entityToDelete:EntityToDelete<Teacher>){
    const teacher:Teacher = this.teachers[entityToDelete.index];

    this.teacherService.delete( teacher.idTeacher||-1)
      .subscribe(()=>{
        this.teachers.splice(entityToDelete.index,1)
      });
  }

  getAll(){
    this.teacherService
      .getAll()
      .subscribe(t=>this.teachers=t);
  }


  update(e:Teacher){
    this.teacherService.update(e.idTeacher || -1,e)
      .subscribe();
  }


}
