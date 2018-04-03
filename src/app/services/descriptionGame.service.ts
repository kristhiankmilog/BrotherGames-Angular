
import { Injectable } from '@angular/core';
import { DescriptionGame} from '../models/description';
import { APIService } from '../common/api.service';
// tslint:disable-next-line:quotemark
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';


@Injectable()
export class DescriptionGameService {
   private DescriptionGames: DescriptionGame[]=[
     new DescriptionGame('https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1600w.jpg','Mario Bros','Diseñada bajo la premisa de una buena relación calidad precio, Nintendo 2DS es perfecta como primera consola y permite jugar los títulos más populares de Nintendo 3DS en 2D. Con Nintendo 2DS podrás disfrutar de juegos, aplicaciones y funciones increíbles que te permitirán conectar con amigos y con la comunidad global de Nintendo.','$359.900 ','GameStory','www.Nintendo.com'),
     new DescriptionGame('assets/images/mario.jpg','Mario Bros','The announcement sent Nintendo d expect. But fans hoping for iOS versions of early Super Mario Bros and Zelda games, or even ports of N64-era classics, should park those expectations, as Ninty will be working on new games from the ground up, tailored to pocket-sized touchscreen devices','$500 000 ','TiendaOnline','listado.mercadolibre.com.mx/juegos-de-mario-bros-gratis'),
     
     
    
   ];
    constructor(){}

     list(): DescriptionGame[] {
             return this.DescriptionGames;
           }
      create(photo:string,name: string, description: string, price:string,storeGame:string,link:string){
        this.DescriptionGames.push(new DescriptionGame(photo,name,description,price,storeGame,link))

      }
}