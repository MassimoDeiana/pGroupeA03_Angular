import {IEntity} from "./IEntity";

export interface Admin extends IEntity{
  idAdmin?:number;
  mail:string;
  password:string;
  token?:string;
}
