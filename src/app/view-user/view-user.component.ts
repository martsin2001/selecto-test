import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { User } from '../core/models/user.interfaces';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  user: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.loadPostById();
  }

  private loadPostById() {
    const { id } = this.activatedRoute.snapshot.queryParams;
    this.user = this.usersService.loadUserById(id);
  }
}
