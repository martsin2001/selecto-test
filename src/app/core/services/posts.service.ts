import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Comment } from '../models/posts.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get(environment.postsEndpoint) as Observable<Post[]>;
  }

  loadPostById(id: number): Observable<Post> {
    return this.http.get(`${environment.postsEndpoint}/${id}`) as Observable<
      Post
    >;
  }

  loadComments(id: number): Observable<Comment[]> {
    return this.http.get(
      `${environment.postsEndpoint}/${id}/comments`
    ) as Observable<Comment[]>;
  }
}
