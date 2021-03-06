import { Component, OnInit } from '@angular/core';
import {SchoolclassService} from "../_services/_schoolclass/schoolclass.service";
import {EntityToDelete} from "../_model/entity-to-delete";
import {ej} from "@syncfusion/ej2-data/dist/global";
import data = ej.data;
import {Schoolclass} from "../_model/schoolclass";

@Component({
  selector: 'app-schoolclass-container',
  templateUrl: './schoolclass-container.component.html',
  styleUrls: ['./schoolclass-container.component.css']
})
export class SchoolclassContainerComponent implements OnInit {

  schoolclasses: Schoolclass[] = [];
  pageTitle: string="Class management";

  constructor(private schoolclassService: SchoolclassService) { }

  ngOnInit(): void {
    this.getAll();
  }

  /**
   * Permet de créer une schoolClass
   * On appelle la méthode create du service permettant de faire une requête http (voir entity service)
   * On ajoute la schoolClass au flux de donnée via le subscribe
   *
   * @param schoolclass La schoolClass à créer
   */
  send(schoolclass: Schoolclass){
    this.schoolclassService.create(schoolclass)
      .subscribe(schoolclass=>this.schoolclasses.push(schoolclass));
  }

  /**
   * permet de supprimer une schoolClass
   * @param entityToDelete la schoolClass à supprimer
   */
  delete(entityToDelete: EntityToDelete<Schoolclass>){
    const schoolclass: Schoolclass = this.schoolclasses[entityToDelete.index];

    this.schoolclassService.delete( schoolclass.id||-1)
      .subscribe(
        data => this.schoolclasses.splice(entityToDelete.index,1),
        error => window.alert("At least one student remains in the class.")
      );
  }

  /**
   * Permet de récuperer toutes les schoolClass
   */
  getAll(){
    this.schoolclassService
      .getAll()
      .subscribe(s => this.schoolclasses = s);
  }

}
