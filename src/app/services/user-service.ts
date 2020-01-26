import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/users/";

  constructor(private httpService: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpService
      .get<User[]>(this.baseUrl)
      .pipe(map(data => data.map(data => new User().deserialize(data))));
  }

  getUser(id: number): Observable<User> {
    return this.httpService.get<User>(`${this.baseUrl}${id}`).pipe(
      map(data => new User().deserialize(data)),
      catchError(() => throwError("User not found"))
    );
  }

  createUser(user: User): Observable<{}> {
    let body = user;
    return this.httpService.post(this.baseUrl, body, { observe: "response" });
  }

  updateUser(user: User): Observable<{}> {
    let body = user;
    return this.httpService.put(`${this.baseUrl}${user.id}`, body, {
      observe: "response"
    });
  }

  deleteUser(id: number) {
    return this.httpService.delete(`${this.baseUrl}${id}`, {
      observe: "response"
    });
  }
}
