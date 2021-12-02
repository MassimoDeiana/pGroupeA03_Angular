import {Component, OnInit, ViewChild} from '@angular/core';
import {EventSettingsModel, ScheduleComponent, View} from "@syncfusion/ej2-angular-schedule";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {

  @ViewChild("scheduleObj")
  public scheduleObj: ScheduleComponent;
  @ViewChild("addButton")
  public selectedDate: Date = new Date(2018, 1, 15);
  public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
  public eventSettings: EventSettingsModel = {
    dataSource: [{
      Id: 1,
      Subject: 'Testing',
      StartTime: new Date(2021, 10, 11, 9, 0),
      EndTime: new Date(2021, 10, 11, 10, 0),
      IsAllDay: false
    }, {
      Id: 2,
      Subject: 'Vacation',
      StartTime: new Date(2021, 10, 13, 9, 0),
      EndTime: new Date(2021, 10, 13, 10, 0),
      IsAllDay: false
    }]
  }
  public onButtonClick(): void {
    let data: Object[] = [{
      Id: 3,
      Subject: 'Conference',
      StartTime: new Date(2021, 10, 12, 9, 0),
      EndTime: new Date(2021, 10, 12, 10, 0),
      IsAllDay: true
    }, {
      Id: 4,
      Subject: 'Meeting',
      StartTime: new Date(2021, 10, 15, 10, 0),
      EndTime: new Date(2021, 10, 15, 11, 30),
      IsAllDay: false
    }];
    this.scheduleObj.addEvent(data);
  }
}
