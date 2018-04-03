import { Component, OnInit } from '@angular/core';
import {DescriptionGameService } from '../../services/descriptionGame.service';
import { NewGameService} from '../../services/newGame.service';
import { DescriptionGame } from '../../models/description'
import { NewGame } from '../../models/newGame';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-content-games',
  templateUrl: './content-games.component.html',
  styleUrls: ['./content-games.component.css']
})
export class ContentGamesComponent implements OnInit {
  todoForm: FormGroup;
  
  private DescriptionGames: DescriptionGame[] = [];

   constructor(public DescriptionGameService:DescriptionGameService,  
    public formBuilder: FormBuilder   ) {
    
    }

 ngOnInit() {
  this.DescriptionGames=this.DescriptionGameService.list();
  this.todoForm=this.formBuilder.group({
    name:"",completed:''


  });

}

}
