import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  posts: Post[] = [];
  isLoading = true;

  constructor(private api: PostService) { }

  ngOnInit() {
    this.api.getPosts()
      .subscribe((res: any) => {
        this.posts = res;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
  }

}
