import {IEntity} from "./IEntity";

export interface Result extends IEntity{
  idStudent?:number;
  idInterro?:number;
  result :number;
  total:number;
  idLesson:number;
  message:string;
}
