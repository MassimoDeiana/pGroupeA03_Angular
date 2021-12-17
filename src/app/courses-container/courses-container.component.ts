import { Component, OnInit } from '@angular/core';
import {Course} from "../_model/course";
import {CourseService} from "../_services/_course/course.service";
import {EntityToDelete} from "../_model/entity-to-delete";
import {Note} from "../_model/note";

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css']
})
export class CoursesContainerComponent implements OnInit {

  courses:Course[]=[];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
  }

  send(course:Course){
    this.courseService.create(course)
      .subscribe(course=>this.courses.push(course));
    console.log(this.courses)
  }

  delete(entityToDelete:EntityToDelete<Note>){
    const course:Course = this.courses[entityToDelete.index];

    this.courseService.delete( course.idLesson||-1)
      .subscribe(()=>{
        this.courses.splice(entityToDelete.index,1)
      });
  }

  getAll(){
    this.courseService
      .getAll()
      .subscribe(t=>this.courses=t);
  }

}
