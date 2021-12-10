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

import {Meeting} from "../_model/meeting";


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnChanges{

  @Input() meetings:Meeting[]=[];
  datasource:Object[]=[];
  public eventSettings:EventSettingsModel = {};

  @Output() meetingCreated:EventEmitter<Meeting> = new EventEmitter<Meeting>()

  ngOnChanges(): void {
    this.setup();



  }

  setup()
  {
    this.eventSettings={dataSource:this.toDatasource(this.meetings)}
    console.log(this.eventSettings.dataSource);
  }

  toDatasource(meetings:Meeting[])
  {
    var obj:Object[]=[];
    meetings.forEach(meeting=>{
      obj.push({
        Id:meeting.idMeeting,
        Subject:meeting.subject,
        StartTime: new Date(meeting.startTime),
        EndTime : new Date(meeting.endTime)
      })
    })
    return obj;
  }



/*
  createAndEmitMeeting(){
    this.meetingCreated.next({

      idMeeting:this.form.value.name,
      subject:this.form.value.firstname,
      startTime:this.form.value.birthdate,
      endTime:this.form.value.mail,

    });
  }
*/
}
