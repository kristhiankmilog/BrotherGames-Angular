import { Injectable } from "@angular/core";
import { APIService } from "../common/api.service";
import { AppConfiguration } from "../common/config/app-configuration.service";
import { AuthService } from "../common/auth.service";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { User } from "../models/user";
import { Change } from '../models/change';

import 'rxjs/add/observable/of';

@Injectable()
export class UsersService extends APIService {

  public users: User[] = [
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:whitespace
    new User('Camilo','Garcia','http://farm6.static.flickr.com/5178/5428759578_d6fb2288a4.jpg'),
  ];
  private resourceUrl = 'user/items';
  private cont = 0;
  private changes: Change[] = [];

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) { 
    super(config, authService, http);
  }

  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }
  list(): Observable<User[]> {
    return this.get(this.resourceUrl);
  }

  create(firstname: string, lastname: string, image: string) {
    return this.post(this.resourceUrl,new User(firstname,lastname,image));
  }

  listChanges(): Observable<Change[]> {
    return this.get('user/changes/Camilo');
  }

  createChange(value0:string,value1:string,value2:string,value3:string,bool:boolean):Observable<Change>{
    this.cont+=1;
    return this.post('user/changes/Camilo',new Change(this.cont,value0,value1,value2,value3,bool));

  }

  listAllChanges(): Observable<Change[]> {
    return this.get('user/changes');
  }

}
