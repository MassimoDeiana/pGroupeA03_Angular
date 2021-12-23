import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Meeting} from "../../_model/meeting";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {TeacherService} from "../../_services/_teacher/teacher.service";
import {Teacher} from "../../_model/teacher";
import {ParticipateMeeting} from "../../_model/participateMeeting";
import {ListItem} from "ng-multiselect-dropdown/multiselect.model";

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  @Input() meetings : Meeting[]=[];
  @Output() participateMeetingCreated : EventEmitter<ParticipateMeeting> = new EventEmitter<ParticipateMeeting>()
  index:number=0;

  teachers:Teacher[]=[];
  test:Teacher;

  dropdownSettings:IDropdownSettings={};
  participants:number[]=[];
  teacherPart : Teacher[]=[];

  constructor(private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.getAllTeacher()

    this.dropdownSettings = {
      idField: 'idTeacher',
      textField: 'name'
    };
  }

  /**
   * Permet de récupérer la liste des Teacher
   */
  getAllTeacher(){
    this.teacherService
      .getAll()
      .subscribe(t=>this.teachers=t);
  }

  /**
   * Emet une participation pour chaque participants, la participation sera créer par meetingContainer via (event binding)
   * @param meeting le meeting auquel il faut ajouter les participations
   */
  createAndEmitParticipation(meeting:Meeting) {
    console.log("ici");
    this.teacherPart.forEach(teacher=>{
      console.log(meeting.idMeeting);
      console.log(teacher.idTeacher);
      this.participateMeetingCreated.next({
        idMeeting:meeting.idMeeting,
        idTeacher:teacher.idTeacher!
//        idTeacher:participant!
      })
    })
  }

  /**
   * Ajoute un participant à la liste lorsqu'il est séléctionné
   * @param teacher le professeur à ajouter
   */
  addParticipants(teacher: any) {
      this.test=teacher;
      this.participants.push(this.test.idTeacher!);
  }

  /**
   * Supprime un participant de la liste lorsqu'il est dé-selectionné
   * @param teacher le professeur à supprimer
   */
  removeParticipants(teacher: any) {
    this.test=teacher;
    this.participants.forEach((id,index)=>{
      if(id==this.test.idTeacher)
        this.participants.splice(index,1);
    })
  }

  /**
   * Ajoute tout les teacher à la liste des participants
   * @param teachers la liste des teachers a ajouter
   */
  addAll(teachers: Array<ListItem>) {
    teachers.forEach(teacher=>{
      this.addParticipants(teacher);
    })
  }

  /**
   * Supprime tout les teacher de la liste des participants
   */
  removeAll() {
    this.teachers.forEach(teacher=>{
      this.removeParticipants(teacher);
    })
  }
}
