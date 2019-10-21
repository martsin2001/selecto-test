import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users'
    ) as Observable<User[]>;
  }

  loadUserById(id: number) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    ) as Observable<User>;
  }
}
