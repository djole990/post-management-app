import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() post: Post;
  user: User;

  constructor(private userService: UserService) {}

  getSingleUser(id: number) {
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }

  ngOnInit() {
    this.getSingleUser(this.post.userId);
  }
}
