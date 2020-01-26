import { Component, OnInit, Input } from "@angular/core";
import { CommentService } from 'src/app/services/comment-service';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';

@Component({
  selector: "app-post-comments",
  templateUrl: "./post-comments.component.html",
  styleUrls: ["./post-comments.component.css"]
})
export class PostCommentsComponent implements OnInit {
  @Input() post: Post;
  comments: Comment[];

  constructor(private commentService: CommentService) {}

  getPostComments(id: number) {
    this.commentService
      .getPostComments(id)
      .subscribe(comments => (this.comments = comments));
  }

  ngOnInit() {
    this.getPostComments(this.post.id);
  }
}
