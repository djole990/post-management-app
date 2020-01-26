import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/posts/";

  constructor(private httpService: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpService
      .get<Post[]>(this.baseUrl)
      .pipe(map(data => data.map(data => new Post().deserialize(data))));
  }

  getPost(id: number): Observable<Post> {
    return this.httpService
      .get<Post>(`${this.baseUrl}${id}`)
      .pipe(
        map(data => new Post().deserialize(data)),
        catchError(() => throwError("Post not found"))
      );
  }

  updatePost(post: Post): Observable<{}> {
    let body = post;
    return this.httpService.put(
      `${this.baseUrl}${post.id}`,
      body,
      { observe: "response" }
    );
  }

  deletePost(id: number) {
    return this.httpService.delete(
      `${this.baseUrl}${id}`,
      { observe: "response" }
    );
  }
}
