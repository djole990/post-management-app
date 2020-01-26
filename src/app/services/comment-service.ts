import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Comment } from "../models/comment";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private httpService: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.httpService
      .get<Comment[]>(this.baseUrl)
      .pipe(map(data => data.map(data => new Comment().deserialize(data))));
  }

  getPostComments(id: number): Observable<Comment[]> {
    return this.httpService
      .get<Comment[]>(
        `${this.baseUrl}?postId=${id}`
      )
      .pipe(map(data => data.map(data => new Comment().deserialize(data))));
  }
}
