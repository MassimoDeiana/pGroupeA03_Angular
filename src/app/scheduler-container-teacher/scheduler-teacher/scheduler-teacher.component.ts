import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {EventSettingsModel, Schedule, ScheduleComponent, View} from "@syncfusion/ej2-angular-schedule";

import {Meeting} from "../../_model/meeting";
import {LessonService} from "../../_services/_lesson/lesson.service";
import {Course} from "../../_model/course";
import {Lesson} from "../../_model/lesson";
import {CourseService} from "../../_services/_course/course.service";
import {AuthenticationTeacherService} from "../../_services/_Authentification/authentificationTeacher.service";
import {ParticipateMeeting} from "../../_model/participateMeeting";
import {MeetingService} from "../../_services/_meeting/meeting.service";


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler-teacher.component.html',
  styleUrls: ['./scheduler-teacher.component.css']
})
export class SchedulerTeacherComponent implements OnInit{

  obj:Object[]=[];
  meetings:Meeting[]=[];
  @Input() courses:Course[]=[];
  @Input() lessons:Lesson[]=[];
  @Input() participates:ParticipateMeeting[]=[];

  public eventSettings:EventSettingsModel = {};

  constructor(private meetingService:MeetingService,
              private authService:AuthenticationTeacherService) {}

  ngOnInit(): void {
    this.setup();
  }

  /**
   * Set up le scheduler avec les données
   */
  setup()
  {
    this.eventSettings={dataSource:this.toDatasource(this.participates,this.courses)}
  }

  /**
   * Permet de récuperer les meeting avec leur id
   * @param id l'id du meeting
   */
  getMeetingById(id:number){
    this.meetingService
      .get(id).subscribe(m=>{
      console.log("ici");
      this.obj.push({
        Id: m.idMeeting,
        Subject: m.subject,
        StartTime: new Date(m.startTime),
        EndTime: new Date(m.endTime)
      })

    })
  }

  /**
   * Convertis participates et courses en datasource pour bind les données dans le scheduler
   * @param participates
   * @param courses
   */
  toDatasource(participates:ParticipateMeeting[],courses:Course[])
  {
    this.obj=[];
    this.participates.forEach(participate=>{
      if(participate.idTeacher==this.authService.currentUserValue.idTeacher) {
        this.obj=[];
        this.getMeetingById(participate.idMeeting!);
      }
    });

    courses.forEach(course=>{
      this.obj.push({
        Id:course.idCourse,
        Subject:this.lessons[course.idLesson-1].subject,
        StartTime: new Date(course.startTime),
        EndTime: new Date(course.endTime)
      })
    })
    return this.obj;
  }



}
