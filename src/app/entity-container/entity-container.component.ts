import { Component, OnInit } from '@angular/core';
import {Teacher} from "../teacher";
import {TeacherService} from "../teacher.service";
import {EntityToDelete} from "../entity-to-delete";
import {EntityService} from "../entity.service";
import {IContainer} from "../icontainer";

@Component({
  selector: 'app-entity-container',
  templateUrl: './entity-container.component.html',
  styleUrls: ['./entity-container.component.css']
})
//Faire une interface entity pour les id
export abstract class EntityContainerComponent<T> implements OnInit, IContainer<T> {

  entities:T[]=[];

  constructor(private entityService:EntityService<T>) { }

  ngOnInit(): void {
    this.getAll();
  }

  send(e:T){
    this.entityService.create(e)
      .subscribe(e=>this.entities.push(e));
  }

  delete(entityToDelete:EntityToDelete<T>){
    const t:T = this.entities[entityToDelete.index];

   /* this.entityService.delete( t.id||-1)
      .subscribe(()=>{
        this.entities.splice(entityToDelete.index,1)
      });*/
  }

  getAll(){
    this.entityService
      .getAll()
      .subscribe(t=>this.entities=t);
  }


  update(e:T){
    //this.entityService.update(e.id || -1,e)
     // .subscribe();
  }

}
