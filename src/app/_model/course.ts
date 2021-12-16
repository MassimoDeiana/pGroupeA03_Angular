import {IEntity} from "./IEntity";

export interface Course extends IEntity{
  idCourse?:number;
  idLesson:number;
  startTime:Date;
  endTime:Date;
  idTeacher?:number;
  idClass:number;

}
