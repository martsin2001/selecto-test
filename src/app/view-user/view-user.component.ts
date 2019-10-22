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
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  private loadUser() {
    this.user = this.activatedRoute.snapshot.data.user;
  }
}
