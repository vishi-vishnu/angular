import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
  standalone:true,
  imports: [CommonModule, RouterModule,FormsModule],
})

export class LifecycleComponent implements DoCheck,OnInit{
  message = '';

  title = 'hello';
  prevTitle = 'hello';

  ngOnInit(): void {
    this.message = 'Welcome to KLN colleg of engineering';
  }


  ngDoCheck(): void {
    if (this.title !== this.prevTitle){
      console.log("Your title has been changed",this.title );
      this.prevTitle = this.title;
    }
  }
}


