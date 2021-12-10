import {IEntity} from "./IEntity";

export interface Interrogation extends IEntity{
  idInterro?:number;
  idCourse:number;
  subject:string;
  total:number;
}


