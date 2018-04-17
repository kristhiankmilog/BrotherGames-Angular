
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private games: Game[]=[];
  homeForm: FormGroup;
  constructor(public gameService: GameService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      name: '',
    });
  }

  onSubmit() {
    //sessionStorage.setItem('name', this.homeForm.get('name').value);
    //this.router.navigate(['/searchGame']);
    console.log(this.homeForm.get('name').value);
    this.gameService.getGame(
      this.homeForm.get('name').value
    ).subscribe(serverResponse => {
      this.games = serverResponse
    }, error => {
      console.log(error);
    });

  }
}