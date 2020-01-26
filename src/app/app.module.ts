import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from "./post/post.component";
import { CommentComponent } from "./comment/comment.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PostCommentsComponent } from './post/post-view/post-comments/post-comments.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { PostDetailsComponent } from './post/post-view/post-details/post-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './post/post-view/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    HeaderComponent,
    FooterComponent,
    PostCommentsComponent,
    PostListComponent,
    PostViewComponent,
    PostDetailsComponent,
    NewUserComponent,
    UserListComponent,
    UserDetailsComponent 
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
