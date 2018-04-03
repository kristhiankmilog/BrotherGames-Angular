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
    private  comm:Comment[]=[new Comment('Exelente juego lo recomiendo para PSP','Laura Sanchez',5,1)];
    private seller1:Seller[]=[new Seller('$359.900 ','www.Nintendo.com'),new Seller('$500 000 ','listado.mercadolibre.com.mx/juegos-de-mario-bros-gratis')];
     private games: Game[] = [new Game(1,'Super Mario Bros.','/assets/images/mario.jpg ',this.comm,'Is a platform video game, designed by Shigeru Miyamoto, released on September 13, 1985 and produced by the company Nintendo, for the Nintendo Entertainment System (NES). The game describes the adventures of brothers Mario and Luigi, characters who already starred in the arcade Mario Bros. of 1983.' +
      ' This time both must rescue Princess Peach Mushroom Kingdom who was kidnapped by the King' +
         ' of the Koopas, Bowser.',5,this.seller1)];
    constructor( public gameService:GameService,
                 public router: Router ) { }


      ngOnInit() {

            this.gameService.getGame('sss');
        }
      }

