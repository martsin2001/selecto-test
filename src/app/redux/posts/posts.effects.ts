import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, take, catchError } from 'rxjs/operators';
import { PostsTypes, PostsLoadError, PostsLoaded } from './posts.action';
import { PostsService } from 'src/app/core/services/posts.service';
import { of } from 'rxjs';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  @Effect() loadPosts$ = this.actions$.pipe(
    ofType(PostsTypes.loadPosts),
    switchMap(() => {
      return this.postsService.getAllPosts().pipe(
        take(1),
        map(posts => {
          return new PostsLoaded(posts);
        }),
        catchError(err => of(new PostsLoadError()))
      );
    })
  );
}
