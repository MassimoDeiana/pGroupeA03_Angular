import { Component, OnInit } from '@angular/core';
import {InterrogationService} from "../_services/_interrogation/interrogation.service";
import {Note} from "../_model/note";
import {EntityToDelete} from "../_model/entity-to-delete";
import {Interrogation} from "../_model/interrogation";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";

@Component({
  selector: 'app-interro-container',
  templateUrl: './interro-container.component.html',
  styleUrls: ['./interro-container.component.css']
})
export class InterroContainerComponent implements OnInit {

  interros:Interrogation[]=[]; //Liste des interros
  message:string="interro(s) added";
  pageTitle:string="Interrogation";

  constructor(private interroService:InterrogationService,
              private authService : AuthenticationTeacherService) { }

  ngOnInit(): void {
    this.getByIdTeacher(this.authService.currentUserValue.idTeacher!);
  }

  /**
   * Permet de créer une interro
   * On appelle la méthode create du service permettant de faire une requête http (voir entity service)
   * On ajoute l'interro au flux de donnée via le subscribe
   *
   * @param interro L'interro à créer
   */
  send(interro:Interrogation){
    this.message="interro(s) added";
    this.interroService.create(interro)
      .subscribe(interro=>this.interros.push(interro),
        error => this.message="Fail to add interro(s)");
    console.log(this.interros)
  }

  /**
   * Permet de supprimer une interro
   * @param entityToDelete L'interro à supprimer
   */
  delete(entityToDelete:EntityToDelete<Interrogation>){
    const interro:Interrogation = this.interros[entityToDelete.index];

    this.interroService.delete( interro.idInterro||-1)
      .subscribe(()=>{
        this.interros.splice(entityToDelete.index,1)
      });
  }

  /**
   * Permet de récuperer les interros lié au teacher
   * @param id l'id du teacher
   */
  getByIdTeacher(id:number){
    this.interroService
      .getByIdTeacher(id)
      .subscribe(t=>this.interros=t);
  }


}
