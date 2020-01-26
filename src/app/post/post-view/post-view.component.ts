import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post-service";
import { Post } from "src/app/models/post";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-view",
  templateUrl: "./post-view.component.html",
  styleUrls: ["./post-view.component.css"]
})
export class PostViewComponent implements OnInit {
  post: Post;
  update: boolean;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  getSinglePost(id: number) {
    this.postService.getPost(id).subscribe(post => (this.post = post));
  }

  forUpdate() {
    this.update = !this.update;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.getSinglePost(id);
    this.update = false;
  }
}
