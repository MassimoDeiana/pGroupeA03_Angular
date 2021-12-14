import {IEntity} from "./IEntity";

export interface Course extends IEntity{
  idCourse?:number
  startTime:Date;
  endTime:Date;
  subject:string;
  idTeacher:number;
  idClass:number;

}
