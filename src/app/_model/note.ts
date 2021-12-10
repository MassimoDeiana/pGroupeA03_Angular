import {IEntity} from "./IEntity";

export interface Note extends IEntity{
  idNote?:number
  idTeacher?:number;
  idStudent:number;
  idInterro:number;
  dateNote:Date;
  result:number;
  message:string;

}
