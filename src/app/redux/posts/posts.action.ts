import { Action } from '@ngrx/store';
import { Post } from 'src/app/core/models/posts.interfaces';

export enum PostsTypes {
  loadPosts = '[Posts] load posts',
  postsLoaded = '[Posts] posts loaded',
  postsLoadError = '[Posts] post load error'
}

export class LoadPosts implements Action {
  readonly type = PostsTypes.loadPosts;
}

export class PostsLoaded implements Action {
  readonly type = PostsTypes.postsLoaded;
  constructor(public payload: Post[]) {}
}

export class PostsLoadError implements Action {
  readonly type = PostsTypes.postsLoadError;
}

export type PostsActinos = LoadPosts | PostsLoaded | PostsLoadError;
