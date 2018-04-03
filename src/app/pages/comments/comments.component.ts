import { Component, OnInit } from '@angular/core';
import { CommentsService} from '../../services/comments.service';
import { Comment } from '../../models/comment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentsForm: FormGroup;
  constructor(public commentsService:CommentsService ,
    public formBuilder: FormBuilder,
    public router: Router
  ) {                          
  }

  ngOnInit() {
    this.commentsForm = this.formBuilder.group({
    name:'',
    description: '',

  });

}

onSubmit() {
  this.commentsService.create(
  this.commentsForm.get('name').value,
    this.commentsForm.get('description').value
    

  );


  this.router.navigate(['/commentsreview']);
}

}
