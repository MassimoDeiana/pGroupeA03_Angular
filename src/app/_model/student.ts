import {IEntity} from "./IEntity";

export interface Student extends IEntity{
  idStudent?:number;
  name:String;
  firstname:String;
  birthdate:Date;
  mail:String;
}
