import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-templatedriven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css'],

})
export class TemplatedrivenComponent {
  user = {
    fName: '',
    lName: '',
    email: '',
    textarea:'',

  };

  username='';

  message='Are you studying in ECE Dept?';

  changeMessage() {
    this.message = 'OKAY Your studying in ECE dept.';
  }
  changeMessage2() {
    this.message = 'So Your Not studying in ECE dept.';
  }

  updateUsername(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  onSubmit(form: any) {
    console.log(form.value, 'useeeeeee');
  }

  submitted(){
    alert('You have successfully submitted!')
  }

constructor(private apiservice : PostsService){
  this.getUser()
}
  getUser(){
    this.apiservice.getPost().subscribe((data)=> {
      console.log(data, 'templetwee')
      // this.data1 = data as any[];
    })
  }
}
