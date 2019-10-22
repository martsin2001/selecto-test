import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { User } from '../models/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User> {
  constructor(private userService: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    const { id } = route.queryParams;
    return this.userService.loadUserById(id);
  }
}
