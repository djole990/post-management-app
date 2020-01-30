import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagServiceService {

  getTags() {
    return this.httpService.get('https://api.imagga.com/v2/tags?image_url=https://pmcdeadline2.files.wordpress.com/2019/09/donald-trump.jpg', {
      headers: {
        'Authorization': 'Basic YWNjXzc5NWZmYWZhY2FkZTU2ZDo4YWFlYjRjM2EwYjM5MmZmZmQyNGUxZjQ5YTAyOGMyZg=='
      }     
    }).pipe(map(res => {
      console.log(res);
    }));
  }
  
  

  constructor(private httpService: HttpClient) { }
}
