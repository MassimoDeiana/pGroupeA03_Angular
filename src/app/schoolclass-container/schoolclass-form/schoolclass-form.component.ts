import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Schoolclass} from "../../_model/schoolclass";

@Component({
  selector: 'app-schoolclass-form',
  templateUrl: './schoolclass-form.component.html',
  styleUrls: ['./schoolclass-form.component.css']
})
export class SchoolclassFormComponent implements OnInit {

  @Output() schoolclassCreated:EventEmitter<Schoolclass> = new EventEmitter<Schoolclass>()
  form : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50),Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
    year: ['', [Validators.required, Validators.max(7), Validators.pattern("^[0-9]*$")]],
    nbStudents: ['', [Validators.required, Validators.max(30), Validators.pattern("^[0-9]*$")]]
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

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
