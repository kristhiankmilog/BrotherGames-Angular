import { Injectable } from '@angular/core';
import { Change } from '../models/change';
import { APIService } from '../common/api.service';
// tslint:disable-next-line:quotemark
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';



@Injectable()
export class ChangeService extends APIService{
  private resourceUrl = 'api/change';
  private cont = 0;
  private changes: Change[] = [];
  
      create(value0:string,value1:string,value2:string,value3:string,bool:boolean):Observable<Change>{
        this.cont+=1;
        return this.post(this.resourceUrl,new Change(this.cont,value0,value1,value2,value3,bool));

      }
      
      list(): Observable<Change[]> {
        return this.get(this.resourceUrl);
      }

}