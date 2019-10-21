import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

enum CurrentRoute {
  viewPost = 'View Post',
  viewPosts = 'View Posts',
  viewUser = 'View User'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentRoute: CurrentRoute = CurrentRoute.viewPost;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.subscribeToRouter();
  }

  goBack() {
    this.location.back();
  }

  private subscribeToRouter() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.isActive('/posts/view-posts', false)) {
          this.currentRoute = CurrentRoute.viewPosts;
        } else if (this.router.isActive('/posts/view-post', false)) {
          this.currentRoute = CurrentRoute.viewPost;
        } else {
          this.currentRoute = CurrentRoute.viewUser;
        }
      }
    });
  }
}
