import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserResolverService } from './core/services/user-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  {
    path: 'view-user',
    component: ViewUserComponent,
    resolve: { user: UserResolverService }
  },
  { path: '**', redirectTo: '/posts', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
