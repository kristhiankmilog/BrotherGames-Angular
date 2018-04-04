import { Component, OnInit } from '@angular/core';

import { Game } from '../../models/game';
import {GameService} from "../../services/game.service";
import {Comment} from "../../models/comment";
import {Seller} from "../../models/seller";
import { Change } from '../../models/change';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchGame-list-page',
  templateUrl: './searchGame-list-page.component.html',
  styleUrls: ['./searchGame-list-page.component.css']
})
export class SearchGameListPageComponent implements OnInit {

    private game:Game
     private name:string
    constructor( public gameService:GameService,
                 public router: Router ) { }


      ngOnInit() {
            var data = this.name=sessionStorage.getItem(name);
            this.gameService.getGame('Need for speed').subscribe(gameResponse => {
                  this.game=gameResponse;
      })}


      }
      

