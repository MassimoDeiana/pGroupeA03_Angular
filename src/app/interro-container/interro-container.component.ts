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

  interros:Interrogation[]=[];
  message:string="interro(s) added";
  pageTitle:string="Interrogation";

  constructor(private interroService:InterrogationService,
              private authService : AuthenticationTeacherService) { }

  ngOnInit(): void {
    this.getByIdTeacher(this.authService.currentUserValue.idTeacher!);
  }

  send(interro:Interrogation){
    this.message="interro(s) added";
    this.interroService.create(interro)
      .subscribe(interro=>this.interros.push(interro),
        error => this.message="Fail to add interro(s)");
    console.log(this.interros)
  }

  delete(entityToDelete:EntityToDelete<Interrogation>){
    const interro:Interrogation = this.interros[entityToDelete.index];

    this.interroService.delete( interro.idInterro||-1)
      .subscribe(()=>{
        this.interros.splice(entityToDelete.index,1)
      });
  }

  getByIdTeacher(id:number){
    this.interroService
      .getByIdTeacher(id)
      .subscribe(t=>this.interros=t);
  }


}
