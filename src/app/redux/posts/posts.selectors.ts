import { createSelector } from '@ngrx/store';
import { getPostState } from './posts.reducer';

export const getPpsts = createSelector(
  getPostState,
  state => state.posts
);
