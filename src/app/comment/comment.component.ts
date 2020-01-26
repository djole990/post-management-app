import { Component, OnInit } from "@angular/core";
import { Comment } from "../models/comment";
import { CommentService } from "../services/comment-service";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  comment: Comment;
  comments: Comment[];

  constructor(private commentService: CommentService) {}

  getAllComments() {
    this.commentService
      .getComments()
      .subscribe(comments => (this.comments = comments));
  }

  ngOnInit() {
    this.getAllComments();
  }
}
