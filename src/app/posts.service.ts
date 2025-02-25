import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ This makes the service available everywhere in the app
})

export class PostsService {
//private http = inject(HttpClient);
 public URL = "https://jsonplaceholder.typicode.com/posts"
 
 //we  are injecting here by constructor//
   constructor(private http : HttpClient) { }
  getPost(): Observable<any>{
    return this.http.get(this.URL)
  }
} 
