import { Component, OnInit } from '@angular/core';
import {Meeting} from "../_model/meeting";
import {EventSettingsModel} from "@syncfusion/ej2-angular-schedule";
import {MeetingService} from "../_services/_meeting/meeting.service";
import {Teacher} from "../_model/teacher";

@Component({
  selector: 'app-meeting-container',
  templateUrl: './meeting-container.component.html',
  styleUrls: ['./meeting-container.component.css']
})
export class MeetingContainerComponent implements OnInit {

  meetings:Meeting[]=[];
  public dataSource : Object[]=[];
  public eventSettings: EventSettingsModel = {};

  constructor(private meetingService:MeetingService) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
    this.meetingService
      .getAll()
      .subscribe(m=>this.meetings=m);
  }

  send(meeting:Meeting){
    this.meetingService.create(meeting)
      .subscribe(meeting=>this.meetings.push(meeting));
  }
}
