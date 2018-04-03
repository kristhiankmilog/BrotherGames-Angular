import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comments-review',
  templateUrl: './comments-review.component.html',
  styleUrls: ['./comments-review.component.css']
})
export class CommentsReviewComponent implements OnInit {
  private comments: Comment[] = [];
  constructor(public commentsService: CommentsService) {

  }



  ngOnInit() {
    this.comments = this.commentsService.list();
  }

}
