import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  // getTags(): Observable <Tag[]>{
  //   return this.httpService.get<Tag[]>('https://api.imagga.com/v2/tags?image_url=https://pmcdeadline2.files.wordpress.com/2019/09/donald-trump.jpg', {
  //     headers: {
  //       'Authorization': 'Basic YWNjXzc5NWZmYWZhY2FkZTU2ZDo4YWFlYjRjM2EwYjM5MmZmZmQyNGUxZjQ5YTAyOGMyZg=='
  //     }     
  //   }).pipe(map(data => data.map(data => new Tag().deserialize(data))));
  // }

  getTags(): Observable<Result> {
    return this.httpService
      .get<Result>('https://api.imagga.com/v2/tags?image_url=https://pmcdeadline2.files.wordpress.com/2019/09/donald-trump.jpg', {
        headers: {
          'Authorization': 'Basic YWNjXzc5NWZmYWZhY2FkZTU2ZDo4YWFlYjRjM2EwYjM5MmZmZmQyNGUxZjQ5YTAyOGMyZg=='
        }
      });
  }

  constructor(private httpService: HttpClient) { }
}
