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
    textarea: '',
  };

  username = '';
  message = 'Are you studying in ECE Dept?';

  constructor(private apiservice: PostsService) {
    // If you want to test a GET request on load
    this.getUser();
  }

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
    console.log('Form Data:', form.value);

    // we call the service to POST form data

    this.apiservice.submitFormData(form.value).subscribe(
      (response) => {
        console.log('Response from Server:', response);
        alert('Form submitted successfully!');
      }
    );
  }

  getUser() {
    this.apiservice.getPost().subscribe((data) => {
      console.log('GET request data:', data);
    });
  }

  // submitted() {
  //   alert('You have successfully submitted!');
  // }
}
