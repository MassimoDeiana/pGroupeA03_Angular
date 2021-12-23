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

  pageTitle:string="Meeting";

  participateMeetings:ParticipateMeeting[]=[];
  public dataSource : Object[]=[];
  public eventSettings: EventSettingsModel = {};


  constructor(private meetingService:MeetingService,
              private participateMeetingService:ParticipateMeetingService) {}

  ngOnInit(): void {
    this.getAllMeeting();


  }

  /**
   * Permet de récupérer tout les meeting.
   * On ajoute chaque meeting au flux de donnée via le subscribe
   */
  getAllMeeting(){
    this.meetingService
      .getAll()
      .subscribe(m=>this.meetings=m);
  }

  /**
   * Permet de créer un Meeting
   * On appelle la méthode create du service permettant de faire une requête http (voir entity service)
   * On ajoute le meeting au flux de donnée via le subscribe
   *
   * @param meeting Le meeting à créer
   */
  sendMeeting(meeting:Meeting){
    this.meetingService.create(meeting)
      .subscribe(meeting=>this.meetings.push(meeting));
  }

  /**
   * Permet de créer une participation
   * On appelle la méthode create du service permettant de faire une requête http (voir entity service)
   * On ajoute la participation au flux de donnée via le subscribe
   *
   * @param participateMeeting La participation à créer
   */
  sendParticipate(participateMeeting : ParticipateMeeting){
    this.participateMeetingService
      .create(participateMeeting)
      .subscribe(pm=>this.participateMeetings.push(pm));
  }

}

