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
  post: Observable<Post>;
  comments: Observable<Comment[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.queryParams;
    this.loadPostById(id);
    this.loadCommentsByPostId(id);
  }

  private loadPostById(id: number) {
    this.post = this.postsService.loadPostById(id);
  }

  private loadCommentsByPostId(id: number) {
    this.comments = this.postsService.loadComments(id);
  }
}
