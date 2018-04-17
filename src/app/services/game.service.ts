import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Comment } from '../models/comment';
import { APIService } from '../common/api.service';
import { Observable } from "rxjs/Observable";
import { AppConfiguration } from "../common/config/app-configuration.service";
import { AuthService } from "../common/auth.service";
import { Http } from "@angular/http";
import { Seller } from "../models/seller";
import 'rxjs/add/observable/of';

@Injectable()
export class GameService extends APIService {
    private resourceUrl = 'searchGame/';
    private game: Game;

    constructor(
        public config: AppConfiguration,
        public authService: AuthService,
        public http: Http
    ) {
        super(config, authService, http);
    }

    getGame(name: string): Observable<Game[]> {
        return this.get(this.resourceUrl + name);

    }
    getTop(): Observable<Game[]> {
        return this.get(this.resourceUrl + top);
    }

    registerCommentByGame(value0: string, value1: string, value2: number): Observable<Game> {

        return this.post(this.resourceUrl + "game", new Comment(value0, value1, value2, 2));

    }
}