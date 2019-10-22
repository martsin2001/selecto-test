import { Injectable } from '@angular/core';
import { PostsService } from './posts.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { Post, Comment } from '../models/posts.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ViewPostResolverService implements Resolve<[Post, Comment[]]> {
  constructor(private postsService: PostsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<[Post, Comment[]]> {
    const { id } = route.queryParams;
    return forkJoin([
      this.postsService.loadPostById(id),
      this.postsService.loadComments(id)
    ]);
  }
}
