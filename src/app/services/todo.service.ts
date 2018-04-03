import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { APIService } from '../common/api.service';
// tslint:disable-next-line:quotemark
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class TodoService extends APIService{
  private resourceUrl = 'api/todo';

  
      create(value:string,value2:Number,bool:boolean):Observable<Todo>{
        return this.post(this.resourceUrl,new Todo(value,value2,bool));

      }
      
      list(): Observable<Todo[]> {
        return this.get(this.resourceUrl);
      }

}
