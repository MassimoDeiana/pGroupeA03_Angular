import { Component, OnInit } from '@angular/core';
import {InterrogationService} from "../_services/_interrogation/interrogation.service";
import {Note} from "../_model/note";
import {EntityToDelete} from "../_model/entity-to-delete";
import {Interrogation} from "../_model/interrogation";

@Component({
  selector: 'app-interro-container',
  templateUrl: './interro-container.component.html',
  styleUrls: ['./interro-container.component.css']
})
export class InterroContainerComponent implements OnInit {

  interros:Interrogation[]=[];
  message:string="interro(s) added";

  constructor(private interroService:InterrogationService) { }

  ngOnInit(): void {
  }

  send(interro:Interrogation){
    this.message="interro(s) added";
    this.interroService.create(interro)
      .subscribe(interro=>this.interros.push(interro),
        error => this.message="Fail to add interro(s)");
    console.log(this.interros)
  }

  delete(entityToDelete:EntityToDelete<Note>){
    const interro:Interrogation = this.interros[entityToDelete.index];

    this.interroService.delete( interro.idInterro||-1)
      .subscribe(()=>{
        this.interros.splice(entityToDelete.index,1)
      });
  }

  getAll(){
    this.interroService
      .getAll()
      .subscribe(t=>this.interros=t);
  }


}
