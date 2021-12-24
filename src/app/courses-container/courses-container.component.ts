import { Component, OnInit } from '@angular/core';
import {Course} from "../_model/course";
import {CourseService} from "../_services/_course/course.service";
import {EntityToDelete} from "../_model/entity-to-delete";
import {Note} from "../_model/note";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {Lesson} from "../_model/lesson";
import {LessonService} from "../_services/_lesson/lesson.service";

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css']
})
export class CoursesContainerComponent implements OnInit {

  courses:Course[]=[]; //Liste des cours
  message:string="Course(s) added";
  pageTitle:string="Courses";

  constructor(private courseService:CourseService,
              private authService : AuthenticationTeacherService) { }

  ngOnInit(): void {
    this.getByIdTeacher(this.authService.currentUserValue.idTeacher!);
  }

  /**
   * Permet de créer un nouveau Course
   * @param course
   *    Le course à créer
   */
  send(course:Course){
    this.message="Course(s) added"
    this.courseService.create(course)
      .subscribe(course=>this.courses.push(course),
        error => this.message="Fail to add course(s)"); //Modifie le message à afficher en cas d'erreur
  }

  /**
   * Permet de supprimer un course
   * @param entityToDelete
   *    Le course à Delete
   */
  delete(entityToDelete:EntityToDelete<Course>){
    const course:Course = this.courses[entityToDelete.index];

    this.courseService.delete( course.idLesson||-1)
      .subscribe(()=>{
        this.courses.splice(entityToDelete.index,1)
      });
  }

  /**
   * Permet de récupérer la liste des courses sur base de l'id du Teacher
   * @param id
   *    L'id du Teacher
   */
  getByIdTeacher(id:number){
    this.courseService
      .getByIdTeacher(id)
      .subscribe(t=>this.courses=t);
  }



}
