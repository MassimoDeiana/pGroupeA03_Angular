import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Meeting} from "../../_model/meeting";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {TeacherService} from "../../_services/_teacher/teacher.service";
import {Teacher} from "../../_model/teacher";
import {ParticipateMeeting} from "../../_model/participateMeeting";

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  @Input() meetings : Meeting[]=[];
  @Output() participateMeetingCreated : EventEmitter<ParticipateMeeting> = new EventEmitter<ParticipateMeeting>()

  teachers:Teacher[]=[];


  dropdownSettings:IDropdownSettings={};
  participants: Teacher[]=[];

  constructor(private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.getAllTeacher()

    this.dropdownSettings = {
      idField: 'idTeacher',
      textField: 'name',
    };
  }

  getAllTeacher(){
    this.teacherService
      .getAll()
      .subscribe(t=>this.teachers=t);
  }

  createAndEmitParticipation() {

  }
}
