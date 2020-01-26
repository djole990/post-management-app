import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/models/post";
import { PostService } from 'src/app/services/post-service';

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.css"]
})
export class PostDetailsComponent implements OnInit {
  @Input() post: Post;
  @Input() update: boolean;

  constructor(private postService: PostService) {}

  updatePost(){
    this.postService.updatePost(this.post).subscribe(res => {
      console.log(res);
      console.log("Post Updated!!");
      this.update = false;
    })
  }

  ngOnInit() {}
}
