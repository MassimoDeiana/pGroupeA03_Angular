import { Component, OnInit } from '@angular/core';
import {Meeting} from "../_model/meeting";
import {EventSettingsModel} from "@syncfusion/ej2-angular-schedule";
import {MeetingService} from "../_services/_meeting/meeting.service";
import {Teacher} from "../_model/teacher";
import {ParticipateMeeting} from "../_model/participateMeeting";
import {ParticipateMeetingService} from "../_services/_participateMeeting/participate-meeting.service";

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

  constructor(private meetingService:MeetingService, private participateMeetingService:ParticipateMeetingService) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
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
