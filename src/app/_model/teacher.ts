import {IEntity} from "./IEntity";

export interface Teacher extends IEntity{
  idTeacher?:number
  name:string;
  firstname:string;
  birthdate:Date;
  mail:string;
  password:string;
  token?:string;

}
