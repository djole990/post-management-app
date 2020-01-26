import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post";
import { PostService } from "src/app/services/post-service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {}

  getAllPosts() {
    this.postService.getPosts().subscribe(posts => (this.posts = posts));
  }

  deletePostById(id: number){
    this.postService.deletePost(id).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    this.getAllPosts();
  }
}
