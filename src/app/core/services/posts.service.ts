import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Comment } from '../models/posts.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/posts'
    ) as Observable<Post[]>;
  }

  loadPostById(id: number): Observable<Post> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ) as Observable<Post>;
  }

  loadComments(id: number): Observable<Comment[]> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    ) as Observable<Comment[]>;
  }
}
