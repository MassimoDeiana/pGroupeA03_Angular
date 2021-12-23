import {Component, Input, OnInit} from '@angular/core';
import {Meeting} from "../_model/meeting";
import {Course} from "../_model/course";
import {Lesson} from "../_model/lesson";
import {LessonService} from "../_services/_lesson/lesson.service";
import {CourseService} from "../_services/_course/course.service";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {MeetingService} from "../_services/_meeting/meeting.service";
import {ParticipateMeeting} from "../_model/participateMeeting";
import {ParticipateMeetingService} from "../_services/_participateMeeting/participate-meeting.service";

@Component({
  selector: 'app-scheduler-container-teacher',
  templateUrl: './scheduler-container-teacher.component.html',
  styleUrls: ['./scheduler-container-teacher.component.css']
})
export class SchedulerContainerTeacherComponent implements OnInit {

  meetings:Meeting[]=[];
  participates:ParticipateMeeting[]=[];
  courses:Course[]=[];
  lessons:Lesson[]=[];

  constructor(private participateService:ParticipateMeetingService,
              private lessonService:LessonService,
              private courseService:CourseService,
              private authService:AuthenticationTeacherService) { }

  ngOnInit(): void {
    this.getAllParticipate();
    this.getAllCourse(this.authService.currentUserValue.idTeacher!);
    this.getAllLesson();
  }

  /**
   * Permet de récuperer toutes les participations aux meetings
   */
  getAllParticipate(){
    this.participateService
      .getList(this.authService.currentUserValue.idTeacher!)
      .subscribe(pm=>this.participates=pm);
  }

  /**
   * Permet de récupérer tous les courses donnée par un teacher
   * @param id l'id du teacher
   */
  getAllCourse(id:number){
    this.courseService
      .getByIdTeacher(id)
      .subscribe(c=>this.courses=c);
  }

  /**
   * Permet de récuperer toutes les lessons
   */
  getAllLesson(){
    this.lessonService
      .getAll()
      .subscribe(l=>this.lessons=l);
  }

}
