import {Component, Input, OnInit} from '@angular/core';

import { Comment } from '../../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment = {
    id: 0,
    postId: 0,
    parent_id: null,
    user: '',
    date: null,
    content: ''
  };

  constructor() { }

  ngOnInit() {

  }

}
