import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { APIService } from '../common/api.service';
// tslint:disable-next-line:quotemark
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class CommentsService {
   private comments: Comment[]=[
     new Comment('Johanita','Juego muy bueno' ),

   ];
    constructor(){}

     list(): Comment[] {
             return this.comments;
           }
      create(name: string, description: string){
        this.comments.push(new Comment(name,description))

      }
}
