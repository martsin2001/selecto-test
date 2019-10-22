import { Post } from 'src/app/core/models/posts.interfaces';
import { PostsActinos, PostsTypes } from './posts.action';
import { createFeatureSelector } from '@ngrx/store';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: null
};

export function postsReducer(
  state: PostsState = initialState,
  action: PostsActinos
) {
  switch (action.type) {
    case PostsTypes.postsLoaded: {
      return { posts: action.payload };
    }
    case PostsTypes.postsLoadError: {
      return { posts: null };
    }
    default: {
      return state;
    }
  }
}

export const getPostState = createFeatureSelector<PostsState>('posts-state');
