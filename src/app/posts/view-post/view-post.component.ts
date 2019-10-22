import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post, Comment } from '../../core/models/posts.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  post: Post;
  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.loadPostAndComments();
  }

  private loadPostAndComments() {
    const [post, comments] = this.activatedRoute.snapshot.data.viewPostData as [
      Post,
      Comment[]
    ];
    this.post = post;
    this.comments = comments;
  }
}
