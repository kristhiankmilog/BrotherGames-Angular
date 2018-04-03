import { Injectable } from "@angular/core";
import { APIService } from "../common/api.service";
import { AppConfiguration } from "../common/config/app-configuration.service";
import { AuthService } from "../common/auth.service";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { User } from "../models/user";
import 'rxjs/add/observable/of';

@Injectable()
export class UsersService extends APIService {
  public cacheUser: User;

  public users: User[] = [
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:whitespace
    new User(1,'Camilo','Garcia','http://farm6.static.flickr.com/5178/5428759578_d6fb2288a4.jpg','Souls','Gamer'),
  ];
  private resourceUrl = 'user';
constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) { 
    super(config, authService, http);
  }

  login(email: string, password: string) {
    return this.post('user/login', { email, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }
  list(): Observable<User[]> {
    return this.get(this.resourceUrl);

    }
    create(id:number,firstname: string, lastname: string, image: string,username: string, description: string) {
      return this.post(this.resourceUrl,new User(id,firstname,lastname,image,username,description));

}

registerUser(username: string, email: string, password: string,image: string, description:string) {
  return this.post('user/', { username, email, password,image,description }).map(loginResponse => {
      if (loginResponse) {



      }

  });

}
getUserById(id: Number) {

  return this.get('user/id/' + id);
}
updateUser(name: string, email: string, image: string, password: string) {
  return this.post('user/updateprofile/' + this.cacheUser.id, { id: this.cacheUser.id, name: name, email: email,
    image: image, password: password, confirmPassword: password}).map(updateResponse => {
        if (updateResponse) { 
        }
    });

}

getUser(email:string){

  return this.get(this.resourceUrl+'/'+email)

}
currentUser(){

  return this.get(this.resourceUrl+'/'+sessionStorage.getItem("email"));

}
}
