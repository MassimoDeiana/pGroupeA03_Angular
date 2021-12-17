import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Interrogation} from "../../_model/interrogation";
import {Course} from "../../_model/course";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InterrogationService} from "../../_services/_interrogation/interrogation.service";
import {CourseService} from "../../_services/_course/course.service";
import {Meeting} from "../../_model/meeting";
import {Teacher} from "../../_model/teacher";
import {TeacherService} from "../../_services/_teacher/teacher.service";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {ParticipateMeeting} from "../../_model/participateMeeting";

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent implements OnInit {

  @Output() meetingCreated: EventEmitter<Meeting> = new EventEmitter<Meeting>()


  form: FormGroup = this.fb.group({
    meetings: this.fb.array([])
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }



  get meetings() {
    return (this.form.get('meetings') as FormArray);
  }

  get meetingsControls() {
    return this.meetings.controls;
  }

  addMeetings() {
    const meetingForm = this.fb.group({
      subject: ['', [Validators.required, Validators.maxLength(50),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    })
    this.meetings.push(meetingForm);
  }

  deleteMeeting(meetingIndex: number) {
    this.meetings.removeAt(meetingIndex);
  }


  createAndEmitMeeting() {
    console.log(this.form.value);
    console.log(this.meetings.length);

    for (let i = 0; i < this.meetings.length; i++) {
      this.meetingCreated.next({
        subject: this.form.value.meetings[i].subject,
        startTime: this.form.value.meetings[i].startTime,
        endTime: this.form.value.meetings[i].endTime
      })

    }
  }

}
