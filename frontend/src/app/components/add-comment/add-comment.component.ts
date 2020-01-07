import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { CommentService } from '../../services/comment.service';
import { Post } from '../../model/post';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Input() post: Post;
  commentForm: FormGroup;
  comment: Comment;

  constructor(private api: CommentService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      content: new FormControl('', [Validators.required])
    });
  }

  addComment() {
    this.api.addCommentByPostId(this.commentForm.value, Number(this.post.id))
      .subscribe(() => {
        this.modalService.dismissAll();
        this.router.navigate(['post/details/', this.post.id]);
      }, error => console.log(error));
  }

}
