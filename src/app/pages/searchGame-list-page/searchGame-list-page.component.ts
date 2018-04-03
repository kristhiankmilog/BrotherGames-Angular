import { Component, OnInit } from '@angular/core';
import { NewGameService} from '../../services/newGame.service';
import { NewGame } from '../../models/newGame';

@Component({
  selector: 'app-searchGame-list-page',
  templateUrl: './searchGame-list-page.component.html',
  styleUrls: ['./searchGame-list-page.component.css']
})
export class SearchGameListPageComponent implements OnInit {
  private newGames: NewGame[] = [];
  constructor(public newGameService:NewGameService) {
    
      }

      ngOnInit() {
            this.newGames=this.newGameService.list();
        }
      }
    
    
    