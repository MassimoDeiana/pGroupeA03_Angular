import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../teacher.service";
import {Teacher} from "../teacher";
import {EntityToDelete} from "../entity-to-delete";
import {Ientityservice} from "../ientityservice";
import {EntityService} from "../entity.service";
import {EntityContainerComponent} from "../entity-container/entity-container.component";
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
