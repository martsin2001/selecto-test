import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/posts.interfaces';
import { PostsFacade } from 'src/app/redux/posts/posts.facade';
import { tap, filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit, OnDestroy {
  viewPosts: Post[];

  private unsubscribe$: Subject<boolean> = new Subject();

  constructor(private router: Router, private postsFacade: PostsFacade) {}

  ngOnInit() {
    this.loadPosts();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  goToPost(id: number) {
    this.router.navigate(['posts/view-post'], { queryParams: { id } });
  }

  goToUser(id: number) {
    this.router.navigate(['view-user'], { queryParams: { id } });
  }

  private loadPosts() {
    this.postsFacade.posts$
      .pipe(
        tap(posts => {
          if (!posts) {
            this.postsFacade.loadPosts();
          }
        }),
        filter(posts => !!posts),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(posts => {
        this.viewPosts = posts;
      });
  }
}
