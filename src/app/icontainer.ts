import {EntityToDelete} from "./_model/entity-to-delete";

export interface IContainer<T> {
  send(t:T):void;

  delete(t:EntityToDelete<T>):void;

  getAll():void;

  update(t:T):void;

}
