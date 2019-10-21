import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { UsersService } from 'src/app/core/services/users.service';
import { forkJoin, Observable } from 'rxjs';
import { ViewPost, Post } from 'src/app/core/models/posts.interfaces';
import { User } from 'src/app/core/models/user.interfaces';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit {
  viewPosts: Observable<any[]>;

  constructor(
    private router: Router,
    private postsService: PostsService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  goToPost(id: number) {
    this.router.navigate(['posts/view-post'], { queryParams: { id } });
  }

  goToUser(id: number) {
    this.router.navigate(['view-user'], { queryParams: { id } });
  }

  private loadPosts() {
    this.viewPosts = forkJoin([
      this.usersService.getAllUsers() as Observable<User[]>,
      this.postsService.getAllPosts() as Observable<Post[]>
    ]).pipe(
      map(([users, posts]) => {
        return posts.map(post => {
          const user = users.find(u => u.id === post.userId);
          return { ...post, name: user.name };
        });
      })
    );
  }
}
