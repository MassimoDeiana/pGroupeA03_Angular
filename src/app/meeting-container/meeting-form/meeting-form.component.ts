import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Meeting} from "../../_model/meeting";

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

  /**
   * Permet de récupérer le FormArray
   */
  get meetings() {
    return (this.form.get('meetings') as FormArray);
  }

  /**
   * Permet de récupérer les controls du FormArray
   */
  get meetingsControls() {
    return this.meetings.controls;
  }

  /**
   * Permet d'ajouter dynamiquement un formulaire
   */
  addMeetings() {
    const meetingForm = this.fb.group({
      subject: ['', [Validators.required, Validators.maxLength(50),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    })
    this.meetings.push(meetingForm);
  }

  /**
   * Permet de supprimer dynamiquement un formulaire
   * @param meetingIndex
   */
  deleteMeeting(meetingIndex: number) {
    this.meetings.removeAt(meetingIndex);
  }


  /**
   * Emet un meeting, le meeting sera créer par MeetingContainer (event binding)
   */
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
