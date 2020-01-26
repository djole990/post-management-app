import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/models/post";
import { PostService } from 'src/app/services/post-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.css"]
})
export class PostDetailsComponent implements OnInit {
  @Input() post: Post;
  @Input() update: boolean;

  constructor(private postService: PostService, private toastr: ToastrService) {}

  updatePost(){
    this.postService.updatePost(this.post).subscribe(res => {
      console.log(res);
      console.log("Post successfully updated!!");
      this.update = false;
      this.toastr.success('Post successfully updated!')
    })
  }

  ngOnInit() {}
}
