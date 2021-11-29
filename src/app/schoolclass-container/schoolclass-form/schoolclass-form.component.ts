import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Schoolclass} from "../../schoolclass";

@Component({
  selector: 'app-schoolclass-form',
  templateUrl: './schoolclass-form.component.html',
  styleUrls: ['./schoolclass-form.component.css']
})
export class SchoolclassFormComponent implements OnInit {

  @Output() schoolclassCreated:EventEmitter<Schoolclass> = new EventEmitter<Schoolclass>()
  form : FormGroup = this.fb.group({
    name: ['', Validators.required],
    year: ['', Validators.required],
    nbStudents: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createAndEmitSchoolclass(){
    this.schoolclassCreated.next({
      name: this.form.value.name,
      year: this.form.value.year,
      nbStudents: this.form.value.nbStudents
    });
  }
}
