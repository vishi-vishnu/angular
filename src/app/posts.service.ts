import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

//private http = inject(HttpClient);
 public URL = "https://jsonplaceholder.typicode.com/posts"
   constructor(private http : HttpClient) { }
  getPost(): Observable<any>{
    return this.http.get(this.URL)
  }
}
