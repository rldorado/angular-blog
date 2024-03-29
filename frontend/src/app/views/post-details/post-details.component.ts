import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../../services/post.service';
import { CommentService } from '../../services/comment.service';

import { Post } from '../../model/post';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: Post = {
    id: '',
    title: '',
    author: '',
    description: '',
    publish_date: null,
    content: ''
  };
  comments: Comment[] = [];
  isLoading = true;

  constructor(private route: ActivatedRoute, private apiPost: PostService,
              private apiComment: CommentService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getPostDetails(this.route.snapshot.params.id);
  }

  getPostDetails(id: any) {
    this.apiPost.getPost(id)
      .subscribe((data: any) => {
        this.post = data;
        this.getCommentsByPostId();
        this.isLoading = false;
      });
  }

  getCommentsByPostId() {
    this.apiComment.getCommentsByPostId(this.post.id)
      .subscribe((res: any) => {
        this.comments = res;
      }, err => {
        console.log(err);
      });
  }

  openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
