import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user-service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  user: User;
  title: string;
  update: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),

    address: new FormGroup({
      street: new FormControl(),
      suite: new FormControl(),
      city: new FormControl(),
      zipcode: new FormControl(),

      geo: new FormGroup({
        lat: new FormControl(),
        lng: new FormControl()
      })
    }),

    phone: new FormControl(),
    website: new FormControl(),

    company: new FormGroup({
      name: new FormControl(),
      catchPhrase: new FormControl(),
      bs: new FormControl()
    })
  });

  saveUser() {
    this.user = this.form.value;

    if (!this.update) {
      this.userService.createUser(this.user).subscribe(res => {
        console.log(res);
        console.log("User successfully created!!");
        this.toastr.success("User successfully created!!")
      });
    } else {
      this.userService.updateUser(this.user).subscribe(res => {
        console.log(res);
        console.log("User successfuly updated!!");
        this.toastr.success("User successfully updated!!")
      });
    }
  }

  ngOnInit() {
    this.title = "New User";
    this.update = false;

    this.route.paramMap.subscribe(params => {
      const userId = +params.get("id");
      if (userId) {
        this.update = true;
        this.title = "Edit User";
        this.userService.getUser(userId).subscribe(user => {
          this.form.patchValue({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: {
              street: user.address.street,
              suite: user.address.suite,
              city: user.address.city,
              zipcode: user.address.zipcode,

              geo: {
                lat: user.address.geo.lat,
                lng: user.address.geo.lng
              }
            },
            phone: user.phone,
            website: user.website,
            company: {
              name: user.company.name,
              catchPhrase: user.company.catchPhrase,
              bs: user.company.bs
            }
          });
        });
      }
    });
  }
}
