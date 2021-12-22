import { Component, OnInit } from '@angular/core';
import {Meeting} from "../_model/meeting";
import {EventSettingsModel} from "@syncfusion/ej2-angular-schedule";
import {MeetingService} from "../_services/_meeting/meeting.service";
import {Teacher} from "../_model/teacher";
import {ParticipateMeeting} from "../_model/participateMeeting";
import {ParticipateMeetingService} from "../_services/_participateMeeting/participate-meeting.service";
import {Course} from "../_model/course";
import {CourseService} from "../_services/_course/course.service";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {Lesson} from "../_model/lesson";
import {LessonService} from "../_services/_lesson/lesson.service";

@Component({
  selector: 'app-meeting-container',
  templateUrl: './meeting-container.component.html',
  styleUrls: ['./meeting-container.component.css']
})
export class MeetingContainerComponent implements OnInit {

  meetings:Meeting[]=[];

  participateMeetings:ParticipateMeeting[]=[];
  public dataSource : Object[]=[];
  public eventSettings: EventSettingsModel = {};

  pageTitle:string='Meeting';

  constructor(private meetingService:MeetingService,
              private participateMeetingService:ParticipateMeetingService) {}

  ngOnInit(): void {
    this.getAllMeeting();


  }

  getAllMeeting(){
    this.meetingService
      .getAll()
      .subscribe(m=>this.meetings=m);
  }

  sendMeeting(meeting:Meeting){
    this.meetingService.create(meeting)
      .subscribe(meeting=>this.meetings.push(meeting));
  }

  sendParticipate(participateMeeting : ParticipateMeeting){
    this.participateMeetingService
      .create(participateMeeting)
      .subscribe(pm=>this.participateMeetings.push(pm));
  }

}
