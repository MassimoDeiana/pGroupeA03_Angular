import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Schoolclass} from "../../_model/schoolclass";
import {environment} from "../../../environments/environment";

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

  /**
   * Emet une schoolclass
   */
  createAndEmitSchoolclass(){
    this.schoolclassCreated.next({
      name: this.form.value.name,
      year: this.form.value.year,
      nbStudents: this.form.value.nbStudents
    });
  }

  /**
   * Permet de limité les entrée clavier aux chiffres uniquement
   * @param event l'entrée clavier
   */
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


  autoComplete() {
    if (environment.production)
      return;

    this.form.setValue({
      name:"3A",
      year:"3",
      nbStudents:"10",
    });
  }


}
