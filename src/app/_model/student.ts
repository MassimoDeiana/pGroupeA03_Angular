import {IEntity} from "./IEntity";

export interface Student extends IEntity{
  idStudent?:number;
  name:String;
  firstName:String;
  birthdate:Date;
  mail:String;
  password:String;
  idClass:number;
  token?:string;
}
