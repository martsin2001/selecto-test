import { Injectable } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { Store, select } from '@ngrx/store';
import { PostsState } from './posts.reducer';
import { LoadPosts } from './posts.action';
import { getPpsts } from './posts.selectors';

@Injectable({ providedIn: 'root' })
export class PostsFacade {
  posts$ = this.store.pipe(select(getPpsts));

  constructor(private store: Store<PostsState>) {}

  loadPosts() {
    this.store.dispatch(new LoadPosts());
  }
}
