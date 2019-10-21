import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path: '', redirectTo: 'view-posts' },
  { path: 'view-posts', component: ViewPostsComponent },
  { path: 'view-post', component: ViewPostComponent }
];

@NgModule({
  declarations: [ViewPostsComponent, ViewPostComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule]
})
export class PostsModule {}
