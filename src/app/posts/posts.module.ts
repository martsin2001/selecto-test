import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ViewPostResolverService } from '../core/services/view-post-resolver.service';
import { StoreModule } from '@ngrx/store';
import { PostsEffects } from '../redux/posts/posts.effects';
import { EffectsModule } from '@ngrx/effects';
import { postsReducer } from '../redux/posts/posts.reducer';

const routes: Routes = [
  { path: '', redirectTo: 'view-posts' },
  {
    path: 'view-posts',
    component: ViewPostsComponent
  },
  {
    path: 'view-post',
    component: ViewPostComponent,
    resolve: {
      viewPostData: ViewPostResolverService
    }
  }
];

@NgModule({
  declarations: [ViewPostsComponent, ViewPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    StoreModule.forFeature('posts-state', postsReducer),
    EffectsModule.forRoot([PostsEffects])
  ]
})
export class PostsModule {}
