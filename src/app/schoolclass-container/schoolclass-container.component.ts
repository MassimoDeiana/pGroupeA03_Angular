import { Component, OnInit } from '@angular/core';
import {Schoolclass} from "../schoolclass";
import {Teacher} from "../teacher";
import {EntityToDelete} from "../entity-to-delete";
import {SchoolclassService} from "../schoolclass.service";

@Component({
  selector: 'app-schoolclass-container',
  templateUrl: './schoolclass-container.component.html',
  styleUrls: ['./schoolclass-container.component.css']
})
export class SchoolclassContainerComponent implements OnInit {

  schoolclasses: Schoolclass[] = [];

  constructor(private schoolclassService: SchoolclassService) { }

  ngOnInit(): void {
    this.getAll();
  }

  send(schoolclass: Schoolclass){
    this.schoolclassService.create(schoolclass)
      .subscribe(schoolclass=>this.schoolclasses.push(schoolclass));
  }

  delete(entityToDelete: EntityToDelete<Schoolclass>){
    const schoolclass: Schoolclass = this.schoolclasses[entityToDelete.index];

    this.schoolclassService.delete( schoolclass.id||-1)
      .subscribe(()=>{
        this.schoolclasses.splice(entityToDelete.index,1)
      });
  }

  getAll(){
    this.schoolclassService
      .getAll()
      .subscribe(s => this.schoolclasses = s);
  }


  update(schoolclass: Schoolclass){
    this.schoolclassService.update(schoolclass.id || -1, schoolclass)
      .subscribe();
  }
}
