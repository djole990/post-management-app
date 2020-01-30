import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl="https://api.imagga.com/v2/tags?image_url="

  getTagsFromImagga( imgUrl: string): Observable<Tag[]> {
    return this.httpService
      .get<Tag[]>(`${this.baseUrl}${imgUrl}`, {
        headers: {
          'Authorization': 'Basic YWNjXzc5NWZmYWZhY2FkZTU2ZDo4YWFlYjRjM2EwYjM5MmZmZmQyNGUxZjQ5YTAyOGMyZg=='
        }
      }).pipe(map(data => data['result']['tags']));
  }

  constructor(private httpService: HttpClient) { }
}
