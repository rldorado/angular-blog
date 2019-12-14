import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../post/post';

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
  isLoading = true;

  constructor(private route: ActivatedRoute, private api: PostService) { }

  ngOnInit() {
    this.getPostDetails(this.route.snapshot.params.id);
  }

  getPostDetails(id: any) {
    this.api.getPost(id)
      .subscribe((data: any) => {
        this.post = data;
        this.post.id = data.id;
        this.isLoading = false;
      });
  }

}
