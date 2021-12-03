import {Component, Injectable, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {EventSettingsModel, Schedule, ScheduleComponent, View} from "@syncfusion/ej2-angular-schedule";
import { Ajax } from "@syncfusion/ej2-base"
import {Meeting} from "../_model/meeting";
import {MeetingService} from "../_services/_meeting/meeting.service";
import {Teacher} from "../_model/teacher";
import {Subject} from "rxjs";
import {DataManager, ODataV4Adaptor} from "@syncfusion/ej2-data";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnChanges{

  @Input() meetings:Meeting[]=[];
  datasource:Object[]=[];
  public eventSettings:EventSettingsModel = {};

  ngOnChanges(): void {
    this.meetings.forEach(meeting=>{
      this.datasource.push({
        Id:meeting.idMeeting,
        Subject:meeting.subject,
        StartTime: new Date(meeting.startTime),
        EndTime: new Date(meeting.endTime)
      })
      this.eventSettings={dataSource:this.datasource}
      console.log(this.eventSettings);
    })
  }

}
