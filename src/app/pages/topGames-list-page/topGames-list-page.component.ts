import { Component, OnInit } from '@angular/core';

import { Game } from '../../models/game';
import { FormGroup, FormBuilder } from '@angular/forms';
import {GameService} from "../../services/game.service";
import {Seller} from "../../models/seller";
import { Router } from '@angular/router';
import {Comment} from "../../models/comment";

@Component({
    selector: 'app-topGames-list-page',
    templateUrl: './topGames-list-page.component.html',
    styleUrls: ['./topGames-list-page.component.css']
})
export class TopGamesListPageComponent implements OnInit {

    private  comm:Comment[]=[new Comment('Exelente juego lo recomiendo para PSP','Laura Sanchez',5,1)];
    private seller1:Seller[]=[new Seller('$359.900 ','www.Nintendo.com'),new Seller('$500 000 ','listado.mercadolibre.com.mx/juegos-de-mario-bros-gratis')];
    private games: Game[] = [new Game(1,'Super Mario Bros.','/assets/images/mario.jpg ',this.comm,'Is a platform video game, designed by Shigeru Miyamoto,' +
        ' released on September 13, 1985 and produced by the company Nintendo, for the Nintendo Entertainment System (NES). The game describes the adventures of brothers Mario and Luigi, characters who already starred in the arcade Mario Bros. of 1983.' +
        ' This time both must rescue Princess Peach Mushroom Kingdom who was kidnapped by' +
        ' the King of the Koopas, Bowser.',5,this.seller1),new Game(1,'need for speed','/assets/images/need.jpg',[],'Set in the underworld of Fortune Valley, you and your crew are reunited by a search for vengeance against The House,' +
        ' a nefarious cartel that rules the city’s casinos, criminals, and cops. In this corrupt gambler’s paradise,the stakes are high and The House always wins. Play a variety of events as Tyler, Mac, and Jess. Earn the respect of the Valley’s underground and compete in the ' +
        'ultimate race to finally take down The House.',5,[])];
    constructor( public gameService:GameService,
                 public router: Router ) { }


    ngOnInit() {
        this.gameService.getTop(1);
    }




}
