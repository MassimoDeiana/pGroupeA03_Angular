import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Meeting} from "../../_model/meeting";
import {Course} from "../../_model/course";
import {Lesson} from "../../_model/lesson";
import {ParticipateMeeting} from "../../_model/participateMeeting";
import {EventSettingsModel} from "@syncfusion/ej2-angular-schedule";
import {MeetingService} from "../../_services/_meeting/meeting.service";
import {AuthenticationTeacherService} from "../../_services/_Authentification/authentificationTeacher.service";
import {Student} from "../../_model/student";
import {AuthenticationStudentService} from "../../_services/_Authentification/authentificationStudent.service";

@Component({
  selector: 'app-scheduler-student',
  templateUrl: './scheduler-student.component.html',
  styleUrls: ['./scheduler-student.component.css']
})
export class SchedulerStudentComponent implements OnChanges {

  obj:Object[]=[];
  @Input() courses:Course[]=[];
  @Input() lessons:Lesson[]=[];
  @Input() student:Student;

  public eventSettings:EventSettingsModel = {};

  constructor(private authService:AuthenticationStudentService) {}

  ngOnChanges(): void {
    this.setup();
  }

  /**
   * Set up le scheduler avec les données
   */
  setup()
  {
    this.eventSettings={dataSource:this.toDatasource(this.courses)}
  }

  /**
   * Convertis courses en dataSource pour bind les données dans le scheduler
   * @param courses
   */
  toDatasource(courses:Course[])
  {
    this.obj=[];
    courses.forEach(course=>{
      if(course.idClass==this.student.idClass) {
        this.obj.push({
          Id: course.idCourse,
          Subject: this.lessons[course.idLesson-1].subject,
          StartTime: new Date(course.startTime),
          EndTime: new Date(course.endTime)
        })
      }
    })
    return this.obj;
  }

}
