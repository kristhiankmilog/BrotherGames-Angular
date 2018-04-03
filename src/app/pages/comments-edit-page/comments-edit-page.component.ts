import { Component, OnInit } from '@angular/core';
import {GameService} from'../../services/game.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-comments-edit-page',
    templateUrl: './comments-edit-page.component.html',
    styleUrls: ['./comments-edit-page.component.css']
})
export class CommentsEditPageComponent implements OnInit {
    commentsForm: FormGroup;
    constructor(public gameService: GameService,
                public formBuilder: FormBuilder,
                public router: Router
    ) {
    }

    ngOnInit() {
        this.commentsForm= this.formBuilder.group({
            content: '',
            name: '',
            rate: '',

        });

    }

    onSubmit() {
        this.gameService.registerCommentByGame(
            this.commentsForm.get('content').value,
            this.commentsForm.get('name').value,
          this.commentsForm.get('rate').value
        ).subscribe(serverResponse=>{
            this.router.navigate(['/comments']);
        }, error=>{
            console.log(error);
        });


        this.router.navigate(['/comments']);
    }

}