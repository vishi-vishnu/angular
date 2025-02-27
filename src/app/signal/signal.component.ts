import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { PostsService } from '../posts.service';
import { ChildpageComponent } from './childpage/childpage.component';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, ChildpageComponent],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent implements OnInit{
  a = 10;
  b = 20;
  c = this.a + this.b;
 
  val1 = signal(5);
  val2 = signal(5);
  total = computed(() => this.val1() + this.val2());

  balance = signal(100);
  getroute = 0

  // private http = inject(HttpClient)
  // private api = new PostsService;
  constructor(private http : HttpClient, private apiservice : PostsService, private route : ActivatedRoute) {

     console.log(this.route.snapshot?.params?.['id'])
     let queryid = this.route.snapshot.queryParamMap.get('name') || '';
     console.log(queryid, 'queryid')
     this.getroute = this.route.snapshot?.params?.['id'];
    effect(() => {
      console.log(`Val1 updated: ${this.val1()}`);
    });
    effect(() => {
      console.log("Phone: Balance updated to $", this.balance());
    });
    effect(() => {
      console.log("Email: Balance updated to $", this.balance());
    });
    effect(() => {
      console.log("Financial balance: Balance updated to $", this.balance());
    });

    this.balance.set(150);
    this.balance.update((value: number) => value- 50);
  }
  
  updateVal() {
    console.log(`Total Before: ${this.c}, ${this.total()}`);
    this.b = 10;
    this.c = this.a + this.b;
    this.val1.update(val => val + 5);
    console.log(`Total After: ${this.c}, ${this.total()}`);
  }
  
  ngOnInit(): void {
    this.getPost();
    this.getUser();
  }
  //Api service
   data1: any[] = [];

    getPost(){
      console.log('data', 'dataaaaaa')
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=> {
      console.log(data, 'dataaaaaa')
      // this.data1 = data as any[];
    })
  }

  getUser(){
    console.log('data', 'dataaaaaa')

    this.apiservice.getPost().subscribe((data)=> {
      console.log(data, '1111111')
      this.data1 = data as any[];
    })
  };


  //Output decorder
  childdata = "";
  getChilddata(value: any){
 console.log(value, 'value')
 this.childdata = value
  }
}
