import {IEntity} from "./IEntity";

export interface ParticipateMeeting extends IEntity {
  idMeeting?: number;
  idTeacher: number;

}
