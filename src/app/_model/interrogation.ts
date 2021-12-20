import {IEntity} from "./IEntity";

export interface Interrogation extends IEntity{
  idInterro?:number;
  idTeacher:number;
  idLesson:number;
  subject:string;
  total:number;
}


