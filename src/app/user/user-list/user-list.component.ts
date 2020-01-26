import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user-service";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private router: Router, private userService: UserService) {}

  getAllUsers() {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }

  deleteUserById(id: number) {
    this.userService.deleteUser(id).subscribe(res => {
      console.log(res);
      console.log("User Deleted!!");
    });
  }

  populateForm(userId: number) {
    this.router.navigate(["user", userId]);
  }

  ngOnInit() {
    this.getAllUsers();
  }
}
