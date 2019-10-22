import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(environment.userEndpoint) as Observable<User[]>;
  }

  loadUserById(id: number) {
    return this.http.get(`${environment.userEndpoint}/${id}`) as Observable<
      User
    >;
  }
}
