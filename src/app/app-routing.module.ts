import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostViewComponent },
  { path: 'user', component: NewUserComponent },
  { path: 'user/:id', component: NewUserComponent },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
