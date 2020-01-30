import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user-service";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { TagService } from 'src/app/services/tag-service.service';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  users: User[];
  tags: Tag[];
  

  constructor(private router: Router, 
    private userService: UserService, 
    private toastr: ToastrService,
    private tagService: TagService) {}

  getAllUsers() {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }

  getUserImageTags(imgUrl: string){
    this.tagService.getTagsFromImagga(imgUrl).subscribe(response => (this.tags = response));
  }

  deleteUserById(id: number) {
    this.userService.deleteUser(id).subscribe(res => {
      console.log(res);
      console.log("User successfully deleted!!");
      this.toastr.success("User successfully deleted!!");
    });
  }

  populateForm(userId: number) {
    this.router.navigate(["user", userId]);
  }

  ngOnInit() {
    this.getAllUsers();
  }
}
