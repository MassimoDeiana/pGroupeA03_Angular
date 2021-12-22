import { Component, OnInit } from '@angular/core';
import {LessonService} from "../_services/_lesson/lesson.service";
import {Lesson} from "../_model/lesson";
import {EntityToDelete} from "../_model/entity-to-delete";

@Component({
  selector: 'app-lesson-container',
  templateUrl: './lesson-container.component.html',
  styleUrls: ['./lesson-container.component.css']
})
export class LessonContainerComponent implements OnInit {

  lessons:Lesson[]=[];
  pageTitle: string="Lessons";

  constructor(private lessonService:LessonService) { }

  ngOnInit(): void {
    this.getAll()
  }


  send(lesson:Lesson){
    this.lessonService.create(lesson)
      .subscribe(lesson=>this.lessons.push(lesson));
  }

  delete(entityToDelete:EntityToDelete<Lesson>){
    const lesson:Lesson = this.lessons[entityToDelete.index];

    this.lessonService.delete( lesson.idLesson||-1)
      .subscribe(()=>{
          this.lessons.splice(entityToDelete.index,1)
        },
        error => window.alert("At least one student remains in the class.")
      );
  }

  getAll(){
    this.lessonService
      .getAll()
      .subscribe(t=>this.lessons=t);
  }


  update(e:Lesson){
    this.lessonService.update(e.idLesson || -1,e)
      .subscribe();
  }


}
